---
layout: post
title: A stable front-end stack for 2016
date: 2016-02-22 19:48:43 +0200
comments: true
categories: [JavaScript, Wagtail, React]
redirect_from:
- /blog-posts-and-front-end-development
canonical: https://www.springload.co.nz/blog/a-stable-front-end-stack-for-2016/
---

We’ve been trialing new front-end tools and libraries over 2015 but our main stack has remained very stable. Starting a new project? Here are Springload’s picks, all available in our [front-end starter kit](https://github.com/springload/frontend-starter-kit).

<!-- more -->

## Shiny JavaScript tools

We prefer our JavaScript written using [ES6/ES2015](https://github.com/lukehoban/es6features). While still very new, it alleviates a lot of JS pain points and is here to stay. Browser support is growing fast, and in the meantime [Babel](https://babeljs.io/) can take care of the compilation.

For libraries, we are big fans of React. Its developer experience is great, and it makes you [think about your UI](https://facebook.github.io/react/docs/thinking-in-react.html) at a higher level of abstraction. Like Web Components, but actually usable now. No need for Flux and its dozens of implementations to benefit from it.

Regardless of how the front-end code is written, it will be processed by a Node toolchain – Gulp, Browserify and ESLint are all very stable. Focus on writing code while [linting, minification and live-reloading](https://github.com/springload/frontend-starter-kit/tree/master/docs#tooling) are taken care of.

## Battle-tested preprocessors

Our technical lead always says that what matters with CSS is not how you write it but how you architect it. We are frugal users of [Sass](http://sass-lang.com/), relying on a small set of language features and avoiding the most powerful *(and dangerous)* ones. Instead of tooling, we follow the principles of BEM, OOCSS, and [Harry Roberts](http://csswizardry.com/). Have a look at [inuitcss](https://github.com/inuitcss/getting-started) for a taste of it.

While not in use yet, we are quite excited about things like [CSS modules](https://github.com/css-modules/css-modules). As CSS tooling becomes more powerful, PostCSS and Webpack’s CSS loader are interesting pieces of technology to watch. In the meantime, leverage the best of PostCSS by adding [Pleeease](http://pleeease.io/) to your toolchain. It’s very easy to drop in and includes autoprefixing, old browser fallbacks and minification in one convenient package.

## Built on the shoulders of giants

[Django](https://www.djangoproject.com/) is our preferred web framework. It’s very pragmatic, and has a good level of abstraction while giving access to the details when necessary. It does modules and code reuse very well with its concept of [apps](https://www.djangopackages.com/categories/apps/). And the Python community is thriving.

Springload’s CMS of choice is [Wagtail](https://wagtail.io/). It offers a great content-editing experience out of the box, and its architecture makes it easy to create new administration features or tailored components. Haven’t heard of it before? Have a look at Wagtail’s [StreamField](https://wagtail.io/features/streamfield/) concept and you won’t want to use Drupal’s regions ever again.

![](/images/wagtail-streamfield.png)

> Wagtail’s StreamField is a mechanism to create free-form content by combining and reordering content patterns.

One year ago we [discussed our reasons](http://www.springload.co.nz/blog/introducing-wagtail/) for going with Wagtail as our CMS. Today, I am happy to say we now regularly contribute to its codebase and specific plugins.

## Tech to be excited about this year

JavaScript Fatigue doesn’t have to be a thing after all. While the pace of innovation is high, great open-source software is emerging, and improving the way we work. The [web platform](http://radar.oreilly.com/2013/09/from-web-development-to-the-web-platform.html) is getting better by the minute and there is no sign of it stopping. To get you pumped up for the year to come, here are three things to get excited about in 2016:

* The “new Microsoft” is pushing the Web forward with their Edge browser, and [does so in the open](https://dev.windows.com/en-us/microsoft-edge/platform/status/).
* There are [interesting developments](https://medium.com/@torgo/the-big-browser-you-haven-t-heard-of-yet-481a1b48517b) yet to come in the space of browser-based virtual reality.
* Service Workers are landing into browsers, enabling [lots of interesting use cases](https://medium.com/google-developers/instant-loading-web-apps-with-an-application-shell-architecture-7c0c2f10c73).

For 2016 we wish you a happy, pragmatic, stable front-end stack. If you want to learn more about our choices, go have a look at [our starter kit](https://github.com/springload/frontend-starter-kit).
