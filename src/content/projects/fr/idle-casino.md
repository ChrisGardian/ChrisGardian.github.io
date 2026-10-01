---
title: Idle Casino Conquest
summary: Jeu idle/tycoon en pixel art où l'on fait grandir un casino. Publié sur itch.io.
order: 2
badge: { text: Jouable, tone: green }
youtubeId: "hkLWN_D1mMY"
tags: [Unity 6, C#, Pixel art]
cover: ../../../assets/projects/casino-cover.jpg
coverAlt: Le casino en fin de partie, rempli de machines et de clients
facts:
  - label: Contexte
    value: Projet de jeu du Bachelor
  - label: Année
    value: "2025"
  - label: Moteur
    value: Unity 6, C#
links:
  - label: Jouer sur itch.io
    url: https://lebape.itch.io/incremental-casino-expansion
  - label: Code source
    url: https://github.com/ChrisGardian/incremental-casino-expansion
gallery:
  - src: ../../../assets/projects/casino-midgame.jpg
    alt: Milieu de partie, les premières lignes de machines débloquées
  - src: ../../../assets/projects/casino-upgrades.jpg
    alt: L'arbre d'améliorations, qui pilote toute la progression
---

## Le jeu

Le joueur gère un casino : il débloque des **lignes de machines** (machines à sous, blackjack, roulette…), attire des **clients** qui viennent jouer, et réinvestit ses gains dans un **arbre d'améliorations**. Deux ressources rythment la partie : l'**argent**, que le casino gagne quand les clients perdent, et la **popularité**, qui augmente quand ils repartent satisfaits et fait venir plus de monde.

Le projet devait documenter à la fois le game design et l'implémentation technique.

## L'architecture

- **Données séparées du code** : machines, clients, lignes et nœuds d'amélioration sont tous configurés dans des *ScriptableObjects*. Équilibrer le jeu ne demande pas de toucher au code.
- **Clients pilotés par une machine à états** (attente → déplacement → jeu → départ), avec une patience globale et une patience par machine.
- **Coordination par événements** : un système central attribue les clients libres aux places qui se libèrent, sans que clients et machines ne se connaissent.
- **Arbre d'améliorations générique** : chaque nœud applique une liste d'effets typés (plus de machines, vitesse des clients, clients VIP, déblocage de panneaux d'interface…). Plus de 20 types d'effets sont implémentés.
- **Outils d'éditeur** : un inspecteur personnalisé et un outil qui génère l'arbre d'améliorations, pour itérer vite sur l'équilibrage.
