---
title: "LEMG denervation potentials indicate axonal injury within one to six months"
tier: "Tier I: Bedrock Foundations"
tags:
  - laryngology
  - diagnostics
  - lemg
  - neurolaryngology
  - denervation
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, Ch7, p.151–152"
aliases:
  - "LEMG Denervation Potentials"
  - "LEMG Waveform Analysis"
  - "Fibrillations and Polyphasics in LEMG"
  - "LEMG denervation potentials signify active axonal loss within one to six months of injury"
---

# LEMG denervation potentials indicate axonal injury within one to six months

## Active Recall

> [!question]- Why is LEMG testing performed ideally between 1 and 6 months post-injury rather than immediately after thyroid surgery?
> *Answer / Clinical Rationale*: Fibrillations and positive sharp waves require 2 to 3 weeks of wallerian degeneration to appear; prior to 3 weeks, false-negative readings occur. Beyond 6–12 months, muscle endplates fibrose, limiting prognostic utility.

> [!question]- What does the appearance of polyphasic motor unit action potentials indicate on LEMG?
> *Answer / Clinical Rationale*: It indicates active **collateral axon sprouting and reinnervation** of denervated muscle fibers, suggesting potential for spontaneous neural recovery.

## Core Clinical & Mechanistic Principles
Waveform analysis during [[Laryngeal electromyography differentiates vocal fold paralysis from joint fixation|Laryngeal Electromyography (LEMG)]] provides prognostic information regarding nerve continuity, ongoing axonal degradation, and spontaneous collateral reinnervation following laryngeal nerve trauma.

### Waveform Phenotypes & Electrophysiologic Mechanisms
1. **Insertional Activity**:
   - *Normal*: Brief burst of electrical activity lasting <300 ms as the needle pierces muscle fibers.
   - *Increased / Prolonged*: Indicates muscle membrane irritability, early denervation, or myotonia.
   - *Decreased / Absent*: Indicates fibrotic replacement of muscle or severe chronic end-stage atrophy.
2. **Denervation Potentials (Spontaneous Activity at Rest)**:
   - **Fibrillation Potentials (Fib Potentials)**: Biphasic or triphasic spikes ($10\text{–}100\text{ µV}$, $1\text{–}5\text{ ms}$) representing spontaneous, uncoordinated action potentials of single muscle fibers that have lost their motor axon supply.
   - **Positive Sharp Waves (PSWs)**: Rapid initial positive deflection followed by a slow negative decay, representing discharge of injured, denervated muscle fibers.
   - *Pathological Meaning*: Signifies **active axonal loss / wallerian degeneration**. Appears 2 to 3 weeks post-injury.
3. **Reinnervation Potentials (Voluntary Activation)**:
   - **Polyphasic Potentials (Complex MUAPs)**: Motor unit action potentials with >4 phases, broadened duration, and variable amplitude.
   - *Pathological Meaning*: Signifies **collateral axonal sprouting** from surviving motor neurons re-occupying denervated motor endplates. Indicates neurotmesis recovery or laryngeal synkinesis.

```mermaid
%% LEMG Waveform Electrophysiology and Prognostic Triage
flowchart TD
  N1(["Post-Thyroidectomy / Skull Base Vocal Fold Immobility at 1-6 Months"]) --> N2["Insert LEMG Concentric Bipolar Needle into TA / CT / PCA Muscle"]
  N2 --> N3{"Electrophysiological Waveform Analysis"}
  N3 -->|"Spontaneous Fibrillations + Positive Sharp Waves (Resting Denervation)"| N4["Active Axonal Loss / Wallerian Degeneration"]
  N4 --> N5{"Check at 3-6 Months for Recruitment vs Fibrosis"}
  N5 -->|"Evolving Polyphasic Nascent MUAPs (Reinnervation Sprouting)"| N6["Favorable Prognosis: Spontaneous Motor Recovery Expected (Observe / Temp Gel)"]
  N5 -->|"Persistent Dense Fibs / Electrical Silence at >6 Months"| N7["Irreversible Axonal Neurotmesis: Definitive Type I Thyroplasty / Arytenoid Adduction"]
  N3 -->|"Normal MUAP Recruitment Under Voluntary Phonatory Effort"| N8["Cricoarytenoid Joint Fixation / Dislocation (Rule Out Neural Paralysis)"]
  N3 -->|"Complete Absence of Insertional Activity & MUAPs (Flatline)"| N9["Chronic End-Stage Fibrofatty Replacement (Past 12 Months: Poor Candidate for Reinnervation)"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2,N8 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N4,N7 red
```

## Optimal Testing Window & Clinical Decision Making
- **Optimal Testing Window**: **1 to 6 months post-injury**.
  - *Prior to 3–4 weeks*: Axonal membrane instability has not fully developed, risking false-negative interpretations.
  - *Past 6–12 months*: Denervated muscle fibers undergo progressive atrophy and fibrofatty replacement, eliminating spontaneous discharges.
- **Prognostic Guidance**:
  - *Presence of Polyphasics with Recruited Units*: High likelihood of functional motor recovery; observation with temporary [[Injection laryngoplasty requires precise placement into lateral thyroarytenoid muscle|injection augmentation]] is indicated.
  - *Persistent Fibrillations / Complete Electrical Silence at 6 Months*: Poor prognosis for spontaneous recovery; indicates permanent [[Type I thyroplasty medializes the vocal fold with conscious voice tuning|Type I thyroplasty]] or [[Arytenoid adduction closes large posterior glottic gaps and corrects height mismatch|arytenoid adduction]].

## Critical Failure Modes & Error Traps
- **Laryngeal Synkinesis**: Reinnervating axons from the adductor and abductor branches can aberrantly cross-innervate opposing muscles (e.g., adductor fibers innervating the [[The posterior cricoarytenoid is the sole vocal fold abductor|PCA]]), resulting in normal-appearing polyphasic MUAPs on LEMG despite persistent vocal fold immobility.

## Connected Concepts & Graph Traversal
- **Core Diagnostic Test**: [[Laryngeal electromyography differentiates vocal fold paralysis from joint fixation|Laryngeal Electromyography (LEMG)]]
- **Clinical Condition**: [[Unilateral vocal fold paralysis causes glottic insufficiency, breathiness, and aspiration|Unilateral Vocal Fold Paralysis]]
- **Temporary Bridge**: [[Carboxymethylcellulose gel provides short-acting temporary vocal fold augmentation|Carboxymethylcellulose (Radiesse Voice Gel)]]
- **Definitive Surgery**: [[Type I thyroplasty medializes the vocal fold with conscious voice tuning|Type I Medialization Thyroplasty]]
- **Clinical Management**: [[The posterior cricoarytenoid is the sole vocal fold abductor|Posterior Cricoarytenoid (PCA) Muscle]]
