# WCAG 2.2 AA review — local design preview

Reviewed September 21, 2026. Baseline: `7341ac4` on `codex/ui-blue-headings-dots-preview`.

## Remediation update

The findings below describe the original audit baseline. The requested contrast fixes have now been applied in `preview/assets/accessibility.css` on both local pages:

- Eyebrows, category labels, and step numbers now use the 15–16px action scale and dark blue `#234660`, replacing the 12–13px small text. Contrast is 8.49:1 on `#ededf0` and 7.66:1 on `#e1e2e5`. Even a conservative black dot at the maximum 7.5% opacity over the main background produces approximately `#dbdbde`, against which contrast remains 7.18:1.
- Hero-image captions now use 15–16px dark blue text on an opaque `#ededf0` backing, with no text shadow. Contrast is 8.49:1 independently of the photograph crop.
- Footer keyboard focus now uses a white 3px outline with a 5px offset. Contrast against `#17191b` is 17.63:1, resolving the confirmed 1.4.11 issue.
- Browser verification confirmed the desktop caption/eyebrow size is 16px and the footer Services link receives a white focus outline. At 320px, both pages have no horizontal document overflow; the Services label size is 15px and the mobile caption fits in its image.

These changes address the identified contrast areas. They do not complete the outstanding full-site conformance checks listed below.

## Scope and result

Reviewed the local homepage (`/`) and Services page (`/services/`) in the proposed darker-blue-heading mode, including the image and sparse logo-dot backgrounds. This is a scoped manual browser and source review, not a full conformance assessment or automated axe scan. No design or application code was changed during this review.

**One confirmed AA issue: the footer keyboard focus indicator has insufficient contrast.** Two background-dependent contrast concerns need further measurement before signing off. Do not claim site-wide WCAG 2.2 AA conformance from this review.

About, Our process, Contact, and Privacy links leave the local preview and open the public website. Those pages, forms, submission processes, and the production application were outside this review. The preview toolbar is a development-only control.

## Confirmed issue

### Footer focus outline — SC 1.4.11, Non-text Contrast (AA)

On both reviewed pages, keyboard focus on the footer Services link uses a 3px outline of `#0068aa` against the footer background `#17191b`. Calculated contrast is **2.99:1**, below the required **3:1**. Ratios must not be rounded up to meet the threshold. The outline appears only on focus, so it is the visual focus indicator being evaluated.

Reproduce: focus the footer brand link and press Tab. The Services link matches `:focus-visible`; computed outline is `rgb(0, 104, 170) solid 3px` and the footer background is `rgb(23, 25, 27)`.

Recommended fix: give `.site-footer a:focus-visible` a light outline, such as white or a pale blue. Keep the existing 3px outline and 5px offset. Retest every footer link after changing it. This is separate from SC 2.4.7 Focus Visible: the outline exists, but its contrast falls just short.

## Contrast concerns requiring follow-up

1. **Small blue text over logo dots — SC 1.4.3.** The homepage eyebrow overlaps the upper dot motif. Its blue `#0068aa` passes on the plain background, but darker dot pixels reduce the contrast locally. The passing flat-background calculation is not sufficient to clear the text-over-pattern area. Measure the rendered glyph/background combinations at desktop and mobile sizes. Prefer masking the dots away from small text or moving them into open space if any combination falls below 4.5:1.
2. **White hero-image captions — SC 1.4.3.** “IDEAS, MADE REAL.” and “DESIGN · DEVELOPMENT · DIRECTION” use 13px white text over a photograph, a gradient overlay, and a blurred shadow. Visual inspection shows variable background brightness. This review did not measure the final composited pixels, so this is not a confirmed failure or a pass. A consistently dark backing behind the captions is a more robust way to guarantee 4.5:1 across responsive crops.

## Measured text contrast

These ratios use solid foreground/background colors and do not include image or dot compositing.

| Text | Foreground | Background | Ratio | Result |
| --- | --- | --- | --- | --- |
| Blue headings | `#075bb5` | `#ededf0` | 5.66:1 | Pass |
| Blue headings in vision section | `#075bb5` | `#e1e2e5` | 5.11:1 | Pass |
| Small blue accents | `#0068aa` | `#ededf0` | 5.05:1 | Pass on plain background |
| Small blue accents in vision section | `#0068aa` | `#e1e2e5` | 4.55:1 | Pass, narrow margin |
| Body copy | `#595d63` | `#ededf0` | 5.67:1 | Pass |
| Muted footer copy | `#b5b7bd` | `#17191b` | 8.79:1 | Pass |

The large blue headings meet the 3:1 large-text requirement and also exceed the 4.5:1 normal-text requirement on these plain backgrounds. Services headings measure 24px at a 320px viewport and 28px on desktop; the hero measures 64px on desktop. The selected heading color does not need to be darkened further for these backgrounds.

## Checks completed

| Area | Evidence and limit |
| --- | --- |
| Page language and titles — 3.1.1, 2.4.2 | `lang="en"`; descriptive homepage and Services titles. |
| Structure — 1.3.1, 2.4.6 | One H1 and one main landmark per page; homepage H2/H3 hierarchy and Services H2 titles follow the content structure. |
| Image alternatives — 1.1.1 | No missing alt attributes; logo has an accessible brand name. Services decorative image has empty alt text; CSS dots are absent from the accessibility tree. Homepage abstract images have descriptive alt text; empty alt could reduce noise if they are entirely decorative. |
| Skip link — 2.4.1 | Enter on “Skip to content” moves active focus to `main`. |
| Disclosure keyboard access — 2.1.1, 4.1.2 | Enter on the first native service summary opens its details content; accessibility tree reports the expanded state. |
| Mobile navigation — 2.1.1, 4.1.2 | Enter opens the menu and changes `aria-expanded` to true; Escape closes it and restores focus to Menu. |
| Reflow — 1.4.10 | Homepage and Services each have document width 320px at a 320px viewport. Services also checked at 768px with no horizontal document overflow. This is not a substitute for the separate text-resize and spacing checks below. |
| Target size — 2.5.8 | Main navigation targets are about 35px high, CTA links 44px, review buttons 44px, and service disclosures 77px on desktop. Footer links around 22.4px high are separated by 15px vertically; do not flag them solely for being under 24px because the spacing exception applies. No failure identified in the sampled targets. |
| Focus visibility — 2.4.7 | Visible focus styling confirmed on footer link and disclosure; footer contrast issue is listed above. A complete focus-order traversal and overlap check is still needed. |
| Motion | Source includes `prefers-reduced-motion` handling; decorative dots are static. No autoplay audio/video or flashing animation was observed. |

## Still required before an AA conformance claim

- Run an automated accessibility scanner on every page and relevant interactive state; no automated scanner was run in this review.
- Complete keyboard-only traversal of every control, including checking that focused controls are not obscured (2.4.11).
- Test actual 200% text resizing (1.4.4), and prescribed text-spacing overrides with no clipping or lost controls (1.4.12). The 320px viewport check alone does not verify these.
- Test with a screen reader, including reading order, mobile navigation, disclosures, and meaningful image alternatives.
- Measure final rendered contrast over photographs and dot motifs, and review hover/focus states.
- Audit the linked public pages and complete contact flow, including labels, errors, status announcements, and any authentication or redundant-entry requirements that apply there.
- Repeat on the actual production implementation after transferring the approved design; this repository currently contains a static visual prototype of the newer live site.

## Reference

[W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/), particularly [1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum), [1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast), [2.5.8 Target Size (Minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum), and the [conformance requirements](https://www.w3.org/TR/WCAG22/#conformance-reqs).
