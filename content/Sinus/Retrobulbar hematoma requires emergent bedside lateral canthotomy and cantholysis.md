---
title: "Retrobulbar hematoma requires emergent bedside lateral canthotomy and cantholysis"
tier: "Tier III: Primary FESS Step-by-Step Execution"
tags:
  - rhinology
  - emergencies
  - retrobulbar-hematoma
  - lateral-canthotomy
last_revised: 2026-11-09
status: complete
sources:
  - "AtlasESS19, part3_4_revision_orbit"
aliases:
  - "Retrobulbar Hematoma Protocol"
  - "Emergent Lateral Canthotomy and Cantholysis"
  - "Orbital Compartment Syndrome Rescue"
---

# Retrobulbar hematoma requires emergent bedside lateral canthotomy and cantholysis

## Active Recall

> [!question]- Why is obtaining a STAT CT scan strictly contraindicated when an acute retrobulbar hematoma is recognized?
> *Answer / Clinical Rationale*: Irreversible ischemic retinal necrosis occurs within **60–90 minutes**. Delaying decompression to transport the patient to radiology will result in permanent blindness. Lateral canthotomy must be performed immediately.

> [!question]- What critical anatomical structure must be divided after the initial horizontal lateral canthotomy incision to achieve orbital decompression?
> *Answer / Clinical Rationale*: The **inferior crus of the lateral canthal tendon**. Cutting this tendon releases the lower eyelid and periorbital sling, allowing the globe and orbital fat to prolapse forward, decompressing the orbit.

## Core Clinical & Mechanistic Principles
A **retrobulbar hematoma** is an acute surgical emergency causing **orbital compartment syndrome**. In FESS, it most commonly arises from transection and intraorbital retraction of the **anterior ethmoidal artery (AEA)** or injury to the posterior ethmoidal vessels and orbital venous plexus.

Because the orbit is a closed bony cone bounded anteriorly by the rigid tarsoligamentous sling, arterial bleeding rapidly elevates intraocular pressure ($IOP > 40\text{–}50\text{ mmHg}$), exceeding central retinal artery perfusion pressure. This causes irreversible retinal ganglion cell ischemia and **permanent blindness within 60 to 90 minutes**.

```mermaid
%% Retrobulbar Hematoma and Lateral Canthotomy Protocol
flowchart TD
  N1(["Retrobulbar Arterial Bleeding: AEA Retraction / Closed Orbit Compartment"]) --> N3["Tense Proptotic 'Rock-Hard' Globe + RAPD Mydriasis + IOP > 40-50 mmHg"]
  N3 --> N4["CRITICAL 60-90 MINUTE ISCHEMIA WINDOW: DO NOT DELAY FOR CT SCAN"]
  N4 --> N5{"Immediate Decompression & Adjuncts"}
  N5 ==>|"Primary Bedside Surgical Release"| N6["Step 1: Hemostat Clamp Across Lateral Canthus for 30 Seconds"]
  N6 --> N7["Step 2: Full-Thickness Horizontal Lateral Canthotomy (1.0-1.5 cm) to Bony Rim"]
  N7 --> N9["Step 3: Retract Lower Lid & Strum Inferior Crus of Lateral Canthal Tendon"]
  N9 --> N10["Step 4: Transect Inferior Crus ('Twang' Release of Lower Eyelid)"]
  N10 --> N11A["Lower Eyelid Fully Mobilizes & Globe Prolapses Anteriorly"]
  N11A --> N11{"Re-Evaluate Intraocular Pressure"}
  N11 -->|"IOP Normalizes (<25 mmHg)"| N11B(["Retinal Perfusion Restored"])
  N11 -.->|"IOP Remains >30-40 mmHg"| N14(["Superior Cantholysis + Emergent Endoscopic Medial Orbital Wall Decompression"])
  N5 -->|"Simultaneous Medical Adjuncts"| N13["IV Mannitol (1.5-2.0 g/kg) + IV Dexamethasone (10-20 mg) + Topical IOP Drops"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N13 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N7,N11B green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9,N10,N11A purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N4,N14 red
```

### Medical & Surgical Management Hierarchy
1. **Immediate Bedside Canthotomy/Cantholysis**: Must be performed **immediately in the OR or bedside without waiting for imaging or ophthalmology consultation**.
2. **Medical Decompression Adjuncts**:
   - **Intravenous Mannitol**: $1.5\text{–}2.0\text{ g/kg}$ IV over 30 minutes (draws fluid from intraocular compartments).
   - **Intravenous Dexamethasone**: $10\text{–}20\text{ mg}$ IV (reduces optic nerve edema).
   - **Topical IOP Drops**: Timolol 0.5% (beta-blocker) + Brimonidine 0.2% + Dorzolamide 2%.
3. **Secondary Orbital Decompression**: If IOP remains $>30\text{–}40\text{ mmHg}$ after complete cantholysis, perform endoscopic medial orbital wall decompression (resecting [[Draf IIb frontal sinusotomy extends from lamina papyracea to the nasal septum|lamina papyracea]] from orbit apex to lacrimal bone) and open periorbita.

## Connected Concepts & Graph Traversal
- **Vessel Origin**: [[Supraorbital ethmoid cells suspend the anterior ethmoidal artery below the skull base|AEA Mesentery & Injury]]
- **Orbital Danger**: [[Lamina papyracea dehiscence predisposes to orbital fat herniation and medial rectus injury|Lamina Papyracea Dehiscence]]
- **Ligation Technique**: [[The 24-12-6 rule governs anterior and posterior ethmoidal artery surgical localization|AEA Ligation]]
- **Complication Matrix**: [[High-stakes sinonasal complications require proactive landmarking and emergency rescue protocols|High-Stakes Sinonasal Complications]]
- **High-Stakes Safety**: [[Intraoperative ICA injury requires two-surgeon suction and crushed muscle patch hemostasis|Internal Carotid Artery Crisis Protocol]]
- **Anatomical Foundation**: [[Acute invasive fungal rhinosinusitis requires emergent surgical debridement and systemic amphotericin B|Acute Invasive Fungal Rhinosinusitis (AIFRS)]]
- **Surgical Craft**: [[Pituitary apoplexy causes acute chiasmatic compression and life-threatening panhypopituitarism|Pituitary Apoplexy Emergency]]
