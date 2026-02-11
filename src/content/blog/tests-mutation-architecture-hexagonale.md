---
title: "Tests de Mutation & Architecture Hexagonale"
description: "Le code coverage ne suffit pas. Les tests de mutation avec Stryker.NET révèlent les faiblesses réelles de vos tests, et l'architecture hexagonale est le terrain idéal pour les exploiter."
date: 2026-01-25
category: craftsmanship
tags: [craftsmanship, tests, mutation-testing, stryker, architecture-hexagonale]
layout: ../../layouts/BlogPost.astro
---

Tests au vert, coverage 80%... mais en réalité, ils ne sont pas efficaces ?

Le code coverage, c'est bien. Mais un test qui passe sans assertion pertinente, ça couvre du code... **sans rien vérifier**.

C'est là qu'interviennent les **tests de mutation**.

---

## Le principe

Les tests de mutation injectent des bugs dans le code (les **mutants**), puis relancent les tests.

- Si les tests passent toujours : le mutant a **survécu** — votre test est faible
- Si les tests échouent : le mutant est **tué** — votre test est efficace

Un mutant survivant = un test qui ne teste rien de concret.

---

## Pourquoi ça matche parfaitement avec l'architecture hexagonale ?

En architecture hexagonale, le domaine métier est **isolé** des dépendances externes (DB, API, frameworks).

Résultat :

- **Tests ultra-rapides** (pas d'I/O)
- **Pas de mocks complexes**
- **Focus sur la logique métier pure**

C'est le terrain parfait pour les tests de mutation : du code métier testable en isolation.

Quand vos ports et adapters sont bien séparés, Stryker peut muter votre domaine sans se perdre dans l'infrastructure.

---

## En pratique avec Stryker.NET

### Installation

```bash
dotnet tool install -g dotnet-stryker
```

### Lancement sur un projet de tests

```bash
cd tests/Domain.Tests
dotnet stryker
```

### Ce que Stryker fait

Stryker va :

- Remplacer `>` par `>=`
- Inverser les `if`
- Supprimer des blocs de code
- Changer `+` en `-`

Et montrer quels mutants survivent.

---

## Exemple concret

```csharp
// Domain/PriceCalculator.cs
public decimal Calculate(decimal price, decimal discount)
{
    if (price <= 0)
        throw new ArgumentException("Invalid price");

    return price * (1 - discount / 100);
}
```

Stryker mute `<=` en `<`.

Le test avec `price = -10` passe toujours... mais que se passe-t-il avec `price = 0` ?

**Mutant survivant = cas limite non testé.**

---

## Ce que ça révèle

Les tests de mutation montrent les limites du coverage "classique". Le coverage vous dit **combien** de code est exécuté. Les mutations vous disent **si vos tests vérifient réellement quelque chose**.

C'est un outil précieux pour être sûr de la portée réelle de votre jeu de tests — surtout quand votre domaine métier est correctement isolé grâce à l'architecture hexagonale.
