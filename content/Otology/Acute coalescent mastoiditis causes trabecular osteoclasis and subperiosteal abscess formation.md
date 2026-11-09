---
title: "Acute coalescent mastoiditis causes trabecular osteoclasis and subperiosteal abscess formation"
tier: "Tier II: Middle Ear & Mastoid Surgery: Tympanoplasty, Ossiculoplasty & Mastoidectomy"
tags:
  - otology
  - mastoiditis
  - coalescent-mastoiditis
  - subperiosteal-abscess
  - complications
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch22, p.412"
aliases:
  - "Acute Coalescent Mastoiditis"
  - "Coalescent Mastoiditis"
  - "Subperiosteal Abscess"
  - "Mastoiditis Complications"
---

# Acute coalescent mastoiditis causes trabecular osteoclasis and subperiosteal abscess formation

## Active Recall

> [!question]- What pathophysiologic mechanism transforms simple acute mastoiditis into acute *coalescent* mastoiditis?
> *Answer / Clinical Rationale*: Obstruction of the **aditus ad antrum** traps purulent exudate under high pressure within the mastoid air cells. This produces local ischemia, hyperemic decalcification, and **osteoclastic resorption of the thin bony mastoid trabeculae**, coalescing separate air cells into a single large purulent empyema cavity.

> [!question]- What named subperiosteal abscess tracks through the mastoid tip medial to the sternocleidomastoid attachment?
> *Answer / Clinical Rationale*: **Bezold's abscess**, where pus erodes through the thin medial cortex of the mastoid tip (digastric groove) into the SCM sheath, tracking along the deep cervical fascia into the parapharyngeal space and superior mediastinum.

> [!question]- What clinical presentation differentiates a subperiosteal postauricular abscess from Citelli's and Luc's abscesses?
> *Answer / Clinical Rationale*: A classic **postauricular subperiosteal abscess** erodes lateral mastoid cortex over the antrum (Macewen's triangle), displacing the pinna anteriorly and inferiorly with loss of the postauricular crease. **Citelli's abscess** tracks posterior to the posterior belly of the digastric muscle, while **Luc's abscess** extends subperiosteally anteriorly over the root of the zygoma and external auditory canal.

## Core Clinical & Mechanistic Principles
**Acute coalescent mastoiditis** represents the most frequent intratemporal complication of acute otitis media (AOM), occurring when middle ear purulence extends into the mastoid pneumatic system with blockage of the ventilating **aditus ad antrum**:

- **Microbiology & Risk Factors**:
  - Dominant pathogens: *Streptococcus pneumoniae* (including multi-drug resistant serotypes), *Streptococcus pyogenes* (Group A Strep), *Staphylococcus aureus*, and *Pseudomonas aeruginosa* (in chronic/recurrent disease).
- **The Coalescent Cascade**:
  1. *Eustachian Tube Dysfunction & AOM*: Suppurative infection in the tympanic cavity.
  2. *Mucosal Hyperplasia & Aditus Blockage*: Mucosal edema seals the aditus ad antrum, isolating the mastoid antrum and surrounding periantral air cells.
  3. *Pressure Demineralization & Osteolysis*: Trapped pus under pressure causes vascular thrombosis, local acidosis, and osteoclast activation, melting the inter-cellular bony trabeculae (**coalescence**).
  4. *Cortical Erosion & Named Abscess Formations*:
     - **Postauricular Subperiosteal Abscess ($>80\%$)**: Lateral cortex erosion over Macewen's triangle, causing outward, downward pinna protrusion.
     - **Bezold's Abscess**: Medial mastoid tip erosion into the SCM muscle insertion and parapharyngeal space.
     - **Citelli's Abscess**: Posterior digastric groove erosion tracking toward the occipital bone.
     - **Luc's Abscess**: Subperiosteal pus tracking along the root of the zygomatic arch and temporal fossa.

```mermaid
%% Coalescent Mastoiditis Pathogenesis and Complications
flowchart TD
  N1(["Unresolved / Inadequately Treated Acute Otitis Media"]) --> N2["Purulent Exudate Fills Mastoid Air Cell System under High Hydrostatic Pressure"]
  N2 --> N3["Acidic Ischemia & Hyperemic Osteoclasis Dissolve Bony Inter-Cell Trabeculae"]
  N3 --> N4["Converts Multi-Cellular Mastoid into Single Large Empyema Cavity (Coalescence)"]
  N4 --> N5{"Erosion Pathways of Suppurative Infection"}
  N5 -->|"Lateral Cortex Erosion (Postauricular Subperiosteal Abscess)"| N6["Auricular Proptosis & Loss of Retroauricular Sulcus"]
  N5 -->|"Mastoid Tip Medial Cortex Erosion (Bezold Abscess)"| N7["Deep Neck Abscess Tracking Deep to SCM & Digastric"]
  N5 -->|"Tegmen Mastoid / Sigmoid Plate Erosion"| N8["Epidural Abscess, Meningitis & Sigmoid Sinus Thrombosis"]
  N6 --> N9["High-Resolution Temporal Bone CT + Urgent Cortical Mastoidectomy & Tympanostomy Tube"]
  N7 --> N9
  N8 --> N9
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3,N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N6,N7,N8 red
```

### Medical & Surgical Management Hierarchy
- **Non-Coalescent Incipient Mastoiditis**: Intravenous broad-spectrum antibiotics (ampicillin-sulbactam, ceftriaxone) + wide myringotomy $\pm$ tympanostomy tube placement.
- **Coalescent Bone Erosion or Subperiosteal Abscess**: Mandatory **[[Complete cortical mastoidectomy unroofs the mastoid antrum and establishes dependent middle ear drainage|complete cortical mastoidectomy]]** combined with needle aspiration or incision and drainage of the subperiosteal abscess.

## Connected Concepts & Graph Traversal
- **Surgical Decompression**: [[Complete cortical mastoidectomy unroofs the mastoid antrum and establishes dependent middle ear drainage|Cortical Mastoidectomy Craft]]
- **Intracranial Spread**: [[Otogenic intracranial complications escalate from meningitis to sigmoid sinus thrombosis and brain abscess|Otogenic Intracranial Complications]]
- **Sinus Thrombophlebitis**: [[Lateral sinus thrombophlebitis presents with picket fence fevers and Griesinger sign requiring intravenous antibiotics and mastoidectomy|Lateral Sinus Thrombophlebitis]]
- **Facial Nerve Complication**: [[The facial nerve traverses six distinct anatomical segments from the pons to the parotid gland|Facial Nerve Anatomy & Dehiscence]]
- **AOM Foundations**: [[Uncomplicated acute otitis media in pediatric and adult patients is treated with first-line high-dose amoxicillin|AOM First-Line Management]]
