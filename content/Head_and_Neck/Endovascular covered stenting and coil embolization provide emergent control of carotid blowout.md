---
title: "Endovascular covered stenting and coil embolization provide emergent control of carotid blowout"
tier: "Tier II: Comprehensive Cervical Lymphadenectomy (Neck Dissection Mastercraft)"
tags:
  - head-and-neck
  - interventional-radiology
  - carotid-blowout
  - endovascular
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Endovascular Stenting"
  - "Carotid Coiling"
  - "Endovascular Carotid Salvage"
---

# Endovascular covered stenting and coil embolization provide emergent control of carotid blowout

## Active Recall

> [!question]- What is the main advantage of a covered stent over permanent coil embolization in carotid blowout?
> *Answer / Clinical Rationale*: It achieves immediate hemostasis while **preserving cerebral perfusion through the internal carotid artery**, avoiding acute stroke.

> [!question]- What is the major long-term risk of covered stent placement in an irradiated neck with an active salivary fistula?
> *Answer / Clinical Rationale*: **Stent graft infection and recurrent hemorrhage**.

## Core Clinical & Mechanistic Principles
Endovascular intervention has largely replaced emergent open surgical ligation as the first-line treatment for [[Carotid blowout syndrome is classified into threatened, impending, and acute hemorrhage|Carotid Blowout Syndrome]] (CBS):
- **Diagnostic Angiography**: Rapidly identifies the bleeding site, pseudoaneurysm formation, arterial wall irregularity, or extravasation from the common, internal, or external carotid artery branches.
- **Treatment Modalities**:
  1. **Permanent Vessel Occlusion (PVO) / Coil Embolization**:
     - *Indication*: Rupture of the External Carotid Artery (ECA) branches or ICA rupture in patients with adequate collateral intracranial cross-filling.
     - *Technique*: Endovascular coiling of the pseudoaneurysm and parent vessel trap (distal and proximal to the blowout).
     - *Balloon Test Occlusion (BTO)*: Evaluates circle of Willis cross-flow before sacrificing the ICA; if patient fails BTO, vessel sacrifice causes massive ischemic stroke ($15\text{–}20\%$ stroke risk even if passed).
  2. **Endovascular Covered Stent Placement**:
     - *Indication*: Rupture or pseudoaneurysm of the Common Carotid Artery (CCA) or Internal Carotid Artery (ICA) when vessel preservation is mandatory.
     - *Mechanism*: Deploys a self-expanding PTFE-covered stent across the defect, immediately excluding the rupture while maintaining cerebral perfusion.

```mermaid
%% Endovascular Modality Selection in Carotid Blowout
flowchart TD
  N1(["Emergency Catheter Angiography Confirms Extravasation"]) --> N2{"Vessel Identity & Circle of Willis Cross-Flow"}
  N2 -->|"ECA Branch (Lingual / Facial / Maxillary)"| N3["Selective Micro-Coiling / Gelfoam / Onyx Embolization"]
  N2 -->|"ICA / CCA with Robust Contralateral Cross-Flow (BTO Passed)"| N4["Parent Vessel Coiling / Amplatzer Vascular Plug Trapping"]
  N2 -->|"ICA / CCA with Inadequate Collateral Cross-Flow (BTO Failed)"| N5["Self-Expanding PTFE-Covered Stent-Graft Placement"]
  N5 --> N6["Maintains Ipsilateral Cerebral Perfusion"]
  N5 --> N7["Saliva / Radiation Wound Infection Risk (15-20%)"]
  N7 --> N8["Planned Reconstructive Vascularized Muscle Flap Coverage"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3,N4 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8 red
```

### Surgical Technique & Critical Safety Checks
- **Complications of Covered Stents**: High rate of late stent infection ($15\text{–}20\%$) and re-bleeding in infected/irradiated fields; long-term antiplatelet therapy required.

## Connected Concepts & Graph Traversal
- **Classification & Staging**: [[Carotid blowout syndrome is classified into threatened, impending, and acute hemorrhage|Carotid Blowout Syndrome Staging]]
- **Bedside Resuscitation Algorithm**: [[Carotid blowout syndrome management includes throat packing, endovascular embolization, and carotid stenting|Carotid Blowout Management Protocol]]
- **Sentinel Bleed Workup**: [[Sentinel bleeding in head and neck cancer patients requires urgent CT angiography to evaluate for threatened carotid blowout|Sentinel Bleed & CTA Evaluation]]
- **Vascularized Muscle Coverage**: [[Pectoralis major muscle flap reinforcement prevents pharyngocutaneous fistula in salvage laryngectomy|Pectoralis Major Coverage]]
- **Radiation Vasculopathy**: [[Post-radiation carotid vasculopathy and osteoradionecrosis represent severe late radiotherapy sequelae|Late Radiation Vasculopathy]]
- **TORS Vascular Proximity**: [[TORS radical tonsillectomy requires careful identification of the internal carotid artery posterolaterally|TORS Internal Carotid Proximity]]
