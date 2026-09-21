# GoTech UI design system — review proposal

Status: proposed, reconstructed on September 21, 2026 from the supplied chat.

The earlier conversation promised a document but supplied no document contents. This specification preserves its explicit recommendations and fills in implementation details as proposals. It is not a recovered attachment. The original claim of more than 30 font-size declarations has not been independently verified; the source code is not yet available in this workspace. No production code has been changed.

## Objective

Normalize typography across the homepage and `/services`, preserve the existing copy and editorial character, and make services easier to scan. Use seven semantic text styles instead of setting font sizes independently in components. Keep the current font family and brand colors until source review establishes a reason to change them.

## Typography

| Role | Mobile | Desktop | Weight | Line height | Usage |
| --- | --- | --- | --- | --- | --- |
| Hero H1 | 42px | 64px | 500–600 | 1.08 | One primary page heading |
| Section H2 | 34px | 44px | 500–600 | 1.12 | Major section headings |
| Service H3 | 24px | 28px | 500–600 | 1.15 | Individual service headings |
| Lead | 18px | 20px | 400 | 1.55 | Introductory and service tagline copy |
| Body | 16px | 17px | 400 | 1.6 | Paragraphs, lists, qualifiers, closing statements |
| Eyebrow | 12px | 13px | 600 | 1.4 | Category labels and service numbers |
| Action | 15px | 16px | 500–600 | 1.4 | Buttons, navigation, and CTA links |

Use the font weights actually available in the project; do not add synthetic weights. Closing statements may use body text at medium weight, without introducing another size. Use uppercase and approximately `0.08em` tracking only for short eyebrows. Keep paragraph tracking normal. Allow headings to wrap naturally; avoid hard-coded line breaks that break narrow layouts.

Semantic heading levels follow document structure. Visual styles are classes, so an H2 can use the service style when it is a direct child of the page heading. A service becomes H3 only beneath a real group H2.

## Spacing and layout

Use an 8 / 16 / 24 / 40 / 64 / 96px spacing scale. Proposed layout values:

| Property | Mobile | Desktop |
| --- | --- | --- |
| Outer page gutter | 24px (16px below 360px) | 40px |
| Maximum content width | Available width | 1200px |
| Paragraph width | Available width | 65ch maximum |
| Hero heading width | Available width | Approximately 18ch |
| Major section padding | 64px vertically | 96px vertically |
| Hero-to-services gap | 64px | 96px |
| Label to heading | 16px | 16px |
| Heading to lead | 24px | 24px |
| Paragraph/list gaps | 16px | 16px |
| Copy to CTA | 24px | 24px |
| Service internal padding | 24px | 40px |

Start with a single-column layout. At 768px, allow the existing service layout to use columns if copy remains readable. Reach the full desktop type scale at 1200px. These are proposed breakpoints; preserve existing layout behavior where it already works. Avoid fixed-height text containers and unnecessary equal-height service cards.

## Services page

### Hero

Keep the content in this order:

1. Eyebrow: “WHAT WE DO”.
2. H1: “The right solution starts with your business.”
3. Lead: “A distinctive presence. A better workflow. An application with a purpose. We bring design and development together around what you need.”
4. Muted body: “Every project gets the scope and timeline its complexity deserves.”

Give the heading a clear dominant position and a comfortable line length. Supporting copy uses the shared lead and body styles. Leave 96px before the service content on desktop and 64px on mobile. Treat the quoted hero wording as the supplied proposal and compare it with the source before replacing any current copy.

### Service hierarchy

Establish “Digital Presence” once as a group heading above services 1–3 and “Custom Applications” above services 4–6, subject to confirming the current service ordering. Under those groups, each service has:

1. A small service number such as “01”.
2. A service heading such as “Business websites”.
3. Lead copy such as “A clear, considered home for your business.”
4. Body paragraphs, bullet points, and the closing statement at one consistent size.

Use the same body style with medium weight for “A site you own, with room to grow.” Do not make the closing statement another heading or text size. Keep service content and bullet wording intact. If grouping disrupts the existing layout, retain the combined number/category eyebrow and reduce only the category's visual emphasis while preserving contrast.

### Service links

Use one understated text-link component for every service CTA, with the action type style. The proposed website CTA is “Discuss your website →”. Create similarly concise, descriptive labels for the remaining services only after confirming their actual titles and destinations. Preserve destinations and tracking behavior. Hide decorative arrows from assistive technology. On hover, underline or otherwise change more than color; provide a clear keyboard focus indicator.

## Homepage alignment

Map the hero to the hero style, major statements such as “One partner. More possibilities.” and “Show up with confidence” to section style, and service names to service style. Map short category labels such as “WHAT WE DO” and “YOUR DIGITAL PRESENCE” to eyebrow style. Review expressive treatments such as “IDEAS, MADE REAL” and “EXPERIENCE, WITH PERSPECTIVE” in context: preserve their editorial intent while assigning them to an existing heading style and correct semantic level. Do not assume every uppercase phrase is an eyebrow.

## Shared components

