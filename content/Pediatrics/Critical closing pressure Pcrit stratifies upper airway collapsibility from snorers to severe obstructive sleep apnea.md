---
title: "Critical closing pressure Pcrit stratifies upper airway collapsibility from snorers to severe obstructive sleep apnea"
tier: "Tier I: Bedrock Foundations — Branchial Embryology, Starling Resistor & Sleep Neurobiology"
tags:
  - pediatrics
  - sleep-medicine
  - pcrit
  - pathophysiology
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Pediatric Airway & Stridor Evaluation"
aliases:
  - "Pcrit Stratification"
  - "Critical Closing Pressure"
  - "Airway Collapsibility Metric"
---

# Critical closing pressure Pcrit stratifies upper airway collapsibility from snorers to severe obstructive sleep apnea

## Active Recall

> [!question]- What is the typical $P_{\text{crit}}$ value in patients with severe obstructive sleep apnea compared to normal healthy individuals?
> *Answer / Clinical Rationale*: Severe OSA patients have a **positive $P_{\text{crit}} > 0\text{ cm H}_2\text{O}$**, whereas normal individuals have a **highly negative $P_{\text{crit}} < -8\text{ to }-10\text{ cm H}_2\text{O}$**.

> [!question]- What happens to the pharyngeal airway when $P_{\text{crit}}$ is greater than zero?
> *Answer / Clinical Rationale*: The airway **spontaneously collapses at atmospheric pressure**, requiring positive pressure (CPAP) or muscle activation to open.

## Core Clinical & Mechanistic Principles
The **critical closing pressure ($P_{\text{crit}}$)** is the quantitative gold standard biomechanical measure of intrinsic upper airway collapsibility:
- **Pcrit Spectrum Across Sleep-Disordered Breathing**:
  - **Normal Healthy Individuals**: $P_{\text{crit}} < -8\text{ to }-10\text{ cm H}_2\text{O}$ (highly negative; airway remains patent even under strong subatmospheric inspiratory suction).
  - **Benign Snorers**: $P_{\text{crit}} \approx -8\text{ to }-4\text{ cm H}_2\text{O}$ (vibration during inspiration without sustained flow limitation).
  - **Upper Airway Resistance Syndrome (UARS) / Mild OSA**: $P_{\text{crit}} \approx -4\text{ to }0\text{ cm H}_2\text{O}$ (flow limitation causing recurrent arousals).
  - **Severe Obstructive Sleep Apnea (OSA)**: $P_{\text{crit}} > 0\text{ to }+2\text{ cm H}_2\text{O}$ (positive pressure required just to keep the airway from spontaneously collapsing at end-expiration).
- **Factors Determining Pcrit**:
  - **Anatomical (Passive) Load**: Adipose tissue in lateral pharyngeal walls, tongue base volume, tonsillar hypertrophy, micrognathia/retrognathia, narrow hard palate.
  - **Neuromuscular (Active) Dilator Compensation**: Genioglossus and palatopharyngeus reflex activation during sleep.

```mermaid
%% Critical Closing Pressure Pcrit Stratification Spectrum
flowchart TD
  N1(["Quantitative Pharyngeal Airway Collapsibility Metric: Pcrit Continuum"]) --> N13["Pcrit = Passive Anatomical Load (Fat/Tonsils/Retrognathia) MINUS Active Neuromuscular Dilation"]
  N13 --> N2{"Pcrit Biomechanical Threshold Stratification"}
  N2 -->|"Pcrit < -8 to -10 cm H2O (Normal Cohort)"| N7(["Stable Patent Airway: Resists High Negative Intraluminal Suction Pressures"])
  N2 -->|"Pcrit -8 to -4 cm H2O (Benign Snoring)"| N8(["Vibratory Soft Tissue Flutter Without Sustained Flow Limitation or Arousals"])
  N2 -->|"Pcrit -4 to 0 cm H2O (UARS / Mild OSA)"| N9A["Inspiratory Flow Limitation & Crescendo Negative Intrathoracic Effort"]
  N9A --> N9(["Repetitive Respiratory Effort-Related EEG Arousals (RERAs)"])
  N2 -->|"Pcrit > 0 cm H2O (Severe OSA)"| N10["Spontaneous Complete Collapse at Atmospheric Zero End-Expiratory Pressure"]
  N10 --> N11(["Requires Pneumatic Splinting (CPAP) or Skeletal/Soft Tissue Expansion (MMA/UPPP)"])
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N13 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N9A,N9 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N11 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N10 red
  classDef yellow fill:#fef9c3,stroke:#ca8a04,color:#713f12
  class N8 yellow
```

### Surgical Technique & Critical Safety Checks
- **Therapeutic Impact**: Successful surgical airway expansion (UPPP, [[Maxillomandibular advancement MMA advances the skeletal framework by ten to twelve millimeters to expand the upper airway|MMA]], tonsillectomy) or weight loss lowers $P_{\text{crit}}$ by shifting it toward more negative values.

## Connected Concepts & Graph Traversal
- **Starling Resistor**: [[The Starling resistor model explains upper airway collapsibility and critical closing pressure Pcrit|Starling Resistor]]
- **Non-Anatomical Endotypes**: [[Loop gain, arousal threshold, and muscle responsiveness represent the non-anatomical endotypes of obstructive sleep apnea|Non-Anatomical Endotypes]]
- **Adult OSA Criteria**: [[Adult polysomnography criteria define obstructive sleep apnea severity by apnea-hypopnea index thresholds of five, fifteen, and thirty|Adult OSA Criteria]]
- **Disease Mechanism**: [[Upper airway resistance syndrome causes excessive daytime somnolence from repetitive respiratory effort-related arousals without overt desaturations|UARS as the Mild End of the Pcrit Continuum]]
