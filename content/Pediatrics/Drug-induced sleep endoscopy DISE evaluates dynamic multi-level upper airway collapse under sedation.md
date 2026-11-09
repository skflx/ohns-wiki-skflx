---
title: "Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation"
tier: "Tier II: Adenotonsillar Disease, Pediatric OSA & Drug-Induced Sleep Endoscopy (DISE)"
tags:
  - pediatrics
  - sleep-medicine
  - dise
  - dynamic-airway-evaluation
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Ch2, p.16"
aliases:
  - "DISE"
  - "Drug-Induced Sleep Endoscopy"
  - "Sleep Endoscopy"
  - "Dynamic Airway Evaluation"
---

# Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation

## Active Recall

> [!question]- What are the four anatomical levels systematically evaluated during DISE under the VOTE classification?
> *Answer / Clinical Rationale*: The **Velum (soft palate)**, **Oropharynx (lateral walls/tonsils)**, **Tongue base**, and **Epiglottis**.

> [!question]- What sedative agent is preferred in DISE to simulate natural NREM sleep with minimal respiratory depression?
> *Answer / Clinical Rationale*: **Dexmedetomidine** (alpha-2 adrenergic agonist) or titrated **Propofol**.

## Core Clinical & Mechanistic Principles
**Drug-Induced Sleep Endoscopy (DISE)** (introduced by Croft and Pringle in 1991) allows direct 3D fiberoptic visual assessment of dynamic upper airway collapse under pharmacologically induced sleep:
- **Core Clinical Rationale**:
  - Awake physical examination and static endoscopy fail to capture dynamic muscular atonia and negative-pressure collapse that occur during sleep.
  - DISE identifies the exact anatomical level(s), degree, and spatial orientation (anteroposterior, lateral, concentric) of obstruction.
- **Protocol & Anesthetic Titration**:
  - Performed in a quiet, darkened operating room.
  - **Sedation Regimen**: **Target-Controlled Infusion (TCI) of Propofol** ($2.0\text{–}4.0\ \mu\text{g/mL}$) or **Dexmedetomidine** ($1.0\ \mu\text{g/kg}$ bolus over 10 min, then $0.5\text{–}1.0\ \mu\text{g/kg/hr}$).
  - *Target Depth*: Transition from Stage N1 to N2 sleep (bispectral index BIS $50\text{–}70$); avoid oversedation (which induces artifactual tongue base collapse) or undersedation.
  - Flexible fiberoptic laryngoscope is passed through the decongested nasal cavity to systematically evaluate:
    1. **Velum (Soft Palate)**.
    2. **Oropharynx (Palatine Tonsils & Lateral Pharyngeal Walls)**.
    3. **Tongue Base**.
    4. **Epiglottis**.

```mermaid
%% DISE Dynamic Upper Airway Evaluation Protocol
flowchart TD
  N1(["Refractory Sleep-Disordered Breathing / Surgical Planning in OSA"]) --> N2{"Step 1: OR Setup & Anesthetic Titration"}
  N2 --> N3["Darkened Quiet Room + Decongested Nasal Cavity"]
  N2 --> N4["Titrate Dexmedetomidine / Propofol to N2 Sleep (Target BIS 50-70)"]
  N2 --> N5{"Step 2: Systematic VOTE Level Fiberoptic Assessment"}
  N5 --> N6["V - Velum: Anteroposterior vs Complete Concentric Collapse (CCC)"]
  N5 --> N7["O - Oropharynx: Palatine Tonsils & Lateral Pharyngeal Wall Inward Collapse"]
  N5 --> N8["T - Tongue Base: Anteroposterior Retroglossal Compression"]
  N5 --> N9["E - Epiglottis: Isolated Trapdoor Dynamic Collapse vs Lateral Folding"]
  N5 --> N10{"Step 3: Dynamic Simulation Maneuvers"}
  N10 --> N11["Esmarch Jaw Thrust: Simulates Mandibular Advancement Device (MAD) / HGNS / MMA"]
  N10 --> N12["Positional Head Turning: Evaluates Positional Therapy / Lateral Sleeping"]
  N10 --> N13["Direct Tailored Surgical Selection: UPPP vs ESP vs TORS vs HGNS vs MMA"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N7,N8,N9 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N11,N12 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N13 red
```

### Surgical Technique & Critical Safety Checks
- **Jaw Thrust (Esmarch Maneuver)**: Manual anterior advancement of the mandible during DISE simulates the effect of a [[Mandibular advancement devices MAD advance the mandible to enlarge the retroglossal airway space|Mandibular Advancement Device]] (MAD) or [[Hypoglossal nerve stimulation HGNS activates the medial branch of CN XII to advance the tongue during inspiration|HGNS]]/[[Maxillomandibular advancement MMA advances the skeletal framework by ten to twelve millimeters to expand the upper airway|MMA]].

## Connected Concepts & Graph Traversal
- **VOTE Classification**: [[VOTE classification standardizes drug-induced sleep endoscopy findings across velum, oropharynx, tongue base, and epiglottis|VOTE Classification]]
- **Concentric Collapse**: [[Concentric velopharyngeal collapse on DISE is a contraindication to hypoglossal nerve stimulation|Concentric Collapse]]
- **Pediatric DISE**: [[Pediatric DISE identifies persistent multi-level airway collapse following adenotonsillectomy|Pediatric DISE]]
- **Embryological & Sleep Foundation**: [[Second branchial cleft anomalies represent the most common branchial anomaly situated anterior to the sternocleidomastoid]]
- **Adenotonsillar & Endoscopic DISE**: [[Severe secondary post-tonsillectomy hemorrhage requires urgent airway stabilization and surgical electrocautery]]
- **Congenital Airway Pathology**: [[Myer-Cotton grading system stratifies subglottic stenosis from Grade I less than fifty percent to Grade IV no lumen]]
- **Open Airway Reconstruction**: [[Aortopexy suspends the aorta to the sternum to relieve anterior vascular tracheal compression]]
- **Diagnostic Evaluation**: [[Upper airway resistance syndrome causes excessive daytime somnolence from repetitive respiratory effort-related arousals without overt desaturations|DISE Workup for Anatomic Flow Limitation in UARS]]
