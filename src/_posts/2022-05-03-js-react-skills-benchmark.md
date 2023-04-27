---
layout: post
title: "JavaScript and React skills benchmark"
date: 2022-05-03 19:50:00 +0100
comments: true
categories: [JavaScript, React, Careers]
---

As a follow-up to my React training goals for front-end developers, here is a list of React and JS skills across different levels of expertise. This is meant to facilitate self-score themselves.

<!-- more -->

## JavaScript

### Beginner

#### Vanilla JavaScript fundamentals

- Knows about ES modules – named and default exports
- Knows what control structures and Array methods to use for iteration
- Understands scopes, hoisting, closures, `const` vs. `let`
- Uses template literals for string concatenation
- Understands destructuring, and the spread and rest operators
- Understands when to use and not to use regular expressions
- Understands the difference between mutable and immutable data structures and can describe common issues associated with their use.
- Can write asynchronous code with callbacks and Promises
- Can write basic error handling code with exception handling and console APIs
- Can write code to execute on a timer or interval with the right APIs

#### DOM APIs fundamentals

- Knows what jQuery does and why it’s no longer relevant
- Knows about cross-browser support requirements and how to check support for a given technology
- Knows how to manage UI animations with JavaScript
- Can manage DOM event listeners and knows what common performance pitfalls to look out for with user-initiated events
- Can use throttling or debounce for a performance-sensitive event
- Can manipulate DOM elements, adding or removing them, setting attributes

#### JavaScript tooling fundamentals

- Knows what Node.js is and how to install a given version
- Can set up and use the JS tooling on wagtail-kit autonomously
- Knows how to use the browser DevTools Console panel
- Knows how to use the browser DevTools Elements panel
- Knows how to use a REPL for JavaScript
- Understands the npm packages ecosystem and the npm CLI
- Knows about the package.json and how to install dependencies
- Knows about Prettier, ESLint, Jest, and how to run them
- Knows what Babel and Webpack are for

#### JavaScript as a language (bonus points)

- Knows about the history of JavaScript – Brendan Eich, the 10 days, TC-39, ECMA-262
- Has watched Wat
- Knows about JSFuck - Write any JavaScript with 6 Characters: `[]()!+`

### Intermediate

#### Vanilla JS & DOM APIs intermediate

- Has read the Airbnb JavaScript styleguide
- Can use requestAnimationFrame and requestIdleCallback to defer expensive computations
- Knows how and when to use regular expressions, and can use them for basic string pattern matching
- Knows all of the ES modules syntax for static imports
- Knows all of the syntax of ES6 classes, and when to use classes
- Understands event propagation in the DOM and when to customise it with `stopPropagation`, when to rely on bubbling vs capture
- Is aware of TypeScript and understands what static types bring to JavaScript
- Is aware of other compile-to-JS languages and understands their value proposition: Dart, Elm, CoffeeScript, PureScript, ReasonML, ClojureScript, Opal
- Is aware of WebAssembly’s value proposition
- Knows how to assess the quality of a npm package: popularity, support, security, accessibility, performance

#### Testing JavaScript fundamentals

- Can write simple unit tests with Jest
- Can test DOM manipulation code with Jest
- Knows how to use Jest in watch mode with different filters
- Understands what test coverage represents, and how to view it with Jest
- Understands the difference between running code in tests in Node and in browsers
- Is aware of tools to automate browser testing
- Knows about code complexity and how to assess it for a given implementation

#### Debugging JavaScript

- Can use the different console APIs
- Knows how to set and manage breakpoints in the browser DevTools debugger
- Knows what the call stack is and how to navigate up and down the stack in a debugger
- Understands the differences between source and output JavaScript, and what source maps are for
- Knows what JS error monitoring is for, and how to use it with Sentry
- Is aware of potential performance issues in JavaScript and options to investigate those issues

#### JavaScript as a mindset (bonus points)

- Understands what ASI does and a common case where it can’t be relied on
- Knows what the output of `{[{}]:[{}]}` is
- Knows about with statements and labels

### Advanced

#### Vanilla JS & DOM APIs advanced

- Can use functional programming idioms in JavaScript: currying, partial application, method chaining
- Can use all common Array iteration methods: `filter`, `map`, `some`, `every`, `reduce`
- Can manipulate URLs in JavaScript with standard library `URL` and `URLSearchParams` APIs
- Can use `Map` and `Set` objects
- Can use ES dynamic imports
- Is aware of Web Components – high-level capabilities and common APIs
- Can use shallow or deep copy patterns as appropriate to create fully immutable code.
- Can get up to speed and be productive with JS frameworks such as Vue, Svelte, Alpine.js, Stimulus, Angular
- Can use vanilla JS date manipulation methods to read and format dates, times, datetimes, including usage of modern Temporal APIs

#### TypeScript fundamentals

