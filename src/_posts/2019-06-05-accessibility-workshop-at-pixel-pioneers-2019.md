---
layout: post
title: "Accessibility workshop @ Pixel Pioneers 2019"
date: 2019-06-06 16:10:22 +0200
comments: true
categories: [Workshops, Accessibility, Resources]
---

Today I attended a very good accessibility 101 workshop at Pixel Pioneers 2019. Here are some insights I learned there.

<!-- more -->

## The gist

Here are some of the key things I had no idea about that surprised me.

- If you’re using VoiceOver to test a site, do it in Safari. Doing this in Chrome is basically a waste of time, Chrome is much worse at integration with VoiceOver so gets used much less than Safari by people who actually rely on screen readers.
- If you’re using NVDA to test a site, do it in Firefox. Same reasons.
- Chrome has an official "ChromeVox" screen reader extension that works across all OSes. Its main purpose is for Chromebooks relying on Chrome OS.
- When using VoiceOver, you can hit the `ctrl` key to pause text reading 🤯.
- There's a site to check browser support of accessibility APIs, [https://www.html5accessibility.com/](https://www.html5accessibility.com/)
- [https://empathyprompts.net/](https://empathyprompts.net/) is really cool. I want to try some of these with my team.

## Key takeaways

### Access needs overview

GDS has wonderful, up-to-date resources.

- [Examples of various handicaps to consider](https://accessibility.blog.gov.uk/2016/05/16/consider-the-range-of-people-that-will-use-your-product-or-service/)
- [Do’s and don’ts posters](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/)

### Assistive technology landscape

With limited budget, we need to prioritise accessibility improvements that make the biggest difference to our audience. GDS has the most comprehensive overview of what assistive technology people actually rely on to use websites.

- [2016 Gov.uk assistive technology survey results](https://accessibility.blog.gov.uk/2016/11/01/results-of-the-2016-gov-uk-assistive-technology-survey/)

### "You are not the user"

An important reminder – knowing how to use assistive technology and what users expect is useful, but cannot replace talking to real users with real access needs.

### Testing

We’ll look at two types of testing that are easy to do and cover a big proportion of how people use assistive technology to test sites

#### Screen magnifier 101

- With Safari and macOS
- OS-level zoom (the one that doesn’t work with screen sharing)
- Browser-level zoom (resizes all of the page elements, can make text overlap)
- Minimum text size increase
- Straw test

Do the above tests on:

- [https://www.gosportpanel.independent.gov.uk/](https://www.gosportpanel.independent.gov.uk/)
- [https://digitalcapability.jisc.ac.uk/](https://digitalcapability.jisc.ac.uk/)
- [https://www.google.com/](https://www.google.com/)

#### Screen reader 101 with VoiceOver and NVDA

Shortcuts (macOS):

- `Cmd + F5` to start VoiceOVer
- `Cmd + F5` to stop it
- `Ctrl` to pause text reading
- `Ctrl + alt + U` to open the rotor (landmarks, headings)

Easy tests:

- Tab through the site, see whether you can always see the focus, and whether you can interact with every part of the site
- Skip links
- Open the rotor, check that there are landmarks and that their labels are descriptive
- Open the rotor, check there are headings and their structure is appropriate

Test these on:

- [https://www.gosportpanel.independent.gov.uk/](https://www.gosportpanel.independent.gov.uk/)
- [https://digitalcapability.jisc.ac.uk/](https://digitalcapability.jisc.ac.uk/)
- [https://www.google.com/](https://www.google.com/)

## Straw tests

I also learned about a really nice technique called a "straw test", to test whether a website / design is usable for people who rely on zoom / magnifiers. This is something I’ve had trouble testing for in the past, not really understanding how exactly those people would interact with a site using a magnifier.

Here’s the test, three steps, no tools required:

1. Make a fist with one of your hands
2. Open your fist just enough to let a "straw" through
3. Hold your fist up to one of your eyes

Then look at your website – for example, try to go through a form.

## Further references

Here are cool links that are relevant:

- Great reference on alt text best practices, [https://axesslab.com/alt-texts/](https://axesslab.com/alt-texts/)
- Favourite browser extension for accessibility testing, [https://accessibilityinsights.io](https://accessibilityinsights.io)
- Favourite basic automated testing, [http://pa11y.org/](http://pa11y.org/)
- Good onboarding resources,
  - For designers, [https://inclusivedesignprinciples.org/](https://inclusivedesignprinciples.org/)
  - For developers & testers, [https://a11yproject.com/](https://a11yproject.com/)
  - Another great one, [https://www.accessibility-developer-guide.com/](https://www.accessibility-developer-guide.com/)
  - BBC’s resources and workflows, [https://bbc.github.io/accessibility-news-and-you/accessibility-and-supported-assistive-technology](https://bbc.github.io/accessibility-news-and-you/accessibility-and-supported-assistive-technology)
- GOV.uk WCAG primer, [https://alphagov.github.io/wcag-primer/](https://alphagov.github.io/wcag-primer/)

## Notes

These are just my notes from the workshop that didn’t make their way to the above report.

Lots of disabled people around the world

Lots of different types of disabilities

Four principles of accessibility

Introduce W3C and WCAG

Three levels of WCAG 2.1 - A, AA, AAA

First focus: keyboard "everything doable with the mouse should be doable with a keyboard"

Remove focus indicator ring: no

CSS order customisations cause issues for keyboard users because the DOM order is different from visual order

Empathy stations

Reference site: MDN, HTML5 doctor, not W3school

ARIA includes no keyboard support

Updating page title to reflect test

Error | Contact | Website
Payment information (Step 3 of 4) | Shop | Website

Page title

Heading

Landmarks

[https://www.html5accessibility.com/](https://www.html5accessibility.com/)

Ctrl shortcut

Buy-in: no one notices! most accessibility features are invisible to sighted users

[https://github.com/h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate)

Forms

aria-describedby

Error list

live reload - announce number of results

Straw test

prefers-reduced-motion

ARIA roles that are not landmarks - you probably need to have keyboard management
