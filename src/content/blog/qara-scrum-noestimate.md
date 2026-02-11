---
title: "QARA — Partie 2 : Scrum, No-Estimate et Agilité en Environnement Médical"
description: "Comment adapter Scrum et le No-Estimate au développement de dispositifs médicaux : Definition of Done réglementaire, cérémonies adaptées, Kanban et gestion des releases."
date: 2026-01-23
category: medical
tags: [medical, QARA, scrum, agile, no-estimate]
layout: ../../layouts/BlogPost.astro
---

## Scrum en Environnement Médical : Agilité et Conformité

### Le Mythe de l'Incompatibilité

Une idée reçue persiste : Scrum et le développement médical seraient incompatibles. D'un côté, l'agilité prône l'adaptation au changement et la livraison incrémentale. De l'autre, le réglementaire exige documentation exhaustive, traçabilité et validation formelle.

En réalité, **Scrum et QARA peuvent coexister** - mais cela demande des adaptations.

### Ce que la Réglementation Exige Vraiment

IEC 62304 ne prescrit pas de méthodologie. Elle exige des **résultats** :

- Une traçabilité entre exigences, code et tests
- Une gestion des risques documentée
- Des processus de vérification et validation
- Une gestion du changement contrôlée

Rien n'impose le cycle en V traditionnel. Un sprint Scrum peut parfaitement produire ces livrables.

---

## Adapter Scrum au Contexte Médical

### Le Sprint : Unité de Conformité

Chaque sprint devient une unité de travail traçable et documentée :

- User Stories tracées vers les Requirements
- Definition of Done incluant les critères réglementaires
- Tests mappés aux exigences
- Documentation mise à jour
- Revue de risques si applicable

### Definition of Done Réglementaire

La DoD standard ne suffit pas. Elle doit intégrer les exigences QARA :

**Definition of Done classique :**

- Code revu et approuvé
- Tests unitaires passent
- Tests d'intégration passent
- Déployé en environnement de test

**Definition of Done médicale :**

- Code revu et approuvé (avec trace conservée)
- Tests unitaires passent (couverture documentée)
- Tests d'intégration passent (mappés aux exigences)
- Traçabilité Requirements → Code → Tests vérifiée
- Analyse d'impact sur les risques réalisée si nécessaire
- Documentation technique mise à jour
- Revue par le responsable qualité si changement significatif

### Les Cérémonies Adaptées

**Sprint Planning**

- Inclure l'évaluation de l'impact réglementaire des stories
- Identifier les stories nécessitant une revue qualité
- Estimer l'effort de documentation

**Daily Scrum**

- Pas de changement majeur
- Peut inclure un point sur les blocages liés à la conformité

**Sprint Review**

- Démonstration fonctionnelle classique
- Revue de la documentation produite
- Validation que la traçabilité est maintenue
- Présence ponctuelle du responsable QARA recommandée

**Sprint Retrospective**

- Inclure les aspects qualité/conformité
- Identifier les améliorations de processus documentaires

### Le Backlog et la Traçabilité

Le Product Backlog devient le point d'entrée de la traçabilité :

- Epic (Besoin Utilisateur)
- Feature (Exigence Système)
- User Story (Exigence Logicielle)
- Critères d'acceptation
- Lien vers analyse de risque
- Tests associés

Des outils comme Jira, Azure DevOps ou des solutions spécialisées (Polarion, Helix ALM) permettent de maintenir cette traçabilité de manière automatisée.

### Le Rôle du Product Owner en Contexte Médical

Le PO dans un environnement médical a des responsabilités élargies :

- **Priorisation business** : Comme dans tout projet Scrum
- **Connaissance réglementaire** : Comprendre les implications des choix fonctionnels sur la classification et les exigences
- **Interface avec QARA** : Collaborer étroitement avec les équipes qualité/réglementaire
- **Gestion des exigences formelles** : S'assurer que les user stories sont correctement liées aux requirements

Dans certaines organisations, un **Regulatory Product Owner** ou un binôme PO + Spécialiste QARA peut être pertinent.

### Gestion du Changement en Mode Agile

Le changement est au cœur de l'agilité, mais le médical exige un contrôle strict. La solution : **intégrer le processus de changement dans le flux Scrum**.

**Changement mineur** (refactoring, correction de bug non critique) :

- Traité dans le sprint courant
- Documenté via le ticket et la merge request
- Pas de revue formelle supplémentaire

