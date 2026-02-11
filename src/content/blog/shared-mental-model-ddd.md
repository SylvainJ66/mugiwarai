---
title: "Ce qui va en prod, c'est la compréhension métier du développeur"
description: "Ce qui va en production, c'est la compréhension métier du développeur, pas celle de l'expert métier. Trois approches pour accéder à la connaissance métier, et pourquoi le Shared Mental Model du DDD est la plus efficace."
date: 2025-12-29
category: architecture
tags: [DDD, architecture, domain-driven-design, event-storming, ubiquitous-language]
layout: ../../layouts/BlogPost.astro
---

Ce qui va en prod, c'est la compréhension métier du développeur. **Pas celle de l'expert métier.**

Cette distinction est fondamentale. Voici trois façons d'accéder à la connaissance métier, avec leurs avantages et leurs limites.

---

## 1. Process avec spécifications

```
Domain experts → Business analyst → Requirements
→ Architect → Design document
→ Development team → Code
```

**Problème** : Chaque étape dilue le message initial. Les décisions techniques s'éloignent de la réalité du domaine.

C'est le jeu du téléphone appliqué au développement logiciel. À chaque intermédiaire, de l'information se perd et de l'interprétation s'ajoute.

---

## 2. Sans intermédiaire

```
Domain experts ↔ Development team
→ Code → Deliverable → Feedback loop
```

**Problème** : Le dev traduit le modèle mental de l'expert en code. Traduction = distorsion.

Mieux que l'approche précédente, mais le développeur reste un traducteur. Son modèle mental du domaine n'est pas celui de l'expert.

---

## 3. Shared Mental Model (DDD)

```
Domain experts ↔ Shared model ↔ Development team
                                        ↕
                            Other stakeholders
                                         ↓
                                      Code
```

**Tout le monde partage le même modèle.** Le code EST le modèle métier.

C'est l'approche du Domain-Driven Design. Il n'y a plus de traduction, plus de distorsion. Le vocabulaire est partagé, le modèle est commun.

---

## Comment créer un Shared Model ?

Le focus doit être sur les **événements métier**, pas sur les structures de données.

### Event Storming

Capturer les événements du domaine. Réunir développeurs et experts métier autour d'un mur de post-its pour identifier ce qui se passe réellement dans le business.

### Définir domaines et sous-domaines

Délimiter les contextes. Chaque bounded context a ses propres règles, son propre vocabulaire, sa propre cohérence.

### Ubiquitous Language

Le vocabulaire partagé par tous. Le même mot signifie la même chose pour le développeur, l'expert métier, le product owner et le code.

---

## Le résultat

Le langage métier devient le code. Le code devient le langage métier.

Il n'y a plus de "traduction". Quand un expert métier dit "le patient est transféré", le code contient un `PatientTransferred` event. Quand le code dit `CalculateFare(from, to)`, l'expert métier comprend exactement ce que ça fait.
