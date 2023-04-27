---
layout: post
title: "Reusable UI components – A journey from React to Wagtail - Wagtail Space US 2020"
date: 2020-07-31 02:15:22 +0100
comments: true
categories: [Accessibility, Wagtail, Talks]
---

This is Ben Dickinson and I’s joint [Wagtail Space US 2020](https://us.wagtail.space/) talk about pattern libraries at Torchbox, introducing [django-pattern-library](https://github.com/torchbox/django-pattern-library).

<!-- more -->

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/isrOufI7TKc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Slides: [Wagtail Space US 2020 - Reusable UI components – A journey from React to Wagtail](https://docs.google.com/presentation/d/1pZAbunn0Ci8B9NR0mS5taOPe7BMdAiDrKNIcd9xBWO4/edit)

---

## Pattern libraries as a methodology

### Atomic Design

### Pattern Lab

## React

### A paradigm shift

- Component-driven UIs
- Functional programming for UIs
- Not a template language

### What makes React good in practice

- Nice developer experience
- Reusable components
- Maintainable, testable code
- Component-driven development with Storybook

### Pattern libraries at Torchbox

The codified interface between front-end and back-end work

- Clarifies responsibilities, separates concerns, both in code, and as members of a development team
- If needed, makes it possible for front-end developers to work on pages and block templates before the models are done
- Encourages code reuse -- defining independent UI components, easy to port to other projects

### Current trends: design systems

- [USWDS](https://designsystem.digital.gov/)
- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [Sainsbury's Luna](https://luna.sainsburys.co.uk/)
- [Stanford's Decanter](https://decanter.stanford.edu/)

## Why develop another pattern library tool?

### Challenges

- Most of our projects are not API-driven React SPAs - they're vanilla Django/Wagtail
- Django has a proprietary template language
- Translating non-Django templates from a pattern library is time-consuming and error-prone
- Duplicating templates is a maintenance burden and often leads to divergence

### More challenges!

- Template tags are great, but are discouraged by using a pattern library that doesn’t support them
- Tags often depend on the database (e.g. `include_block foo`)
- Visual testing requires time-consuming manual setup
- Django’s native testing tools are inadequate for visual testing - especially cross-browser

### Pattern Lab goes Django!

pip install django-pattern-library

### Features

- Component playground for Django template partials
- Mock template context from YAML files
- Template documentation in markdown
- Mock out template tags (both built-in and user-defined tags)

### Advantages

- No duplication of templates - the pattern library uses the real templates
- All components can be viewed in one place
- Easier visual testing
- No need for content in the DB
- Front-end development can happen before the models are ready

### Known issues

- Documentation is good but could be much better
- Context merging is fragile and requires some repetition in YAML files
- Template tag mocking is not flexible enough
- No support for mocking filters yet
- Richer objects are fiddly to mock (e.g. `{{ form.as_p }}`)

## Demo time!

### First demo

### Second demo

[storybook-django](https://storybook-django.herokuapp.com/?path=/docs/django-patterns-streamfield-quote-block--default)

## Takeaways 🌈

### Why we recommend this approach

- As a methodology: speeds up the process for medium to large sites
- Reusable components: Encourages code reuse and UI consistency across the site
- Testing opportunities: Manual "unit tests" for UI components, & opportunities for automated visual regression / E2E / accessibility tests

### Ready to use

- Used for all production Wagtail sites at Torchbox: [django-pattern-library](https://github.com/torchbox/django-pattern-library)
- Experimental, used on two projects, feedback welcome: [storybook-django](https://github.com/torchbox/storybook-django)
- For all our React projects: [Storybook](https://storybook.js.org/)

### Ready for contributions 😬

- Open-sourced [django-pattern-library](https://github.com/torchbox/django-pattern-library) a few months ago
- [storybook-django](https://github.com/torchbox/storybook-django) still very experimental
- Feedback welcome

Backlog for the next three months: [github.com/torchbox/django-pattern-library/projects/3](https://github.com/torchbox/django-pattern-library/projects/3)

## Thank you!

Thank you to Dan, Tom, William, Nick for helping us rehearse!
