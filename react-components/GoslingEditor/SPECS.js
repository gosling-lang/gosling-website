
export const SPEC1 = `{
  "tracks": [{
    //*** specify the size of the visualization
    "width": 700,
    "height": 70,
    //*** Load a csv data file through URL
    "data": {
      "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
      "chromosomeField": "Chromosome",
      "type": "csv",
      "genomicFields": ["chromStart", "chromEnd"]
    },
    //*** specify the mark type
    "mark": "rect",
    //*** encoding data with visual channels
    "color": {
      "field": "Stain",
      "type": "nominal",
      "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
      "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
    },
    "x": {
      "field": "chromStart",
      "type": "genomic",
      "domain": { "chromosome": "1" },
      "axis": "top"
    },
    "xe": { "field": "chromEnd", "type": "genomic" },
    //*** customize the style of the visual marks. 
    //*** default values will be used if not specifyed.
    "size": { "value": 20 },
    "stroke": { "value": "gray" },
    "strokeWidth": { "value": 0.5 }
  }]
}`

export const SPEC_TRANSFORM_DATA = `{
  "tracks": [{
    "width": 700,
    "height": 70,
    "data": {
      "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
      "chromosomeField": "Chromosome",
      "type": "csv",
      "genomicFields": ["chromStart", "chromEnd"]
    },
    //*** we added a data transform here  
    "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["gpos25", "gpos50", "gpos75", "gpos100"] }],
    //*** end of the data transform
    "mark": "rect",
    "color": {
      "field": "Stain",
      "type": "nominal",
      "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
      "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
    },
    "x": {
      "field": "chromStart",
      "type": "genomic",
      "domain": { "chromosome": "1" },
      "axis": "top"
    },
    "xe": { "field": "chromEnd", "type": "genomic" },
    "size": { "value": 20 },
    "stroke": { "value": "gray" },
    "strokeWidth": { "value": 0.5 }
  }]
}`

export const SPEC_OVERLAP = `{
  "tracks": [{
    "width": 700,
    "height": 70,
    "data": {
      "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
      "type": "csv",
      "chromosomeField": "Chromosome",
      "genomicFields": ["chromStart", "chromEnd"]
    },
    //***** move the rect track to overlaid tracks
    //      "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
    //      "mark": "rect",
    //      "color": {
    //          "field": "Stain", 
    //          "type": "nominal",
    //          "domain": ["gpos25", "gpos50", "gpos75", "gpos100"],
    //          "range": ["#D9D9D9","#979797","#636363", "black"]
    //      },
    //***  
    "x": {
      "field": "chromStart",
      "type": "genomic",
      "domain": { "chromosome": "1" },
      "axis": "top"
    },
    "xe": { "field": "chromEnd", "type": "genomic" },
    "size": { "value": 20 },
    "stroke": { "value": "gray" },
    "strokeWidth": { "value": 0.5 },

    //****** overlay three tracks
    //****** the above visual properties are shared by the three tracks 
    "alignment": "overlay",
    "tracks": [
      //*** the first rect track
      {
        "mark": "rect",
        "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
        "color": {
          "field": "Stain",
          "type": "nominal",
          "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
          "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
        }
      },
      //*** the second right triangle track 
      {
        "mark": "triangleRight",
        "dataTransform": [
          { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
          { "type": "filter", "field": "Name", "include": "q" }
        ],
        "color": { "value": "#B70101" }
      },
      //*** the thrid left triangle track
      {
        "mark": "triangleLeft",
        "dataTransform": [
          { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
          { "type": "filter", "field": "Name", "include": "p" }
        ],
        "color": { "value": "#B70101" }
      }
    ]
  }]
}`

export const SPEC_ZOOM = `{
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
        "domain": { "chromosome": "1" },
        "axis": "top"
      },
      "xe": { "field": "chromEnd", "type": "genomic" },
      "alignment": "overlay",
      "size": { "value": 20 },
      "stroke": { "value": "gray" },
      "strokeWidth": { "value": 0.5 },
      "tracks": [
        {
          "mark": "rect",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
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
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "q" }
          ],
          "color": { "value": "#B40101" }
        },
        {
          "mark": "triangleLeft",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "p" }
          ],
          "color": { "value": "#B40101" }
        },
        //*** add a text track  
        {
          "mark": "text",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "text": { "field": "Name", "type": "nominal" },
          "color": {
            "field": "Stain",
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": ["black", "black", "black", "black", "white", "black"]
          },
          //***  semantic zoom by controlling the visiblity of the text mark
          "visibility": [
            {
              "operation": "less-than",
              "measure": "width",
              "threshold": "|xe-x|",
              "target": "mark"
            }
          ],
          "style": { "textStrokeWidth": 0 }
        }
        //*** end of the added track
      ]
    }
  ]
}`


