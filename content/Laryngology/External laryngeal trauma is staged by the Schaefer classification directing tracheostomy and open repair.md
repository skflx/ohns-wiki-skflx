---
title: "External laryngeal trauma is staged by the Schaefer classification directing tracheostomy and open repair"
tier: "Tier S: Laryngeal Trauma, Caustic & Foreign Body Emergencies"
tags:
  - laryngology
  - trauma
  - airway
  - emergency
  - schaefer
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, Ch7, p.166–167"
aliases:
  - "Laryngeal Trauma"
  - "Schaefer Classification"
  - "Laryngeal Fracture"
---

# External laryngeal trauma is staged by the Schaefer classification directing tracheostomy and open repair

## Active Recall

> [!question]- Why is orotracheal intubation specifically dangerous in suspected laryngotracheal separation?
> *Answer / Clinical Rationale*: The tube can convert partial separation to complete, pass into a false passage, and destroy the remaining airway — awake tracheostomy below the injury is the doctrine.

> [!question]- Which findings promote a Schaefer II to a III?
> *Answer / Clinical Rationale*: Exposed cartilage in a mucosal tear, a displaced fracture, or vocal fold immobility — each mandates open repair rather than observation.

## Core Clinical & Mechanistic Principles
- **Schaefer groups**: I minor hematoma/laceration without fracture; II edema/hematoma or minor mucosal disruption without exposed cartilage, nondisplaced fracture; III massive edema, mucosal tears with exposed cartilage, displaced fracture, or cord immobility; IV group III with two or more fracture lines or anterior commissure/massive instability; V complete laryngotracheal separation.
- Hard warning signs: subcutaneous emphysema, loss of laryngeal landmarks/crepitus, hemoptysis, dysphonia-to-aphonia progression, stridor — a deceptively comfortable patient can occlude within hours as edema matures.
- **Airway doctrine: awake [[Standard open tracheotomy utilizes horizontal intersinusoidal or Bjork flap entry|tracheostomy]] under local** for unstable groups; endotracheal intubation risks completing a partial laryngotracheal separation or creating false passage — the tube is the enemy of the fractured larynx.
- Sequence: secure airway → flexible laryngoscopy → CT (only in the stable) → panendoscopy with esophagoscopy (concomitant esophageal injury travels with penetrating and high-energy blunt trauma).

```mermaid
%% Schaefer Laryngeal Trauma Classification and Airway Algorithm
flowchart TD
  N1(["Blunt / Penetrating Anterior Neck Trauma: Stridor, Hoarseness, Crepitus"]) --> N2{"Airway Stability Assessment"}
  N2 -->|"Acute Respiratory Distress / Impending Occlusion"| N3["AWAKE Local Tracheostomy (NO Blind Orotracheal Intubation / False Tract)"]
  N2 -->|"Stable Patient Without Distress"| N4["Flexible Fiberoptic Laryngoscopy + Fine-Cut CT Larynx"]
  N2 --> N5{"Schaefer Trauma Group Stratification on CT / Endoscopy"}
  N5 -->|"Group I: Minor Endolaryngeal Hematoma / No Fracture"| N6["Medical Management: Bedrest, Humidified O2, IV Steroids, Voice Rest"]
  N5 -->|"Group II: Moderate Edema, Non-Displaced Fracture, No Exposed Cartilage"| N7["24h ICU Observation +/- Airway Protection"]
  N5 -->|"Group III: Massive Edema, Displaced Fracture, Exposed Cartilage, Cord Immobility"| N8["Open Exploration & Rigid Fixation within 24-48h + Mucosal Closure"]
  N5 -->|"Group IV: Comminuted Framework (>2 Fracture Lines), Anterior Commissure Disruption"| N9["Open Reduction Internal Fixation + Endolaryngeal Keel / Silicone Stent"]
  N5 -->|"Group V: Complete Laryngotracheal Separation (Torn Cricotracheal Membrane)"| N10["Emergency Awake Low Trach + Direct End-to-End Cricotracheal Anastomosis"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N7 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4,N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N3,N9 red
```

### Management & Critical Safety Checks
- Groups I-II: humidified air, head elevation, steroids, reflux prophylaxis, serial exams. Groups III-V: **open exploration and repair within 24-48 hours** — mucosal closure, fracture fixation (miniplates), stenting only for anterior commissure disruption or unstable frameworks (group IV-V).
- Late repair is the enemy of voice and airway: granulation, stenosis, and fixed cords are the price of delay.

## Connected Concepts & Graph Traversal
- **Airway Fire & Safety**: [[Airway fire prevention requires FiO2 below 30 percent and laser-safe tubes|Airway Fire Safety]]
- **Open Tracheostomy Rescue**: [[Open tracheostomy provides superior exposure and stay suture placement compared to percutaneous technique|Open Tracheostomy]]
- **Cricoarytenoid Dislocation**: [[The cricoarytenoid joint moves via coupled rocking and sliding|Cricoarytenoid Joint]]
- **Broyles Ligament Avulsion**: [[Broyles' ligament anchors the vocal ligament to thyroid cartilage|Broyles' Ligament]]
- **High-Stakes Rescue**: [[High-stakes laryngeal complications require proactive landmarking and rescue protocols|Laryngeal Rescue Protocols]]
