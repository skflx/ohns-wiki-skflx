---
title: "Nebulized racemic epinephrine and oral dexamethasone provide rapid treatment for acute croup"
tier: "Tier III: Congenital & Pediatric Airway Disorders — Stridor, Laryngomalacia & Croup"
tags:
  - pediatrics
  - pharmacology
  - croup-treatment
  - racemic-epinephrine
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Ch22, p.7"
aliases:
  - "Racemic Epinephrine"
  - "Dexamethasone Croup"
  - "Croup Medical Management"
  - "Westley Croup Score"
---

# Nebulized racemic epinephrine and oral dexamethasone provide rapid treatment for acute croup

## Active Recall

> [!question]- What is the recommended dose of dexamethasone for acute viral croup?
> *Answer / Clinical Rationale*: **$0.15\text{ to }0.6\text{ mg/kg}$** as a single oral or intramuscular dose.

> [!question]- Why must a child receiving nebulized racemic epinephrine be observed for at least 2 hours in the emergency department?
> *Answer / Clinical Rationale*: To monitor for the **rebound phenomenon (rebound mucosal hyperemia and worsening stridor)** as the drug's vasoconstrictive effect dissipates.

## Core Clinical & Mechanistic Principles
Evidence-based medical management of acute croup relies on two core synergistic pharmacological therapies:
- **Oral / IM Dexamethasone (The Anti-Inflammatory Anchor)**:
  - **Dose**: **$0.15\text{ to }0.6\text{ mg/kg}$** as a single dose (maximum $16\text{ mg}$).
  - *Mechanism*: Long-acting corticosteroid (half-life 36–72 hours); reduces subglottic mucosal edema, capillary permeability, and cytokine release within **$2\text{ to }4\text{ hours}$**.
  - *Evidence*: Significantly reduces ED revisit rates, hospital admissions, and need for intubation across all croup severities (mild, moderate, severe).
- **Nebulized Racemic Epinephrine (The Rapid Vasoconstrictor)**:
  - **Dose**: $0.5\text{ mL}$ of $2.25\%$ racemic epinephrine solution diluted in $3\text{ mL}$ normal saline (or $5\text{ mL}$ of standard $1:1000\text{ L-epinephrine}$).
  - *Mechanism*: Stimulates **alpha-1 adrenergic receptors** on subglottic mucosal arterioles, inducing rapid precapillary vasoconstriction and reducing edema within **$10\text{ to }30\text{ minutes}$**.
  - **The "Rebound Phenomenon" & 2-Hour Observation Rule**:
    - As alpha-1 vasoconstriction wears off ($90\text{–}120\text{ minutes}$), rebound mucosal hyperemia [[High-stakes pediatric and adult sleep airway complications require rapid structured algorithmic emergency rescue|can]] occur.
    - **All children receiving racemic epinephrine must be observed for at least 2 to 3 hours** in the ED prior to discharge.

```mermaid
%% Croup Pharmacotherapy and Rebound Protocol
flowchart TD
  N1(["Acute Viral Laryngotracheobronchitis [Croup]: Barking Cough & Subglottic Edema"]) --> N2{"Westley Croup Clinical Stratification"}
  N2 -->|"Mild Croup (Barking Cough, No Stridor at Rest)"| N3{"Mild Croup Pathway"}
  N2 -->|"Moderate to Severe Croup (Biphasic Stridor at Rest, Retractions)"| N4{"Mod-Severe Pathway"}
  N3 --> N5["Single Oral Dexamethasone Dose: 0.15 to 0.60 mg/kg PO (Max 16 mg)"]
  N3 --> N6["Reduces Edema within 2-4 Hours -> Safe for Home Discharge with Caregiver"]
  N4 --> N7["Dexamethasone 0.6 mg/kg PO/IM/IV (Long-Acting Anti-Inflammatory Anchor)"]
  N4 --> N8["Nebulized 2.25% Racemic Epinephrine 0.5 mL in 3 mL NS (Alpha-1 Vasoconstriction)"]
  N4 --> N9["Rapid Subglottic Mucosal Decongestion within 10 to 30 Minutes"]
  N4 --> N10{"MANDATORY 2 TO 3 HOUR OBSERVATION WINDOW"}
  N10 -->|"Alpha-1 Vasoconstriction Wears Off at 90-120 Min"| N11["Screen for Rebound Mucosal Hyperemia & Stridor Recurrence"]
  N10 -->|"Persistent Stridor / Repeated Epi Doses"| N12["Admit Inpatient for Continuous Airway Monitoring & Mist/O2"]
  N10 -->|"Asymptomatic at 3 Hours Post-Nebulization"| N13["Safe for ED Discharge"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N6,N7,N13 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8,N9 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N12 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N11 red
```

### Surgical Technique & Critical Safety Checks
- **Mist Therapy**: Humidified air/mist has no proven objective benefit in clinical trials, but provides comfort.

## Connected Concepts & Graph Traversal
- **Croup Presentation**: [[Viral laryngotracheobronchitis croup presents with a barking cough and subglottic steeple sign on radiography|Croup Presentation]]
- **Acute Epiglottitis**: [[Acute epiglottitis causes rapid supraglottic swelling with thumbprint sign and mandates controlled operating room intubation|Acute Epiglottitis]]
- **Stridor Localization**: [[Inspiratory, biphasic, and expiratory stridor localize pediatric airway obstruction to supraglottic, subglottic, and tracheobronchial subsites|Stridor Localization]]
- **Embryological & Sleep Foundation**: [[Low arousal threshold causes premature awakening before airway stabilization in obstructive sleep apnea]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Extracapsular total tonsillectomy and intracapsular subtotal tonsillotomy differ in postoperative hemorrhage and recovery]]
- **Congenital Airway Pathology**: [[Recurrent respiratory papillomatosis RRP is driven by HPV six and eleven causing recurrent laryngeal lesions]]
- **Open Airway Reconstruction**: [[Postoperative chin-to-chest flexion stitch prevents catastrophic neck extension and tracheal anastomotic dehiscence]]
