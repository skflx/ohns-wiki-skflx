---
title: "Excluding the branch to the hyoglossus and styloglossus prevents tongue retraction during hypoglossal nerve stimulation"
tier: "Tier VII: Advanced Skeletal & Neuromodulatory Sleep Surgery — HGNS & Maxillomandibular Advancement"
tags:
  - pediatrics
  - sleep-surgery
  - hgns-retractors
  - antagonistic-muscles
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch21, p.394"
aliases:
  - "Excluding Retractor Fibers"
  - "Hyoglossus Exclusion"
  - "Styloglossus Branch"
  - "Tongue Antagonism"
---

# Excluding the branch to the hyoglossus and styloglossus prevents tongue retraction during hypoglossal nerve stimulation

## Active Recall

> [!question]- What two muscles are the primary tongue retractors that must be excluded from the HGNS stimulation cuff?
> *Answer / Clinical Rationale*: The **hyoglossus muscle** and the **styloglossus muscle**.

> [!question]- What adverse physiological effect occurs if tongue retractor nerve fibers are included in the HGNS cuff?
> *Answer / Clinical Rationale*: Electrical stimulation causes **posterior tongue retraction and worsening of upper airway obstruction** during inspiration.

## Core Clinical & Mechanistic Principles
The success of [[Hypoglossal nerve stimulation HGNS activates the medial branch of CN XII to advance the tongue during inspiration|hypoglossal nerve stimulation]] depends strictly on separating the **tongue protractor muscles** from the **antagonistic tongue retractor muscles**:
- **The Two Functional Muscle Groups**:
  1. **Tongue Protractor (Airway Dilator)**:
     - **Genioglossus Muscle**: Innervated by the **medial branch of CN XII**. Contraction drives the tongue forward and downward, pulling the tongue base out of the retroglossal space.
  2. **Tongue Retractors (Airway Occluders)**:
     - **Hyoglossus Muscle** (pulls tongue inferiorly and posteriorly) and **Styloglossus Muscle** (pulls tongue superiorly and posteriorly).
     - Innervated by the **lateral branch (exclusion branch) of CN XII**.
- **The Biophysical Consequence of Inadvertent Retractor Inclusion**:
  - If the lateral branch fibers to the hyoglossus/styloglossus are accidentally enclosed within the stimulation cuff:
    - Electrical stimulation co-activates both protractor and retractor muscles simultaneously.
    - Because the retractor muscles are biomechanically powerful, the tongue **retracts posteriorly during inspiration**, causing **iatrogenic complete airway occlusion** during stimulation!
  - **Operating Room Rule**: If any tongue retraction or lateral curling is observed during intraoperative testing, the cuff must be opened and the lateral branch dissected further away.

```mermaid
%% HGNS Branch Exclusion and Nerve Mapping Protocol
flowchart TD
  N1(["Distal CN XII Bifurcation Mapping for HGNS Placement"]) --> N2{"Step 1: Sub-Mylohyoid Nerve Dissection"}
  N2 -->|"Medial Branch (Inclusion)"| N3["Target: Genioglossus / Geniohyoid (Forward Tongue Protrusion)"]
  N2 -->|"Lateral Branch (Exclusion)"| N4["Hazard: Styloglossus / Hyoglossus (Posterior Tongue Retraction)"]
  N2 --> N5{"Step 2: Intraoperative Stimulation Mapping"}
  N5 --> N6["Micro-Bipolar Stimulator Test (0.1 to 0.5 mA)"]
  N5 -->|"Tongue Retraction Observed"| N7["Re-dissect Lateral Fibers Away from Cuff"]
  N5 -->|"Pure Symmetrical Protrusion"| N8{"Step 3: Final Cuff Locking"}
  N8 --> N9["Lock Tri-Polar Cuff Around Isolated Medial Branch"]
  N8 --> N10["Confirm Dynamic Multi-Vector Pharyngeal Airway Dilation"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N9,N10 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N6 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N4,N7 red
```

### Surgical Technique & Critical Safety Checks
- **Micro-Bipolar Mapping**: A handheld nerve stimulator ($0.1\text{–}0.5\text{ mA}$) is used to individually test each distal nerve twig prior to cuff closure.

## Connected Concepts & Graph Traversal
- **HGNS Cuff Placement**: [[The stimulation cuff is placed selectively around the medial branch of the hypoglossal nerve to exclude retractor fibers|HGNS Cuff Placement]]
- **HGNS Overview**: [[Hypoglossal nerve stimulation HGNS activates the medial branch of CN XII to advance the tongue during inspiration|HGNS Overview]]
- **HGNS Sensing Lead**: [[The respiratory sensing lead is placed between the internal and external intercostal muscles to detect inspiratory effort|HGNS Sensing Lead]]
- **Embryological & Sleep Foundation**: [[First branchial cleft anomalies present as periauricular cysts or sinus tracts parallel to the external auditory canal]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Nasal steroid sprays and montelukast provide medical therapy for mild pediatric sleep-disordered breathing]]
- **Congenital Airway Pathology**: [[Laryngomalacia is the most common cause of congenital pediatric stridor characterized by dynamic supraglottic collapse]]
- **Open Airway Reconstruction**: [[Posterior costal cartilage grafts with a carved flange split the posterior cricoid lamina to expand the glottic lumen]]
