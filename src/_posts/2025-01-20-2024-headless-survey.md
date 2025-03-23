---
layout: post
title: "Results of the 2024 Wagtail headless survey"
date: 2025-01-20 08:18:03 +0000
comments: true
categories: [Wagtail, React, JavaScript]
seo_image: /images/blog/2024-headless-survey/How%20often%20developers%20work%20on%20headless%20Wagtail%20-%202024%20Wagtail%20headless%20survey.png
seo_image_alt: How often developers work on headless Wagtail - 2024 Wagtail headless survey
---

The results of the 2024 Wagtail headless survey are here! There are plenty of expected results plus a few surprises.

<!-- more -->

Late last year, we ran a survey of people who build headless sites with Wagtail, or are considering developing a headless site with Wagtail. It’s a follow-up to our [2022 Wagtail headless survey](https://github.com/wagtail/wagtail/discussions/12664). We’ll use those survey results to inform Wagtail’s direction as part of [RFC 100: Headless support improvements](https://github.com/wagtail/rfcs/pull/100).

46 people responded (thank you!), compared to 29 in 2022 – here are the key results.

![How often developers work on headless Wagtail - 2024 Wagtail headless survey](/images/blog/2024-headless-survey/How%20often%20developers%20work%20on%20headless%20Wagtail%20-%202024%20Wagtail%20headless%20survey.png)

## How often developers work on headless Wagtail

There is a big jump between 2024 and 2022 results, with people reporting that “Most work is on headless” going from 24% to 46%. We expect this is a combination of headless architectures gaining popularity, and the survey being targeted more towards people who choose this type of stack.

Using Wagtail in headless mode is particularly popular for larger projects, where the CMS might only be one of many services providing content or data for the site or app’s pages.

## Deployment of headless websites

![A horizontal bar chart shows four deployment methods for headless front ends. “Same as CMS” leads at 66%, followed by Other at 25%, Vercel at 18%, and Netlify at 7%](/images/blog/2024-headless-survey/Deployment%20of%20headless%20Wagtail%20front-end%20sites%20-%202024%20Wagtail%20headless%20survey.png)

There is a clear pattern here, with “Same as CMS” leading at 66%, followed by Other at 25%, Vercel at 18%, and Netlify at 7%. The overall breadth of platforms is likely as big as shown in our [deployment survey](https://wagtail.org/blog/2023-wagtail-deployment-survey/).

## Familiar front-end tools for Wagtail developers

![A bar chart compares 2024 vs 2022 familiarity scores for eight front-end tools. React leads with 61, Next.js 48, Vue 35, Nuxt 23, Astro 15, Svelte 15, Hugo 6, and Eleventy 5.](/images/blog/2024-headless-survey/Familiar%20front-end%20tools%20for%20headless%20Wagtail%20developers%20-%202024%20Wagtail%20headless%20survey.png)

React and Next.js are still the most commonly known tools. There is a small dip in Vue and Nuxt usage, though this could be down to the survey’s small sample size. Astro usage is taking off! Introduced in 2023, there are currently on the order of 30,000 websites built with the framework [according to Wappalyzer](https://www.wappalyzer.com/technologies/static-site-generator/astro/).

## Frameworks for future projects

![Frameworks developers consider for future projects - 2024 Wagtail headless survey](/images/blog/2024-headless-survey/Frameworks%20developers%20consider%20for%20future%20projects%20-%202024%20Wagtail%20headless%20survey.png)

Similar trends are reflected in what developers say they would consider using for future projects, here with Astro on par with more established options like Nuxt or Remix. For Wagtail, knowing what developers are interested in will help us decide what technologies to use in tutorials or demo sites.

## Front-end rendering

![A bar chart shows front-end rendering approaches for headless sites. Single-page apps are most common at 52%, then server-rendered at 43%, static HTML at 11%, and mobile apps at 2%](/images/blog/2024-headless-survey/Front-end%20rendering%20of%20headless%20Wagtail%20sites%20-%202024%20Wagtail%20headless%20survey.png)

While a lot of modern front-end frameworks make the line between static and dynamic rendering blurrier, it’s interesting to see the distribution in practice! We will want to consider how Wagtail could support each and every one of those use cases.

## Integration method with the backend

![Comparison bar chart for 2024 vs 2022. REST still dominates at 93% (down slightly from 96%), GraphQL usage dropped from 52% to 28%, and Elasticsearch is at 2% in 2024.](/images/blog/2024-headless-survey/Integration%20method%20with%20the%20backend%20-%202024%20Wagtail%20headless%20survey.png)

REST is as popular as ever, whether with Wagtail’s built-in Django REST Framework support, or a custom integration to [leverage OpenAPI schemas](https://drf-spectacular.readthedocs.io/en/latest/), or [Django Ninja](https://django-ninja.dev/). The question wording of "When building headless sites, which method of integration would you consider?" makes it clear multiple answers are ok, so it’s interesting to see so many people considering both REST and GraphQL.

And for the one person using Elasticsearch for this – you’re not alone! Though they might not be in our survey respondents, there are a reasonable number of websites sharing Wagtail and Django solely via a search backend.

## The future: priority areas to improve headless support in Wagtail

![Comparison bar chart of 2024 vs 2022. Top items are Page Preview at 61%, REST API support at 57%, API schemas at 54%, and Documentation at 37%. API schemas, images, and others follow at lower percentages.](/images/blog/2024-headless-survey/Priority%20areas%20to%20improve%20headless%20support%20in%20Wagtail%20-%202024%20Wagtail%20headless%20survey.png)

This list is a good overview of all the options for us to improve headless support – and the voting really helps making it clear what gaps Wagtail developers think are worth addressing. In addition to this quantitative data, we also got some great feedback in individual comments:

- Reduce the need for custom serializers
- Support generation of OpenAPI specifications for documentation, and to generate TypeScript type definitions
- Consider how to support Django Ninja
- The documentation needs more examples – say StreamField blocks in GraphQL.
- HTMX support – where does this get factored in.
- An official JS client API like [wagtail-js](https://github.com/traleor/wagtail-js)?

## [Review our RFC: Headless support improvements](https://github.com/wagtail/rfcs/pull/100)

As part of [RFC 100: Headless support improvements](https://github.com/wagtail/rfcs/pull/100), we hope to create a solid overview of all possible improvements, and make it clear which ones are ready for people to contribute to. And in the meantime, if you’re considering headless Wagtail – take a look at our [headless developer docs](https://docs.wagtail.org/en/latest/advanced_topics/headless.html), and our [overview of headless Wagtail](https://wagtail.org/headless/)!
