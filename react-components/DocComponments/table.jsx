import React from 'react'
import ReactMarkdown from 'react-markdown'

// decide whether a property should be ignored based on keywords in the property description
const isIgnored = (descriptionInfo) => {
  const keywords = ['deprecated', 'experimental', 'not supported', 'internal', 'to do']
  return keywords.some(keyword => descriptionInfo.toLowerCase().includes(keyword))

}

export const TableWrapper = (props) => {
  return <PropertyTable {...props} />
}

/**
 * 
 * @param {object} param0 
 * @returns {React.Component} <div><table>...</table></div>
 */
const PropertyTable = ({ objName, GoslingSchema, includeDescription = false }) => {

  var objDef = GoslingSchema["definitions"]
  /**
   *  enable the parse of nested properties
   * e.g., For type boundingBox
   * objName = DisplacementTransform-properties-boundingBox 
   * =>  objDef = goslingSchema['definitions']['DisplaceTransform']['properties']['boundingBox]
   */
  objName.split('-').forEach(k => {
    objDef = objDef[k]
  })

  const tableHead = <tr>
    <th> property </th>
    <th> type </th>
    <th> description </th>
  </tr>

  let tableRows = []


  if (objDef['properties']) {

    //// sort properties based on whether it is required
    const propertyList = Object.keys(objDef['properties']).sort((a, b) => (objDef.required || '').includes(a) - (objDef.required || '').includes(b)).reverse()



    const propertyTableRows = propertyList.map(key => {
      const propertyInfo = objDef['properties'][key]
      const pConst = 'const' in propertyInfo ? propertyInfo['const'] : ''

      let { pType, notes } = parsePType(propertyInfo, [], key, GoslingSchema)

      // write description
      // check whether the property is required
      if ((objDef['required'] || '').includes(key)) {
        notes.unshift(`**Required**.`)
      }
      // whether the property needs to be a constant value
      if (pConst != '') {
        notes.push(`Must be \`"${pConst}"\`.`)
      }
      // read description from json if exist
      if ('description' in propertyInfo) {
        const description = propertyInfo['description']
        if (isIgnored(description)) {
          // ignore properties that are deprecated or experimental
          return null
        } else {
          notes.push(description.replace(/\n\n/g, '\n'))
          // notes.push(<ReactMarkdown key='desription' children={description.replace(/\n\n/g, '\n')} />)
        }
      }




      return <tr key={key}>
        <td>{key}</td>
        <td className='type'> <ReactMarkdown children={pType} /> </td>
        <td><ReactMarkdown children={notes.join(' ')} /> </td>
      </tr>
    })
    tableRows = tableRows.concat(propertyTableRows)

  }
  // if property only has addtional properties
  else if (objDef['additionalProperties']) {
    const pType = parsePType(objDef['additionalProperties'], [], '', GoslingSchema)['pType']

    const addtionalRow = <tr key='additional'>
      <td> stringKey </td>
      <td className='type'>  <ReactMarkdown children={pType} /> </td>
      <td> <ReactMarkdown children={objDef['description']} /> </td>
    </tr>

    tableRows.push(addtionalRow)
  }

  return <div key={objName}>
    {includeDescription ? <p>{objDef['description']}</p> : ''}
    <table key={objName} className='propertyTable'>
      <thead>
        {tableHead}
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  </div>
}


/*********************
 * parse property type
 *********************/




/**
 * 
 * @param {object} propertyInfo
 * @param {ReactElement[]} notes
 * @param {string} propertyName
 * @returns 
 */
const parsePType = (propertyInfo, notes, propertyName, GoslingSchema) => {

  let pType = propertyInfo['type']

  /**
   * multiple types
   */
  if (Array.isArray(pType)) {
    // type is an array 
    pType = pType.join('|')
  }
  /** 
   * type == array 
   */
  else if (pType === 'array') {
    /** an array of objects */
    if (propertyInfo?.items?.type == 'object') {
      const res = parsePType(propertyInfo.items, [], '', GoslingSchema)
      pType = `${res['pType']}[]`
      notes = notes.concat(res['notes'])
    }
    /** an array of number or strings  */
    else if (['number', 'string'].includes(propertyInfo?.items?.type)) {
      pType = `${propertyInfo.items.type}[]`
    }
    /** an array of different items */
    else if (Array.isArray(propertyInfo?.items)) {
      pType = `[${propertyInfo.items
        .map(item => parsePType(item, [], '', GoslingSchema)['pType']
        ).join(', ')}]`
    }
    /** if an array of type reference */
    else if (propertyInfo?.items?.$ref != undefined) {
      const typename = propertyInfo['items']['$ref'].replace('#/definitions/', '')
      pType = `[${typename.toUpperCase()}](#type-${typename.toLowerCase()})`
    }
  }
  /**
   * type == 'object'
   */
  else if (pType === 'object') {
    /** if the number of properties is less than 3 or if the property do not have a type name */
    if (propertyInfo['properties'] && (Object.keys(propertyInfo['properties']).length < 3 || propertyName == '')) {
      pType = 'object'
      const { objNotes, otherNotes } = obj2str(propertyInfo, GoslingSchema)
      notes.push(`Each object follows the format \`${objNotes}\` (${otherNotes})`)

    }
    // type is {[key: string]: xxx}
    else if (propertyInfo['additionalProperties']) {
      pType = `{[k: string]: ${parsePType(propertyInfo['additionalProperties'], [], '', GoslingSchema)['pType']}}`
    } else {
      pType = `[${propertyName.toUpperCase()}](#type-${propertyName.toLowerCase()})`
    }
  }
  else if (pType === 'string') {
    // if the property only accept certain strings
    if (propertyInfo['enum']) {
      notes.push(`One of ${propertyInfo['enum'].map(d => `\`"${d}"\``).join(', ')}.`)
    }
  }
  // else ptype = 'number', do nothing
  /** 
   * noType but an anyOf Array
   */
  else if (pType == undefined && propertyInfo['anyOf']) {
    pType = propertyInfo['anyOf'].map(p => parsePType(p, [], '', GoslingSchema)['pType']).join('| ')
  }
  /**
   * no type but a reference 
   */
  else if (pType == undefined && propertyInfo['$ref']) {
    // if a referenced object
    const refType = propertyInfo['$ref'].replace('#/definitions/', '')
    const res = parsePType(GoslingSchema['definitions'][refType], notes, refType, GoslingSchema)
    pType = res['pType']
    notes = res['notes']
  }

  return { pType, notes }
}

/**
 * 
 * @param {object} defs 
 * @returns {string}
 */
const obj2str = (defs, GoslingSchema) => {
  var objString = {}
  var all_notes = []
  Object.keys(defs['properties']).forEach((k) => {
    const { pType, notes } = parsePType(defs['properties'][k], [], '', GoslingSchema)
    objString[k] = pType
    all_notes.push(notes)
  })
  return { objNotes: `${JSON.stringify(objString)}`, otherNotes: `${all_notes.join(' ')}` }
}
