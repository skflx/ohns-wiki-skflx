---
title: "The Vidian nerve carries parasympathetic secretomotor and sympathetic vasomotor fibers"
tier: "Tier I: Bedrock Foundations"
tags:
  - rhinology
  - autonomics
  - vidian-nerve
  - vasomotor-rhinitis
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch8, p.188"
aliases:
  - "Vidian Nerve Neuroanatomy"
  - "Nerve of Pterygoid Canal"
  - "Sinonasal Autonomic Control"
---

# The Vidian nerve carries parasympathetic secretomotor and sympathetic vasomotor fibers

## Active Recall

> [!question]- Which component of the Vidian nerve synapses in the pterygopalatine ganglion, and what clinical symptom does its stimulation cause?
> *Answer / Clinical Rationale*: The **preganglionic parasympathetic fibers** from the greater petrosal nerve synapse in the PPG; their activation causes profuse watery glandular rhinorrhea and mucosal swelling.

> [!question]- Why can vidian neurectomy cause postoperative dry eye, and what anatomical landmark directs the surgeon to the Vidian canal?
> *Answer / Clinical Rationale*: Parasympathetic secretomotor fibers to the lacrimal gland travel through the Vidian nerve. The Vidian canal is located on the floor of the sphenoid sinus, running directly along the junction of the pterygoid plates and sphenoid body lateral to the vomer.

## Core Clinical & Mechanistic Principles
The **Vidian nerve (nerve of the pterygoid canal)** provides the master autonomic innervation to the nasal mucosa, paranasal sinuses, and lacrimal gland. It is formed at the junction of the **greater petrosal nerve** and the **deep petrosal nerve** within the foramen lacerum / pterygoid canal.

```mermaid
%% Vidian Nerve Neuroanatomy and Autonomic Pathways
flowchart TD
  N1(["Pterygoid / Vidian Canal: Junction of Greater & Deep Petrosal Nerves"]) --> N2{"Dual Autonomic Fiber Composition"}
  N2 -->|"Greater Superficial Petrosal Nerve (CN VII: Pre-Ganglionic Parasympathetic)"| N3["Secretomotor Supply to Lacrimal Gland & Sinonasal Seromucinous Glands"]
  N2 -->|"Deep Petrosal Nerve (Internal Carotid Plexus: Post-Ganglionic Sympathetic)"| N4["Vasoconstrictor Vasomotor Supply to Sinonasal Mucosal Capacitance Vessels"]
  N2 --> N5["Vidian Nerve Traverses Vidian Canal to Enter Pterygopalatine Fossa"]
  N5 --> N6["Synapses at Sphenopalatine Ganglion (SPG)"]
  N6 --> N7{"Endoscopic Transnasal Vidian Neurectomy (ETVN)"}
  N7 -->|"Transection of Vidian Nerve in Lateral Sphenoid Wall"| N8["Ablates Cholinergic Drive -> Resolves Intractable Watery Rhinorrhea"]
  N7 -->|"Transient Side Effect Check"| N9["Temporary Dry Eye / Decreased Tear Production (Schirmer <5 mm)"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N6 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8,N9 red
```

### Neuroanatomical Fiber Composition
1. **Parasympathetic Component (Greater Petrosal Nerve)**:
   - Origin: Superior salivatory nucleus  $\r\r\rightarrow$ Nervus intermedius (CN VII)  $\r\r\rightarrow$ Geniculate ganglion  $\r\r\rightarrow$ Greater petrosal nerve.
   - Synapse: **Pterygopalatine ganglion (PPG)**.
   - Postganglionic Action: Mediates profuse **watery glandular rhinorrhea** and mucosal vasodilation.
2. **Sympathetic Component (Deep Petrosal Nerve)**:
   - Origin: Intermediolateral cell column of thoracic cord  $\r\r\rightarrow$ Superior cervical ganglion (SCG)  $\r\r\rightarrow$ Internal carotid plexus  $\r\r\rightarrow$ Deep petrosal nerve.
   - Synapse: **Does NOT synapse in PPG** (passes directly through).
   - Postganglionic Action: Mediates **vasoconstriction**, venous sinusoid contraction, and nasal decongestion.

## Surgical Nuances & Vidian Neurectomy
- **Indications**: Intractable non-allergic [[Transnasal endoscopic vidian neurectomy treats refractory non-allergic cholinergic rhinitis|vasomotor rhinitis]] (cholinergic hypersecretion / profuse watery rhinorrhea) refractory to topical ipratropium bromide.
- **Surgical Approaches**:
  - **Transnasal Endoscopic Approach**: Elevate a mucoperiosteal flap over the posterior wall of the maxillary sinus and sphenoid floor. The Vidian canal orifice is identified in the floor of the sphenoid sinus directly lateral to the base of the vomer and inferior to the sphenoid ostium.
  - **Neurovascular Landmark**: The Vidian canal is an essential landmark in expanded skull base surgery (EEA), directing the surgeon directly to the **petrous / paraclival internal carotid artery** (see [[Transpterygoid EEA exposes juvenile nasopharyngeal angiofibromas and lateral sphenoid defects|Transpterygoid Corridor]]).
- **Potential Complication**: **Dry eye syndrome (keratoconjunctivitis sicca)** due to denervation of the lacrimal gland (greater petrosal secretomotor fibers).

## Connected Concepts & Graph Traversal
- **Physiological Target**: [[Respiratory epithelium drives mucociliary clearance toward natural ostia|Mucociliary Secretions]]
- **Skull Base Corridor**: [[Transpterygoid EEA exposes juvenile nasopharyngeal angiofibromas and lateral sphenoid defects|Transpterygoid EEA]]
- **Vascular Landmark**: [[The crista ethmoidalis guides endoscopic sphenopalatine artery ligation|Sphenopalatine Artery & PPG]]
- **Carotid Landmark**: [[Intraoperative ICA injury requires two-surgeon suction and crushed muscle patch hemostasis|ICA Localization]]
- **Diagnostic Evaluation**: [[Jones primary and secondary dye tests differentiate canalicular from nasolacrimal duct obstruction|Lacrimal Secretomotor Correlate to Jones Testing]]
- **Anatomical Foundation**: [[Vidian canal identification at the junction of the sphenoid floor and pterygoid base differentiates the Vidian nerve from the inferomedial palatovaginal canal|Vidian Canal Identification]]
