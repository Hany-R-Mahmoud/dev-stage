import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDirectory, '..');

const readText = (filePath) => {
  try {
    return readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
};

const readJson = (filePath) => {
  const content = readText(filePath);
  if (!content) return {};

  try {
    return JSON.parse(content);
  } catch {
    return {};
  }
};

const unquote = (value) => value.trim().replace(/^['"]|['"]$/g, '');

const resolveApexyardRoot = () => {
  const candidates = [
    process.env.APEXYARD_ROOT,
    resolve(process.cwd(), '../..'),
    resolve(scriptDirectory, '../../..'),
  ].filter(Boolean);

  const root = candidates.find((candidate) => existsSync(join(candidate, 'apexyard.projects.yaml')));
  if (!root) {
    throw new Error('Could not find Apex Yard. Set APEXYARD_ROOT to the Apex Yard repository root.');
  }

  return root;
};

const parseRegistry = (content) => {
  const projects = [];
  let current = null;

  for (const line of content.split(/\r?\n/)) {
    const projectMatch = line.match(/^  - name:\s+(.+)$/);
    if (projectMatch) {
      current = { name: unquote(projectMatch[1]) };
      projects.push(current);
      continue;
    }

    const fieldMatch = line.match(/^    (repo|workspace|docs|status|kind|portfolio):\s+(.+)$/);
    if (current && fieldMatch) {
      current[fieldMatch[1]] = unquote(fieldMatch[2]);
    }
  }

  return projects.filter((project) => project.workspace);
};

const firstParagraph = (content) => {
  const paragraphs = content
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#') && !line.startsWith('![') && !line.startsWith('<'))
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim())
    .filter((paragraph) => paragraph && !paragraph.startsWith('```') && !paragraph.startsWith('- '));

  return paragraphs[0]?.slice(0, 280) ?? '';
};

const dependencyNames = (packageJson) => [
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.devDependencies ?? {}),
];

const sanitizePortfolioText = (value) => value
  .replace(/\bApex Yard(?:\s*\/\s*Hany-Labs)?\b/gi, 'Dev Stage')
  .replace(/\bHany-Labs\b/gi, 'Dev Stage');

const detectStack = (packageJson) => {
  const dependencies = dependencyNames(packageJson);
  const stack = [];
  const add = (label, matches) => {
    if (matches.some((match) => dependencies.some((dependency) => dependency.includes(match)))) {
      stack.push(label);
    }
  };

  add('Next.js', ['next']);
  add('Vite', ['vite']);
  add('Expo', ['expo']);
  add('React Native', ['react-native']);
  add('React', ['react']);
  add('TypeScript', ['typescript']);
  add('Supabase', ['supabase']);
  add('Tailwind', ['tailwind']);
  add('Capacitor', ['capacitor']);
  add('Vitest', ['vitest']);

  return stack.slice(0, 5);
};

const detectCategory = (packageJson, stack) => {
  const dependencies = dependencyNames(packageJson);
  if (dependencies.some((dependency) => dependency.includes('expo') || dependency.includes('react-native'))) {
    return 'Mobile';
  }
  if (stack.includes('Next.js') || stack.includes('Vite') || stack.includes('React')) {
    return 'Web';
  }
  return 'Tools';
};

const bilingualText = (value, fallback = '') => {
  if (typeof value === 'string') {
    const text = sanitizePortfolioText(value);
    return { en: text, ar: text };
  }
  if (value && typeof value === 'object') {
    return {
      en: sanitizePortfolioText(typeof value.en === 'string' ? value.en : fallback),
      ar: sanitizePortfolioText(typeof value.ar === 'string' ? value.ar : (typeof value.en === 'string' ? value.en : fallback)),
    };
  }
  const text = sanitizePortfolioText(fallback);
  return { en: text, ar: text };
};

const bilingualList = (value) => (Array.isArray(value)
  ? value.map((item) => bilingualText(item)).filter((item) => item.en || item.ar)
  : []);

const initials = (title, name) => {
  const words = (title || name).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words.slice(0, 3).map((word) => word[0]).join('').toUpperCase();
};

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const placeholderImage = (label) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750"><rect width="1200" height="750" fill="#1A1A1A"/><rect x="32" y="32" width="1136" height="686" fill="none" stroke="#D4AF37" stroke-width="3"/><text x="600" y="410" fill="#F4F2ED" font-family="Georgia, serif" font-size="180" font-weight="700" text-anchor="middle">${escapeXml(label)}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const portfolioTitleOverrides = {
  'new-etamini': 'Etamini',
  focussessionflow: 'Focus Flow',
  'spec-flow': 'Spec Flow AI',
  minarets_of_cairo: 'Minaretes of Cairo',
  'emojie-crack': 'Emojie-Crack',
};