export const SPEC_LINK = `{
  "spacing": 5,  // add space between tracks
  "tracks": [
    //******  add an area chart as a new track
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
        "domain": { "chromosome": "1" },
        "axis": "top",
        "linkingId": "link-1"
      },
      "y": { "field": "peak", "type": "quantitative" },
      "color": { "field": "sample", "type": "nominal" }
    },
    //*** end of the added track
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
        "domain": { "chromosome": "1" },
        "linkingId": "link-1" // use linkingId to link tracks
      },
      "xe": { "field": "chromEnd", "type": "genomic" },
      "alignment": "overlay",
      "tracks": [
        {
          "mark": "text",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "text": { "field": "Name", "type": "nominal" },
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
          "style": { "textStrokeWidth": 0 }
        },
        {
          "mark": "rect",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
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
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "q" }
          ],
          "color": { "value": "#B40101" }
        },
        {
          "mark": "triangleLeft",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "p" }
          ],
          "color": { "value": "#B40101" }
        }
      ],
      "size": { "value": 20 },
      "stroke": { "value": "gray" },
      "strokeWidth": { "value": 0.5 }
    }
  ]
}`

export const SPEC_CIRCULAR = `{
  //*** you only need to add two lines to change the layout
  "layout": "circular", // specify the circular layout
  "centerRadius": 0.6, // set radius of the center white space
  "spacing": 5,
  "tracks": [
    {
      "width": 500,
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
        "domain": { "chromosome": "1" },
        "axis": "top",
        "linkingId": "link-1"
      },
      "y": { "field": "peak", "type": "quantitative" },
      "color": { "field": "sample", "type": "nominal" }
    },
    {
      "width": 500,
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
        "domain": { "chromosome": "1" },
        "linkingId": "link-1"
      },
      "xe": { "field": "chromEnd", "type": "genomic" },
      "alignment": "overlay",
      "tracks": [
        {
          "mark": "text",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "text": { "field": "Name", "type": "nominal" },
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
          "style": { "textStrokeWidth": 0 }
        },
        {
          "mark": "rect",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
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
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "q" }
          ],
          "color": { "value": "#B40101" }
        },
        {
          "mark": "triangleLeft",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "p" }
          ],
          "color": { "value": "#B40101" }
        }
      ],
      "size": { "value": 20 },
      "stroke": { "value": "gray" },
      "strokeWidth": { "value": 0.5 }
    }
  ]
}`

export const SPEC_DETAIL = `{
  "layout": "linear",
  "tracks": [{
    "row": { "field": "sample", "type": "nominal" },
    "width": 240,
    "height": 200,
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
      "domain": { "chromosome": "2" },
      "axis": "top"
    },
    "y": { "field": "peak", "type": "quantitative" },
    "color": { "field": "sample", "type": "nominal" }
  }]
}`

