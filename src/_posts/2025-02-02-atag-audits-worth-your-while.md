---
layout: post
title: "ATAG audits: worth your while 🔎"
date: 2025-02-02 12:42:03 +0100
comments: true
draft: true
categories: [Accessibility, Resources, ATAG]
seo_image: /talks/atag/assets/atag-audits-worth-your-while.webp
seo_image_alt: "ATAG audits: worth your while 🔎 - Practical tips and examples to get started - Thibaud Colas @ FOSDEM 2025"
---

Practical tips and examples to get started with the Authoring Tool Accessibility Guidelines.

<!-- more -->

Note: This is the blog post version of my [FOSDEM 2025](https://fosdem.org/) talk. If you want the original, view the slides: [ATAG audits: worth your while 🔎 @ FOSDEM 2025](/talks/atag/) and view the [video recording of the talk](https://fosdem.org/2025/schedule/event/fosdem-2025-5806-atag-accessibility-audits-worth-your-while/).

You can also watch it on YouTube if you prefer:

<div><a href="https://www.youtube.com/watch?v=F9V5MH3p6b4"><figure><img src="https://i.ytimg.com/vi_webp/F9V5MH3p6b4/maxresdefault.webp" width="320" height="180" alt=""><figcaption>ATAG accessibility audits: worth your while 🔎  – Thibaud Colas @ FOSDEM 2025</figcaption></figure></a></div>

## Why we’re here

We’re here because Standards, Authoring tools, Accessibility by default, and the _[Authoring Tool Accessibility Guidelines](https://www.w3.org/TR/ATAG20/)_ in particular can help us create better, more accessible web experiences.

### <mark>95.9%</mark> of home pages have accessibility issues

![Line chart of WCAG non-conformance percentage from 2019 to 2024. The line goes starts slightly below 100% non-conformance in 2019, and barely goes down year to year.](/talks/atag/assets/WCAGNonconformance2024.webp)

> Percentage of home pages with detected WCAG conformance failures over time. [2024 WebAIM Million](https://webaim.org/projects/million/)

According to the WebAIM Million Project, a staggering _95.9%_ of home pages on the web have accessibility issues. And that’s just what automated tools can find — it’s definitely worse when manual testing comes into play.

### We need accessibility standards

We have a bunch already, and we definitely need them:

- WCAG: Web Content Accessibility Guidelines
- ATAG: Authoring Tool Accessibility Guidelines
  - ☝️ Our focus here
- UAAG: User Agent Accessibility Guidelines
- WAI-ARIA: Web Accessibility Initiative – Accessible Rich Internet Applications
- EN 301 549: Accessibility requirements for ICT products and services

Most people have heard of WCAG — the Web Content Accessibility Guidelines. ATAG, or the Authoring Tool Accessibility Guidelines, focuses on ensuring that the tools people use to create content, are accessible _and_ produce accessible content.

### We need authoring tools

The majority of web content isn’t crafted by hand as HTML. We need support for social media posts. Blogging. Apps. Videos. Slides. Livestreams. Chat. Crafting HTML by hand is possible but error-prone. These tools should provide accessible defaults so that content creators aren’t forced to “reinvent the wheel” when it comes to building accessible content.

Authors need:

- Assistance
- Documentation
- Templates
- Quality control
- Accessible defaults

### [Authoring Tool Accessibility Guidelines (ATAG) 2.0](https://www.w3.org/TR/ATAG20/)

Version 2.0 in 2015. Today we’re looking at it at a high level. The most important is understanding the distinction between the two halves of ATAG:

- [A. Make the authoring tool user interface accessible](https://www.w3.org/TR/ATAG20/#part_a)
- [B. Support the production of accessible content](https://www.w3.org/TR/ATAG20/#part_b)

This post showcases a few highlights in Part A, and then way more in part B, which is where in my opinion there’s the most opportunity to find novel ideas that can make a big difference.

### ATAG example: in a Content Management System (CMS)

![Screenshot of the Wagtail 6.3 page editor, with a sidebar to the left, an editing form, and to the right a preview panel with a dark theme web page](/talks/atag/assets/wagtail_admin_pages_edit.webp)

Here – we’re looking at the [Wagtail](https://wagtail.org/) v6.3 [page editor](https://static-wagtail-v6-3.netlify.app/admin/pages/62/edit/), with page preview opened. This screenshot is a good representation of ATAG. The editing form and sidebar to the left: that’s where Part A helps. What happens in the preview box to the right, showing the live web page: that’s where Part B "accessible content" manifests itself. But the whole CMS interface will evolve based on the requirements of both parts.

## ATAG in practice: Part A

My highlights – things that go far beyond WCAG 🚀

### Part A: Make the authoring tool user interface accessible

- [A.2.1. Make alternative content available to authors](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a21)
  - What that means: in an authoring tool context, we need alt text for all images, decorative or no!
- [A.3.2.1 Auto-Save](https://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a321)
  - Either no session time limit, or auto-saving. Auto-saving is (kind of) a requirement to meet ATAG!
- [A.3.5. Provide text search of the content](https://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a35)
  - [Browser built-in search](https://hidde.blog/atag-a351-browser-built-in-search/) and [`hidden="until-found"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden#the_hidden_until_found_state) to the rescue?
- [A.4.2. Document the user interface, including all accessibility features](https://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a42)
  - 💅🎉👏 pretty fundamental, and cool to see this in such an established standard.

### Documenting features: for developers *and* for users

![Screenshot of the Wagtail user guide website homepage. Features a navigation sidebar to the left, and page content listing sections to the right: getting started, how-to, concepts](/talks/atag/assets/guide.wagtail.org.webp)

> Screenshot of the [Wagtail user guide](https://guide.wagtail.org/en-latest/) homepage

An often-overlooked part of tool development is documentation. Clear, accessible documentation helps both developers (who need to maintain and extend the tool) and end users (who rely on it to create accessible content). Documenting features isn’t just an afterthought—it’s a critical piece of making an accessible tool.

In Wagtail – it’s a journey. I would say our "docs coverage" is at:

- 80% for devs
- 35% for editors ([52 of 145 features](https://wagtail.org/accessibility/atag-audit/#a422-document-all-features))

## ATAG in practice: Part B

To infinity… and beyond WCAG! 🌈 Part B is where I see the most potential for us to move the needle. We’ll look at specific guidelines, and concrete examples of where they apply.

### B.1. Fully automatic processes produce accessible content

One major goal is to have systems that automatically produce accessible HTML behind the scenes. For instance, when using a tool like Google Forms, there’s an opportunity to streamline things such as autocomplete for fields like “email” or “name.” When these automated processes work properly, they take a big load off the author. Here’s a Google Forms example:

![Screenshot of the DSF membership nomination form, with a number of fields, including email and Your name](/talks/atag/assets/dsf-membership-nomination.webp)

It’s very convenient to set form field labels and help text, even some validation rules. But there’s no way to set the [autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete), which helps make forms easier to use (and meet specific WCAG criteria like [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/quickref/#redundant-entry)).

### B.2.3. Assist authors with managing alternative content for non-text content

As in – help people creating alt text (and captions). Images and other non-text content need alternative descriptions (alt text). Consider a social media post editor like Mastodon: when you add an image, the tool warns you if you’ve not added alt text and even offers a “detect text from picture” feature. This is a perfect example of guiding authors toward better accessibility.

![Screenshot collage of Mastodon. To the left the post editor, with in-progress content including an image. There is a warning triangle with the word 'Alt' in yellow. To the right, the interface to edit images, with a multiline text field: 'Describe for people who are blind or low-vision'. There is also a 'Detect text from picture' button below](/talks/atag/assets/mastodon-alt-text-ui.webp)

This is the Mastodon [alt text UI](https://docs.joinmastodon.org/user/posting/#edit). I particularly like it because in addition to providing clear indications of whether an image is missing alt text, they also have a "Detect text in image" feature which will automatically populate the alt text field based on the visuals.

### B.2.4. Assist authors with accessible templates

Supplying accessible templates, kind of feels obvious no? But in practice it’s not always so easy. And by "templates" – here we should interpret this as any building blocks for web pages, so whether the templates are just "content formats", or web components, or page sections to combine. Or even whole site templates - say site starter kits.

One example I love comes from WordPress: they have an accessibility review process for site themes. In their marketplace, themes are tagged as [“Accessibility Ready” themes](https://wordpress.org/themes/tags/accessibility-ready/), making it easier for authors to pick a design that already meets accessibility criteria.

![Screenshot of the WordPress theme, accessibility ready tag in the tag filter](/talks/atag/assets/wordpress-accessibility-ready-themes.webp)

### B.3.1. Assist authors in checking for accessibility problems

Here, there’s lots of room to make a dent in the number of issues found with automated tools. Tools like [Sa11y](https://sa11y.netlify.app/) can be embedded in web pages to automatically scan for accessibility errors. Imagine a browser widget that notifies you when your page has issues—this is exactly the type of integrated feedback that ATAG recommends.

![Sa11y accessibility checker widget, over a blog page. The widget spotted a heading error, and displays alt text for manual review](/talks/atag/assets/sa11y-tracking-wild-yeast.webp)

This should be built into every Content Management System if you ask me. Note Sa11y itself is GPL-licensed so won’t be the best option for projects using more permissive licenses, but certainly a good example of the concept. In Wagtail, we [chose Axe to build our built-in accessibility checker](https://wagtail.org/blog/introducing-wagtails-new-accessibility-checker/).

### B.3.2. Assist authors in repairing accessibility problems

It’s great to flag problems — but even better if the tool can help authors fix them. For example, when it comes to alt text, an authoring tool could automatically generate several AI-based suggestions. The user can then choose one or edit it as needed, streamlining the repair process and ensuring higher-quality output. When we say "AI" here – it doesn’t necessarily have to be Large Language Models. There’s been great results with OCR (when images contain text), and computer vision models based on deep learning neural networks.

For Wagtail, our accessibility team compared the alt text of real-world Wagtail images, with results generated by GPT-4 Vision. For 89% of images, the AI alt text was better than average; compared to 43% for the existing alt text. Very promising. Here’s what our manual scoring looks like summarized as a bar chart:

![Bar chart comparing Wagtail AI vs. existing alt text quality, based on 441 homepages, scored by the accessibility team. Real-world alt text scores low. AI alt text scores higher, with 49% of AI alt texts scored 5/5 compared to 8% for real-world](/talks/atag/assets/ai-vs-existing-alt-text-quality.webp)

We did this review [for Global Accessibility Awareness Day 2024](https://wagtail.org/blog/wagtail-accessibility-statistics-for-gaad-2024/) if you want to read more.

### B.3.2. example implementation

For Wagtail, we took on implementing this pattern as a [Google Summer of Code 2024 internship](https://wagtail.org/blog/two-contributors-join-wagtail-for-google-summer-of-code-2024/). It’s still work in progress, but here is our desired "end state" alt text interface, based on ATAG and those AI capabilities:

![Screenshot of the Wagtail Upload images interface. It says 3 images were uploaded successfully, and offers three different options to fill the description field](/talks/atag/assets/alt-text-suggestions-ui.webp)

This is defined contextually, prompting authors to add alt text where they use the image, rather than only on upload. It offers multiple options, which could either be generated by AI, or come from other contexts in which the image is used. Ultimately the author still has agency to decide if they’d rather type their own alt text, or reuse any of those suggestions. See [We 4 Authors Cluster - alt text](https://www.funka.com/en/projekt/cluster-feature-testing/feature-4-of-10-text-alternative-alt-text/) for more on the topic of contextual alt text interfaces.

## Get started

Alright, ATAG is great, but how do we get started with it! I blogged about my recommended [ATAG 2.0 getting started resources](/atag-getting-started-resources) back in 2021. Lots of useful links on there. Here are the top 3-5 “official” ones I would recommend in 2025.

### Prerequisites

You can get there iteratively, but here’s the baseline I’d recommend before getting going with an _audit_ specifically:

1. Good documentation of project features
2. Good demo setup to test said features
3. (Some) knowledge of ATAG
4. Report format

And that’s it! 🎊 👀 Well – for some projects the above is already a tall order. But good docs and demos help ATAG or no, and for knowledge and report formats, there’s help!

### Report templates

To help streamline that last bit about report formats, I spent a good deal of time building a template in Markdown: [atag_wagtail_template.md](https://github.com/thibaudcolas/atag-getting-started/blob/main/atag_wagtail_template.md). This is my preferred format if you wanted to audit collaboratively with others. If you do multiple audits over time, it also helps to be able to diff them to see what’s changed from one to the other. For example here’s Wagtail’s [version 6.3 vs. 5.2 diff](https://github.com/wagtail/rfcs/commit/cacedcff61c75e9744a22d8029f1d3b5b630a744).

And if you’d rather manage audit findings directly in GitHub – there’s a template for that too 🌈 All set up with custom fields to track issues according to both WCAG and ATAG: [GitHub Projects template](https://github.com/users/thibaudcolas/projects/2/views/1). Here’s a peek at what it looks like when put to use:

![Screenshot of the GitHub Projects interface, for 'WCAG 2.2 & ATAG 2.0', with a number of items tagged by WCAG SC, ATAG SC status](/talks/atag/assets/github-projects-wcag-atag.webp)

### ATAG Report Tool

The W3C Web Accessibility Initiative (WAI) also offers a [report tool](https://www.w3.org/WAI/atag/report-tool/) — a form wizard that guides you through each guideline, making it easier to perform an audit. Here’s an example of what a completed audit looks like in there:

![Screenshot of the WAI ATAG Report Tool interface, Overview page, with existing report under way in sidebar](/talks/atag/assets/wai-atag-report-tool.webp)

### Authoring Tools List

And once you have spent the time creating an audit – consider submitting it to the W3C WAI [authoring tools list](https://www.w3.org/WAI/tools-list/authoring/). Sharing your results not only helps improve your own tool but also aids the broader community.

![Screenshot of the WAI Authoring Tools list](/talks/atag/assets/wai-authoring-tools-list.webp)

### Beyond WCAG and ATAG

If you’ve already read the whole of ATAG and want to consider more standards to take you further, those are the two I would recommend:

- [Web Sustainability Guidelines (WSG)](https://w3c.github.io/sustainableweb-wsg/)
- [Accessibility Maturity Model](https://www.w3.org/TR/maturity-model/)

## Thank you!

Again, accessible authoring tools are critical to the bigger picture of accessibility. Any questions about this material – please say hi!

- Mastodon: [@thibaudcolas@fosstodon.org](https://fosstodon.org/@thibaudcolas)
- Bluesky: [@thibaudcolas.bsky.social](https://bsky.app/profile/thibaudcolas.bsky.social)
- X: [@thibaud_colas](https://x.com/thibaud_colas)
- LinkedIn: [Thibaud Colas](https://www.linkedin.com/in/thibaudcolas/)
- GitHub: [@thibaud_colas](https://github.com/thibaud_colas)

### Bonus: progress for Wagtail

I didn’t end up covering this on stage but this is where we got after a year of learning from ATAG!

| Conformance Level | ATAG       | Part A     | Part B     |
| ----------------- | ---------- | ---------- | ---------- |
| Pass              | 28 (+6 🎉) | 14 (+2 🤘) | 14 (+4 🚀) |
| Fail              | 24 (-6)    | 15 (-2)    | 9 (-4)     |
| Not applicable    | 13         | 4          | 9          |

Conformance levels and classification per the [ATAG report tool](https://www.w3.org/WAI/atag/report-tool/).
