---
title: "Horizontal canal BPPV is diagnosed with the supine roll test and treated with the Lempert barbecue maneuver"
tier: "Tier V: Vestibular Disorders, Meniere Disease, BPPV & SCDS"
tags:
  - otology
  - vestibular
  - horizontal-bppv
  - supine-roll-test
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Horizontal Canal BPPV"
  - "HC-BPPV"
  - "Supine Roll Test"
  - "Lempert Barbecue Roll"
  - "Gufoni Maneuver"
---

# Horizontal canal BPPV is diagnosed with the supine roll test and treated with the Lempert barbecue maneuver

## Active Recall

> [!question]- In geotropic horizontal canal BPPV, which ear is the affected side according to Ewald's second law?
> *Answer / Clinical Rationale*: The **side with the stronger (more intense) nystagmus** (because ampullopetal endolymph flow creates greater neural excitation).

> [!question]- What therapeutic maneuver involves a sequential 360-degree body roll to clear horizontal canal otoconia?
> *Answer / Clinical Rationale*: The **Lempert barbecue roll maneuver**.

## Core Clinical & Mechanistic Principles
**Horizontal (Lateral) Semicircular Canal BPPV (HC-BPPV)** accounts for $5\text{–}10\%$ of BPPV cases and is diagnosed via the **Supine Roll Test (Pagnini-McClure Test)**:
- **Supine Roll Test Execution**:
  1. Patient lies supine with head elevated $30^\circ$ (aligns horizontal canal vertically).
  2. Rapidly rotate head $90^\circ$ to the right; observe horizontal [[The Dix-Hallpike maneuver produces torsional upbeating nystagmus in posterior canal BPPV|nystagmus]].
  3. Return head to center, then rapidly rotate head $90^\circ$ to the left.
- **Two Nystagmus Variants & Ewald's 2nd Law**:
  1. **Geotropic Nystagmus (Canalithiasis, $>80\%$)**:
     - Nystagmus beats **TOWARD THE GROUND (Geotropic)** on both sides.
     - **Ewald's 2nd Law**: Ampullopetal endolymph flow is excitatory in the horizontal canal; therefore, the **AFFECTED EAR IS THE SIDE WITH STRONGER / MORE INTENSE NYSTAGMUS**.
  2. **Apogeotropic Nystagmus (Cupulolithiasis / Anterior Arm Canalithiasis, $<20\%$)**:
     - Nystagmus beats **AWAY FROM THE GROUND (Apogeotropic / toward ceiling)** on both sides.
     - The **AFFECTED EAR IS THE SIDE WITH WEAKER / LESS INTENSE NYSTAGMUS**.

```mermaid
%% Horizontal Canal BPPV Diagnosis and Repositioning
flowchart TD
  N1(["Acute Positional Vertigo: Negative Dix-Hallpike -> Perform Supine Roll Test (Pagnini-McClure)"]) --> N2{"Differentiate Nystagmus Directionality on Head Rotation"}
  N2 -->|"Geotropic Nystagmus (Fast Phase Beats DOWNWARD TOWARD GROUND on Both Sides)"| N3{"Canalithiasis Subtype"}
  N3 --> N4["Affected Ear is Side with HIGHER Nystagmus Intensity (Ewald's 2nd Law)"]
  N3 --> N5["Lempert 360-Degree Barbecue Roll Maneuver (Roll 90° Steps Away from Affected Ear) or Gufoni Maneuver"]
  N2 -->|"Apogeotropic Nystagmus (Fast Phase Beats UPWARD TOWARD CEILING on Both Sides)"| N6{"Cupulolithiasis / Anterior Arm Subtype"}
  N6 --> N7["Affected Ear is Side with LOWER Nystagmus Intensity"]
  N6 --> N8["Modified Gufoni Maneuver (Decubitus on Affected Side + Rapid Head Turn Downward 45°)"]
  N8 --> N9["Converts Apogeotropic Cupulolithiasis into Geotropic Canalithiasis for Final Clearance"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8,N9 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N5 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N7 red
```

### Surgical Technique & Critical Safety Checks
- **Treatment Modalities**:
  - **Lempert $360^\circ$ Barbecue Roll**: Sequential $90^\circ$ rolls away from affected ear back to prone and sitting.
  - **Gufoni Maneuver**: Rapid side-lying to healthy side followed by $45^\circ$ downward head rotation.

## Connected Concepts & Graph Traversal
- **Posterior Canal Diagnostic Maneuver**: [[The Dix-Hallpike maneuver produces torsional upbeating nystagmus in posterior canal BPPV|Dix-Hallpike Maneuver]]
- **Repositioning Counterpart**: [[The Epley particle repositioning maneuver clears otoconia from the posterior canal into the utricle|Epley Repositioning]]
- **Nystagmus Biophysical Laws**: [[Ewald's laws and Alexander's law govern the directional dynamics and intensity of vestibular nystagmus|Ewald's 2nd Law in Horizontal BPPV]]
- **Otolith Utricular Origin**: [[oVEMP evaluates the utricle and superior vestibular nerve via crossed inferior oblique excitation|Utricular Otoconia Origin]]
- **Vestibular Neuritis Differential**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Acute Vestibular Neuritis]]
