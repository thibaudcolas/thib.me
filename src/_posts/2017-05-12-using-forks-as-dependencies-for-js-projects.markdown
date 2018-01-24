---
layout: post
title: "Using forks as dependencies for JS projects"
date: 2017-05-12 11:35:03 +0300
comments: true
categories: [Tools, Community, JavaScript]
---

Here are guidelines I wrote on how to (not) use forks of dependencies in the context of JavaScript projects.

<!-- more -->

*Public service announcement – on the usage of forks as dependencies in JS projects*

I'm seeing this done more often than I would like. Forks make it unnecessarily to maintain projects over time, as the fork effectively becomes part of the code we have to "own" on top of the project code – it doesn't get updated to fix bugs or otherwise, without being directly touched again.

Here are a few reasons why forks are bad:

- They increase how much code we have to look after and maintain, falling out of date, preventing us from receiving the bug fixes and improvements released upstream.
- They are hard to upgrade – we can't use semantic versioning for a project that does not come from a package registry.
- They are not "immutable" – if we remove the project on GitHub, we completely lose the fork's code, and the project builds. On the contrary, npm and pip do not allow dependencies to be overwritten / removed.

Now forks aren't always bad, but they should be considered a last resort. Here are alternatives to consider:

- Do not rely on this dependency. Use something else instead.
- If the dependency's code is small (not much of it, not many dependencies of its own), consider copy/pasting it directly into your project. It won't make the code easier to update, but at least now we know what we really have to look after.

If you still think forking is the right solution, here are rules to follow:

- *Always* have the fork on your organisation's GitHub account, so everyone can update it.
- *Never* rely on someone else's fork. We don't know what they will do with it.
- Make a branch for your extra code (following our branch naming conventions).
- If the project requires compilation, compile the code on the project directly, make a separate "release" branch for your extra code and commit the compiled files there.
- Make a tag for the "releasable" versions of your changes you will want to rely on later.
- *Reference the dependency based on the tag*, so we know what version we are at, and it is less likely to change than a branch.
- Make a PR to the upstream project. They will let you know whether your change is appropriate, and potentially merge it, so we can start relying on that project again.