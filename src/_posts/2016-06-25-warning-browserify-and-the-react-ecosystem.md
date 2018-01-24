---
layout: post
title: "Warning: Browserify and the React ecosystem"
date: 2016-06-25 19:55:22 +0300
comments: true
categories: [JavaScript, Tools, React]
---

While working on yet another React project using [`react-router`](https://github.com/reactjs/react-router/), I discovered ±3kb of minified warning messages / development aids in my JavaScript bundle.

<!-- more -->

As it turns out, React's practice of having different code for "development mode" and "production" is being used by other projects from community members, but not with the same level of caution – for this tooling to work, the build steps need to use specific configuration: https://facebook.github.io/react/docs/package-management.html.

Not all projects mention this, and more importantly not all projects warn you if you don't. The solution? Configure your build step to remove those development aids in _the entire bundle_, and not just your own code.

More info at https://github.com/thibaudcolas/react-router-browserify-build/.

Other related links for future reference:

* https://github.com/ReactJSTraining/history/pull/307
* https://github.com/reactjs/react-router/pull/3503
* http://stackoverflow.com/questions/22118915/how-to-turn-on-off-reactjs-development-mode
* http://dev.topheman.com/make-your-react-production-minified-version-with-webpack/
