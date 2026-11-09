---
title: "The thyroarytenoid muscle modulates glottal stiffness and adduction"
tier: "Tier I: Bedrock Foundations"
tags:
  - laryngology
  - myology
  - thyroarytenoid
  - neuroanatomy
  - biomechanics
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch7, p.147"
aliases:
  - "Thyroarytenoid (TA) Muscle"
  - "TA Muscle Complex"
  - "Vocal Fold Muscular Body"
  - "The thyroarytenoid muscle modulates active glottal stiffness, body-cover tension, and vocal fold adduction"
---

# The thyroarytenoid muscle modulates glottal stiffness and adduction

## Active Recall

> [!question]- How do the two bellies of the thyroarytenoid muscle differ in fiber composition and function?
> *Answer / Clinical Rationale*: The medial thyrovocalis contains slow-twitch (Type I) oxidative fibers for fine isometric tension and pitch control, whereas the lateral thyromuscularis contains fast-twitch (Type II) fibers for rapid glottic closure.

> [!question]- What motor nerve innervates the thyroarytenoid muscle?
> *Answer / Clinical Rationale*: The recurrent laryngeal nerve (RLN).

## Core Clinical & Mechanistic Principles
The **Thyroarytenoid (TA) Muscle** is the broad, striated intrinsic laryngeal muscle that forms the primary contractile bulk ("body") of the vocal fold. It originates anteriorly from the inner perichondrium of the [[Thyroplasty cartilage window dimensions differ between males and females|thyroid cartilage alar lamina]] and inserts posteriorly into the muscular process and vocal process of the [[The cricoarytenoid joint moves via coupled rocking and sliding|arytenoid cartilage]].

### Functional Sub-compartments
The TA muscle is divided into two distinct anatomical and physiological compartments:
1. **Medial Thyroarytenoid (Thyrovocalis)**: Runs parallel and adjacent to the [[The deep lamina propria provides tensile stiffness via crosslinked collagen|deep lamina propria]]. Composed predominantly of slow-twitch, fatigue-resistant (Type I) oxidative fibers specialized for fine isometric tension tuning.
2. **Lateral Thyroarytenoid (Thyromuscularis)**: Lies lateral within the [[The paraglottic space facilitates transglottic tumor spread|paraglottic space]]. Composed of fast-twitch (Type II) glycolytic fibers specialized for rapid, powerful vocal fold adduction, shortening, and sphincter closure.

### Innervation & Biomechanics
- **Innervation**: Supplied by the [[The recurrent laryngeal nerve innervates all intrinsic muscles except cricothyroid|recurrent laryngeal nerve (RLN)]].
- **Biomechanical Action**: Contraction shortens and thickens the vocal fold, bulks the medial edge, lowers fundamental frequency ($F_0$) in low registers, and actively alters the [[The vocal fold comprises five distinct histological layers|body-cover]] stiffness ratio.

```mermaid
%% Thyroarytenoid Muscle Architecture and Dynamic Tension
flowchart TD
  N1(["Motor Activation via Recurrent Laryngeal Nerve (RLN)"]) --> N2{"Thyroarytenoid (TA) Muscle Compartments"}
  N2 -->|"Medial Compartment: Thyrovocalis (Vocalis)"| N3["Origin: Angle of Thyroid Cartilage | Insertion: Vocal Process of Arytenoid"]
  N3 --> N4["Isometric Contraction: Increases Body Stiffness & Slackens Pliable Cover"]
  N4 --> N5["Lowers Pitch, Thickens Vibrating Margin, Increases Subglottic Pressure"]
  N2 -->|"Lateral Compartment: Thyromuscularis"| N6["Origin: Inner Surface of Thyroid Lamina | Insertion: Muscular Process"]
  N6 --> N7["Sphincteric Adduction & Rapid Glottic Aperture Closure"]
  N5 --> N8["Assess TA Denervation / Atrophy State"]
  N7 --> N8
  N8 -->|"TA Denervation / Presbylarynx"| N9["Vocal Fold Bowing, Spindle-Shaped Glottic Gap, Breathy Dysphonia"]
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N3 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4,N5,N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N6 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9 red
```

## Surgical Anatomy, Step-by-Step Technique & Nuances
- **Target for Medialization Injections**: In [[Injection laryngoplasty requires precise placement into lateral thyroarytenoid muscle|injection laryngoplasty]], the needle is placed into the lateral TA muscle / paraglottic space to medialize the fold without violating the superficial shearing bed.
- **Type I Medialization Thyroplasty**: The carved silastic or Gore-Tex implant compresses the TA muscle medially across a fenestrated cartilage window.
- **Target for Botulinum Toxin in ADSD**: In adductor spasmodic dysphonia, Botulinum toxin A ($1.0\text{–}2.5\text{ units}$) is injected into the TA muscle under [[Laryngeal electromyography differentiates vocal fold paralysis from joint fixation|LEMG]] guidance.

## Critical Failure Modes & Error Traps
- **Atrophy in Denervation**: In RLN injury, the TA undergoes progressive denervation atrophy, causing [[Unilateral vocal fold paralysis causes glottic insufficiency, breathiness, and aspiration|vocal fold bowing]], vertical discrepancy, and a spindle-shaped [[Glottal closure patterns identify specific laryngeal biomechanical deficits|glottal gap]].

## Connected Concepts & Graph Traversal
- **Membranous Adductor Partner**: [[The lateral cricoarytenoid is the primary membranous fold adductor|Lateral Cricoarytenoid]]
- **Sole Abductor Antagonist**: [[The posterior cricoarytenoid is the sole vocal fold abductor|Posterior Cricoarytenoid]]
- **Pitch Tensor Antagonist**: [[The cricothyroid muscle elongates vocal folds to elevate pitch|Cricothyroid Muscle]]
- **Injection Placement Target**: [[Injection laryngoplasty requires precise placement into lateral thyroarytenoid muscle|Injection Laryngoplasty]]
- **Botulinum Toxin Target**: [[Adductor spasmodic dysphonia causes strained voice breaks treated with thyroarytenoid Botox|Spasmodic Dysphonia Botox]]
