
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

const SPEC_ZOOM = `{
    "tracks": [
      {
        "width": 700,
        "height": 70,
        "data": {
          "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
          "type": "csv",
          "chromosomeField": "Chromosome",
          "genomicFields": ["chromStart", "chromEnd"]
        },
        "x": {
          "field": "chromStart",
          "type": "genomic",
          "domain": {"chromosome": "1"},
          "axis": "top"
        },
        "xe": {"field": "chromEnd", "type": "genomic"},
        "alignment": "overlay",
        "tracks": [
        // start of the added code 
         {
           "mark": "text",
           "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
           "text": {"field": "Name", "type": "nominal"},
           "color": {
             "field": "Stain",
             "type": "nominal",
             "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
             "range": ["black", "black", "black", "black", "white", "black"]
           },
           "visibility": [
             {
               "operation": "less-than",
               "measure": "width",
               "threshold": "|xe-x|",
               "target": "mark"
             }
           ],
           "style": {"textStrokeWidth": 0}
         },
        // end of the added code
          {
            "mark": "rect",
            "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
            "color": {
              "field": "Stain",
              "type": "nominal",
              "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
              "range": [
                "white",
                "#D9D9D9",
                "#979797",
                "#636363",
                "black",
                "#A0A0F2"
              ]
            }
          },
          {
            "mark": "triangleRight",
            "dataTransform": [
                {"type":"filter", "field": "Stain", "oneOf": ["acen"]},
                {"type":"filter", "field": "Name", "include": "q"}
              ],
            "color": {"value": "#B40101"}
          },
          {
            "mark": "triangleLeft",
            "dataTransform": [
                {"type":"filter", "field": "Stain", "oneOf": ["acen"]},
                {"type":"filter", "field": "Name", "include": "p"}
              ],
            "color": {"value": "#B40101"}
          }
        ],
        "size": {"value": 20},
        "stroke": {"value": "gray"},
        "strokeWidth": {"value": 0.5}
      }
    ]
  }`


const SPEC_LINK = `{
      "spacing": 5,  // add space between tracks
      "tracks": [
        //   add a new track
        {
         "width": 700,
         "height": 40,  
         "data": {
           "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
           "type": "multivec",
           "row": "sample",
           "column": "position",
           "value": "peak",
           "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
         },
         "mark": "area",
         "x": {
           "field": "position",
           "type": "genomic",
           "domain": {"chromosome": "1"},
           "axis": "top",
           "linkingId": "link-1"
         },
         "y": {"field": "peak", "type": "quantitative"},
         "color": {"field": "sample", "type": "nominal"}
       },
    // end of the added track
        {
          "width": 700,
        "height": 20, // reduce the track height
          "data": {
            "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
            "type": "csv",
            "chromosomeField": "Chromosome",
            "genomicFields": ["chromStart", "chromEnd"]
          },
          "x": {
            "field": "chromStart",
            "type": "genomic",
            "domain": {"chromosome": "1"},
           "linkingId": "link-1" // use linkingId to link tracks
          },
          "xe": {"field": "chromEnd", "type": "genomic"},
          "alignment": "overlay",
          "tracks": [
            {
              "mark": "text",
              "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
              "text": {"field": "Name", "type": "nominal"},
              "color": {
                "field": "Stain",
                "type": "nominal",
                "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
                "range": ["black", "black", "black", "black", "white", "black"]
              },
              "visibility": [
                {
                  "operation": "less-than",
                  "measure": "width",
                  "threshold": "|xe-x|",
                  "transitionPadding": 10,
                  "target": "mark"
                }
              ],
              "style": {"textStrokeWidth": 0}
            },
            {
              "mark": "rect",
              "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
              "color": {
                "field": "Stain",
                "type": "nominal",
                "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
                "range": [
                  "white",
                  "#D9D9D9",
                  "#979797",
                  "#636363",
                  "black",
                  "#A0A0F2"
                ]
              }
            },
            {
              "mark": "triangleRight",
              "dataTransform": [
                  {"type":"filter", "field": "Stain", "oneOf": ["acen"]},
                  {"type":"filter", "field": "Name", "include": "q"}
                ],
              "color": {"value": "#B40101"}
            },
            {
              "mark": "triangleLeft",
              "dataTransform": [
                  {"type":"filter", "field": "Stain", "oneOf": ["acen"]},
                  {"type":"filter", "field": "Name", "include": "p"}
                ],
              "color": {"value": "#B40101"}
            }
          ],
          "size": {"value": 20},
          "stroke": {"value": "gray"},
          "strokeWidth": {"value": 0.5}
        }
      ]
    }`

const SPEC_CIRCULAR = `{
    // you only need two lines to change the layout
    "layout": "circular", // specify the circular layout
    "centerRadius": 0.6, // set radius of the center white space
    "spacing": 5,  
    "tracks": [
       { 
        "width": 700,
        "height": 40,  
        "data": {
          "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
          "type": "multivec",
          "row": "sample",
          "column": "position",
          "value": "peak",
          "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
        },
        "mark": "area",
        "x": {
          "field": "position",
          "type": "genomic",
          "domain": {"chromosome": "1"},
          "axis": "top",
          "linkingId": "link-1"
        },
        "y": {"field": "peak", "type": "quantitative"},
        "color": {"field": "sample", "type": "nominal"}
      },
      { 
        "width": 700,
        "height": 20,  
        "data": {
          "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
          "type": "csv",
          "chromosomeField": "Chromosome",
          "genomicFields": ["chromStart", "chromEnd"]
        },
        "x": {
          "field": "chromStart",
          "type": "genomic",
          "domain": {"chromosome": "1"},
          "linkingId": "link-1"
        },
        "xe": {"field": "chromEnd", "type": "genomic"},
        "alignment": "overlay",
        "tracks": [
          {
            "mark": "text",
            "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
            "text": {"field": "Name", "type": "nominal"},
            "color": {
              "field": "Stain",
              "type": "nominal",
              "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
              "range": ["black", "black", "black", "black", "white", "black"]
            },
            "visibility": [
              {
                "operation": "less-than",
                "measure": "width",
                "threshold": "|xe-x|",
                "transitionPadding": 10,
                "target": "mark"
              }
            ],
            "style": {"textStrokeWidth": 0}
          },
          {
            "mark": "rect",
            "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
            "color": {
              "field": "Stain",
              "type": "nominal",
              "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
              "range": [
                "white",
                "#D9D9D9",
                "#979797",
                "#636363",
                "black",
                "#A0A0F2"
              ]
            }
          },
          {
            "mark": "triangleRight",
            "dataTransform": [
                {"type":"filter", "field": "Stain", "oneOf": ["acen"]},
                {"type":"filter", "field": "Name", "include": "q"}
              ],
            "color": {"value": "#B40101"}
          },
          {
            "mark": "triangleLeft",
            "dataTransform": [
                {"type":"filter", "field": "Stain", "oneOf": ["acen"]},
                {"type":"filter", "field": "Name", "include": "p"}
              ],
            "color": {"value": "#B40101"}
          }
        ],
        "size": {"value": 20},
        "stroke": {"value": "gray"},
        "strokeWidth": {"value": 0.5}
      }
    ]
  }`
export {SPEC1, SPEC_TRANSFORM_DATA, SPEC_OVERLAP, SPEC_ZOOM, SPEC_LINK, SPEC_CIRCULAR}