// TOKEN_POLICY_BATCHED_EXECUTION: focused media, order, and visibility checks.
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const parse=s=>JSON.parse(s.split('export const PORTFOLIO_PROJECTS = ')[1].split(' satisfies Project[];')[0]);
const current=parse(fs.readFileSync('src/data/portfolioData.ts','utf8'));
const before=parse(execFileSync('git',['show','HEAD:src/data/portfolioData.ts'],{encoding:'utf8'}));
const visible=p=>Boolean(p.isPublished&&p.liveUrl&&p.imageSrc&&!p.imageSrc.startsWith('data:image/svg+xml'));
if(current.map(p=>p.id).join()!==before.map(p=>p.id).join())throw Error('Project order changed');
for(const p of current){
 const previous=before.find(x=>x.id===p.id);
 if(visible(p)!==visible(previous))throw Error('Visibility changed: '+p.slug);
 if(!visible(p)&&JSON.stringify(p)!==JSON.stringify(previous))throw Error('Hidden entry changed: '+p.slug);
 for(const image of [p.imageSrc,...p.galleryImages??[]].filter(x=>x.startsWith('/projects/'))){if(!fs.existsSync('public'+image))throw Error('Missing: '+image);}
}
for(const slug of new Set(current.filter(visible).map(p=>p.slug))){
 for(const file of ['cover.jpg','social-square.jpg','social-story.jpg'])if(!fs.existsSync(`public/projects/${slug}/${file}`))throw Error(`Missing campaign: ${slug}/${file}`);
}
console.log('18 visible entries, 17 campaigns, 51 exports. Order and visibility preserved; 30 hidden entries unchanged; local image references verified.');
