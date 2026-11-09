---
title: "Local anesthetic systemic toxicity LAST is managed with airway stabilization and twenty percent intravenous lipid emulsion"
tier: "Tier I: Bedrock Foundations — Laryngeal Anatomy, Vocal Fold Microstructure & Laser Biophysics"
tags:
  - laryngology
  - head-and-neck
  - anesthesia
  - local-anesthetics
  - last
  - emergency-rescue
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Clinical Pharmacology & Anesthesia"
aliases:
  - "Local Anesthetic Systemic Toxicity"
  - "LAST Protocol"
  - "Intralipid Rescue"
  - "Lipid Emulsion Therapy"
---

# Local anesthetic systemic toxicity LAST is managed with airway stabilization and twenty percent intravenous lipid emulsion

## Active Recall

> [!question]- What is the typical clinical progression of symptoms in local anesthetic systemic toxicity (LAST)?
> *Answer / Clinical Rationale*: - **Initial CNS Excitation**: Circumoral numbness, metallic taste in mouth, tinnitus, lightheadedness, visual disturbances, and agitation. - **Severe CNS Depression**: Muscle twitching progressing rapidly to **generalized tonic-clonic seizures**, loss of consciousness, and respiratory arrest. - **Cardiovascular Collapse**: PR and QRS prolongation, refractory bradyarrhythmias, ventricular arrhythmias, severe negative inotropy, and profound hypotension.

> [!question]- Why does bupivacaine carry the highest cardiotoxicity index compared to other amide local anesthetics?
> *Answer / Clinical Rationale*: Bupivacaine is **highly lipophilic and binds with high affinity to voltage-gated cardiac sodium channels ($Na_V1.5$)**, dissociating extremely slowly during diastole ("fast-in, slow-out" kinetics). This induces profound, treatment-refractory ventricular conduction blocks and electromechanical dissociation, often causing cardiac collapse *before* overt CNS warning signs.

> [!question]- What is the exact 20% lipid emulsion (Intralipid) dosing protocol for acute LAST resuscitation?
> *Answer / Clinical Rationale*: 1. **Initial Bolus**: **$1.5\text{ mL/kg}$ of $20\%$ lipid emulsion IV bolus over 1 minute** (~$100\text{ mL}$ for an adult). 2. **Continuous Infusion**: **$0.25\text{ mL/kg/min}$ IV infusion**. 3. **Repeat Bolus**: If hemodynamic stability is not restored, repeat the bolus once or twice (every 3–5 minutes) and increase infusion to $0.5\text{ mL/kg/min}$ (maximum total dose: **$10\text{ mL/kg}$ over the first 30 minutes**).

## Core Clinical & Mechanistic Principles
**Local Anesthetic Systemic Toxicity ([[Local anesthetic pharmacology and epinephrine limits govern safe office-based facial surgery|LAST]])** is a life-threatening complication resulting from unintended intravascular injection, rapid mucosal absorption (e.g., highly vascular airway mucosa), or exceeding maximal weight-based safe dosages:

```mermaid
%% LAST Progression and 20 Percent Lipid Emulsion Rescue
flowchart TD
  N1(["Inadvertent Intravascular Injection / Overdose of Local Anesthetic"]) --> N2{"Biphasic Clinical Progression"}
  N2 --> N3["Initial CNS Excitation: Circumoral Numbness, Metallic Taste, Tinnitus, Agitation"]
  N3 --> N4["Severe CNS Depression: Generalized Tonic-Clonic Seizures & Apnea"]
  N4 --> N5["Cardiovascular Collapse: NaV1.5 Block -> QRS Widening, Asystole / VF"]
  N2 --> N6{"Emergency Resuscitation & Rescue Protocol"}
  N6 --> N7["Immediate Airway Protection: 100% FiO2 (Prevent Hypoxia & Acidosis)"]
  N6 --> N8["Suppress Seizures with Benzodiazepines (Avoid High-Dose Propofol)"]
  N6 --> N9{"20% Intravenous Lipid Emulsion (Intralipid) Administration"}
  N9 --> N10["1. Initial IV Bolus: 1.5 mL/kg Over 1 Minute (~100 mL for Adult)"]
  N9 --> N11["2. Continuous Infusion: 0.25 mL/kg/min (Double to 0.5 mL/kg/min if Refractory)"]
  N9 --> N12["3. Maximum Ceiling Dose: 10 mL/kg Total Over Initial 30 Minutes"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7,N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3,N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10,N11,N12 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N5 red
```

### Local Anesthetic Maximum Weight-Based Dosing Standards
- **Lidocaine plain**: $4.5\text{–}5\text{ mg/kg}$ (Max: $300\text{ mg}$).
- **Lidocaine with Epinephrine ($1:100,000$)**: $7\text{ mg/kg}$ (Max: $500\text{ mg}$).
- **Bupivacaine plain**: $2.5\text{ mg/kg}$ (Max: $175\text{ mg}$).
- **Bupivacaine with Epinephrine ($1:200,000$)**: $3\text{ mg/kg}$ (Max: $225\text{ mg}$).
- **Cocaine (Topical $4\%$)**: $2\text{–}3\text{ mg/kg}$ (Max: $200\text{ mg}$).

## Connected Concepts & Graph Traversal
- **Malignant Hyperthermia**: [[Malignant hyperthermia is triggered by volatile anesthetics and succinylcholine and treated with immediate intravenous dantrolene|Malignant Hyperthermia Protocol]]
- **🔗 Office Local Anesthesia (FPRS)**: [[Local anesthetic pharmacology and epinephrine limits govern safe office-based facial surgery|Local Anesthetic Pharmacology]]
- **Topical Airway Anesthesia**: [[Airway assessment classifications predict difficult direct laryngoscopy using anatomical landmarks|Difficult Airway Assessment]]
- **🔗 Sinonasal Regional Blocks (Sinus)**: [[Regional sensory nerve blocks of the nose and paranasal sinuses target branches of V1 and V2|Sinonasal Nerve Blocks]]
- **Emergency Airway Rescue**: [[Emergency cricothyrotomy provides rapid airway access through the cricothyroid membrane|Cricothyrotomy Rescue]]
