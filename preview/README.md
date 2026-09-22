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

## Brighter blue and hero image

Branch `codex/ui-blue-image-preview` returns to the approved neutral typography design. The existing blue accent changes from #155d87 to #0068aa. The Services introduction pairs its copy with the site's existing abstract-device image on desktop; the image follows the copy on screens up to 900px. The decorative image has empty alt text. Original / Blue + image compares this variation with the approved neutral design. The original typography remains active in both modes. No red text or additional color palette remains.

## Logo dot background

Branch `codex/ui-dot-background-preview` uses the actual logo image as an oversized, cropped CSS background, isolating the dotted sphere and excluding the wordmark. Two rotated motifs sit behind the content at 7.5% and 4.5% opacity (lower on mobile). Decorative layers ignore pointer events and are clipped to the main content so they cannot create horizontal overflow. Plain background / Logo dots toggles the texture alone; the neutral headings, brighter blue accents, and accepted Services hero image remain. No source logo pixels were edited.

## Bright blue headings with approved dot accents

Branch `codex/ui-blue-headings-dots-preview` preserves the accepted left-upper/right-lower dots and Services hero image. Only page, section, and service headings (H1–H3 and their heading spans) change to bright blue #0875dc. Neutral headings / Blue headings toggles only this heading color. Navigation, buttons, body text, and smaller accents retain their previous colors.
