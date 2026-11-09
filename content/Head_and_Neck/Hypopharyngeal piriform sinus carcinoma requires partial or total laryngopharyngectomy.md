---
title: "Hypopharyngeal piriform sinus carcinoma requires partial or total laryngopharyngectomy"
tier: "Tier IV: Oropharyngeal (TORS), Laryngeal & Hypopharyngeal Surgical Oncology"
tags:
  - head-and-neck
  - hypopharynx
  - piriform-sinus
  - laryngopharyngectomy
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, Ch5, p.91–92"
aliases:
  - "Piriform Sinus Carcinoma"
  - "Hypopharyngeal Carcinoma"
  - "Partial Laryngopharyngectomy"
---

# Hypopharyngeal piriform sinus carcinoma requires partial or total laryngopharyngectomy

## Active Recall

> [!question]- Why do piriform sinus carcinomas typically present at an advanced stage?
> *Answer / Clinical Rationale*: The piriform sinus is a clinically silent, distensible reservoir with minimal early symptoms, allowing extensive submucosal and nodal spread before diagnosis.

> [!question]- What anatomical space does a medial piriform sinus tumor invade to cause true vocal cord fixation?
> *Answer / Clinical Rationale*: The **paraglottic space**.

## Core Clinical & Mechanistic Principles
Carcinomas of the **piriform sinus** represent $>70\%$ of all hypopharyngeal malignancies and are notoriously insidious, presenting with advanced Stage III/IV disease in $>75\%$ of cases:
- **Anatomical Subsites of Piriform Sinus**:
  - Medial wall (abuts aryepiglottic fold and paraglottic space).
  - Lateral wall (abuts thyroid cartilage lamina).
  - Apex (inferior angle extending toward cricopharyngeus).
- **Patterns of Infiltration**:
  - Direct invasion into the **paraglottic space** (causing vocal cord fixation), thyroid cartilage, and cricoid cartilage.
  - Early submucosal extension into the cervical esophagus.
  - High rate of **occult bilateral cervical nodal metastases** (Levels II, III, IV, and retropharyngeal nodes in $>60\%$).
- **Surgical Resection**:
  - *Partial Laryngopharyngectomy*: Reserved for rare localized medial/lateral wall tumors with normal vocal cord mobility.
  - *Total Laryngopharyngectomy*: Standard for T3/T4 tumors, resecting the entire larynx and involved pharyngeal walls, combined with bilateral neck dissections.

```mermaid
%% Piriform Sinus Carcinoma Resection and Reconstructive Decision Tree
flowchart TD
  N1(["Piriform Sinus Carcinoma Presentation"]) --> N2{"Tumor Extent & Vocal Cord Mobility"}
  N2 -->|"Small Medial/Lateral Wall Tumor + Mobile Cord"| N3["Partial Laryngopharyngectomy / Pharyngectomy"]
  N3 --> N4["Primary Closure or Pliable Fasciocutaneous Patch Flap (RFFF)"]
  N2 -->|"T3/T4: Fixed Vocal Cord / Cartilage Invasion / Apex Extension"| N5["Total Laryngectomy + Pharyngectomy + Bilateral Neck Dissection"]
  N5 --> N6{"Pharyngeal Mucosal Defect Geometry"}
  N6 -->|"Non-Circumferential (>3cm Mucosal Strip Left)"| N7["Patch Anterolateral Thigh (ALT) or Radial Forearm (RFFF)"]
  N6 -->|"Circumferential Defect (Complete Pharyngeal Loss)"| N8["Tubed ALT Free Flap or Free Jejunal Autograft"]
  N8 --> N9["Salivary Bypass Tube + Primary TEP Speech Restoration"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3,N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4,N7,N9 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8 red
```

### Surgical Technique & Critical Safety Checks
- **Reconstruction**: Patch ALT or [[The radial forearm free flap provides thin, pliable fasciocutaneous tissue for oral and pharyngeal defects|RFFF]] flap for non-circumferential defects; tubed ALT or jejunal graft for circumferential defects.

## Connected Concepts & Graph Traversal
- **Circumferential Reconstruction**: [[Circumferential laryngopharyngectomy requires tubed microvascular or visceral flap reconstruction|Circumferential Defect Reconstruction]]
- **Total Laryngectomy Craft**: [[Total laryngectomy achieves en bloc laryngeal resection with permanent end-stoma|Total Laryngectomy Standards]]
- **Anterolateral Thigh Donor**: [[The anterolateral thigh free flap provides versatile soft tissue volume based on the LCFA|ALT Flap Volume]]
- **Thin Fasciocutaneous Donor**: [[The radial forearm free flap provides thin, pliable fasciocutaneous tissue for oral and pharyngeal defects|Radial Forearm Free Flap]]
- **Fistula Prevention**: [[Pectoralis major muscle flap reinforcement prevents pharyngocutaneous fistula in salvage laryngectomy|Pectoralis Muscle Reinforcement]]
- **Alaryngeal Speech**: [[Tracheoesophageal puncture TEP and voice prosthesis restore pulmonary-driven alaryngeal speech|TEP Voice Restoration]]
