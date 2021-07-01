
const SPEC1 = `{
    "tracks":[{
        // specify the size of the visualization
        "width": 700,
        "height": 70,
        // Load a csv data file through URL
        "data": {
            "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
            "chromosomeField": "Chromosome",
            "type": "csv",
            "genomicFields": ["chromStart", "chromEnd"]
        },
        // specify the mark type
        "mark": "rect",
        // encoding data with visual channels
        "x": {
            "field": "chromStart",
            "type": "genomic",
            "domain": {"chromosome": "1"},
            "axis": "top"
        },
        "xe": {"field": "chromEnd", "type": "genomic"},
        "color": {
            "field": "Stain", 
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": ["white","#D9D9D9","#979797","#636363", "black","#A0A0F2"]
        },
        // customize the style of the visual marks. 
        // default values will be used if not specifyed.
        "size": {"value": 20},
        "stroke": {"value": "gray"},
        "strokeWidth": {"value": 0.5}
    }]
}`

const SPEC_TRANSFORM_DATA = `{
    "tracks":[{
        "width": 700,
        "height": 70,
        "data": {
            "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
            "chromosomeField": "Chromosome",
            "type": "csv",
            "genomicFields": ["chromStart", "chromEnd"]
        },  
        // we added a data transform here  
        "dataTransform": [{"type": "filter", "field": "Stain", "oneOf": ["gpos25", "gpos50", "gpos75", "gpos100"]}],
        // end of the data transform
        "mark": "rect",
        "x": {
            "field": "chromStart",
            "type": "genomic",
            "domain": {"chromosome": "1"},
            "axis": "top"
        },
        "xe": {"field": "chromEnd", "type": "genomic"},
        "color": {
            "field": "Stain", 
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": ["white","#D9D9D9","#979797","#636363", "black","#A0A0F2"]
        },
        "size": {"value": 20},
        "stroke": {"value": "gray"},
        "strokeWidth": {"value": 0.5}
    }]
}`

const SPEC_OVERLAP = `{
    "tracks":[{ 
        "width": 700,
        "height": 70,
        "data": {
            "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
            "type": "csv",
            "chromosomeField": "Chromosome",
            "genomicFields": ["chromStart", "chromEnd"]
        },   
//***** removed
//      "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
//      "mark": "rect",
        "x": {
            "field": "chromStart",
            "type": "genomic",
            "domain": {"chromosome": "1"},
            "axis": "top"
        },
        "xe": {"field": "chromEnd", "type": "genomic"},
// ***** removed
//      "color": {
//          "field": "Stain", 
//          "type": "nominal",
//          "domain": ["gpos25", "gpos50", "gpos75", "gpos100"],
//          "range": ["#D9D9D9","#979797","#636363", "black"]
//      },

    // start of the added code
       "alignment": "overlay",
       "tracks":[
           {
             "mark": "rect",
             "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
             "color": {
                 "field": "Stain", 
                 "type": "nominal",
                 "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
                 "range": ["white","#D9D9D9","#979797","#636363", "black","#A0A0F2"]
              }
           },
           {
             "mark": "triangleRight",
             "dataTransform": [
                 {"type":"filter", "field": "Stain", "oneOf": ["acen"]},
                 {"type":"filter", "field": "Name", "include": "q"}
               ],
             "color": {"value": "#B70101"}
           },
           {
             "mark": "triangleLeft",
             "dataTransform": [
                 {"type":"filter", "field": "Stain", "oneOf": ["acen"]},
                 {"type":"filter", "field": "Name", "include": "p"}
               ],
             "color": {"value": "#B70101"}
           }
       ],
    // end of added code
        "size": {"value": 20},
        "stroke": {"value": "gray"},
        "strokeWidth": {"value": 0.5}
    }]
}`

export {SPEC1, SPEC_TRANSFORM_DATA, SPEC_OVERLAP}