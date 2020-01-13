---
layout: post
title: "Upgrading to a stricter ESLint config"
date: 2020-01-13 00:18:03 +0000
comments: true
categories: [JavaScript, Code, Tools]
---

<!-- more -->

https://github.com/torchbox/rca-wagtail-2019/pull/268

pre-commit hooks

## Retrofitting on existing projects

Do you want to use this configuration on a project that already has ESLint set up, but with different rules? Follow along.

```sh
# First, let’s remove the project’s existing ESLint-related dependencies (inspect the `package.json` to determine what they are for your project).
npm uninstall --save-dev eslint-config-prettier eslint-plugin-react
# Then, we can update ESLint to the latest version,
npm install --save-dev eslint@latest
```

Then, install the config as described [in "Usage"](#usage) and replace the existing ESLint config with the one at the top of the README. Once you’re done, now is a good time to commit the work so far.

In all likelihood, this configuration is more opinionated / checks more aspects of the code than what the project was using before, and ESLint now reports a lot of errors. This is good! It means that the project will benefit from having a newer, stricter config in place, and as a developer you get to learn about more JavaScript anti-patterns.

For ESLint and the new config to be useful, we need them to be put to use as soon as possible, and to fail CI builds whenever issues are reported – it’s not good to work on a project where ESLint reports countless issues. So, our goal is to get to 0 errors and warnings reported by ESLint.

### Initial cleanup

#### Autofix

Let’s start by doing what ESLint suggests in its output – using its auto-fixing capabilities!

```sh
# At the root of the project to automatically apply ESLint’s fixes:
npx eslint . --fix
# If your project uses Prettier, also run it afterwards, to guarantee that ESLint’s changes still match your code formatting as defined by Prettier.
npm run format
# Or if your project has Prettier set up differently,
npx prettier --write '**/*.js'
```

Autofixes are aware of the syntax, and generally can be considered highly reliable – review the changes, **commit them**, and let’s move on to the next phase.

#### Disable problematic rules

Now, let’s look at the remaining problems, and extract a list of the rules they relate to, using some command-line magic:

```sh
$ npx eslint . --format tap | grep ruleId | cut -d ':' -f 2 | cut -c 2- | sort | uniq
class-methods-use-this
consistent-return
[...]
react/prop-types
```

Let’s add this list to our `.eslintrc.js` config, disabling all of the rules that were reporting problems:

```js
const legacyCode = {
    "class-methods-use-this": 0,
    "consistent-return": 0,
    // [...]
    "react/prop-types": 0
};

module.exports = {
    // See https://github.com/torchbox/eslint-config-torchbox for rules.
    extends: "torchbox",
    rules: {
        ...legacyCode
    }
};
```

Note how we put the rules in a "legacyCode" bucket, so we can clearly distinguish between rules we choose to configure differently from this project, and the ones that are enforced by the new config but we’re not ready to turn on yet.

Running ESLint again, there shouldn’t be any errors reported 🎉. **Now is a good time to commit – and potentially stop there**. We might not be leveraging all of the checks that the new config comes with, but we don’t necessarily need to do this right away.

#### Group disabled rules

> 🚧 To proceed, you will need a good amount of knowledge of ESLint rules, or time set aside to investigate rules one by one.

We’ve upgraded the config, disabled all of the rules and got our linting back to 0 problems reported. Now, if there is time, the ideal next step is to re-enable all of the disabled rules to ensure we make the most of the linting. Proceeding with this is generally very time-consuming, so we’ll go through it gradually – the first step is for us to assess how big of an investment is ahead of us, and what the benefits may be. Let’s assess the rules we’ve just disabled, and group them into meaningful chunks.

Here are starting groups I would recommend:

```js
// Rules which should ideally be re-enabled, that are about consistent code style more than anything.
const legacyConventions = {
    "class-methods-use-this": 0,
    "react/prefer-stateless-function": 0,
    "react/sort-comp": 0
};

// Rules which are not necessarily issues on their own but can make the code confusing or hard to troubleshoot, leading to bugs.
const codeSmells = {
    "import/no-named-as-default": 0,
    "prefer-const": 0,
    "prefer-template": 0
};

// Rules which point out patterns that are commonly sources of bugs.
const sourcesOfBugs = {
    eqeqeq: 0,
    "react/button-has-type": 0,
    radix: 0
};

module.exports = {
    parser: "babel-eslint",
    // See https://github.com/torchbox/eslint-config-torchbox for rules.
    extends: "torchbox",
    rules: {
        ...legacyConventions,
        ...codeSmells,
        ...sourcesOfBugs
    }
};
```

When deciding in what group a given rule belongs, it’s useful to think of:

-   The effort it would take to fix all of the violations of the rules,
    -   Is the code’s behavior going to be different, or identical? If identical this should be a safe change.
    -   Can the change be done semi-automatically, e.g. with a search-and-replace?
    -   How many places in the codebase are there that violate this rule?
    -   Does the project have tests, types, or another form of static analysis that would make it easy to tell if something broke because of the changes?
-   The impact of fixing the violations to the rule,
    -   Does enforcing the rule protect us from a certain type of bugs?
    -   Would using a more consistent code style make it easier for people to understand the code?

In terms of impact and effort, the three groups above generally fall into the following areas:

```txt
        ▲
        │                                    ┌───────────────┐
        │                            │       │               │
        │                                    │    Sources    │
        │                            │       │      of       │
 High   │                                    │     bugs      │
 impact │                            │       │               │
        │                                    └───────────────┘
        │                            │
        │
        │                            │
        │                ┌───────────────┐
        │                │               │
        │ ─ ─ ─ ─ ─ ─ ─ ─│               │─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
        │                │  Code smells  │
        │                │               │
        │                │               │    ┌───────────────┐
        │                └───────────────┘    │               │
        │                            │        │    Legacy     │
 Low    │                                     │  conventions  │
 impact │                            │        │               │
        │                                     │               │
        │                            │        └───────────────┘
        │
        │                            │
        │
        │                            │
        └────────────────────────────────────────────────────────▶
                   Low effort                High effort
```

-   Addressing sources of bugs generally has a high impact on the project, but generally involves changes that might alter the behavior of the programme (if there are actual bugs!), so takes a high effort.
-   Refactoring project conventions generally takes a high effort compared to the impact on the project (too many conventions / outdated conventions).
-   Code smells are a mixed bag, can generally be addressed safely but might take a lot of manual work.

The "High impact, low effort" area of our chart feels a bit empty – in practice there are a few rules in there, from all three categories, and that’s the rules we will want to identify next and have a look at fixing.

---

For now – **this is a good time to commit**. If you’re working on the project with other people, now is also a good time to make a pull request, and get it reviewed and merged. Further cleanup requires making changes to the code that go beyond what autofixing does, and will be trickier to review – so let’s get the config to be used first.

### Going further

> 🚧 To proceed, you will need a good amount of knowledge of JavaScript.

If you have more time than strictly needed for the initial cleanup, let’s go further. Our goal from now on is to remove all legacy rule overrides we added during the initial setup, while making sure linting still passes. There are a few different ways to approach this depending on the rule:

-   Refactoring the code in a safe way
-   Disabling rules via inline code comments
-   Disabling rules with nested ESLint configs
-   Changing the code and its behavior
-   Doing nothing (😄)

Which of these is appropriate is for you to determine case-by-case. The general workflow from now on is:

1. Run ESLint and get 0 problems reported.
2. Comment out one of the rules overrides from our `.eslintrc.js`, for example `// "consistent-return": 0,`.
3. Run ESLint and get problems from the commented-out rules reported.
4. Decide which approach to take for what was reported.
5. Apply your changes if any.
6. Fully remove the commented-out rule override, or add back the line un-commented.
7. Run ESLint again and get 0 problems reported.
8. Commit your changes if any.

We can go through all of the rule overrides like this, or stop when time is up. Here is a one-liner to automatically watch files and re-run ESLint for us that will help speed up the process:

```sh
npm install -g nodemon@latest
nodemon -w '<path to our project’s JS files>/**/*.js' -w .eslintrc.js --exec 'npx eslint .'
```

#### Refactoring the code in a safe way

It’s not always possible to refactor code without altering its behaviour, and realising where this is an option requires a high level of JavaScript (and DOM) expertise. If in doubt, this isn’t a good option – it would be too time-consuming to re-test working software for each and every change.

#### Disabling rules via code comments

#### Disabling rules with nested ESLint configs

#### Changing the code and its behavior

#### Doing nothing (😄)
