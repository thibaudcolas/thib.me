---
layout: post
title: "DjangoCon Europe 2022: Component-driven UI development with Django and Storybook"
date: 2022-09-21 16:07:49 +0100
comments: true
categories: [Django, Wagtail, Project]
---

In the modern JavaScript landscape, component-focused UI frameworks are the norm. We’ll look at how the team behind Wagtail brought component-driven development from React to Django templates with Storybook, speeding up the development process and simplifying maintenance of large pattern libraries.

<!-- more -->

[View the slides from the DjangoCon Europe 2022 talk](https://docs.google.com/presentation/d/18bqkUSyCt6lzFQ_M4W6Js01z7mcWEmNdcP3ATlJBA1Y/edit)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fke3NYdnPBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Django doesn't have many opinions about front-end development. This is a blessing and a curse -- it means a lot of freedom for projects to approach UIs however they see fit, but also a lot of choices to make on each and every project. It also means the Django ecosystem is lagging far behind more modern platforms.

It doesn't have to be this way. The team behind the Wagtail CMS spent a lot of time refining how they approach UI development in the context of Django projects, and we'll now get to learn from their experience.

We started with workflows that work well with React: components are first-class citizens, and tools like Storybook playing to those strengths. We then adapted this for Django, building a full-fledged design system and making the most of automation to test our user interface.

In this talk we'll cover,

- Component-driven development as a methodology
- Tools we used and created to apply those concepts to Django codebases
- Demo time! How we use those tools to build our CMS, Wagtail
- How we envision the Django ecosystem evolving

This should generally be a beginner-level talk for Django developers. Developers who are mostly focused on back-end work will learn about modern front-end methodologies. We will make some references to popular JavaScript frameworks (React, Vue), but no prior knowledge with those will be required.
