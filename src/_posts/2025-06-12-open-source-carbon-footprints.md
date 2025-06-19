---
layout: post
title: "Open Source Carbon Footprints"
date: 2025-06-12 09:31:08 +0100
comments: true
categories: [Django, Python, Open Source, Sustainability, Podcast]
seo_image: /images/blog/open-source-carbon-footprints/EV_111_Thibaud_Colas.jpg
seo_image_alt: Open Source Carbon Footprints - Environment Variables Ep. 111, hosted by Chris Adams, Guest Thibaud Colas
---

Last week I was on Environment Variables, talking about carbon footprints and sustainability in open source. Here are my extended show notes!

<!-- more -->

This is a links-heavy version of what we discussed, for people who want to follow references.

## The recording

Get it here:

<iframe id="platformiFrmpnm526kn" src="https://player.castplus.fm/environment-variables/pnm526kn-open-source-carbon-footprints" frameborder="0" height="417"  seamless="true" style="width:100%;height:417px;" width="100%"></iframe>

It’s also [available on YouTube](https://www.youtube.com/watch?v=oY1HHhUjInY) if you’d prefer to watch Chris and I talk.

## The topic

We had a few things lined up but the overarching theme was the importance of considering the carbon footprint of software in open source projects. As Wagtail Product Lead at Torchbox, and President of the Django Software Foundation, I’ve spent a fair bit of time thinking about the footprints of Wagtail and Django, and considering how we can take ownership of reducing said footprint. Which isn’t easy, as we have little control over how people use our software!

A good illustration of this is the total carbon footprint of Wagtail sites mapped across regions of the world:

![Total carbon footprint of Wagtail sites as a treemap - 8240 tCO2e per year](/images/blog/estimating-wagtail-websites-emissions/total_carbon_footprint_of_Wagtail_sites_as_a_treemap.png)

Most of those sites with I’ve never heard of. That’s just how our relationship with users tends to be in open source software.

## Extended show notes

### Why and how to measure digital carbon footprints

We started by discussing the necessity of measuring digital carbon footprints and how methodologies play a pivotal role. For me this started at Torchbox, quantifying emissions for about 50-100 client websites. Recognizing the scale and complexity involved, we expanded this effort to estimate emissions across the entire Wagtail ecosystem, encompassing thousands of websites.

For Wagtail, we’re talking on the order of 10-20,000 websites, each with a footprint on the order of 0.5 to 1.5 tons of CO2 per year. So 5000 to 15000 tons of greenhouse gas emissions per year. For Django, best case scenario is about 20x that.

#### Choosing methodologies

For websites, here’s our go-to options at Torchbox:

| Initiative                                      | SWD                   | Hosting infrastructure | GreenFrame            | Display power cons.   |
| ----------------------------------------------- | --------------------- | ---------------------- | --------------------- | --------------------- |
| Infrastructure reduction or relocation          | Avoid                 | Recommended            | Inapplicable          | Inapplicable          |
| Back-end / database / server code optimisations | Avoid                 | Consider case-by-case  | Recommended           | Inapplicable          |
| Front-end code optimisations                    | Recommended           | Inapplicable           | Consider case-by-case | Inapplicable          |
| Dark theme                                      | Inapplicable          | Inapplicable           | Inapplicable          | Recommended           |
| Design / product changes                        | Recommended           | Inapplicable           | Consider case-by-case | Inapplicable          |
| Carbon reduction KPIs                           | Consider case-by-case | Consider case-by-case  | Consider case-by-case | Consider case-by-case |

This is from our our 2023 work on methodologies to quantify site emissions, still very relevant in 2025: [Announcing our Digital Emissions Methodologies](https://torchbox.com/news/announcing-our-digital-emissions-methodologies/)

#### Wagtail’s footprint

Wagtail’s 2023 [Estimating Wagtail websites’ emissions](https://wagtail.org/blog/estimating-wagtail-websites-emissions/) was our first attempt at this. We’ve since further refined our approach but haven’t shared the updated 2023 / 2024 / early 2025 numbers yet, because the numbers are changing due to a lot of factors that are hard to reason about:

- The main model we use has switched from [Sustainable Web Design](https://sustainablewebdesign.org/) v3 to v4, which reports generally lower emissions.
- The Ember electricity grid carbon intensity data has generally gone down, which means sites might still use the same amount of energy but pollute less (which is good!).
- Our estimations of Wagtail sites’ page views have gone down, which means lower emissions.
- But the number of sites has gone way up, so the total emissions are still increasing.

So this is pretty confusing! But hey if you want to explore,

- The [Wagtail sites emissions dashboard](https://docs.google.com/spreadsheets/d/18TuJvN-SHDZAFXFFQgVwt5S5kQO-eYiGCHJGQmwed4Q/edit?gid=556001281#gid=556001281) spreadsheets have all the unreleased data.
- [Sustainable Web Design emissions calculator as a spreadsheet](https://docs.google.com/spreadsheets/d/1za9evJpyD_gG9j5nidrK2FhMlPt81a4nOcT2xZuRaOA/edit?gid=0#gid=0) covers the formulas we’re trying to use for SWDM v4.
- [ranking-to-pageviews](https://github.com/thibaudcolas/ranking-to-pageviews) is my side project to extrapolate page views from website Chrome UX report rankings, which is the main data source for Wagtail sites’ page views.

Current goal is to release this data with a representation as [Digital Carbon Ratings](https://sustainablewebdesign.org/digital-carbon-ratings/), but even that adds another layer of indirection, so we’ll see. It looks like that currently, for 2024 figures:

![Digital Carbon Ratings: how Wagtail sites score. April 2024 HTTP Archive data, SWDM v4, 2023-2024 Ember grid carbon intensity, 4889 websites](/images/blog/open-source-carbon-footprints/digital-carbon-ratings-Wagtail-websites-2024.png)

Tentative 2025 figures go up from 4889 to 6431 sites in our dataset.

And there’s also experiments with other ways to quantify a site’s emissions:

- [benchmark-wagtail-demo](https://github.com/thibaudcolas/benchmark-wagtail-demo)
- [bakerydemo-gold-benchmark](https://github.com/thibaudcolas/bakerydemo-gold-benchmark)

## Practical steps towards greener websites

I detailed how Wagtail actively works on reducing websites’ footprint through initiatives like [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/). Over three years, our GSoC projects have tackled sustainability head-on:

1. [Leaner images, lower footprint, at scale](https://wagtail.org/blog/leaner-images-lower-footprint-at-scale/) showcases adoption of modern image formats and responsive image techniques to significantly reduce image weights.
2. The (still work in progress) [low-carbon template](https://github.com/wagtail/low-carbon-template) is our attempt at reducing the footprint of newly-built sites. The designs are finalized and heavily optimized (see below), but the implementation still needs work.
3. And in 2025, [grid-aware websites](https://wagtail.org/blog/reflections-on-grid-aware-websites/) present the opportunity to deliver sizeable reductions on existing sites.

Low-carbon designs by our GSoC contributor [Nandini Arora](https://github.com/nandini584):

![Low-carbon templates design screenshots](/images/blog/open-source-carbon-footprints/gsoc-2024-low-carbon-template.png)

---

There are lots of other steps that projects can take. See for example [my assessment of the Web Sustainability Guidelines](https://thib.me/my-rating-of-web-sustainability-guidelines). The latest [Web Sustainability Guidelines](https://w3c.github.io/sustainableweb-wsg/) are an excellent resource to explore all the possible ways to improve digital sustainability.

## Taking responsibility as an open-source community

Unlike corporate structures with reporting and accounting standards defined by frameworks like the [GHG Protocol](https://ghgprotocol.org/), we don’t have such clear definitions of how to track direct and indirect emissions in open source. My go-to is [GHG Protocol Scope 3 Category 11: Use of Sold Products (PDF)](https://ghgprotocol.org/sites/default/files/standards_supporting/Chapter11.pdf), which is optional to report on in most accounting frameworks, but definitely important in my opinion. However it fits much better to appliances, than open source libraries to build sites and apps with.

I’ve learned a lot from Mozilla’s pioneering work on including Firefox usage emissions in their reporting (2020: [Release: Mozilla’s Greenhouse Gas emissions baseline](https://blog.mozilla.org/en/mozilla/release-mozillas-greenhouse-gas-emissions-baseline/), latest: [Mozilla’s Emissions Data](https://www.mozilla.org/en-US/sustainability/emissions-data/)).

Quoting their work, emphasis mine:

> Per the Greenhouse Gas Protocol, Mozilla is not required to calculate or report the product use emissions (scope 3, category 11) associated with using our products such as Firefox, Hubs and Pocket. However, **Mozilla aims to lead by example and support transparency by reporting this optional data**, and we began doing so in 2019. **By taking this step, we hope to encourage our peers in the technology industry to do the same**.
>
> […]
>
> In 2022, the total emissions from using Mozilla’s products was 533,463 tons of carbon dioxide equivalent (tCO2e).

That’s 533,463 tons for use of Firefox and other projects, compared to 15,281 for all other aspects of Mozilla’s operations. 97% of the total emissions. Similar factors are at play with Wagtail, Django, and most likely lots of other open source projects.

## Setting norms for the open source ecosystem

So we need to bring this type of thinking to more of the open source ecosystem, and the Python world in particular!

For Wagtail, I put together [RFC 90: Sustainability roadmap](https://github.com/wagtail/rfcs/pull/90), a roadmap for sustainability in Wagtail, supporting contributors and setting clear goals. This was with help from [Lauri Apple](https://archive.fosdem.org/2024/schedule/speaker/YH9FCC/), so the roadmap covers possible features / product enhancements but also clear ways to engage our community in those efforts. The changes we can do in this space are entirely dependent on adoption by users, so it’s crucial they understand what’s at stake and why to spend time on this. And formalizing our goals to reduce our footprint also helps us communicate how impactful we think any contributions in this space can be!

Bringing this to the wider Python world though, it takes time to find enough people working on this across projects to get together and move things along. I started on the Python forum in [Who works on digital sustainability in the Python world?](https://discuss.python.org/t/who-works-on-digital-sustainability-in-the-python-world/66890). Will keep things moving for Django and Python as much as possible.

Beyond measurements and reductions, a concrete step that projects can take is to create a sustainability statement, like [Wagtail’s Sustainability page](https://wagtail.org/sustainability/). This helps in communicating intensions, policies if any, and just results to date on how the project is working towards reducing its footprint.

## Looking ahead

Finally, Chris and I touched on the importance of nurturing sustainability expertise within open-source communities and the broader technology industry. [ClimateAction.tech](https://climateaction.tech/) is the best resource here in my experience, a community of technologists who consistently share their knowledge and experiences in digital sustainability.

And for Wagtail, the next step for us is to complete the [grid-aware websites project](https://www.thegreenwebfoundation.org/news/introducing-our-grid-aware-websites-project/) put together by the Green Web Foundation! Hopefully we’ll be able to report back with quantified results in the next few months.