export const SPEC_MULTI_VIEW = `{
  "arrangement": "vertical",
  "views": [
  //*** the circular overview
    {
      "layout": "circular",
      "centerRadius": 0.6,
      "spacing": 5,
      "tracks": [
        {
          "width": 500,
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
            "axis": "top",
            "linkingId": "link-1"
          },
          "y": { "field": "peak", "type": "quantitative" },
          "color": { "field": "sample", "type": "nominal" },
          "alignment": "overlay",
          "tracks": [
            { "mark": "area" },
            {
              "mark": "brush",
              "x": { "linkingId": "detail-1" },
              "color": { "value": "blue" }
            },
            {
              "mark": "brush",
              "x": { "linkingId": "detail-2" },
              "color": { "value": "red" }
            }
          ]
        },
        {
          "width": 500,
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
            "linkingId": "link-1"
          },
          "xe": { "field": "chromEnd", "type": "genomic" },
          "alignment": "overlay",
          "tracks": [
            {
              "mark": "text",
              "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
              "text": { "field": "Name", "type": "nominal" },
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
              "style": { "textStrokeWidth": 0 }
            },
            {
              "mark": "rect",
              "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
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
                { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
                { "type": "filter", "field": "Name", "include": "q" }
              ],
              "color": { "value": "#B40101" }
            },
            {
              "mark": "triangleLeft",
              "dataTransform": [
                { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
                { "type": "filter", "field": "Name", "include": "p" }
              ],
              "color": { "value": "#B40101" }
            }
          ],
          "size": { "value": 20 },
          "stroke": { "value": "gray" },
          "strokeWidth": { "value": 0.5 }
        }
      ]
    },
    //*** the two detail views
    {
      "arrangement": "serial",
      "spacing": 20,
      "views": [
        //*** detail view 1
        {
          "layout": "linear",
          "tracks": [
            {
              "row": { "field": "sample", "type": "nominal" },
              "width": 240,
              "height": 200,
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
                "domain": { "chromosome": "2" },
                "linkingId": "detail-1",
                "axis": "top"
              },
              "y": { "field": "peak", "type": "quantitative" },
              "color": { "field": "sample", "type": "nominal" },
              "style": { "background": "blue", "backgroundOpacity": 0.1 }
            }
          ]
        },
        //*** detail view 2
        {
          "layout": "linear",
          "tracks": [{
            "row": { "field": "sample", "type": "nominal" },
            "width": 240,
            "height": 200,
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
              "domain": { "chromosome": "5" },
              "linkingId": "detail-2",
              "axis": "top"
            },
            "y": { "field": "peak", "type": "quantitative" },
            "color": { "field": "sample", "type": "nominal" },
            "style": { "background": "red", "backgroundOpacity": 0.1 }
          }]
        }
      ]
    }
  ]
}`
export const MAIN_SPEC = `{
  "title": "Gosling Theme",
  "subtitle": "Using the gosling themes, you can easily apply styling to gosling visualizations",
  "arrangement": "vertical",
  "centerRadius": 0.6,
  "spacing": 40,
  "views": [
    {
      "arrangement": "horizontal",
      "spacing": 80,
      "views": [
        {
          "spacing": 0.1,
          "static": true,
          "layout": "circular",
          "alignment": "stack",
          "tracks": [
            {
              "title": "Whole Genome",
              "alignment": "overlay",
              "tracks": [
                {"mark": "bar"},
                {"mark": "brush", "x": {"linkingId": "middle"}}
              ],
              "data": {
                "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                "type": "multivec",
                "row": "sample",
                "column": "position",
                "value": "peak",
                "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
              },
              "x": {"field": "start", "type": "genomic"},
              "xe": {"field": "end", "type": "genomic"},
              "y": {"field": "peak", "type": "quantitative"},
              "color": {"field": "sample", "type": "nominal"},
              "width": 500,
              "height": 130
            },
            {
              "alignment": "overlay",
              "data": {
                "url": "https://raw.githubusercontent.com/vigsterkr/circos/master/data/5/segdup.txt",
                "type": "csv",
                "headerNames": ["id", "chr", "p1", "p2"],
                "chromosomePrefix": "hs",
                "chromosomeField": "chr",
                "genomicFields": ["p1", "p2"],
                "separator": " ",
                "longToWideId": "id"
              },
              "opacity": {"value": 0.4},
              "tracks": [
                {
                  "mark": "withinLink",
                  "x": {"field": "p1", "type": "genomic"},
                  "xe": {"field": "p1_2", "type": "genomic"},
                  "x1": {"field": "p2", "type": "genomic"},
                  "x1e": {"field": "P2_2", "type": "genomic"},
                  "stroke": {"value": "lightgray"},
                  "strokeWidth": {"value": 1}
                }
              ],
              "width": 500,
              "height": 100
            }
          ]
        },
        {
          "xDomain": {"chromosome": "12"},
          "linkingId": "middle",
          "layout": "linear",
          "tracks": [
            {
              "alignment": "overlay",
              "title": "Genes",
              "data": {
                "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
                "type": "beddb",
                "genomicFields": [
                  {"index": 1, "name": "start"},
                  {"index": 2, "name": "end"}
                ],
                "valueFields": [
                  {"index": 5, "name": "strand", "type": "nominal"},
                  {"index": 3, "name": "name", "type": "nominal"}
                ],
                "exonIntervalFields": [
                  {"index": 12, "name": "start"},
                  {"index": 13, "name": "end"}
                ]
              },
              "tracks": [
                {
                  "dataTransform": [
                    {"type": "filter", "field": "type", "oneOf": ["gene"]},
                    {"type": "filter", "field": "strand", "oneOf": ["+"]}
                  ],
                  "mark": "triangleRight",
                  "x": {
                    "field": "end",
                    "type": "genomic",
                    "linkingId": "middle"
                  },
                  "size": {"value": 15},
                  "opacity": {"value": 0.8}
                },
                {
                  "dataTransform": [
                    {"type": "filter", "field": "type", "oneOf": ["gene"]}
                  ],
                  "mark": "text",
                  "text": {"field": "name", "type": "nominal"},
                  "x": {"field": "start", "type": "genomic"},
                  "xe": {"field": "end", "type": "genomic"},
                  "style": {"dy": -15},
                  "opacity": {"value": 0.8}
                },
                {
                  "dataTransform": [
                    {"type": "filter", "field": "type", "oneOf": ["gene"]},
                    {"type": "filter", "field": "strand", "oneOf": ["-"]}
                  ],
                  "mark": "triangleLeft",
                  "x": {"field": "start", "type": "genomic"},
                  "size": {"value": 15},
                  "style": {"align": "right"},
                  "opacity": {"value": 0.8}
                },
                {
                  "dataTransform": [
                    {"type": "filter", "field": "type", "oneOf": ["exon"]}
                  ],
                  "mark": "rect",
                  "x": {"field": "start", "type": "genomic"},
                  "size": {"value": 15},
                  "xe": {"field": "end", "type": "genomic"},
                  "opacity": {"value": 0.8}
                },
                {
                  "dataTransform": [
                    {"type": "filter", "field": "type", "oneOf": ["gene"]},
                    {"type": "filter", "field": "strand", "oneOf": ["+"]}
                  ],
                  "mark": "rule",
                  "x": {"field": "start", "type": "genomic"},
                  "strokeWidth": {"value": 3},
                  "xe": {"field": "end", "type": "genomic"},
                  "opacity": {"value": 0.8},
                  "style": {"linePattern": {"type": "triangleRight", "size": 5}}
                },
                {
                  "dataTransform": [
                    {"type": "filter", "field": "type", "oneOf": ["gene"]},
                    {"type": "filter", "field": "strand", "oneOf": ["-"]}
                  ],
                  "mark": "rule",
                  "x": {"field": "start", "type": "genomic"},
                  "strokeWidth": {"value": 3},
                  "xe": {"field": "end", "type": "genomic"},
                  "style": {"linePattern": {"type": "triangleLeft", "size": 5}},
                  "opacity": {"value": 0.8}
                },
                {"mark": "brush", "x": {"linkingId": "detail"}}
              ],
              "row": {
                "field": "strand",
                "type": "nominal",
                "domain": ["+", "-"]
              },
              "color": {
                "field": "strand",
                "type": "nominal",
                "domain": ["+", "-"],
                "legend": true
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
              "width": 520,
              "height": 150
            },
            {
              "title": "Chromosome",
              "alignment": "overlay",
              "tracks": [
                {"mark": "bar"},
                {"mark": "brush", "x": {"linkingId": "detail"}}
              ],
              "data": {
                "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                "type": "multivec",
                "row": "sample",
                "column": "position",
                "value": "peak",
                "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                "binSize": 4
              },
              "x": {"field": "start", "type": "genomic"},
              "xe": {"field": "end", "type": "genomic"},
              "y": {"field": "peak", "type": "quantitative", "grid": true},
              "color": {"field": "sample", "type": "nominal", "legend": true},
              "width": 520,
              "height": 300
            }
          ]
        }
      ]
    },
    {
      "layout": "linear",
      "xDomain": {"chromosome": "12", "interval": [46000000, 60000000]},
      "linkingId": "detail",
      "tracks": [
        {
          "title": "Sequence",
          "layout": "linear",
          "xDomain": {"chromosome": "1", "interval": [3000000, 3000010]},
          "alignment": "overlay",
          "data": {
            "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=sequence-multivec",
            "type": "multivec",
            "row": "base",
            "column": "position",
            "value": "count",
            "categories": ["A", "T", "G", "C"],
            "start": "start",
            "end": "end"
          },
          "tracks": [
            {
              "mark": "bar",
              "y": {"field": "count", "type": "quantitative", "axis": "none"}
            },
            {
              "dataTransform": [
                {"type": "filter", "field": "count", "oneOf": [0], "not": true}
              ],
              "mark": "text",
              "x": {"field": "start", "type": "genomic"},
              "xe": {"field": "end", "type": "genomic"},
              "color": {"value": "white"},
              "visibility": [
                {
                  "operation": "less-than",
                  "measure": "width",
                  "threshold": "|xe-x|",
                  "transitionPadding": 30,
                  "target": "mark"
                },
                {
                  "operation": "LT",
                  "measure": "zoomLevel",
                  "threshold": 10,
                  "target": "track"
                }
              ]
            }
          ],
          "x": {"field": "position", "type": "genomic"},
          "color": {
            "field": "base",
            "type": "nominal",
            "domain": ["A", "T", "G", "C"],
            "legend": true
          },
          "text": {"field": "base", "type": "nominal"},
          "style": {
            "textFontSize": 24,
            "textStrokeWidth": 0,
            "textFontWeight": "bold"
          },
          "width": 800,
          "height": 100
        },
        {
          "title": "Detail View",
          "data": {
            "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
            "type": "multivec",
            "row": "sample",
            "column": "position",
            "value": "peak",
            "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
            "binSize": 4
          },
          "alignment": "overlay",
          "tracks": [{"mark": "point"}, {"mark": "line"}],
          "x": {"field": "position", "type": "genomic"},
          "y": {"field": "peak", "type": "quantitative", "grid": true},
          "row": {"field": "sample", "type": "nominal"},
          "color": {"field": "sample", "type": "nominal", "legend": true},
          "width": 1104,
          "height": 240
        }
      ]
    }
  ]
}`