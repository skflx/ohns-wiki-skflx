---
title: "Inclusion criteria for hypoglossal nerve stimulation include BMI less than thirty-five and absence of complete concentric collapse"
tier: "Tier VII: Advanced Skeletal & Neuromodulatory Sleep Surgery — HGNS & Maxillomandibular Advancement"
tags:
  - pediatrics
  - sleep-surgery
  - hgns-candidacy
  - fda-criteria
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Pediatric Otolaryngology Core Principles"
aliases:
  - "HGNS Inclusion Criteria"
  - "Inspire Candidacy"
  - "BMI Cutoff HGNS"
  - "DISE Screening HGNS"
---

# Inclusion criteria for hypoglossal nerve stimulation include BMI less than thirty-five and absence of complete concentric collapse

## Active Recall

> [!question]- What is the standard BMI cutoff threshold for hypoglossal nerve stimulation?
> *Answer / Clinical Rationale*: A **$\text{BMI} \le 35\text{ kg/m}^2$** (with expanded criteria allowing up to $40\text{ kg/m}^2$).

> [!question]- What is the maximum percentage of central/mixed apneas permitted for HGNS candidacy?
> *Answer / Clinical Rationale*: Central and mixed apneas must comprise **$<25\%$ of the total AHI**.

## Core Clinical & Mechanistic Principles
The FDA-approved and clinical practice guidelines define precise patient selection criteria for [[Hypoglossal nerve stimulation HGNS activates the medial branch of CN XII to advance the tongue during inspiration|Hypoglossal Nerve Stimulation]] (HGNS):
- **Core Adult Candidacy Criteria**:
  1. **Moderate-to-Severe OSA on Diagnostic PSG**:
     - **Apnea-Hypopnea Index (AHI) between $15\text{ and }65\text{ events/hour}$** (expanded in 2023 up to $\text{AHI } 100$ in select guidelines).
  2. **Central / Mixed Apnea Component $<25\%$**:
     - Central apneas must account for $<25\%$ of the total AHI (HGNS cannot treat central respiratory drive failure).
  3. **Body Mass Index (BMI) Threshold**:
     - **$\text{BMI} \le 35\text{ kg/m}^2$** (or $\le 40\text{ kg/m}^2$ in expanded 2023 labeling). Higher BMI correlates with severe [[Expansion sphincter pharyngoplasty ESP rotates the palatopharyngeus muscle to stabilize lateral pharyngeal wall collapse|lateral pharyngeal wall collapse]] that overcomes tongue protrusion.
  4. **CPAP Failure or Intolerance**: Documented inability to tolerate CPAP ($>4$ hours/night on $\ge 70\%$ of nights).
  5. **Absence of Complete Concentric Collapse (CCC)**:
     - Mandatory pre-implantation **[[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy]] (DISE)** confirming the absence of complete concentric collapse at the soft palate / velum.
- **Pediatric Indications (Down Syndrome Cohort)**:
  - FDA-approved for adolescents with **Down syndrome (ages 13–18)** with persistent severe OSA ($\text{AHI } 10\text{–}50$) post-[[Adenotonsillectomy is the first-line surgical treatment for pediatric obstructive sleep apnea|adenotonsillectomy]] and $\text{BMI} \le 95\text{th percentile}$.

```mermaid
%% Hypoglossal Nerve Stimulation Candidacy Screening Protocol
flowchart TD
  N1(["Patient with Moderate-to-Severe OSA Refractory / Intolerant to CPAP Therapy"]) --> N2{"FDA HGNS Candidacy Checklist"}
  N2 --> N3["1. Diagnostic PSG: AHI 15 to 65 events/hr (Expanded up to 100 events/hr)"]
  N2 --> N4["2. Central / Mixed Apneas MUST Comprise <25% of Total AHI"]
  N2 --> N5["3. Body Mass Index (BMI): <=35 kg/m2 (Expanded labeling allows up to 40 kg/m2)"]
  N2 --> N6["4. Pediatric / Down Syndrome: Age 13-18, AHI 10-50 Post-T&A, BMI <=95th %ile"]
  N2 --> N7{"Step 5: Mandatory Pre-Implantation DISE Protocol"}
  N7 -->|"Anteroposterior / Lateral Tongue Collapse Present"| N8{"Approved Pathway"}
  N7 -->|"Complete Concentric Collapse (CCC) at Velum Level"| N9{"Contraindication Pathway"}
  N8 --> N10["ALL FDA CRITERIA SATISFIED -> Proceed to 3-Incision HGNS Implantation"]
  N8 --> N11["Medial CN XII Cuff + Intercostal Sensing Lead + Subclavicular IPG"]
  N9 --> N12["FATAL PREDICTOR OF SURGICAL FAILURE (<20% Response Rate)"]
  N9 --> N13["Contraindicated for HGNS -> Triage to Lateral Splinting Pharyngoplasty / MMA"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N6 blue
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3,N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10,N11 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N12,N13 red
  classDef yellow fill:#fef9c3,stroke:#ca8a04,color:#713f12
  class N5 yellow
```

### Surgical Technique & Critical Safety Checks
- **Contraindications**: Implantable pacemakers/defibrillators (unless MRI/sensing compatible), active pregnancy, neuromuscular disease, and anatomical retrognathia requiring skeletal reconstruction.

## Connected Concepts & Graph Traversal
- **HGNS Overview**: [[Hypoglossal nerve stimulation HGNS activates the medial branch of CN XII to advance the tongue during inspiration|HGNS Overview]]
- **Concentric Collapse**: [[Concentric velopharyngeal collapse on DISE is a contraindication to hypoglossal nerve stimulation|Concentric Collapse]]
- **HGNS Cuff Placement**: [[The stimulation cuff is placed selectively around the medial branch of the hypoglossal nerve to exclude retractor fibers|HGNS Cuff Placement]]
- **Embryological & Sleep Foundation**: [[Adult polysomnography criteria define obstructive sleep apnea severity by apnea-hypopnea index thresholds of five, fifteen, and thirty]]
- **Adenotonsillar & Endoscopic DISE**: [[Nasal steroid sprays and montelukast provide medical therapy for mild pediatric sleep-disordered breathing]]
- **Congenital Airway Pathology**: [[Type I through Type IV laryngeal clefts represent congenital tracheoesophageal communication defects]]
- **Open Airway Reconstruction**: [[Anterior costal cartilage grafts expand the thyroid and cricoid cartilage framework]]
