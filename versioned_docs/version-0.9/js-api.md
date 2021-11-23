---
title: JavaScript API Functions
---

This is a full list of JavaScript API functions supported in Gosling.js. To find an actual usage with an working example, please visit [gosling-lang/gosling-react](https://github.com/gosling-lang/gosling-react).

## zoomTo <small>(viewId: string, position: string, padding?: number, duration?: number)</small>
This function makes a view navigate to a certain genomic position with animated transition.

#### viewId: string
The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec.

#### position: string
The genomic position that your view should be navigated to. You can either specify chromosome (e.g., `chr1`) or a chromosome and range pair (e.g., `chr1:1-10000`).

#### padding?: number
This determines the padding around the specified position. The unit of this number is a base pair (Default: `0`).

#### duration?: number
A duration of the animated transition in ms (Default: `1000`).

## zoomToExtent <small>(viewId: string, duration?: number)</small>
This function zooms out a view to see entire genome.

#### viewId: string
The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec.

#### duration?: number
A duration of the animated transition in ms (Default: `1000`).

## zoomToGene <small>(viewId: string, gene: string, padding?: number, duration?: number)</small>
This function makes a view navigate to a certain gene with animated transition.

#### viewId: string
The ID of a view that you want to control. This ID is consistent to what you specify as `track.id` in your spec.

#### gene: string
The target gene symbol that your view should be navigated to (e.g., `MYC`).

#### padding?: number
This determines the padding around the specified position. The unit of this number is a base pair (Default: `0`).

#### duration?: number
A duration of the animated transition in ms (Default: `1000`).

## getViewIds <small>( )</small>
Returns a list of IDs that are assigned to individual views. This function can be used prior to navigation functions to check whether certain view IDs exist.

## exportPng <small>(transparentBackground?: boolean)</small>
Opens a dialog to save a PNG file of current Gosling.js visualization.

#### transparentBackground?: boolean
Determine if the background should be transparent or not (Default: `false`).

## exportPdf <small>(transparentBackground?: boolean)</small>
Opens a dialog to save a PDF file of current Gosling.js visualization.

#### transparentBackground?: boolean
Determine if the background should be transparent or not (Default: `false`).

## getCanvas <small>(options?: { resolution?: number; transparentBackground?: boolean })</small>
Returns a canvas that renders Gosling.js visualization:

```javascript
{
    canvas: HTMLCanvasElement;
    canvasWidth: number;
    canvasHeight: number;
    resolution: number;
};
```

#### options.resolution?: number
Relative resolution of Gosling.js visualization (Default: `4`).

#### options.transparentBackground?: boolean
Determine if the background should be transparent or not (Default: `false`).
