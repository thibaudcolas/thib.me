---
layout: post
title: "Testing with multiple versions of npm packages"
date: 2019-12-09 20:36:37 +0000
comments: true
categories: [JavaScript, Draftjs, Tools]
---

Have you ever wondered how to test your library against multiple versions of a project like React? Well, there is a way – and it’s not even that complex!

<!-- more -->

## Installing multiple versions

With Yarn – it’s been around for ages, and is [very well documented](https://yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-alias):

```sh
yarn add <alias-package>@npm:<package>
```

This aliasing feature allows us to add as many packages as we need, all resolving to different versions of the same package.

With npm – package aliases have been available since [v6.9.0](https://github.com/npm/cli/releases/tag/v6.9.0). Sadly, the only good resource I could find on this is a StackOverflow answer: [how to install multiple versions of package using npm](https://stackoverflow.com/a/56495651/1798491).

For my need with Draft.js, this is what the result looks like in `package.json`:

```json
"draft-js": "0.10.5",
"draft-js-11": "npm:draft-js@0.11.3",
```

## Configuring mocks for tests

Using [Jest](https://jestjs.io/), this also turns out to be very straightforward. The setup even works with `create-react-app`. In `setupTests.js`:

```js
jest.mock("draft-js", () => {
  const packages = {
    "0.10": "draft-js",
    "0.11": "draft-js-11",
  };
  const version = process.env.DRAFTJS_VERSION || "0.10";

  // Require the original module.
  const originalModule = jest.requireActual(packages[version]);

  return {
    __esModule: true,
    ...originalModule,
  };
});
```

We simply have a mock for the dependency, and then require either of the packages depending on an environment variable.

## Testing both versions in CI

In CI, we can then set up a build (or environment, or job) matrix to run tests with different environment variables. With Travis CI, this looks like:

```yaml
language: node_js
install:
  - npm ci
jobs:
  include:
    - env: DRAFTJS_VERSION=0.10
    - env: DRAFTJS_VERSION=0.11
script:
  - npm run test
```

And that’s it!

See the end results over at [thibaudcolas/draftjs-filters](https://github.com/thibaudcolas/draftjs-filters).
