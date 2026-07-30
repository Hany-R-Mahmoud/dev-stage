# Dev Stage Design System

## 1. Atmosphere & Identity

Dev Stage feels editorial, architectural, and quietly premium: work is presented with restraint while warm gold gives the interface a deliberate focal point. The signature is the layered stage mark—stacked portfolio planes gathered around an open doorway, expressing work moving from development into view.

## 2. Color

| Role | Token | Light | Dark | Usage |
| --- | --- | --- | --- | --- |
| Surface/primary | `--bg-alabaster` | `#F9F8F6` | `#0E0D0C` | Page and navigation background |
| Surface/secondary | `--bg-taupe` | `#EBE5DE` | `#1A1918` | Cards and quiet panels |
| Text/primary | `--fg-charcoal` | `#1A1A1A` | `#F4F2ED` | Headings and body |
| Text/secondary | `--fg-warm-grey` | `#6C6863` | `#A39E98` | Metadata and supporting copy |
| Accent/primary | `--accent-gold` | `#D4AF37` | `#D4AF37` | Focus, active states, and logo planes |
| Logo/ink | `--logo-ink` | `#1A1A1A` | `#0E0D0C` | Structural joins and doorway |
| Logo/front | `--logo-front` | `#F9F8F6` | `#F4F2ED` | Open front plane |
| Logo/mid | `--logo-mid` | `#6C6863` | `#756E68` | Receding stage planes |
| Logo/side | `--logo-side` | `#C8BEB3` | `#B8ACA0` | Side-facing planes |

Gold is used sparingly for meaningful emphasis. The logo keeps a stable gold/stone/ink palette in both themes so its identity does not invert.

## 3. Typography

| Level | Size | Weight | Line Height | Tracking | Usage |
| --- | --- | --- | --- | --- | --- |
| Display | fluid, up to `4.5rem` | 700 | 1.1 | tight | Hero statements |
| H1 | fluid, up to `3rem` | 700 | 1.2 | tight | Page titles |
| H2 | `1.75rem` | 600 | 1.3 | normal | Section titles |
| H3 | `1.375rem` | 600 | 1.4 | normal | Card titles |
| Body | `1rem` | 400 | 1.6 | normal | Default copy |
| Body/sm | `0.875rem` | 400 | 1.5 | normal | Secondary information |
| Caption | `0.75rem` | 600 | 1.4 | wide | Labels and metadata |

- Primary and display: Cairo, sans-serif.
- Arabic text uses the same family with tracking removed to preserve cursive shaping.

## 4. Spacing & Layout

Spacing follows a 4px base. The working scale is 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, and 96px. Content is centered within a 1600px maximum width, with 24px mobile gutters and 64px desktop gutters. Asymmetry is reserved for editorial compositions and project imagery.

## 5. Components

### Dev Stage Logo Mark

- **Structure**: one semantic SVG containing layered polygons and an open portal path.
- **Variants**: light and dark are driven by theme tokens; the favicon uses a permanent dark contrasting ground.
- **Spacing**: compact inline use begins at 40px; favicon artwork retains an 8px optical margin.
- **States**: static by default; navigation hover applies a slight upward transform.
- **Accessibility**: decorative beside the visible wordmark and hidden from assistive technology; the parent brand control owns the accessible label.
- **Motion**: 300ms transform only; no continuous decorative animation.
- **Layout**: inline cluster with the Dev Stage wordmark.

### Navigation Control

- **Structure**: semantic button with icon or text label.
- **Variants**: brand, theme, language, and primary action.
- **Spacing**: 8–16px internal spacing and 12–16px cluster gaps.
- **States**: default, hover, active, and visible keyboard focus; unavailable actions are omitted.
- **Accessibility**: every icon-only control has a title or accessible label.
- **Motion**: 300ms color or transform transition.
- **Layout**: horizontal cluster; the header remains the scroll-pinned owner.

### Project Media Frame

- **Structure**: fixed 16:10 landscape frame used for carousel cards, directory cards, and project detail media.
- **Surface**: dark matte backing with a restrained border so screenshots with different source ratios remain legible.
- **Sizing**: the frame owns layout sizing; images use `object-contain` to preserve the complete supplied screenshot without distortion or unpredictable cropping.
- **States**: default, hover scale on linked cards, and active gallery selection.
- **Accessibility**: meaningful project images use the project title or a numbered screenshot description as alt text; decorative ambience remains empty-alt.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
| --- | --- | --- | --- |
| Micro | 150ms | ease-out | Press and focus feedback |
| Standard | 300ms | ease-in-out | Theme and navigation transitions |
| Emphasis | 500ms | cubic-bezier(0.16, 1, 0.3, 1) | Major content reveals |

Only opacity and transform are animated. Non-essential motion must stop under `prefers-reduced-motion`.

## 7. Depth & Surface

The project uses a mixed strategy: tonal shifts and fine borders define interface layers, while artwork may use restrained light/shadow to suggest physical material. The logo creates depth through overlapping planes rather than drop shadows, keeping it legible at small sizes.

## 8. Accessibility Constraints & Accepted Debt

- Target: WCAG 2.2 AA, including 4.5:1 body-text contrast, 3:1 large-text contrast, visible focus, keyboard reachability, and reduced-motion support.
- The logo must remain recognizable without color and must not carry essential text.
- Accepted debt: none for the logo integration.
