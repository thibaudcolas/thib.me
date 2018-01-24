---
layout: post
title: "Introducing thib.me"
date: 2014-11-13 01:19:43 +0100
comments: true
categories: [Community, Performance, Personal]
---

Here it is after a lot of commits: the new version of my personal website, [thib.me](https://thib.me)! I've been working on it for some months and am really happy to release it.

<!-- more -->

Here are the most important changes with the reasoning behind them:

- Now in English! — mandatory because I'm relocating to New Zealand.
- Domain name changed to [thib.me](https://thib.me) — shorter, better, stronger.
- New somewhat flat design — just looks nice?
- New content focused on my skills and projects — was desperatelly needed.

This new version is my attempt at giving useful information about myself — who I am, what I like to do, some projects. This information is very different from what can be found in this blog, and aimed at a different audience (HR people, my mom). I also find it very fun to take the time to tinker every little bit of the site.

Full list of what I tried to do / how I did it / with what tools:

- Full english site
- Shorter domain name
- Mobile first (thanks [Bootstrap](http://getbootstrap.com/))
- Flat design (heavily inspired by [Anna Debenham's site](http://maban.co.uk/))
- Card-based design (inspired by experiments like [this codepen](http://codepen.io/bennettfeely/pen/Ftczh))
- Publicize [my blog](https://blog.thib.me) and [my talks](https://talks.thib.me)
- Display relevant content to summarize [my skills](https://thib.me/#activities)
- Display [projects that I did](https://thib.me/#projects)
- Many performance optimizations
- [Sass](http://sass-lang.com/) for stylesheets
- [ES6](https://github.com/lukehoban/es6features) for JavaScript
- [Browserify](http://browserify.org/) for modules
- [Karma](https://karma-runner.github.io/0.12/index.html) + [Jasmine](https://jasmine.github.io/) for unit tests
- [Gulp](http://gulpjs.com/) for developer tooling
- Delivered by CDN thanks to [CloudFlare](http://cloudflare.com/)
- HTTPS-enabled, thanks to CloudFlare again
- Et j'en passe

I'm really proud of this new site and hope it'll help me land a great job in New Zealand!
