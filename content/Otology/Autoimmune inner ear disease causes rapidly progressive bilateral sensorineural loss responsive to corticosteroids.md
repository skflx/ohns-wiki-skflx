---
title: "Autoimmune inner ear disease causes rapidly progressive bilateral sensorineural loss responsive to corticosteroids"
tier: "Tier S: Clinical Audiology, Tinnitus & Hearing Rehabilitation"
tags:
  - otology
  - autoimmune
  - snhl
  - inner-ear
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch2, p.15–16"
aliases:
  - "Autoimmune Inner Ear Disease"
  - "AIED"
  - "Cogan Syndrome"
---

# Autoimmune inner ear disease causes rapidly progressive bilateral sensorineural loss responsive to corticosteroids

## Active Recall

> [!question]- What tempo of hearing loss defines AIED against its two main mimics?
> *Answer / Clinical Rationale*: Weeks-to-months bilateral progression — faster than age-related decline, slower than idiopathic sudden SNHL.

> [!question]- Name the syndrome pairing interstitial keratitis with audiovestibular dysfunction and its feared systemic lesion.
> *Answer / Clinical Rationale*: **Cogan syndrome**; aortitis with aortic insufficiency.

## Core Clinical & Mechanistic Principles
- **Signature Tempo**: Bilateral (often asymmetric and asynchronous) sensorineural hearing loss progressing rapidly over **weeks to months** — significantly faster than [[Presbycusis produces symmetric high-frequency sensorineural loss with disproportionate speech-in-noise decline|presbycusis]], yet slower than [[Idiopathic sudden sensorineural hearing loss requires prompt systemic corticosteroids and intratympanic salvage injection|idiopathic sudden SNHL]] — frequently accompanied by fluctuating aural fullness, tinnitus, and episodic vestibular instability.
- **Diagnostic High-Dose Steroid Challenge**: Because serological markers (ANA, anti-68 kDa / HSP-70 antibodies) lack definitive sensitivity and specificity, **responsiveness to an empirical 4-week trial of oral prednisone ($1\text{ mg/kg/day}$)** documented on serial audiometry serves as the primary clinical diagnostic criterion.
- **Cogan Syndrome**: Rare autoimmune vasculitis pairing interstitial keratitis with severe Meniere-like audiovestibular dysfunction in young adults, carrying high risk for systemic aortitis and aortic valvular insufficiency.
- **Secondary AIED**: Up to one-third of cases occur secondary to systemic rheumatologic disease (systemic lupus erythematosus, rheumatoid arthritis, or [[Granulomatosis with polyangiitis presents with necrotizing sinonasal granulomas and saddle nose|granulomatosis with polyangiitis (GPA)]]).

```mermaid
%% AIED Diagnostic and Therapeutic Algorithm
flowchart TD
  N1(["Bilateral Progressive SNHL over Weeks-to-Months"]) --> N2["Diagnostic Oral Steroid Trial"]
  N2 -->|"Prednisone 1 mg/kg/day x 4 Weeks"| N3{"Serial Audiometric Assessment"}
  N3 -->|"Positive Pure Tone / Word Rec Improvement (>=15 dB / 15%)"| N4["Diagnostic Confirmation: AIED"]
  N4 --> N5["Slow Steroid Taper +/- Biologic Sparing Agent"]
  N3 -->|"No Audiometric Recovery"| N6["Re-evaluate Etiology / Intratympanic Salvage"]
  N6 --> N7["Profound Bilateral SNHL"]
  N7 -->|"Cochlear Inflammation / Fibrosis Threat"| N8["Early Cochlear Implantation"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4,N5 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8 red
```

### Management & Critical Safety Checks
- **Steroid Maintenance & Sparing**: Positive responders require a very gradual multi-month corticosteroid taper; methotrexate, azathioprine, or biologics (e.g. rituximab, infliximab) are utilized for steroid dependence or frequent relapses.
- **Cochlear Implantation**: Patients with progressive profound loss unresponsive to immunosuppression are candidates for prompt [[Cochlear implant candidacy criteria include severe to profound bilateral sensorineural hearing loss|cochlear implantation]]; early surgery is necessary before chronic intracochlear labyrinthitis leads to fibrous or neo-osteogenesis (cochlear obliteration).

## Connected Concepts & Graph Traversal
- **Sudden SNHL Differential**: [[Idiopathic sudden sensorineural hearing loss requires prompt systemic corticosteroids and intratympanic salvage injection|Sudden SNHL vs AIED Progression]]
- **🔗 Vasculitic Otologic Overlap (Sinus)**: [[Granulomatosis with polyangiitis presents with necrotizing sinonasal granulomas and saddle nose|GPA & Vasculitic Sensorineural Loss]]
- **Syndromic Keratitis Differential**: [[Meniere disease is characterized by episodic vertigo, fluctuating low-frequency SNHL, tinnitus, and aural fullness|Meniere vs Cogan Syndrome]]
- **Rehabilitative Endpoint**: [[Cochlear implant candidacy criteria include severe to profound bilateral sensorineural hearing loss|Cochlear Implantation in AIED]]
- **Electrophysiological Auditory Baseline**: [[Otoacoustic emissions evaluate outer hair cell integrity and differentiate cochlear from auditory neuropathy spectrum disorder|OAEs in Autoimmune Cochleopathy]]
