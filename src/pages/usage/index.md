---
title: Usage
---

# Usage

Gosling can be used and deployed in a variety of contexts. 

To build new visualizations, we recommend using the online editor or [Gos](https://gosling-lang.github.io/gos/) (if you prefer python). You can also create a sharable link to the online editor with your own Gosling specification. 

Gosling can be embedded into your own HTML or React applications. 

##  Online Editor
You can visit [Online Editor](https://gosling.js.org) to visualize your data directly in the website.

### Load a Gosling Spec From Your Github Gist
1. To load a spec you first have to create a gist with a file named gosling.js* that specifies the spec.
1. You can additionally specify a `readme.md` file to describe your spec.
1. Also be sure to give your gist a fabulous title. It'll be shown in the gosling editor.
You can then open your visualization at <a>http://<editor_url>/?gist=<github_username>/<gist_id></a>. 
<!-- For example, https://gosling.js.org/?gist=flekschas/e6e388332814886d4d714efd0e88093b -->
For example, https://gosling.js.org/?gist=wangqianwen0418/1cc79f00990806f07b379ae6a7c7b7b3

## HTML

Gosling can be embedded directly into your HTML page by adding gosling.js and several other dependencies in script tags. 

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/higlass@1.11/dist/hglib.css">
  <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/pixi.js@6/dist/browser/pixi.min.js"></script>
  <script src="https://unpkg.com/higlass@1.11/dist/hglib.js"></script>
  <script src="https://unpkg.com/gosling.js@0.9.17/dist/gosling.js"></script>
</head>
<body>
  <div id="gosling-container"/>
  <script>
    gosling.embed(
      document.getElementById('gosling-container'),
      {
        "tracks": [{
          "data": {
            "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
            "type": "multivec",
            "row": "sample",
            "column": "position",
            "value": "peak",
            "categories": ["sample 1"]
          },
          "mark": "rect",
          "x": { "field": "position", "type": "genomic" },
          "color": { "field": "peak", "type": "quantitative", "legend": true },
          "width": 600,
          "height": 130
        }]
      }
    );
  </script>
</body>
</html>
```

## React

Beginning with version 0.9.30, Gosling now supports React v18 (You can still use React v16 or v17).
If you are using a Gosling version prior to 0.9.30, please continue to use React v16.
  
Install `gosling.js` and its dependent libraries:

```sh
yarn add gosling.js higlass pixi.js react@16.13.1 react-dom@16.13.1
```

Add the following stylesheet to your base `html` file:
```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/higlass@1.11.3/dist/hglib.css">
</head>
```

Use the Gosling.js' react component to visualize your data:

```js
import { GoslingComponent } from "gosling.js";
function App() {
  return (
    <GoslingComponent spec={yourSpec}/>
  );
}
```

Please visit [gosling-react](https://github.com/gosling-lang/gosling-react) to find detailed instruction on using React.