const portfolioImageOverrides = {
  focussessionflow: {
    liveUrl: 'https://focus-session-flow.vercel.app/',
    logoSrc: 'https://focus-session-flow.vercel.app/brand/focus-flow-mark.png',
    imageSrc: 'https://ik.imagekit.io/hrim/images/focus-flow/focus-flow1.png',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/focus-flow/focus-flow2.png',
      'https://ik.imagekit.io/hrim/images/focus-flow/focus-flow3.png',
      'https://ik.imagekit.io/hrim/images/focus-flow/focus-flow4.png',
      'https://ik.imagekit.io/hrim/images/focus-flow/focus-flow5.png',
    ],
  },
  js2next: {
    liveUrl: 'https://js2next.vercel.app/',
    logoSrc: 'https://js2next.vercel.app/brand/js2next-icon.png',
    imageSrc: 'https://ik.imagekit.io/hrim/images/js2next/js2next1.png?updatedAt=1785375141944',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/js2next/js2next2.png?updatedAt=1785375140517',
      'https://ik.imagekit.io/hrim/images/js2next/js2next3.png?updatedAt=1785375140760',
      'https://ik.imagekit.io/hrim/images/js2next/js2next4.png?updatedAt=1785375141166',
      'https://ik.imagekit.io/hrim/images/js2next/js2next5.png?updatedAt=1785375141467',
      'https://ik.imagekit.io/hrim/images/js2next/js2next6.png?updatedAt=1785375140980',
    ],
  },
  'new-etamini': {
    liveUrl: 'https://etamini.vercel.app/',
    logoSrc: 'https://etamini.vercel.app/etamini-favicon.png',
    imageSrc: 'https://ik.imagekit.io/hrim/images/etamini/etamini1.png?updatedAt=1785378921365',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/etamini/etamini2.png?updatedAt=1785378921423',
      'https://ik.imagekit.io/hrim/images/etamini/etamini3.png?updatedAt=1785378920690',
      'https://ik.imagekit.io/hrim/images/etamini/etamini4.png?updatedAt=1785378921697',
    ],
  },
  'masar-ci': {
    liveUrl: 'https://masar-ci.vercel.app/',
    logoSrc: 'https://masar-ci.vercel.app/masar-ci.png',
    imageSrc: 'https://ik.imagekit.io/hrim/images/masar-ci/masar-ci1.png?updatedAt=1785378253740',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/masar-ci/masar-ci2.png?updatedAt=1785378253551',
    ],
  },
  'skills-agency': {
    liveUrl: 'https://skills-agency.vercel.app/',
    logoSrc: 'https://skills-agency.vercel.app/favicon.ico?favicon.0x3dzn~oxb6tn.ico',
    imageSrc: 'https://ik.imagekit.io/hrim/images/skills-agency/skills-agency1.png?updatedAt=1785378533772',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/skills-agency/skills-agency2.png?updatedAt=1785378535198',
      'https://ik.imagekit.io/hrim/images/skills-agency/skills-agency3.png?updatedAt=1785378534959',
      'https://ik.imagekit.io/hrim/images/skills-agency/skills-agency4.png?updatedAt=1785378533142',
    ],
  },
  wajba: {
    liveUrl: 'https://wajjba.vercel.app/',
    logoSrc: 'https://wajjba.vercel.app/favicon-32x32.png?v=2',
    imageSrc: 'https://ik.imagekit.io/hrim/images/wajba/wajba1.png',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/wajba/wajba2.png',
      'https://ik.imagekit.io/hrim/images/wajba/wajba3.png',
      'https://ik.imagekit.io/hrim/images/wajba/wajba4.png',
      'https://ik.imagekit.io/hrim/images/wajba/wajba5.png',
      'https://ik.imagekit.io/hrim/images/wajba/wajba6.png',
    ],
  },
  'yalla-goal': {
    liveUrl: 'https://yalla-bina-yalla.vercel.app/',
    logoSrc: 'https://yalla-bina-yalla.vercel.app/brand/yalla-goal-logo.png',
    imageSrc: 'https://ik.imagekit.io/hrim/images/yalla-goal/yalla1.png',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/yalla-goal/yalla2.png',
      'https://ik.imagekit.io/hrim/images/yalla-goal/yalla3.png',
      'https://ik.imagekit.io/hrim/images/yalla-goal/yalla4.png',
    ],
  },
  yahya: {
    liveUrl: 'https://yah-ya.vercel.app/',
    logoSrc: 'https://yah-ya.vercel.app/brand/yahya-favicon.svg',
    imageSrc: 'https://ik.imagekit.io/hrim/images/yahya/yahya1.png',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/yahya/yahya2.png',
      'https://ik.imagekit.io/hrim/images/yahya/yahya3.png',
      'https://ik.imagekit.io/hrim/images/yahya/yahya4.png',
    ],
  },
  'spec-flow': {
    liveUrl: 'https://spec-flow-ai.vercel.app/',
    logoSrc: 'https://spec-flow-ai.vercel.app/favicon.svg',
    imageSrc: 'https://ik.imagekit.io/hrim/images/spec-flo/spec-flow1.png',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/spec-flo/spec-flo2.png',
      'https://ik.imagekit.io/hrim/images/spec-flow3.png',
      'https://ik.imagekit.io/hrim/images/spec-flow4.png',
    ],
  },
  minarets_of_cairo: {
    liveUrl: 'https://minaretes.vercel.app/',
    logoSrc: 'https://minaretes.vercel.app/branding/minarets-logo.png',
    imageSrc: 'https://ik.imagekit.io/hrim/images/minaretes/minaretes1.png',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/minaretes/minaretes2.png',
      'https://ik.imagekit.io/hrim/images/minaretes/minaretes3.png',
      'https://ik.imagekit.io/hrim/images/minaretes/minaretes4.png',
    ],
  },
  'al-rawi': {
    liveUrl: 'https://al-rawi-rss.vercel.app/',
    logoSrc: '/al-rawi-logo.png',
    imageSrc: 'https://ik.imagekit.io/hrim/images/al-rawi/al-rawi1.png',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/al-rawi/al-rawi2.png',
      'https://ik.imagekit.io/hrim/images/al-rawi/al-rawi3.png',
      'https://ik.imagekit.io/hrim/images/al-rawi/al-rawi4.png',
    ],
  },
  'emojie-crack': {
    liveUrl: 'https://emojie-crack.vercel.app/',
    imageSrc: 'https://ik.imagekit.io/hrim/images/emojie/emojie1.png',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/emojie/emojie2.png',
      'https://ik.imagekit.io/hrim/images/emojie/emojie3.png',
      'https://ik.imagekit.io/hrim/images/emojie/emojie4.png',
    ],
  },
};

