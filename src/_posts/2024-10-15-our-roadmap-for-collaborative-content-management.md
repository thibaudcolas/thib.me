---
layout: post
title: "Our roadmap for collaborative content management"
date: 2024-10-08 21:18:03 +0000
comments: true
categories: [Django, Wagtail, UX]
canonical: https://wagtail.org/blog/our-roadmap-for-collaborative-content-management/
---

Faster content management for power users and first timers, for Wagtail pages and any Django models

<!-- more -->

People’s expectations for their tools are evolving, and we want content management systems to keep up. Today, we'd like to share our roadmap for making collaborative content management even better within the CMS, with updates for the editing experience and workflows.

## Current state of collaboration in Wagtail

Right now, Wagtail offers several features to help teams work together on content:

- [Comments](https://guide.wagtail.org/en-latest/how-to-guides/manage-pages/#create-and-edit-comments), so editors discuss and review content directly within the page editor.
- [Workflows](https://guide.wagtail.org/en-latest/how-to-guides/configure-workflows-for-moderation/), for pages requiring a set moderation and approval process from draft to live.
- [Scheduled publishing](https://guide.wagtail.org/en-latest/concepts/scheduled-publishing/), so content updates can be planned ahead of time.
- [Concurrent editing notifications](https://guide.wagtail.org/en-latest/how-to-guides/manage-pages/#concurrent-editing-notifications), informing users who are editing the same page, reducing conflicts and confusion.

![Concurrent editing warning dialog to prevent unintentional overrides](/images/blog/our-roadmap-for-collaborative-content-management/concurrent_editing_warning_dialog_to_prevent.png)

_Above: concurrent editing notifications with 7 users on the page – all ready for your team content crits!_

In addition to those built-in features, there’s a plethora of extras in packages, like [wagtail-periodic-reviews](https://github.com/torchbox/wagtail-periodic-review).

---

All together, those features allow CMS users to collaborate from the very first saved draft to the page going live, and subsequent work to keep content to a high standard of quality and freshness. However we want to take the collaboration further: allowing users to collaborate within the CMS from the very first line of content just like they would in Google Docs; and making it easier to seamlessly share work in progress with a colleague.

## Future plans for workflows

Our vision here includes a more intuitive interface for content approvals, giving editors and reviewers clearer insights into what needs attention. We also want to better integrate with the commenting system, making it easier for users to engage in meaningful discussions around content changes—whether it's offering feedback or getting sign-off. Or even, offering comments after content has already gone live.

A big improvement I’m personally excited about would be to support commenting directly on the site’s front-end, which we’ve looked into as part of our [accessibility checker roadmap](https://wagtail.org/blog/looking-for-sponsorship-accessibility-checks-for-site-administrators/). With broader content quality checks in place within the CMS, there are good reasons to display comments from users and annotations from automated tools in the same way.

Now workflows and comments aren’t for all organisations or teams – but if this sounds like just what you need and you want to help make it happen, reach out about [how to sponsor Wagtail](https://wagtail.org/sponsor/).

## Future plans for collaborative editing

The most exciting changes are coming to our flagship page editor. We’ve been hard at work to introduce auto-save and collaborative editing, bringing real-time collaboration to Wagtail. Here's our plan to get there:

1. **✅ Concurrent Editing Notifications:** This feature [shipped in Wagtail 6.2](https://wagtail.org/blog/wagtail-62/), and it lays the foundation for more sophisticated collaboration.
2. **Save draft without page reload**, on demand.
3. **Save draft automatically**, possibly with live form validation, possiblya way to "name" specific drafts.
4. **Field Locking**, allowing simultaneous edits on different fields.
5. **Collaborative editing,** so multiple editors can make changes to the same field in real time.

A big change we’re considering here is whether to bypass the current form validation, or have it live, coming directly from Wagtail’s roots in the Django framework, to allow saving drafts that don’t quite match the defined rules.

![The Wagtail page editor with hints of auto-save UI elements](/images/blog/our-roadmap-for-collaborative-content-management/hints_of_auto-save.png)

_The Wagtail page editor, with hints of auto-saving status updates_

We're also actively considering the best way to handle issues like error handling when connectivity issues arise, or concurrent edits when users do proceed with overwriting one-another content. These features will require input from our community. If you want to get involved, our long-standing [Auto-save discussion thread](https://github.com/wagtail/wagtail/discussions/7636) is the best place to be.

## How to get involved

We’re excited about what’s ahead, and hope this roadmap gives you a glimpse into how Wagtail will make content collaboration smoother and more powerful. All of those features are heavily dependent on feedback from our users, and financial [feature sponsorships](https://wagtail.org/sponsor/) from organisations who want to invest in open source. Depending on your situation, consider:

- Joining our [What’s new in Wagtail webinars](https://wagtail.org/events/) where we discuss upcoming features
- Subscribing to the [This week in Wagtail newsletter](https://wagtail.org/newsletter/), where we share feedback opportunities.
- Reaching out to our team to [become a feature sponsor](https://wagtail.org/sponsor/).
