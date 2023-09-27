---
title: Getting Started
slug: /
---

Gosling.js is a declarative grammar for interactive (epi)genomics visualization on the Web.

To get started with Gosling, we recommend going through the [Create Single Track Visualization Tutorial]('/tutorials'). Then, you can explore examples in the [online editor](https://gosling.js.org), and start building your own Gosling visualizations using the the grammar and Javascript API parts of the documentation as a reference. 

## What is a grammar for visualization?
Words are combined together into a sentences based on their parts of speech and grammar rules. In a similar way, visual components (such as a coordinate axis, plot markers, and legend) have specific roles and are combined according to certain rules. You probably know these rules without realizing it! People have tried making these rules explicit in what they call a "visual grammar."

Similarly, *genomic* data visualizations can be understood as being made up of components which follow a set of rules. The **Gosling grammar** formalizes these rules for genomic data visualizations. 

How is the Gosling grammar used in practice? A Gosling visualization is defined using a **Gosling specification**, which is a JSON object. The structure and values within this JSON object are determined by the Gosling grammar. See the example below to see how parts of a Gosling specification corresponds to its visualization. 

<img src='/img/spec-vis.png'/>

## Javascript API 

**Gosling.js** takes the Gosling specification as an input and creates the visualization defined by it. You can programmatically interact with this visualization using **Javascript API functions**. 

For example, you can use an API function to make the visualization zoom to a particular genomic position, or you can subscribe to click events in the visualization. This is useful to building your own interactive visualizations with Gosling! 