---
title: PlateCrafter
summary: Application web pour concevoir des plaques de dilution de laboratoire et les exporter au format GeneData. Réalisée en équipe pour un client réel.
order: 4
badge: { text: Projet client, tone: blue }
tags: [Django, Python, Docker]
cover: ../../../assets/projects/platecrafter-cover.svg
coverAlt: Illustration d'une plaque de 96 puits avec un dégradé de dilution
facts:
  - label: Contexte
    value: Projet d'équipe pour un client
  - label: Année
    value: 2025–2026
  - label: Technologies
    value: Django, Python, Docker
  - label: Contribution
    value: Environ la moitié des commits (88 sur 166)
---

## Le besoin

Dans un laboratoire, préparer une **plaque de dilution** revient à répartir des composés et leurs concentrations dans les puits d'une plaque, puis à produire le fichier qui décrit cette plaque pour le logiciel d'analyse. PlateCrafter automatise ce travail dans une application web.

## Le parcours utilisateur

1. **Import des composés** depuis un tableur (`.csv`, `.xlsx`, `.xls`, `.tsv`, `.ods`), avec une étape où l'on associe les colonnes du fichier aux champs attendus.
2. **Création de la plaque**, soit à la main, soit à partir de **templates** JSON prédéfinis.
3. **Visualisation** de la plaque, avec un dégradé qui montre les concentrations.
4. **Export au format GeneData.**

L'interface est disponible en allemand et en anglais.

## Ma contribution

J'ai travaillé sur toute la chaîne de formulaires : **validation des saisies et gestion des erreurs** (colonnes non numériques, motifs de contrôle incohérents, réglages qui ne permettent de placer aucun composé), **orientation** des plaques, **remplissage de plusieurs plaques** à la suite, dégradé de couleurs selon la multiplicité des puits, textes d'aide et navigation entre les étapes.

Le projet est couvert par des tests unitaires et par des tests qui comparent la sortie à des fichiers de référence validés. Il se déploie avec Docker.
