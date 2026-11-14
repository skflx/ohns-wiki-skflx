import { QuartzComponent, QuartzComponentProps } from "./types"

// "Suggest a correction" under every note: opens a prefilled GitHub issue form
// (.github/ISSUE_TEMPLATE/note-feedback.yml), which scripts/triage-feedback.mjs labels on arrival.
// No backend, no tracker, no request until the reader clicks.
const REPO = "https://github.com/skflx/ohns-wiki-skflx"

export const NoteFeedback: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  const title = fileData.frontmatter?.title
  // Notes only: not the home page, tag listings or folder indexes
  if (!title || slug === "index" || slug.startsWith("tags/") || slug.endsWith("/index")) return null

  const noteUrl = `https://${cfg.baseUrl}/${slug}`
  const issueTitle = `[note] ${title.length > 100 ? title.slice(0, 99) + "…" : title}`
  const params = new URLSearchParams({ template: "note-feedback.yml", title: issueTitle, note: noteUrl })
  return (
    <aside class="note-feedback" aria-label="Feedback on this note">
      <span class="note-feedback-label">Spot an error?</span>
      <a class="note-feedback-link" href={`${REPO}/issues/new?${params.toString()}`} rel="noopener">
        Suggest a correction
      </a>
      <span class="note-feedback-note">Opens a GitHub issue (free account) prefilled with this note.</span>
    </aside>
  )
}

export default NoteFeedback
