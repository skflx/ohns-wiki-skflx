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
        <a href="https://skflx.github.io/oksat.html" class="site-navlink">OKSAT</a>
        <a href="https://skflx.github.io/ohns-wiki-skflx/" class="site-navlink" aria-current="page">Wiki</a>
      </nav>
      <div class="site-topbar-actions">
        <button type="button" class="site-search-btn" aria-label="Search sk.oto" title="Search sk.oto (Ctrl/⌘ K)">
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
  try {
    const theme = localStorage.getItem('sk_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('saved-theme', theme);
  } catch (e) { /* storage blocked: fallback gracefully */ }
})();
`

SiteTopbar.afterDOMLoaded = `
(function() {
  function bindTopbar() {
    const toggle = document.getElementById('sk-theme-toggle');
    if (toggle && !toggle.__wired) {
      toggle.__wired = true;
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', current);
        document.documentElement.setAttribute('saved-theme', current);
        try { localStorage.setItem('sk_theme', current); } catch (e) {}
        const ev = new CustomEvent('themechange', { detail: { theme: current } });
        document.dispatchEvent(ev);
        window.dispatchEvent(ev);
      });
    }

    const searchBtn = document.querySelector('.site-search-btn');
    if (searchBtn && !searchBtn.__wired) {
      searchBtn.__wired = true;
      searchBtn.addEventListener('click', () => {
        const searchBarBtn = document.querySelector('.search-button');
        if (searchBarBtn) searchBarBtn.click();
      });
    }
  }

  document.addEventListener('nav', bindTopbar);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindTopbar);
  } else {
    bindTopbar();
  }
})();
`

import { componentRegistry } from "./registry"
export const SiteTopbarCtor: QuartzComponentConstructor = () => SiteTopbar
componentRegistry.register("site-topbar", SiteTopbarCtor, "quartz/components/SiteTopbar.tsx")
export default SiteTopbarCtor
