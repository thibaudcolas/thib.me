---
layout: post
title: How Springload scores on the Joel Test and why it matters
date: 2017-08-01 11:35:03 +0300
comments: true
categories: [Springload, Resources, Code]
canonical: https://www.springload.co.nz/blog/how-springload-scores-joel-test-and-why-it-matters/
---

Ever heard of the [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)? It’s a simple 12 question measure of the quality of a software team, introduced by Joel Spolsky of [Stack Overflow](https://stackoverflow.com/) and Trello fame. The test is famous in the software development community as a no-BS calculation of the maturity of a development team. So, how’d we do?

<!-- more -->

## Joel Test Results

---

Drum roll please. Here’s how Springload scores:

1. Do you use source control? – **Yes**. We use git and GitHub.
2. Can you make a build in one step? – **Yes**. Push to a branch.
3. Do you make daily builds? – **Yes**. On every push to every branch.
4. Do you have a bug database? – **Yes**. GitHub Issues.
5. Do you fix bugs before writing new code? – **Not always** :(
6. Do you have an up-to-date schedule? – **Yes**.
7. Do you have a spec? – **Yes**. User stories in our agile projects.
8. Do programmers have quiet working conditions? – **Yes**.
9. Do you use the best tools money can buy? – **Yes**. Choose your own hardware.
10. Do you have testers? – **Yes**.
11. Do new candidates write code during their interview? – **Yes**. Usually before the in-person interview.
12. Do you do hallway usability testing? – **Yes**.

OK so we scored a solid 11/12! But we’re not here to humblebrag. We want you to understand why you should care about this kind of score.

## Why it matters

The Joel Test is important because all of its questions are a good commonsense set of rules that help to quickly evaluate the operating level of any development team. Speed is important: it’s easier to give a quick yes or no to each question, and it doesn’t require calculating any metrics like a number of defects over time or test coverage. This also helps keep answers truthful.

Here are the actual development practices that allow us to score so high (this is also where we geek out with dev terminology):

#### **Continuous integration**

The project’s automated test suites are executed on every code change, and contributors are notified of the status of those builds within the code repository and via our messaging tools. At Springload, this is CodeShip or CircleCI for client work, and Travis for open-source projects. Check out our [Travis dashboard](https://travis-ci.org/springload/) to see what’s on here.

#### **Continuous delivery (CD)**

Delivery of updates is automated after successful builds on “delivery-ready” branches. This greatly reduces the time it takes to ship code. This as part of our CI pipeline described above.

#### **Web development quality checklists**

All of our projects abide by the same [quality standards](https://github.com/springload/frontend-starter-kit/blob/master/docs/frontend-launch-checklist.md), based on web standards (valid HTML and CSS, [WCAG](https://www.w3.org/WAI/intro/wcag.php), [NZISM compliance](http://www.gcsb.govt.nz/publications/the-nz-information-security-manual/), etc), and industry best practice (programming style guides, CSS architecture practices like ITCSS and BEM, etc).

#### **State of the art tooling**

This includes, for example, static analysis in every developer’s environment that checks our code’s compliance with the standards we set for ourselves. Our interfaces are audited for common accessibility, performance and compatibility pitfalls. See [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) for JavaScript, and [PEP8](https://www.python.org/dev/peps/pep-0008/) for Python.

#### **Pair programming**

Frequent pair programming sessions are a good way to provide peer review, reinforce our development culture, and ensure knowledge retention on the project stays high. When doing this remotely, we use the wonderful [Screenhero](https://screenhero.com/).

#### **Code reviews**

As part of our broader quality assurance practice, the work of individual developers is reviewed by their peers within our code repositories. Those reviews are enforced to ensure that our principles are respected on every project.

![Screenshot of a sample Pull Request review on GitHub](/images/code-review.png)

> Here’s what a GitHub Pull Request (PR) review looks like.

And that’s our secret to creating a great development workflow and why we scored 11/12 on the Joel Test.

_Image by [Craig ONeal](http://www.flickr.com/photos/craigoneal/485352145) \- using the famous Billy Joel as an oblique reference to the "Joel Test" (no relation)._
