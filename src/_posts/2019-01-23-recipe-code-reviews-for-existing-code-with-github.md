---
layout: post
title: "Recipe: code reviews for existing code with GitHub"
date: 2019-01-23 01:10:54 +0200
comments: true
categories: [Tools, Automation, Methodology, Team]
---

To me, [code reviews](/code-reviews-getting-started) are one of the most useful practices of modern software development. It used to be quite tedious to set up tools and a workflow to be able to use them on projects, but with the arrival of [PR workflows](https://guides.github.com/introduction/flow/) on platforms like GitHub and GitLab, with built-in code review interfaces, there is no reason not to systematically review code. Make a branch, make a PR, review, merge.

But what if the code to review has already been committed? Sure, GitHub supports commenting on commits, but it becomes quite tedious to have to do this as individual comments scattered across a repository. Instead, here’s a technique I’ve used to leverage GitHub (or GitLab’s) wonderful PR review tools, to look at whole repositories.

<!-- more -->

## Goal

We want to be able to review the existing code of any project, code that has already been committed (with or without a pull request). We want to do so with the same tools that we would normally use to review pull requests. So let’s make a pull request!

## Recipe

We’ll simply make a pull request, with **all** of the project’s code in it. We don’t want this PR to actually affect the project, so we will:

1. Make a fork of the project to review, and from then on use that fork for the reviews
2. Create an empty branch with `git checkout --orphan`, for example `git checkout --orphan review-1-target`
3. On the empty branch, create an empty commit with `git commit --allow-empty -m 'Empty commit'`
4. Push the empty branch to our fork, `git push -u origin review-1-target`
5. Now let’s go to the branch we want to review (say `master`), and create a new branch from it: `git checkout -b review-1`.
6. We then want to rebase from our empty/target branch. Make sure to place the empty commit as the first commit on the branch, `git rebase -i review-1-target`
7. Push the branch to the fork, `git push -u origin review-1`

That’is it! You should now be able to create a pull request for the branch, targeting the `review-1-target` branch on your fork so no changes risk making their way to the main repository.

On GitHub, this can be created simply by going to the right comparison URL, e.g. [https://github.com/thibaudcolas/react-streamfield/compare/review-1-target...review-1](https://github.com/thibaudcolas/react-streamfield/compare/review-1-target...review-1).

## An example

I’ve used this methodology to review [react-streamfield](https://github.com/noripyt/react-streamfield), a package created as part of Wagtail’s [first Kickstarter campaign](https://www.kickstarter.com/projects/noripyt/wagtails-first-hatch), so it could be integrated into Wagtail ([#4942](https://github.com/wagtail/wagtail/pull/4942)).

You can view the resulting PR over at [thibaudcolas/react-streamfield#1](https://github.com/thibaudcolas/react-streamfield/pull/1), and its summarised version at [noripyt/react-streamfield#4](https://github.com/noripyt/react-streamfield/issues/4).

## Onwards

I hope this helps! Have a look at [Code reviews – Getting started](/code-reviews-getting-started) for more of my thoughts on the topic.
