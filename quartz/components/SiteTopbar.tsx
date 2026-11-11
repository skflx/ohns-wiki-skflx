import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const SiteTopbar: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <header class="site-topbar">
      <div class="site-topbar-left">
        <a href="https://skflx.github.io/" class="site-wordmark">skflx<span class="wm-md">.MD</span></a>
        <span class="site-topbar-title">sk.oto · OHNS Wiki</span>
      </div>
      <nav class="site-nav" aria-label="Global navigation">
        <a href="https://skflx.github.io/#about" class="site-navlink">About</a>
        <a href="https://skflx.github.io/#tools" class="site-navlink">Tools</a>
        <a href="https://skflx.github.io/oksat-study.html" class="site-navlink">OKSAT</a>
        <a href="https://skflx.github.io/ohns-wiki-skflx/" class="site-navlink" aria-current="page">Wiki</a>
      </nav>
      <div class="site-topbar-actions">
        <button type="button" class="site-search-btn" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        <button type="button" class="site-theme-toggle" id="sk-theme-toggle" aria-label="Toggle dark/light mode">
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.25"/><path d="M8 1.5a6.5 6.5 0 0 1 0 13z" fill="currentColor"/></svg>
        </button>
      </div>
    </header>
  )
}

SiteTopbar.beforeDOMLoaded = `
(function() {
  const theme = localStorage.getItem('sk_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('saved-theme', theme);
})();
`

SiteTopbar.afterDOMLoaded = `
(function() {
  const toggle = document.getElementById('sk-theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', current);
      document.documentElement.setAttribute('saved-theme', current);
      localStorage.setItem('sk_theme', current);
      const ev = new CustomEvent('themechange', { detail: { theme: current } });
      document.dispatchEvent(ev);
      window.dispatchEvent(ev);
    });
  }

  const terms = [
    { term: "CRSwNP", title: "Chronic Rhinosinusitis with Nasal Polyps" },
    { term: "CRSsNP", title: "Chronic Rhinosinusitis without Nasal Polyps" },
    { term: "CRS", title: "Chronic Rhinosinusitis" },
    { term: "AERD", title: "Aspirin-Exacerbated Respiratory Disease" },
    { term: "AFRS", title: "Allergic Fungal Rhinosinusitis" },
    { term: "EPOS", title: "European Position Paper on Rhinosinusitis and Nasal Polyps" },
    { term: "ICAR", title: "International Consensus Statement on Allergy and Rhinology" },
    { term: "FESS", title: "Functional Endoscopic Sinus Surgery" },
    { term: "ESS", title: "Endoscopic Sinus Surgery" },
    { term: "SNOT-22", title: "Sinonasal Outcome Test-22" },
    { term: "LMS", title: "Lund-Mackay Score" },
    { term: "NPS", title: "Nasal Polyp Score" },
    { term: "FeNO", title: "Fractional Exhaled Nitric Oxide" },
    { term: "sIgE", title: "Specific Immunoglobulin E" },
    { term: "INCS", title: "Intranasal Corticosteroids" },
    { term: "EMLP", title: "Endoscopic Modified Lothrop Procedure" },
    { term: "ETD", title: "Eustachian Tube Dysfunction" },
    { term: "ABRS", title: "Acute Bacterial Rhinosinusitis" }
  ].sort((a, b) => b.term.length - a.term.length);

  const termMap = new Map(terms.map(t => [t.term, t.title]));
  const escapedTerms = terms.map(t => t.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const testRegex = new RegExp('\\b(' + escapedTerms.join('|') + ')\\b');
  const matchRegex = new RegExp('\\b(' + escapedTerms.join('|') + ')\\b', 'g');

  function expandAcronyms() {
    const contentArea = document.querySelector('article') || document.querySelector('.popover-hint') || document.body;
    if (!contentArea) return;

    const walker = document.createTreeWalker(contentArea, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement && node.parentElement.closest('a, code, pre, .katex, mjx-container, script, style, abbr, .site-topbar')) {
          return NodeFilter.FILTER_REJECT;
        }
        return testRegex.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodesToProcess = [];
    while (walker.nextNode()) {
      nodesToProcess.push(walker.currentNode);
    }

    nodesToProcess.forEach(node => {
      const parent = node.parentNode;
      if (!parent) return;
      const text = node.nodeValue;
      matchRegex.lastIndex = 0;
      if (!matchRegex.test(text)) return;

      const fragment = document.createDocumentFragment();
      let lastIdx = 0;
      let match;
      matchRegex.lastIndex = 0;

      while ((match = matchRegex.exec(text)) !== null) {
        const matchText = match[1];
        const title = termMap.get(matchText);
        if (match.index > lastIdx) {
          fragment.appendChild(document.createTextNode(text.substring(lastIdx, match.index)));
        }
        const abbr = document.createElement('abbr');
        abbr.className = 'term-abbr';
        abbr.title = title || '';
        abbr.setAttribute('tabindex', '0');
        abbr.setAttribute('aria-expanded', 'false');
        abbr.textContent = matchText;
        fragment.appendChild(abbr);
        lastIdx = matchRegex.lastIndex;
      }
      if (lastIdx < text.length) {
        fragment.appendChild(document.createTextNode(text.substring(lastIdx)));
      }
      parent.replaceChild(fragment, node);
    });
  }

  document.addEventListener('nav', expandAcronyms);
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    expandAcronyms();
  } else {
    document.addEventListener('DOMContentLoaded', expandAcronyms);
  }

  document.addEventListener('click', (e) => {
    const abbr = e.target.closest('abbr.term-abbr');
    if (abbr) {
      const expanded = abbr.getAttribute('aria-expanded') === 'true';
      abbr.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    } else {
      document.querySelectorAll('abbr.term-abbr[aria-expanded="true"]').forEach(el => {
        el.setAttribute('aria-expanded', 'false');
      });
    }
  });

  const searchBtn = document.querySelector('.site-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const searchBarBtn = document.querySelector('.search-button');
      if (searchBarBtn) {
        searchBarBtn.click();
      }
    });
  }
})();
`

import { componentRegistry } from "./registry"
export const SiteTopbarCtor: QuartzComponentConstructor = () => SiteTopbar
componentRegistry.register("site-topbar", SiteTopbarCtor, "quartz/components/SiteTopbar.tsx")
export default SiteTopbarCtor
