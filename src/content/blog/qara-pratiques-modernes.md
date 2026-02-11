---
title: "QARA — Partie 3 : TDD, DDD, Clean Architecture et Pratiques Modernes"
description: "Comment les pratiques modernes de développement — TDD, BDD, DDD, Architecture Hexagonale, CI/CD, Observabilité — s'alignent naturellement avec les exigences QARA en environnement médical."
date: 2026-01-23
category: craftsmanship
tags: [craftsmanship, TDD, DDD, clean-architecture, CI-CD, medical]
layout: ../../layouts/BlogPost.astro
---

## Pratiques Modernes de Développement : Comment Elles "Matchent" avec le Médical

Les pratiques modernes du développement logiciel ne sont pas en opposition avec les exigences médicales. Au contraire, beaucoup d'entre elles répondent naturellement aux besoins QARA.

---

## Test-Driven Development (TDD)

**Ce que TDD apporte :**

- Tests écrits avant le code
- Couverture de test élevée par construction
- Design émergent, code testable
- Documentation vivante via les tests

**Pourquoi ça matche avec le médical :**

IEC 62304 exige des tests unitaires pour les logiciels de classe B et C. TDD garantit non seulement la présence de tests, mais aussi leur pertinence :

- Le test documente le comportement attendu.
- Le test devient une **preuve exécutable** que l'exigence est implémentée.

---

## Behavior-Driven Development (BDD)

**Ce que BDD apporte :**

- Spécifications exécutables en langage naturel
- Collaboration Dev/Métier/QA
- Documentation toujours synchronisée avec le code

**Pourquoi ça matche avec le médical :**

Les scénarios Gherkin peuvent servir de **spécifications validables** par les experts métier et les régulateurs.

Ces scénarios sont compréhensibles par un radiologue, un développeur et un auditeur.

---

## Domain-Driven Design (DDD)

**Ce que DDD apporte :**

- Langage ubiquitaire partagé
- Bounded contexts bien définis
- Séparation claire des responsabilités
- Modèle aligné sur le métier

**Pourquoi ça matche avec le médical :**

En imagerie médicale, le vocabulaire est précis et normé. DDD force à utiliser ce vocabulaire dans le code.

Les bounded contexts facilitent aussi l'analyse de risque :

- Contexte "Acquisition DICOM" : risques liés à l'intégrité des données
- Contexte "Analyse IA" : risques liés aux performances algorithmiques
- Contexte "Visualisation" : risques liés à l'interprétation par l'utilisateur

---

## Architecture Hexagonale (Ports & Adapters)

**Ce que l'architecture hexagonale apporte :**

- Domaine métier isolé des détails techniques
- Testabilité maximale
- Flexibilité sur les choix d'infrastructure
- Indépendance vis-à-vis des frameworks

**Pourquoi ça matche avec le médical :**

- Le domaine métier (la partie critique) est testable à 100% sans dépendances
- Les changements d'infrastructure ne nécessitent pas de re-valider le cœur métier
- L'analyse de risque peut se concentrer sur le domaine
- Les adapters peuvent être remplacés sans impacter la certification

---

## Continuous Integration / Continuous Delivery

**Ce que CI/CD apporte :**

- Intégration fréquente du code
- Feedback rapide sur la qualité
- Automatisation des tests
- Déploiements reproductibles

**Pourquoi ça matche avec le médical :**

La pipeline CI/CD peut intégrer les vérifications QARA :

- Vérifie liens requirements/tests
- Vérifie couverture minimale exigée
- Analyse statique
- Vérifie documentation à jour
- Génère SBOM

---

## Observabilité (OpenTelemetry, Grafana)

**Ce que l'observabilité apporte :**

- Traces distribuées
- Métriques applicatives
- Logs structurés
- Dashboards temps réel

**Pourquoi ça matche avec le médical :**

La surveillance post-market est une exigence réglementaire. L'observabilité fournit les données nécessaires :

- Détecter des dérives de performance de l'algorithme
- Identifier des patterns d'utilisation anormaux
- Alimenter les rapports de surveillance post-market
- Réagir rapidement en cas d'incident

---

## Infrastructure as Code (IaC)

**Ce que IaC apporte :**

- Environnements reproductibles
- Versioning de l'infrastructure
- Automatisation des déploiements
- Documentation de l'architecture technique

**Pourquoi ça matche avec le médical :**

IEC 62304 exige de pouvoir **reproduire l'environnement** de développement et de test. Avec IaC :

L'infrastructure devient un **artefact auditable** au même titre que le code.

---

## Feature Flags

**Ce que les Feature Flags apportent :**

- Déploiement découplé de l'activation
- Rollout progressif
- A/B testing
- Kill switch en cas de problème

**Pourquoi ça matche avec le médical (avec précautions) :**

- Chaque flag doit être documenté avec son objectif et sa durée de vie
- L'état des flags en production doit être tracé
- Un flag ne doit pas modifier le comportement d'une fonctionnalité certifiée sans re-validation
- Les flags doivent être nettoyés après leur période d'utilisation

---

## Trunk-Based Development

**Ce que le Trunk-Based Development apporte :**

- Intégration continue réelle (pas de branches longues)
- Moins de conflits de merge
- Feedback plus rapide
- Simplification du flux

**Pourquoi ça matche avec le médical :**

- Chaque commit est traçable et revu
- Pas de "merge hell" qui obscurcit l'historique
- Les releases sont des snapshots clairs du trunk
- La traçabilité est simplifiée

---

## Implications Pratiques pour les Équipes de Développement

### Architecture et Design

L'architecture hexagonale et le DDD prennent tout leur sens dans ce contexte :

- Séparation claire des responsabilités
- Testabilité
- Traçabilité

### Pratiques de Développement

- Revues de code obligatoires
- Tests automatisés
- Intégration continue
- Versioning strict

### Environnement et Infrastructure

- Environnements qualifiés
- Observabilité
- Backup et disaster recovery

---

## Le Coût de la Conformité

La conformité QARA représente un investissement significatif :

- Temps
- Compétences
- Outils
- Audits

Cependant, ces contraintes apportent aussi des bénéfices indirects :

- Code mieux structuré et documenté
- Moins de dette technique
- Processus de développement matures
- Meilleure communication entre équipes

---

## Conclusion

Développer un logiciel d'imagerie médicale dans un cadre QARA impose une rigueur qui peut sembler contraignante. Mais cette rigueur existe pour une raison simple : protéger les patients.

Pour un développeur habitué aux méthodes agiles et au déploiement continu, l'adaptation demande un changement de mindset. Le code n'est plus seulement un moyen d'implémenter des fonctionnalités - c'est un artefact réglementé dont chaque aspect doit être justifiable et traçable.

Les bonnes pratiques d'ingénierie logicielle - architecture propre, tests automatisés, intégration continue - ne sont pas en opposition avec QARA. Au contraire, elles constituent le socle technique qui permet de répondre efficacement aux exigences réglementaires tout en maintenant la capacité d'innover.
