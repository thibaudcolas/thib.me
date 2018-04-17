---
layout: post
title: Learning Docker
date: 2018-04-17 22:05:03 +0300
comments: true
categories: [Automation, Resources, Docker]
---

A few weeks ago, I started a new job at [Codemate](https://www.codemate.com/) (yay! More on that in a future post). Among many other things, this was the occasion for me to learn more about a technology I had been avoiding so far: Docker, and the whole concept of containerization. I usually prefer to focus on user-facing work, and leave sysadmin and ops to others – but I also have a sweet tooth for any and all automation, especially the type that can save developers time and headaches. It was definitely time to dive deep!

This blog post is my overview of the resources I looked at and the things I learned over the last few weeks.

<!-- more -->

## Where from, where to

Starting on a new project, I quickly realised Docker would be a central part of my day to day work. It is used for development environments, CI, staging, as well as production. When learning something as fundamental and ubiquitous, I think it’s quite important to take a step back and note where you’re starting from:

* **What are the fundamental principles?** For Docker this would be things like [containerisation](https://en.wikipedia.org/wiki/Operating-system-level_virtualization), [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery), and generally the idea of speeding up [release cycles](https://en.wikipedia.org/wiki/Software_release_life_cycle) and facilitating administration by moving to infrastructure as code.
* **What is the context?** Here I would think of things like micro-services, and generally the move to cloud platforms.
* **What do you know already?** For me, I had some notion of basic docker commands, and I had used Vagrant extensively to achieve similar results as what Docker is for in development.
* **Where do you want to be?** Not everyone needs to be an expert at everything. I don’t need to know the details of the consensus algorithm used in Kubernetes clusters (it’s called [Raft](<https://en.wikipedia.org/wiki/Raft_(computer_science)>).

I quite like to summarise this as a score from 0 to 5 – 0 being [“you know nothing Jon Snow” (NSFW)](https://www.youtube.com/watch?v=dQw4w9WgXcQ), and 5 being “complete expert, Ask Me Anything, I can teach anyone about any of this”. You can then assess how you perceive your skills before starting to learn, and decide on how much you want to know.

I gave myself a 1/5 because of my Vagrant knowledge and awareness of the problems this is trying to solve, and decided I would need to get to 4/5 to do my job effectively. But this is quite a big jump, so for now let’s get to 2 out of 5.

## Going to 2/5

After doing a bit of research, here are the things I decided on to make a good “2 out of 5” baseline:

* Docker principles and vocabulary
* Docker from scratch, with the official [Get started with Docker](https://docs.docker.com/get-started/)
* docker-compose, with its [official guide](https://docs.docker.com/compose/)
* [Docker with Django](https://docs.docker.com/compose/django/) – unfortunately this stops very early, and doesn’t address eg. migrations.
* Make a few Docker improvements to my current project
* Discuss Docker pros and cons with friends and coworkers
* Write this blog post, of course!

I had initially identified other areas to study (eg. Docker usage in CI, 12-factor apps with Docker, and image registries) but decided it would be better to start smaller.

I also made a list of resources to look at to achieve the above learning goals, complementing the official documentation, and settled on two of the simplest ones out there:

### Learn Docker in 12 minutes 🐳

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=YFl2mCHdv24" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Docker Compose in 12 Minutes

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=Qw9zlE3t8Ko" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Reading through Dockerfiles

Both of those videos were very good to understand the key principles, but I also needed to get up to speed with Linux distributions and general provisiniong tasks – I also decided to spend time reading Dockerfiles (what a great pastime!).

* My new project’s Dockerfile of course
* But also the official ones, understanding how they are layered – eg. the [official PHP images](https://github.com/docker-library/php/blob/c4f059d09d7eefcb73304d198faa7674610ed810/7.2/stretch/apache/Dockerfile)
* And this nicely commented Production-minded example from Tobias McNulty: [A Production-ready Dockerfile for Your Python/Django App](https://www.caktusgroup.com/blog/2017/03/14/production-ready-dockerfile-your-python-django-app/)

## What I learned

In short, quite a lot! I logged all of my progress on my [koans-playground repository](https://github.com/thibaudcolas/koans-playground/tree/master/docker), as a way to see my progress.

### Vocabulary

The basic understanding of the key principles, and of how containers and images and services work together, was critical for me to actually understand what I was doing day to day.

> **Containerization**: the use of Linux containers to deploy applications.
> [Containers are not new, but their use for easily deploying applications is.](https://docs.docker.com/get-started/)
>
> **Image**: an executable package that includes everything needed to run an application – the code, a runtime, libraries, environment variables, and configuration files.
> **Image**: template to create a target container (snapshot)
> Images are defined using a Dockerfile
>
> **Container**: running instance of an image
> **Container**: a runtime instance of an image – what the image becomes in memory when executed (that is, an image with state, or a user process)
>
> **Dockerfile**: defines what goes on in the environment inside your container.
> Access to resources like networking interfaces and disk drives is virtualized inside this environment, which is isolated from the rest of your system, so you need to map ports to the outside world, and be specific about what files you want to “copy in” to that environment.
> However, after doing that, you can expect that the build of your app defined in this Dockerfile behaves exactly the same wherever it runs.
>
> **Repository**: a collection of images – sort of like a GitHub repository, except the code is already built.
>
> **Registry**: a collection of repositories.
>
> **Service**: defines how containers behave in production
> **Service**: really just “containers in production.” A service only runs one image, but it codifies the way that image runs—what ports it should use, how many replicas of the container should run so the service has the capacity it needs, and so on.
>
> **Compose**: a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

### The Docker and docker-compose workflows

For Docker,

1. Write Dockerfile
2. Build an image from the Dockerfile
3. Run the image to get containers

For docker-compose,

1. Define your app’s environment with a Dockerfile so it can be reproduced anywhere.
2. Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.

### Docker vs docker-compose

It was also helpful to understand why these are two separate tools, and when you would use one over the other. In short, from the official docs, here are the useful features of docker-compose:

* Multiple isolated environments on a single host.
  * Use a project name to isolate environments from each others (of the same app, of apps running the same services, etc).
  * By default, project name is basename of project directory.
* Preserve volume data when containers are created.
* Only recreate containers that have changed.
* Variables and moving a composition between environments.

## Next steps

Up next, getting to 3/5 of course!

Here are my goals for this milestone so far:

* [Node.js debugging with Docker](https://github.com/docker/labs/tree/master/developer-tools/nodejs-debugging)
* [Porting of existing apps to Docker](https://github.com/docker/labs/tree/master/developer-tools/nodejs/porting/)
* [Building 12-factor apps with Docker](https://github.com/docker/labs/tree/master/12factor)
* Porting my Wagtail development environment to Docker
* Docker in CI
* Correctly separating between dev setup and production setup
* Managing images (locally, and with registries)
* Kubernetes getting started
