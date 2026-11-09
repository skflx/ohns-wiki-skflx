---
title: "Pediatric polysomnography criteria define obstructive sleep apnea with an obstructive apnea-hypopnea index exceeding one"
tier: "Tier I: Bedrock Foundations — Branchial Embryology, Starling Resistor & Sleep Neurobiology"
tags:
  - pediatrics
  - sleep-medicine
  - pediatric-psg
  - ahi-criteria
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Ch3, p.6"
aliases:
  - "Pediatric Polysomnography"
  - "Pediatric PSG"
  - "Pediatric AHI"
  - "Pediatric OSA Severity"
---

# Pediatric polysomnography criteria define obstructive sleep apnea with an obstructive apnea-hypopnea index exceeding one

## Active Recall

> [!question]- What is the minimum obstructive Apnea-Hypopnea Index (oAHI) threshold defining pediatric OSA?
> *Answer / Clinical Rationale*: An **$\text{oAHI} \ge 1.0\text{ event per hour}$** (unlike adults where $\text{AHI} < 5$ is normal, $>1$ event/hr is considered abnormal in children).

> [!question]- What oAHI threshold defines severe pediatric obstructive sleep apnea?
> *Answer / Clinical Rationale*: An **$\text{oAHI} \ge 10.0\text{ events per hour}$** (or a nadir oxygen saturation $<80\%$).

> [!question]- Which clinical criteria mandate overnight hospital admission following pediatric adenotonsillectomy?
> *Answer / Clinical Rationale*: **Age $<3\text{ years}$**, **severe OSA ($\text{oAHI} \ge 10$ or nadir $<80\%$)**, **Down syndrome or craniofacial malformations**, neuromuscular disorders, and pulmonary hypertension.

## Core Clinical & Mechanistic Principles
**Pediatric Polysomnography (PSG)** utilizes distinct scoring criteria and severity thresholds compared to adult sleep studies, reflecting the greater vulnerability of developing children to intermittent hypoxia:
- **Pediatric Scoring Rules (AASM Guidelines)**:
  - **Obstructive Apnea**: A drop in respiratory airflow by $\ge 90\%$ for at least the **duration of 2 baseline breaths**, accompanied by continued respiratory effort.
  - **Obstructive Hypopnea**: A drop in airflow by $\ge 30\%$ for $\ge 2$ breaths with $\ge 3\%$ oxygen desaturation OR an electroencephalographic arousal.
- **Pediatric OSA Severity Stratification by Obstructive AHI (oAHI)**:
  - **Normal**: $\text{oAHI} < 1.0\text{ event/hour}$.
  - **Mild OSA**: $\text{oAHI} = 1.0\text{ to }4.9\text{ events/hour}$.
  - **Moderate OSA**: $\text{oAHI} = 5.0\text{ to }9.9\text{ events/hour}$.
  - **Severe OSA**: $\mathbf{\text{oAHI} \ge 10.0\text{ events/hour}}$ (or $\text{nadir } \text{SpO}_2 < 80\%$).
- **End-Tidal CO2 ($\text{EtCO}_2$) Monitoring**:
  - Mandatory in pediatric PSG to detect **obstructive hypoventilation** ($\text{EtCO}_2 > 50\text{ mmHg}$ for $>25\%$ of total sleep time).

```mermaid
%% Pediatric Polysomnography and Admission Protocol
flowchart TD
  N1(["Pediatric Polysomnography: 2-Breath Event Scoring & Capnography"]) --> N2{"Pediatric oAHI Severity Stratification"}
  N2 -->|"Normal (oAHI < 1.0 event/hr)"| N3["Normal Pediatric Sleep Architecture: Reassurance"]
  N2 -->|"Mild OSA (oAHI 1.0 to 4.9 events/hr)"| N4["Mild OSA Pathway"]
  N2 -->|"Moderate OSA (oAHI 5.0 to 9.9 events/hr)"| N5["Moderate OSA Pathway"]
  N2 -->|"Severe OSA (oAHI >= 10.0 events/hr OR SpO2 Nadir < 80%)"| N6{"Severe OSA Pathway"}
  N4 --> N7["Medical Therapy Trial (Nasal Steroids + Montelukast) or Elective T&A"]
  N5 --> N8["First-Line Elective Adenotonsillectomy (Standard Ambulatory Pathway)"]
  N6 --> N9["HIGH-RISK AIRWAY STATUS: Mandatory Post-Op Inpatient Admission"]
  N6 --> N10{"AAO-HNS MANDATORY OVERNIGHT INPATIENT CRITERIA"}
  N10 --> N11["Age < 3.0 Years / Down Syndrome / Craniofacial Dysmorphism / Neuromuscular"]
  N10 --> N12["Continuous Pulse Oximetry & Surveillance for Postobstructive Pulmonary Edema"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N11,N12 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9 red
  classDef yellow fill:#fef9c3,stroke:#ca8a04,color:#713f12
  class N7 yellow
```

### Surgical Technique & Critical Safety Checks
- **Indications for Polysomnography (AAO-HNS Guidelines)**: Mandatory prior to [[Adenotonsillectomy is the first-line surgical treatment for pediatric obstructive sleep apnea|adenotonsillectomy]] in children with obesity, Down syndrome, craniofacial abnormalities, neuromuscular disorders, sickle cell disease, or discordance between tonsil size and symptoms.
- **Mandatory Overnight Inpatient Admission Criteria Following Adenotonsillectomy**:
  - AAO-HNS clinical guidelines mandate **inpatient admission with continuous pulse oximetry** for children with any of the following high-risk features:
    1. **Age $<3.0\text{ years}$**.
    2. **Severe OSA**: $\text{oAHI} \ge 10.0\text{ events/hour}$ or oxygen saturation nadir $<80\%$.
    3. **Systemic Complications of OSA**: Cor pulmonale, pulmonary hypertension, failure to thrive (FTT).
    4. **Craniofacial / Syndromic Anatomy**: Down syndrome (Trisomy 21), achondroplasia, Pierre Robin sequence, craniofacial dysostosis.
    5. **Neuromuscular Disorders**: Cerebral palsy, muscular dystrophies, hypotonia.
    6. **Living $>60\text{ minutes}$ from a surgical hospital** or unreliable home care.

## Connected Concepts & Graph Traversal
- **Adult OSA Criteria**: [[Adult polysomnography criteria define obstructive sleep apnea severity by apnea-hypopnea index thresholds of five, fifteen, and thirty|Adult OSA PSG Criteria]]
- **T&A for Pediatric OSA**: [[Adenotonsillectomy is the first-line surgical treatment for pediatric obstructive sleep apnea|Adenotonsillectomy & Overnight Admission]]
- **McGill Oximetry Scoring**: [[Nocturnal pulse oximetry McGill score stratifies pediatric obstructive sleep apnea severity|McGill Oximetry Protocol]]
- **Critical Closing Pressure**: [[The Starling resistor model explains upper airway collapsibility and critical closing pressure Pcrit|Starling Resistor Model & Pcrit]]
- **Pediatric DISE**: [[Pediatric DISE identifies persistent multi-level airway collapse following adenotonsillectomy|Pediatric Drug-Induced Sleep Endoscopy]]
- **Tonsillectomy Guidelines**: [[Paradise criteria define evidence-based indications for pediatric tonsillectomy in recurrent throat infections|Paradise Tonsillectomy Criteria]]
- **Diagnostic Evaluation**: [[Polysomnographic event criteria differentiate obstructive, central, and mixed apneas through airflow sensors and thoracoabdominal effort monitoring|Sensor-Level Event Scoring Underlying Pediatric OAHI]]
