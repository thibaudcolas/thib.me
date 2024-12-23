---
layout: post
title: "Future headless Wagtail demos"
date: 2024-12-23 08:18:03 +0000
comments: true
categories: [Django, Wagtail, React]
---

Today I shut down [Are we headless yet? Yes!](https://github.com/wagtail/areweheadlessyet). Time to consider other demos!

<!-- more -->

## Why it’s shut down

Are we headless yet? Yes! – was our demo site for headless support in Wagtail. Headless has been a fundamental Wagtail capability pretty much since inception, though inevitably degree of support across various Wagtail features has varied a lot. The site was an excellent attempt to document the gaps, while applying "eat your own dog food" principles to Wagtail’s headless support. We built it with Next.js and Vercel, and a REST API from wagtail.org. It looked pretty great:

![Screenshot of the Are we Headless yet? Yes! Homepage](/images/blog/future-headless-wagtail-demos/areweheadlessyet-homepage-screenshot.webp)

We had to shut it down for a few reasons:

1. The content itself wasn’t being kept up to date. Having this all in a separate site made sense as a one-off, but headless support in Wagtail is pretty crucial, so it makes a lot more sense to have this as part of our developer documentation. Which we now do, in the [headless support page](https://docs.wagtail.org/en/latest/advanced_topics/headless.html).
2. Vercel stopped sponsoring open source projects with free hosting. We had a 6-month grace period, but that’s expired about a week ago now.

Vercel’s [Can Vercel sponsor my open source project?](https://vercel.com/guides/can-vercel-sponsor-my-open-source-project) makes it sound like their program might come back in the future ("While some sponsorships have expired, our sponsorships program is still active. We will be accepting sponsorships again, soon."), but for us the uncertainty was too much. And we just don’t have the funding to pay for hosting of platform-specific one-off demo sites – so it’d only work out with their sponsorship.

## What’s next

There are quite a few options for what’s next:

- The [low-carbon project template](https://github.com/wagtail/low-carbon-template/) started by Nandini Arora as part of Google Summer of Code 2024. It’s very promising as it demonstrates Next.js support while also achieving concrete goals on accessibility and sustainability.
- My own [Next.js bakerydemo](https://github.com/thibaudcolas/bakerydemo-nextjs) project, which attempts to be more of a full-fledged demo. It’s way more complex, but also more complete.

Based on the results of our [2024 headless survey](https://wagtail.org/blog/api-support-in-wagtail-2024-headless-survey/), we’ll figure out whether tech changes away from Next.js might also be worthwhile. And based on [RFC 100 about headless support](https://github.com/wagtail/rfcs/pull/100), we’ll know what gaps are worth focusing on with those demo sites.

---

In the meantime, thank you to everyone who helped put together this website! Hat tip in particular to [Tidiane Dia](https://github.com/Tijani-Dia) and [James Hancock](https://github.com/jhancock532), and more recently to [Sherry](https://github.com/shyusu4) who helped us fix many accessibility issues with the build.
