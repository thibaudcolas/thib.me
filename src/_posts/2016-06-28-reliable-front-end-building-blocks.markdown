---
layout: post
title: "Reliable front-end building blocks"
date: 2016-06-28 14:21:29 +0300
comments: true
categories: [JavaScript, Tools, React]
---

Having just shipped a big "single-page app" project, I think it would be useful to list all of its dependencies among the current climate of dependency burnout in front-end land. Those were all very stable and easy to combine.

<!-- more -->

* [React](https://facebook.github.io/react/) – I'm not doing any JS front-end without React these days. The development experience is amazing, and they have done a terrific job at being highly stable over time. It's always a pleasure to upgrade the React version.
* [Redux](http://redux.js.org/) – Very stable and reliable, high learning curve but high reward too
* [D3 (v3)](https://d3js.org/) – One of my favorite tools. Can't wait for v4 to be out, the main issue with D3 as it stands now is that I'm only using a fifth of its features but still shipping it all in my JS
* Springload's reusable components [`react-simpler-select`](https://springload.github.io/react-simpler-select/), [`react-svg-icon`](https://springload.github.io/react-svg-icon/), [`react-accessible-modal`](https://github.com/springload/react-accessible-modal) Because for UI elements you likely want to have your own touch.
* Flexbox – Such a pleasure to build layouts with this, if browser support isn't too advanced (no IE10 and below)
* [`react-autosuggest`](https://github.com/moroshko/react-autosuggest) – A nice UI component that took care of what's hard - keyboard interactions and accessibility
* [`react-router`](https://github.com/reactjs/react-router/) – Probably the least stable of all of those building blocks, but they have done a better job at this since version 2.
* [Browserify + gulp builds](https://github.com/springload/frontend-starter-kit/blob/master/gulpfile.js/tasks/js.js) – Webpack might be better, but its documentation / ease of use is not.

Other goodies:

* [`copy-to-clipboard`](https://github.com/sudodoki/copy-to-clipboard)
* Client-side search with [`elasticlunr`](https://github.com/weixsong/elasticlunr.js) – Like lunr.js but better.
* sessionStorage caching
* performance tracking
* [`autotrack`](https://github.com/googleanalytics/autotrack/) analytics - Another one of my favorites, more recent.
* [`babel-plugin-lodash`](https://github.com/lodash/babel-plugin-lodash/) for smaller builds
* npm shrinkwrap – Finally!
* [Integration tests with Nightmare](https://github.com/thibaudcolas/nightmarejs-integration-tests)
* [SVG+CSS export as SVG/PNG](https://github.com/springload/reusable-d3-charts/blob/master/client/js/api/download.js) – The more R&D part of this project, which turned out to work quite well
