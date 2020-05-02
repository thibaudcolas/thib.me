---
layout: post
title: "Accessibility audits: getting started"
date: 2020-05-01 19:15:08 +0100
comments: true
categories: [Accessibility, Tools, Automation]
---

Here are my recipes to deliver accessibility audits for web projects, combining multiple layers of automation with manual testing to get the best of both worlds.

<!-- more -->

## Auditing strategy

Accessibility audits can be very time-consuming. My personal approach is to first leverage automated tools to find as many issues as possible, and not waste time re-reporting issues that are common to multiple components / pages of a project. Then, with this baseline in mind, we can switch to manually auditing single pages or components to identify further issues and improvements.

I also ideally like as much of the auditing as possible to be based on tools that can then be used in a project’s test suite, and run in continuous integration – this makes it much easier for the audit’s suggestions to be put to use, and validated over time.

It’s worth pointing out early that while some parts of my approach are very beginner-friendly – others rely on years of experience with accessibility guidelines and usability best practices.

## Accessibility audits for beginners

If you don’t know where to start – here are the easiest first steps:

- If you’re familiar with command-line tools and want something quick, grab [Pa11y](https://github.com/pa11y/pa11y) and point it at pages.
- If you want to analyse a page more thorouhgly, use [Accessibility Insights](https://accessibilityinsights.io/).

## Intermediate-level auditing

### Source code analysis

This is always a valuable first step when doable. Finding issues from the project’s code will make them much easier to fix, and will make it more likely to find issues that might not be identifiable during manual testing because they rely on specific user interactions / a part of the code that might not be currently accessible.

Linters are very useful here:

- [curlylint](https://github.com/thibaudcolas/curlylint) for HTML templates
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) for React components

I also do some form of accessibility auditing of code manually, by searching the project’s source. Here are common patterns I search for:

- Usage of the `role` attribute. It’s very common for developers to misuse it – roles that don’t exist, that need specific parents or children, that are redundant with the element’s intrinsic role. Roles that don’t make any sense without further ARIA attributes (label, or state).
- Usage of `aria-` attributes. They are also easy to misuse
- Tables markup. Tables need a caption, and headers that define their scope
- Button markup. Whether `a` tags are used as `button`
- Forms markup. Generally forms work as expected, but a lot of attributes that could be used aren’t (types other than `text`, `autocomplete`, `autocapitalize`, etc.).

### Bulk pages checks

After looking at the source, the next step is to look at pages in "bulk" mode – run automated tools that scan as much of the site as possible. My preference is for:

- The [V.Nu](https://validator.github.io/validator/) HTML5 validator. Either the Docker image, or the pre-compiled binaries for the CLI `vnu <url>`. Generally I will either do this for the whole sitemap, or a subset of URLs
- [pa11y-ci](https://github.com/pa11y/pa11y-ci), or Pa11y directly, for the whole sitemap or a subet of URLs if there is a need for further automation. `pa11y-ci --config <my config> --sitemap <project sitemap> --json > sitemap-report.json`.

Pa11y is worth a special mention here. Pa11y is a wrapper of [Axe](https://github.com/dequelabs/axe-core) and [HTML_CodeSniffer](https://github.com/squizlabs/HTML_CodeSniffer), which do the actual automated checks. It allows those tools to be run in bulk mode, over many pages, or at different states of a page by interacting with it.

Here is a basic configuration file for it:

```js
const urls = [
  {
    label: "Homepage",
    url: "https://www.example.com/",
  },
];

const basicAuth = "username:password";

module.exports = {
  defaults: {
    headers: {
      Authorization: `Basic ${Buffer.from(basicAuth).toString("base64")}`,
    },
    standard: "WCAG2AAA",
    runners: ["axe", "htmlcs"],
  },

  urls: urls.map(({ url }) => url),
};
```

Head over to [wagtail-tooling](https://github.com/thibaudcolas/wagtail-tooling) for a more advanced example.

### Single-page checks

Now let’s look at techniques to apply per page. Depending on the site’s size, breadth of pages, and budget for the audit, I would generally apply those checks to 5 to 10 page types.

- [Pa11y](https://github.com/pa11y/pa11y), if not already used in CI mode. Make sure it runs both HTML_CodeSniffer and Axe.
- The [Accessibility Insights](https://accessibilityinsights.io/) extension from Microsoft, with its FastPass mode, which also uses Axe under the hood.

At the page level, in the browser, there are a lot of semi-automated tests worth doing:

- With Accessibility Insights – use the color, heading, landmark tools to quickly visualise the page structure and spot issues.
- With a screen reader’s navigation (e.g. [VoiceOver Rotor](https://accessibility.psu.edu/screenreaders/voiceover/)), inspect all of the page’s landmarks, headings, images, tables, frames, form elements, links and buttons.

### Manual testing for high-value pages

Manual tests are the most time-consuming and require the most expertise of common accessibility issues. Generally the idea here is to use the functionality as a user of assistive technology would, and to spot any potential blockers, or improvements. I generally advise to try the following:

- Zoom
  - Is the whole page usable with 200% to 400% page-level zoom?
  - Are there any issues when using an on-screen magnifier?
  - Does the site support resizing font size only?
- Colour
  - Are there any non-text UI elements for which the contrast is too low?
  - Any focus or other active states that are reliant on colour alone?
- Keyboard navigation
  - Can the whole page be used with a keyboard only?
  - Are there focus traps?
  - Are the tab stops logical?
- Touch and click navigation
  - Are pointer targets big enough?
  - Are there areas of the page that are hard to scroll?

All of that, and of course, screen reader usage - different types of navigation, how text is read, what is and isn’t announced. With multiple screen readers if possible – [my go-to](https://docs.wagtail.io/en/v2.8.1/contributing/developing.html?highlight=accessibility#accessibility-targets) being VoiceOver on Mac with Safari, NVDA on Windows with Firefox, and VoiceOver on iOS.

### Expert-level accessibility compliance testing

All of the above is great in order to make a website accessible, but to assess compliance with standards, you need to know the actual standards, and test for each of the compliance criteria. For WCAG 2.1, I recommend:

- Knowing all of the WCAG2.1 A and AA success criteria – refer to the [GOV.UK WCAG 2.1 Primer](https://alphagov.github.io/wcag-primer/all.html#common-mistakes) for a "cheatsheet" version.
- Going through Accessibility Insights’ Assessment tool, which is probably the most comprehensive step-by-step compliance testing tool.
