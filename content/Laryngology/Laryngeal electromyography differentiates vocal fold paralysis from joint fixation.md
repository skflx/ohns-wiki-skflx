---
title: "Laryngeal electromyography differentiates vocal fold paralysis from joint fixation"
tier: "Tier I: Bedrock Foundations"
tags:
  - laryngology
  - diagnostics
  - lemg
  - neurolaryngology
  - joint-fixation
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, Ch7, p.151–152"
aliases:
  - "Laryngeal Electromyography (LEMG)"
  - "LEMG Diagnostic Principles"
  - "LEMG vs Joint Fixation"
  - "Laryngeal electromyography differentiates vocal fold paralysis from cricoarytenoid joint fixation"
---

# Laryngeal electromyography differentiates vocal fold paralysis from joint fixation

## Active Recall

> [!question]- How does LEMG definitively differentiate cricoarytenoid joint ankylosis from true recurrent laryngeal nerve paralysis?
> *Answer / Clinical Rationale*: In CA joint ankylosis, the intrinsic muscles demonstrate **normal electrical activity and normal motor unit recruitment** despite physical immobility, whereas true RLN paralysis demonstrates fibrillations, positive sharp waves, or markedly reduced recruitment.

> [!question]- Why is testing the cricothyroid muscle during LEMG essential when evaluating a patient with a paralyzed vocal fold?
> *Answer / Clinical Rationale*: The CT muscle is innervated by the EBSLN. If the CT muscle is denervated alongside the TA/PCA, it localizes the lesion to the high vagus nerve (at or above the skull base / nodose ganglion) rather than an isolated mediastinal or neck RLN injury.

## Core Clinical & Mechanistic Principles
**Laryngeal Electromyography (LEMG)** is the gold-standard electrodiagnostic modality used to evaluate the neuromuscular integrity of the intrinsic laryngeal muscles. It directly measures the motor unit action potentials (MUAPs) of laryngeal muscles to differentiate between **neuropathic vocal fold immobility (paralysis/paresis)** and **mechanical immobility ([[The cricoarytenoid joint moves via coupled rocking and sliding|cricoarytenoid joint]] ankylosis/fixation)**.

### Target Muscles, Insertion Vectors & Activation Maneuvers
| Muscle | Insertion Landmark & Needle Vector | Activation / Verification Maneuver | Clinical Role |
| :--- | :--- | :--- | :--- |
| **Cricothyroid (CT)** | Insert needle $0.5\text{–}1.0\text{ cm}$ lateral to midline at cricothyroid membrane; angle 30°–45° posterolaterally. | High-pitch phonation (/i/). | Tests EBSLN integrity (differentiates high vagal vs isolated RLN lesions). |
| **Thyroarytenoid (TA)** | Pierce cricothyroid membrane paramedian; direct needle 30° superiorly and 15° laterally into paraglottic space. | Low-pitch phonation or sharp sniff/glottal stop. | Tests anterior motor branch of RLN. |
| **Posterior Cricoarytenoid (PCA)** | Rotate thyroid cartilage framework laterally; insert needle from posterior-inferior border of cricoid directed anteromedially. | Deep, rapid inspiratory sniff. | Tests abductor branch of RLN. |

**Key Links**: [[The cricothyroid muscle elongates vocal folds to elevate pitch|Cricothyroid (CT)]] · [[The thyroarytenoid muscle modulates glottal stiffness and adduction|Thyroarytenoid (TA)]] · [[The posterior cricoarytenoid is the sole vocal fold abductor|PCA]] · [[The superior laryngeal nerve provides supraglottic sensation and cricothyroid motor control|EBSLN]] · [[The recurrent laryngeal nerve innervates all intrinsic muscles except cricothyroid|RLN]] · [[The paraglottic space facilitates transglottic tumor spread|Paraglottic space]] · [[Thyroplasty cartilage window dimensions differ between males and females|Thyroid cartilage]]

```mermaid
%% LEMG Neuromuscular Diagnostic and Localization Matrix
flowchart TD
  N1(["Unilateral Vocal Fold Immobility on Laryngoscopy"]) --> N2{"Target Muscle LEMG Assessment (Day 21 to Month 6)"}
  N2 -->|"Cricothyroid (CT) Muscle: 0.5-1 cm Lateral CTM Angled 30-45°"| N3["High-Pitch /i/ Phonation (Tests EBSLN Integrity)"]
  N2 -->|"Thyroarytenoid (TA) Muscle: Paramedian CTM Angled 30° Sup / 15° Lat"| N4["Low-Pitch /a/ / Glottal Stop (Tests Anterior RLN)"]
  N2 -->|"Posterior Cricoarytenoid (PCA): Retrocricoid Directed Anteromedial"| N5["Deep Rapid Sniff (Tests Abductor RLN)"]
  N2 --> N6{"Diagnostic Differentiation on Oscilloscope"}
  N6 -->|"Fibrillations + Positive Sharp Waves + Reduced Recruitment"| N7["Neuropathic Paralysis (Axonal RLN / Vagal Denervation; Mobile CA Joint on Palpation)"]
  N6 -->|"Normal MUAP Waves & Full Voluntary Recruitment Despite Zero Movement"| N8["Mechanical Cricoarytenoid Joint Ankylosis / Fixation (Rigid on Palpation)"]
  N6 --> N9{"Neurological Localization"}
  N9 -->|"CT Normal + TA/PCA Denervated"| N10["Isolated Recurrent Laryngeal Nerve (RLN) Lesion (Neck/Mediastinum)"]
  N9 -->|"CT Denervated + TA/PCA Denervated"| N11["High Vagal Nerve Lesion (Skull Base / Jugular Foramen / Nodose Ganglion)"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3,N4,N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10,N11 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N7 red
```

## Differentiating Paralysis from CA Joint Fixation
- **Neuropathic Paralysis (RLN Injury)**: Shows [[LEMG denervation potentials indicate axonal injury within one to six months|fibrillations and positive sharp waves]] (denervation), reduced recruitment, or polyphasic waveforms (synkinesis/reinnervation). Passive palpation in the OR reveals a mobile joint.
- **Mechanical Joint Fixation (Ankylosis/Posterior Scar)**: Shows **normal voluntary recruitment and normal MUAPs** despite complete absence of vocal fold movement on laryngoscopy. Passive operative palpation reveals a rigid, immobilized cricoarytenoid joint.

## Critical Failure Modes & Error Traps
- **Testing Too Early or Too Late**: Performing LEMG earlier than 3–4 weeks post-injury may yield false-negative results because wallerian degeneration and spontaneous fibrillations require 21 days to develop. Performing LEMG beyond 6–12 months may show absent potentials due to irreversible motor endplate fibrosis.

## Connected Concepts & Graph Traversal
- **Cricoarytenoid Joint Mobility**: [[The cricoarytenoid joint moves via coupled rocking and sliding|Cricoarytenoid Joint]]
- **Pitch Tensor Myology**: [[The cricothyroid muscle elongates vocal folds to elevate pitch|Cricothyroid Muscle]]
- **Abductor Myology**: [[The posterior cricoarytenoid is the sole vocal fold abductor|Posterior Cricoarytenoid]]
- **RLN Innervation Map**: [[The recurrent laryngeal nerve innervates all intrinsic muscles except cricothyroid|Recurrent Laryngeal Nerve]]
- **Unilateral Paralysis Diagnosis**: [[Unilateral vocal fold paralysis causes glottic insufficiency, breathiness, and aspiration|Vocal Fold Paralysis]]