**Changement significatif** (nouvelle fonctionnalité, modification d'algorithme) :

- Évaluation d'impact avant inclusion dans le sprint
- Mise à jour de l'analyse de risque si nécessaire
- Revue formelle en fin de sprint

**Changement critique** (impact sur la sécurité patient) :

- Processus de change control formel
- Peut nécessiter plusieurs sprints
- Validation indépendante requise

### Les Releases en Environnement Réglementé

Scrum encourage les releases fréquentes. En médical, chaque release commercialisée implique :

- Compilation du dossier technique
- Vérification de la traçabilité complète
- Tests de validation sur environnement qualifié
- Release notes réglementaires
- Potentiellement : soumission aux autorités

**Solution pratique** — Distinguer les **releases internes** (fréquentes, à chaque sprint) des **releases commerciales** (planifiées, avec cycle de validation complet) :

Sprint 1 → Release interne 1.1-dev
Sprint 2 → Release interne 1.2-dev
Sprint 3 → Release interne 1.3-dev → **Release commerciale 1.0** (validation complète)
Sprint 4 → Release interne 1.4-dev

### Scaled Scrum et Programmes Médicaux

Pour les projets d'envergure (plateforme d'imagerie complète, suite logicielle), des frameworks comme SAFe ou LeSS peuvent être adaptés :

- Program Increment aligné avec les jalons réglementaires
- System Team incluant des compétences QARA
- Architectural Runway intégrant les contraintes de certification

### Ce qui Ne Change Pas

Certains aspects Scrum restent identiques :

- L'auto-organisation de l'équipe
- L'amélioration continue
- La collaboration avec les stakeholders
- La livraison de valeur incrémentale
- La transparence via les artefacts Scrum

### Pièges à Éviter

- "On documentera à la fin"
- Sous-estimer l'effort QARA
- Séparer Dev et Qualité
- Confondre Agile et "pas de règles"

---

## No-Estimate : Applicable au Médical ?

Le mouvement **No-Estimate** (ou #NoEstimates) propose d'abandonner les estimations traditionnelles au profit d'approches basées sur le flux et le découpage fin des tâches. Cette approche peut sembler incompatible avec un environnement réglementé. En réalité, elle peut s'y adapter - avec quelques nuances.

### Le Principe du No-Estimate

L'idée centrale : plutôt que de perdre du temps à estimer (souvent mal) la durée des tâches, on se concentre sur :

- **Découper finement** : Des items suffisamment petits pour être prévisibles
- **Mesurer le flux** : Cycle time, throughput, lead time
- **Limiter le WIP** : Work In Progress limité pour fluidifier le système
- **Forecasting probabiliste** : Utiliser les données historiques plutôt que les estimations humaines

### Pourquoi Ça Peut Fonctionner en Médical

**1. Le découpage fin améliore la traçabilité**

Des items petits et bien définis facilitent le mapping vers les requirements :

Mauvais (grosse story) : "En tant que radiologue, je veux analyser une image avec l'IA" → Difficile à tracer, multiple requirements mélangés

Bon (stories découpées) :

- "Charger une image DICOM depuis le PACS" → REQ-IMG-001
- "Pré-traiter l'image pour l'algorithme" → REQ-IMG-002
- "Exécuter l'inférence du modèle" → REQ-AI-001
- "Afficher les résultats avec niveau de confiance" → REQ-AI-002

**2. Les métriques de flux sont objectives et auditables**

Les régulateurs apprécient les données factuelles :

- Cycle time moyen par type d'item
- Throughput par sprint
- Temps passé en review/validation
- Prédictibilité basée sur Monte Carlo

Ces métriques sont plus défendables en audit que des estimations au doigt mouillé.

**3. La réduction du WIP diminue les risques**

Moins de travail en parallèle signifie :

- Moins de contexte switching
- Meilleure qualité (moins d'erreurs)
- Traçabilité plus simple à maintenir
- Reviews plus rapides et efficaces

### Les Adaptations Nécessaires

**Le forecasting reste nécessaire pour la planification réglementaire**

Les jalons de certification et les soumissions aux autorités nécessitent une visibilité. Le No-Estimate n'interdit pas le forecasting - il le base sur des données plutôt que sur des estimations.

- Approche traditionnelle : "Cette feature prendra 3 sprints" (estimation humaine)
- Approche No-Estimate : "Historiquement, des features similaires (15-20 items) sont livrées en 2-4 sprints avec 85% de probabilité"

**La notion de "Done" reste critique**

No-Estimate ne signifie pas "no definition of done". Au contraire, une DoD stricte et respectée est essentielle pour que les métriques de flux soient significatives.

**Les items réglementaires doivent être visibles**

Le backlog doit distinguer clairement :

- Items fonctionnels (valeur utilisateur)
- Items techniques (dette, refactoring)
- Items réglementaires (documentation, mise à jour traçabilité)

Tous contribuent au throughput et doivent être comptabilisés.

---

## Kanban : L'Allié Naturel du No-Estimate en Médical

Kanban se marie particulièrement bien avec le contexte médical :

Backlog | In Progress (WIP: 3) | Review (WIP: 2) | Validation QARA | Done

La colonne "Validation QARA" matérialise le processus réglementaire dans le flux. Un item n'est "Done" que lorsqu'il a passé cette étape.
