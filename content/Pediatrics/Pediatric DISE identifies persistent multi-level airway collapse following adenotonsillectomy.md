---
title: "Pediatric DISE identifies persistent multi-level airway collapse following adenotonsillectomy"
tier: "Tier II: Adenotonsillar Disease, Pediatric OSA & Drug-Induced Sleep Endoscopy (DISE)"
tags:
  - pediatrics
  - sleep-medicine
  - pediatric-dise
  - persistent-osa
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Pediatric Airway & Stridor Evaluation"
aliases:
  - "Pediatric DISE"
  - "Persistent Pediatric OSA"
  - "Surgical Failure OSA"
  - "Multi-Level Pediatric Collapse"
---

# Pediatric DISE identifies persistent multi-level airway collapse following adenotonsillectomy

## Active Recall

> [!question]- What are the two most common anatomical sites of persistent upper airway obstruction identified by DISE in children post-adenotonsillectomy?
> *Answer / Clinical Rationale*: **Lingual tonsil hypertrophy** (40–60%) and **sleep-state laryngomalacia / epiglottic collapse** (30–40%).

> [!question]- Why is DISE particularly valuable in children with Down syndrome and OSA?
> *Answer / Clinical Rationale*: Because Down syndrome patients frequently have **multi-level collapse (macroglossia, hypotonia, laryngomalacia)** that fails standard T&A.

## Core Clinical & Mechanistic Principles
In children with **persistent obstructive sleep apnea following [[Adenotonsillectomy is the first-line surgical treatment for pediatric obstructive sleep apnea|adenotonsillectomy]]** ($15\text{–}25\%$ of general pediatric OSA, $>50\%$ in syndromic/obese children), Pediatric DISE identifies occult non-tonsillar sites of obstruction:
- **Most Common Sites of Persistent Pediatric Collapse on DISE**:
  1. **Lingual Tonsil Hypertrophy ($40\text{–}60\%$)**: Compensatory lymphoid hyperplasia at the tongue base causing severe [[Transoral robotic surgery TORS tongue base reduction debulks lingual tonsil and midline tongue musculature in OSA|retroglossal obstruction]].
  2. **Occult Laryngomalacia / Epiglottic Retroversion ($30\text{–}40\%$)**: Sleep-state dependent prolapse of redundant arytenoid mucosa or a flaccid epiglottis into the laryngeal inlet.
  3. **[[Expansion sphincter pharyngoplasty ESP rotates the palatopharyngeus muscle to stabilize lateral pharyngeal wall collapse|Lateral Pharyngeal Wall Collapse]] ($25\text{–}35\%$)**: Inward collapse of the tonsillar pillars and pharyngeal constrictors.
  4. **Residual / Regrown Adenoid Pad**: Obstructing the posterior choanae.
  5. **Macroglossia & Retrognathia**: Common in Down syndrome and Pierre Robin sequence.
- **Targeted Secondary Interventions Dictated by Pediatric DISE**:
  - Lingual tonsil hypertrophy $\r\r\rightarrow$ **Coblation / TORS Lingual Tonsillectomy**.
  - Sleep-state [[Laryngomalacia is the most common cause of congenital pediatric stridor characterized by dynamic supraglottic collapse|laryngomalacia]] $\r\r\rightarrow$ **[[Endoscopic supraglottoplasty cold-steel and laser division of aryepiglottic folds relieves severe laryngomalacia|Supraglottoplasty]] / [[Partial epiglottectomy and epiglottopexy correct dynamic epiglottic retroversion during inspiration|Epiglottopexy]]**.
  - Lateral wall collapse $\r\r\rightarrow$ **Expansion Pharyngoplasty** or Orthodontic **[[Rapid maxillary expansion widens the hard palate and nasal floor to improve pediatric nasal breathing and OSA|Rapid Maxillary Expansion]] (RME)**.

```mermaid
%% Pediatric DISE Multilevel Mapping Protocol
flowchart TD
  N1(["Persistent Pediatric OSA Post-Adenotonsillectomy / Down Syndrome Evaluation"]) --> N2{"Pediatric Drug-Induced Sleep Endoscopy (DISE)"}
  N2 -->|"Tongue Base / Lingual Tonsil Hypertrophy (40-60%)"| N3["LTH Pathway"]
  N2 -->|"Sleep-State Laryngomalacia / Epiglottic Trapdoor (30-40%)"| N4["Laryngeal Pathway"]
  N2 -->|"Lateral Pharyngeal Wall Collapse (25-35%)"| N5["Lateral Pathway"]
  N2 -->|"Persistent Multi-Level / Down Syndrome OSA (Age >=13)"| N6{"Neuromodulation Pathway"}
  N3 --> N7["Coblation / TORS Lingual Tonsillectomy (Preserve Lingual Neurovascular Bundles)"]
  N4 --> N8["Endoscopic Supraglottoplasty (Divide AE Folds) +/- Glosso-Epiglottopexy"]
  N5 --> N9["Expansion Sphincter Pharyngoplasty (ESP) or Rapid Maxillary Expansion (RME)"]
  N6 --> N10["Hypoglossal Nerve Stimulation (Inspire HGNS) Implantation"]
  N6 --> N11["Advances Genioglossus Synchronously with Inspiration"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N10,N11 red
```

### Surgical Technique & Critical Safety Checks
- **Down Syndrome Cohort**: Children with Trisomy 21 have a $>60\text{–}70\%$ persistence of OSA after T&A; DISE is standard of care before any secondary surgery.

## Connected Concepts & Graph Traversal
- **Lingual Tonsils**: [[Lingual tonsil hypertrophy causes persistent pediatric obstructive sleep apnea and base of tongue collapse|Lingual Tonsils]]
- **Supraglottoplasty**: [[Endoscopic supraglottoplasty cold-steel and laser division of aryepiglottic folds relieves severe laryngomalacia|Supraglottoplasty]]
- **DISE Endoscopy**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|DISE Endoscopy]]
- **Embryological & Sleep Foundation**: [[Loop gain, arousal threshold, and muscle responsiveness represent the non-anatomical endotypes of obstructive sleep apnea]]
- **Adenotonsillar & Endoscopic DISE**: [[Paradise criteria define evidence-based indications for pediatric tonsillectomy in recurrent throat infections]]
- **Congenital Airway Pathology**: [[Recurrent respiratory papillomatosis RRP is driven by HPV six and eleven causing recurrent laryngeal lesions]]
- **Open Airway Reconstruction**: [[Cricotracheal resection CTR achieves primary end-to-end anastomosis for severe Grade III and IV subglottic stenosis]]
