/**
 * Build-time abbreviation expansion. Wraps known clinical abbreviations in prose as
 * <abbr class="term-abbr" title="FULL NAME">ABBR</abbr>, so the expansion ships in the HTML
 * with no client JS. Terms come from terms.json (snapshot of the OKSAT lexicon, written by
 * scripts/sync-terms.mjs); the build fetches nothing.
 *
 * Rules: whole words only, case-sensitive, longest match first, first occurrence per note,
 * terms under two characters ignored. Never inside headings, links, code, math (KaTeX) or
 * the topbar, and never inside an existing abbr.
 */
import type { Element, Root } from "hast"
import { findAndReplace } from "hast-util-find-and-replace"
import type { QuartzTransformerPlugin } from "../types"
import termsJson from "./terms.json" with { type: "json" }

const TERMS: Record<string, string> = termsJson

const keys = Object.keys(TERMS)
  .filter((k) => k.length >= 2)
  .sort((a, b) => b.length - a.length) // longest match first inside the alternation
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
// Whole word: not preceded or followed by a letter or digit. Hyphenated terms match as one token.
const PATTERN = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${keys.map(escapeRe).join("|")})(?![\\p{L}\\p{N}])`,
  "gu",
)

const SKIP_TAGS = new Set(["a", "abbr", "code", "pre", "kbd", "h1", "h2", "h3", "h4", "h5", "h6", "math", "svg", "script", "style"])
const SKIP_CLASSES = new Set(["katex", "katex-display", "katex-html", "site-topbar"])

function isSkipped(node: Element): boolean {
  if (SKIP_TAGS.has(node.tagName)) return true
  const cls = node.properties?.className
  const list = Array.isArray(cls) ? cls : typeof cls === "string" ? cls.split(/\s+/) : []
  return list.some((c) => SKIP_CLASSES.has(String(c)))
}

const acronymsRehype = () => (tree: Root) => {
  const seen = new Set<string>() // first occurrence per note
  findAndReplace(
    tree,
    [
      [
        PATTERN,
        (match: string): Element | false => {
          if (seen.has(match)) return false
          seen.add(match)
          return {
            type: "element",
            tagName: "abbr",
            properties: { className: ["term-abbr"], title: TERMS[match] },
            children: [{ type: "text", value: match }],
          }
        },
      ],
    ],
    { ignore: isSkipped },
  )
}

const Acronyms: QuartzTransformerPlugin = () => ({
  name: "Acronyms",
  htmlPlugins() {
    return [() => acronymsRehype()]
  },
})

export { Acronyms }
export default Acronyms
