---
layout: post
title: "Alternatives to Jazzband"
date: 2023-12-03 04:47:03 +0000
comments: true
categories: [Open Source, Django, Governance]
---

Jazzband has a promising concept but is currently poorly managed. Let’s look at alternatives.

<!-- more -->

For context, read [We need more roadies in jazzband #196](https://github.com/jazzband/help/issues/196) and [django-recaptcha: New maintainers – and more needed #249](https://github.com/orgs/django-recaptcha/discussions/249).

---

## Alternative 1: "fork" Jazzband

This is what we’ve [done for django-recaptcha](https://github.com/orgs/django-recaptcha/discussions/249#discussioncomment-7653514). GitHub and PyPI have a lot of facilities these days to "run your own Jazzband". The rough steps are:

1. Create a new free GitHub organization for your project, transfer the project there.
2. Create a branch protection rule so changes can only be merged with at least one approving review, so all work needs at least two people involved.
3. Use GitHub Teams with appropriate access levels. My suggestion: one team per [role supported by GitHub](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization); read-only "Contributors"; Triagers; "Write access" Committers; Maintainers; Admin. Admins in particular; and organization owners; are critical in managing other members (adding new members, changing permissions)
4. Set up [trusted publishing for PyPI](https://blog.pypi.org/posts/2023-04-20-introducing-trusted-publishers/), to publish package releases via GitHub Actions. This is a key recent improvement, so there’s no need to share PyPI access more than strictly needed.

Then off you go! This set of team roles makes it easy to convert package users to maintainers as they gradually prove themselves over time, moving from "org members", to "triagers", "contributors", "maintainers". In the future this might be even simpler to manage on the PyPI side with [PyPI Organizations](https://blog.pypi.org/posts/2023-04-23-introducing-pypi-organizations/).

## Alternative 2: [Wagtail Nest](https://github.com/wagtail-nest)

This is essentially a "fork of Jazzband" that’s been operating for about a year now, specifically for [Wagtail](https://github.com/wagtail/wagtail) packages. The one difference is that the "roadie" side of things is managed by the Wagtail core team, which has 21 members, 9 of which are trusted with "admin" access to the organization.

If you have a Wagtail package in need of new maintainers, you can reach out to people working on this in #package-maintainers [on the Wagtail Slack](https://github.com/wagtail/wagtail/wiki/Slack)

## Alternative 3: find independent "roadies"

With Trusted Publishing, I think it’s worth saying the only access that’s needed for _most_ tasks is committing in GitHub. If you’re comfortable to stay involved a maintainer, you can go quite a long way adding people as "Outside collaborators" in GitHub where your project is currently. The only drawback here is that those people can’t have permissions to add other collaborators, so there’s still a bottleneck.

## Rolling this out

To help with building trust and knowing what people are up to,

1. Set up an [Introductions thread in GitHub Discussions](https://github.com/orgs/django-recaptcha/discussions/331). It’s a fun way to know more about people.
2. Send all your users to an online chat space like [the Django Discord](https://www.djangoproject.com/community/).
3. Set up an [ADOPTERS.md](https://github.com/django-recaptcha/django-recaptcha/blob/main/ADOPTERS.md) file, where people who feel like it can add their projects / organizations / websites where they use the package.
4. Set up Teams with a wide range of access rights to recognize different levels of contribution.

## Teams

Set up one team per [repository role](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in GitHub:

| Team                       | Role     | Description                                                                                                                                             |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @your-package/contributors | Read     | Recommended for non-code contributors who want to view or discuss your project                                                                          |
| @your-package/triagers     | Triage   | Recommended for contributors who need to proactively manage issues, discussions, and pull requests without write access                                 |
| @your-package/committers   | Write    | Recommended for contributors who actively push to your project                                                                                          |
| @your-package/maintainers  | Maintain | Recommended for project managers who need to manage the repository without access to sensitive or destructive actions                                   |
| @your-package/admins       | Admin    | Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repository |

In practice, this is how I see it working:

- Anyone who contributes or is interested to the project can be added to `contributors`. This doesn’t grant any particular rights currently, but does mean in GitHub you will appear as `member` of this organization within issues and discussions. Contributors (and any organization member) can also choose to show their affiliation on their GitHub profile (go to [People](https://github.com/orgs/django-recaptcha/people) and change your Organization visibility).
- People who are active in issues / PRs / discussions but don’t otherwise code can be added as `triagers`. They’re then able to help keep the discussions flowing and well-organized.
- People who code on a regular basis can have **write access to the repository** as `committers`. They also automatically get `triagers` rights.
- People who have proved themselves as triagers or committers can get `maintainer` access – which is all of the above plus access to some GitHub settings.
- People who have proved themselves as maintainers can get `admin` access – which allows you to do anything with the project.
- Finally people can be `owner` at the organization level, which doesn’t really grant much additional rights compared to `admin`, but helps further reduce the bus factor.

---

Finally I thought I’d mention there’s a #packages channel on [Django’s Discord server](https://discord.gg/xcRH6mN4fa), which is meant to foster collaboration between package maintainers.