const stageForStatus = (status) => ({
  showcase: 'published',
  'in-progress': 'not-published',
  prototype: 'early',
  dropped: 'early',
  internal: 'not-published',
}[status] ?? 'early');

const lastCommitYear = (workspacePath) => {
  try {
    return execFileSync('git', ['-C', workspacePath, 'log', '-1', '--format=%cs'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .trim()
      .slice(0, 4) || new Date().getFullYear().toString();
  } catch {
    return new Date().getFullYear().toString();
  }
};

const publicContent = ({ title, description, category, stack, status, features, progress, issues, suggestions }) => [
  `# ${title}`,
  '',
  description,
  '',
  '## Project snapshot',
  '',
  `- Status: ${status}`,
  `- Category: ${category}`,
  `- Tech stack: ${stack.join(', ') || 'Not detected'}`,
  '',
  '## Features',
  '',
  ...(features.length > 0 ? features.map((feature) => `- ${feature}`) : ['- Unknown / verify']),
  '',
  '## Progress',
  '',
  progress,
  '',
  '## Issues / troubles',
  '',
  ...(issues.length > 0 ? issues.map((issue) => `- ${issue}`) : ['- Unknown / verify']),
  '',
  '## Suggested next steps',
  '',
  ...(suggestions.length > 0 ? suggestions.map((suggestion) => `- ${suggestion}`) : ['- Unknown / verify']),
].join('\n');

const buildProject = (registryProject, apexyardRoot, index) => {
  const workspacePath = join(apexyardRoot, registryProject.workspace);
  const projectName = basename(registryProject.workspace);
  const documentationPath = join(apexyardRoot, registryProject.docs ?? '');
  const sourcePath = existsSync(workspacePath) ? workspacePath : documentationPath;
  const packageJson = readJson(join(sourcePath, 'package.json'));
  const portfolioDoc = readJson(join(workspacePath, 'docs', 'portfolio.json'));
  const documentedPortfolio = Object.keys(portfolioDoc).length > 0
    ? portfolioDoc
    : readJson(join(documentationPath, 'docs', 'portfolio.json'));
  const readme = readText(join(sourcePath, 'README.md'));
  const fallbackReadme = readText(join(apexyardRoot, registryProject.docs ?? '', 'README.md'));
  const sourceText = readme || fallbackReadme;
  const fallbackDescription = firstParagraph(sourceText) || packageJson.description || 'A project managed in this portfolio.';
  const displayTitle = portfolioTitleOverrides[registryProject.name] ?? projectName;
  const title = { en: displayTitle, ar: displayTitle };
  const description = bilingualText(documentedPortfolio.summary, fallbackDescription);
  const stack = Array.isArray(documentedPortfolio.tech_stack) && documentedPortfolio.tech_stack.length > 0
    ? documentedPortfolio.tech_stack
    : detectStack(packageJson);
  const category = documentedPortfolio.category || detectCategory(packageJson, stack);
  const status = documentedPortfolio.status || registryProject.status || 'prototype';
  const features = bilingualList(documentedPortfolio.features);
  const progress = bilingualText(documentedPortfolio.progress, `Status recorded as ${status}.`);
  const issues = bilingualList(documentedPortfolio.issues);
  const suggestions = bilingualList(documentedPortfolio.suggestions);
  const label = initials(title.en, registryProject.name);
  const content = publicContent({
    title: title.en,
    description: description.en,
    category,
    stack,
    status,
    features: features.map((feature) => feature.en),
    progress: progress.en,
    issues: issues.map((issue) => issue.en),
    suggestions: suggestions.map((suggestion) => suggestion.en),
  });
  const arabicContent = publicContent({
    title: title.ar,
    description: description.ar,
    category,
    stack,
    status,
    features: features.map((feature) => feature.ar),
    progress: progress.ar,
    issues: issues.map((issue) => issue.ar),
    suggestions: suggestions.map((suggestion) => suggestion.ar),
  });
  const imageOverride = portfolioImageOverrides[registryProject.name] ?? {};

  return {
    id: `apexyard-${registryProject.name}`,
    slug: registryProject.name,
    title,
    description,
    meta: { en: stack.join(' • ') || status.toUpperCase(), ar: stack.join(' • ') || status.toUpperCase() },
    category,
    client: { en: 'Independent', ar: 'مستقل' },
    role: { en: 'Founder & Builder', ar: 'المؤسس والمطور' },
    year: lastCommitYear(workspacePath),
    liveUrl: imageOverride.liveUrl,
    logoSrc: imageOverride.logoSrc,
    imageSrc: imageOverride.imageSrc ?? placeholderImage(label),
    galleryImages: imageOverride.galleryImages ?? [],
    contentMDX: { en: content, ar: arabicContent },
    isPublished: true,
    featured: status === 'showcase' && index < 5,
    tags: [...stack, status],
    status,
    stage: documentedPortfolio.stage || stageForStatus(status),
    features,
    progress,
    issues,
    suggestions,
    repository: documentedPortfolio.repository,
    source: documentedPortfolio.source,
  };
};

const apexyardRoot = resolveApexyardRoot();
const registryProjects = parseRegistry(readText(join(apexyardRoot, 'apexyard.projects.yaml')));
const projects = registryProjects
  .filter((project) => project.portfolio !== 'false')
  .filter((project) => readJson(join(apexyardRoot, project.workspace, 'docs', 'portfolio.json')).portfolio !== false)
  .map((project, index) => buildProject(project, apexyardRoot, index));
const profile = {
  name: { en: 'Hany Mahmoud', ar: 'هاني' },
  title: {
    en: 'Software Engineer\nAI-Assisted Development\nReact Native, Next.js & TypeScript',
    ar: 'المؤسس والمطور',
  },
  bio: {
    en: 'Once a surgeon, always a surgeon...',
    ar: 'أبني مشاريع متنوعة في الحجم والمجال مع استكشاف هندسة البرمجيات بمساعدة الذكاء الاصطناعي.',
  },
  location: { en: 'Egypt • Middle East', ar: 'مصر • الشرق الأوسط' },
  avatar: '/hany-mahmoud.jpg',
  email: 'hany.r.mahmoud@gmail.com',
  github: 'https://github.com/Hany-R-Mahmoud',
  linkedin: 'https://www.linkedin.com/in/hany-r-mahmoud/',
  skills: ['TypeScript', 'React', 'Next.js', 'React Native', 'Expo', 'AI-assisted engineering'],
};

const outputDirectory = join(projectRoot, 'src', 'data');
const outputPath = join(outputDirectory, 'portfolioData.ts');
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(
  outputPath,
  `import type { Profile, Project } from '../types';\n\nexport const PORTFOLIO_PROFILE = ${JSON.stringify(profile, null, 2)} satisfies Profile;\n\nexport const PORTFOLIO_PROJECTS = ${JSON.stringify(projects, null, 2)} satisfies Project[];\n`,
);

console.log(`Synced ${projects.length} projects into ${outputPath}`);
