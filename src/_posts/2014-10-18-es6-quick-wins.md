---
layout: post
title: ES6 Quick Wins
date: 2014-10-18 17:10:40 +0200
comments: true
categories: [Talks, Community, JavaScript]
---

I'm starting to use ES6 in all of my projects, and wanted to show my colleagues how easy it could be. Using tools like [traceur](https://github.com/google/traceur-compiler) in combination with a build setup (you should have one!), it is really easy to get started writing small parts of the code in ES6 syntax. Here's the [link to the presentation](/talks/es6-quick-wins/).

<!-- more -->

I voluntarily limited myself to the most basic parts of the new version, parts that are also present in server-side languages like Java or PHP:

* Default parameters
* Destructuring
* Maps and Sets
* Arrow functions

We also talked about the great power lying in a good front-end tooling, where adding support for ES6 syntax comes down to adding a [single line](https://www.npmjs.org/package/gulp-traceur) into your build file.

By the way, in my talk I used a quote about how developers spend way more time reading code than writing. Here's [data](https://blog.codinghorror.com/when-understanding-means-rewriting/) to back it up.
