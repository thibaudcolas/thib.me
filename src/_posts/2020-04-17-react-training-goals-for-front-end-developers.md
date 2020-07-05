---
layout: post
title: React training goals for front-end developers
date: 2020-04-17 19:21:48 +0100
comments: true
categories: [React, JavaScript, Careers]
---

Here are my thoughts on what front-end developers should focus on when learning React. There are a lot of resources on there – this is more about identifying what exactly you should spend time on, and in what order, for people who are already well versed in building UIs with HTML, CSS, and a sprinkle of JavaScript.

<!-- more -->

## #1 UI development fundamentals

### JavaScript fundamentals

No matter what you do with React, you’ll be more productive if you know your way around ES6, functional programming, DOM APIs.

To do this in any kind of professional environment you also need to know about supporting tooling, which is central to modern JS development – Node and npm, unit tests in JS (with Jest), Babel, Webpack. Prettier. ESLint.

TypeScript is a plus on all of the above, and is gradually becoming the de-facto standard for non-trivial codebases, but for now I wouldn’t call it a "fundamental".

There are a lot of resources to learn all of the above. [MDN has a good overview of modern JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). I would highly recommend taking a course on **functional programming with JS**, since this is an area where it’s important to understand the theory. I would also recommend reading through [Airbnb’s JS styleguide](https://github.com/airbnb/javascript), and the corresponding ESLint config. It’s very long, but reading it all and understanding it all is the best way to test the depths of your knowledge. I wouldn’t worry too much about learning tooling beyond hands-on experience on projects – these days, for React in particular, Create React App does most of this for you.

### Front-end development

I’m not entirely sure this needs to be stated but React is mainly used for UI development, so to be proficient you need a good understanding of browsers and front-end web technologies like HTML / CSS / SVG, as well as UI dev considerations like reusable layouts vs one-off components, accessibility, performance, etc.

I don’t think this is too important for me to develop further so will stop there. One thing to note is that quite a lot of advanced React development is done with a CSS-in-JS approach as opposed to a more traditional "CSS preprocessor" – but I think you can go quite far without knowing anything about this.

### React APIs and common third-party libraries

Building upon the fundamentals, you of course need to know a fair bit about React itself to be proficient with it. To me, knowing React as a front-end developer starts with understanding its component-driven paradigm, JSX, props, state, (basic) hooks, and the component lifecycle. How to do forms with React. Knowing things like PropTypes also helps, as well as usage of popular libraries from the React ecosystem like classnames, react-modal, formik.

It’s also important to know about tooling for all of this – ESLint rules for React, and unit tests for React components. Storybook and similar tools are also much more prevalent these days.

There are a lot of courses on this, which generally also cover more advanced topics.

## #2 Single-page-app builds

All of the above should cover enough bases to be proficient building UI components with React. Now there’s quite a big gap from UI components development, to creating the architecture of a whole app / site around React. "React" is quite a small library, but generally when we talk about a"React build" we also encompass a lot of other aspects of client-side app development that don’t have that much to do with React itself.

### API integrations

Generally we use React for UIs that are (much) more dynamic than a CMS-driven web page, where React’s client-rendered nature excels. However, in order to display any UI at all – we need to load the correct data for the app. Generally for us this means integrating with a REST(ish) API over JSON, served by a Django back-end. To be proficient here one needs to have a fair amount of knowledge about APIs, serialisation, HTTP, network constraints, error handling. Practical knowledge of the corresponding browser DevTools is also a must, and related development tools (curl, Swagger, Postman) helps a lot too. This work is generally about integrating with a Django back-end, and the skills needed here were historically used most for back-end development on the web / general programming (e.g. scripting) outside of web development. So some basic back-end development skill, or programming skills outside of the browser, will help a lot.

This isn’t really specific to React but generally falls within the "React development" umbrella nonetheless. Learning this would generally be covered in any full-stack React dev course. For example a MEAN stack tutorial, or [RealWorld App](https://github.com/gothinkster/realworld).

### Data management

Dynamic UIs generally have a lot of data to manipulate, whether that’s app state from interactions, or data that was loaded. Here some knowledge of data manipulation is important – functional programming, algorithmic complexity, normalisation. Back-end skills also help a lot since generally this work would have happened server-side for more traditional web apps. In our React stack, data management is done with Redux so any knowledge of it (or Flux, its predecessor) also helps a lot. As well as knowledge of React’s Context API.

Out of all skills that tend to fall under the "React" umbrella these are probably the ones that are hardest to train. Things like [Redux Toolkit](https://redux-starter-kit.js.org/) help a lot, which provide more framework-like opinions. There are a lot of good resources for Redux (for example the official [Redux styleguide](https://redux.js.org/style-guide/style-guide)).

### Single-page app considerations

Beyond data management, architecting a React app generally also requires knowledge of "single-page apps" (PWAs). This roughly means being aware of the corresponding DOM / browser APIs:

- Client-side routing with HTML5 history and the React-specific routing libraries (react-router, Reach router)
- Data storage with HTML5 storage backends (localstorage, indexeddb, etc)
- (Service workers – although that feels quite advanced)

This isn’t relevant on all projects but generally falls within the React sphere where appropriate. There are good learning resources for this in the React world.

## #3 Other advanced topics

There are a few other topics that are worth mentioning but I would not classify as fundamentals. In no particular order,

- TypeScript. Knowledge about type systems in general also helps.
- CSS-in-JS. Particularly styled-components.
- Server-side rendering.
- Animations with React. I would like this to not be an advanced topic, but realistically it is.
- Integration with other libraries, e.g. D3
- The Context API
- Advanced React hooks / custom hooks
- Error monitoring for client-side code. With Sentry for example.
- GraphQL. Most likely with Gatsby for us. Otherwise Apollo.
- “Meta-frameworks” like Next / Gatsby
- Code splitting
- ES6 modules
- Third-party components selection
- (React Native)
- Publishing React components for reuse on npm
- Design systems with React
- Enzyme and snapshot tests for unit tests for React components
- Async/await
- Authentication and security-related concepts – CORS, SSO, CSRF, JWTs, same-origin policies, CSP
- React performance – virtual DOM, memoization
- Error boundaries
- Higher-order components
- React Suspense
- React’s Strict mode

Last but not least – React app architecture is worth a line item in here, although I wouldn’t know where to put it. For React apps this means things like:

- Deciding where and how to do API integrations, and related auxiliary data management – error handling, loading states
- Making components that are reusable, since that’s React’s strength
- Using a code structure that works – “app” folders like Django or file type folders, with what naming conventions
- Deciding how to do code splitting – app level, route level, component level
