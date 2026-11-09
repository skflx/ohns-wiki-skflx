---
title: "Congenital bilateral vocal fold paralysis presents with severe inspiratory stridor requiring airway protection"
tier: "Tier III: Congenital & Pediatric Airway Disorders — Stridor, Laryngomalacia & Croup"
tags:
  - pediatrics
  - vocal-fold-paralysis
  - bilateral-paralysis
  - congenital-laryngeal
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch54, p.1140"
aliases:
  - "Congenital Bilateral Vocal Fold Paralysis"
  - "BVFP"
  - "Pediatric Vocal Cord Paralysis"
  - "Arnold-Chiari Malformation"
---

# Congenital bilateral vocal fold paralysis presents with severe inspiratory stridor requiring airway protection

## Active Recall

> [!question]- What is the most important central nervous system malformation to rule out with MRI in an infant with bilateral vocal fold paralysis?
> *Answer / Clinical Rationale*: **Chiari malformation (Type I or II)** with brainstem compression.

> [!question]- Why is permanent destructive surgical enlargement (e.g., arytenoidectomy) contraindicated in early congenital BVFP?
> *Answer / Clinical Rationale*: Because up to **$50\text{–}60\%$ of cases experience spontaneous neurological recovery within 12 to 24 months**.

## Core Clinical & Mechanistic Principles
**Bilateral Vocal Fold Paralysis (BVFP)** is the second most common congenital laryngeal anomaly ($15\text{–}20\%$ of congenital stridor), presenting with severe respiratory distress:
- **Etiological Classification**:
  1. **Central Neurological Causes ($50\text{–}60\%$)**:
     - **Chiari Malformation (Type I or II)**: Herniation of cerebellar tonsils compresses the brainstem and nucleus ambiguus / vagus nerve roots.
     - Hydrocephalus, intracranial hemorrhage, myelomeningocele, hypoxic-ischemic encephalopathy.
  2. **Peripheral Neuropathies / Iatrogenic ($20\text{–}30\%$)**:
     - Cardiothoracic surgery (PDA ligation, coarctation repair), tracheoesophageal fistula repair.
  3. **Idiopathic ($15\text{–}20\%$)**.
- **Clinical Presentation & The "Good Voice, Bad Airway" Paradox**:
  - Vocal folds rest in the **paramedian / median position**, producing a **normal, clear cry / voice** despite **severe inspiratory stridor, retractions, and cyanosis**.
- **Spontaneous Recovery & Management Timeline**:
  - Up to **$>50\text{–}60\%$ of congenital BVFP cases recover spontaneous vocal fold mobility within $12\text{ to }24\text{ months}$** (as brainstem myelinates or hydrocephalus is shunted).
  - **Surgical Rule**: Avoid irreversible destructive vocal cord procedures (arytenoidectomy, cordotomy) in infants; manage with **temporary tracheostomy** or CPAP while observing for 12–24 months for neurological recovery.

```mermaid
%% Congenital Bilateral Vocal Fold Paralysis Protocol
flowchart TD
  N1(["Newborn with Severe Inspiratory Stridor, Sternal Retractions & Clear Cry: 'Good Voice, Bad Airway'"]) --> N2{"Flexible Fiberoptic Laryngoscopy"}
  N2 --> N3["Visualizes Bilateral Paramedian Immobile Vocal Folds with Narrow Glottic Chink"]
  N2 --> N4{"Step 1: MANDATORY NEUROAXIS MRI WORKUP"}
  N4 --> N5["MRI Brain & Cervical Spine: Evaluates Chiari Malformation (Type I/II) & Hydrocephalus"]
  N4 -->|"Chiari / Brainstem Compression Identified"| N6["Neurosurgical Rescue"]
  N6 --> N7["Urgent Posterior Fossa Decompression / VP Shunting Reverses Paralysis in Days"]
  N2 --> N8{"Step 2: Airway Protection & 12-24 Month Observation"}
  N8 --> N9["Non-Invasive CPAP or Temporary Tracheostomy to Secure Airway"]
  N8 --> N10["EXPECT 50-60% SPONTANEOUS NEUROLOGICAL RECOVERY WITHIN 12-24 MONTHS"]
  N8 -->|"STRICT PROSCRIPTION: Irreversible Surgery in Infants"| N11["Surgical Contraindication"]
  N11 --> N12["FATAL ERROR: Avoid Early Arytenoidectomy / Cordotomy (Destroys Normal Voice Permanently)"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N9,N10 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N12 red
```

### Surgical Technique & Critical Safety Checks
- **Chiari Rescue**: Emergent ventriculoperitoneal (VP) shunting or posterior fossa decompression [[High-stakes pediatric and adult sleep airway complications require rapid structured algorithmic emergency rescue|can]] completely restore vocal fold mobility within days if performed promptly.

## Connected Concepts & Graph Traversal
- **Stridor Localization**: [[Inspiratory, biphasic, and expiratory stridor localize pediatric airway obstruction to supraglottic, subglottic, and tracheobronchial subsites|Stridor Localization]]
- **Laryngeal Cleft**: [[Type I through Type IV laryngeal clefts represent congenital tracheoesophageal communication defects|Laryngeal Cleft]]
- **LTR Reconstruction**: [[Single-stage and double-stage laryngotracheal reconstruction LTR repair mature high-grade subglottic stenosis|LTR Reconstruction]]
- **Embryological & Sleep Foundation**: [[Loop gain, arousal threshold, and muscle responsiveness represent the non-anatomical endotypes of obstructive sleep apnea]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Nasal steroid sprays and montelukast provide medical therapy for mild pediatric sleep-disordered breathing]]
- **Congenital Airway Pathology**: [[Laryngomalacia is the most common cause of congenital pediatric stridor characterized by dynamic supraglottic collapse]]
- **Open Airway Reconstruction**: [[Aortopexy suspends the aorta to the sternum to relieve anterior vascular tracheal compression]]
