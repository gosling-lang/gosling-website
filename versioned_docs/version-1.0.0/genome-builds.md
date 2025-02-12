---
title: Genome 
description: Specify the the genome your visualization uses. 
---
For Gosling to show the correct genomic axis range for your data, you must specify what genome or human genome assembly Gosling should use. 

## Human genome 
You can specify which human genome assembly your data uses using the `assembly` property (default: `"hg38"`).

```typescript
{
  "assembly": "hg38", // Globally define assembly to all tracks except ones that specify a certain assembly
  "tracks": [{
    ..., "assembly": "hg19" // Use a different assembly for this track
  }],
  ...
}
```

Gosling currently supports the following six genome builds: `"hg38"`, `"hg19"`, `"hg17"`, `"hg16"`, `"mm10"`, `"mm9"`, and `"unknown"`.  

## Non-human genomes
For non-human genomes, you can specify custom chromosome sizes. For example, the E. coli genome has a single chromosome, which has a length of 4641652 bases. 
``` typescript
{
  "assembly": [["chr1", 4641652], ["chr2", 323132]], // two chromosomes, one with length 4641652 nt, one with length 323132
  "tracks": [{
    ...,
  }],
  ...
}
```

You can also specify multiple chromosomes! 

``` typescript
{
  "assembly": [["U00096.3", 4641652], []], // The E. coli chromosome name is U00096.3
  "tracks": [{
    ...,
  }],
  ...
}
```


When `{"assembly": "unknown"}`, the genomic axes do not display `chrN:` in labels.