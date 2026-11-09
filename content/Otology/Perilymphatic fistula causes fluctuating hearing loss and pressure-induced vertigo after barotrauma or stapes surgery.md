---
title: "Perilymphatic fistula causes fluctuating hearing loss and pressure-induced vertigo after barotrauma or stapes surgery"
tier: "Tier S: Otologic Emergencies & Complications of Otitis Media"
tags:
  - otology
  - perilymph
  - barotrauma
  - vertigo
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch16, p.330"
aliases:
  - "Perilymphatic Fistula"
  - "PLF"
---

# Perilymphatic fistula causes fluctuating hearing loss and pressure-induced vertigo after barotrauma or stapes surgery

## Active Recall

> [!question]- Which bedside maneuver supports the diagnosis and what is it called?
> *Answer / Clinical Rationale*: Pneumatic pressure on the tragus/canal provoking nystagmus or vertigo — the **Hennebert sign** (fistula test).

> [!question]- First-line management after presumed barotraumatic PLF with stable hearing?
> *Answer / Clinical Rationale*: Conservative: bed rest, head-up positioning, straining precautions; exploration with window grafting is reserved for progression.

## Core Clinical & Mechanistic Principles
- Abnormal communication between perilymph and middle ear at the **oval or round window**, classically after barotrauma, heavy straining, temporal bone fracture, or stapes surgery; a genuinely spontaneous PLF is a contested diagnosis.
- Presentation: fluctuating SNHL, disequilibrium, and **pressure- or sound-provoked vertigo** — a positive [[Labyrinthine fistula from cholesteatoma erosions most frequently involves the lateral semicircular canal|fistula test]] (**Hennebert sign**: nystagmus with tragal pressure/pneumatic otoscopy) supports it.
- The **cochlear aqueduct** connection to CSF explains why straining and pressure transients transmit to the labyrinth.
- Pediatric caveat: recurrent meningitis with SNHL suggests a congenital inner ear malformation with fistula (incomplete partition family) rather than acquired PLF.

```mermaid
%% Perilymphatic Fistula (PLF) Diagnostic and Rescue Sequence
flowchart TD
  N1(["Barotrauma (Scuba Diving / Flight), Blunt Head Trauma, Strenuous Valsalva, or post-Stapedectomy"]) --> N2["Abnormal Third Window Hydraulic Fistula"]
  N2 -->|"Disruption of Round Window Membrane or Annular Ligament of Oval Window"| N3["Perilymph Fluid Leaks into Middle Ear"]
  N3 --> N4{"Characteristic Clinical Manifestations"}
  N4 -->|"Fluctuating / Stepwise SNHL, Roaring Tinnitus & True Episodic Positional Vertigo"| N5["Clinical Suspicion"]
  N4 -->|"Positive Hennebert Sign (Pneumatic Otoscopy Pressure Triggers Vertigo / Nystagmus)"| N6["Pneumatic Sign"]
  N4 -->|"Positive Tullio Phenomenon (Loud Sounds Induce Vertigo & Oscillopsia)"| N7["Acoustic Sign"]
  N4 --> N8{"Treatment Protocol"}
  N8 -->|"Strict Bed Rest (Head Elevated 30°, Stool Softeners, Avoid Straining x 7-14 Days)"| N9["70-80% Spontaneous Healing"]
  N8 -->|"Refractory Symptoms / Progressive SNHL: Exploratory Tympanotomy & Tissue Seal (Fascia/Fat/Blood Clot at Oval/Round Windows)"| N10["Fistula Repair"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N5 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N3 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N9 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N6,N7 red
```

### Management & Critical Safety Checks
- Initial management is conservative: bed rest, head elevation, stool softeners, avoidance of straining for days to weeks.
- Persistent or progressive cases undergo middle ear exploration with soft tissue grafting of both windows; intraoperative pooling is sought but absence does not exclude the diagnosis.

## Connected Concepts & Graph Traversal
- **Congenital Stapes Gush**: [[Gushing footplate indicates a congenital perilymph fistula from an abnormally patent cochlear aqueduct|Gushing Footplate Complication]]
- **Stapedotomy Laser Craft**: [[Laser stapedotomy reduces mechanical trauma and footplate mobilization compared to manual perforators|Laser Stapedotomy Safety]]
- **Third-Window SCDS Overlap**: [[Superior semicircular canal dehiscence SCDS presents with Tullio phenomenon and sound-induced vertigo|SCDS Third-Window Vertigo]]
- **Meniere Fluctuating Mimic**: [[Meniere disease is characterized by episodic vertigo, fluctuating low-frequency SNHL, tinnitus, and aural fullness|Meniere Disease Differential]]
- **Post-Op CSF Fistula**: [[Cerebrospinal fluid CSF leak and pseudomeningocele require lumbar drainage, fat obliteration, and re-exploration|CSF Leak Management]]
- **Barotraumatic Etiology Overlap**: [[Inner ear barotrauma and decompression sickness produce acute cochleovestibular dysfunction through pressure-induced membrane rupture or inert gas bubble embolization requiring hyperbaric therapy|Inner Ear Barotrauma & Decompression Sickness]]
