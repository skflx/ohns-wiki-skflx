---
title: "Recurrent respiratory papillomatosis RRP is driven by HPV six and eleven causing recurrent laryngeal lesions"
tier: "Tier III: Congenital & Pediatric Airway Disorders — Stridor, Laryngomalacia & Croup"
tags:
  - pediatrics
  - rrp
  - hpv-papilloma
  - airway-neoplasms
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Ch29, p.17"
aliases:
  - "Recurrent Respiratory Papillomatosis"
  - "RRP"
  - "Laryngeal Papilloma"
  - "HPV 6 and 11"
  - "Juvenile RRP"
---

# Recurrent respiratory papillomatosis RRP is driven by HPV six and eleven causing recurrent laryngeal lesions

## Active Recall

> [!question]- Which two HPV subtypes are responsible for $>95\%$ of recurrent respiratory papillomatosis cases?
> *Answer / Clinical Rationale*: **HPV Type 6 and HPV Type 11** (with HPV-11 causing more aggressive disease).

> [!question]- Why is tracheostomy avoided in children with juvenile-onset RRP?
> *Answer / Clinical Rationale*: Because the tracheostomy stoma creates an iatrogenic squamociliary junction that **promotes distal dissemination of papillomas into the trachea and lungs**.

## Core Clinical & Mechanistic Principles
**Recurrent Respiratory Papillomatosis (RRP)** is the most common benign laryngeal neoplasm in children, characterized by recurrent exophytic squamous papillomas along the respiratory tract:
- **Virological Etiology**:
  - Driven by **Human Papillomavirus (HPV) Types 6 and 11** (low-risk, non-oncogenic types).
  - **HPV-11** is associated with more aggressive disease, higher recurrence rates, extensive subglottic/tracheal spread, and higher risk of malignant transformation.
  - *Transmission*: Vertical transmission from mother to infant during vaginal delivery in mothers with genital condylomata.
- **Predilection Sites & Squamociliary Junctions**:
  - Papillomas develop preferentially at **squamociliary junctional transitions**:
    1. Undersurface of the true vocal folds.
    2. Junction of the true and false vocal folds (ventricle).
    3. Lingual surface of the epiglottis.
    4. Carina and tracheostomy stoma sites.
- **Clinical Presentation & Derkay Staging**:
  - Progressive dysphonia / hoarseness, followed by biphasic stridor and life-threatening airway obstruction.
  - **Derkay Severity Score**: Standardized scoring system grading lesion extent across 25 anatomical airway sites, used to monitor disease trajectory.

```mermaid
%% RRP Pathobiology and Derkay Staging Protocol
flowchart TD
  N1(["Perinatal Transmission of HPV Types 6 & 11 via Birth Canal"]) --> N2{"Squamociliary Junctional Tropism"}
  N2 --> N3["1. Undersurface of True Vocal Folds & Laryngeal Ventricle"]
  N2 --> N4["2. Lingual Epiglottis, Tracheobronchial Carina, & Stoma Sites"]
  N2 --> N5{"Clinical Phenotype & Derkay Staging Score"}
  N5 --> N6["Progressive Hoarseness / Dysphonia -> Biphasic Stridor & Dyspnea"]
  N5 --> N7["Derkay Anatomical Scoring System Across 25 Airway Subsites"]
  N5 --> N8{"HPV Subtype Virulence Differentiation"}
  N8 -->|"HPV-6 Subtype (Most Common)"| N9["Indolent Disease Course with Slower Inter-Surgical Regrowth"]
  N8 -->|"HPV-11 Subtype (High Virulence)"| N10["Aggressive Rapid Recurrence, Subglottic Extension, Malignant Risk"]
  N5 --> N11{"CRITICAL TRACHEOSTOMY CONTRAINDICATION"}
  N11 --> N12["TRACHEOSTOMY CREATES IATROGENIC SQUAMOCILIARY JUNCTION"]
  N11 --> N13["MANDATE: Avoid Tracheostomy to Prevent Distal Bronchopulmonary Seeding"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N9 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3,N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N6,N7 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N12,N13 red
```

### Surgical Technique & Critical Safety Checks
- **The Tracheostomy Seeding Hazard**: Tracheostomy is strictly avoided whenever possible, as the stoma creates a new squamociliary junction that promotes **distal tracheal and bronchopulmonary seeding** (see [[Microdebrider debulking and intralesional cidofovir provide surgical and adjuvant control of RRP|RRP Surgical Management]]).

## Connected Concepts & Graph Traversal
- **RRP Surgical Craft**: [[Microdebrider debulking and intralesional cidofovir provide surgical and adjuvant control of RRP|RRP Surgical Management]]
- **Stridor Localization**: [[Inspiratory, biphasic, and expiratory stridor localize pediatric airway obstruction to supraglottic, subglottic, and tracheobronchial subsites|Stridor Localization]]
- **Subglottic Stenosis**: [[Congenital subglottic stenosis results from incomplete recanalization of the laryngeal lumen during embryogenesis|Subglottic Stenosis]]
- **Embryological & Sleep Foundation**: [[Each branchial arch packages one nerve, one artery, one cartilage bar, and one muscle group]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Adenotonsillectomy is the first-line surgical treatment for pediatric obstructive sleep apnea]]
- **Congenital Airway Pathology**: [[Acute epiglottitis causes rapid supraglottic swelling with thumbprint sign and mandates controlled operating room intubation]]
- **Open Airway Reconstruction**: [[Slide tracheoplasty expands complete tracheal rings by oblique division and sliding longitudinal reconstruction]]
