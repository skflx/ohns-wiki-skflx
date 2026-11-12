#!/usr/bin/env node
// Palette-sync check: the skflx.github.io site is the source of truth for the --signal colour.
// Pulls css/site.css from the site repo and compares its --signal (light and dark) with the
// secondary colour this wiki hard-codes in quartz.config.yaml (and any --secondary declared in
// quartz/styles). Exit 0 when they match, 1 when they differ, 2 when the site cannot be read.
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const SOURCE = "https://raw.githubusercontent.com/skflx/skflx.github.io/master/css/site.css"
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const HEX = /#[0-9A-Fa-f]{6}\b/

async function fetchSite() {
  try {
    const res = await fetch(SOURCE, { signal: AbortSignal.timeout(20_000) })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.text()
  } catch {
    // Local sandboxes route HTTPS through a proxy that global fetch ignores; curl honours it.
    return execFileSync("curl", ["-fsSL", "--max-time", "20", SOURCE], { encoding: "utf-8" })
  }
}

// Body of the first block whose selector line matches `selector`, e.g. ":root {" or 'html[data-theme="dark"] {'.
function blockBody(css, selector) {
  const start = css.indexOf(selector)
  if (start < 0) return null
  const open = css.indexOf("{", start)
  const close = css.indexOf("}", open)
  return close < 0 ? null : css.slice(open + 1, close)
}

function signalIn(body) {
  const m = body && body.match(/--signal:\s*(#[0-9A-Fa-f]{6})\b/)
  return m ? m[1].toUpperCase() : null
}

// quartz.config.yaml: the `secondary:` under lightMode / darkMode (regex, so no YAML dependency).
function configSecondary(yaml, mode) {
  const at = yaml.indexOf(`${mode}:`)
  if (at < 0) return null
  const m = yaml.slice(at).match(/secondary:\s*"?(#[0-9A-Fa-f]{6})\b/)
  return m ? m[1].toUpperCase() : null
}

async function main() {
  let css
  try {
    css = await fetchSite()
  } catch (err) {
    console.error(`check-signal: cannot read ${SOURCE}: ${err.message}`)
    process.exit(2)
  }

  const siteLight = signalIn(blockBody(css, 'html[data-theme="light"], :root:not([data-theme]) {'))
  const siteDark = signalIn(blockBody(css, 'html[data-theme="dark"] {'))
  if (!siteLight || !siteDark) {
    console.error("check-signal: --signal not found in site.css light or dark token blocks")
    process.exit(2)
  }

  const yaml = fs.readFileSync(path.join(root, "quartz.config.yaml"), "utf-8")
  const wikiLight = configSecondary(yaml, "lightMode")
  const wikiDark = configSecondary(yaml, "darkMode")

  // Any hard-coded --secondary in the styles must also agree with the site.
  const styleDir = path.join(root, "quartz/styles")
  const styleHits = []
  for (const f of fs.readdirSync(styleDir).filter((n) => n.endsWith(".scss"))) {
    for (const line of fs.readFileSync(path.join(styleDir, f), "utf-8").split("\n")) {
      if (/--secondary\s*:/.test(line) && HEX.test(line)) styleHits.push(`${f}: ${line.trim()}`)
    }
  }

  const lightOk = wikiLight === siteLight
  const darkOk = wikiDark === siteDark
  const stylesOk = styleHits.every((l) => l.includes(siteLight) || l.includes(siteDark))

  console.log(`light: site ${siteLight} / wiki ${wikiLight ?? "missing"} ${lightOk ? "OK" : "MISMATCH"}`)
  console.log(`dark:  site ${siteDark} / wiki ${wikiDark ?? "missing"} ${darkOk ? "OK" : "MISMATCH"}`)
  if (styleHits.length) console.log(`styles hard-code --secondary: ${styleHits.join("; ")} ${stylesOk ? "OK" : "MISMATCH"}`)

  process.exit(lightOk && darkOk && stylesOk ? 0 : 1)
}

main()
