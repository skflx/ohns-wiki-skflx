---
title: "Caustic ingestion injury is graded endoscopically by the Zargar classification within forty-eight hours"
tier: "Tier S: Laryngeal Trauma, Caustic & Foreign Body Emergencies"
tags:
  - laryngology
  - esophagus
  - caustic
  - emergency
  - pediatric
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch7, p.168–169"
aliases:
  - "Caustic Ingestion"
  - "Zargar Classification"
  - "Corrosive Injury"
---

# Caustic ingestion injury is graded endoscopically by the Zargar classification within forty-eight hours

## Active Recall

> [!question]- Why is endoscopy avoided between roughly days five and fifteen?
> *Answer / Clinical Rationale*: Granulation replaces necrotic wall and tensile strength is at its nadir — instrumentation perforates.

> [!question]- Which Zargar grades predict stricture and how does that change disposition?
> *Answer / Clinical Rationale*: IIb and III; they earn nutrition planning, stricture surveillance, and early discussion of dilation programs.

## Core Clinical & Mechanistic Principles
- Chemistry predicts injury: **alkali (pH > 11)** produces liquefactive necrosis that penetrates deep (esophagus-dominant); **acid** produces coagulative eschar (gastric-dominant, though severe acid burns everything); volume, concentration, and intent (adult suicidal ingestions are worse) complete the risk.
- **Zargar grades** at endoscopy (ideally 12-48 hours; avoid days 5-15 when the wall is weakest): 0 normal; I edema/hyperemia; IIa superficial ulceration; IIb deep or circumferential ulceration; IIIa focal necrosis; IIIb extensive necrosis — grade IIb and above drive stricture risk.
- Forbidden reflexes: **no induced emesis, no neutralization, no blind NG placement** — each re-exposes or perforates.
- Late sequelae: strictures (weeks), antral stenosis (acid), and a materially elevated lifetime [[High-resolution manometry classifies achalasia and esophageal motility disorders by the Chicago criteria|esophageal]] carcinoma risk mandating endoscopic surveillance.

```mermaid
%% Caustic Ingestion Zargar Classification and Management Timing
flowchart TD
  N1(["Caustic Ingestion Presentation: Bleach / Lye / Acid Drain Cleaner"]) --> N2{"Chemistry & Mechanism of Tissue Injury"}
  N2 -->|"Alkali (pH >11): Liquefactive Necrosis (Deep Transmural Esophageal Penetration)"| N3["Esophageal Liquefaction & Stricture Predilection"]
  N2 -->|"Acid (pH <2): Coagulative Necrosis (Protective Eschar / Severe Gastric Injury)"| N4["Gastric Antral Stenosis Predilection"]
  N2 --> N5["STRICT FORBIDDEN ACTIONS: No Induced Emesis, No Chemical Neutralization, No Blind NG Tube"]
  N2 --> N6{"Endoscopy Timing: 12-48h Golden Window (AVOID Days 5-15 Nadir Tensile Strength)"}
  N6 -->|"Grade 0 / I (Normal / Hyperemia Only)"| N7["Early Oral Feedings + Discharge"]
  N6 -->|"Grade IIa (Superficial Ulceration, Friable Mucosa)"| N8["Supportive Care, Soft Diet, Low Stricture Risk (<5%)"]
  N6 -->|"Grade IIb (Deep Circumferential Ulceration)"| N9["High Stricture Risk (70-80%): IV Fluids, Enteral Tube Placement, Stricture Surveillance"]
  N6 -->|"Grade IIIa/IIIb (Focal vs Extensive Transmural Necrosis)"| N10["Severe Perforation/Stricture Risk (>90%): ICU Resuscitation, Repeat CT, Urgent Thoracotomy/Laparotomy if Perforated"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7,N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N5 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9,N10 red
```

### Management & Critical Safety Checks
- Acute algorithm: airway first (drooling/stridor → early controlled airway), NPO, IV resuscitation, cross-sectional imaging if perforation suspected, endoscopy in the window for grading and disposition; steroids only in selected IIb (evidence mixed) — antibiotics with steroids or perforation.
- Stricture era: serial dilations starting after the acute phase; refractory long-segment disease becomes esophageal replacement territory.

## Connected Concepts & Graph Traversal
- **Esophageal Motility Evaluation**: [[High-resolution manometry classifies achalasia and esophageal motility disorders by the Chicago criteria|High-Resolution Manometry]]
- **Airway Dilation Rescue**: [[Endoscopic airway dilation combines radial incisions with balloon bronchoplasty|Endoscopic Airway Dilation]]
- **Penetration/Aspiration Scale**: [[The Rosenbek Scale standardizes the depth of airway penetration and aspiration|Rosenbek Penetration-Aspiration Scale]]
- **Emergency Airway Protocol**: [[Total laryngectomy stomas and tracheostomies require distinct emergency airway resuscitation algorithms|Airway Resuscitation Protocols]]
- **Reflux Complications**: [[Active reflux and eosinophilic esophagitis compromise airway graft survival|Reflux & Esophagitis]]
