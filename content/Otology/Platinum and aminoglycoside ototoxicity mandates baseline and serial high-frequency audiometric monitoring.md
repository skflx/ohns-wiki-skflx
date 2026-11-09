---
title: "Platinum and aminoglycoside ototoxicity mandates baseline and serial high-frequency audiometric monitoring"
tier: "Tier S: Clinical Audiology, Tinnitus & Hearing Rehabilitation"
tags:
  - otology
  - audiology
  - ototoxicity
  - pharmacology
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Ototoxicity"
  - "Cisplatin Ototoxicity"
  - "Aminoglycoside Vestibulotoxicity"
---

# Platinum and aminoglycoside ototoxicity mandates baseline and serial high-frequency audiometric monitoring

## Active Recall

> [!question]- Which aminoglycosides are chiefly vestibulotoxic versus cochleotoxic?
> *Answer / Clinical Rationale*: Gentamicin and streptomycin are vestibulotoxic; amikacin and kanamycin are cochleotoxic.

> [!question]- Why must ototoxicity monitoring include frequencies above 8 kHz?
> *Answer / Clinical Rationale*: Platinum injury begins in the extreme basal turn — ultra-high-frequency loss precedes conventional-range loss, creating the window to act.

## Core Clinical & Mechanistic Principles
- **Cisplatin**: dose-cumulative, bilateral, high-frequency-first, can progress after completion; injures basal outer hair cells and stria via oxidative stress. **Sodium thiosulfate** is protective in pediatric localized disease when timed after infusion.
- **Aminoglycosides**: gentamicin/streptomycin are predominantly **vestibulotoxic** ([[Bilateral vestibulopathy causes oscillopsia and dark-dependent imbalance from bilateral hair cell loss|bilateral vestibulopathy]], oscillopsia); amikacin/kanamycin predominantly cochleotoxic. The **mitochondrial m.1555A>G** variant confers single-dose susceptibility.
- Loop diuretics cause reversible strial edema but potentiate other ototoxins; deferoxamine, macrolides, and quinine add to the list.
- Monitoring protocol: baseline including **extended high-frequency audiometry (above 8 kHz)** and DPOAEs, then before each platinum cycle — ultra-high frequencies fall first, giving lead time to modify therapy.

```mermaid
%% Ototoxicity Pathogenesis and Audiometric Surveillance
flowchart TD
  N1(["Initiation of Potentially Ototoxic Chemotherapy or Systemic Antimicrobial Therapy"]) --> N2["Mandatory Pre-Treatment Baseline Comprehensive Audiogram (Including Extended High Frequencies 8-20 kHz) + DPOAEs"]
  N2 --> N3{"Differentiate Ototoxic Drug Mechanisms"}
  N3 -->|"Cisplatin / Carboplatin: Generates Reactive Oxygen Species (ROS) & DNA Adducts in Outer Hair Cells"| N4["Cisplatin Cascade"]
  N4 --> N5["Apoptosis of Outer Hair Cells in Cochlear Basal Turn -> Irreversible High-Frequency SNHL + Bilateral Tinnitus"]
  N3 -->|"Aminoglycosides (Gentamicin, Amikacin, Tobramycin, Streptomycin)"| N6{"Aminoglycoside Cascade"}
  N6 -->|"Gentamicin / Streptomycin: Preferentially Vestibulotoxic (Type I Vestibular Hair Cells)"| N7["Bilateral Vestibulopathy & Oscillopsia"]
  N6 -->|"Amikacin / Neomycin / Kanamycin: Preferentially Cochleotoxic (Outer Hair Cells)"| N8["High-Frequency SNHL"]
  N5 --> N9["Serial Monitoring: ASHA Criteria (>=20 dB Drop at 1 Freq or >=10 dB Drop at 2 Contiguous Freqs)"]
  N8 --> N9
  N9 --> N10["Triggers Oncologist Dose Modification / Otoprotective Agents (Sodium Thiosulfate) Consideration"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7,N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N5 red
```

### Management & Critical Safety Checks
- Coordinate with oncology: threshold shifts trigger a documented risk-benefit conversation (dose modification, carboplatin substitution, or acceptance) rather than silent progression.
- Aminoglycoside dosing: avoid in known m.1555A>G families; monitor with bedside dynamic visual acuity when vestibulotoxicity is the concern, since audiograms miss it.

## Connected Concepts & Graph Traversal
- **Outer Hair Cell Electromotility**: [[Outer hair cell electromotility driven by prestin amplifies cochlear micromechanics|Prestin Motor Damage]]
- **OAE Serial Monitoring**: [[Otoacoustic emissions evaluate outer hair cell integrity and differentiate cochlear from auditory neuropathy spectrum disorder|OAE Ototoxicity Monitoring]]
- **Bilateral Vestibulopathy Risk**: [[Bilateral vestibulopathy causes oscillopsia and dark-dependent imbalance from bilateral hair cell loss|Aminoglycoside Vestibulotoxicity]]
- **Endocochlear Potential Drive**: [[The stria vascularis generates the endocochlear potential of positive eighty millivolts|Stria Vascularis Toxicity]]
- **Cochlear Implantation Salvage**: [[Cochlear implant candidacy criteria include severe to profound bilateral sensorineural hearing loss|Cochlear Implantation for Severe Loss]]
