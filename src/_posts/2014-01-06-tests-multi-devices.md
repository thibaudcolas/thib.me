---
layout: post
title: "Tests multi-devices"
date: 2014-01-06 02:14:12 +0100
comments: true
categories: [List, Tools, Test]
---

Après plusieurs heures à tester manuellement une Web App sur mon smartphone, l'évidence est là : utiliser un outil de navigation synchronisée desktop-devices me ferait grand bien. J'ai donc décidé de partir à la recherche des solutions disponibles sur le marché, gratuites ou pas, open-sources ou pas.

<!-- more -->

Armé de mon ami XKCD, je sais que le jeu en vaut la chandelle. En plus de préserver ma santé mentale, ce genre d'outil permettra un gain de temps substantiel lors des phases de test avec un, et surtout plusieurs appareils.

[![Is it worth the time?](https://imgs.xkcd.com/comics/is_it_worth_the_time.png)](http://xkcd.com/1205/)

## L'outil idéal

L'outil idéal ne nécessite pas ou peu d'installation. Il fonctionne sur tous les terminaux iOS et Android du moment, et sa mise en place est rapide. Cet outil utopique fonctionne à la fois pour des appareils partageant le même réseau, mais aussi lorsque les devices ne sont connectées entre elles que par internet. L'appariement des appareils est simple (détection puis confirmation, passphrase, code, etc).

Surtout, outre la navigation, l'on pourrait également inspecter les éléments des pages des devices (_à la [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/)_), et surveiller les modifications sur des fichiers afin de déclencher un rafraîchissement sur tous les navigateurs (_à la [LiveReload](http://livereload.com/)_). Enfin, outre la navigation, les interactions avec le navigateur sont également jouées en simultané sur chaque appareil : contrôles de formulaires, scrolling, et hovers synchronisés.

Ensemble, les outils disponibles sur le marché remplissent toutes ces caractéristiques. Malheureusement, aucune solution ne se dégage encore suffisament du lot.

## Adobe Edge Inspect CC

[Edge Inspect](https://www.adobe.com/products/edge-inspect.html) intègre weinre et permet également de prendre des captures d'écran sur les devices utilisées. L'une des solutions les plus onéreuses.

## Muir

[Muir](http://labs.iqfoundry.com/muir/) est la seule des solutions à proposer des plugins pour IDE synchronisant sauvegarde de fichiers et rechargement des pages.

## BrowSync

Mon outil préféré du moment, [BrowSync](http://browsync.net/) est facile à mettre en place (les appareils peuvent être sur des réseaux différents) et son coût est simple à prendre en compte : 2\$ sur l'App Store.

## Ghostlab

La plus complète des propositions, [Ghostlab](http://ghostlab.vanamco.com/) synchronise le remplissage des formulaires ainsi que le scroll et les clicks en plus de la navigation.

## Remote Preview

Côté Open-source, [Remote Preview](https://github.com/viljamis/Remote-Preview) propose une solution simple bien qu'à héberger soi-même.

## MIHTool

Kudos à Unbug qui propose [MIHTool](https://itunes.apple.com/us/app/mihtool-web-debugger-pro/id584739126?mt=8), un outil sortant du cadre de la navigation synchronisée mais qui mérite tout de même d'être cité. MIHTool intègre lui aussi Weinre, et fonctionne sur tous appareils connectés à internet.
