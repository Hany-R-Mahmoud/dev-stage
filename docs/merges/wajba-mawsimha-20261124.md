# Wajba / Mawsimha — Dev2Stage archive update

Recorded: 2026-11-24.

Survivor: wajba — https://wajjba.vercel.app/ ; source: https://github.com/Hany-R-Mahmoud/wajba .
Donor: mawsimha — existing former version https://mawsimha.vercel.app/ ; source: https://github.com/Hany-R-Mahmoud/mawsimha .
Merged features: In Season view https://wajjba.vercel.app/dashboard/seasons ; public guide https://wajjba.vercel.app/seasons .

Mawsimha's 36-item seasonal-produce dataset now powers Wajba's "In Season / في موسمه" view, the public guide, an in-season hint on grocery rows, and a "seasonal this month" recipe filter. Mawsimha's separate checklist and auth were not carried over; Wajba's grocery list covers it.

Changes follow the existing editorial-driven Merged Projects pattern, without deleting an original record. Mawsimha moves from the active life grid to the merged group under Wajba, keeping its previous version, cover, repository, and historical detail route. The merged action links to /seasons .

The editorial source of truth is src/data/projectEditorial.json. The curated content in src/data/vercel-projects.json has no mergedInto field; src/data/portfolioData.ts is the generated snapshot. Wajba now has a curated record there so its description and Mawsimha merge section are kept. When the owner's Apex Yard root is available, npm run sync:portfolio uses these sources.

Expected listed projects: 155 active + 9 merged -> 154 active + 10 merged, total 164.

Validation: npm run verify:directory, npm run verify:merged, npm run lint, npm run build. No source repository retirement or Vercel donor deletion is authorized.
