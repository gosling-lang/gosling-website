---
title: JavaScript API
---

## GoslingComponent

A React component which takes a Gosling specification and generates the visualization defined by it. 

```javascript
import { GoslingComponent} from 'gosling.js';

<GoslingComponent spec = {/**your gosling spec**/} />
```


| Parameter          | Type   | Description                                                              |
| ----------------- | ------ | ------------------------------------------------------------------------ |
| `spec`              | object | The [Gosling specification](reference) the component will create a visualization from |
| `padding`           | number | Padding around the component                                             |
| `margin`            | number | Margin around the component                                              |
| `border`            | string | Border style of the component                                            |
| `id`                | string | Id of the component                                                      |
| `className`         | string | CSS class to apply to the component                                    |
| `theme`             | object | See [themes](../../themes)                                               |
| `urlToFetchOptions` | object | Each object follows the form `"{[url: string]: RequestInit}"` where [RequestInit](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.requestinit.html) is also an object. When fetching data from URL which matches a key in this object, Gosling will use the corresponding `RequestInit` when making the fetch request.                   |


## GoslingComponent ref

`GoslingComponent` can take a [Ref](https://react.dev/learn/referencing-values-with-refs) which exposes an API which can be used to control or respond to changes in the 
component. 

```javascript
import React, { useRef, useEffect } from "react";
import { GoslingComponent} from 'gosling.js';

const gosRef = useRef(null)

<GoslingComponent
      // highlight-start
       ref = {gosRef}
      // highlight-end
       spec = {/**your gosling spec**/}
/>

if (gosRef.current) {
   // then you can use any Gosling API you want
   // highlight-start
   gosRef.current.api.exportPdf();
   // highlight-end
 }
```

To find an working example, please visit [gosling-lang/gosling-react](https://github.com/gosling-lang/gosling-react).

### zoomTo

This function makes a view navigate to a specific genomic position with the animated transition.

```javascript
gosRef.current.zoomTo(viewId: string, position: string, padding?: number, duration?: number)
```

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `viewId` | string | The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec. |
| `position` | string | The genomic position that your view should be navigated to. You can either specify chromosome (e.g., `chr1`) or a chromosome and range pair (e.g., `chr1:1-10000`). |
| `padding?` | number | This determines the padding around the specified position. The unit of this number is a base pair (Default: `0`). |
| `duration?` | number | A duration of the animated transition in ms (Default: `1000`). |

### zoomToExtent

```javascript
gosRef.current.api.zoomToExtend(viewId: string, duration?: number)
```

This function zooms out the specified view to see entire genome.

**Parameters**

| Parameter | Type   | Description                                                                                          |
| --------- | ------ | ---------------------------------------------------------------------------------------------------- |
| `viewId`  | string | The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec. |
| `duration?` | number | A duration of the animated transition in ms (Default: `1000`). |

### zoomToGene

```javascript
gosRef.current.zoomToGene(viewId: string, gene: string, padding?: number, duration?: number)
```

This function makes a view navigate to a certain gene with animated transition.

**Parameters**

| Parameter | Type   | Description                                                                                          |
| --------- | ------ | ---------------------------------------------------------------------------------------------------- |
| `viewId`  | string | The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec. |
| `gene`    | string | The target gene symbol that your view should be navigated to (e.g., `MYC`).                            |
| `padding?` | number | This determines the padding around the specified position. The unit of this number is a base pair (Default: `0`). |
| `duration?` | number | A duration of the animated transition in ms (Default: `1000`). |

### getViewIds

```javascript
gosRef.current.getViewIds();
```

**Return**

Returns a list of IDs that are assigned to individual views.
This function can be used prior to navigation functions to check whether certain view IDs exist.

### exportPng

```javascript
gosRef.current.exportPng(transparentBackground?: boolean)
```

**Parameters**

| Parameter                | Type    | Description                                                               |
| ------------------------ | ------- | ------------------------------------------------------------------------- |
| `transparentBackground?` | boolean | Determine if the background should be transparent or not (Default: `false`). |
### exportPdf

```javascript
gosRef.current.exportPdf(transparentBackground?: boolean)
```

**Parameters**

| Parameter                | Type    | Description                                                               |
| ------------------------ | ------- | ------------------------------------------------------------------------- |
| `transparentBackground?` | boolean | Determine if the background should be transparent or not (Default: `false`). |
### getCanvas

```javascript
gosRef.current.getCanvas(options?: { resolution?: number; transparentBackground?: boolean })
```

**Parameters**


| Parameter                 | Type    | Description                                                                                          | Default |
| ------------------------- | ------- | ---------------------------------------------------------------------------------------------------- | ------- |
| `options.resolution?`     | number  | Relative resolution of Gosling.js visualization                                                      | `4`     |
| `options.transparentBackground?` | boolean | Determine if the background should be transparent or not                                            | `false` |

**Return**
Returns a canvas that renders Gosling.js visualization:

```javascript
{
  canvas: HTMLCanvasElement;
  canvasWidth: number;
  canvasHeight: number;
  resolution: number;
}
```

### subscribe

```javascript
gosRef.current.subscribe(eventName:string, callback: (msg:string, eventData)=>void)
```

Subscribe the callback function to the specified event.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `eventName` | string | Specify the event using its name. One of `"mouseOver"`, `"rangeSelect"`, `"click"`, `"rawData"`, `"onNewTrack"`, `"onNewView"`, `"location"`. |
| `callback` | `(msg:string, eventData)=>void` | A function that is subscribed to the specified event. |
  - For `"onNewTrack"` and `"onNewView"`, the `eventData` contains just the `id` of a track or view that has been added. These API functions can be useful if you want to know when certain tracks and views have been added.

  ```javascript
  {
    id: string;
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

### unsubscribe

```javascript
gosRef.current.unsubscribe(eventName:string)
```

Unsubscribe the callback function from the specified event.
**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `eventName` | string | Name of the event. One of `"mouseOver"`, `"rangeSelect"`, `"click"`, `"rawData"`, `"location"`. |
