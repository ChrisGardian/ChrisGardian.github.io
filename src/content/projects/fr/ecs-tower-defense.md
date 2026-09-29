---
title: Tower Defense en ECS
summary: Étude d'architecture avec Unity DOTS, avec une simulation entièrement en ECS, séparée du rendu.
order: 3
badge: { text: En cours, tone: pink }
tags: [Unity DOTS, ECS, C#]
cover: ../../../assets/projects/ecs-cover.svg
coverAlt: Schéma d'un chemin, d'ennemis et d'une tour avec sa portée
facts:
  - label: Contexte
    value: Projet personnel
  - label: Année
    value: "2026"
  - label: Technologies
    value: Unity 6.6, Entities (DOTS)
  - label: Statut
    value: En cours, phase 2
---

## L'objectif

Ce projet sert à apprendre l'architecture **ECS** (Entity Component System) de Unity, à l'opposé de l'héritage orienté objet classique. Le game design n'est pas le sujet : les mécaniques d'un tower defense classique sont reprises telles quelles, pour concentrer tout l'effort sur la structure du code.

## L'architecture

- **Simulation et rendu séparés.** Toute la logique (déplacement, ciblage, tirs, dégâts) vit dans des *components* et des *systems* ECS. L'affichage passe par des GameObjects classiques qui se contentent de lire l'état simulé. Ce choix est volontaire : en 2026, le rendu 2D natif de DOTS reste trop instable.
- **Organisation par couche**, pas par entité : `Simulation/` ne sait rien du rendu, `Presentation/` ne décide rien.
- **Des components étroits et réutilisables** (souvent un seul champ), des *tags* vides pour l'identité des entités, et la présence d'un component pour porter un état (une tour « a une cible » ou non).
- **Un pattern d'événement** : un system détecte un impact et pose un tag transitoire, un autre le consomme et applique la conséquence. La source du coup reste ainsi indépendante de ses effets.
- **Les types d'ennemis sont des prefabs « bakés »**. Un ennemi détruit instancie ses enfants à la même position sur le chemin : ajouter un type d'ennemi revient à ajouter un prefab.

## La méthode

Le projet avance par **phases** qui doivent chacune tourner avant de passer à la suivante, avec une branche git par fonctionnalité et un tag par phase. Les décisions d'architecture sont consignées au fil de l'eau, avec leurs raisons et les signaux qui justifieraient de les revoir.

- **Phase 1 (terminée)** : un ennemi à plusieurs couches de vie suit un chemin, une tour le cible et lui tire dessus.
- **Phase 2 (en cours)** : plusieurs types d'ennemis et plusieurs tours en même temps, là où l'ECS prend tout son sens.
- **Ensuite** : les vagues, l'économie, puis le placement des tours par le joueur.
