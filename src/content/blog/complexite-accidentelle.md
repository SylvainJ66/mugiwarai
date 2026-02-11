---
title: "La complexité accidentelle : le vrai ennemi"
description: "Toute complexité n'est pas mauvaise, mais toute complexité n'est pas nécessaire. Comment distinguer la complexité essentielle de la complexité accidentelle, et comment s'en protéger."
date: 2025-12-22
category: architecture
tags: [architecture, complexité, architecture-hexagonale, refactoring, TDD]
layout: ../../layouts/BlogPost.astro
---

Toute complexité n'est pas mauvaise. Mais toute complexité n'est pas nécessaire.

---

## Complexité essentielle

- Liée au **métier**
- **Inévitable**
- Porte la **valeur business**

Exemple : la facturation avec TVA, remises, promotions et conformité légale. Cette complexité existe parce que le domaine est complexe. On ne peut pas la supprimer.

---

## Complexité accidentelle

- Introduite par nos **choix techniques**
- **Évitable**
- Coûte cher sur le long terme

### Exemples courants

- Couplage à un framework pour aller "plus vite"
- Prévoir le scaling trop tôt (microservices day one)
- Logique métier noyée dans l'infrastructure
- Patterns non nécessaires

### Les conséquences

- Learning curve élevée
- Modifications impossibles
- Bugs imprévisibles
- Dette technique galopante

---

## Comment l'éviter

### Une architecture qui protège le cœur métier

L'**architecture hexagonale** isole le domaine métier des détails techniques. La logique business n'a aucune dépendance vers l'infrastructure. C'est le premier rempart contre la complexité accidentelle.

### Commencer simple

Commencer par des use cases que l'on peut mettre en prod. Pas besoin de microservices pour un MVP. Un monolithe modulaire bien découpé suffit comme étape intermédiaire.

### Parler le langage métier

Dans le code. Les noms de classes, de méthodes, de variables doivent refléter le vocabulaire du domaine, pas celui du framework.

### Refactorer en continu

Le must : avoir une couverture de tests pour refactorer sans crainte. Le must du must : le **TDD**, qui garantit cette couverture par construction.

---

## Conclusion

La simplicité n'est pas évidente à atteindre. Elle demande de l'expérience et du courage. Mais c'est elle qui permet de livrer vite et de durer.

Le code le plus maintenable n'est pas le plus "clever", c'est le plus **évident**.
