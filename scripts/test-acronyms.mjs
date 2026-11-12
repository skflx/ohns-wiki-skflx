#!/usr/bin/env node
// Unit test for the acronyms rehype transformer on synthetic hast trees.
// Run: npx tsx scripts/test-acronyms.mjs
import assert from "node:assert/strict"
import acronyms from "../quartz/plugins/transformers/acronyms.ts"

const plugin = acronyms()
const attach = plugin.htmlPlugins({})[0]
const transform = attach()

const text = (value) => ({ type: "text", value })
const el = (tagName, children = [], properties = {}) => ({ type: "element", tagName, properties, children })
const root = (...children) => ({ type: "root", children })
const run = (tree) => {
  transform(tree)
  return tree
}
const abbrs = (node, out = []) => {
  if (node.type === "element" && node.tagName === "abbr") out.push(node)
  for (const c of node.children ?? []) abbrs(c, out)
  return out
}

const tests = {
  "prose acronym is wrapped once with its full name": () => {
    const tree = run(root(el("p", [text("CRS is common in adults.")])))
    const found = abbrs(tree)
    assert.equal(found.length, 1)
    assert.equal(found[0].properties.className[0], "term-abbr")
    assert.equal(found[0].properties.title, "chronic rhinosinusitis")
    assert.equal(found[0].children[0].value, "CRS")
  },

  "second occurrence in the same note is not wrapped": () => {
    const tree = run(root(el("p", [text("CRS first, then CRS again.")])))
    assert.equal(abbrs(tree).length, 1)
    const plain = tree.children[0].children.map((c) => (c.type === "text" ? c.value : c.children[0].value)).join("")
    assert.equal(plain, "CRS first, then CRS again.")
  },

  "whole words only, longest match first": () => {
    const tree = run(root(el("p", [text("ECRS and CRSwNP and ILC2 here.")])))
    const found = abbrs(tree).map((a) => a.children[0].value)
    assert.deepEqual(found, ["CRSwNP", "ILC2"])
  },

  "headings, links, code, pre, kbd and KaTeX are not wrapped": () => {
    const tree = run(
      root(
        el("h2", [text("CRS")]),
        el("p", [
          el("a", [text("CRS")], { href: "#x" }),
          el("code", [text("CRS")]),
          el("pre", [text("CRS")]),
          el("kbd", [text("CRS")]),
          el("span", [text("CRS")], { className: ["katex"] }),
        ]),
      ),
    )
    assert.equal(abbrs(tree).length, 0)
  },

  "an existing abbr is left alone": () => {
    const tree = run(root(el("p", [el("abbr", [text("CRS")], { title: "mine" })])))
    const found = abbrs(tree)
    assert.equal(found.length, 1)
    assert.equal(found[0].properties.title, "mine")
  },

  "terms shorter than two characters are ignored": () => {
    // Single-letter keys do not exist in the lexicon; a prose capital must stay untouched.
    const tree = run(root(el("p", [text("We saw A and I here.")])))
    assert.equal(abbrs(tree).length, 0)
  },
}

let failed = 0
for (const [name, fn] of Object.entries(tests)) {
  try {
    fn()
    console.log(`ok   ${name}`)
  } catch (err) {
    failed++
    console.error(`FAIL ${name}\n     ${err.message}`)
  }
}
if (failed) {
  console.error(`${failed} test(s) failed`)
  process.exit(1)
}
console.log(`all ${Object.keys(tests).length} acronym tests passed`)
