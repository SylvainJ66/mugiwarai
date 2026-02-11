---
title: "Tokyo vs Paris : deux cartes de transport, deux philosophies de code"
description: "La carte Suica de Tokyo et la carte Navigo de Paris illustrent parfaitement la différence entre complexité essentielle et complexité accidentelle dans le code."
date: 2025-11-03
category: architecture
tags: [architecture, complexité, clean-code, DDD, analogie]
layout: ../../layouts/BlogPost.astro
---

**Tokyo** : Une carte Suica. Un solde. Je monte, je descends, ça débite. Ça marche partout : métro, train, bus, konbini. Depuis 2001.

**Paris** : Une carte Navigo. Des tickets t+ incompatibles avec les tickets Origine-Destination. Trois apps différentes. Des zones tarifaires. "Vous ne pouvez pas combiner ces titres."

Même technologie (RFID). Résultats opposés.

**C'est exactement comme votre code.**

---

## La codebase "Navigo"

```csharp
public void ProcessOrder(Order order)
{
    if (order.HasDiscount && order.HasLoyaltyPoints)
        throw new Exception("Cannot combine discount and loyalty");

    if (order.IsB2B && order.IsExpress)
        throw new Exception("B2B orders cannot be express");

    // ... 300 lignes de if/else
    // Personne ne sait pourquoi ces règles existent
}
```

**Symptômes :**
- États incompatibles gérés par des exceptions
- Impossible d'ajouter une feature sans tout casser
- Les devs ont peur de toucher le code

---

## La codebase "Suica"

```csharp
public class Account
{
    public Money Balance { get; }

    public Result Debit(Money amount) =>
        amount > Balance
            ? Result.Failure("Insufficient balance")
            : Result.Success(_transactions.Add(amount));
}

public class FareCalculator
{
    public Money Calculate(Station from, Station to) =>
        _pricingPolicy.GetPrice(_distance.Between(from, to));
}
```

**Caractéristiques :**
- Modèle simple qui compose naturellement
- Règles métier isolées et testables
- Facile d'évoluer

---

## La vraie différence

### Navigo a accumulé la complexité accidentelle

- Contraintes techniques devenues règles métier
- Legacy impossible à refactorer
- Chaque feature ajoute un cas spécial

### Suica a distillé la complexité essentielle

- Quel est le vrai problème ? **Calculer un tarif**
- Tout le reste est technique, donc isolé
- Modèle métier minimal et composable

---

## À retenir

Toujours garder ceci à l'esprit : dans 5 ans, **personne ne saura pourquoi ces règles existent**.

Concentrez-vous sur la complexité essentielle. Isolez le reste. Votre futur vous (et vos collègues) vous remercieront.
