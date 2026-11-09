---
title: "Partial epiglottectomy and epiglottopexy correct dynamic epiglottic retroversion during inspiration"
tier: "Tier VI: Adult Sleep Apnea, Positional Therapy, Oral Appliances & Soft Tissue Sleep Surgery"
tags:
  - pediatrics
  - sleep-surgery
  - epiglottopexy
  - epiglottic-collapse
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Epiglottopexy"
  - "Partial Epiglottectomy"
  - "Epiglottic Retroversion"
  - "Trapdoor Epiglottis"
---

# Partial epiglottectomy and epiglottopexy correct dynamic epiglottic retroversion during inspiration

## Active Recall

> [!question]- Why is CPAP often ineffective and poorly tolerated in patients with primary trapdoor epiglottic collapse?
> *Answer / Clinical Rationale*: Because positive airway pressure **pneumatically pushes the flaccid epiglottis downward directly onto the vocal cords**, worsening airway obstruction.

> [!question]- What anatomical portion of the epiglottis must be strictly preserved during partial epiglottectomy to prevent aspiration?
> *Answer / Clinical Rationale*: The **lower petiole and lower half of the epiglottis**.

## Core Clinical & Mechanistic Principles
Dynamic **epiglottic collapse (epiglottic retroversion / trapdoor epiglottis)** is identified on [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|DISE]] in **$15\text{–}25\%$ of adult OSA patients** and is a frequent cause of CPAP intolerance:
- **Two Distinct Epiglottic Collapse Mechanisms on DISE**:
  1. **Primary (Isolated) Epiglottic Malacia**: The epiglottis is flaccid, curling, or excessively long, folding backward like a trapdoor over the glottic aperture during inspiration. (CPAP exacerbates this by pushing the epiglottis further down onto the larynx).
  2. **Secondary Epiglottic Collapse**: The tongue base retroverts and mechanically pushes a normal epiglottis backward into the glottis.
- **Surgical Correction Modalities**:
  - **Partial (V-Shaped) Epiglottectomy**:
    - Performed transorally using CO2 laser, KTP laser, or microdebrider.
    - Resects the **upper one-third to one-half of the free epiglottic edge in a wedge/chevron shape**, widening the glottic inlet while preserving the lower petiole and laryngeal protection.
  - **Endoscopic Epiglottopexy / Glosso-Epiglottopexy**:
    - Indicated when epiglottic cartilage is healthy but lacks anterior support.
    - De-epithelialize the **lingual surface of the epiglottis and the opposing vallecular / base of tongue mucosa** with CO2 laser or Coblation.
    - Place 2–3 transoral mucosal/cartilage sutures to pexy the epiglottis anteriorly against the tongue base, preventing backward collapse.

```mermaid
%% Epiglottic Collapse and Surgical Correction Protocol
flowchart TD
  N1(["DISE Finding: Dynamic Inspiratory Epiglottic Retroversion / CPAP Intolerance"]) --> N2{"Epiglottic Collapse Phenotype Differentiation"}
  N2 -->|"Primary Isolated Epiglottic Malacia (Trapdoor Curling)"| N3{"Primary Malacia Pathway"}
  N2 -->|"Secondary Epiglottic Collapse (Tongue Base Retroversion)"| N4{"Secondary Push Pathway"}
  N3 --> N5["Flaccid / Elongated Epiglottis Folds Inward on Inspiration (CPAP Worsens)"]
  N3 --> N6["SURGERY: Endoscopic V-Shaped Partial Epiglottectomy (CO2 / KTP Laser)"]
  N3 --> N7["Resect Upper 1/3 to 1/2 of Free Epiglottic Margin in Chevron Pattern"]
  N3 --> N8{"CRITICAL PETIOLE PRESERVATION MANDATE"}
  N8 --> N9["ABSOLUTE RULE: Preserve Lower Petiole & Supra-Anterior Commissure Tissue"]
  N8 --> N10["Prevents Incompetence of Laryngeal Vestibule & Intractable Aspiration"]
  N4 --> N11["Bulky Tongue Base Pushes Epiglottis Backwards into Larynx"]
  N4 --> N12["SURGERY: Endoscopic Glosso-Epiglottopexy +/- TORS Lingual Tonsillectomy"]
  N4 --> N13["De-Epithelialize Lingual Epiglottis & Vallecula -> Suture Inset to Tongue Base"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N7,N12,N13 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9,N10 red
  classDef yellow fill:#fef9c3,stroke:#ca8a04,color:#713f12
  class N11 yellow
```

### Surgical Technique & Critical Safety Checks
- **Aspiration Safety**: Resecting the upper free margin does not impair deglutition; however, **resecting the lower petiole destroys laryngeal closure and causes intractable aspiration**.

## Connected Concepts & Graph Traversal
- **VOTE Classification**: [[VOTE classification standardizes drug-induced sleep endoscopy findings across velum, oropharynx, tongue base, and epiglottis|VOTE Classification]]
- **Hyoid Suspension**: [[Hyoid suspension thyrohyoidopexy anchors the hyoid bone to the thyroid cartilage to stabilize the hypopharynx|Hyoid Suspension]]
- **TORS Tongue Base**: [[Transoral robotic surgery TORS tongue base reduction debulks lingual tonsil and midline tongue musculature in OSA|TORS Tongue Base]]
- **Embryological & Sleep Foundation**: [[The Starling resistor model explains upper airway collapsibility and critical closing pressure Pcrit]]
- **Adenotonsillar & Endoscopic DISE**: [[Paradise criteria define evidence-based indications for pediatric tonsillectomy in recurrent throat infections]]
- **Congenital Airway Pathology**: [[Microdebrider debulking and intralesional cidofovir provide surgical and adjuvant control of RRP]]
- **Open Airway Reconstruction**: [[Slide tracheoplasty expands complete tracheal rings by oblique division and sliding longitudinal reconstruction]]
