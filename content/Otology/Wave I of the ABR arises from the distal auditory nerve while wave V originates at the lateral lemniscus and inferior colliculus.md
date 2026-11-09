---
title: "Wave I of the ABR arises from the distal auditory nerve while wave V originates at the lateral lemniscus and inferior colliculus"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - audiology
  - abr-generators
  - electrophysiology
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, CH02"
aliases:
  - "ABR Wave Generators"
  - "Wave I and Wave V"
  - "Brainstem Auditory Evoked Potentials"
---

# Wave I of the ABR arises from the distal auditory nerve while wave V originates at the lateral lemniscus and inferior colliculus

## Active Recall

> [!question]- What anatomical generator is responsible for Wave V of the ABR?
> *Answer / Clinical Rationale*: The **lateral lemniscus and inferior colliculus** in the midbrain.

> [!question]- What changes in Wave V latency and amplitude during skull base surgery warn of cochlear nerve injury?
> *Answer / Clinical Rationale*: A **Wave V latency prolongation $>1.0\text{ ms}$** or an **amplitude decrease $>50\%$**.

## Core Clinical & Mechanistic Principles
Understanding the exact dipolar source generators of ABR waves is fundamental for neurotologic diagnosis and intraoperative cranial nerve monitoring:
- **Wave I Mechanics**:
  - Represents the compound action potential generated at the **unmyelinated distal dendrites and initial myelinated portion of the auditory nerve** as it exits the habenula perforata in the cochlea.
  - Can be enhanced intraoperatively using an **[[Electrocochleography SP to AP ratio exceeding zero point four indicates endolymphatic hydrops|Electrocochleography]] (ECochG) transtympanic needle** or promontory electrode.
- **Wave V Mechanics**:
  - The most robust, stable, and persistent wave down to threshold.
  - Generated primarily at the **contralateral inferior colliculus** and upper lateral lemniscus.
  - Used for objective auditory threshold estimation in infants and uncooperative patients.

```mermaid
%% ABR Wave Generators and Clinical Latency Metrics
flowchart TD
  N1(["High-Intensity Acoustic Click Stimulus (70-90 dB nHL) Far-Field Scalp Potential Recording"]) --> N2{"Sequential ABR Positive Wave Generators"}
  N2 -->|"Peripheral Components (Waves I & II: Distal & Proximal CN VIII)"| N3{"Peripheral Peaks"}
  N3 -->|"Wave I (Latency ~1.6 ms)"| N4["Distal Auditory Nerve Segment at Cochlea"]
  N3 -->|"Wave II (Latency ~2.8 ms)"| N5["Proximal Auditory Nerve Segment at Brainstem Entrance"]
  N2 -->|"Central Brainstem Components (Waves III, IV, V: Pons to Midbrain)"| N6{"Central Peaks"}
  N6 -->|"Wave III (Latency ~3.8 ms)"| N7["Ventral Cochlear Nucleus (VCN) in Lower Pons"]
  N6 -->|"Wave IV (Latency ~4.6 ms)"| N8["Superior Olivary Complex (SOC) / Lateral Lemniscus"]
  N6 -->|"Wave V (Latency ~5.6 ms)"| N9["Lateral Lemniscus & Inferior Colliculus (IC) in Midbrain"]
  N4 --> N10{"Diagnostic Retrocochlear Latency Metrics"}
  N9 --> N10
  N10 --> N11["Prolonged Wave I-V Interpeak Latency (>4.4 ms) or Interaural Wave V Difference (ITD >0.4 ms)"]
  N10 --> N12["Suggests Retrocochlear Conduction Delay: Vestibular Schwannoma -> MRI IAC Indicated"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N4 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N5 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N11,N12 red
```

### Surgical Technique & Critical Safety Checks
- **Intraoperative Monitoring Alert**: A **$>1.0\text{ ms}$ prolongation in Wave V latency** or a **$>50\%$ drop in Wave V amplitude** indicates impending stretch or ischemic injury to the cochlear nerve during [[Vestibular schwannomas arise from the Schwann cell sheath of the inferior or superior vestibular nerve|vestibular schwannoma]] resection.

## Connected Concepts & Graph Traversal
- **ABR Clinical Interpretation**: [[Auditory brainstem response waves I through V identify retrocochlear and brainstem pathology|ABR Clinical Interpretation]]
- **Retrocochlear Tumor Diagnosis**: [[Vestibular schwannomas arise from the Schwann cell sheath of the inferior or superior vestibular nerve|Vestibular Schwannoma]]
- **ANSD Diagnostic Disconnect**: [[Otoacoustic emissions evaluate outer hair cell integrity and differentiate cochlear from auditory neuropathy spectrum disorder|OAEs and ANSD]]
- **Intraoperative Skull Base Monitoring**: [[Intraoperative facial nerve and cochlear nerve monitoring minimize cranial nerve morbidity in skull base surgery|Intraoperative Cranial Monitoring]]
- **Electrocochleography Far-Field Check**: [[Electrocochleography SP to AP ratio exceeding zero point four indicates endolymphatic hydrops|ECoG Far-Field Comparison]]
