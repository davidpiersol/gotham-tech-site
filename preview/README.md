# Typography review preview

This directory is a static snapshot of the public homepage and Services page captured September 21, 2026, with proposed typography and spacing in `assets/proposal.css`. The source repository's older static site does not match the live Next.js site, so this is an isolated visual prototype, not a source-level migration of that application.

Run from the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory preview
```

Open http://localhost:4173/services/ and use Before / Proposed to compare. The homepage is also available locally. Other navigation and inquiry links open the existing public site, preserving their destinations and service query parameters. The local preview does not submit forms.

The existing logo, images, Roboto 400/500 fonts, base styles, and rendered page copy are preserved. Next.js runtime scripts were removed; mobile navigation is handled by a small local script. Category labels remain on service cards but are quieter; copy is preserved apart from the proposed service CTA labels. The visual system uses available weight 500 rather than synthesizing 600.

Production application integration still requires locating the source repository for the current deployment. Nothing here changes the live website.

Verified in the local browser: both pages at 320, 390, 768, and 1440px without horizontal overflow or broken images; comparison toggle restores original typography and service CTA text; mobile navigation opens and closes with Escape. Browser console reported no errors.
