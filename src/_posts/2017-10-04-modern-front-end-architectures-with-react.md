---
layout: post
title: "Modern front-end architectures with React"
date: 2016-08-10 12:47:07 +0200
comments: true
categories: [React, Springload]
---

One year ago, I was writing about [my choice of React](/a-stable-front-end-stack-for-2016) as a robust platform for advanced UI development. The JavaScript community has evolved a lot since then, but React still is one of the most mature UI frameworks out there and we do not see this changing for the foreseeable future. Today, let’s have a look into how we use it to build modern web applications.

<!-- more -->

## Why I like React so much

Over the years, Springload has experimented with a lot of front-end frameworks. [React](https://facebook.github.io/react/) is now our de-facto standard to build rich user interfaces. Its main architectural pattern of declarative component hierarchies with a functional programming flavor is very well suited for modern UIs with a lot of moving parts. We particularly like:

- The**component reuse** capabilities. Components clearly define their data requirements, making it very simple to reuse them across the UI.
- Its focus on**performance**. React apps have great performance out of the box, and it is very simple to optimise further for larger deployments.
- Its**testability**, and overall **[developer experience](https://github.com/facebook/react-devtools)**. Writing tests for React components is surprisingly simple, and React comes with great developer tools that facilitate debugging.

React also does a great job at being relevant in a wide range of scenarios:

- Its **server-side rendering** capabilities mean it can be used for apps where SEO is a concern, or to gain a performance edge on the first page load.
- **Integration with other libraries** like D3 (data visualisation) is [very simple](https://github.com/springload/react-d3-integration). With simple hooks into React’s component lifecycle, the separation of concerns is very clear between propagating data updates for React, and rendering the charts for D3.
- The component model is relevant for large-scale apps, but also for one-off widgets across otherwise page-based sites.

We are so invested in React as a tool that we frequently create and package ready-made components like [popovers](https://github.com/springload/react-portal-popover), [dropdowns](https://github.com/springload/react-simpler-select), [icons](https://github.com/springload/react-svg-icon). Here is our latest creation: a fully [accessible accordion component](https://github.com/springload/react-accessible-accordion).

![Screenshot of the react-accessible-accordion website, with a demo accordion](/images/blog/modern-front-end-architectures-with-react/react-accessible-accordion.png)

Where React falls short is in managing data updates across large-scale interfaces with a lot of state. Luckily, [Redux](https://github.com/reduxjs/redux) is a library that is meant to be used alongside React as a state container. Redux takes the component hierarchy idea of React to state management, and keeps the coupling between interface elements and business logic as low as possible.

To further reduce the coupling between logic and UI, we heavily rely on APIs for integration between front-end and back-end.

## API-driven development

API-driven applications have emerged from the need of data sources for mobile apps, and there is no reason for websites to be more than yet another API client. Our preferred flavour is RESTful APIs consumed by standalone front-ends.

We primarily work with [Django](https://www.djangoproject.com/), and occasionally use more lightweight tools such as [Flask](https://palletsprojects.com/p/flask/) and [Node](https://nodejs.org/) (Express). More recently, we have been leveraging Cloud based platforms – [AWS](https://aws.amazon.com/) in particular – to deliver API driven solutions. We are exploring serverless architecture with [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

None of those platforms work particularly better with React than with other JS frameworks, but they all provide great support for APIs as first-class views. This is what enables our architecture and workflow, with healthy separation between the presentation layer (front-end developers, client-side, JS/HTML/CSS) and the rest of the stack. We are also excited about other additions to this toolkit like [GraphQL](https://graphql.org/) and [Relay](https://facebook.github.io/relay/), that take the React philosophy further towards back-end development and simplify API data requirements by making it more declarative.

## Overview of the resulting architecture

The following diagram details how all of those components fit together as part of a client-side web application:

![Architecture diagram showing the separation of concerns between front-end and back-end, and data flow. Admin-specific data flows are omitted, apart from the debug app](/images/blog/modern-front-end-architectures-with-react/react-architecture.png)

On this diagram, we can see:

- Two types of users accessing different views.
- The content-only pages of the site being served by a CMS, since those requirements are very different from that of the app.
- The structure of the client-side components (bulk of the code), where Redux enforces a separation between UI and logic.

Client-side, the architectural foundation is the use of [React](https://facebook.github.io/react/) to structure the UI component tree, and [Redux](https://redux.js.org/) to structure data flows. This is a modern alternative to MVC popularised by React, which puts more emphasis on the data flow (and the fact it is unidirectional). This “client-heavy” architecture is also supported by client-side routing and [code splitting](https://webpack.github.io/docs/code-splitting.html), which make it possible to only load the parts of the app that users actually need.

Finally, since the bulk of the application code is executed in the user’s browser the server-side parts of the stack can be very lean.

## Rebuilding Wagtail’s page explorer with React

A good demonstration of this approach is how we are [rebuilding Wagtail’s page explorer](https://github.com/wagtail/wagtail/pull/3012) with React, on top of an API.

This allows us to take presentation concerns away from the back-end, with a clear API contracts that facilitates iterations on both sides.

We were also able to bring the UI code under similar amounts of testing as to the back-end:

![Screenshot of a test coverage report for the new React explorer](/images/blog/modern-front-end-architectures-with-react/wagtail-react-coverage.png)

In the future, we will continue this effort in other parts of the CMS and expect to reap the same benefits. Since Wagtail is an open-source project, we will also make all of the components easily reusable by third-party developers to facilitate the creation of new interfaces for site administration.

## React beyond web apps

If React’s current capabilities as a UI framework for web apps weren’t enough, the last thing that gets us excited is how Facebook and the overall community are constantly finding new use cases for it. Following React’s philosophy of “Learn once, write anywhere”, we now have [React Native](https://facebook.github.io/react-native/) that completely changes the possibilities for mobile apps on iOS and Android. [React VR](https://facebook.github.io/react-vr/) applies the same approach to virtual reality. The team at Airbnb recently released [React Sketch.app](https://github.com/airbnb/react-sketchapp), allowing React to be used to create UIs in Sketch, once again completely redefining what is possible in the design + code landscape.
