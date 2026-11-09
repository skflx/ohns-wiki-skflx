---
title: "High-stakes pediatric and adult sleep airway complications require rapid structured algorithmic emergency rescue"
tier: "Tier VII: Advanced Skeletal & Neuromodulatory Sleep Surgery — HGNS & Maxillomandibular Advancement"
tags:
  - pediatrics
  - emergencies
  - airway-crisis
  - resuscitation
last_revised: 2026-11-09
status: complete
sources:
  - "AtlasESS19, Frontal Sinus Surgery & Ostial Clearance"
aliases:
  - "Airway Crisis Management"
  - "Can't Intubate Can't Oxygenate"
  - "CICO"
  - "Pediatric Airway Rescue"
  - "Emergency Cricothyroidotomy"
---

# High-stakes pediatric and adult sleep airway complications require rapid structured algorithmic emergency rescue

## Active Recall

> [!question]- What is the preferred emergency front-of-neck access (eFONA) technique for an adult in a 'Can't Intubate, Can't Oxygenate' crisis?
> *Answer / Clinical Rationale*: The **scalpel-bougie-tube cricothyroidotomy** technique.

> [!question]- Why is surgical cricothyroidotomy avoided in infants and small children under 8–10 years of age during an airway crisis?
> *Answer / Clinical Rationale*: Because the **cricothyroid membrane is too small ($<3\text{ mm}$)** and the **funnel-shaped larynx makes cricoid cartilage fracture and subglottic stenosis almost inevitable**; needle cricothyroidotomy or emergent tracheostomy is preferred.

## Core Clinical & Mechanistic Principles
Acute loss of the airway following pediatric airway reconstruction or adult sleep surgery represents the highest-stakes emergency in Otolaryngology:
- **The "Can't Intubate, Can't Oxygenate" (CICO) Algorithm**:
  1. **Immediate Multi-Handbag Ventilation with 100% O2**: Two-person bag-valve-mask with oral airway and jaw thrust; elevate head of bed.
  2. **Supraglottic Airway (LMA)**: Insert second-generation laryngeal mask airway (LMA) as a temporary oxygenation rescue conduit.
  3. **Video Laryngoscopy / Rigid Bronchoscopy**: Attempt direct visualization with Glidescope or rigid ventilating bronchoscope.
  4. **Emergency Front-of-Neck Access (eFONA)**:
     - **Adults & Older Children**: **Scalpel-Bougie-Tube Cricothyroidotomy** (horizontal stab through cricothyroid membrane $\r\r\rightarrow$ insert bougie $\r\r\rightarrow$ railroad 6.0 cuffed ETT).
     - **Infants & Small Children ($<8\text{–}10\text{ Years}$)**: Cricothyroid membrane is too small ($<3\text{ mm}$) and high; **needle cricothyroidotomy with jet ventilation** or **emergent open tracheostomy** is mandatory.
- **Specific Sleep Surgery Postoperative Crises**:
  - **TORS Tongue Base Hematoma**: Rapid expanding tongue swelling; release transoral sutures $\r\r\rightarrow$ immediate rigid intubation or awake fiberoptic intubation $\r\r\rightarrow$ emergent tracheostomy.
  - **Post-T&A Bleed**: RSI with two working suctions and immediate blood transfusion.

```mermaid
%% CICO Airway Crisis and eFONA Emergency Rescue Protocol
flowchart TD
  N1(["Can't Intubate, Can't Oxygenate (CICO) Airway Emergency in Post-Surgical Patient"]) --> N3["Step 1: Two-Person BVM with 100% FiO2 + Dual Oral Airways + Esmarch Jaw Thrust"]
  N3 -->|"Persistent Hypoxia / Desaturation"| N5["Step 2: Insert 2nd-Generation Laryngeal Mask Airway (LMA) as Rescue Oxygenation Conduit"]
  N5 -->|"LMA Fails / Cannot Oxygenate"| N6{"Step 3: Emergency Front-of-Neck Access (eFONA)"}
  N6 -->|"Adults & Older Children (>8-10 Years)"| N7["Scalpel-Bougie-Tube Cricothyroidotomy: Transverse Stab Through CTM"]
  N7 --> N9A["Advance Gum-Elastic Bougie Into Trachea"]
  N9A --> N9(["Railroad 6.0 Cuffed Endotracheal Tube & Confirm EtCO2"])
  N6 -->|"Infants & Small Children (<8-10 Years)"| N10["PROSCRIPTION: Avoid Open Cricothyroidotomy (CTM <3 mm Risks Cricoid Fracture & SGS)"]
  N10 --> N8{"Pediatric Rescue Modality"}
  N8 -->|"Percutaneous Bridge"| N11(["14G/16G Catheter-over-Needle Cricothyroidotomy + Transtracheal Jet Ventilation"])
  N8 -->|"Definitive Surgical Airway"| N12(["Immediate Emergent Open Tracheostomy Over Rigid Ventilating Bronchoscope"])
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10,N11,N12 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N7,N9A,N9 red
  classDef yellow fill:#fef9c3,stroke:#ca8a04,color:#713f12
  class N5 yellow
```

### Surgical Technique & Critical Safety Checks
- **Bedside Safety Mandate**: Every post-airway reconstruction patient must have a tracheostomy tray, tracheal hook, Trousseau dilator, and spare tracheostomy tubes at the bedside (see [[Postoperative airway management in sleep surgery requires continuous pulse oximetry and avoidance of oversedation|Postoperative Airway]]).

## Connected Concepts & Graph Traversal
- **Postoperative Airway**: [[Postoperative airway management in sleep surgery requires continuous pulse oximetry and avoidance of oversedation|Postoperative Airway]]
- **Severe Tonsil Bleed**: [[Severe secondary post-tonsillectomy hemorrhage requires urgent airway stabilization and surgical electrocautery|Severe Tonsil Bleed]]
- **Tracheostomy in OSA**: [[Tracheostomy provides immediate definitive relief for severe life-threatening refractory obstructive sleep apnea|Tracheostomy in OSA]]
- **Embryological & Sleep Foundation**: [[Low arousal threshold causes premature awakening before airway stabilization in obstructive sleep apnea]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[High-risk pediatric criteria mandate overnight inpatient admission following adenotonsillectomy]]
- **Congenital Airway Pathology**: [[Congenital subglottic stenosis results from incomplete recanalization of the laryngeal lumen during embryogenesis]]
- **Open Airway Reconstruction**: [[Anterior costal cartilage grafts expand the thyroid and cricoid cartilage framework]]
