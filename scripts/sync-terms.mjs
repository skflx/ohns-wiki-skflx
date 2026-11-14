#!/usr/bin/env node
// Snapshot the OKSAT term lexicon into quartz/plugins/transformers/terms.json.
// Run by hand when the source changes; the Quartz build never fetches anything.
// Source: js/oksat/terms.js in skflx/skflx.github.io (TERMS map: abbreviation -> full name).
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import vm from "node:vm"
import { fileURLToPath } from "node:url"

const SOURCE = "https://raw.githubusercontent.com/skflx/skflx.github.io/master/js/oksat/terms.js"
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const out = path.join(root, "quartz/plugins/transformers/terms.json")

// curl, not fetch: Node's fetch ignores the sandbox HTTPS proxy.
const src = execFileSync("curl", ["-fsSL", SOURCE], { encoding: "utf-8" })
const sandbox = { window: {} }
vm.runInNewContext(src, sandbox, { filename: "terms.js" })
const lexicon = sandbox.window.OKSATTerms
if (!lexicon || typeof lexicon.keys !== "function") {
  throw new Error(`window.OKSATTerms not found in ${SOURCE}`)
}

// Terms whose meaning is local to the OKSAT guides (research-paper response classes, textbook and institution
// names) or ambiguous in running clinical prose. A wrong tooltip in a clinical wiki is worse than none.
const EXCLUDE = new Set(["ES", "EE", "SS", "SE", "KJ", "UW", "A1", "SP", "AR"])

const terms = {}
for (const abbr of lexicon.keys()) {
  if (EXCLUDE.has(abbr)) continue
  // Full name first; anything after a semicolon is an alternate name.
  terms[abbr] = String(lexicon.get(abbr)).split(";")[0].trim()
}

fs.writeFileSync(out, JSON.stringify(terms, null, 2) + "\n")
console.log(`wrote ${Object.keys(terms).length} terms to ${path.relative(root, out)} (source: ${SOURCE})`)

// The plugin ships a prebuilt bundle with the terms inlined (Quartz never rebuilds a committed dist/),
// so rebuild it here or the wiki keeps the old terms.
execFileSync("npm", ["run", "build"], { cwd: path.dirname(out), stdio: "inherit" })
