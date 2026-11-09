---
title: "Tracheoesophageal puncture TEP and voice prosthesis restore pulmonary-driven alaryngeal speech"
tier: "Tier IV: Oropharyngeal (TORS), Laryngeal & Hypopharyngeal Surgical Oncology"
tags:
  - head-and-neck
  - larynx
  - tep
  - voice-rehabilitation
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch5, p.90"
aliases:
  - "Tracheoesophageal Puncture"
  - "TEP"
  - "Voice Prosthesis"
---

# Tracheoesophageal puncture TEP and voice prosthesis restore pulmonary-driven alaryngeal speech

## Active Recall

> [!question]- How does a tracheoesophageal voice prosthesis produce sound?
> *Answer / Clinical Rationale*: Exhaled pulmonary air is diverted through the one-way valve into the esophagus, vibrating the mucosa of the **pharyngoesophageal (PE) segment**.

> [!question]- What is the difference between central and peripheral voice prosthesis leakage?
> *Answer / Clinical Rationale*: **Central leakage** occurs *through* the valve due to Candida biofilm degradation; **peripheral leakage** occurs *around* the prosthesis due to tract dilation.

## Core Clinical & Mechanistic Principles
**Tracheoesophageal Puncture (TEP)** with insertion of a one-way silicone voice prosthesis is the gold standard for voice rehabilitation following total laryngectomy:
- **Physiological Mechanism**:
  - The patient occludes the tracheostoma during exhalation; pulmonary air is diverted through the one-way valve into the neopharynx.
  - The air column vibrates the mucosal folds of the **pharyngoesophageal (PE) segment**, producing fluent, pulmonary-driven alaryngeal sound modulated by articulators into natural speech.
- **Timing of Placement**:
  - **Primary TEP**: Performed at the time of total laryngectomy (placed $5\text{–}10\text{ mm}$ below the posterosuperior tracheal rim); stent placed with red rubber catheter or primary prosthesis.
  - **Secondary TEP**: Performed months later under local or general anesthesia after complete healing and radiation.
- **Cricopharyngeal Myotomy**: Performed during laryngectomy to prevent hypertonicity/spasm of the PE segment, which causes failed phonation.

```mermaid
%% TEP Phonation Biomechanics and Leak Troubleshooting Cascade
flowchart TD
  N1(["Post-Total Laryngectomy One-Way Silicone Voice Prosthesis"]) --> N1A{"Expiratory Phonation vs Swallowing Competence"}
  N1A ==>|"Stoma Digital Occlusion During Exhalation"| N2["Pulmonary Expiratory Air Directed Across One-Way Valve"]
  N2 --> N3["Air Enters Esophagus & Vibrates Pharyngoesophageal (PE) Segment"]
  N3 --> N4(["Fluent Pulmonary-Driven Alaryngeal Voice Modulated by Articulators"])
  N1A -.->|"Postoperative Fluid Leakage During Swallowing"| N6{"Central vs Peripheral Leak Test (Grape Juice Swallow)"}
  N6 -->|"Fluid Exits THROUGH Center of Prosthetic Valve"| N7["Central Leak: Candida Albicans Biofilm Ingrowth Distorting Valve"]
  N7 --> N8(["In-Office Valve Replacement + Oral Nystatin / Fluconazole Prophylaxis"])
  N6 -->|"Fluid Exits AROUND Circumference of Prosthetic Collar"| N9["Peripheral Leak: Fistula Tract Dilation / Tissue Thinning / Necrosis"]
  N9 --> N10(["Downsize Length/Diameter -> Purse-String Suture / Collagen / Fat Augmentation"])
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3,N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7,N8 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9,N10 red
```

### Surgical Technique & Critical Safety Checks
- **Complications & Troubleshooting**:
  - *Central Leakage (Through Prosthesis)*: Caused by *Candida* colonization and fungal biofilm disrupting valve closure; treated with replacement and oral antifungals.
  - *Peripheral Leakage (Around Prosthesis)*: Caused by fistula tract dilation from radiation, malnutrition, or reflux; treated with downsizing, purse-string suture, or tissue augmentation (see [[Total laryngectomy achieves en bloc laryngeal resection with permanent end-stoma|Total Laryngectomy Craft]]).

## Connected Concepts & Graph Traversal
- **Total Laryngectomy Standards**: [[Total laryngectomy achieves en bloc laryngeal resection with permanent end-stoma|Total Laryngectomy Craft]]
- **Connell Neopharyngeal Closure**: [[Primary pharyngeal closure after total laryngectomy utilizes an inverting Connell technique|Primary Pharyngeal Closure]]
- **Pectoralis Flap Reinforcement**: [[Pectoralis major muscle flap reinforcement prevents pharyngocutaneous fistula in salvage laryngectomy|PMMF Reinforcement]]
- **PCF Management**: [[Pharyngocutaneous fistula is managed with wound care, nutritional support, and surgical flap closure|Pharyngocutaneous Fistula Protocol]]
- **Hypopharyngeal Oncology**: [[Hypopharyngeal piriform sinus carcinoma requires partial or total laryngopharyngectomy|Piriform Sinus Carcinoma]]
- **Cricopharyngeal Spasm**: [[LEMG denervation potentials indicate axonal injury within one to six months|Pharyngoesophageal Dynamics]]
