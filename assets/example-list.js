const thumbnailURL = "https://raw.githubusercontent.com/gosling-lang/gosling.js/da5a0c65b384f7ad13f149e386a4238711517162/editor/example/thumbnails/"

module.exports = {
  basicExamples: {
    name: "Basic Marks",
    list: [
      {
        title: "Bar Chart",
        imageUrl: "/img/doc_images/bar_example.png",
        url: "https://gosling-lang.github.io/gosling.js/?example=doc_bar",
        description: ""
      },
      {
        title: "Line Chart",
        imageUrl: "/img/doc_images/line_example.png",
        url: "https://gosling-lang.github.io/gosling.js/?example=doc_line",
        description: ""
      },
      {
        title: "Point Plot",
        imageUrl: "/img/doc_images/point_example.png",
        url: "https://gosling-lang.github.io/gosling.js/?example=doc_point",
        description: ""
      },
      {
        title: "Ideograms",
        imageUrl: "/img/doc_images/rect_example.png",
        url: "https://gosling-lang.github.io/gosling.js/?example=doc_rect",
        description: ""
      },
      {
        title: "Area Chart",
        imageUrl: "/img/doc_images/area_example.png",
        url: "https://gosling-lang.github.io/gosling.js/?example=doc_area",
        description: ""
      },
      {
        title: "Text Marks",
        imageUrl: "/img/doc_images/text_example.png",
        url: "https://gosling-lang.github.io/gosling.js/?example=doc_text",
        description: ""
      },
      {
        title: "Rule Marks",
        imageUrl: `${thumbnailURL}RULE.png`,
        url: "https://gosling-lang.github.io/gosling.js/?example=RULE",
        description: ""
      },
      {
        title: "Band Connections",
        imageUrl: `${thumbnailURL}BAND.png`,
        url: "https://gosling-lang.github.io/gosling.js/?example=BAND",
        description: ""
      }
    ]
  },
  interactionExamples: {
    name: "Interactive Visualizations",
    list: [
      {
        title: "Brushing + Linking",
        imageUrl: "/img/example/multi_views.gif",
        url: "https://gosling.js.org?example=CIRCULAR_OVERVIEW_LINEAR_DETAIL",
        description: ""
      },
      {
        title: "Semantic Zoom in Sequence Plot",
        imageUrl: `${thumbnailURL}SEQUENCE.gif`,
        url: "https://gosling.js.org?example=SEQUENCE",
        description: ""
      },
      {
        title: "Semantic Zoom in Lollipop Plot",
        imageUrl: "./img/example/semantic-zoom-lollipop.png",
        url: "https://gosling.js.org?example=SEMANTIC_ZOOM",
        description: ""
      }
    ]
  },
  advancedExamples: {
    name: "Compositive Visualizations",
    list: [
      {
        title: "Gene Annotations",
        imageUrl: "./img/example/glyph.png",
        url: "https://gosling.js.org?example=GENE_ANNOTATION",
        description: ""
      },
      {
        title: "Transcript Annotations",
        imageUrl: "./img/example/Transcript.png",
        url: "https://gosling.js.org?example=MARK_DISPLACEMENT",
        description: ""
      },
      {
        title: "Lollipop Plots",
        imageUrl: "./img/example/Spread_Lollipop.png",
        url: "https://gosling.js.org?example=MARK_DISPLACEMENT",
        description: ""
      },
      {
        title: "Ideograms",
        imageUrl: "./img/example/Ideograms.png",
        url: "https://gosling.js.org?example=CYTOBANDS",
        description: ""
      },
    ]
  },
  multiViewExamples: {
    name: 'Multi-view Visualizations',
    list: [
      {
        title: "Comparative Matrices",
        imageUrl: `${thumbnailURL}MATRIX_HFFC6.gif`,
        url: "https://gosling.js.org?example=MATRIX_HFFC6",
        description: ""
      },
      {
        title: "Linked Views",
        imageUrl: `${thumbnailURL}LINKING.gif`,
        url: "https://gosling.js.org?example=LINKING",
        description: ''
      },
      {
        title: "Matrix with Annotations",
        imageUrl: `${thumbnailURL}MATRIX.png`,
        url: "https://gosling.js.org?example=MATRIX",
        description: ''
      }
    ]
  },
  gallery: {
    name: "Application Gallery",
    list: [
      {
        title: "Circos",
        imageUrl: "./img/example/Circos.png",
        url: "https://gosling.js.org?example=CIRCOS",
        description: "Circos-like Visualization"
      },
      {
        title: "Sashimi Plot",
        imageUrl: `${thumbnailURL}SASHIMI_PLOT.png`,
        url: "https://gosling.js.org?example=SASHIMI_PLOT",
        description: 'Reproduce the <a href="https://software.broadinstitute.org/software/igv/Sashimi">Sashimi Plot in IGV</a>'
      },
      {
        title: "Breast Cancer Variant",
        imageUrl: "./img/example/CANCER_VARIANT.png",
        url: "https://gosling.js.org?example=CANCER_VARIANT",
        description: "Staaf et al. 2019"
      },
      {
        title: "Single-cell Epigenomic Analysis",
        imageUrl: "./img/example/CORCES_ET_AL.png",
        url: "https://gosling.js.org?example=CORCES_ET_AL",
        description: "Corces et al. 2020"
      },
      {
        title: "SARS-CoV-2",
        imageUrl: "./img/example/SARS-CoV-2.png",
        url: "https://gosling.js.org?example=SARS_COV_2",
        description: "WashU Virus Genome Browser, NCBI, GISAID"
      },
      {
        title: "Gremlin",
        imageUrl: "./img/example/GREMLIN.png",
        url: "https://gosling.js.org?example=GREMLIN",
        description: "O'Brien et al. 2010"
      },
      {
        title: "Alignment Chart",
        imageUrl: `${thumbnailURL}ALIGNMENT.png`,
        url: "https://gosling.js.org?example=ALIGNMENT",
        description: "Reproduce the <a href='https://dash.plotly.com/dash-bio/alignmentchart'>alignment chart in ploty</a>"
      },
      {
        title: "BAM file pileup tracks",
        imageUrl: `${thumbnailURL}BAM_PILEUP.png`,
        url: "https://gosling.js.org?example=BAM_PILEUP",
        description: "Pileup Track Using BAM Data"
      }
    ]
  }
}