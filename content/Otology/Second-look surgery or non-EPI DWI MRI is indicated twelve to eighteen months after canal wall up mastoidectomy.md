---
title: "Second-look surgery or non-EPI DWI MRI is indicated twelve to eighteen months after canal wall up mastoidectomy"
tier: "Tier III: Cholesteatoma Mastercraft, Canal Wall Up vs Down & Epitympanic Surgery"
tags:
  - otology
  - cholesteatoma
  - second-look
  - surveillance-protocol
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch2, p.12–14"
aliases:
  - "Second-Look Surgery"
  - "Planned Revision Tympanoplasty"
  - "Cholesteatoma Surveillance"
---

# Second-look surgery or non-EPI DWI MRI is indicated twelve to eighteen months after canal wall up mastoidectomy

## Active Recall

> [!question]- Why is second-look surveillance timed specifically at 12 to 18 months following CWU mastoidectomy?
> *Answer / Clinical Rationale*: To allow microscopic residual squamous rests sufficient time to grow into **detectable $2\text{–}3\text{ mm}$ pearls** before extensive bone destruction can occur.

> [!question]- How has non-EPI DWI MRI modified the classic mandate for routine surgical second-look procedures?
> *Answer / Clinical Rationale*: A negative non-EPI DWI MRI allows **safe non-surgical surveillance**, reserving second-look surgery for positive scans or staged ossiculoplasty.

## Core Clinical & Mechanistic Principles
Following a Canal Wall Up (CWU) mastoidectomy for extensive cholesteatoma, a structured surveillance protocol is mandatory to detect asymptomatic residual disease:
- **Residual vs. Recurrent Cholesteatoma**:
  - **Residual**: Microscopic squamous matrix left behind in deep recesses (sinus tympani, anterior epitympanum, facial recess) during the primary surgery ($15\text{–}25\%$ incidence).
  - **Recurrent**: New retraction pocket developing from [[Eustachian tube dysfunction divides into dilatory and patulous forms with opposite treatment goals|Eustachian tube dysfunction]] ($5\text{–}10\%$).
- **Timing of Surveillance (12 to 18 Months)**:
  - Performing second-look surgery or MRI before 12 months may miss tiny sub-millimeter residual pearls that have not grown large enough to be detected.
  - Waiting $>18\text{–}24\text{ months}$ risks extensive bone erosion, ossicular re-destruction, or [[Labyrinthine fistula from cholesteatoma erosions most frequently involves the lateral semicircular canal|labyrinthine fistula]] formation.
- **Modern Management Algorithm**:
  1. Perform **[[Non-echo-planar diffusion-weighted MRI detects recurrent and residual cholesteatoma as small as two millimeters|non-EPI DWI MRI]] at 12–18 months**.
  2. If MRI is **negative** and TM is healthy: Continue annual clinical/MRI surveillance, avoiding surgery.
  3. If MRI is **positive** ($>2\text{ mm}$ DWI pearl) or if [[Partial ossicular replacement prosthesis PORP requires an intact and mobile stapes superstructure|ossicular reconstruction]] (Stage II ossiculoplasty) is planned: Perform **targeted second-look exploration**.

```mermaid
%% CWU Recidivism Surveillance and Second-Look Strategy
flowchart TD
  N1(["Canal Wall Up (CWU) Tympanomastoidectomy Complete for Cholesteatoma"]) --> N2["Normal Intact Posterior Bony Canal Wall Preserved"]
  N2 --> N3["Residual / Recurrent Cholesteatoma Risk in Deep Recesses (Sinus Tympani, Epitympanum: 15-30%)"]
  N3 --> N4{"Select 12-18 Month Surveillance Modality"}
  N4 -->|"Non-Echo Planar Diffusion-Weighted MRI (Non-EPI DWI: HASTE / PROPELLER / BLADE)"| N5{"Non-Invasive MRI Pathway"}
  N5 -->|"No Restricted Diffusion (Negative DWI MRI)"| N6["Avoids Unnecessary Revision Surgery; Continue Annual Clinical & MRI Surveillance"]
  N5 -->|"Hyperintense Trace DWI Pearl >=2 mm with Low ADC"| N7["Targeted Revision Mastoidectomy for Pearl Extirpation"]
  N4 -->|"Planned Staged Second-Look Surgery (When DWI is Equivocal or for Ossicular Reconstruction)"| N8["Second-Look Tympanotomy"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N3 red
```

### Surgical Technique & Critical Safety Checks
- **Transcanal Endoscopic Second-Look**: Mini-invasive exploration of the middle ear and attic using angled endoscopes ($0^\circ, 30^\circ, 45^\circ$), converting formal postauricular revision into a daycare transcanal procedure.

## Connected Concepts & Graph Traversal
- **Non-EPI DWI MRI Diagnostics**: [[Non-echo-planar diffusion-weighted MRI detects recurrent and residual cholesteatoma as small as two millimeters|Non-EPI DWI MRI]]
- **Canal Wall Up Mastoidectomy**: [[Canal wall up mastoidectomy preserves the posterior bony external auditory canal wall|Canal Wall Up Mastoidectomy]]
- **Canal Wall Down Alternative**: [[Canal wall down mastoidectomy lowers the facial ridge and exteriorizes the mastoid into the ear canal|Canal Wall Down Mastoidectomy]]
- **Primary Cholesteatoma Invagination**: [[Primary acquired cholesteatoma arises from retraction pocket invagination of the pars flaccida into Prussak space|Prussak Space Invagination]]
- **Endoscopic TEES Removal**: [[Transcanal endoscopic ear surgery TEES provides line-of-sight visualization into the sinus tympani and epitympanum|TEES Endoscopic Surveillance]]