- Understands what TypeScript brings compared to vanilla JavaScript
- Can use TypeScript syntax to add type annotations to vanilla JS code with built-in types
- Can define basic custom types with union types and interfaces
- Can use generics for arrays
- Can use the `typeof`, `keyof`, `const` TypeScript keywords to reduce boilerplate in type definitions
- Understands what type narrowing is and how to implement basic typeof or null check type guards

#### API integrations & data management

- Understands the difference between callbacks, promises, and async/await
- Can use `async` / `await` for asynchronous code
- Understands the data flow when using Redux with async action creators, with "start", "success", "error" actions for a given API call
- Can use the `fetch` API with JSON and `FormData` to GET or POST data to API endpoints
- Knows how to abort a fetch request
- Can use client-side routing APIs to store state in the URL

#### Progressive Web Apps (PWA)

- Understands what Service Workers are for and when to use them
- Can set up offline support with a high-level library like Workbox
- Has awareness of PWA limitations across different browsers
- Can use `sessionStorage`, `localStorage` and cookie APIs to store data client-side

#### JavaScript as an ecosystem (bonus points)

- Knows about different popular JS implementations and their high-level characteristics: V8, JavaScriptCore, Deno
- Knows where to look for the most recent stage-2/3 proposals
- Knows about the "small modules philosophy" and its pitfalls

### Expert

#### Vanilla JS & DOM APIs mastery

- Can use functional JavaScript array iteration idioms to manipulate objects, with Object.entries, Object.fromEntries, and other methods
- Understands common encoding issues in JavaScript, UTF-16 vs. UTF-32, and can implement Unicode-aware (surrogate pairs) string processing
- Can create a JS API based on higher-order functions and decorators
- Knows about the `MutationObserver` and `IntersectionObserver` APIs
- Can use JS Intl and Date APIs to work across dates and numbers in different time zones and locales
- Can use browser DevTools to troubleshoot performance issues with JS execution flame graphs, memory and CPU profiling
- Understands what the global object is and how it differs between the main thread, web workers, and Node
- Can use the performance APIs to manually instrument code

#### TypeScript mastery

- Understands the performance considerations of type definitions and common mitigations (for example reliance on inference, interfaces vs. type aliases)
- Can write correct module declaration files for APIs of third-party packages
- Can write custom generic types and conditional types
- Can demonstrate usage of 5 of TypeScript’s utility types in real-world projects such as `Omit`, `Readonly`, `Required`, `Partial`, `NonNullable`.
- Knows the difference between any, never, unknown types

#### Client-side architecture mastery

- Can use the `FileReader`, `File`, and `ArrayBuffer` APIs to process files client-side
- Can implement cross-origin communication via iframes and postMessage
- Can demonstrate an understanding of advanced Redux patterns such as middleware for state saves or actions’ meta processing
- Can implement state normalisation patterns within Redux
- Can use Web Workers to move processing off the main thread

#### JavaScript as a runtime (bonus points)

- Understands when Just-In-Time compilation kicks in, in which engines, and how to optimise for it
- Knows how to do memory profiling & heap snapshots in V8 or Chrome
- Understands how vulnerabilities like Spectre and Meltdown affect JavaScript

---

## React

### Beginner

#### React UI components fundamentals

- Understands React’s component-driven, declarative UI paradigm
- Can use props to pass data between parent and child components, with default values where needed
- Can use PropTypes or TypeScript to validate a component’s props
- Understands JSX syntax compared to HTML
- Has a high-level understanding of the component lifecycle
- Can manage local component state with useState
- Can implement a `useEffect` hook to run code when a component mounts and unmounts
- Can set data on a parent component with a callback
- Has been through official Thinking in React tutorial Thinking in React – React

#### React tooling fundamentals

- Understands what a JSX transform is, what popular parsers include one
- Knows about React-specific aspects of Prettier, ESLint, Jest, and how to run those tools
- Can use basic Inspect functionality of the React DevTools to troubleshoot rendering issues
- Knows what different types of testing are possible for React components with tools like Jest and Storybook
- Can update React unit tests and Storybook stories

#### React as a paradigm shift (bonus points)

- Knows why React calls itself a library rather than a framework
- Knows the reasons why React uses `className` rather than the `class` attribute
- Understands what React refers to by "Escape Hatches"

### Intermediate

#### React UI components intermediate

- Knows what React’s `key` prop is for and the consequences of using it incorrectly
- Understand how `useEffect` deps behave with primitives vs object references (common issue is when an empty object or array is used as a default value)
- Knows when to use `useCallback` to have a stable function reference
- Can use `dangerouslySetInnerHTML` to integrate with legacy HTML, understanding the security implications
- Knows what props spreading is and why it should generally be avoided
- Can use refs to integrate with vanilla DOM manipulation
- Can create new components from scratch following a basic file structure co-locating components, their tests, and styles
- Knows what React’s `Portal` API is for and how to use it

