---
title: Frequently Asked Questions
---

A list of frequently asked questions about Gosling.js.

## How to debug gosling specs?

To check whether your gosling spec is valid, you can either
- copy-and-paste your spec on the [online Editor](http://gosling.js.org) to see if there is any warning message.
- call a validation function `console.log(gosling.validateGoslingSpec(yourSpec));`

## How to show Gosling Tooltips that are hidden under other components?
You can modify the z-index of the tooltip components to address this issue.

```css
/* override styles of tooltips */
.track-mouseover-menu {
   z-index: 1;
}
```
HiGlass defines the original [CSS styles of the tooltips](https://github.com/higlass/higlass/blob/54f5aae61d3474f9e868621228270f0c90ef9343/app/styles/HiGlass.module.scss#L54).


## The component is rendered in React but there is no visualization

<img src="https://user-images.githubusercontent.com/44389194/136196719-abefef53-49e0-4ea5-8dae-a438fa6d5f33.png" alt="bug_screenshot"/>

For problems like this, please ensure that you have added the following style sheets in your base html file.

```html
<head>
  ...
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://unpkg.com/higlass@1.11.3/dist/hglib.css">
</head>
```
Please refer to [Use Gosling.js in React App](http://gosling-lang.org/docs/#use-goslingjs-in-react-app) for more details.

## How to make Gosling visualizations responsive?

To make Gosling visualizations responsive, you need to listen to the resize event and update the `width` property accordingly.  
Below is an example in React app.

```javascript
// Change the width upon resize event of the browser
useEffect(() => {
  window.addEventListener(
    "resize",
    debounce(() => {
      // this value is used to set `width` of a track when updating spec
      setVisPanelWidth( window.innerWidth ); 
    }, 500) // wait for 500ms instead of updating right away
  );
}, []);
```