- **Buttons:** action typography, a 48px minimum height, 16px horizontal padding, and consistent spacing. Keep the existing brand treatment and radius. Let long labels wrap without clipping.
- **Text links:** action typography for CTAs; body-sized inline links inside prose. Preserve descriptive names and visible focus. Expand standalone link hit areas to at least 44px high where layout permits.
- **Service cards/sections:** shared internal padding and spacing, consistent borders if already present, and no new decorative shadows. Use content-driven height.
- **Forms:** body-sized labels and controls, at least 48px-high inputs, persistent labels, and nearby error text. Do not use placeholders as the only label or color as the only error cue.
- **Header:** action typography for navigation; a consistent CTA. Keep existing mobile navigation behavior and check that links and menu controls remain reachable with keyboard and touch.
- **Footer:** body typography for descriptive copy, action typography for navigation, eyebrow typography only for short category labels. Do not shrink substantial footer copy to the eyebrow size.

## Proposed CSS tokens

These tokens are ready to adapt to the site's styling architecture; they have not yet been integrated or browser-tested. Use rem-based sizes so user text preferences are respected. Fluid values interpolate between mobile at 360px and desktop at 1200px with a default 16px root size. Do not force the root font size to 16px.

```css
:root {
  --font-hero: clamp(2.625rem, 2.036rem + 2.619vw, 4rem);
  --font-section: clamp(2.125rem, 1.857rem + 1.190vw, 2.75rem);
  --font-service: clamp(1.5rem, 1.393rem + 0.476vw, 1.75rem);
  --font-lead: clamp(1.125rem, 1.071rem + 0.238vw, 1.25rem);
  --font-body: clamp(1rem, 0.973rem + 0.119vw, 1.0625rem);
  --font-eyebrow: clamp(0.75rem, 0.723rem + 0.119vw, 0.8125rem);
  --font-action: clamp(0.9375rem, 0.911rem + 0.119vw, 1rem);
  --weight-regular: 400;
  --weight-emphasis: 500;
  --weight-heading: 600;
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2.5rem;
  --space-5: 4rem;
  --space-6: 6rem;
  --content-max: 75rem;
  --copy-max: 65ch;
  --page-gutter: var(--space-3);
  --section-space: var(--space-5);
}

.type-hero { font-size: var(--font-hero); line-height: 1.08; font-weight: var(--weight-heading); }
.type-section { font-size: var(--font-section); line-height: 1.12; font-weight: var(--weight-heading); }
.type-service { font-size: var(--font-service); line-height: 1.15; font-weight: var(--weight-heading); }
.type-lead { font-size: var(--font-lead); line-height: 1.55; font-weight: var(--weight-regular); }
.type-body { font-size: var(--font-body); line-height: 1.6; font-weight: var(--weight-regular); }
.type-eyebrow { font-size: var(--font-eyebrow); line-height: 1.4; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
.type-action { font-size: var(--font-action); line-height: 1.4; font-weight: var(--weight-emphasis); }
.content-width { width: min(calc(100% - 2 * var(--page-gutter)), var(--content-max)); margin-inline: auto; }
.copy-width { max-width: var(--copy-max); }

@media (max-width: 359px) {
  :root { --page-gutter: var(--space-2); }
}
@media (min-width: 768px) {
  :root { --page-gutter: var(--space-4); }
}
@media (min-width: 1200px) {
  :root { --section-space: var(--space-6); }
}
```

Map existing foreground, muted, background, border, and focus colors to semantic project tokens during implementation. Choose muted colors by measured contrast rather than arbitrary opacity. Component CSS should reference these shared font-size tokens, not introduce new font sizes. Continue using existing font families, with heading and body family differences retained if intentional.

## Implementation order

1. Locate the source repository, inspect its instructions and styling framework, and capture baseline desktop/mobile screenshots of the homepage and services page.
2. Add shared type and spacing tokens in the existing styling system. Map existing components to them and remove obsolete size overrides.
3. Normalize the services hero, service hierarchy, groups, spacing, and CTA links.
4. Apply the same styles to the homepage, header, footer, and relevant form components.
5. Compare screenshots and verify interactions. Commit to a review branch and publish the branch to GitHub. Provide a preview using the repository's existing workflow if available.

## Review and QA checklist

- [ ] Verify layouts at 320, 390, 768, 1024, and 1440px widths.
- [ ] Check one H1 per page and a meaningful heading hierarchy.
- [ ] Confirm seven shared font-size roles and remove component-level arbitrary sizes.
- [ ] Check heading wraps, text clipping, horizontal overflow, and vertical rhythm.
- [ ] Check browser zoom at 200% and text resizing without lost content or controls.
- [ ] Measure muted text, link, button, and focus indicator contrast; target WCAG AA.
- [ ] Tab through navigation, menu, service links, and forms; confirm focus visibility.
- [ ] Confirm CTA destinations, menu behavior, form labels, validation, and tracking remain correct.
- [ ] Run the repository's appropriate build/lint checks and existing relevant tests.
- [ ] Attach before/after screenshots and record any remaining limitations in the review.

## Provenance and remaining inputs

Primary input: the user's pasted chat about https://thegotechs.com/services and the homepage at https://thegotechs.com/. The live pages could not be retrieved through the web tool during reconstruction. The exact original Markdown document and source repository were not available. Spacing details, breakpoints, component behavior, and CSS implementation above are new review proposals where the pasted chat did not supply exact values.
