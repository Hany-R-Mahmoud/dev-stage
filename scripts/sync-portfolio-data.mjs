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

const portfolioImageOverrides = {
  js2next: {
    imageSrc: 'https://ik.imagekit.io/hrim/images/js2next/js2next1.png?updatedAt=1785375141944',
    galleryImages: [
      'https://ik.imagekit.io/hrim/images/js2next/js2next2.png?updatedAt=1785375140517',
      'https://ik.imagekit.io/hrim/images/js2next/js2next3.png?updatedAt=1785375140760',
      'https://ik.imagekit.io/hrim/images/js2next/js2next4.png?updatedAt=1785375141166',
      'https://ik.imagekit.io/hrim/images/js2next/js2next5.png?updatedAt=1785375141467',
      'https://ik.imagekit.io/hrim/images/js2next/js2next6.png?updatedAt=1785375140980',
    ],
  },
};

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
  const packageJson = readJson(join(workspacePath, 'package.json'));
  const portfolioDoc = readJson(join(workspacePath, 'docs', 'portfolio.json'));
  const readme = readText(join(workspacePath, 'README.md'));
  const fallbackReadme = readText(join(apexyardRoot, registryProject.docs ?? '', 'README.md'));
  const sourceText = readme || fallbackReadme;
  const fallbackDescription = firstParagraph(sourceText) || packageJson.description || 'A project managed in this portfolio.';
  const title = { en: projectName, ar: projectName };
  const description = bilingualText(portfolioDoc.summary, fallbackDescription);
  const stack = Array.isArray(portfolioDoc.tech_stack) && portfolioDoc.tech_stack.length > 0
    ? portfolioDoc.tech_stack
    : detectStack(packageJson);
  const category = portfolioDoc.category || detectCategory(packageJson, stack);
  const status = portfolioDoc.status || registryProject.status || 'prototype';
  const features = bilingualList(portfolioDoc.features);
  const progress = bilingualText(portfolioDoc.progress, `Status recorded as ${status}.`);
  const issues = bilingualList(portfolioDoc.issues);
  const suggestions = bilingualList(portfolioDoc.suggestions);
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
    imageSrc: imageOverride.imageSrc ?? placeholderImage(label),
    galleryImages: imageOverride.galleryImages ?? [],
    contentMDX: { en: content, ar: arabicContent },
    isPublished: true,
    featured: status === 'showcase' && index < 5,
    tags: [...stack, status],
    status,
    features,
    progress,
    issues,
    suggestions,
    repository: portfolioDoc.repository,
    source: portfolioDoc.source,
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
  title: { en: 'Software Engineer | Agentic coding | React Native, Next.js & TypeScript | Fintech, Secure Auth & AI-Assisted Development', ar: 'المؤسس والمطور' },
  bio: {
    en: 'Once a doctor, always a doctor',
    ar: 'أبني مشاريع متنوعة في الحجم والمجال مع استكشاف هندسة البرمجيات بمساعدة الذكاء الاصطناعي.',
  },
  location: { en: 'Egypt • Middle East', ar: 'مصر • الشرق الأوسط' },
  avatar: placeholderImage('HR'),
  email: '',
  github: 'https://github.com/Hany-R-Mahmoud',
  linkedin: '',
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
