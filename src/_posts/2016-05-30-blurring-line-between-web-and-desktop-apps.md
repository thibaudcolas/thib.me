---
layout: post
title: Blurring the line between web and desktop apps
date: 2016-05-30 11:33:37 +0300
comments: true
categories: [JavaScript, Community, Tools]
redirect_from:
  - /electron-javascript-for-desktop-apps
---

Two years ago, the folks at GitHub released a new text editor called Atom. They built it with web technologies: HTML, CSS and JavaScript. As part of this project they released [Electron](http://electron.atom.io/), a framework to write cross-platform desktop applications with web technologies.

Projects like Atom and Electron changed the way we think about the frontier between desktop and web apps. Let’s consider what frameworks like Electron make possible.

<!-- more -->

## Building cross-platform applications

You might already be using one of these [Electron-powered applications](http://electron.atom.io/#built-on-electron):

- Slack
- VisualStudio Code (Microsoft’s new text editor)
- Caprine (an unofficial client for Facebook Messenger)
- WordPress.com

Wait, WordPress? Yes – the new WordPress.com interface is bundled as a desktop application, available right from your taskbar or dock. These applications (well, three out of the four) show a trend towards making apps available in the browser _and_ on desktop.

[![Screenshot of Caprine, a Facebook Messenger client built with Electron](/images/caprine-screenshot.png)](/images/caprine-screenshot.png)

> [Caprine](https://github.com/sindresorhus/caprine) is an unofficial Facebook Messenger app. This desktop UI is built in less than one thousand lines of code, on top of the existing messenger.com.

This “web first” approach to application development combines the best of both worlds. You can develop once, then run your application on multiple platforms. For first-time or occasional users, you have a no-install browser version. Frequent users can make the most of an easily accessible, always-on desktop app.

This allows us to start thinking of “desktop availability” as another feature of the product rather than as a completely separate (and costly) project.

## The desktop app question

[![Diagram of the need for a desktop app, with four quadrants, depending on usage urgency and frequency. The answer is "YES" for apps like Spotify, Slack, Evernote](/images/desktop-need-spetctrum.png)](/images/desktop-need-spetctrum.png)

> The “need for a desktop app” spectrum – Credits to [Mathilde Collin](https://medium.com/@collinmathilde/why-desktop-apps-are-making-a-comeback-5b4eb0427647).

Whether you really need a desktop app should be your first question. Is the product catering to an audience of frequent users? Are they likely to browse multiple pages at once, or to concentrate their focus on a single task? Where is the product positioned on the [web site to web app scale](https://medium.com/@jaredstanley/dont-call-it-a-website-aae07340ecc1)? It’s important to understand the user’s intent when interacting with the product, as well as their varying expectations in front of browser-based and desktop UIs.

From a technical standpoint, Electron is very new and probably isn’t on anyone’s resume yet – and this is exactly what’s great about it. Since the technologies are the same as browser-based applications, web designers and developers can leverage their existing knowledge, adapting it to the desktop context. The community around Electron is creating a [series of tools](https://github.com/sindresorhus/awesome-electron) to simplify the most tedious tasks of desktop development. Utilities like [nativefier](https://github.com/jiahaog/nativefier) can turn a website into an app in a matter of seconds, and [UI kits](http://photonkit.com/) are starting to pop up for interfaces to achieve a native feel.

## Beyond operating systems

There are a lot of smart people working on cross-platform development at the moment. At Springload we’ve used the [Cordova](https://cordova.apache.org/) “web wrapper” approach; and we’re currently very excited about mobile innovation with [React Native](https://facebook.github.io/react-native/) and [NativeScript](https://www.nativescript.org/). On desktop, [Chrome OS](https://en.wikipedia.org/wiki/Chrome_OS) is also worth having a look at.

There is no one-size-fits-all solution, but we do believe that the web as a platform is as close to true cross-platform availability as it gets. Tools like Electron enable us to look at desktop applications as another medium, instead of a separate entity.

We’ve built a little prototype web app to take Electron for a spin. Give it a try [online](https://thibaudcolas.github.io/react-d3-electron/), [_or on your computer_](https://github.com/thibaudcolas/react-d3-electron/releases).

---

> This article was originally published on [Springload’s blog](https://www.springload.co.nz/blog/blurring-line-between-web-and-desktop-apps/).
