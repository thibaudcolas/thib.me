---
layout: post
title: "FranceJS.in(Toulouse) : Compte-rendu"
date: 2013-12-06 07:12:40 +0100
comments: true
categories: [Events, JavaScript, Report]
---

Il y a quelques jours s’est tenue la première édition de la conférence [FranceJS](http://francejs.org/conf2013.html). Voici un petit compte-rendu de ces deux jours autour de JavaScript.

<!-- more -->

De nombreuses présentations étaient consacrés à [Node](http://nodejs.org/). J'en retiens que cette plateforme a gagné énormément de traction, des applications Node sont maintenant déployées en production chez de (très) grands groupes.

- Exemple : PayPal, Wallmart, eBay, IBM, Linked In
- Voici une [excellente infographie](https://strongloop.com/wp-content/uploads/2015/02/final-node-infographic-3-18-15v1.pdf) qui présente l'essor de la plateforme
- Les slides d'un [excellent talk](http://delicious-insights.com/francejs-node/) sur le sujet, par Christophe Porteneuve.

Côté outils, l'écosystème JavaScript a maintenant un task runner favori (équivalent de ant, make, etc) : [Grunt](http://gruntjs.com/). Par rapport à ses équivalents d'autres plateformes, Grunt se distingue surtout par sa communauté : scripter le build de son projet avec Grunt, c'est bien plus souvent rechercher des tâches de build préexistantes qu'en écrire soi-même.

Troisième thématique abordée : les Single Page Applications. Nous avons pu assister à des ateliers sur [AngularJS](http://angularjs.org/) et [Backbone](http://backbonejs.org/). Là encore, pour la communauté JavaScript il n'y a plus aucun doute quant à l'avenir de ces solutions. Il est certain que jQuery en tant que framework a du soucis à se faire (et tant mieux).

Plutôt que de vous orienter vers des slides, le mieux pour découvrir ce qui se cache derrière le concept de SPA est d'aller regarder le code d'une implémentation de référence, [Todo MVC](http://todomvc.com/). Cette application est implémentée avec plusieurs frameworks, et je vous conseille d'aller jeter un coup d'œil en priorité aux versions suivantes :

- [AngularJS](https://github.com/tastejs/todomvc/tree/master/examples/angularjs)
- [jQuery (comme point de comparaison)](https://github.com/tastejs/todomvc/tree/master/examples/jquery)
- [Knockout + RequireJS](https://github.com/tastejs/todomvc/tree/master/examples/knockoutjs_require)
- [EmberJS](https://github.com/tastejs/todomvc/tree/master/examples/emberjs)

Enfin, j'ai également apprécié deux excellentes présentations plus originales :

- Une démo de [Babylon.JS](http://www.babylonjs.com/), un moteur 3D basé sur WebGL ([slides](http://fr.slideshare.net/davrous/raliser-un-jeu-cross-plateformes-avec-webgl-et-babylonjs))
- Une [présentation hyper avant-gardiste](http://ljouanneau.com/standards/francejs2013/webcomponents.pdf) de la spécification Web Components, le futur du développement Web (attention, assez théorique)

Merci aux [organisateurs](http://francejs.org/why.html) pour leur travail autour de cet excellent évènement.
