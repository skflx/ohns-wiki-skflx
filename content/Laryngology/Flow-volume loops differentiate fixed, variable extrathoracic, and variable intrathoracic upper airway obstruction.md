---
title: "Flow-volume loops differentiate fixed, variable extrathoracic, and variable intrathoracic upper airway obstruction"
tier: "Tier I: Bedrock Foundations — Laryngeal Anatomy & Physiology"
tags:
  - laryngology
  - pulmonary-physiology
  - flow-volume-loops
  - upper-airway-obstruction
  - stridor
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch7, p.169–170"
aliases:
  - "Flow-Volume Loops in Airway Obstruction"
  - "Variable Extrathoracic Obstruction"
  - "Fixed Upper Airway Obstruction"
  - "Spirometry in Laryngology"
---

# Flow-volume loops differentiate fixed, variable extrathoracic, and variable intrathoracic upper airway obstruction

## Active Recall

> [!question]- How do the flow-volume loop contours differ among variable extrathoracic, variable intrathoracic, and fixed upper airway obstructions?
> *Answer / Clinical Rationale*: - **Variable Extrathoracic Obstruction (e.g., Bilateral vocal fold paralysis, vocal cord dysfunction, laryngomalacia)**: **Flattened inspiratory limb** with a normal, preserved expiratory curve. (During inspiration, intratracheal pressure falls below atmospheric pressure, causing compliant extrathoracic airway collapse). - **Variable Intrathoracic Obstruction (e.g., Distal tracheal tumor, tracheomalacia in chest)**: **Flattened expiratory limb** with a normal, preserved inspiratory curve. (During forced expiration, positive pleural pressure exceeds intratracheal pressure, collapsing the intrathoracic airway). - **Fixed Airway Obstruction (e.g., Circumferential tracheal stenosis, bulky thyroid goiter, subglottic stenosis)**: **Flattening of BOTH inspiratory and expiratory limbs** because a rigid, non-compliant stenosis does not change caliber with respiratory transmural pressure swings.

> [!question]- What quantitative spirometric ratio (Empey index / FIF50 ratio) defines upper airway obstruction?
> *Answer / Clinical Rationale*: - **Empey Index**: $\frac{\text{FEV}_1\text{ (mL)}}{\text{PEFR}\text{ (L/min)}} > 8\text{–}10$ strongly suggests upper airway obstruction. - **$\text{FEF}_{50} / \text{FIF}_{50}$ (Mid-vital capacity ratio)**: - *Variable Extrathoracic*: $>1.0$ (due to marked reduction in $\text{FIF}_{50}$). - *Variable Intrathoracic*: $<0.3\text{–}0.5$ (due to marked reduction in $\text{FEF}_{50}$). - *Fixed Obstruction*: Approximately $1.0$ (both $\text{FEF}_{50}$ and $\text{FIF}_{50}$ equally depressed).

> [!question]- Why is inspiratory stridor characteristic of extrathoracic lesions whereas expiratory wheeze/stridor indicates intrathoracic lesions?
> *Answer / Clinical Rationale*: The cervical trachea is exposed to **ambient atmospheric pressure**, so negative airway pressure generated on inspiration draws floppy tissues inward, worsening obstruction and creating **inspiratory stridor**. The intrathoracic trachea is surrounded by **pleural pressure**, so forced exhalation increases external pleural pressure, narrowing the intrathoracic lumen and producing **expiratory stridor/wheezing**.

## Core Clinical & Mechanistic Principles
Spirometric **Maximal Flow-Volume Loops (MFVL)** provide a non-invasive functional dynamic assessment of dynamic vs fixed airflow limitation across the upper respiratory tract:

```mermaid
%% FlowVolume Loop Physics and Obstruction Classification
flowchart TD
  N1(["Spirometry: Maximal Flow-Volume Loop Evaluation for Upper Airway Obstruction"]) --> N2{"Dynamic Transmural Pressure & Obstruction Subtypes"}
  N2 -->|"1. Variable Extrathoracic Obstruction (BVFP, PVFM, Laryngomalacia)"| N3["Inspiratory Subatmospheric Pressure Collapses Floppy Cervical Airway"]
  N3 --> N4["FLATTENED Inspiratory Limb + Normal Expiratory Loop (FEF50/FIF50 > 1.0)"]
  N2 -->|"2. Variable Intrathoracic Obstruction (Distal Tracheomalacia, Carinal Mass)"| N5["Forced Exhalation Positive Pleural Pressure Collapses Intrathoracic Lumen"]
  N5 --> N6["FLATTENED Expiratory Limb + Normal Inspiratory Loop (FEF50/FIF50 < 0.3-0.5)"]
  N2 -->|"3. Fixed Upper Airway Obstruction (Circumferential Tracheal / Subglottic Stenosis)"| N7["Rigid Lumen Cannot Expand or Collapse with Transmural Pressure Swings"]
  N7 --> N8["RECTANGULAR BOX LOOP: Both Inspiratory & Expiratory Limbs Flattened (FEF50/FIF50 ~ 1.0)"]
  N2 --> N9["Diagnostic Screen: Empey Index (FEV1 mL / PEFR L/min) > 8-10 Confirms Upper Airway Stenosis"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3,N4 blue
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5,N6 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N7,N8 red
```

### High-Yield Surgical Considerations
- **Misdiagnosis as Refractory Asthma**: Patients with [[Bilateral abductor vocal fold paralysis causes acute airway compromise requiring glottic enlargement|bilateral vocal fold paralysis]] or post-intubation tracheal stenosis are frequently misdiagnosed with asthma for months; an abnormal flow-volume loop demonstrating a flattened inspiratory or expiratory plateau immediately points to an upper aerodigestive tract structural lesion.

## Connected Concepts & Graph Traversal
- **Laryngeal Immobility**: [[Bilateral abductor vocal fold paralysis causes acute airway compromise requiring glottic enlargement|Bilateral Vocal Fold Paralysis Management]]
- **Subglottic Stenosis**: [[The Cotton-Myer classification grades subglottic stenosis by luminal reduction|Cotton-Myer Grading]]
- **Difficult Airway**: [[Airway assessment classifications predict difficult direct laryngoscopy using anatomical landmarks|Airway Classifications]]
- **🔗 Pediatric Airway Softness (Pediatrics)**: [[Laryngomalacia is the most common cause of congenital pediatric stridor characterized by dynamic supraglottic collapse|Laryngomalacia Dynamics]]
- **Surgical Tracheostomy**: [[Standard open tracheotomy utilizes horizontal intersinusoidal or Bjork flap entry|Surgical Tracheotomy]]
