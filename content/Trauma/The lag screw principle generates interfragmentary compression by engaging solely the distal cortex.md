---
title: "The lag screw principle generates interfragmentary compression by engaging solely the distal cortex"
tier: "Tier II: Biomechanics & Rigid Fixation"
tags:
  - trauma
  - lag-screw
  - internal-fixation
  - compression
last_revised: 2026-11-09
status: complete
sources:
  - "AOCMF2012, Ch1.5, p.97"
aliases:
  - "Lag Screw Fixation"
  - "Interfragmentary Compression Mechanics"
  - "Gliding Hole and Thread Hole Technique"
---

# The lag screw principle generates interfragmentary compression by engaging solely the distal cortex

## Active Recall

> [!question]- What are the four precise technical steps required to insert a lag screw across an oblique craniomaxillofacial fracture?
> *Answer / Clinical Rationale*: (1) Drill the **gliding hole** through the near (proximal) cortex using a drill bit equal to the outer thread diameter of the screw (e.g., $2.0\text{ mm}$ bit for a $2.0\text{ mm}$ screw). (2) Insert a drill sleeve into the gliding hole and drill the **thread hole** through the far (distal) cortex using the smaller core pilot bit (e.g., $1.5\text{ mm}$ bit). (3) **Countersink** the proximal outer cortex to seat the screw head evenly and prevent stress concentration. (4) Drive the screw home: as the head impinges on the countersunk outer cortex, threads engage solely in the far fragment, drawing the two cortices together under high interfragmentary compression.

> [!question]- Why must a lag screw be oriented strictly perpendicular to the fracture plane rather than perpendicular to the outer cortical bone surface?
> *Answer / Clinical Rationale*: If a lag screw is placed perpendicular to the outer bone surface across an oblique fracture, tightening the screw generates an unresolved shearing force parallel to the fracture plane, causing translational slippage, shortening, and loss of anatomical reduction. Orienting the screw **strictly perpendicular to the fracture line** converts all torque directly into perpendicular compressive force, eliminating shear and maximizing frictional interlock.

## Core Clinical & Mechanistic Principles

The **lag screw principle** represents the most efficient method of producing absolute stability and primary contact bone healing without the bulk of a plate. By generating active interfragmentary compression across a fracture plane, the normal masticatory and bending forces are converted into compressive friction between opposing cortical surfaces.

```mermaid
%% Lag Screw Insertion Biomechanical Sequence
flowchart TD
  N1(["Oblique Cortical Fracture Anatomically Reduced"]) --> N2["Step 1: Drill Wide Gliding Hole in Near Cortex (Outer Thread Diameter)"]
  N2 -->|"Insert Centering Drill Guide"| N3["Step 2: Drill Narrow Thread Hole in Far Cortex (Inner Core Diameter)"]
  N3 -->|"Countersink Near Cortex Entry"| N4{"Screw Thread Engagement Mechanics"}
  N4 ==>|"True Lag Screw: Threads Bypass Near Cortex & Bite Far Cortex Only"| N5["Tightening Draws Far Cortex Against Near Cortex"]
  N5 --> N6(["Generates 1,000-2,000 N Interfragmentary Compression (<2% Strain)"])
  N4 -.->|"Error / Position Screw: Threads Engage Both Cortices"| N7(["Zero Interfragmentary Compression (Maintains Fixed Gap Distance)"])
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3,N5 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N6 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N7 red
```

In the craniomaxillofacial skeleton, lag screws are primarily utilized in:
1. **Mandibular Symphysis and Parasymphysis**: Two $2.4\text{ mm}$ lag screws placed horizontally across an oblique sagittal fracture line produce outstanding rigidity against rotational and torsional splay, often avoiding the need for [[Mandible fractures require anatomical reduction and load-sharing miniplate fixation along Champy lines of ideal osteosynthesis|bulky mandibular miniplates]].
2. **Mandibular Body and Angle Oblique Fractures**: Sagittal fractures of the lower border can be rigidly compressed using bicortical lag screws.
3. **ZMC and Orbital Rim Fractures**: Micro-lag screws ($1.3\text{ mm}$ or $1.5\text{ mm}$) secure frontomaxillary or orbital rim bone fragments.

A fundamental distinction exists between a **true lag screw** (which features a smooth, unthreaded shank near the head or a gliding hole) and a **position screw**. A position screw has threads engaging both cortices; it holds fragments in a fixed spatial relationship without exerting compression, which is mandatory when bridging osteotomies where fragment compression would torque condylar position.

## Connected Concepts & Graph Traversal
- **Biological Healing Threshold**: [[Primary contact bone healing requires absolute stability with interfragmentary strain under two percent|Primary Contact Bone Healing Threshold]]
- **Fixed-Angle Plate Alternative**: [[Locking internal fixator plates preserve periosteal microvascular perfusion without frictional bone compression|Locking Internal Fixator Technology]]
- **🔗 Buttress Multi-Point Alignment (FPRS)**: [[Zygomaticomaxillary complex fractures disrupt four buttress articulations requiring multi-point reduction|ZMC Multi-Point Rigid Fixation]]
- **Symphyseal Compression Craft**: [[Mandibular symphyseal and parasymphyseal fractures require dual-plate fixation to neutralize torsional rotational vectors|Mandibular Symphysis & Parasymphysis Fixation]]
- **🔗 Condylar Mobility Protection (FPRS)**: [[Mandibular condyle fractures managed via open versus closed reduction depend on displacement and occlusion|Condylar Fracture Management]]
