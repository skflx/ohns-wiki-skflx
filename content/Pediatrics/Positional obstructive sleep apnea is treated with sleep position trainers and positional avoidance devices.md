---
title: "Positional obstructive sleep apnea is treated with sleep position trainers and positional avoidance devices"
tier: "Tier VI: Adult Sleep Apnea, Positional Therapy, Oral Appliances & Soft Tissue Sleep Surgery"
tags:
  - pediatrics
  - sleep-medicine
  - positional-osa
  - sleep-position-trainer
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Pediatric Otolaryngology Core Principles"
aliases:
  - "Positional OSA"
  - "POSA"
  - "Sleep Position Trainer"
  - "Supine OSA"
  - "Cartwright Criteria"
---

# Positional obstructive sleep apnea is treated with sleep position trainers and positional avoidance devices

## Active Recall

> [!question]- What are the Cartwright criteria for diagnosing positional obstructive sleep apnea?
> *Answer / Clinical Rationale*: A **Supine AHI at least twice ($\ge 2\times$) the non-supine AHI**, with a normal or near-normal non-supine AHI.

> [!question]- How do modern vibrotactile Sleep Position Trainers (SPTs) prevent supine sleeping?
> *Answer / Clinical Rationale*: They deliver **calibrated vibrotactile vibrations to the neck or chest** whenever the patient rolls onto their back, prompting a change to the lateral posture.

## Core Clinical & Mechanistic Principles
**Positional Obstructive Sleep Apnea (POSA)** is a distinct clinical phenotype where obstructive events occur predominantly or exclusively in the supine sleeping position:
- **Cartwright Diagnostic Criteria (1984)**:
  - Defined as a **Supine AHI / Non-Supine AHI ratio $\ge 2.0$** (with a non-supine AHI normalized or $<5\text{ events/hr}$).
  - Present in **$50\text{–}60\%$ of all patients with mild-to-moderate OSA**.
- **Biomechanical Mechanism of Supine Collapse**:
  - In the supine position, **gravity pulls the tongue base and soft palate posteriorly** against the posterior pharyngeal wall, increasing $P_{\text{crit}}$ and precipitating retroglossal airway occlusion.
  - In the lateral (non-supine) position, the mandible and tongue fall laterally and anteriorly, and lung volume (FRC) increases, stabilizing the pharynx.
- **Positional Therapy Modalities**:
  1. **Sleep Position Trainers (SPTs - Vibrotactile Biofeedback)**: A small wearable neck or chest sensor that delivers gentle, increasing vibrotactile feedback whenever the patient rolls supine, training them to sleep laterally.
  2. **Mechanical Avoidance Devices**: Tennis-ball shirts, positional wedges, lumbar backpacks.
  3. **Efficacy**: Normalizes AHI in $>70\%$ of true positional OSA patients with compliance comparable to or exceeding CPAP.

```mermaid
%% Positional OSA Diagnosis and Therapy Protocol
flowchart TD
  N1(["Diagnostic PSG: Position-Dependent Apneas and Hypopneas"]) --> N3["Cartwright Criteria: Confirm Supine AHI >= 2x Non-Supine AHI + Non-Supine AHI <5"]
  N3 --> N4{"Posture Biomechanics: Supine vs Lateral"}
  N4 -.->|"Supine Sleeping Position"| N5A["Gravity Pulls Tongue Base & Soft Palate Posteriorly"]
  N5A --> N5["Elevates Pharyngeal Pcrit & Precipitates Retroglossal Airway Occlusion"]
  N4 ==>|"Lateral (Non-Supine) Position"| N6["Mandible & Tongue Fall Anterolaterally + Increased Lung Volume (FRC) Stabilizes Airway"]
  N5 --> N7{"Positional Therapy Modalities"}
  N6 --> N7
  N7 -->|"Biofeedback"| N8["Wearable Sleep Position Trainer (SPT): Gentle Vibrotactile Cue on Supine Roll"]
  N7 -->|"Mechanical"| N9["Positional Avoidance Devices: Lumbar Wedge / Semi-Rigid Vest"]
  N8 --> N11([">70% Complete Normalization of Overall AHI with High Compliance"])
  N9 --> N11
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N11 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8,N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N5A,N5 red
```

### Surgical Technique & Critical Safety Checks
- **Combination Therapy**: Positional therapy is frequently combined with oral appliances or soft tissue surgery to treat residual supine disease (see [[Mandibular advancement devices MAD advance the mandible to enlarge the retroglossal airway space|Mandibular Advancement Devices]]).

## Connected Concepts & Graph Traversal
- **Mandibular Advancement Devices**: [[Mandibular advancement devices MAD advance the mandible to enlarge the retroglossal airway space|Mandibular Advancement Devices]]
- **Nasal Surgery OSA**: [[Nasal surgery alone improves CPAP compliance and subjective daytime somnolence without normalizing AHI|Nasal Surgery OSA]]
- **Modified UPPP**: [[Modified uvulopalatopharyngoplasty UPPP resects redundant palatal tissue while preserving muscular function|Modified UPPP]]
- **Embryological & Sleep Foundation**: [[Geniohyoid and genioglossus muscles are primary upper airway dilators maintaining pharyngeal patency]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Paradise criteria define evidence-based indications for pediatric tonsillectomy in recurrent throat infections]]
- **Congenital Airway Pathology**: [[Laryngomalacia is the most common cause of congenital pediatric stridor characterized by dynamic supraglottic collapse]]
- **Open Airway Reconstruction**: [[Anterior costal cartilage grafts expand the thyroid and cricoid cartilage framework]]
