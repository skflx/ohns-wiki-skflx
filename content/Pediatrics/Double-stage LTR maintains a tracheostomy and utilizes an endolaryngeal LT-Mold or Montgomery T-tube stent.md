---
title: "Double-stage LTR maintains a tracheostomy and utilizes an endolaryngeal LT-Mold or Montgomery T-tube stent"
tier: "Tier IV: Advanced Open Airway Reconstruction — LTR, CTR & Slide Tracheoplasty"
tags:
  - pediatrics
  - airway-reconstruction
  - double-stage-ltr
  - endolaryngeal-stent
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Double-Stage LTR"
  - "DSLTR"
  - "LT-Mold Stent"
  - "Montgomery T-Tube"
  - "Aboulker Stent"
---

# Double-stage LTR maintains a tracheostomy and utilizes an endolaryngeal LT-Mold or Montgomery T-tube stent

## Active Recall

> [!question]- What is the standard stenting duration for an LT-Mold stent in double-stage LTR?
> *Answer / Clinical Rationale*: **$4\text{ to }6\text{ weeks}$**.

> [!question]- How is a Monnier LT-Mold endolaryngeal stent secured in position within the pediatric airway?
> *Answer / Clinical Rationale*: Via a **transfixion monofilament suture (2-0 Prolene)** passed through the thyroid cartilage and tied over a **silicone button on the external neck skin**.

## Core Clinical & Mechanistic Principles
**Double-Stage [[Single-stage and double-stage laryngotracheal reconstruction LTR repair mature high-grade subglottic stenosis|Laryngotracheal Reconstruction]] (DSLTR)** provides prolonged, rigid internal scaffolding for complex, unstable, or revision airway reconstructions while maintaining a secure tracheostomy:
- **Indications for Double-Stage LTR**:
  - Severe Myer-Cotton Grade III or IV subglottic stenosis.
  - Extensive posterior glottic stenosis requiring posterior graft and interarytenoid scar release.
  - Revision LTR after prior graft failure or infection.
  - Significant medical comorbidities (pulmonary bronchopulmonary dysplasia, neurological impairment).
- **Endolaryngeal Stenting Options**:
  1. **Monnier LT-Mold (Laryngotracheal Mold)**:
     - Soft silicone stent anatomically molded to the glottic and subglottic contours (triangular glottis, round subglottis).
     - Fixed with a **transcutaneous 2-0 Prolene or nylon mattress suture** through the thyroid cartilage tied over a silicone button on the neck skin.
     - Stenting duration: **$4\text{ to }6\text{ weeks}$**.
  2. **Montgomery T-Tube**:
     - Silicone T-tube where the vertical limb stents the subglottis/trachea and the horizontal limb exits the tracheostomy stoma.
     - Allows spontaneous phonation (plugging horizontal limb) while maintaining airway safety.
     - Stenting duration: **$3\text{ to }12\text{ months}$**.

```mermaid
%% DoubleStage LTR Stenting and Decannulation Protocol
flowchart TD
  N1(["Severe Myer-Cotton Grade III/IV SGS / Glottic Stenosis / Failed Prior LTR"]) --> N3["Step 1: Maintain Dependent Tracheostomy Tube in Situ for Continuous Airway Safety"]
  N3 --> N4["Anterior and/or Posterior Costal Cartilage Graft Expansion of Larynx"]
  N4 --> N5{"Step 2: Endolaryngeal Stent Selection & Fixation"}
  N5 -->|"Monnier LT-Mold Silicone Stent (Anatomic Glottic-Subglottic Contour)"| N7["Transfixion 2-0 Prolene Mattress Suture Through Thyroid Cartilage to External Skin Button"]
  N7 --> N8["Stenting Duration: 4 to 6 Weeks Internal Epithelialization Scaffolding"]
  N5 -->|"Montgomery T-Tube (Long-Term Scaffolding 3-12 Months)"| N10["Vertical Limb Stents Subglottis/Trachea; Horizontal Limb Exits Stoma Allowing Phonation"]
  N8 --> N12["Step 3: Direct Laryngoscopy & Bronchoscopy (DLB) at 4-6 Weeks: Remove Stent & Debride Granulations"]
  N10 --> N12
  N12 --> N13A["Downsize Tracheostomy Tube & Perform Interval Capping Trials"]
  N13A --> N13(["Safe Tracheostomy Decannulation"])
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N8,N10,N13 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7,N12,N13A purple
```

### Surgical Technique & Critical Safety Checks
- **Decannulation Protocol**: After stent removal, interval direct laryngoscopy and bronchoscopy (DLB) is performed at 4–6 weeks; capping trials of the tracheostomy tube are initiated once mature epithelialization and airway stability are confirmed.

## Connected Concepts & Graph Traversal
- **Single-Stage LTR**: [[Single-stage LTR utilizes an endotracheal tube as a temporary stent avoiding tracheostomy placement|Single-Stage LTR]]
- **LTR Reconstruction**: [[Single-stage and double-stage laryngotracheal reconstruction LTR repair mature high-grade subglottic stenosis|LTR Reconstruction]]
- **Posterior Costal Graft**: [[Posterior costal cartilage grafts with a carved flange split the posterior cricoid lamina to expand the glottic lumen|Posterior Costal Cartilage Graft]]
- **Embryological & Sleep Foundation**: [[Critical closing pressure Pcrit stratifies upper airway collapsibility from snorers to severe obstructive sleep apnea]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Severe secondary post-tonsillectomy hemorrhage requires urgent airway stabilization and surgical electrocautery]]
- **Congenital Airway Pathology**: [[Laryngomalacia is the most common cause of congenital pediatric stridor characterized by dynamic supraglottic collapse]]
- **Open Airway Reconstruction**: [[Slide tracheoplasty achieves immediate vascularized mucosal lumen doubling with lowest restenosis rates]]
