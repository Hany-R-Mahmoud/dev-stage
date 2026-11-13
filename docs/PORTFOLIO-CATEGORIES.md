# Dev Stage — portfolio domains and lifecycle

Updated: 2026-11-13. This document describes the implementation in `Hany-R-Mahmoud/dev-stage`.

## Source-of-truth contract

- `src/data/projectCategories.ts`: the ordered bilingual category registry. Category ID is stable; public names and short descriptions are localized.
- `src/data/projectEditorial.json`: **sole editorial authority** keyed by public project slug for `primaryCategoryId`, `portfolioVisibility`, `mergedInto`, and `showcasePriority`. Do not copy these fields into curated project records or donor repositories.
- `src/data/vercel-projects.json` is curated project content. It overrides registry projects with matching slug; do not add category/visibility/merge fields here.
- `scripts/sync-portfolio-data.mjs`: combines registry and curated records, resolves the documented `dev2ops` mirror conflict, validates editorial slugs, applies editorial metadata once, validates final records and generates `src/data/portfolioData.ts`. Generated data is an output artifact. Run with `APEXYARD_ROOT` pointing at the Apex Yard repo containing `apexyard.projects.yaml`.
- `src/lib/projectDirectory.ts`: the shared pure lifecycle, category, representative, merged grouping, and sitemap selectors. A new category with at least one listed, ready project participates automatically in the carousel.

## Migration evidence and limits

The plan refers to a companion `DEV-STAGE-RESTRUCTURE-REVIEW.md` with a 124-project mapping. That companion was not present in the provided files or accessible repository. The editorial classification was therefore made from **the current 124 unique portfolio records and their available product descriptions/features**, rather than claiming to reproduce the missing companion assignments. Reconcile differing judgments when that table becomes available.

The generated snapshot originally had 125 records / 124 unique slugs: `dev2ops` appeared from `external/dev2ops` and `workspace/dev2ops`. The maintained `workspace/dev2ops` record was selected as canonical; the public slug, cover, and deployment URL remain unchanged. Only this known legacy mirror is dropped during generation; all other effective duplicate IDs/slugs fail validation.

Six insufficiently evidenced records remain explicitly `unlisted` and without a public category: `loop-engineer`, `rihla`, `khareeta`, `study-circle`, `ship-sink`, `mohakat`. Their descriptions are generic workspace/starter content and they have no qualifying public image+URL. `routine` has an evidenced habits/streak/heatmap implementation in its existing portfolio feature inventory; it was classified as productivity but is still not showcase-ready. No hidden drafts were made publicly visible.

## Current verified generated inventory

- Unique projects: **124**.
- Eligible active projects: **92**.
- Eligible merged donor projects: **4** (under Dev HQ).
- Nonempty active categories: **10**.
- Public listed active projects by category:

  - `developer`: 15
  - `games`: 22
  - `learning`: 7
  - `productivity`: 9
  - `business`: 7
  - `creative`: 8
  - `health`: 6
  - `life`: 5
  - `community`: 9
  - `finance`: 4

## Initial representative carousel

Each row nominates one category representative using `showcasePriority: 0` and requires an existing real cover plus a published live URL. Other eligible projects without priority are deterministic fallback candidates ordered by public slug.

| Category | Representative | Basis |
| --- | --- | --- |
| developer | `dev-hq` | Existing image/live URL and category-relevant documented purpose |
| games | `map-crack` | Existing image/live URL and category-relevant documented purpose |
| learning | `js2next` | Existing image/live URL and category-relevant documented purpose |
| productivity | `focussessionflow` | Existing image/live URL and category-relevant documented purpose |
| business | `workbench` | Existing image/live URL and category-relevant documented purpose |
| creative | `ateleet-10` | Existing image/live URL and category-relevant documented purpose |
| health | `new-etamini` | Existing image/live URL and category-relevant documented purpose |
| life | `wajba` | Existing image/live URL and category-relevant documented purpose |
| community | `minarets_of_cairo` | Existing image/live URL and category-relevant documented purpose |
| finance | `mahfazti` | Existing image/live URL and category-relevant documented purpose |

This is an editorial choice, not a claim that any linked standalone app is healthy or feature-complete. Changes to category or priority automatically recompute candidates.

## Lifecycle examples (edit only projectEditorial.json)

All examples describe data edits, not hosting/repository/user-data deletion:

- Add: for a new normal source record slug `my-new-tool`, add `"my-new-tool": {"primaryCategoryId": "developer"}`, then sync and validate.
- Reclassify: change `"primaryCategoryId": "productivity"` to `"primaryCategoryId": "life"` on the existing slug. Details and URL remain.
- Merge: add `"mergedInto": {"projectSlug": "dev-hq"}` to a donor record with a valid category. It leaves active groups/carousel, moves into the collapsed archive, and keeps its detail URL and optional previous version.
- Unlist: set `"portfolioVisibility": "unlisted"`. The record disappears from discovery/sitemap but a complete direct detail is still available with `noindex`.
- Remove from public portfolio: set `"portfolioVisibility": "removed"`. The historical slug displays a neutral unavailable screen and is excluded from sitemap/discovery. It does **not** delete source files or hosting.
- Restore: change visibility back to `"listed"` only when published state, real cover, URL/merged destination, and category remain valid.
- Add a category: append a new bilingual ID to `PROJECT_CATEGORIES`; reclassify relevant projects using the new ID. Empty categories show nowhere. To retire one, reassign all references first.
- Change carousel representative: set `showcasePriority` to a finite nonnegative integer (lower wins) on the chosen project; ties use slug code-point ordering.

## Verification and operational limits

Use `npm run verify:directory`, `npm run verify:merged`, `npm run lint`, `npm run build`. Synchronization additionally requires the owner's Apex Yard root. A deployment READY proves build/deployment health, not visual browser acceptance. Test mobile/desktop, Arabic/English, themes, keyboard, carousel exploration, accordion states and historical routes separately.

Vercel deployment policy remains **main-only**, with no new GitHub workflows. The canonical domain is `https://dev2stage.vercel.app`. The portfolio does not edit Dev HQ, the four donor apps, or any production datasets.
