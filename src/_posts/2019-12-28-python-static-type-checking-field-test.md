---
layout: post
title: "Python static type checking: field test"
date: 2019-12-28 17:10:26 +0000
comments: true
categories: [Python, Tools, Code]
---

A few years ago, with the release of [Pyre](https://pyre-check.org/) from Facebook, I got really excited about the potential of type annotations and type checkers for Python codebases. Having spent a lot of time with [Flow](https://flow.org/), also from Facebook, I was full of hope. Now, let’s see how well static type checking actually works in modern Python.

<!-- more -->

## TL;DR;

After my experiments, I was really hoping I could heartily recommend using type annotations and static type checkers for most projects in most cases. In reality it feels like it’s too early still, unless:

- You’re already sold on the idea of static typing, and you already know type systems from other langues – you’ll be able to navigate the messy Python landscape.
- You only work on projects that are kept up-to-date with Python releases – so Python 3.8+ only.
- You maintain large codebases, and have a large enough team to invest into tooling.

For the rest of us, who work on teams with varying degrees of knowledge and buy-in about types, in projects that use Python 3.5, with lots of untyped dependencies, and little budget for maintenance – it just feels too early.

## Type annotations

The first thing I learned while investigating static typing more thoroughly was that even though PEP-484, which started it all, was implemented in Python 3.5 – it really was just the beginning, and much more is needed to fully benefit from typing code. Here are all type-related PEPs I looked into using while typing my [±4000 SLOC project](https://github.com/springload/draftjs_exporter/issues/101) on which I wanted to try this:

- [PEP 3107 -- Function annotations](https://www.python.org/dev/peps/pep-3107/) (Python 3.0)
- [PEP 484 -- Type annotations for function parameters and return values](https://www.python.org/dev/peps/pep-0484/) (Python 3.5)
- [PEP 526 -- Syntax for Variable Annotations](https://www.python.org/dev/peps/pep-0526/) (Python 3.6)
- [PEP 561 -- Distributing and Packaging Type Information](https://www.python.org/dev/peps/pep-0561/) (Python 3.7)
- [PEP 586 -- Literal Types](https://www.python.org/dev/peps/pep-0586/) (Python 3.8)
- [PEP 589 -- TypedDict: Type Hints for Dictionaries with a Fixed Set of Keys](https://www.python.org/dev/peps/pep-0589/) (Python 3.8)
- [PEP 544 -- Protocols: Structural subtyping (static duck typing)](https://www.python.org/dev/peps/pep-0544/) (Python 3.8)
- [PEP 591 -- Adding a final qualifier to typing](https://www.python.org/dev/peps/pep-0591/) (Python 3.8)
- Not a PEP but also worth mentioning: the [`Typing :: Typed`](https://pypi.org/classifiers/) trove classifier

I’m used to leveraging dictionaries with fixed set of keys in other languages (e.g. JSON with a set structure). Literal types are also very useful. So is structural subtyping, especially in a language like Python. Without these available, it felt really strange to write annotations using very broad categories – e.g. `Dict[str, Any]` when really the dictionary should only have a few keys for which the types are well-known. Or use `str` for a very limited set of literals.

I found the [mypy documentation](https://mypy.readthedocs.io/en/latest/index.html) to be the best source of information on what was and wasn’t available in the type system / type checkers. It’s important to note that some of the above are available as backports in [typing_extensions](https://github.com/python/typing/tree/master/typing_extensions), but I felt somewhat funny adding a dependency for my project just for the sole purpose of adding type definitions that are only every used statically. All in all, if it wasn’t for mypy’s type reference this would have been really hard to navigate. Hopefully this will get easier once Python 3.8+ is more established, and there are more resources available online dedicated to static typing in Python.

## Type checkers

On the topic of type checkers, here are the ones I tried:

- [pytype](https://github.com/google/pytype) from Google.
- [pyright](https://github.com/Microsoft/pyright) from Microsoft.
- [Pyre](https://pyre-check.org/) from Facebook.
- [mypy](https://github.com/python/mypy) from Dropbox (and more).

Out of these four, mypy is by far the most established, having been around the longest, and having the best documentation. Even though I liked Flow from Facebook, Pyre still feels very experimental and poorly documented – as far as I could remember the official docs are the exact same as they were when I checked it out a year ago, and I couldn’t get it to understand type aliases. I also had similar documentation issues with pytype – I could get it working, but couldn’t get it to read my project’s stubs. Finally, pyright gets an honorable mention. Its README clearly states that it’s only a side project (and has been created only a few months ago), but it was very straightforward to set up and get meaningful results with.

I would recommend using mypy for people starting with static typing in Python – it’s the easiest to use as of now, has the [best documentation](https://mypy.readthedocs.io/en/latest/) by far, and seems like it has a bright future ahead of itself. It even has a [daemon/server mode](https://mypy.readthedocs.io/en/latest/mypy_daemon.html) to get better performance for large codebases.

## Starting to use types on a project

Here is the process I would recommend, for small projects where the whole codebase can be typed in one go:

1. Research whether types are suitable on your project – do you have major dependencies that might be untyped and hard to stub? Are there JSON-like data structures that will need special attention to be typed correctly?
2. Set up mypy with the most permissive settings possible. We can turn on the strictness later.
3. Consider using a tool like [pyannotate](https://github.com/dropbox/pyannotate) (also from Dropbox) to automatically add annotations to your code.
4. Start manually annotating internal modules that have straightforward signatures (e.g. utility code, or basic data processing, without external dependencies)
5. Expand annotations to reach your public API.
6. Turn on stricter mypy settings.

## Resources

Here are resources I would also recommend checking out:

- <https://realpython.com/python-type-checking/>, the best all-in-one resource that is not mypy’s type system reference.
- <https://github.com/typeddjango/awesome-python-typing>, a list of resources on typing in Python.
- <https://github.com/psf/black/blob/master/black.py>, a real-world codebase that uses type annotations.
- <https://github.com/JelleZijlstra/lxml-stubs>, an example of type stubs outside of typeshed.
- <https://www.destroyallsoftware.com/talks/ideology>, an inslightful talk from Gary Bernhardt about types, unit tests, and ideology.
