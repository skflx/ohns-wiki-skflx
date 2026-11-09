---
title: "Esthesioneuroblastoma arises from olfactory neuroepithelium and is staged by the Kadish classification"
tier: "Tier S: Second-Echelon Oncology Heads"
tags:
  - head-and-neck
  - sinonasal
  - skull-base
  - esthesioneuroblastoma
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch5, p.94–95"
aliases:
  - "Esthesioneuroblastoma"
  - "Olfactory Neuroblastoma"
  - "Kadish Staging"
---

# Esthesioneuroblastoma arises from olfactory neuroepithelium and is staged by the Kadish classification

## Active Recall

> [!question]- Why is 'unilateral nasal polyp' the classic presentation trap?
> *Answer / Clinical Rationale*: The tumor mimics inflammatory polyposis but is unilateral at the olfactory cleft — unilateral disease earns imaging and histology, not steroid sprays.

> [!question]- Distinguish what Kadish and Hyams each encode.
> *Answer / Clinical Rationale*: Kadish is anatomic extent (A-C, modified D); Hyams is histologic grade — together they drive multimodality decisions and prognosis.

## Core Clinical & Mechanistic Principles
- Origin: olfactory neuroepithelium of the **cribriform niche** — the tumor is born straddling the anterior skull base, which is why the resection question is always a dural question; bimodal age distribution.
- **Kadish**: A confined to nasal cavity; B involving paranasal sinuses; C beyond sinonasal cavity (orbit, skull base, intracranial); (modified D adds nodal/distant disease). **Hyams grade** (I-IV) is the histologic prognosticator layered on top.
- Presentation is banal — unilateral obstruction, epistaxis, hyposmia — which buys the tumor time; the unilateral polypoid mass at the olfactory cleft earns imaging before biopsy thinking (vascular and intracranial mimics live here too).
- Nodal behavior is distinctive: **delayed cervical metastases years later**, justifying long surveillance and, in higher-risk disease, elective neck irradiation discussions.

```mermaid
%% Kadish and Modified Kadish Staging for Esthesioneuroblastoma
flowchart TD
  N1(["Sinonasal / Olfactory Neuroblastoma: Contrast MRI & High-Resolution CT Paranasal Sinuses"]) --> N2{"Kadish / Modified Kadish Stage Classification"}
  N2 -->|"Sinonasal Localized Disease (Stages A & B)"| N3{"Early Kadish Stages"}
  N3 -->|"Stage A (Tumor Strictly Confined within Nasal Cavity Only)"| N4["Endoscopic Endonasal Resection (EER) + Clear Margins"]
  N3 -->|"Stage B (Tumor Involves Nasal Cavity and Extends into Paranasal Sinuses)"| N5["Craniofacial / Endoscopic Resection + Postoperative Radiotherapy"]
  N2 -->|"Locally Advanced & Regional/Distant Spread (Stages C & D)"| N6{"Advanced Kadish Stages"}
  N6 -->|"Stage C (Tumor Extends Beyond Sinonasal Cavity into Orbit, Cribriform Plate, or Anterior Cranial Fossa Dura)"| N7["Transcribriform Craniofacial Resection + Adjuvant RT/Chemo"]
  N6 -->|"Stage D (Modified Kadish: Cervical Lymph Node Metastases (N+) or Distant Metastases (M+))"| N8["Comprehensive Neck Dissection + Multimodal Chemoradiation"]
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N5 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8 red
```

### Management & Critical Safety Checks
- Treatment: complete resection including cribriform/dura as indicated — **expanded endoscopic endonasal** resection now rivals open craniofacial for appropriately selected disease — followed by radiation in most; chemotherapy for high-grade/advanced.
- Surveillance is measured in decades: late local, nodal, and dural-margin recurrences define this disease's follow-up (see [[The Hadad-Bassagasteguy nasoseptal flap is pedicled on the posterior septal artery|Nasoseptal Flap Repair]]).

## Connected Concepts & Graph Traversal
- **Reconstructive Skull Base Flap**: [[The Hadad-Bassagasteguy nasoseptal flap is pedicled on the posterior septal artery|Nasoseptal Flap Repair]]
- **Sinonasal Neoplastic Differential**: [[Sinonasal inverting papilloma requires subperiosteal excision and hyperostotic bone drill-out|Inverting Papilloma Differential]]
- **Olfactory Anatomy**: [[UPSIT and CCCRC tests quantify olfactory thresholds and odor identification in chemosensory disorders|Olfactory Testing]]
- **Skull Base Corridor Hazards**: [[Onodi cells place the optic nerve and carotid artery at risk during posterior ethmoidectomy|Posterior Ethmoid Hazards]]
- **CSF Leak Multi-Layer Closure**: [[CSF leak defect preparation requires circumferential bone de-mucosalization|Anterior Skull Base Dural Reconstruction]]
- **🔗 Embryological Origin (Pediatrics)**: [[Pediatric head and neck neuroblastoma originates from neural crest sympathoadrenal precursors and carries prognosis dictated by MYCN amplification|Shared Neural Crest/Neuroectodermal Lineage]]
- **Differential Diagnosis**: [[Biphasic sinonasal malignancies exhibit divergent epithelial, mesenchymal, and neural differentiation requiring diagnostic immunohistochemical panels|Biphasic Sinonasal Malignancy Differential]]
- **Open Craniofacial Exposure**: [[Midface degloving, lateral rhinotomy, and Weber-Fergusson approaches provide graded open exposure for sinonasal and skull base malignancies|Open Midface Approaches]]
