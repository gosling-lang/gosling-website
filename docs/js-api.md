---
title: JavaScript API Functions
---

This is a full list of JavaScript API functions supported in Gosling.js. 
you need to create a [Ref](https://reactjs.org/docs/refs-and-the-dom.html) to use API functions.
```javascript
import React, { useRef, useEffect } from "react";
import { GoslingComponent} from 'gosling.js';

const gosRef = useRef(null)

<GoslingComponent
       ref = {gosRef}
       spec = {/**your gosling spec**/}
/>

if (gosRef.current) {
   // then you can use any Gosling API you want
   gosRef.current.api.exportPdf();
 }
```

To find an working example, please visit [gosling-lang/gosling-react](https://github.com/gosling-lang/gosling-react).

### zoomTo

This function makes a view navigate to a specific genomic position with the animated transition.

```javascript
api.zoomTo(viewId: string, position: string, padding?: number, duration?: number)
```

**Parameters**

- **viewId**: string
The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec.

- **position**: string
The genomic position that your view should be navigated to. You can either specify chromosome (e.g., `chr1`) or a chromosome and range pair (e.g., `chr1:1-10000`).

- **padding?**: number
This determines the padding around the specified position. The unit of this number is a base pair (Default: `0`).

- **duration?**: number
A duration of the animated transition in ms (Default: `1000`).

## zoomToExtent 
```javascript
api.zoomToExtend(viewId: string, duration?: number)
```

This function zooms out the specified view to see entire genome.

**Parameters**

- **viewId**: string
The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec.

- **duration?**: number
A duration of the animated transition in ms (Default: `1000`).


## zoomToGene 
```javascript
api.zoomToGene(viewId: string, gene: string, padding?: number, duration?: number)
```
This function makes a view navigate to a certain gene with animated transition.

**Parameters**

- **viewId**: string
The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec.

- **gene**: string
The target gene symbol that your view should be navigated to (e.g., `MYC`).

- **padding?**: number
This determines the padding around the specified position. The unit of this number is a base pair (Default: `0`).

- **duration?**: number
A duration of the animated transition in ms (Default: `1000`).

## getViewIds 
```javascript
api.getViewIds()
```

**Return**

Returns a list of IDs that are assigned to individual views. 
This function can be used prior to navigation functions to check whether certain view IDs exist.

## exportPng 
```javascript
api.exportPng(transparentBackground?: boolean)
```

**Parameters**

- **transparentBackground?**: boolean
Determine if the background should be transparent or not (Default: `false`).

## exportPdf 
```javascript
api.exportPdf(transparentBackground?: boolean)
```

**Parameters**

- **transparentBackground?**: boolean
Determine if the background should be transparent or not (Default: `false`).


## getCanvas
```javascript
api.getCanvas(options?: { resolution?: number; transparentBackground?: boolean })
```

**Parameters**


- **options.resolution?**: number
Relative resolution of Gosling.js visualization (Default: `4`).

- **options.transparentBackground?**: boolean
Determine if the background should be transparent or not (Default: `false`).

**Return**
Returns a canvas that renders Gosling.js visualization:
```javascript
{
    canvas: HTMLCanvasElement;
    canvasWidth: number;
    canvasHeight: number;
    resolution: number;
};
```



## subscribe 
```javascript
api.subscribe(eventName:string, callback: (msg:string, eventData)=>void)
```
Subscribe the callback function to the specified event.

**Parameters**

- **eventName**: string
Specify the event using its name.
One of `"mouseOver"`, `"rangeSelect"`, `"click"`, `"rawData"`, `"onNewTrack"`, `"onNewView"`, `"location"`, `"specProcessed"`. 

- **callback**: `(msg:string, eventData)=>void`
  A function that is subscribed to the specified event.
  - For `"onNewTrack"` and `"onNewView"`, the `eventData` contains just the `id` of a track or view that has been added. These API functions can be useful if you want to know when certain tracks and views have been added.
  ```javascript
  { 
      id: string
  }
  ```
  - For `"rawData"`, the `eventData` stores columnar data that has been used internally in Gosling to display the view:
  ```javascript
  { 
      id: string,
      data: {[k:string]: number|string}[]
  }
  ```

  - For `"mouseOver"` or `"Click"`, the `eventData` stores the genomic position of the event and the columnar data corresponding to the visual mark that is either clicked or mouse overed.
   ```javascript
    { 
        id: string,
        data: {[k:string]: number|string}[],
        genomicPosition: {chromosome: string, position: number}
    }
    ```

  - For `"rangeSelect"`, the `eventData` stores the genomic range of the range select event and the columnar data corresponding to all selected visual marks that are within a range brush.
  ```javascript
  { 
      id: string,
      data: {[k:string]: number|string}[],
      genomicRange: [
        {chromosome: string, position: number}, 
        {chromosome: string, position: number}
      ]
  }
  ```
  - For `"location"`, the `eventData` contains the genomic range of a track. Every time a track axis range changes, this 
  API gets updated. For example, if a user zooms in to a track, the axis range changes, and the location API gets updated. 
  If the axis starts before the first chromosome, the start of the genomic range will return the beginning of the first chromosome. 
  If the axis ends after the last chromosome, the end of the genomic range will be the last position in the last chromosome. 
  ```javascript
  { 
      id: string, 
      genomicRange: [
        {chromosome: string, position: number}, 
        {chromosome: string, position: number}
      ]
  }
  ```

    - For `"specProcessed"`, the `eventData` stores the spec as processed in the compiler, resolving defaults and attributes inherited from a parent view, as well as flattening overlaid tracks. 
  ```javascript
  { 
      id: string,
      spec: GoslingSpec
  }
  ```

## unsubscribe
```javascript
api.unsubscribe(eventName:string)
```

Unsubscribe the callback function from the specified event.
**Parameters**

- **eventName**: string
Name of the event.
One of `"mouseOver"`, `"rangeSelect"`, `"click"`, `"rawData"`, `"location"`, `"specProcessed"`. 