# `sk.oto` — Comprehensive Otolaryngology Knowledge Graph

A structured residency knowledge graph and surgical decision engine covering 1,036 single-concept atomic notes across all seven otolaryngology subspecialties:

- **Laryngology, Voice & Airway** (`Laryngology/`)
- **Rhinology, Endoscopic Sinus & Anterior Skull Base Surgery** (`Sinus/`)
- **Facial Plastic & Reconstructive Surgery** (`FPRS/`)
- **Head & Neck Surgical Oncology, Endocrine & Microvascular Reconstruction** (`Head_and_Neck/`)
- **Otology, Neurotology & Lateral Skull Base Surgery** (`Otology/`)
- **Pediatric Otolaryngology & Sleep Surgery** (`Pediatrics/`)
- **Craniomaxillofacial Trauma & Orthognathic Surgery** (`Trauma/`)

Live interactive web knowledge graph: **[skflx.github.io/ohns-wiki-skflx](https://skflx.github.io/ohns-wiki-skflx/)**.

Palette source of truth is the site repo, `skflx/skflx.github.io` (`css/site.css`); `node scripts/check-signal.mjs` checks this wiki's secondary colours against it.

## Reader feedback

Every note ends with **Suggest a correction**, which opens the GitHub issue form `.github/ISSUE_TEMPLATE/note-feedback.yml` prefilled with the note's link (`quartz/components/NoteFeedback.tsx`). `.github/workflows/feedback-triage.yml` then labels the issue with `scripts/triage-feedback.mjs`: `feedback`, `status:triage` (remove it once reviewed), `kind:*` from the form, `area:*` from the note's folder, and `needs-source` for an error or outdated claim given without a source. Labels are created on first use. Corrections are made in the vault and arrive with the next publish. Test the labelling with `node scripts/triage-feedback.mjs --self-test`.
