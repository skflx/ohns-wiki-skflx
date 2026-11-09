---
title: "Nocturnal pulse oximetry McGill score stratifies pediatric obstructive sleep apnea severity"
tier: "Tier I: Bedrock Foundations — Branchial Embryology, Starling Resistor & Sleep Neurobiology"
tags:
  - pediatrics
  - sleep-medicine
  - mcgill-score
  - oximetry
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Pediatric Otolaryngology Core Principles"
aliases:
  - "McGill Oximetry Score"
  - "Pediatric Oximetry"
  - "Brouillette Score"
  - "Nocturnal Desaturation"
---

# Nocturnal pulse oximetry McGill score stratifies pediatric obstructive sleep apnea severity

## Active Recall

> [!question]- What is the positive predictive value of a positive McGill Oximetry Score (Score 2, 3, or 4) for pediatric OSA?
> *Answer / Clinical Rationale*: Greater than **$97\%$ positive predictive value**.

> [!question]- What surgical management decision is mandated by a McGill Score of 3 or 4?
> *Answer / Clinical Rationale*: **Mandatory overnight inpatient admission and continuous monitoring** following adenotonsillectomy due to high risk of postoperative respiratory compromise.

## Core Clinical & Mechanistic Principles
**Nocturnal Pulse Oximetry (McGill Oximetry Score)** is a validated, cost-effective screening and prioritization tool for pediatric obstructive sleep apnea when full in-laboratory polysomnography is unavailable:
- **The McGill Oximetry Scoring System (Nixon et al., 2004)**:
  - **McGill Score 1 (Inconclusive / Normal)**: $<3$ desaturation clusters and $<3$ desaturations below $90\%$. (Does NOT rule out OSA; requires formal PSG if clinically symptomatic).
  - **McGill Score 2 (Mild OSA)**: $\ge 3$ clusters of desaturations AND $\ge 3$ drops below $90\%$, but $\le 3$ drops below $85\%$. (Positive predictive value for OSA is $>97\%$).
  - **McGill Score 3 (Moderate OSA)**: $\ge 3$ clusters of desaturations AND $>3$ drops below $85\%$, but $\le 3$ drops below $80\%$.
  - **McGill Score 4 (Severe OSA)**: $\ge 3$ clusters of desaturations AND **$>3$ drops below $80\%$**.
- **Clinical Decision Utility**:
  - A **positive McGill score (Score 2, 3, or 4) has a $>97\%$ positive predictive value for OSA**, allowing direct scheduling of [[Adenotonsillectomy is the first-line surgical treatment for pediatric obstructive sleep apnea|adenotonsillectomy]] without waiting for a delay-inducing PSG.
  - Scores 3 and 4 identify **high-risk children requiring mandatory postoperative overnight inpatient admission** and PICU monitoring.

```mermaid
%% McGill Oximetry Scoring and Triage Protocol
flowchart TD
  N1(["Overnight Nocturnal Pulse Oximetry: Assessment of Desaturation Clusters"]) --> N2{"McGill Oximetry Severity Stratification"}
  N2 -->|"McGill Score 1 (Inconclusive / Normal)"| N3["Score 1 Pathway"]
  N2 -->|"McGill Score 2 (Mild OSA: >=3 Clusters + >=3 Drops <90%, <=3 Drops <85%)"| N4{"Score 2 Pathway"}
  N2 -->|"McGill Score 3 (Moderate OSA: >=3 Clusters + >3 Drops <85%, <=3 Drops <80%)"| N5{"Score 3 Pathway"}
  N2 -->|"McGill Score 4 (Severe OSA: >=3 Clusters + >3 Drops <80%)"| N6{"Score 4 Pathway"}
  N3 --> N7["Does NOT Exclude OSA -> Order Formal In-Lab PSG if Clinically Symptomatic"]
  N4 --> N8[">97% Positive Predictive Value for OSA -> Fast-Track Direct T&A Scheduling"]
  N4 --> N9["Standard Ambulatory Same-Day Postoperative Recovery Pathway"]
  N5 --> N10["High-Risk Pediatric OSA -> Expedited Adenotonsillectomy"]
  N5 --> N11["MANDATORY OVERNIGHT INPATIENT ADMISSION & AIRWAY SURVEILLANCE"]
  N6 --> N12["CRITICAL SEVERE OSA: Immediate T&A + Mandatory PICU / Step-Down Admission"]
  N6 --> N13["Surveillance for Postobstructive Negative-Pressure Pulmonary Edema"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N8,N9 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N10,N11 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N12,N13 red
  classDef yellow fill:#fef9c3,stroke:#ca8a04,color:#713f12
  class N7 yellow
```

### Surgical Technique & Critical Safety Checks
- **Desaturation Cluster Definition**: A period of $>20\text{ minutes}$ containing $\ge 5$ desaturations $\ge 4\%$, reflecting cyclical apnea-hypopnea cycles.

## Connected Concepts & Graph Traversal
- **Pediatric PSG**: [[Pediatric polysomnography criteria define obstructive sleep apnea with an obstructive apnea-hypopnea index exceeding one|Pediatric PSG]]
- **High-Risk Tonsillectomy**: [[High-risk pediatric criteria mandate overnight inpatient admission following adenotonsillectomy|High-Risk Criteria]]
- **Adenotonsillectomy**: [[Adenotonsillectomy is the first-line surgical treatment for pediatric obstructive sleep apnea|Adenotonsillectomy]]
- **Embryological & Sleep Foundation**: [[High loop gain causes ventilatory instability and periodic breathing in sleep-disordered breathing]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Post-tonsillectomy hemorrhage is classified into primary within twenty-four hours and secondary beyond twenty-four hours]]
- **Congenital Airway Pathology**: [[Subglottic hemangiomas present as biphasic stridor in infants and respond to systemic oral propranolol]]
- **Open Airway Reconstruction**: [[Slide tracheoplasty expands complete tracheal rings by oblique division and sliding longitudinal reconstruction]]
