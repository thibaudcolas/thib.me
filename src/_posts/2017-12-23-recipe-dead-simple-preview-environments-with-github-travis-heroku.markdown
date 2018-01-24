---
layout: post
title: "Recipe: dead-simple preview environments with GitHub, Travis, and Heroku"
date: 2017-12-23 09:15:54 +0200
comments: true
categories: [Tools, Wagtail, Automation]
---

Developers love to automate things. Shave yaks. Automation can save tremendous time, but automating complex processes can also be a big time sink. _This is a story in compromise_.

The other thing developers love is free software. I love GitHub, Travis, and Heroku because they all provide a very generous free usage tier – let's have a look at how we can leverage them to automate preview environments (think: preview the result of a new pull request) for [Wagtail](https://github.com/wagtail/wagtail), a project I frequently contribute to.

**A disclaimer** – the end result isn't full automation, it still is a manual process. We shall call this _semi-automated_ preview environments.

<!-- more -->

## Goal

We want to automate the deployment of [Wagtail pull requests](https://github.com/wagtail/wagtail/pulls) to a preview environment that can be used to review the changes. For our purposes, we will use Wagtail's official demo project: [bakerydemo](https://github.com/wagtail/bakerydemo), which has been tested extensively and contains demo content for most features.

The general workflow is:

* A contributor makes a pull request.
* We decide to create a preview environment for it, and make a first deployment.
* The pull request is updated.
* The new version is deployed to the preview environment.

Ideally this would all happen without any human interaction. Send a PR, a bot creates the environment and comments on the PR with a ready-made link. For now, all of these steps will be manual.

## Prerequisites

> This is a story in using other people’s software, and infrastructure. If you have sysadmin knowledge and-or want to control your infrastructure, you will be disappointed. I hear [Docker](https://www.docker.com/) is good.

The basic ingredients for our recipe are:

* Accounts for [GitHub](https://github.com), [Travis](https://travis-ci.org) (use your GitHub account), and [Heroku](https://www.heroku.com/).
* Command-line clients: [Travis CLI](https://github.com/travis-ci/travis.rb#command-line-client), [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
* A fork of Wagtail, and bakerydemo

## Creating a deployment-ready preview branch for Wagtail

For Wagtail, the main thing we need to overcome is that static files need to be compiled before deployment in order for the CMS to work. Ideally, this would be done in Heroku whenever the app is deployed, but ~until I get this working~ for now we can simply create a separate branch and commit the static files to git. For this example, let's say we are building a preview branch for [PR #3942, Streamfield UI changes](https://github.com/wagtail/wagtail/pull/3942), which is based off a branch named `2325-streamfield-ui`.

```sh
# From your Wagtail fork, open the branch you would like to deploy.
git checkout -b 2325-streamfield-ui
# Create a branch for the static files. I like to prefix these with `dist/`:
git checkout -b dist/2325-streamfield-ui
```

Then, remove static file ignores in git. Here is [a commit](https://github.com/thibaudcolas/wagtail/commit/87b0d16e0d36899d47d60829b44decbc8cbebf65) you can cherry-pick to remove all static file ignores.

```sh
# Then, rebuild the static files and commit them to Git.
npm run dist
git add .
git commit -m 'Add static files to branch'
git push -u origin dist/2325-streamfield-ui
```

## Creating a new preview environment for bakerydemo

This should only be necessary once per pull request. Start by thinking for a name for the preview environment. For this example, we will use `bakerydemo-foo`.

```sh
# From your bakerydemo fork, create a new branch and a new Heroku app.
git checkout -b bakerydemo-foo
heroku apps:create bakerydemo-foo
# Link the two via a git remote pointing to Heroku.
heroku git:remote --app bakerydemo-foo --remote heroku-bakerydemo-foo

# Let's configure the environment for Django.
heroku config:set DJANGO_DEBUG=off
heroku config:set DJANGO_SETTINGS_MODULE=bakerydemo.settings.production
heroku config:set DJANGO_SECURE_SSL_REDIRECT=on

# Finally, we can configure Travis so it automatically syncs the branches to Heroku.
# This isn't strictly necessary, but it takes us a bit closer to the "no manual steps" ideal.
travis setup heroku
travis enable
```

Here is the full Travis configuration:

```yml
sudo: false
language: python
branches:
  only:
  # Only build the branches meant for the automated deployment.
  - bakerydemo-foo
install:
- echo 'There is no install step'
script:
- echo 'Automated deployment to Heroku'
deploy:
  provider: heroku
  api_key:
    secure: hashed API key in base64
  app:
    # When there are multiple preview environments, map branch names to Heroku apps.
    bakerydemo-foo: bakerydemo-foo
notifications:
  email: false
```

Important step – in the `requirements.txt` (or `base.txt`), install from the newly created branch based on the PR:

```sh
Django==1.11.5
django-dotenv==1.4.1

# Note how we reference our dist/ preview branch of Wagtail, on our fork, from the last step.
-e git+https://github.com/thibaudcolas/wagtail.git@dist/2325-streamfield-ui#egg=wagtail

http://playground.torchboxapps.com/matthew/wagtail/wagtailfontawesome-1.1.1-py2.py3-none-any.whl
Pillow==4.0.0
```

Last step, sync up everything:

```sh
# If you've configured Travis to push to Heroku, this would be enough.
git push -u origin bakerydemo-foo
# If you want to directly push to Heroku anyway.
git push heroku-bakerydemo-foo bakerydemo-foo:master
```

That's it! Your preview environment should be up and running at https://bakerydemo-foo.herokuapp.com/.

## Updating the preview environment

Changes were made on the PR. Now it's time to deploy again. This is much more straightforward:

```sh
# From your Wagtail fork, open the branch you would like to re-deploy and get the latest changes.
git checkout 2325-streamfield-ui
git pull
# Go to the static files branch and update it too.
git checkout dist/2325-streamfield-ui
git reset --hard 2325-streamfield-ui
# Cherry-pick the commit ignoring the static files. Note: your commit hash will be different.
git cherry-pick 5ec4c586a
# Rebuild the static files and commit them to Git.
npm run dist
git add .
git commit -m 'Add static files to branch'
git push -uf origin dist/2325-streamfield-ui
```

Now, all you need to do is redeploy the Heroku app. Just add a new empty commit on the `bakerydemo` branch:

```sh
git checkout bakerydemo-foo
git commit --allow-empty -m 'Deploy latest changes to bakerydemo-foo'
# If you've configured Travis to push to Heroku, this would be enough.
git push -u origin bakerydemo-foo
# If you want to directly push to Heroku anyway.
git push heroku-bakerydemo-foo bakerydemo-foo:master
```

Wait for the builds to finish, and your preview environment will be ready again at https://bakerydemo-foo.herokuapp.com/. Don't forget to clear your cache!

## Improving upon this workflow

This could be faster, and less error-prone. I quite like the idea of being able to deploy arbitrary repositories (rather than only the one the PR is made from), but it shouldn't be necessary to manually build the static files and commit them to a throw-away branch. Here are some potential improvements:

### Build static files directly on Heroku

Adding the Node buildpack on Heroku, and configuring the environment to install development dependencies, it should be possible to do the compilation on Heroku, and point the `bakerydemo` directly at the PR's initial branch:

```sh
heroku buildpacks:clear
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add heroku/python

heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NODE_ENV=development

# Then build the files in the postdeploy hook.
```

### Use a bot to do the manual steps

A tool like [Danger](http://danger.systems/js/) could have a bot automatically process pull requests in the main project's build, and do all of the steps above automatically.

### Leverage higher-level Heroku features

* Review apps https://devcenter.heroku.com/articles/github-integration-review-apps
* Pipelines https://devcenter.heroku.com/articles/pipelines

## Onwards

I hope this helps! In my experience, setting up a new preview environment takes about 15mins for someone familiar with Git / Travis / Heroku, and deploying changes is at most 5 minutes.

I may have a look at automating this further (in particular removing the need for static file branches) later on.
