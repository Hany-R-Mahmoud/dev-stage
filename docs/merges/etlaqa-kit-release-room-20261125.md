# Etlaqa Kit / Release Room — Dev2Stage archive update

Recorded: 2026-11-25.

Survivor: growth-kit (now named Etlaqa Kit / إطلاقة) — https://etlaqa-kit.vercel.app/ ; source: https://github.com/Hany-R-Mahmoud/growth-kit . The earlier address https://pulse2kit.vercel.app/ stays live on the same deployment.
Donor: release-room — existing former version https://releaseroom.vercel.app/ ; source: https://github.com/Hany-R-Mahmoud/release-room .
Merged feature: Releases section https://etlaqa-kit.vercel.app/#releases .
Merged by: https://github.com/Hany-R-Mahmoud/growth-kit/pull/2 on 2026-11-25 (merge commit ff269bf).

What moved: Release Room's launch workflow is now the "Run the launch" part of Etlaqa Kit. It has a checklist where each step needs evidence (templates: web deploy, API deploy, DB migration, mobile release, distribution), a go/no-go board with named votes, ship with a watch window, an append-only rollback ledger, a Markdown report, and JSON export/import. A kit can start a launch directly through the Distribution template, whose steps are listing submissions. The "Prepare the launch kit" part (brand DNA, image prompts, social posts, ad copy, a two-week content plan, a landing one-pager) is unchanged.

What did not move: the TanStack/Lovable shell, Lovable error reporting, the hero image and the charts. Old Release Room browser data is not migrated, because it lived on another origin. The app does not publish, deploy or roll back anything for real, does not connect ad accounts and does not spend money. Releases are stored on the device only; the optional Google sign-in cloud backup covers kits, not releases.

Changes follow the existing editorial-driven Merged Projects pattern, without deleting an original record. Release Room moves from the active developer grid to the merged group under Etlaqa Kit, keeping its previous version, cover, repository, and historical detail route. The merged action links to /#releases .

The editorial source of truth is src/data/projectEditorial.json. The curated content in src/data/vercel-projects.json has no mergedInto field; src/data/portfolioData.ts is the generated snapshot. The Release Room record holds no workspace path, so none was changed (its local folder moved to workspace/merged/release-room outside this repository).

Expected listed projects: 154 active + 10 merged -> 153 active + 11 merged, total 164.

Validation: npm run verify:directory, npm run verify:merged, npm run lint, npm run build. No source repository retirement or Vercel donor deletion is authorized.
