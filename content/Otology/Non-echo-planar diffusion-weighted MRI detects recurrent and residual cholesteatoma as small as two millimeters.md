---
title: "Non-echo-planar diffusion-weighted MRI detects recurrent and residual cholesteatoma as small as two millimeters"
tier: "Tier III: Cholesteatoma Mastercraft, Canal Wall Up vs Down & Epitympanic Surgery"
tags:
  - otology
  - imaging
  - non-epi-dwi
  - cholesteatoma-surveillance
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Non-EPI DWI MRI"
  - "Diffusion Weighted MRI Cholesteatoma"
  - "HASTE DWI"
  - "Residual Cholesteatoma MRI"
---

# Non-echo-planar diffusion-weighted MRI detects recurrent and residual cholesteatoma as small as two millimeters

## Active Recall

> [!question]- What is the imaging appearance of a residual cholesteatoma on non-EPI DWI MRI?
> *Answer / Clinical Rationale*: **Intense bright hyperintensity** on DWI (restricted diffusion) with **no internal contrast enhancement** on T1 post-gadolinium.

> [!question]- What is the spatial resolution limit of non-EPI DWI MRI for detecting cholesteatoma pearls?
> *Answer / Clinical Rationale*: Down to **$2.0\text{ to }3.0\text{ mm}$** in diameter.

## Core Clinical & Mechanistic Principles
**Non-Echo-Planar Diffusion-Weighted MRI (non-EPI DWI)** (e.g., HASTE or PROPELLER DWI) has replaced traditional CT and routine exploratory surgery for postoperative [[Second-look surgery or non-EPI DWI MRI is indicated twelve to eighteen months after canal wall up mastoidectomy|cholesteatoma surveillance]]:
- **Biophysical Mechanism**:
  - Cholesteatomas are packed with dense, desquamated keratin flakes and cholesterol crystals.
  - This highly organized, proteinaceous matrix causes **severe restriction of Brownian water molecule motion (restricted diffusion)**.
  - On non-EPI DWI, cholesteatoma appears as an **intense, bright hyperintense signal** with corresponding low signal on ADC maps.
- **Superiority over Standard EPI-DWI**:
  - Conventional EPI-DWI suffers from severe magnetic susceptibility artifacts at the air-bone interfaces of the temporal bone, causing false positives and distortion.
  - **Non-EPI DWI eliminates susceptibility artifacts**, achieving a **sensitivity of $>90\text{–}95\%$ and specificity of $>95\%$** for lesions down to **$\mathbf{2.0\text{–}3.0\text{ mm}}$**.

```mermaid
%% Non-EPI DWI MRI Recidivism Surveillance
flowchart TD
  N1(["Post-Tympanomastoidectomy Surveillance at 12 to 18 Months: Intact Canal Wall or Blind Cavity"]) --> N2{"Non-Echo-Planar Diffusion-Weighted MRI Protocol (HASTE / PROPELLER / BLADE)"}
  N2 --> N3["Eliminates Magnetic Susceptibility / Bone-Air Artifacts of Standard EPI Sequences"]
  N2 --> N4["Evaluate Intrinsic Diffusion Signals in Mastoid Bowl"]
  N4 -->|"High-Intensity Hyperintense Pearl on Trace DWI + Low Intensity on ADC Map (Restricted Diffusion)"| N5{"True Cholesteatoma Pearl"}
  N5 --> N6["Detects Avidity of Densely Packed Keratin Crystals (Sensitivity >90-95% for Lesions >=2-3 mm)"]
  N5 --> N7["Differentiates Cholesteatoma from Cholesterol Granuloma, Scar Tissue & Mucosal Edema (Which Show Free Diffusion / Bright ADC)"]
  N5 --> N8["Guides Targeted Revision Second-Look Surgery vs Non-Surgical Clinical Monitoring"]
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N3 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8 purple
```

### Surgical Technique & Critical Safety Checks
- **Distinction from Granulation Tissue & Scar**: Granulation tissue enhances solidly with gadolinium and does NOT restrict on DWI; cholesteatoma shows zero internal enhancement and bright DWI restriction.

## Connected Concepts & Graph Traversal
- **Second-Look Surveillance Protocol**: [[Second-look surgery or non-EPI DWI MRI is indicated twelve to eighteen months after canal wall up mastoidectomy|Second-Look CWU Protocol]]
- **CWU Canal Preservation**: [[Canal wall up mastoidectomy preserves the posterior bony external auditory canal wall|Canal Wall Up Mastoidectomy]]
- **Primary Cholesteatoma Origin**: [[Primary acquired cholesteatoma arises from retraction pocket invagination of the pars flaccida into Prussak space|Prussak Space Invagination]]
- **Petrous Apex Recurrence**: [[Petrous apex cholesteatoma requires infracochlear, translabyrinthine, or middle cranial fossa exteriorization|Petrous Apex Cholesteatoma]]
- **Endoscopic Revision Surgery**: [[Transcanal endoscopic ear surgery TEES provides line-of-sight visualization into the sinus tympani and epitympanum|TEES Revision Surgery]]
