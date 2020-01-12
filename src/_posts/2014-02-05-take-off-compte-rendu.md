---
layout: post
title: "Take Off : Compte-rendu"
date: 2014-02-05 23:55:04 +0100
comments: true
categories: [Events, Community, Report]
---

La conférence [Take Off](http://takeoffconf.com/2014) avait lieu la semaine dernière à Lille, et j'ai eu la chance d'y participer. C'est une conférence dédiée au Web en général, pour les techos mais pas que. Les présentations sont disponibles [sur YouTube](https://www.youtube.com/user/takeoffconference) (en anglais). Pour ce compte-rendu, j'ai regroupé les sujets en trois thèmes : L'avenir du Web, les bonnes pratiques, et l'essor de JavaScript.

<!-- more -->

## L'avenir du Web

Aucune présentation n'a directement évoqué le sujet de l'avenir du Web mais beaucoup se questionnaient sur les rapports entre ses acteurs : navigateurs, standards et développeurs. Nous avons eu droit à une grosse piqûre de rappel très utile sur [le fonctionnement d'un navigateur](http://paulrouget.com/takeoff2014), par un dev. de Mozilla. Il a bien mis en avant l'intérêt pour nous développeurs d'avoir une bonne connaissance de ces moteurs de rendu, je vous conseille donc au passage un [excellent article de Paul Irish sur Webkit](http://www.paulirish.com/2013/webkit-for-developers/). Une autre présentation évoquait le [rôle des standards](https://www.youtube.com/watch?v=vatY9oDLk1A) dans [l'extensibilité du Web](http://berjon.com/presentations/20140130-own-adventure-web-takeoff/#/), invitant les développeurs à réclamer non pas des fonctionnalités supplémentaires (ex : cache pour Web Apps), mais des primitives bas niveau (ex: IndexedDB) sur lesquelles bâtir des APIs. Une approche intéressante, à méditer.

Quelques liens pour aller plus loin :

- [Extensible Web Manifesto](http://extensiblewebmanifesto.org/), à survoler.
- [Hitch.js](http://extensiblewebmanifesto.org/), sélecteurs CSS sous stéroïdes.

## Bonnes pratiques

Je regroupe sous la bannière "Bonnes pratiques" les trois présentations suivantes :

- [Your Customer WANTS to Pay Your Testing Budget](https://www.youtube.com/watch?v=fxe2pH0cTXc) [slides](https://speakerdeck.com/klickass/your-customers-want-to-pay-your-testing-budget), par Andre Jay Meissner. Excellente prez, qui faisait l'éloge des [Open Device Labs](http://opendevicelab.com/). Côté tests sur appareils physiques nous avons encore du chemin à faire à la Web Factory pour arriver au niveau de [ce genre de photo](https://devicelab.fi/).
- [OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) : une présentation sur les best practices côté sécurité durant laquelle on a mentionné les outils [Metasploit](http://www.metasploit.com/), [Meldium](https://www.meldium.com/) et [Versioneye](https://github.com/versioneye/). Ce dernier pourrait particulièrement vous intéresser.
- Enfin, une présentation géniale de Patrick Hamann sur [l'optimisation des performances au Guardian](https://speakerdeck.com/patrickhamann/css-and-the-critical-path). Hyper avant-gardiste, il va beaucoup plus loin que ce que l'on voit habituellement et je vous la conseille vivement.

## L'essor de JavaScript

Pour terminer, JavaScript _comme plateforme_ était omniprésent. J'ai retenu trois sujets :

- [A smaller AngularJS](https://rawgithub.com/timruffles/cute-talk/master/index.html#/) : une réécriture des parties intéressantes d'AngularJS (scopes, double binding) pour les rendre plus compréhensibles. À lire : [code source de cette réécriture (moins de 1000 lignes)](http://timruffles.github.io/cute/).
- [Patterns for Large scale JS](https://speakerdeck.com/kimjoar/patterns-of-large-scale-javascript-applications-1). Comment construire de grosses applications JavaScript testables, scalables, maintenables. Excellent talk. Du même hauteur : [Superhero.js](http://superherojs.com/), une mine de ressources sur JavaScript.
- [Time-Series Monitoring Graphs with D3 & Ricksha](http://www.slideshare.net/byrichardpowell/timeseries-monitoring-graphs-with-d3-rickshaw). Si vous êtes passés à côté de D3, je vous conseille vivement d'y [jeter un œil](https://d3js.org) pour voir [l'étendue](http://bl.ocks.org/mbostock/4063318) de ce qu'il est [possible de faire](https://www.theguardian.com/info/2017/feb/05/removed-interactive).

Excellente conférence en somme, j'espère pouvoir y retourner en 2015. Merci à la société [Hopwork](http://www.hopwork.com/) qui m'a offert le billet.
