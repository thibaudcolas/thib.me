---
layout: post
title: "Adding Prettier onto an existing project"
date: 2022-02-04 21:18:03 +0000
comments: true
categories: [JavaScript, Code, Tools]
---

[Prettier](https://prettier.io/) is good. So good, it’s easy to get used to it, and subsequently want to retrofit it onto existing projects. Here’s a step-by-step guide and example: configuring and documenting Prettier and reformatting existing code, all the while making sure not to break other people’s work.

<!-- more -->

## The example

All the steps described below are demonstrated publicly in a real-world project: Wagtail, via issue [#6059 Automatic code formatting with Prettier](https://github.com/wagtail/wagtail/issues/6059). The implementation was split into two PRs: [#7908 Add Prettier configuration & documentation](https://github.com/wagtail/wagtail/pull/7908), [#7912 Prettier reformatting](https://github.com/wagtail/wagtail/pull/7912), and finally one extra commit, [7eb8730d7372dc6b4752308a7e3354b36810f32e](https://github.com/wagtail/wagtail/commit/7eb8730d7372dc6b4752308a7e3354b36810f32e).

Finally, here are [instructions on resolving conflicts](https://github.com/wagtail/wagtail/issues/6059#issuecomment-1029941428) that weren’t directly stored in the repository (as this is a one-off task).

## Why two PRs and a commit

I recommend always splitting the addition of any formatting tool into at least two PRs and the extra commit:

1. The first PR takes care of anything that requires careful review – configuration, integrations, documentation.
2. The second PR takes care of the actual reformatting.
3. Finally, the final commit is just there to finish setting up the [`.git-blame-ignore-revs` file for git’s `ignoreRevsFile`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt).

## Configuration

This is actually the simplest step.

- Update the project’s `.editorconfig` first, as Prettier reads it ([here’s an example](https://github.com/thibaudcolas/cookbook/blob/main/.editorconfig)).
- Create a `prettier.config.js` with any desired options.
- Create a `.prettierignore`. I’d recommend to add large folders in here to speed up Prettier looking for files when using very broad glob patterns.

Personally I’ll always prefer to set all configuration options, even when using defaults. This saves having to remember what options are available that might not be set on the particular project when re-reviewing the configuration. I also always prefer using JavaScript for configuration – syntax highlighting and auto-formatting are dependable.

### Which languages should I use Prettier for?

I’d recommend all languages that Prettier supports, potentially with the exception of Markdown. Although the reformatting is excellent, enforcing a single format for documentation often feels cumbersome – particularly if the project’s documentation might often be updated by contributors with little knowledge of the project’s tooling.

If a supported language isn’t used, make sure to add its extension to the `.prettierignore` so the files are consistently skipped. Here’s an example:

```bash
# Irrelevant files ignored for performance reasons.
node_modules
public/
coverage/
vendor/
static
_build
# File types which Prettier supports but we don’t want auto-formatting.
*.md
# Files which contain incompatible syntax.
*.html
wagtail/admin/templates/wagtailadmin/edit_handlers/inline_panel.js
```

## Integrations

I’ll always start with the same two commands:

```json
  "format": "prettier --write '**/?(.)*.{css,scss,js,ts,tsx,json,yaml,yml}'",
  "lint:format": "prettier --check '**/?(.)*.{css,scss,js,ts,tsx,json,yaml,yml}'"
```

The glob pattern might seem complicated – it’s wrapped in single quotes to prevent shell globbing (thus making it consistent cross-platform). It uses `**/?(.)*` so files are checked at all directory levels in the current folder, and regardless of whether file names start with a dot or not.

As to where those commands should run – generally in continuous integration, potentially in Git pre-commit hooks.

### pre-commit

With the confusingly-named [pre-commit framework](https://pre-commit.com/), it looks like:

```yaml
- repo: https://github.com/pre-commit/mirrors-prettier
  rev: v2.5.1
  hooks:
    - id: prettier
      types_or: [css, scss, javascript, ts, tsx, json, yaml]
```

Note `types_or` aren’t always file extensions, they’re [arbitrary identifiers](https://github.com/pre-commit/identify/blob/master/identify/extensions.py) for some languages.

Here’s what I personally prefer – just bash:

```bash
#!/usr/bin/env bash

# Fail on first line that fails.
set -e

# Only keep staged files that are added (A), copied (C) or modified (M).
STAGED=$(git --no-pager diff --name-only --cached --diff-filter=ACM)
# Files which are only partly staged (eg. git add --patch).
PATCH_STAGED=$(git --no-pager diff --name-only --diff-filter=ACM $STAGED)
# Files which are fully staged.
FULLY_STAGED=$(comm -23 <(echo "$STAGED") <(echo "$PATCH_STAGED"))

PRETTIER_STAGED=$(grep -E '.(css|scss|js|ts|tsx|json|yaml|yml)$' <<< "$STAGED" || true)
PRETTIER_FULLY_STAGED=$(grep -E '.(css|scss|js|ts|tsx|json|yaml|yml)$' <<< "$FULLY_STAGED" || true)

# Format and re-stage fully staged files only.
if [ -n "$PRETTIER_FULLY_STAGED" ];
then
  npx prettier --write $PRETTIER_FULLY_STAGED
  git add $PRETTIER_FULLY_STAGED
fi

# Lint all staged files.
if [ -n "$PRETTIER_STAGED" ];
then
  npx prettier --check $PRETTIER_STAGED
fi
```

### IDEs

VS Code has excellent Prettier support. Use it. I personally prefer to default to `editor.formatOnSave` turned on, and only disable it per project that doesn’t have Prettier.

### Continuous integration

We want to make sure we run `npm run lint:format` on CI. Simple as that. Worth mentioning [pre-commit.ci](https://pre-commit.ci/), compatible with the same pre-commit framework as above, which runs formatting on your behalf and commits the changes to PRs. I personally don’t use it, but it works.

A common gotcha when setting up Prettier in CI is if your builds are optimised to only run when specific folders are changed – by definition, the Prettier checks will have to run whenever any file supported by Prettier changes.

## Documentation

Make sure your contributors are aware Prettier is in use, and that there is a `npm run format` command available for cases where Prettier formatting doesn’t get automatically applied in an editor.

## Git blame compatibility

GitHub makes it easy to skip a commit in the blame view. For git itself, we can use a `.git-blame-ignore-revs` file. [Prettier itself](https://github.com/prettier/prettier/blob/main/.git-blame-ignore-revs) has an excellent example, which is self-documenting:

```bash
# git-blame ignored revisions
# To configure, run
#   git config blame.ignoreRevsFile .git-blame-ignore-revs
# Requires Git > 2.23
# See https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt

# Prettier bump after release
# 2.5.1
4683a6284d53b913f129694a5be666fc55b06982
# 2.5.0
846dbdd7e8c9deb315b3e663b3103c559e798a89
[…]
```

## The initial reformatting

All of the above steps should be done in the first PR, so they can easily be code reviewed. In the second PR, we can make the actual formatting changes. Run your `npm run format` now, and commit the results.

If your auto-formatting creates a lot of changes and you’ll want to review them manually – you could consider starting from a Prettier configuration that does fewer changes, commit the formatting, and add more changes gradually. This makes it easier to review different formatting changes overall.

### Manual issues to fix

If your project uses per-line linting disable comments, make sure the comments still target the correct lines after the reformatting. ESLint has an excellent `--report-unused-disable-directives` which helps a lot. Here’s an example where this happened:

```diff
-  // eslint-disable-next-line func-names
  $(
    '#new a.task-type-choice, #new a.choose-different-task-type',
    modal.body,
-  ).on('click', function () {
+  ).on('click', function onClickNew() {
```

There can be other compatibility issues with other static analysis tools, although that’s very rare. For example, I had to disable Prettier for a line where a Stylelint plugin wasn’t producing the expected output anymore – I’d suspect it’s the plugin’s analysis that’s causing the actual issue:

```diff
-  --#{$name}: hsl(
-    #{var(--#{$name}-hue),
-    var(--#{$name}-saturation),
-    var(--#{$name}-lightness)}
-  );
+  // Prettier causes a linting issue when reformatting this.
+  /* prettier-ignore */
+  --#{$name}: hsl(#{ var(--#{$name}-hue), var(--#{$name}-saturation), var(--#{$name}-lightness) });
```

I’ve never encountered a case where Prettier changed the semantics of the code at runtime, except perhaps for [trailing commas in function parameters](https://prettier.io/docs/en/options.html#trailing-commas), which should be watched out for on projects that support legacy browsers.

## After the reformatting

Merge it all, making sure CI is linting for Prettier formatting, and passes. Then edit your project’s `.git-blame-ignore-revs` with the correct reformatting commit, and that’s it.

For projects with other contributors – make sure to let them know there will be conflicts, and how to resolve them. Here are instructions I made for Wagtail:

---

## Instructions to rebase in-progress PRs

Here are the high-level steps:

1. Rebase onto the commit before the reformatting (11ccf30f0044a326abef2a5c5568f373ffe46188, or can also be defined as `af942a27e41b47e257b6cd46c01a13cd381fed04^1`, note the `^1` suffix), with your usual rebasing methodology.
2. Rebase onto the reformatting commit (af942a27e41b47e257b6cd46c01a13cd381fed04 / `af942a27e41b47e257b6cd46c01a13cd381fed04`), always favouring your branch’s changes, and auto-applying Prettier reformatting.
3. Rebase onto `main` with your usual rebasing methodology.

Here are step-by-step commands, tested on macOS with zsh:

```bash
# Make a copy of your branch
git branch save/my-existing-branch my-existing-branch
# Make sure you have the latest `main` from Wagtail
git remote add upstream git@github.com:wagtail/wagtail.git
git checkout main
git pull upstream main
# Rebase onto the commit preceding the reformatting to resolve conflicts that would have been present anyway.
git checkout my-existing-branch
git rebase af942a27e41b47e257b6cd46c01a13cd381fed04^1
# Install Prettier and other Wagtail development dependencies
# Make sure you use Node v16 and npm v8
node --version
npm --version
npm install
# Test-run Prettier – this should show formatting errors.
npm run lint:format
# Rebase again, this time with the reformatting as the base,
# always preserving your changes in case of conflicts, and automatically reformatting with Prettier.
git rebase --strategy-option=theirs --exec '(npm run format || true) && git add . && git commit --amend --no-edit --no-verify' af942a27e41b47e257b6cd46c01a13cd381fed04
# Test-run Prettier – this should show no formatting errors.
npm run lint:format
# Finally rebase onto the latest version from Wagtail main, as per usual.
git rebase main
```

That’s it! There’s a small chance (see below) there may be conflicts with our linters, requiring further manual intervention. Run a final `npm run lint` if you want to be sure.

There are a few things worth noting:

### It’s a bit slow

This will reformat the whole project for every commit to be rebased, so it’s slow for PRs with lots of commits. It’d have been possible for us to only reformat the files changed by a given commit, but I was having trouble doing this in a cross-shell-compatible way.

### Cases where manual changes will be needed

Once this is applied, there is still a risk there’ll be code that clashes with Prettier reformatting, which will need manual intervention. See for example [37026d521f818bab3724c74df93e9e690e93a9d5](https://github.com/wagtail/wagtail/commit/37026d521f818bab3724c74df93e9e690e93a9d5). I would expect this to be rare. As part of our main refactoring, there were two kinds of issues:

- 1 conflict with Stylelint, where Prettier splitting a long expression into multiple lines changes how the expression is interpreted by our linting.
- 8 conflicts with ESLint, where Prettier moved `eslint-disable` comments in places where they no longer applied to the correct line.

If in doubt, run `npm run lint` to check for any issues of this nature.

## git blame

For people who use `git blame`, we have introduced a `.git-blame-ignore-revs` which allows you to ignore the reformatting. See [the official documentation](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) and the file in question for further information.
