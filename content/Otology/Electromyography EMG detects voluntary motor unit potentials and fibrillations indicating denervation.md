---
title: "Electromyography EMG detects voluntary motor unit potentials and fibrillations indicating denervation"
tier: "Tier VI: Facial Nerve Disorders, Decompression, Neuroma & Reanimation"
tags:
  - otology
  - facial-nerve
  - emg
  - electromyography
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch21, p.373"
aliases:
  - "Electromyography"
  - "EMG"
  - "Fibrillation Potentials"
  - "Polyphasic Potentials"
  - "Voluntary Motor Units"
---

# Electromyography EMG detects voluntary motor unit potentials and fibrillations indicating denervation

## Active Recall

> [!question]- What does the presence of voluntary motor unit action potentials (MUAPs) on needle EMG indicate in a clinically paralyzed face?
> *Answer / Clinical Rationale*: It indicates **intact axonal continuity (neurapraxia)**, predicting excellent spontaneous functional recovery.

> [!question]- How long after an acute nerve injury do fibrillation potentials of denervation appear on EMG?
> *Answer / Clinical Rationale*: **$14\text{ to }21\text{ days}$** post-injury.

## Core Clinical & Mechanistic Principles
**Needle Electromyography (EMG)** records the electrical activity of [[Electroneuronography showing greater than ninety percent degeneration within fourteen days indicates severe facial nerve axonal injury|facial]] muscle fibers (orbicularis oculi, orbicularis oris) at rest and during voluntary contraction:
- **The Three Classic EMG Potentials**:
  1. **Voluntary Motor Unit Action Potentials (MUAPs)**:
     - Normal biphasic/triphasic potentials firing with voluntary facial effort.
     - **Presence of even a single voluntary MUAP** in a clinically paralyzed face indicates intact nerve continuity (neurapraxia) and guarantees excellent recovery, ruling out total axonotmesis.
  2. **Fibrillation Potentials & Positive Sharp Waves (Denervation Activity)**:
     - Spontaneous firing of hyper-excitable, denervated single muscle fibers at rest.
     - Appears **$14\text{–}21\text{ days}$ after axonal transection / degeneration** (once neuromuscular junctions degenerate).
  3. **Polyphasic (Nascent) Reinnervation Potentials**:
     - Complex, low-amplitude, multi-peaked potentials appearing **months after injury**, indicating newly sprouted immature axons re-innervating muscle motor endplates.

```mermaid
%% Facial EMG Muscle Action Potentials and Denervation
flowchart TD
  N1(["Acute to Subacute Severe Facial Paralysis: Diagnostic EMG Timing >14-21 Days post-Injury"]) --> N2["Concentric Needle Electrode Inserted into Target Mimetic Muscles (Frontalis, Orbicularis Oculi, Orbicularis Oris)"]
  N2 --> N3{"Assess Three Core Electromyographic Phases"}
  N3 -->|"Insertional Activity (Brief Burst of Electrical Discharge during Needle Insertion)"| N4["Normal vs Increased Membrane Irritability"]
  N3 -->|"Spontaneous Resting Activity (Normal Muscle is Electrically Silent at Rest)"| N5["Resting Waveform Analysis"]
  N5 -->|"Fibrillation Potentials & Positive Sharp Waves (Appear 14-21 Days post-Wallerian Degeneration)"| N6["Active Lower Motor Neuron Axonal Denervation"]
  N3 -->|"Voluntary Motor Unit Action Potentials (MUAP on Attempted Contraction)"| N7{"Voluntary Response Analysis"}
  N7 -->|"Presence of Polyphasic Reinnervation Potentials (Nascent Units)"| N8["Active Axonal Sprouting & Favorable Recovery Prognosis"]
  N7 -->|"Complete Electrical Silence on Effort + Fibrillations"| N9["Neurotmesis / Discontinuous Nerve -> Surgical Reanimation Candidate"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N4 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N8 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N6 red
```

### Surgical Technique & Critical Safety Checks
- **Assessing Long-Term Muscle Receptivity**: In chronic facial paralysis ($>1\text{–}2\text{ years}$), presence of fibrillations confirms viable muscle that can receive a nerve transfer; complete electrical silence ("flatline") indicates irreversible muscular fibrosis and atrophy.

## Connected Concepts & Graph Traversal
- **Electroneuronography Degeneration**: [[Electroneuronography showing greater than ninety percent degeneration within fourteen days indicates severe facial nerve axonal injury|ENoG Evoked Compound Potentials]]
- **Clinical Severity Staging**: [[House-Brackmann grading system stratifies facial nerve function from Grade I normal to Grade VI total paralysis|House-Brackmann Grading Scale]]
- **Dynamic Smile Reanimation**: [[Masseteric nerve transfer to facial nerve branches restores rapid, powerful dynamic smile reanimation|Masseteric Nerve Transfer]]
- **🔗 Cable Graft Reinnervation (FPRS)**: [[Hypoglossal-facial nerve transfer restores resting facial symmetry and basal muscle tone|Hypoglossal-Facial Transfer]]
- **Intratemporal Nerve Anatomy**: [[The facial nerve traverses six distinct anatomical segments from the pons to the parotid gland|Fallopian Canal Segments]]
