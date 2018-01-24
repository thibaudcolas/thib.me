---
layout: post
title: "Exporting D3 charts to SVG and PNG: a library"
date: 2016-02-10 01:46:18 +0200
comments: true
categories: [JavaScript, Dataviz, D3]
---

Lately I've been very interested in the topic of exporting PNG or SVG assets from D3 charts created with SVG and CSS. This is a very important topic because those exports are often a big selling point of paid data visualizations libraries, and rightfully so – you can't reuse a dynamic D3 chart as easily as a static asset.

<!-- more -->

I have been watching for techniques to do this for a while now, and only recently stumbled upon [saveSvgAsPng](https://github.com/exupero/saveSvgAsPng). This takes care of a lot of the heavylifting:

* Getting the chart's SVG from the DOM.
* Inlining stylesheets into this SVG.
* Inlining images as well.
* Putting all of this in an image tag, and passing it through a canvas to end up with a PNG.

While none of those steps taken individually are hard to build, their combination is tricky to get right. The limitation here is that those exports need to be generated on the fly within a browser – this isn't built for a use case where generated images need to be readily avaible for each chart.

This is where [Electron](http://electron.atom.io/) comes into play. Electron is a wrapper around [Chromium's rendering stack](http://www.chromium.org/developers/content-module) (the Blink rendering engine, V8, and other important goodies). We can use this semi-headless browser to render our charts and export them!

I ended up writing a library that does just that: [https://github.com/thibaudcolas/export-svg-chart](https://github.com/thibaudcolas/export-svg-chart). I don't like reinventing the wheel so this is just an elegant wrapper around the tools mentioned above, with a very straightforward API.

If you want to use this library, you'll need to point it to a page where to extract your chart from – you can make this page use custom "export / print" styles, or just use the same rendering as the one of your default dynamic chart.

There's a more technical write-up of my findings on GitHub here: https://github.com/thibaudcolas/chart-export-example. I also tried to make this work in [jsdom](https://github.com/tmpvar/jsdom), but didn't go with that solution since it came with too many trade-offs.
