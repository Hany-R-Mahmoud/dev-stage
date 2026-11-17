# Ala Mahli / DaqiqaLearn — Dev2Stage archive update

Recorded: 2026-11-17.

Survivor: ala-mahli — https://ala-mahli.vercel.app/ ; source: https://github.com/Hany-R-Mahmoud/ala-mahli .
Donor: daqiqalearn — existing former version https://daqiqalearn.vercel.app/ ; source: https://github.com/Hany-R-Mahmoud/daqiqalearn .
Verified merge: https://github.com/Hany-R-Mahmoud/ala-mahli/pull/1 ; landing page: https://github.com/Hany-R-Mahmoud/ala-mahli/pull/2 .

Changes follow the existing editorial-driven Merged Projects pattern, without deleting an original record. DaqiqaLearn moves from the active learning grid to the merged group under Ala Mahli, preserving its previous version, cover, repository, and historical detail route. The merged action deep-links to /app?view=tracks .

The editorial source of truth is src/data/projectEditorial.json. The curated content in src/data/vercel-projects.json has no mergedInto field; src/data/portfolioData.ts is the generated snapshot. When the owner's Apex Yard root is available, npm run sync:portfolio uses these sources.

Expected listed projects: 125 active + 6 merged -> 124 active + 7 merged, total 131. Eight original tracks / 80 native lessons and six supplemental collections / 42 donor lessons remain in the unified app.

Validation: npm run verify:directory, npm run verify:merged, npm run lint, npm run build. Check both Arabic and English historical routes. No source repository retirement or Vercel donor deletion is authorized.