#### React state management fundamentals

- Understands how React’s data flow differs from two-way data binding
- Knows in what cases to reach for `useState`, `useReducer`, Context, and Redux
- Knows what it means to "lift state up" in a React component hierarchy, and how to do it
- Can use `useState` and `useReducer` to manage state within components
- Knows about Context APIs to share state indirectly in a component hierarchy
- Can set up Redux Toolkit on a new project with a basic slice
- Can use the Redux DevTools to troubleshoot state storage and propagation issues

#### TypeScript fundamentals

- Understands what TypeScript brings compared to vanilla JavaScript
- Can use TypeScript syntax to add type annotations to vanilla JS code with built-in types
- Can define basic custom types with union types and interfaces
- Can use generics for arrays
- Can use the `typeof` and `keyof` TypeScript keywords to reduce boilerplate in type definitions
- Understands what type narrowing is and how to implement basic `typeof` or null check type guards
- Can create interfaces for the props and states of React components, including annotations for children

#### React tooling intermediate

- Can write Storybook stories for components from scratch, with appropriate usage of CSF and args APIs
- Can write unit tests for components from scratch, with appropriate usage of shallow vs. deep rendering, snapshot testing, and different methods to query sub-elements of a component
- Can set up and configure React linting with `eslint-config-torchbox` on a project
- Can use the profiler in the React DevTools to troubleshoot performance issues
- Knows about the differences between React’s dev and production modes, as well as StrictMode

#### React mindset (bonus points)

- Can name two libraries that are API-compatible with vanilla React with a focus on performance
- Can name who the creators of React and Redux are
- Knows what it means to eject a create-react-app project

### Advanced

#### React architecture

- Understands the differences between React versions 16, 17, 18, and knows what React API to use to help check whether a given app is compatible with future versions
- Can help make project-based decisions on when it is suitable to adopt React and what the approach should be.
- Can structure a React app’s JS code from scratch with 10+ components
- Can implement error boundaries at appropriate places in the React component hierarchy
- Knows about problems with managing form state in React, what libraries are available
- Can use a React forms library to build a form with client-side and server-side validation
- Can write React wrappers for any UI widget written with another library (for example integrating a non-React date picker)
- Can set up a CSS-in-JS library for React components

#### React state management intermediate

- Can structure Redux reducers and actions with or without Redux Toolkit with 3+ slices, following the Ducks pattern
- Can structure API integration code with Redux actions, including loading states and error handling, with or without RTK Query
- Can troubleshoot a React and Redux data manipulation issue on any project with React & Redux DevTools only
- Knows when to reach out for memoization of state, or memoized components. Can implement it in practice, and deal with common issues with references

#### TypeScript intermediate

- Knows about the different ways to type React components and why some are preferred to others
- Understands the performance considerations of type definitions and common mitigations (for example reliance on inference, interfaces vs. type aliases)
- Can write correct module declaration files for APIs of third-party packages
- Can write custom generic types and conditional types
- Can write or generate type annotations for GraphQL or REST APIs

#### Single-Page Apps (SPA)

- Can set up lazy-loading / code splitting of large components with the React.lazy API
- Can set up route-based lazy-loading / code splitting with a routing library and React.lazy
- Can set up client-side error monitoring with Sentry for a React app, integrating with error boundaries
- Can set up declarative client-side routing with a React library
- Knows how to test API integrations outside browsers, with tools like Postman or GraphiQL
- Knows how an SPA’s runtime characteristics can create issues with analytics software

#### React outside the box (bonus points)

- Knows about XHP
- Can name three React rendering targets / libraries aside from react-dom and react-native
- Can name three compile-to-JS languages with declarative UI APIs similar to React

### Expert

#### React architecture mastery

- Can be a project lead on React builds
- Can create React app architectures from scratch through file structure, component hierarchy, application state structure, client-side routing structure
- Can create GraphQL and REST API integrations from scratch or with clients like Apollo
- Can set up an appropriate testing strategy for a React build between unit tests, e2e browser tests, and Storybook
- Knows how to create a design system UI library built on React components, including auto-generated documentation from props
- Knows about advanced APIs like cloning children and forwarding refs

#### Single-Page Apps (SPA) advanced

- Can advise on the tradeoffs of a SPA architecture, and appropriate mitigations for the most common limitations
- Knows how to set up authentication in a SPA project
- Can use bundle analysis tools to monitor and troubleshoot the size of JS bundles in a SPA build
- Can set up client-side performance monitoring instrumentation on a React app
- Can create SPA experiences with any React meta-framework such as Next.js or Remix

#### React behind the scenes

- Knows how scheduling works in React and why they choose to leave it under the control of the library as much as possible
- Understands why React uses event delegation, how it’s implemented, and how it changed from React 16 to 17
- Knows what `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED` is in React
