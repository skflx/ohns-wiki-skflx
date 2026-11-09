---
title: "The Rosenbek Scale standardizes the depth of airway penetration and aspiration"
tier: "Tier VI: Deglutition & Hypopharyngeal Pathology"
tags:
  - laryngology
  - deglutition
  - rosenbek-scale
  - aspiration
  - penetration
  - dysphagia
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, Ch7, p.165"
aliases:
  - "Rosenbek Penetration-Aspiration Scale (PAS)"
  - "Penetration-Aspiration Scale"
  - "Rosenbek 8-Point Scale"
  - "The Rosenbek Penetration-Aspiration Scale standardizes the depth and airway response to material entering the larynx"
---

# The Rosenbek Scale standardizes the depth of airway penetration and aspiration

## Active Recall

> [!question]- What characterizes a Rosenbek Score of 8 on a videofluoroscopic swallow study?
> *Answer / Clinical Rationale*: **Silent Aspiration**; material passes below the true vocal folds into the subglottis/trachea with **no cough, throat clearing, or patient awareness response**.

> [!question]- What is the fundamental dividing line between 'penetration' (scores 2–5) and 'aspiration' (scores 6–8)?
> *Answer / Clinical Rationale*: Penetration is bolus entry that remains **at or above the level of the true vocal folds**; aspiration is bolus passage that crosses **below the true vocal folds into the subglottis and trachea**.

## Core Clinical & Mechanistic Principles
The **Rosenbek Penetration-Aspiration Scale (PAS)** (described by John C. Rosenbek in 1996) is an 8-point validated ordinal scoring system used during [[VFSS provides continuous radiographic evaluation of all deglutition phases|VFSS]] and [[FEES assesses pharyngeal secretions and aspiration under direct vision|FEES]] to quantify:
1. The **depth of bolus entry** into the airway (supraglottic penetration vs subglottic aspiration).
2. The presence or absence of **material clearance** from the airway.
3. The patient's **protective sensorimotor response** (cough/throat clear vs silent aspiration).

### The 8-Point Rosenbek Continuum
| Score | Clinical Category | Depth of Airway Entry | Residue & Clearance Status | Patient Airway Protective Response |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Normal** | Material does not enter the airway | No residue | Normal swallow. |
| **2** | **Penetration** | Enters airway, remains **above vocal folds** | **Ejected / Cleared** completely | Effective protective response. |
| **3** | **Penetration** | Enters airway, remains **above vocal folds** | **NOT ejected** (residual stasis) | Ineffective clearance. |
| **4** | **Penetration** | Contacts the **true vocal folds** | **Ejected / Cleared** from airway | Effective cough / clearance. |
| **5** | **Penetration** | Contacts the **true vocal folds** | **NOT ejected** (residual stasis) | Ineffective clearance. |
| **6** | **Aspiration** | Passes **below the true vocal folds** | **Ejected / Cleared** into larynx/mouth | Vigorous, effective cough. |
| **7** | **Aspiration** | Passes **below the true vocal folds** | **NOT ejected** despite effort | Weak, ineffective cough attempt. |
| **8** | **SILENT ASPIRATION**| Passes **below the true vocal folds** | **NOT ejected** | **NO cough or awareness response** (*highest pneumonia risk*). |

```mermaid
%% Rosenbek Penetration Aspiration Scale 8-Point Continuum
flowchart TD
  N1(["Swallow Evaluation: VFSS / FEES Fluoroscopy"]) --> N2{"Airway Bolus Incursion Depth"}
  N2 -->|"Material Does NOT Enter Airway"| N3["Score 1: Normal Pharyngeal Swallow"]
  N2 -->|"Enters Supraglottis Above Vocal Folds (Penetration)"| N4{"Penetration Subsite Level"}
  N4 -->|"Above True Vocal Folds"| N5{"Supraglottic Clearance Check"}
  N5 -->|"Ejected Completely"| N6["Score 2: Supraglottic Penetration Cleared"]
  N5 -->|"NOT Ejected (Stasis)"| N7["Score 3: Supraglottic Penetration with Residue"]
  N4 -->|"Contacts True Vocal Folds"| N8{"Glottic Clearance Check"}
  N8 -->|"Ejected Completely"| N9["Score 4: Glottic Penetration Cleared"]
  N8 -->|"NOT Ejected (Stasis)"| N10["Score 5: Glottic Penetration with Stasis"]
  N2 -->|"Passes Below True Vocal Folds into Trachea (Aspiration)"| N11{"Patient Protective Sensory & Cough Response"}
  N11 -->|"Subglottic Bolus Ejected into Larynx/Pharynx by Vigorous Cough"| N12["Score 6: Tracheal Aspiration Cleared"]
  N11 -->|"Subglottic Bolus NOT Ejected Despite Cough Effort"| N13["Score 7: Tracheal Aspiration Without Clearance"]
  N11 -->|"Subglottic Bolus with ZERO Cough or Patient Awareness"| N14["Score 8: SILENT ASPIRATION (Severe iSLN / Stroke Deafferentation)"]
  N14 --> N15["NPO / Thickened Liquids + Vocal Fold Medialization / Swallow Rehab"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N6,N7,N9,N10 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N12,N13 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N14,N15 red
```

## Clinical & High-Stakes Significance
- **Silent Aspiration (Score 8)**: Represents the most dangerous clinical finding, indicating severe de-afferentation of the [[The superior laryngeal nerve provides supraglottic sensation and cricothyroid motor control|internal branch of the superior laryngeal nerve (iSLN)]] or central brainstem stroke, carrying a profound risk of aspiration pneumonia and mortality.
- **Dietary & Surgical Modifications**: Scores $\ge 6$ prompt immediate dietary modification (thickened liquids, purees), swallow therapy, or surgical intervention (such as [[Injection laryngoplasty requires precise placement into lateral thyroarytenoid muscle|vocal fold medialization]] or [[Arytenoid adduction closes large posterior glottic gaps and corrects height mismatch|arytenoid adduction]]).

## Connected Concepts & Graph Traversal
- **Esophageal Manometry Diagnostics**: [[High-resolution manometry classifies achalasia and esophageal motility disorders by the Chicago criteria|High-Resolution Manometry]]
- **Zenker Pulsion Aspiration**: [[Zenker's diverticulum herniates through Killian's triangle due to elevated pulsion pressure|Zenker's Diverticulum]]
- **Glottic Insufficiency Aspiration**: [[Unilateral vocal fold paralysis causes glottic insufficiency, breathiness, and aspiration|Unilateral Vocal Fold Paralysis]]
- **Supraglottic Resection Aspiration**: [[Horizontal supraglottic laryngectomy resects supraglottic cancer while preserving vocal folds|Supraglottic Laryngectomy]]
- **Sensory Nerve Loss**: [[The superior laryngeal nerve provides supraglottic sensation and cricothyroid motor control|Superior Laryngeal Nerve Sensation]]
