---
layout: post
title: "The GPL and JavaScript"
date: 2022-12-19 21:18:03 +0000
comments: true
categories: [Open Source, Community, Accessibility]
---

Quick notes on why the GPL restrictions put me off so much

<!-- more -->

We’ve been [trying to use the Sa11y library in Wagtail](https://github.com/ryersondmp/sa11y/issues/41). Turns out during our discovery / R&D process they switched their license from MIT to GPL. This causes a headache for us, Wagtail is BSD-licensed. That’s compatible with the MIT license, but not the GPL.

Here are relevant resources to explore the implications of using GPL-licensed code, with a particular focus on JavaScript:

- [GNU FAQ: Website Maintenance System](https://www.gnu.org/licenses/gpl-faq.en.html#WMS)
- [GNU FAQ: What is the difference between an “aggregate” and other kinds of “modified versions”?](https://www.gnu.org/licenses/gpl-faq.en.html#MereAggregation)
- [sa11y/LICENSE.md](https://github.com/ryersondmp/sa11y/blob/master/LICENSE.md)
- [website - What are the implications of licensing a JavaScript library under GPL? - Open Source Stack Exchange](https://opensource.stackexchange.com/questions/4360/what-are-the-implications-of-licensing-a-javascript-library-under-gpl?rq=1)
- [Eugene Greendrake — Only difference makes happiness](https://greendrake.info/publications/js-gpl#do-i-have-to-gpl-my-client-side-javascript-code-if-i-am-using-a-gpled-library-in-it)
- [GNU GPL, JS and BS :: hroy.eu](https://hroy.eu/posts/gpl-js-bs/)
