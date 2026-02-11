---
title: "Le Wishful Thinking"
description: "Le wishful thinking consiste à écrire du code comme si les fonctions dont on a besoin existaient déjà. On commence par imaginer l'API idéale, puis on l'implémente."
date: 2025-12-26
category: craftsmanship
tags: [craftsmanship, TDD, DDD, clean-code]
layout: ../../layouts/BlogPost.astro
---

Le **wishful thinking** consiste à écrire du code comme si les fonctions dont on a besoin existaient déjà.

On commence par imaginer l'API idéale, puis on l'implémente.

**Processus :**

1. Imaginer comment on voudrait utiliser le code
2. Écrire ce code "idéal"
3. Implémenter les parties manquantes

### Relation avec d'autres concepts

Le wishful thinking est étroitement lié à plusieurs pratiques modernes :

- **Test-Driven Development (TDD)** : Écrire les tests avant le code suit la même philosophie
- **Design by Contract** : Définir les interfaces avant l'implémentation
- **Domain-Driven Design** : Modéliser le domaine métier avant les détails techniques
- **Outside-In Development** : Commencer par l'interface utilisateur et descendre vers les couches techniques

### Exemple : FizzBuzz avec Wishful Thinking

### Pourquoi l'utiliser ?

- **API intuitive** : On crée l'interface qu'on veut vraiment utiliser
- **Code lisible** : L'intention est claire dès le départ
- **Flexible** : Facile d'ajouter de nouvelles règles
- **Testable** : L'interface est définie avant l'implémentation
