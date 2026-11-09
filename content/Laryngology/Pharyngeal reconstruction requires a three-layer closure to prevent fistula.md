---
title: "Pharyngeal reconstruction requires a three-layer closure to prevent fistula"
tier: "Tier VII: Laryngeal Oncology & Conservation Surgery"
tags:
  - laryngology
  - oncology
  - total-laryngectomy
  - pharyngeal-closure
  - pharyngocutaneous-fistula
  - connell-suture
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch8, p.182"
aliases:
  - "Pharyngeal Reconstruction"
  - "Pharyngocutaneous Fistula Prevention"
  - "Three-Layer Pharyngeal Closure"
  - "Pharyngeal reconstruction following total laryngectomy requires a three-layer tension-free closure to prevent pharyngocutaneous fistula"
---

# Pharyngeal reconstruction requires a three-layer closure to prevent fistula

## Active Recall

> [!question]- Why is an inverting Connell stitch utilized for the mucosal layer during pharyngeal reconstruction?
> *Answer / Clinical Rationale*: It inverts the mucosal edges into the pharyngeal lumen, preventing raw mucosal margins from communicating with the deep neck space, which creates a watertight barrier that prevents saliva extravasation and fistula formation.

> [!question]- What is the most critical catastrophic vascular complication of a pharyngocutaneous fistula?
> *Answer / Clinical Rationale*: **Carotid blowout syndrome**; salivary enzymes and infection erode the adventitia of the carotid artery, causing fatal hemorrhage.

## Core Clinical & Mechanistic Principles
Following [[Total laryngectomy achieves en bloc laryngeal resection with permanent end-stoma|Total Laryngectomy]], closing the pharyngeal defect is the critical technical milestone determining whether the patient achieves normal oral feeding or develops a debilitating **Pharyngocutaneous Fistula (PCF)**.

### The Three-Layer Closure Technique
To ensure an airtight, watertight, and tension-free pharyngeal tube, the closure is executed in three distinct anatomical layers:
1. **Layer 1: Mucosal Closure (Inverting Connell Suture)**:
   - Closed in a **"T" or vertical configuration** using continuous running or interrupted inverting **3-0 or 4-0 absorbable sutures (e.g., Vicryl)**.
   - The inverting Connell stitch buries the raw mucosal edges entirely within the pharyngeal lumen, ensuring that raw edges never face the external surgical bed.
2. **Layer 2: Submucosal / Muscularis Reinforcement**:
   - Approximates the inferior constrictor muscle fibers and pharyngeal submucosa over the mucosal line using interrupted 3-0 Vicryl sutures, taking tension off Layer 1.
3. **Layer 3: Fascial & Adventitial Support**:
   - The overlying prevertebral and buccopharyngeal fascial layers or vascularized muscle flaps (e.g., sternocleidomastoid or pectoralis major myofascial flap in salvage/irradiated cases) are closed as a third watertight barrier.

```mermaid
%% Pharyngeal ThreeLayer Closure and Fistula Prevention Protocol
flowchart TD
  N1(["Total Laryngectomy Mucosal Defect Assessment"]) --> N2{"Residual Mucosal Width Stratification"}
  N2 -->|"Width >= 2.5-3.0 cm"| N3{"Three-Layer Primary Watertight Closure"}
  N3 --> N4["Layer 1: Mucosa (Inverting Connell Suture 3-0/4-0 Vicryl; Buries Raw Edges into Lumen)"]
  N3 --> N5["Layer 2: Muscularis (Approximates Inferior Constrictor Over Line with Interrupted 3-0 Vicryl)"]
  N3 --> N6["Layer 3: Fascia / Onlay Flap (Buccopharyngeal Fascia or Vascularized Flap in Salvage Neck)"]
  N2 -->|"Width < 2.5 cm (Excessive Tension / Complete Circumferential Defect)"| N7["Microvascular Free Flap Tubed Reconstruction (ALT or Radial Forearm Free Flap)"]
  N3 --> N8{"Critical Hazard Prevention"}
  N8 -->|"Watertight Seal Prevents Saliva Extravasation"| N9["Prevents Pharyngocutaneous Fistula (PCF)"]
  N8 -->|"Fistula in Irradiated Neck Bathes Exposed Carotid"| N10["CRITICAL HAZARD: Salivary Enzyme Carotid Blowout Syndrome"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N4 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N9 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N10 red
```

## Risk Factors for Pharyngocutaneous Fistula (PCF)
- **Prior Chemoradiation Therapy (Salvage Laryngectomy)**: Microvascular radiation endarteritis reduces mucosal capillary perfusion, dramatically increasing fistula rates to $30\text{–}50\%$ (prompting prophylactic vascularized muscle flap coverage).
- **Excessive Closure Tension**: Attempting primary closure when $<2.5\text{–}3.0\text{ cm}$ of mucosal width remains causes ischemic breakdown and stricture (requires free flap reconstruction, e.g., anterolateral thigh or radial forearm flap).
- **Poor Nutritional Status**: Serum albumin $<3.0\text{ g/dL}$ or prealbumin $<15\text{ mg/dL}$.

## Critical Failure Modes & Error Traps
- **Salivary Leak & Carotid Blowout**: Saliva leaking from an unrecognized PCF bathes the exposed carotid artery in digestive enzymes and oral bacteria, leading to pseudoaneurysm formation and catastrophic carotid artery blowout.

## Connected Concepts & Graph Traversal
- **Parent Surgical Procedure**: [[Total laryngectomy achieves en bloc laryngeal resection with permanent end-stoma|Total Laryngectomy]]
- **Voice Rehabilitation**: [[Tracheoesophageal puncture diverts pulmonary air through a one-way valve into the neopharynx|Tracheoesophageal Puncture (TEP)]]
- **High-Stakes Complication Matrix**: [[High-stakes laryngeal complications require proactive landmarking and rescue protocols|Complication Matrix]]
- **Swallowing Diagnostics**: [[VFSS provides continuous radiographic evaluation of all deglutition phases|Videofluoroscopic Swallow Study (VFSS)]]
- **Clinical Management**: [[Esophageal speech utilizes swallowed air across the PE segment for voicing|Esophageal Speech]]
