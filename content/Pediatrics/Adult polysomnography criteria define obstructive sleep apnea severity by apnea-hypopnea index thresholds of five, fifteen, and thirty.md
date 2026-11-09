---
title: "Adult polysomnography criteria define obstructive sleep apnea severity by apnea-hypopnea index thresholds of five, fifteen, and thirty"
tier: "Tier I: Bedrock Foundations — Branchial Embryology, Starling Resistor & Sleep Neurobiology"
tags:
  - pediatrics
  - sleep-medicine
  - adult-psg
  - ahi-thresholds
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Pediatric Otolaryngology Core Principles"
aliases:
  - "Adult Polysomnography"
  - "Adult PSG"
  - "Adult AHI"
  - "OSA Severity Categories"
---

# Adult polysomnography criteria define obstructive sleep apnea severity by apnea-hypopnea index thresholds of five, fifteen, and thirty

## Active Recall

> [!question]- What are the Apnea-Hypopnea Index (AHI) cutoff thresholds for mild, moderate, and severe OSA in adults?
> *Answer / Clinical Rationale*: **Mild: 5–14.9 events/hr**; **Moderate: 15–29.9 events/hr**; **Severe: $\ge 30$ events/hr**.

> [!question]- What is the minimum duration required to score an apnea or hypopnea event in adult polysomnography?
> *Answer / Clinical Rationale*: At least **$10\text{ seconds}$**.

## Core Clinical & Mechanistic Principles
In adults, the diagnosis and severity classification of **Obstructive Sleep Apnea (OSA)** is established via overnight **Polysomnography (PSG)** or Home Sleep Apnea Testing (HSAT):
- **Adult Event Definitions (AASM Manual v2.6)**:
  - **Apnea**: Drop in nasal airflow by $\ge 90\%$ from baseline lasting for **$\ge 10\text{ seconds}$**:
    - *Obstructive*: Continued or increased inspiratory effort throughout event.
    - *Central*: Absent respiratory effort throughout event.
    - *Mixed*: Absent effort initially, followed by resumption of effort.
  - **Hypopnea**: Drop in airflow by $\ge 30\%$ for $\ge 10\text{ seconds}$ associated with either $\ge 3\%$ (or $4\%$) oxygen desaturation or an EEG arousal.
- **Adult AHI Severity Categories**:
  - **Normal**: $\text{AHI} < 5\text{ events/hour}$.
  - **Mild OSA**: $\mathbf{\text{AHI} = 5.0\text{ to }14.9\text{ events/hour}}$.
  - **Moderate OSA**: $\mathbf{\text{AHI} = 15.0\text{ to }29.9\text{ events/hour}}$.
  - **Severe OSA**: $\mathbf{\text{AHI} \ge 30.0\text{ events/hour}}$.
- **Respiratory Disturbance Index (RDI)**:
  - Includes apneas + hypopneas + **Respiratory Effort-Related Arousals (RERAs)** per hour of sleep.

```mermaid
%% Adult Polysomnography Scoring and AHI Severity Matrix
flowchart TD
  N1(["Overnight In-Lab Polysomnography / Home Sleep Apnea Testing"]) --> N2{"AASM Adult Respiratory Event Definitions"}
  N2 --> N3["Apnea: >=90% Airflow Reduction for >=10 Sec (Obstructive vs Central vs Mixed)"]
  N2 --> N4["Hypopnea: >=30% Airflow Drop for >=10 Sec with >=3-4% Desat or EEG Arousal"]
  N2 --> N5["RERA: >=10 Sec Flattening Leading to Arousal without Meeting Apnea/Hypopnea"]
  N2 --> N6{"Apnea-Hypopnea Index (AHI) Stratification"}
  N6 -->|"AHI < 5.0 events/hr"| N7["NORMAL: No Obstructive Sleep Apnea"]
  N6 -->|"AHI 5.0 to 14.9 events/hr"| N8["MILD OSA: Positional Therapy / Oral Appliance (MAD)"]
  N6 -->|"AHI 15.0 to 29.9 events/hr"| N9["MODERATE OSA: CPAP / Sleep Surgery / DISE Triage"]
  N6 -->|"AHI >= 30.0 events/hr"| N10["SEVERE OSA: High Stroke & Cardiovascular Mortality -> CPAP / MMA / HGNS"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3,N4,N5 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N9 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N10 red
  classDef yellow fill:#fef9c3,stroke:#ca8a04,color:#713f12
  class N8 yellow
```

### Surgical Technique & Critical Safety Checks
- **Clinical Significance**: Moderate-to-severe OSA ($\text{AHI} \ge 15$) carries substantial independent risk for systemic hypertension, coronary artery disease, stroke, and motor vehicle accidents (see [[Pediatric polysomnography criteria define obstructive sleep apnea with an obstructive apnea-hypopnea index exceeding one|Pediatric PSG]]).

## Connected Concepts & Graph Traversal
- **Pediatric PSG**: [[Pediatric polysomnography criteria define obstructive sleep apnea with an obstructive apnea-hypopnea index exceeding one|Pediatric PSG]]
- **Non-Anatomical Endotypes**: [[Loop gain, arousal threshold, and muscle responsiveness represent the non-anatomical endotypes of obstructive sleep apnea|Non-Anatomical Endotypes]]
- **Modified UPPP**: [[Modified uvulopalatopharyngoplasty UPPP resects redundant palatal tissue while preserving muscular function|Modified UPPP]]
- **Diagnostic Evaluation**: [[Polysomnographic event criteria differentiate obstructive, central, and mixed apneas through airflow sensors and thoracoabdominal effort monitoring|Sensor-Level Event Scoring Underlying AHI]]
