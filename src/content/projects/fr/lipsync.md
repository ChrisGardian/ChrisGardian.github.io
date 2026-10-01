---
title: Real-Time Lip Sync
summary: Un client Unreal Engine qui anime en temps réel le visage d'un avatar MetaHuman sur une voix générée par un LLM.
order: 1
featured: true
label: Thèse de Bachelor
youtubeId: "mfxO03slr0A"
tags: [Unreal 5.5, C++, MetaHuman, LiveLink]
cover: ../../../assets/projects/lipsync-cover.jpg
coverAlt: Ada, avatar MetaHuman, en train de parler dans la scène de démo
stats:
  - value: "~2 s"
    label: latence de bout en bout
  - value: "57"
    label: runs mesurés automatiquement
  - value: "99,7 %"
    label: du temps client passé dans l'analyse audio
facts:
  - label: Contexte
    value: Thèse de Bachelor, projet « Meta-Serious Game »
  - label: Année
    value: "2026"
  - label: Moteur
    value: Unreal Engine 5.5
  - label: Rôle
    value: Conception, développement et évaluation
gallery:
  - src: ../../../assets/projects/lipsync-scene.jpg
    alt: La scène de démo finale, pendant une réponse d'Ada
  - src: ../../../assets/projects/lipsync-editor.jpg
    alt: Le DemoScenarioActor dans l'éditeur, avec ses réglages de lip sync, de clignement et d'animation
  - src: ../../../assets/projects/lipsync-visemes.jpg
    alt: Carte de test pour régler à la main le poids de chaque visème
---

## Le problème

Le projet « Meta-Serious Game » dispose déjà d'une middleware REST qui fait dialoguer le joueur avec des PNJ grâce à un grand modèle de langage (LLM). Mais pendant que le PNJ répond, le client web n'affiche qu'une **image fixe** : le texte est crédible, la scène ne l'est pas.

L'objectif de ma thèse : un client **Unreal Engine** où un **MetaHuman** prononce réellement la réponse, avec une question de recherche précise : *quels budgets de latence et de qualité faut-il pour que l'échange paraisse à la fois réactif et crédible ?*

## Le pipeline

1. La middleware renvoie la réponse du LLM et l'audio synthétisé.
2. Le client analyse l'audio avec **Rhubarb Lip Sync**, qui en extrait une suite de **visèmes** (les formes de bouche).
3. Chaque visème est converti en courbes de blendshapes **ARKit**, avec une interpolation pour lisser les transitions.
4. Une **`ILiveLinkSource` écrite en C++** pousse ces courbes dans le rig facial (RigLogic) du MetaHuman, image par image.
5. Des animations simples complètent le tout : clignements d'yeux aléatoires et animation d'attente du corps (retargetée depuis Mixamo).

## L'évaluation

- **Technique** : chaque étape du pipeline est chronométrée et enregistrée automatiquement dans un fichier CSV, sur **57 exécutions**.
- **Perception** : une étude pilote en deux tours, à partir de vidéos (15 réponses au total), pour juger la crédibilité de l'animation.

## Les résultats

- Environ **2 secondes** de latence de bout en bout, réparties presque à parts égales entre l'aller-retour réseau vers la middleware et l'analyse Rhubarb.
- Côté client, l'analyse audio représente à elle seule **99,7 %** du temps : c'est le goulot d'étranglement à attaquer en priorité.
- Côté qualité, la simple **présence** d'un lip sync par visèmes et de quelques animations suffit à rendre l'échange crédible, quelle que soit la finesse du réglage.
