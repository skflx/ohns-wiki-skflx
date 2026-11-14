// acronyms.ts
import { findAndReplace } from "hast-util-find-and-replace";

// terms.json
var terms_default = {
  ARIA: "Allergic Rhinitis and its Impact on Asthma (guideline)",
  CTA: "Clinical and Translational Allergy (journal)",
  EPOS: "European Position Paper on Rhinosinusitis and Nasal Polyps",
  EUFOREA: "European Forum for Research and Education in Allergy and Airway Diseases",
  ICAR: "International Consensus statement on Allergy and Rhinology",
  "ICAR-AR": "International Consensus statement on Allergy and Rhinology: Allergic Rhinitis",
  HRCT: "high-resolution computed tomography",
  LIO: "Laryngoscope Investigative Otolaryngology (journal)",
  LoE: "level of evidence",
  RAND: "RAND Corporation (RAND/UCLA appropriateness method)",
  UCLA: "University of California, Los Angeles (RAND/UCLA appropriateness method)",
  MCID: "minimal clinically important difference",
  PROM: "patient-reported outcome measure",
  SMD: "standardized mean difference",
  ABRS: "acute bacterial rhinosinusitis",
  AECRS: "acute exacerbation of chronic rhinosinusitis",
  AERD: "aspirin-exacerbated respiratory disease",
  AFRS: "allergic fungal rhinosinusitis",
  ARS: "acute rhinosinusitis",
  CCAD: "central compartment atopic disease",
  CRS: "chronic rhinosinusitis",
  CRSsNP: "chronic rhinosinusitis without nasal polyps",
  CRSwNP: "chronic rhinosinusitis with nasal polyps",
  eCRS: "eosinophilic chronic rhinosinusitis (\u226510 eosinophils/hpf)",
  ETD: "eustachian tube dysfunction",
  LAR: "local allergic rhinitis (entopy)",
  "N-ERD": "NSAID-exacerbated respiratory disease",
  NAR: "non-allergic rhinitis",
  NARES: "non-allergic rhinitis with eosinophilia syndrome",
  PCD: "primary ciliary dyskinesia",
  RARS: "recurrent acute rhinosinusitis",
  "ACQ-6": "Asthma Control Questionnaire, 6-item",
  ACT: "Asthma Control Test",
  BAT: "basophil activation test",
  CRD: "component-resolved diagnostics",
  FeNO: "fractional exhaled nitric oxide",
  HDM: "house dust mite",
  HSA: "human serum albumin",
  LMS: "Lund\u2013Mackay score (CT)",
  MQT: "modified quantitative testing (skin testing)",
  NCS: "nasal congestion score",
  nNO: "nasal nitric oxide",
  NPS: "nasal polyp score",
  RQLQ: "Rhinoconjunctivitis Quality of Life Questionnaire",
  sIgE: "allergen-specific IgE",
  sIgG4: "allergen-specific IgG4",
  SNOT: "Sino-Nasal Outcome Test",
  "SNOT-22": "Sino-Nasal Outcome Test, 22-item (0\u2013110, higher is worse)",
  SPT: "skin prick test",
  TNSS: "total nasal symptom score",
  UPSIT: "University of Pennsylvania Smell Identification Test",
  AIT: "allergen immunotherapy (SCIT or SLIT)",
  AMT: "appropriate medical therapy",
  ATAD: "aspirin therapy after desensitization",
  BNO1016: "standardized five-herb extract (Sinupret)",
  EMLP: "endoscopic modified Lothrop procedure",
  ESS: "endoscopic sinus surgery",
  FESS: "functional endoscopic sinus surgery",
  ILIT: "intralymphatic immunotherapy",
  INAH: "intranasal antihistamine",
  INCS: "intranasal corticosteroid",
  LTRA: "leukotriene receptor antagonist",
  SCIT: "subcutaneous immunotherapy",
  SLIT: "sublingual immunotherapy",
  TCM: "traditional Chinese medicine",
  EVEREST: "head-to-head trial: dupilumab vs omalizumab in CRSwNP with asthma",
  NAVIGATOR: "phase 3 trial: tezepelumab in severe asthma",
  OSTRO: "phase 3 trial: benralizumab in CRSwNP",
  POLYP: "phase 3 trials (POLYP 1 and 2): omalizumab in CRSwNP",
  SINUS: "SINUS-24 and SINUS-52, the phase 3 trials of dupilumab in CRSwNP",
  "SINUS-24": "phase 3 trial: dupilumab in CRSwNP, 24 weeks",
  "SINUS-52": "phase 3 trial: dupilumab in CRSwNP, 52 weeks",
  SYNAPSE: "phase 3 trial: mepolizumab in CRSwNP",
  WAYPOINT: "phase 3 trial: tezepelumab in CRSwNP",
  GSPN: "greater (superficial) petrosal nerve",
  OMC: "ostiomeatal complex",
  PNN: "posterior nasal nerve",
  ADCC: "antibody-dependent cell-mediated cytotoxicity",
  ILC: "innate lymphoid cell",
  ILC1: "group 1 innate lymphoid cell",
  ILC2: "group 2 innate lymphoid cell (type 2: IL-5, IL-13)",
  ILC3: "group 3 innate lymphoid cell",
  Th0: "naive (uncommitted) CD4 helper T cell",
  Tr1: "type 1 regulatory T cell (IL-10-producing)",
  "B7-1": "CD80",
  "B7-2": "CD86",
  CCL5: "RANTES",
  "5R\u03B1": "IL-5R\u03B1",
  CD16: "Fc\u03B3RIIIa",
  CD23: "Fc\u03B5RII",
  CD28: "T-cell costimulatory receptor for CD80/CD86",
  CD40: "B-cell receptor for CD40L",
  CD40L: "CD154",
  CD80: "B7-1",
  CD86: "B7-2",
  CD124: "IL-4R\u03B1",
  CD125: "IL-5R\u03B1",
  CD132: "\u03B3c",
  CD154: "CD40L",
  CD213a1: "IL-13R\u03B11",
  EP2: "prostaglandin E2 receptor 2",
  Fc\u03B5RI: "high-affinity IgE receptor (\u03B1\u03B2\u03B3\u2082)",
  Fc\u03B5RII: "CD23",
  Fc\u03B5RIII: "a third IgE receptor as listed by ICAR",
  Fc\u03B3RIIIa: "CD16",
  GITRL: "glucocorticoid-induced TNF receptor ligand",
  HMGB1: "high-mobility group box 1 (alarmin)",
  "IL-2R\u03B3": "CD132",
  "IL-4R\u03B1": "CD124",
  "IL-5R\u03B1": "CD125",
  "IL-13R\u03B11": "CD213a1",
  IL1RL1: "ST2",
  ITAM: "immunoreceptor tyrosine-based activation motif",
  LSR: "lipolysis-stimulated lipoprotein receptor",
  "PR-10": "pathogenesis-related protein family 10 (birch Bet v 1 homologs)",
  ST2: "IL1RL1",
  TL1A: "TNF-like ligand 1A",
  TRP: "transient receptor potential (ion channel)",
  TRPA1: "transient receptor potential ankyrin 1",
  TRPV1: "transient receptor potential vanilloid 1 (capsaicin receptor)",
  TSLP: "thymic stromal lymphopoietin (epithelial alarmin)",
  VIP: "vasoactive intestinal peptide",
  "AP-1": "activator protein 1 (transcription factor)",
  "EGR-2": "early growth response 2 (transcription factor)",
  "GATA-3": "GATA-binding protein 3",
  NFAT: "nuclear factor of activated T cells",
  STAT4: "signal transducer and activator of transcription 4 (Th1)",
  STAT5: "signal transducer and activator of transcription 5",
  STAT6: "signal transducer and activator of transcription 6 (IL-4/IL-13 \u2192 Th2)",
  "ZO-1": "zonula occludens-1 (tight-junction protein)",
  "5-LO": "5-lipoxygenase (ALOX5)",
  "15-HETE": "15-hydroxyeicosatetraenoic acid",
  "15-LOX-1": "15-lipoxygenase-1",
  "15-oxo-ETE": "15-oxo-eicosatetraenoic acid",
  ALOX5: "5-lipoxygenase gene",
  CysLT: "cysteinyl leukotriene (LTC4, LTD4, LTE4)",
  CysLT1: "cysteinyl leukotriene receptor 1 (montelukast target)",
  LTC4: "leukotriene C4",
  LTD4: "leukotriene D4",
  LTE4: "leukotriene E4 (urinary marker in AERD)",
  PGD2: "prostaglandin D2",
  PGE2: "prostaglandin E2",
  PGF2: "prostaglandin F2",
  ECP: "eosinophil cationic protein",
  FCER1A: "gene for the Fc\u03B5RI \u03B1 chain",
  MS4A2: "gene for the Fc\u03B5RI \u03B2 chain",
  SPL: "sound pressure level",
  AAF: "anterior auditory field",
  ROC: "receiver operating characteristic",
  AUC: "area under the curve",
  GCaMP: "genetically encoded calcium indicator (green fluorescent protein, calmodulin, M13 peptide)",
  GCaMP6: "GCaMP, generation 6 (genetically encoded calcium indicator)",
  CaMKII\u03B1: "calcium/calmodulin-dependent protein kinase II alpha",
  DeepLabCut: "DeepLabCut (markerless pose-estimation software)",
  C57BL: "C57 black (inbred laboratory mouse strain)"
};

