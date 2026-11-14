#!/usr/bin/env node
// Labels a reader-feedback issue (.github/ISSUE_TEMPLATE/note-feedback.yml) from its form fields.
// Reads the issue body from ISSUE_BODY (never from argv: the body is untrusted text) and prints
// the labels to add as JSON. Run by .github/workflows/feedback-triage.yml; test: --self-test.
//
// Labels:
//   feedback          every issue from the form (also set by the template)
//   status:triage     not yet looked at (on open only); the owner removes it
//   kind:<k>          from the Kind dropdown
//   area:<a>          subspecialty, from the note URL's first path segment
//   needs-source      a factual or currency claim with no source given

export const LABELS = {
  feedback: { color: "941B1B", description: "Reader feedback from the wiki" },
  "status:triage": { color: "B4B6AE", description: "Feedback not yet reviewed" },
  "needs-source": { color: "4A4F57", description: "Correction without a supporting source" },
  "kind:error": { color: "D6D7D0", description: "Factual error" },
  "kind:outdated": { color: "D6D7D0", description: "Guideline or evidence changed" },
  "kind:incomplete": { color: "D6D7D0", description: "Missing or incomplete" },
  "kind:wording": { color: "D6D7D0", description: "Unclear wording" },
  "kind:display": { color: "D6D7D0", description: "Broken link or display" },
  "kind:suggestion": { color: "D6D7D0", description: "Suggestion" },
  "area:fprs": { color: "2445B0", description: "Facial plastic & reconstructive" },
  "area:head-and-neck": { color: "2445B0", description: "Head & neck" },
  "area:laryngology": { color: "2445B0", description: "Laryngology" },
  "area:otology": { color: "2445B0", description: "Otology & neurotology" },
  "area:pediatrics": { color: "2445B0", description: "Pediatrics" },
  "area:sinus": { color: "2445B0", description: "Rhinology & skull base" },
  "area:trauma": { color: "2445B0", description: "Craniomaxillofacial trauma" },
}

const KINDS = [
  [/^factual error/i, "kind:error"],
  [/^outdated/i, "kind:outdated"],
  [/^missing/i, "kind:incomplete"],
  [/^unclear/i, "kind:wording"],
  [/^broken/i, "kind:display"],
  [/^suggestion/i, "kind:suggestion"],
]
const AREAS = {
  fprs: "area:fprs",
  head_and_neck: "area:head-and-neck",
  laryngology: "area:laryngology",
  otology: "area:otology",
  pediatrics: "area:pediatrics",
  sinus: "area:sinus",
  trauma: "area:trauma",
}

// Issue forms render each field as "### <Label>\n\n<value>"; an empty optional field is "_No response_".
export function fields(body) {
  const out = {}
  for (const part of String(body ?? "").split(/^### /m).slice(1)) {
    const nl = part.indexOf("\n")
    const key = (nl < 0 ? part : part.slice(0, nl)).trim().toLowerCase()
    const value = nl < 0 ? "" : part.slice(nl + 1).trim()
    out[key] = value === "_No response_" ? "" : value
  }
  return out
}

export function labelsFor(body) {
  const f = fields(body)
  if (!("note" in f) || !("kind" in f)) return [] // not from the feedback form
  const labels = ["feedback", "status:triage"]
  const kind = KINDS.find(([re]) => re.test(f.kind))?.[1]
  if (kind) labels.push(kind)
  try {
    const url = new URL(f.note)
    const segs = url.pathname.split("/").filter(Boolean)
    const i = segs.indexOf("ohns-wiki-skflx")
    const area = AREAS[(segs[i + 1] ?? "").toLowerCase()]
    if (area) labels.push(area)
  } catch {
    // not a URL: no area label
  }
  if ((kind === "kind:error" || kind === "kind:outdated") && !f.source) labels.push("needs-source")
  return labels
}

function selfTest() {
  const body = (note, kind, source = "_No response_") =>
    `### Note\n\n${note}\n\n### Kind\n\n${kind}\n\n### What should change\n\nx\n\n### Source\n\n${source}\n\n### You are\n\n_No response_`
  const eq = (a, b, msg) => {
    if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`${msg}: ${JSON.stringify(a)} != ${JSON.stringify(b)}`)
    console.log(`ok   ${msg}`)
  }
  const N = "https://skflx.github.io/ohns-wiki-skflx/fprs/abbe-flap"
  eq(labelsFor(body(N, "Factual error")), ["feedback", "status:triage", "kind:error", "area:fprs", "needs-source"], "error without source")
  eq(labelsFor(body(N, "Factual error", "Smith 2020")), ["feedback", "status:triage", "kind:error", "area:fprs"], "error with source")
  eq(
    labelsFor(body("https://skflx.github.io/ohns-wiki-skflx/head_and_neck/x", "Unclear wording")),
    ["feedback", "status:triage", "kind:wording", "area:head-and-neck"],
    "area from folder",
  )
  eq(labelsFor(body("not a url", "Suggestion")), ["feedback", "status:triage", "kind:suggestion"], "bad URL")
  eq(labelsFor("A blank issue with no form"), [], "not a form issue")
  for (const l of labelsFor(body(N, "Outdated (guideline or evidence changed)"))) {
    if (!LABELS[l]) throw new Error(`label ${l} not declared`)
  }
  console.log("ok   every emitted label is declared")
}

if (process.argv.includes("--self-test")) selfTest()
else if (process.argv.includes("--labels")) console.log(JSON.stringify(LABELS))
else {
  // An edit must not put back status:triage after the owner has removed it
  const labels = labelsFor(process.env.ISSUE_BODY)
  console.log(JSON.stringify(process.env.EVENT_ACTION === "edited" ? labels.filter((l) => l !== "status:triage") : labels))
}
