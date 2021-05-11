---
layout: post
title: "PyCon US 2021: Building accessibility into open-source projects"
date: 2021-05-03 16:03:21 +0100
comments: true
categories: [Accessibility, Talks, Community]
redirect_from:
  - /pycon-oss
---

This is a lightning talk I gave at PyCon US 2021’s [Maintainers Summit](https://us.pycon.org/2021/summits/maintainers/), intended for an audience of project maintainers / open-source contributors.

<!-- more -->

Video:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9XI-8ZvU2w0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Slides:

- [Google Slides: PyCon US 2021 | Building accessibility into open-source projects](https://docs.google.com/presentation/d/1qjHKEWoExYY-fG4qbRBQP_EN5fxs_8z7csVIpy9bWlg/edit)
- [PDF: PyCon US 2021 | Building accessibility into open-source projects](https://drive.google.com/file/d/1hN554kNicuEvBcWK_VsiRazBTfbBGt6X/view?usp=sharing)

## Transcript

Hi PyCon, thanks for having me, I’m Thibaud my pronouns are he/him and I’m a developer at Torchbox in the UK.

Today I’m here to talk to you about building accessibility into open source projects, and in particular coming to you with our learnings from Wagtail; I’m a core developer of this CMS called Wagtail built on Python and Django and I also contribute to Django’s accessibility team so I’m here to share with you the learnings from those two projects.

### A Wagtail story

So Wagtail is a CMS that people use to build websites.

#### Why accessibility matters to us

When it comes to why we care about accessibility there are essentially two reasons.

One of them is we want the Wagtail admin to be accessible to as many people as possible and the other is we want the sites actually built with Wagtail to be as accessible as possible so these are the two main reasons for end users.

#### Other reasons to care

And then as a project there are definitely a few more reasons – the big one is legislation and procurement our clients and people who pick Wagtail as a CMS definitely have very specific expectations from projects and they would pick one or the other based on requirements like this.
so yeah there is legislation in the US, in the EU, and really all around the world it’s not just those two countries.

One thing we do have going for ourselves is that all of those laws are based on the same standard called WCAG 2.1, the AA level being the most recent and widespread version of it.

#### It’s not just Wagtail

And yeah it’s not just Wagtail obviously it’s not just CMSes, all types of online tools, apps, sites we build have to follow those same standards.

And really as developers I want to make the points that this isn’t just those projects it’s also the building blocks of those projects, the frameworks, the database modeling, the development tools, even the READMEs have to follow those same standards.

But yeah I don’t want this to be too negative either, so let’s look at some practical examples of where accessibility matters in the Python ecosystem in particular.

### Where accessibility matters

I went through the [top 1000 Python packages on PyPI](https://hugovk.github.io/top-pypi-packages/) and thought I’d pick a few examples of where you might not think of accessibility but actually there are very clear considerations to be had.

#### Data science

So the first one is data science, and alt text for dataviz.

As part of studying data you will very likely have to visualise it at some point and that might include producing images that you do want to be accessible to people who can’t actually see the visuals.

Of course they might not get the whole interactivity and interaction that might not be the point of your exercise but just having some form of alternative text would be useful.

#### Data science example: alt text

So this example in particular, that comes from Matplotlib and the alt text they have defined in their example basically just restates the caption at the top of the chart.

Which is, well, definitely better than nothing, but to the right I have an example of what it might look like for you to consider actually going through the whole data for people who can’t see the visuals.

And yeah not saying this is always appropriate again but definitely something to consider and if you happen to work with one of those dataviz projects it’s important I think for this to be considered in the docs in the actual framework of how you create the visualizations, and yeah just making sure that this is taken into account.

#### Web development

Another important part of the Python ecosystem is web development with big frameworks that I’m sure you all have heard of before, and templating languages, and here as well, basically even though those frameworks might not always be very opinionated about HTML they do have for example code snippets in their docs that really should take accessibility into account.

So it’s very common for me to look at those documentation code snippets and see very basic HTML issues.

#### Web development examples: HTML bad practices

So for example to the left here this is missing a “lang” attribute on the HTML tag.

#### PDF generation

And here a third topic in Python in particular is PDF generation, there are lots of those projects out there and something that people might overlook is that even though the source for those PDFs is HTML, the PDF itself might not be structured at all and it might not be usable by people with screen readers, so the key feature here that I have to look for is called “tagged PDFs” and it’s a requirement that very few of those projects actually have.

Yeah I’m trying my best not to have this be too negative, so just to finish on a more positive note I wanted to showcase different ways you could foster those accessibility contributions on your own projects.

### Fostering contributions

#### Define your target

The first thing to do is obviously to pick a target for what you support.

WCAG 2.1 at the AA level being the obvious thing to start from, and just not stop at picking the target but actually documenting it and documenting practical code review and testing steps, I think it’s very important.

I have added a few examples of this should you want to look into this further.

#### Leverage automated tools

And yeah now that you have this target actually doing some testing, there are lots of great automated tools out there they won’t find all of the issues but they definitely find plenty enough to get going with so I’d highly recommend looking into this.

- [Axe](https://www.deque.com/axe/) -- Accessibility rules engine with support for WCAG & Section 508
- [Accessibility Insights](https://accessibilityinsights.io/docs/en/web/overview) -- Browser extension with Axe and more
- [Pa11y](https://pa11y.org/) -- Command line tool for accessibility checks with Axe & HTML_CS
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y), [eslint-plugin-vue-a11y](https://github.com/maranran/eslint-plugin-vue-a11y), [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)

#### Leverage automated tools: Django example

And this is an example from Django in particular where we have this very big report that takes screenshots and logs all of the accessibility issues for different parts of the Django admin and you can just look at this and get a sense of a snapshot of how Django itself is doing.

- Pa11y example: [github.com / thibaudcolas / django_admin_tests](https://github.com/thibaudcolas/django_admin_tests)

#### Manual audits

And back on the Wagtail side we tend to invest more into manual audits just because we have the expertise to do this so these are definitely much more complex to put together and I won’t be talking about this much further but if you’re interested I can definitely talk to that a bit more.

#### For larger projects: have an accessibility team

And yes for larger projects I definitely recommend having a dedicated team for this of subject matter experts so we have the example of the Wagtail team here but yeah for example Jupyter notebooks as well do have a team like this that looks after the accessibility of the actual notebooks which as they are used in classroom environments is very important.

[Wagtail's team](https://wagtail.io/blog/accessibility-team-reloaded/) = 5 people committed for 6 months. Thank you Storm, Jesse, Kyle, Scott!

### Open-source can lead the way

So the last point I want to make really is that there are a few areas in software development like security for example where open source leads the way and shows us how it’s meant to be done basically, and I really think accessibility could be one of those areas, it really is something that matters on all projects no matter their size, and yeah that matters to a huge number of people that developers often underestimate just the sheer size of the people who can benefit from this, and yes there are well-defined standards and readily-available tools.

### Thank you! ❤️

Thank you I hope you enjoyed this and I’ll definitely be available later on to answer any questions.
