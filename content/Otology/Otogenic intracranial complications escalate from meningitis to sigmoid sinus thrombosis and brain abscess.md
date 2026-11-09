---
title: "Otogenic intracranial complications escalate from meningitis to sigmoid sinus thrombosis and brain abscess"
tier: "Tier S: Otologic Emergencies & Complications of Otitis Media"
tags:
  - otology
  - otitis-media
  - intracranial-complications
  - emergency
last_revised: 2026-11-03
status: complete
sources:
  - "KJLee, Ch22, p.407"
aliases:
  - "Otogenic Intracranial Complications"
  - "Complications of Otitis Media"
---

# Otogenic intracranial complications escalate from meningitis to sigmoid sinus thrombosis and brain abscess

## Active Recall

> [!question]- Which two intracranial abscess locations correspond to spread through the tegmen versus Trautmann triangle?
> *Answer / Clinical Rationale*: Tegmen erosion seeds the **temporal lobe**; Trautmann (presigmoid dural) spread seeds the **cerebellum**.

> [!question]- A draining chronic ear abruptly stops draining and headache begins. Why is this ominous?
> *Answer / Clinical Rationale*: Obstructed egress means pus is dissecting a new path — presume intratemporal-to-intracranial extension and image with contrast MRI.

## Core Clinical & Mechanistic Principles
- **Intratemporal ladder**: coalescent mastoiditis, subperiosteal abscess, facial paralysis, [[Labyrinthitis presents with acute prolonged vertigo combined with sudden sensorineural hearing loss|suppurative labyrinthitis]], and [[Gradenigo triad of otorrhea, retroorbital pain, and abducens nerve palsy indicates suppurative petrous apicitis|petrous apicitis]] precede intracranial spread; routes are direct bone erosion, thrombophlebitic (emissary veins), and preformed pathways (oval/round windows, fracture lines, Hyrtl fissure).
- **Meningitis** is the most common intracranial complication overall; **temporal lobe and cerebellar abscess** follow tegmen and Trautmann routes respectively — the abscess location names the wall that failed.
- **Epidural and subdural abscess** may be silent except for headache out of proportion; **otitic hydrocephalus** is raised ICP with normal ventricles after sigmoid thrombosis.
- Classic exam vignette: chronic ear draining for years that suddenly stops draining, then headache/fever — the cholesteatoma found a new direction.

```mermaid
%% Otogenic Intracranial Complications Escalation Matrix
flowchart TD
  N1(["Acute Coalescent Mastoiditis or Aggressive Epitympanic Cholesteatoma"]) --> N2{"Sequential Escalation of Intracranial Extension"}
  N2 -->|"Extradural Ingress (Tegmen / Sigmoid Plate Osteolytic Erosion)"| N3{"Extradural Ingress"}
  N3 --> N4["Stage 1: Epidural Abscess / Perisinus Abscess Formation"]
  N3 --> N5["Stage 2: Lateral / Sigmoid Sinus Thrombophlebitis with 'Picket-Fence' Fevers"]
  N2 -->|"Intradural & Parenchymal Ingress (Meninges & Brain Tissue)"| N6{"Intradural Ingress"}
  N6 --> N7["Stage 3: Bacterial Meningitis (Fever, Nuchal Rigidity, Kernig/Brudzinski +)"]
  N6 --> N8["Stage 4: Temporal Lobe or Cerebellar Brain Abscess (Mass Effect & Herniation Risk)"]
  N4 --> N9["Contrast CT Temporal Bone + Brain MRI/MRV + Emergent Cortical Mastoidectomy & Neurosurgical Abscess Drainage"]
  N5 --> N9
  N7 --> N9
  N8 --> N9
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N4 cyan
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8,N9 red
```

### Management & Critical Safety Checks
- Contrast MRI with DWI is the study; abscess restricts diffusion. Neurosurgical drainage precedes or accompanies otologic source control.
- Source control is a [[Complete cortical mastoidectomy unroofs the mastoid antrum and establishes dependent middle ear drainage|cortical mastoidectomy]] at minimum; the diseased ear is operated during the same admission once the patient is stabilized.

## Connected Concepts & Graph Traversal
- **Coalescent Mastoiditis**: [[Acute coalescent mastoiditis causes trabecular osteoclasis and subperiosteal abscess formation|Coalescent Mastoiditis & Cortical Mastoidectomy]]
- **Sigmoid Sinus Thrombosis**: [[Lateral sinus thrombophlebitis presents with picket fence fevers and Griesinger sign requiring intravenous antibiotics and mastoidectomy|Otogenic Sigmoid Sinus Thrombosis]]
- **Petrous Apicitis**: [[Gradenigo triad of otorrhea, retroorbital pain, and abducens nerve palsy indicates suppurative petrous apicitis|Gradenigo Syndrome]]
- **Cholesteatoma Origin**: [[Primary acquired cholesteatoma arises from retraction pocket invagination of the pars flaccida into Prussak space|Primary Acquired Cholesteatoma]]
- **Anatomical Foundation**: [[Complete cortical mastoidectomy unroofs the mastoid antrum and establishes dependent middle ear drainage|Cortical Mastoidectomy]]
