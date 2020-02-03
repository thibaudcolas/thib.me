---
layout: post
title: First draft – Data quality checklist for dataviz projects
date: 2017-08-27 11:35:03 +0300
comments: true
categories: [Resources, Dataviz, Prototyping]
---

First draft of what could have been a very cool checklist for dataviz efforts where the data is also made reusable.

<!-- more -->

## Structure and format

To be reusable, data needs to be structured consistently and to follow pre-existing standards, vocabularies, and formats.

### The basics

- The data and metadata are provided in a non-proprietary, structured format.
- The data structure is defined.
- The metadata structure is defined.

### Use of standards

- All labels in the dataset follow the same naming convention.
- The naming convention is made available along with the dataset.
- The vocabularies used in the dataset are consistent.
- Use of abbreviations in the dataset is consistent.
- References to other datasets or standards are identified (eg. ISO 3166 2-character country codes for countries, IANA TZ for timezones).

### Units

- Units of measurement are defined for all fields.
- Date and time formats are defined.

## Metadata

Good metadata will facilitate reuse of the dataset, providing the necessary information to identify provenance of the data but also providing context.

### The basics

- Metadata is provided with the dataset
- Metadata is up to date

### For the dataset, are documented

- Title
- Description
- Unique identifier
- Category
- Usage license
- Conditions of attribution, reuse, redistribution and commercialisation
- Creation date
- Last update date
- Publication date
- Author
- Publisher
- Mean of contact for the author or publisher
- Data transformations
- Data sources
- Changelog
- Update frequency

### For geospatial datasets, are documented

- Coverage area
- Coordinate system
- Map projection

## Data

### Validation

- There are no duplicate records in the dataset.
- Missing records are accounted for, to decide whether to surface or ignore them.
- Record structure is the same for all records.
- Units of measurement are the same for all records.
- Missing values are accounted for, to decide whether to surface or ignore them.

Sources:

- <http://checklists.opquast.com/en/opendata/>
- <https://medium.com/@ptvan/how-to-advocate-for-data-throughout-the-project-process-bed6422a4680#.a2vdc9dvw>
- <http://www.periscopic.com/content/how-to-work-with-a-data-visualization-partner/>
