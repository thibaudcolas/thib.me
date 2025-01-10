---
layout: post
title: "Reflections on grid-aware websites"
date: 2025-01-10 08:56:37 +0100
comments: true
categories: [Wagtail, Community, Sustainability]
---

I’m lucky to be representing Wagtail as part of the Green Web Foundation’s Grid-aware Websites project. Here are some of my thoughts on the concept, and what I hope to bring back to the Wagtail and Django communities.

<!-- more -->

Those reflections are from two meetings about the project, the very beginning, so there’s lots to figure out still! But here we are.

For context – read [Introducing our grid-aware websites project](https://www.thegreenwebfoundation.org/news/introducing-our-grid-aware-websites-project/) from the Green Web Foundation, and for even more context, Hannah’s [Reflections on our first advisory group meeting for Grid-aware Websites](https://www.thegreenwebfoundation.org/news/first-grid-aware-websites-advisory-group-meeting/). For the TL;DR; context, this project is about making websites more energy-efficient as and when needed. It’s a collab between the Green Web Foundation, and a panel of Content Management Systems representatives:

![A visual spider diagram with the faces and names of the members of the Green Web Foundation grid-aware websites advisory board](/images/blog/reflections-on-grid-aware-websites/grid-aware-websites-advisory-board-members.jpg)

> A visual representation of the grid-aware websites advisory group. Credit: Green Web Foundation

---

In practice - if you want a quick real-world example, see the [Branch Magazine website](https://branch.climateaction.tech/).

## My TL;DR; take on the grid awareness concept

Lots of site users and stakeholders appreciate having a lower-footprint website. Grid awareness makes that possible, since there is so much data available now, live, on how carbon-intense the electricity grid is. The Green Web Foundation’s approach also has the potential to be simple to retrofit onto existing sites and web apps, Wagtail or no. Rolling this out on a site will also increase users’ and stakeholders’ awareness of sustainability, which is a win for all of us.

## Project framing

We were asked to reflect on whether, or how, we could make the case that:

> A grid-aware website means a better experience for the user.

I’ve struggled a lot with this, as I generally start from the position that we should focus on making a singular default experience better for everyone. However – some people do want lower-footprint websites! It’s a fallacy to assume we can make the one canonical version of a website the best for everyone, as is clear from working on accessibility, where it’s critical for sites to adapt to user needs (color themes, font sizes, responsive, etc).

So – I believe a grid-aware website can be a better experience _if_ we put users in control of their experience, and their browsing’s footprint. In that scenario, with perhaps different themes or versions of a site available for users to choose from: grid awareness means a better default experience for all, while adapting based on the gri. A good, low-footprint site when needed according to the grid – and users can switch back to a higher-footprint version when they want.

For the project group, in as few words as possible, I put it as:

> Website users care about their footprint. They fiddle with website or app controls to lower it. Those added user controls increase user agency, but also cognitive effort. Grid awareness means a safe default. Grid awareness helps users lower their footprint, by automatically adjusting the site when it matters.

---

Additionally, I believe there are obvious benefits for battery life and data costs of mobile devices. See for example the [Save-Data header](https://www.keycdn.com/blog/save-data), and how it’s used by Opera and Android devices.

## Grid awareness mental model

It’s been hard for me to have a good mental model of the "grid-aware" mindset, and deciding based on what criteria to switch between the "regular" and "low-footprint" versions of a page. I’m wondering about things like:

- How to communicate this with stakeholders who might or might not be aware of the grid energy mix or carbon intensity.
- Whether / how much to try to align this with any website goals (say a KPI on carbon intensity per page view, or overall Net Zero goals)
- How much to grapple with any social equity considerations. There are a lot of configuration options where the "grid aware" mode would kick in 100% of the time for people in countries with carbon-intensive energy grids. I’m not sure if that’s a good thing or not.

I’ve arrived at those questions when trying to choose between the different ways to switch between the "vanilla" and "low footprint" versions of the site – specifically choosing between he "power breakdown" and "grid intensity" methods derived from Electricity Maps, and within those two, choosing between "low-carbon" and "renewable" electricity mix, and "average" or "limit" grid intensity. I believe there’ll be lots of people asking themselves which of those to choose from based on their needs.

### Terminology for the methodology

One other thing I’ve struggled with a bit is terminology, whether we’re using "grid-aware" to refer to the behavior of a website that adapts based on the grid, or whether "grid-aware" is the state of a website only when it is being adapted for a high-intensity grid. Semantics… Not sure this is super crucial but through all of this I’m trying to think hard of how I would pitch this to stakeholders and CMS site implementers, so the clearer the better. And for site users, how we would communicate what version of the site they’re looking at (Branch Magazine uses the term "Grid intensity view" which can be "Live", "Low", "Moderate", "High").

### Design philosophy

The last conceptual element I grappled with was when comparing the two modes on the site, which one to consider as the "default", if any. For example in Responsive Web Design, there was a switch towards a Mobile First design and coding approach. In front-end dev, there’s the progressive enhancement and the graceful degradation philosophies.

## A UI-UX catalogue to demonstrate grid awareness

This would be excellent! With assorted case studies, possibly measurements with the excellent [Firefox Profiler’s support for power usage metrics](https://www.thegreenwebfoundation.org/news/carbon-emissions-in-browser-devtools-firefox-profiler-and-co2-js/).

I’d also like to see very solid examples of grid-awareness on/off controls for site users. Where to place them on the page? Header? Space is at a premium. Footer? Will never be found.

## Sharing the project

For Wagtail, I’m hoping we will be able to kick off adoption with a [Google Summer of Code](https://summerofcode.withgoogle.com/) project. Beyond that, a solid "zero to grid-aware" tutorial in say 30min (conference workshop friendly format) will also be excellent.

## Up next

I’m glad to be part of this! And impressed at how well the Green Web Foundation team facilitates a positive collaboration on such a tricky topic as website sustainability, with so many different stakeholders involved. I’m looking forward to the next meeting!

And for Wagtail – look out for a grid-aware version of our [Wagtail.org website](https://wagtail.org/), or of the [Wagtail user guide website](https://guide.wagtail.org/).
