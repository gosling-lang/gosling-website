import React from 'react'
import ReactMarkdown from 'react-markdown'
import GoslingSchema from '../../assets/gosling.schema.json';
import BrowserOnly from '@docusaurus/BrowserOnly';

const dataList = GoslingSchema["definitions"]['DataDeep']['anyOf'].map(d => d["$ref"].replace('#/definitions/', ''))

// decide whether a property should be ignored based on keywords in the property description
const isIgnored = (descriptionInfo) => {
  const keywords = ['deprecated', 'experimental', 'not supported', 'internal']
  return keywords.some(keyword => descriptionInfo.toLowerCase().includes(keyword))

}

export const TableWrapper = (props) => {
  return <BrowserOnly
    fallback={<div>The fallback content to display on prerendering</div>}>
    {() => {
      // to excluded from server side build

      return <PropertyTable {...props} />
    }}
  </BrowserOnly>
}


const PropertyTable = ({ objName, includeDescription=false }) => {

  const objDef = GoslingSchema["definitions"][objName]
  let propertyList = Object.keys(objDef['properties']).sort((a,b)=>(objDef.required||'').includes(a) - (objDef.required||'').includes(b) ).reverse()

  const tableHead = <tr>
    <th> property </th>
    <th> type </th>
    <th> description </th>
  </tr>

  const tableRows = propertyList.map(key => {
    const propertyInfo = objDef['properties'][key]
    const pConst = 'const' in propertyInfo ? propertyInfo['const']  : ''
    
    let notes = []
    
    // write description
    // check whether the property is required
    if ((objDef['required']||'').includes(key)) notes.push(<b key="requiredInfo">Required. </b>)
    // whether the property needs to be a constant value
    if (pConst != '') notes.push(<span key="constInfo">must be <code>"{pConst}"</code>. </span>)
    // read description from json if exist
    if ('description' in propertyInfo) {
      const description = propertyInfo['description']
      if (isIgnored(description)){
        // ignore properties that are deprecated or experimental
        return null
      } else {
        notes.push(<ReactMarkdown key='desription' children = {description.replace(/\n\n/g, '\n')} />)
      }
    }

    const {pType, description} = parsePType(propertyInfo, notes, key)


    return <tr key={key}>
      <td>{key}</td>
      <td className='type'> <ReactMarkdown children={pType} /> </td>
      <td>{ description} </td>
    </tr>
  })

  return <div key={objName}>
  {includeDescription?<p>{objDef['description']}</p>:''}
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


/**
 * parse property types
 */

const obj2str = (defs)=>{
  var objString = {}
  Object.keys(defs['properties']).forEach(
    (k)=>objString[k] = defs['properties'][k]['type']
  )
    return JSON.stringify(objString)
}



/**
 * 
 * @param {object} propertyInfo
 * @param {ReactElement[]} notes
 * @param {string} propertyName
 * @returns 
 */
const parsePType = (propertyInfo, notes, propertyName)=>{ 

    let pType = propertyInfo['type']
    if (Array.isArray(pType)){
      // type is an array 
      pType = pType.join('|')
    } else if (pType === 'array'){
        /** an array of objects */
        if (propertyInfo?.items?.type=='object'){
          const res = parsePType(propertyInfo.items, [], '')
          pType = `${res['pType']}[]`
          notes = res['description']
        }
        /** an array of number or strings  */
        else if (['number', 'string'].includes(propertyInfo?.items?.type)){
          pType = `${propertyInfo.items.type}[]`
        } 
        /** an array of different items */
        else if (Array.isArray(propertyInfo?.items)){
          pType = `[${propertyInfo.items
            .map(item=>parsePType(item, [], '')['pType']
            ).join(', ')}]`
        } 
        /** if an array of type reference */
        else if (propertyInfo?.items?.$ref != undefined){
          pType = `[${propertyInfo['items']['$ref'].replace('#/definitions/', '')}]()`
        }

    } else if (pType === 'object'){
      /** if the number of properties is less than 3 or if the property do not have a type name */
      if (propertyInfo['properties'] && (Object.keys(propertyInfo['properties']).length <3 || propertyName=='')){
          pType = 'object'
          notes.push(<span key="type">Each object follows the format <code>{obj2str(propertyInfo)}</code></span>)
        
      } else {
        pType = `[${propertyName.toUpperCase()}]()`
      }
    } 
    // else ptype = 'number' or 'string', do nothing
    /**  */
    else if (pType == undefined && propertyInfo['anyOf']){
      pType = propertyInfo['anyOf'].map(p => parsePType(p, [], '')['pType']).join('| ')
    } else if (pType == undefined && propertyInfo['$ref']){
      // if a referenced object
      const refType = propertyInfo['$ref'].replace('#/definitions/', '')
      const res = parsePType(GoslingSchema['definitions'][refType], notes, refType)
      pType = res['pType']
      notes = res['description']
    }

  return {pType, description: notes}
}