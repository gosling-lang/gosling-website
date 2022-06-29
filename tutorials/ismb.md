---
title: Building Interactive Visualizations of Genomics Data with Gosling 
---
<img src="https://www.iscb.org/images/stories/ismb2022/banner.ISMB2022.png" width="100%" />


## Abstract :pushpin:
Most existing genomic visualization tools are tailored toward specific use cases, lacking the generalizability for reuse and expressivity to build interactive visualizations that scale to the diverse data types and analysis tasks in genomics. The [**Gosling visualization grammar**](http://gosling-lang.org) for [**genome-mapped data**](https://pubmed.ncbi.nlm.nih.gov/34596551) defines primitives that specify how genomics datasets can be transformed and mapped to visual properties, providing building-blocks to compose unique scalable and interactive genomics data visualizations on the web. 
The [**Gos Python library**](https://gosling-lang.github.io/gos/) is designed to enable computational biologists to quickly author Gosling-based visualizations with their own data. 

**In our tutorial, we introduce core concepts of genomic data visualizations and illustrate how they can be applied through hands-on training with Gos in Jupyter Notebooks.**

## Tutorial Info :card_index_dividers:
This webpage is for [our tutorial](https://www.iscb.org/ismb2022-program/tutorials#vt2) held at the ISMB 2022 conference, July 6, 9:00 - 13:00 CDT, 2022. 

** The tutorial slides and materials for hands-on exercises (e.g., code implementation, datasets) will be posted on this website**.


The content and exercise in this tutorial are designed to be engaging and accessible to a broad audience ranging from visualization beginners to experts. 
This tutorial will be most beneficial for biologists working on genomics-related topics and software developers in bioinformatics, 
especially those interested in creating flexible, scalable, and interactive visualizations.

The audience is expected to have a basic understanding about genomics data and practical knowledge of Python programming. 
Some prior experience with technologies like JSON and JavaScript is helpful for the “Applications” session but not required.


## Schedule :calendar:

### Introduction (40mins)
- Goal: Understand how Gosling and Gos fit into the computational biology data visualization tool kit.
- Time: 9:00 - 9:40 
- Overview (5 mins)
- Intro to genomics data visualization (15 mins)
    - Why is interactive visualization important?
    - Why is a grammar-based approach necessary?
- Intro to visualization grammar (20 mins)

### Hands-on Session 1: Single Track (50 mins)
- Goal: Understand expressive encoding in Gosling
- Time: 9:40 - 10:15
  

**[10:15 - 10:30] :coffee: Coffee Break (15 min)**

### Hands-on Session 2: Track Alignment (30 mins)
- Goal: Understand creation of glyph-based visualizations by overlaying
- Time: 10:30 - 11:00
- Examples:
    - Gene annotations
    - Ideograms

### Hands-on Session 3: Semantic Zooming (45 mins)
- Goal: Understand the concept of semantic zooming and create an example
- Time: 11:00 - 11:45
- Examples:
    - Clinvar lollipop plot

**[11:45 - 12:00] :coffee: Coffee Break (15 min)**

### Hands-on Session 4: Multiple Coordinated View (30 mins)
- Goal: Understand construction of coordinated multiple views
- Time: 12:00 - 12:30
- Examples
    - Structural Variants in Cancer (circular overview + two detail views)

### Hands-on Session 5: Share Your Visualizations (20 mins)
- Goal: Learn how gos visualizations can be (seamlessly) deployed on the web and embedded in other applications
- Time: 12:30 - 12:50
- Examples:
    - share a Gosling visualization through a simple URL
    - share a Gosling visualization through a minimal HTML file
    - share a Gosling visualization through Github Gist and Gosling online editor

- Ecosystem of Gosling
    - Gosling-React
    - Streamlit-Gosling


### Closing (10 mins)
- Time: 12:50 - 13:00
  



## Presenters :speech_balloon:
The presenters are the inventors of the Gosling grammar and developers of the Gos library from [Gehlenborg Lab](http://gehlenborglab.org/).

- [Sehi L’Yi](https://twitter.com/sehi_lyi),
    Postdoctoral Research Fellow, Harvard Medical School
- [Trevor Manz](https://twitter.com/trevmanz),
    PhD Student, Harvard Medical School
- [Qianwen Wang](https://twitter.com/WangQianwenToo)
    Postdoctoral Research Fellow, Harvard Medical School
- [Nils Gehlenborg](https://twitter.com/ngehlenborg)
    Associate Professor, Harvard Medical School


## Helpful Links :link:
- [Start & Follow us on Github ](https://github.com/gosling-lang)
- [Read our Gosling Paper ](https://osf.io/6evmb/)