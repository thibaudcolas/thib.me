---
layout: post
title: Bringing our mad skillz to Wagtail
date: 2017-05-03 11:35:03 +0300
comments: true
categories: [React, Springload, Wagtail, Draftjs]
redirect_from:
  - /writing-about-wagtail
---

Springload often attends development sprints of Wagtail. They’re a great occasion to meet with other core contributors, and drive the project together towards the needs of its users, aka our clients. In the past our work has taken us to [Ede, Netherlands](/awesome-wagtail), and Cape Town but this time we headed North to [Reykjavík, Iceland](https://www.google.co.nz/maps?q=Reykjav%C3%ADk) thanks to our friends at [Overcast Software](https://www.overcast.io/).

<!-- more -->

Over two days our group of nearly 20 split into specific task forces focusing on:

- Creating a new demo site for Wagtail that better demonstrates its capabilities.
- Making Wagtail faster on all devices for everyone in all locations.
- Overhauling the page explorer menu by rebuilding it with an API and React.
- Rebuilding the rich text editing experience from the ground up.

Let’s have a look at the latter three areas that Springload actively contributes to.

## Optimising the performance of modern web apps

The impact of poor performance on user experience is well known across the industry, and it’s paramount for the Wagtail experience to be best in class.

As part of this sprint, we contributed by setting up tooling to audit Wagtail’s performance with [Sitespeed.io](https://www.sitespeed.io/), Grafana and Graphite. This tooling is available on GitHub, at [thibaudcolas/wagtail-dev-tooling](https://github.com/thibaudcolas/wagtail-dev-tooling).

[![Sitespeed report example with timings for a Wagtail admin page load](/images/sitespeed-report.png)](https://github.com/thibaudcolas/wagtail-dev-tooling)

With this tooling in place we were able to quantify some of the improvements we were making during the sprint. To take it further we’ll need to create [performance budgets](https://timkadlec.com/2013/01/setting-a-performance-budget/) so we have a shared definition of what level of performance we are aiming for.

![Performance budget example](/images/performance-budget-wagtail.png)

> Performance monitoring and performance budgets (metric thresholds) are set up so we know how quickly the interface becomes usable. Here, the budget states that the page must be fully loaded within a 5s timeframe.

For our clients, we monitor performance and set budgets with [SpeedCurve](https://speedcurve.com/). If you’re just getting started, [GTmetrix](https://gtmetrix.com/) can give you quick audits and simple monitoring for free.

## A new page explorer built on a modern architecture

The page explorer is a very important component, as a point of entry to the interactions with the pages of the site. We’ve been willing to rebuild as much of the UI of the CMS in [React](https://facebook.github.io/react/) – while the explorer might not have been the easiest to start with, our users will definitely notice the difference in speed.

This work started as a prototype a year ago and we’re very close to releasing it for general availability. In our latest iteration, we now have:

- Full support for Wagtail sites of all shapes and sizes via the rock solid admin API.
- 100% unit test coverage of the UI code with Jest and the amazing [snapshot tests](https://www.springload.co.nz/blog/why-were-migrating-unit-tests-jest-and-why-you-should-too/).
- An accessible explorer for keyboard and screen reader users.

![Screenshot of the explorer’s latest iteration](/images/new-explorer-ui.png)

The last step for us is to refine the UI on mobile. This might seem less important for a CMS that relies on advanced editing workflows, but it’s a nice challenge nonetheless! We just got a [BrowserStack](https://www.browserstack.com/) subscription for Wagtail, which is going help a lot.

![Screenshot of the Browserstack interface, testing the Wagtail admin on an Android phone](/images/browserstack-wagtail.png)

> BrowserStack provides us with automated screenshots, as well as On-demand browser instances – to test and debug in real browsers, without having to maintain local installations of many browser versions.

## Rethinking rich text editing

Both users and developers have mixed feelings when it comes to rich text editing. For users, text editors can feel hard to use or downright unpleasant. For developers, they don’t provide enough control on the formatting of the content once it is entered.

We decided to tackle both problems at once by building a new rich text editor, the aptly named [Draftail](https://github.com/springload/draftail). Draftail builds upon the [Draft.js](https://draftjs.org/) framework and React from Facebook, and it gives us all of the building blocks we need to create the best editing experience while retaining enough control over how the content is displayed. Try our [online demo](https://springload.github.io/draftail)!

![Screenshot from the Draftail demo](/images/draftail-v06.png)

As part of the sprint, we refined the [integration of the editor within Wagtail](https://github.com/springload/wagtaildraftail) with the help of [Torchbox](https://torchbox.com/) and the [Little Weaver Web Collective](https://littleweaverweb.com/).

## Building the future of Wagtail

We invest so much in the future of Wagtail because we truly believe open-source communities are a great approach to software development. Building upon Django, Wagtail gave us a solid alternative from other stacks. We were so stoked to learn that what we’re contributing to building was used to make [Hillary Clinton’s campaign site](http://www.thedrum.com/news/2017/04/27/hillary-clintons-election-campaign-was-designed-wagtail-platform-created-torchbox), and this is a perfect reminder that the impact of open-source software goes well beyond its original users.
