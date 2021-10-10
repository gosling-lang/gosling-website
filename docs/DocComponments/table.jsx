import React from 'react'
import ReactMarkdown from 'react-markdown'
import GoslingSchema from '../../assets/gosling.schema.json';
import BrowserOnly from '@docusaurus/BrowserOnly';

const dataList = GoslingSchema["definitions"]['DataDeep']['anyOf'].map(d => d["$ref"].replace('#/definitions/', ''))

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


const obj2str = (defs)=>{
  var objString = {}
  Object.keys(defs['properties']).forEach(
    (k)=>objString[k] = defs['properties'][k]['type']
  )
    return JSON.stringify(objString)
}


  const tableRows = propertyList.map(key => {
    const propertyInfo = objDef['properties'][key]
    let pType = propertyInfo['type']
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
      if (description.toLowerCase().includes('deprecated') || description.toLowerCase().includes('experimental')){
        // ignore properties that are deprecated or experimental
        return null
      } else {
        notes.push(<ReactMarkdown key='desription' children = {description.replace(/\n\n/g, '\n')} />)
      }
    }

    // propertiy type
    if (pType === 'array'){
      const itemType = propertyInfo['items']['type']
      if (itemType == 'object') {
        // array of objects
        if (propertyInfo?.items?.properties?.type?.$ref){
          pType = <span> <a>{propertyInfo['items']['properties']['type']['$ref'].replace('#/definitions/', '')}</a>[] </span>
        }
        else {
          // simple obj type
          notes.push(<span key="type">Each object in the array follows the format {obj2str(propertyInfo['items'])}</span>)
        }
        
      } else {
        // array of numbers or strings
        pType = <span> {itemType} [] </span>
      }
    } else if (pType === 'object'){
      pType = <a>{key.toUpperCase()}</a>
    }


    return <tr key={key}>
      <td>{key}</td>
      <td> {pType} </td>
      <td>{notes} </td>
    </tr>
  })

  return <table key={objName} className='propertyTable'>
    <thead>
      {tableHead}
    </thead>
    <tbody>
      {tableRows}
    </tbody>
  </table>
}