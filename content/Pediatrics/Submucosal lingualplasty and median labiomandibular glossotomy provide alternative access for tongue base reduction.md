---
title: "Submucosal lingualplasty and median labiomandibular glossotomy provide alternative access for tongue base reduction"
tier: "Tier VI: Adult Sleep Apnea, Positional Therapy, Oral Appliances & Soft Tissue Sleep Surgery"
tags:
  - pediatrics
  - sleep-surgery
  - lingualplasty
  - mandibulotomy
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch39, p.741"
aliases:
  - "Submucosal Lingualplasty"
  - "Median Labiomandibular Glossotomy"
  - "Tongue Base Excision"
  - "SMILE Procedure"
---

# Submucosal lingualplasty and median labiomandibular glossotomy provide alternative access for tongue base reduction

## Active Recall

> [!question]- What is the main advantage of the submucosal lingualplasty (SMILE) procedure over open mucosal resection?
> *Answer / Clinical Rationale*: It **preserves the dorsal tongue mucosa and taste buds**, reducing postoperative pain, bleeding, and long-term dysphagia.

> [!question]- When is a median labiomandibular glossotomy indicated for sleep apnea surgery?
> *Answer / Clinical Rationale*: In patients with **severe retrognathia or trismus where transoral robotic or endoscopic access is impossible**.

## Core Clinical & Mechanistic Principles
When robotic instrumentation is unavailable or when severe micrognathia/trismus prevents transoral robotic access, alternative surgical approaches provide access for tongue base reduction:
- **Submucosal Minimally Invasive Lingual Excision (SMILE / Chabolle Lingualplasty)**:
  - An anterior transoral approach through the dorsal tongue mucosa.
  - Elevates a mucosal flap, debulks the underlying midline genioglossus and hyoglossus muscle cores using ultrasound or radiofrequency, and resutures the intact mucosal flap.
  - *Advantage*: Preserves mucosal taste buds and sensory innervation, reducing postoperative bleeding and pain.
- **Median Labiomandibular Glossotomy (Trotter Approach)**:
  - Indicated for massive tongue base hypertrophy in severe retrognathic patients where transoral access is completely impossible.
  - **Surgical Execution**:
    1. Midline lip-split incision.
    2. Midline mandibular osteotomy (stepped or chevron osteotomy between central incisors).
    3. Split the tongue in the exact midline raphe back to the epiglottis.
    4. Resect massive bilateral tongue base cores under direct 3D visual control.
    5. Reconstruct tongue with layered sutures and fix the mandible with **rigid titanium miniplates**.

```mermaid
%% NonRobotic Tongue Base Reduction Protocol
flowchart TD
  N1(["Severe Base of Tongue OSA: Inadequate Robotic / Endoscopic Transoral Exposure"]) --> N2{"Alternative Surgical Approach Stratification"}
  N2 -->|"Transoral Access Feasible (Moderate BOT Hypertrophy)"| N3{"SMILE Pathway"}
  N2 -->|"Severe Micrognathia / Extreme Trismus / Massive BOT Mass"| N4{"Glossotomy Pathway"}
  N3 --> N5["Submucosal Minimally Invasive Lingual Excision (SMILE / Chabolle)"]
  N3 --> N6["Elevate Dorsal Tongue Mucosal Flap -> Debulk Midline Genioglossus Core"]
  N3 --> N7["Re-Approximate Mucosa: Spares Papillae, Taste Buds & Lingual Vessels"]
  N4 --> N8["Median Labiomandibular Glossotomy (Trotter Trans-Symphyseal Access)"]
  N4 --> N9["Midline Lip-Split + Stepped / Chevron Symphyseal Mandibulotomy"]
  N4 --> N10["Split Tongue in Avascular Median Raphe to Hyoid Bone & Epiglottis"]
  N4 --> N11["Excision of Massive BOT Tissue Under Direct 3D High-Exposure Visualization"]
  N4 --> N12["Rigid Titanium Miniplate Mandibular Fixation + Mandatory Tracheostomy"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N6,N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8,N9,N10,N11 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N12 purple
```

### Surgical Technique & Critical Safety Checks
- **Tracheostomy Requirement**: Mandibulotomy approaches mandate temporary protective tracheostomy until tongue swelling resolves (see [[Transoral robotic surgery TORS tongue base reduction debulks lingual tonsil and midline tongue musculature in OSA|TORS Tongue Base]]).

## Connected Concepts & Graph Traversal
- **TORS Tongue Base**: [[Transoral robotic surgery TORS tongue base reduction debulks lingual tonsil and midline tongue musculature in OSA|TORS Tongue Base]]
- **HGNS Stimulation**: [[Hypoglossal nerve stimulation HGNS activates the medial branch of CN XII to advance the tongue during inspiration|HGNS Stimulation]]
- **MMA Advancement**: [[Maxillomandibular advancement MMA advances the skeletal framework by ten to twelve millimeters to expand the upper airway|MMA Advancement]]
- **Embryological & Sleep Foundation**: [[High loop gain causes ventilatory instability and periodic breathing in sleep-disordered breathing]]
- **Adenotonsillar & Endoscopic DISE**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation]]
- **Congenital Airway Pathology**: [[Endoscopic balloon dilation with steroid injection manages early, soft, non-circumferential subglottic stenosis]]
- **Open Airway Reconstruction**: [[Slide tracheoplasty expands complete tracheal rings by oblique division and sliding longitudinal reconstruction]]
