import fs from 'node:fs';
const file='src/data/portfolioData.ts';
const source=fs.readFileSync(file,'utf8');
const projectMarker='export const PORTFOLIO_PROJECTS = ';
const start=source.indexOf(projectMarker)+projectMarker.length;
const end=source.indexOf(' satisfies Project[];',start);
const projects=JSON.parse(source.slice(start,end));
// TOKEN_POLICY_BATCHED_EXECUTION: use the same public collection rule as App.tsx.
const isShowcaseReady=p=>Boolean(p.isPublished&&p.liveUrl&&p.imageSrc&&!p.imageSrc.startsWith('data:image/svg+xml'));
const manifest=JSON.parse(fs.readFileSync('docs/campaigns/collection/manifest.json','utf8'));
const copy={
 'new-etamini':['An Arabic guide for mothers and young children, bringing newborn care, postpartum information, vaccines, and growth topics into one calm place.','دليل عربي للأم والطفل يجمع معلومات حديثي الولادة والنفاس والتطعيمات والنمو في مكان هادئ وواضح.'],
 'skills-agency':['A public directory of AI agent capabilities. Explore departments and specialist profiles to understand their scope, expertise, and fit for the work.','دليل عام لقدرات وكلاء الذكاء الاصطناعي. استكشف الأقسام وملفات المتخصصين لمعرفة نطاق العمل والخبرة والاختيار المناسب للمهمة.'],
 'masar-ci':['A visual DevOps workbench for authoring GitHub Actions, Docker, and Kubernetes artifacts and reviewing Terraform plans.','مساحة عمل مرئية لكتابة ملفات GitHub Actions وDocker وKubernetes ومراجعة خطط Terraform.'],
 'minarets_of_cairo':["A bilingual field guide to Cairo's Islamic heritage, with monuments, stories, walks, maps, and personal itinerary tools.",'دليل بالعربية والإنجليزية لتراث القاهرة الإسلامي، يجمع المعالم والحكايات ومسارات المشي والخرائط وأدوات تخطيط الزيارة.'],
};
const limitations={
 'minarets_of_cairo':['The live homepage failed to load during the October 2026 media review. The campaign cover uses a clearly labeled archived screenshot.','تعذر تحميل الصفحة الرئيسية أثناء مراجعة الصور في أكتوبر ٢٠٢٦. يستخدم الغلاف لقطة أرشيفية موضحة بوضوح.'],
 'al-rawi':['Public feeds loaded, but the clean article pane remained loading during the media review. Screenshots show the working feed list.','تم تحميل الخلاصات العامة، لكن عرض المقال المبسط ظل قيد التحميل أثناء مراجعة الصور. تعرض اللقطات قائمة المقالات التي عملت.'],
 'spec-flow':['Campaign screenshots show the public landing and workflow preview; authenticated breakdown and export flows were not verified.','تعرض صور الحملة الصفحة العامة ومعاينة سير العمل؛ لم يتم التحقق من خطوات التقسيم والتصدير بعد تسجيل الدخول.'],
};
for(const p of projects){
 const campaign=manifest.find(m=>m.slug===p.slug);
 if(!p.isPublished||!campaign)continue;
 p.imageSrc=`/projects/${p.slug}/cover.jpg`;
 if(p.slug!=='minarets_of_cairo')p.galleryImages=p.slug==='map-crack'?['gameplay','answer-reveal','briefing','arabic','landing'].map(name=>`/projects/${p.slug}/${name}.jpg`):['experience','landing'].map(name=>`/projects/${p.slug}/${name}.jpg`);
 if(copy[p.slug]){const old=p.description;p.description={en:copy[p.slug][0],ar:copy[p.slug][1]};for(const lang of ['en','ar'])if(p.contentMDX?.[lang])p.contentMDX[lang]=p.contentMDX[lang].replace(old[lang],p.description[lang]);}
 if(limitations[p.slug]&&!p.issues?.some(i=>i.en===limitations[p.slug][0])){const [en,ar]=limitations[p.slug];p.issues=[...(p.issues??[]),{en,ar}];for(const lang of ['en','ar'])if(p.contentMDX?.[lang])p.contentMDX[lang]+=`\n\n## Media review — October 2026\n\n${lang==='en'?en:ar}`;}
}
fs.writeFileSync(file,source.slice(0,start)+JSON.stringify(projects,null,2)+source.slice(end));
const syncPath='scripts/sync-portfolio-data.mjs';
let sync=fs.readFileSync(syncPath,'utf8');
const overrides=Object.fromEntries(manifest.map(p=>[p.slug,{imageSrc:`/projects/${p.slug}/cover.jpg`,...(p.slug==='minarets_of_cairo'?{}:{galleryImages:projects.find(x=>x.slug===p.slug).galleryImages})}]));
const marker='// Reviewed campaign assets: keep local media when refreshing registry data.';
if(!sync.includes(marker))sync=sync.replace('const stageForStatus =',`${marker}\nconst campaignImageOverrides = ${JSON.stringify(overrides,null,2)};\nfor (const [slug, media] of Object.entries(campaignImageOverrides)) {\n  portfolioImageOverrides[slug] = { ...portfolioImageOverrides[slug], ...media };\n}\n\nconst stageForStatus =`);
fs.writeFileSync(syncPath,sync);
const hidden=projects.filter(p=>!isShowcaseReady(p));
const notes=`# Project campaign collection\n\nReviewed 2026-10-06. Covers, square posts, and vertical stories are prepared for all 17 unique public projects (18 entries; Dev2Ops appears twice). Existing ordering and publication settings are preserved.\n\n## Assets and editing\n\n- Cover: 1280 × 800. Square: 1080 × 1080. Story: 1080 × 1920.\n- Artwork: docs/campaigns/<slug>/creative.html. Collection preview: docs/campaigns/collection/index.html.\n- Source captures and exports: public/projects/<slug>/.\n- The manifest records hooks, palettes, styles, selected interface, and evidence labels.\n- Run build.mjs from the repository root to regenerate the 16 collection HTML sources; Emojie-Crack retains its custom pilot source. Export through the in-app browser.\n- Product galleries use the working interface and landing page; Map-Crack retains its five distinct gameplay views. Minarets retains its existing historical gallery. Social artwork stays out of the screenshot gallery to avoid repeating the same interface.\n\n## Selection rationale\n\n${manifest.map(p=>`- **${p.name}:** ${p.style} direction. ${p.summary} Selected: ${p.image}. Evidence: ${p.proof}.`).join('\n')}\n\n## Limits and demonstration data\n\n- Minarets: live homepage failed; cover uses the existing archived image with an explicit label.\n- SpecFlow: public preview only. No account was created, no provider key was entered, and no authenticated generation/export success is claimed. Landing preview numbers and testimonials are placeholders, not campaign claims.\n- Al-Rawi: public Ars Technica/The Verge feeds loaded; clean article pane stayed loading. Final capture shows the feed list without that spinner.\n- Emojie-Crack: guest answer submission error remains documented in its pilot direction notes; tutorial success is a demo.\n- Tabeeb Flow: explicitly provided local clinic demo. No real patient data.\n- Jadwal: one local demonstration task, “Prepare project launch assets.” Wajba: local suggested weekly meal plan. Rihlaty and FocusFlow: existing example workspace content. These screens do not prove real user outcomes.\n- The Agency: public capability roster and department view; displayed activity is not verified operational telemetry.\n- Care projects: educational guide copy, without medical outcome promises.\n\n## Hidden collection readiness\n\nThe following ${hidden.length} entries remain hidden. They have no verified public capture in this pass; publishing them or fabricating interfaces would be a separate change.\n\n${hidden.map(p=>`- ${p.slug}: ${p.liveUrl?'public/demo route and screenshot readiness need review':'no live URL in portfolio data; needs a runnable/demo source before screenshot selection'}.`).join('\n')}\n`;
fs.writeFileSync('docs/campaigns/collection/README.md',notes);
console.log(`Updated ${projects.filter(isShowcaseReady).length} visible entries; retained ${hidden.length} hidden entries.`);