// acronyms.ts
var TERMS = terms_default;
var keys = Object.keys(TERMS).filter((k) => k.length >= 2).sort((a, b) => b.length - a.length);
var escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var PATTERN = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${keys.map(escapeRe).join("|")})(?![\\p{L}\\p{N}])`,
  "gu"
);
var SKIP_TAGS = /* @__PURE__ */ new Set(["a", "abbr", "code", "pre", "kbd", "h1", "h2", "h3", "h4", "h5", "h6", "math", "svg", "script", "style"]);
var SKIP_CLASSES = /* @__PURE__ */ new Set(["katex", "katex-display", "katex-html", "site-topbar"]);
function isSkipped(node) {
  if (SKIP_TAGS.has(node.tagName)) return true;
  const cls = node.properties?.className;
  const list = Array.isArray(cls) ? cls : typeof cls === "string" ? cls.split(/\s+/) : [];
  return list.some((c) => SKIP_CLASSES.has(String(c)));
}
var acronymsRehype = () => (tree) => {
  const seen = /* @__PURE__ */ new Set();
  findAndReplace(
    tree,
    [
      [
        PATTERN,
        (match) => {
          if (seen.has(match)) return false;
          seen.add(match);
          return {
            type: "element",
            tagName: "abbr",
            properties: { className: ["term-abbr"], title: TERMS[match] },
            children: [{ type: "text", value: match }]
          };
        }
      ]
    ],
    { ignore: isSkipped }
  );
};
var norm = (s) => s.normalize("NFKC").replace(/[\u2018\u2019\u02BC]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\s+/g, " ").trim().toLowerCase();
var textOf = (n) => n.type === "text" ? n.value : "children" in n ? n.children.map(textOf).join("") : "";
var dropDuplicateTitle = () => (tree, file) => {
  const title = file.data.frontmatter?.title;
  if (typeof title !== "string") return;
  const i = tree.children.findIndex((c) => c.type === "element");
  const first = tree.children[i];
  if (!first || first.type !== "element" || first.tagName !== "h1") return;
  if (norm(textOf(first)) !== norm(title)) return;
  tree.children.splice(i, 1);
  const toc = file.data.toc;
  if (!toc) return;
  const kept = toc.filter((e) => e.slug !== first.properties?.id);
  const min = Math.min(...kept.map((e) => e.depth));
  file.data.toc = kept.map((e) => ({ ...e, depth: e.depth - min }));
};
var Acronyms = () => ({
  name: "Acronyms",
  htmlPlugins() {
    return [() => acronymsRehype(), dropDuplicateTitle];
  }
});
var acronyms_default = Acronyms;
export {
  Acronyms,
  acronyms_default as default
};
