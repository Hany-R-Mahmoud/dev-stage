import type { Profile, Project } from '../types';

export const PORTFOLIO_PROFILE = {
  "name": {
    "en": "Hany Mahmoud",
    "ar": "هاني"
  },
  "title": {
    "en": "Software Engineer\nAI-Assisted Development\nReact Native, Next.js & TypeScript",
    "ar": "المؤسس والمطور"
  },
  "bio": {
    "en": "Once a surgeon, always a surgeon...",
    "ar": "أبني مشاريع متنوعة في الحجم والمجال مع استكشاف هندسة البرمجيات بمساعدة الذكاء الاصطناعي."
  },
  "location": {
    "en": "Egypt • Middle East",
    "ar": "مصر • الشرق الأوسط"
  },
  "avatar": "/hany-mahmoud.png",
  "email": "hany.r.mahmoud@gmail.com",
  "github": "https://github.com/Hany-R-Mahmoud",
  "linkedin": "https://www.linkedin.com/in/hany-r-mahmoud/",
  "skills": [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "AI-assisted engineering"
  ]
} satisfies Profile;

export const PORTFOLIO_PROJECTS = [
  {
    "id": "apexyard-emojie-crack",
    "slug": "emojie-crack",
    "title": {
      "en": "Emojie-Crack",
      "ar": "Emojie-Crack"
    },
    "description": {
      "en": "An Arabic emoji puzzle game inspired by Egyptian proverbs, films, food, and trends. Read the clue, connect the meaning, and crack the phrase.",
      "ar": "لعبة ألغاز إيموجي بالعربية مستوحاة من الأمثال والأفلام والأكلات والترندات المصرية. شوف الرموز، اربط المعنى، وفك الشفرة."
    },
    "meta": {
      "en": "Vite • React • TypeScript • Tailwind",
      "ar": "Vite • React • TypeScript • Tailwind"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://emojie-crack.vercel.app/",
    "imageSrc": "/projects/emojie-crack/cover.jpg",
    "galleryImages": [
      "/projects/emojie-crack/gameplay.jpg",
      "/projects/emojie-crack/categories.jpg",
      "/projects/emojie-crack/tutorial.jpg",
      "/projects/emojie-crack/landing.jpg"
    ],
    "contentMDX": {
      "en": "# Emojie-Crack\n\nAn Arabic emoji puzzle game inspired by Egyptian proverbs, films, food, and trends. Read the clue, connect the meaning, and crack the phrase.\n\n## Features\n\n- Egyptian proverbs, films, food, places, and popular expressions\n- Timed emoji puzzles with hints and answer-length cues\n- Arabic interface with right-to-left layout\n- Interactive tutorial and guest entry",
      "ar": "# Emojie-Crack\n\nلعبة ألغاز إيموجي بالعربية مستوحاة من الأمثال والأفلام والأكلات والترندات المصرية. شوف الرموز، اربط المعنى، وفك الشفرة.\n\n## الميزات\n\n- أمثال وأفلام وأكلات وأماكن وتعبيرات مصرية شعبية\n- ألغاز إيموجي بوقت محدد مع تلميحات ومؤشرات لطول الإجابة\n- واجهة عربية بتخطيط من اليمين لليسار\n- عرض توضيحي تفاعلي وإمكانية الدخول كضيف"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Egyptian proverbs, films, food, places, and popular expressions",
        "ar": "أمثال وأفلام وأكلات وأماكن وتعبيرات مصرية شعبية"
      },
      {
        "en": "Timed emoji puzzles with hints and answer-length cues",
        "ar": "ألغاز إيموجي بوقت محدد مع تلميحات ومؤشرات لطول الإجابة"
      },
      {
        "en": "Arabic interface with right-to-left layout",
        "ar": "واجهة عربية بتخطيط من اليمين لليسار"
      },
      {
        "en": "Interactive tutorial and guest entry",
        "ar": "عرض توضيحي تفاعلي وإمكانية الدخول كضيف"
      }
    ],
    "progress": {
      "en": "Presentation refreshed with real product screenshots and coordinated portfolio/social artwork on 2026-10-06.",
      "ar": "تم تحديث العرض بلقطات حقيقية من المنتج وتصميمات متناسقة للمعرض ومنصات التواصل في 2026-10-06."
    },
    "issues": [
      {
        "en": "Live guest answer submission returned an account-round validation error during the 2026-10-06 visual review. Verify before promoting guest gameplay.",
        "ar": "ظهر خطأ في التحقق من جولة الحساب عند إرسال إجابة كضيف أثناء المراجعة البصرية في 2026-10-06. يجب التحقق قبل الترويج للعب كضيف."
      }
    ],
    "suggestions": [],
    "logoSrc": "/projects/emojie-crack/logo.png",
    "source": {
      "workspace": "workspace/emojie-crack",
      "last_reviewed": "2026-10-06"
    }
  },
  {
    "id": "apexyard-map-crack",
    "slug": "map-crack",
    "title": {
      "en": "Map-Crack",
      "ar": "Map-Crack"
    },
    "description": {
      "en": "A survival geography game: rotate a real 3D globe, locate countries and capitals, and keep playing until three mistakes end the run.",
      "ar": "لعبة جغرافيا للبقاء: دوّر كرة أرضية ثلاثية الأبعاد، وحدد الدول والعواصم، وواصل اللعب حتى تنهي ثلاثة أخطاء الجولة."
    },
    "meta": {
      "en": "React • TypeScript • TanStack Start • Three.js • PWA",
      "ar": "React • TypeScript • TanStack Start • Three.js • PWA"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://mapcrack.vercel.app/",
    "logoSrc": "/projects/map-crack/logo.png",
    "imageSrc": "/projects/map-crack/cover.jpg",
    "galleryImages": [
      "/projects/map-crack/gameplay.jpg",
      "/projects/map-crack/answer-reveal.jpg",
      "/projects/map-crack/briefing.jpg",
      "/projects/map-crack/arabic.jpg",
      "/projects/map-crack/landing.jpg"
    ],
    "contentMDX": {
      "en": "# Map-Crack\n\nA survival geography game: rotate a real 3D globe, locate countries and capitals, and keep playing until three mistakes end the run.\n\n## Features\n\n- Countries, Capitals, and Random Mix survival modes\n- Interactive 3D globe with pin placement and answer-distance feedback\n- English and Arabic, RTL layout, keyboard controls, and local guest progress\n- Offline solo play and installable PWA",
      "ar": "# Map-Crack\n\nلعبة جغرافيا للبقاء: دوّر كرة أرضية ثلاثية الأبعاد، وحدد الدول والعواصم، وواصل اللعب حتى تنهي ثلاثة أخطاء الجولة.\n\n## الميزات\n\n- أوضاع بقاء للدول والعواصم والمزيج العشوائي\n- كرة أرضية تفاعلية ثلاثية الأبعاد مع وضع الدبابيس وعرض مسافة الخطأ\n- الإنجليزية والعربية، وتخطيط من اليمين لليسار، وتحكم بلوحة المفاتيح، وتقدم محلي للضيف\n- لعب فردي دون اتصال وتطبيق ويب قابل للتثبيت"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "React",
      "TypeScript",
      "Three.js",
      "PWA",
      "Geography",
      "Games",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Countries, Capitals, and Random Mix survival modes",
        "ar": "أوضاع بقاء للدول والعواصم والمزيج العشوائي"
      },
      {
        "en": "Interactive 3D globe with pin placement and answer-distance feedback",
        "ar": "كرة أرضية تفاعلية ثلاثية الأبعاد مع وضع الدبابيس وعرض مسافة الخطأ"
      },
      {
        "en": "English and Arabic, RTL layout, keyboard controls, and local guest progress",
        "ar": "الإنجليزية والعربية، وتخطيط من اليمين لليسار، وتحكم بلوحة المفاتيح، وتقدم محلي للضيف"
      },
      {
        "en": "Offline solo play and installable PWA",
        "ar": "لعب فردي دون اتصال وتطبيق ويب قابل للتثبيت"
      }
    ],
    "progress": {
      "en": "Local guest gameplay and English/Arabic screens verified; five portfolio screenshots captured on 2026-10-06.",
      "ar": "تم التحقق من لعب الضيف محليًا والشاشات الإنجليزية والعربية، والتقاط خمس صور للعرض في 2026-10-06."
    },
    "issues": [
      {
        "en": "Nine country records still await human release review; Tuvalu is excluded from Countries targets because its bundled polygon is missing.",
        "ar": "تسعة سجلات دول تنتظر مراجعة بشرية قبل الإصدار؛ توفالو مستبعدة من تحديات الدول لغياب حدودها من البيانات المدمجة."
      }
    ],
    "source": {
      "workspace": "workspace/map-crack",
      "last_reviewed": "2026-10-06"
    }
  },
  {
    "id": "apexyard-yahya",
    "slug": "yahya",
    "title": {
      "en": "yahya",
      "ar": "yahya"
    },
    "description": {
      "en": "Arabic-first, Egypt-focused cancer awareness and navigation platform.",
      "ar": "Arabic-first, Egypt-focused cancer awareness and navigation platform."
    },
    "meta": {
      "en": "Next.js • Vite • React • TypeScript • Tailwind • Capacitor • Vitest",
      "ar": "Next.js • Vite • React • TypeScript • Tailwind • Capacitor • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://yah-ya.vercel.app/",
    "logoSrc": "https://yah-ya.vercel.app/brand/yahya-favicon.svg",
    "imageSrc": "/projects/yahya/cover.jpg",
    "galleryImages": [
      "/projects/yahya/experience.jpg",
      "/projects/yahya/landing.jpg"
    ],
    "contentMDX": {
      "en": "# yahya\n\nArabic-first, Egypt-focused cancer awareness and navigation platform.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Capacitor, Vitest\n\n## Features\n\n- Project Structure\n- AI Agent Guide\n- Team Decisions\n- Known gaps: exact deployment pipeline, prod data-source verification, and cur test coverage details.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# yahya\n\nArabic-first, Egypt-focused cancer awareness and navigation platform.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Capacitor, Vitest\n\n## Features\n\n- Project Structure\n- AI Agent Guide\n- Team Decisions\n- Known gaps: exact deployment pipeline, prod data-source verification, and cur test coverage details.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Capacitor",
      "Vitest",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Project Structure",
        "ar": "Project Structure"
      },
      {
        "en": "AI Agent Guide",
        "ar": "AI Agent Guide"
      },
      {
        "en": "Team Decisions",
        "ar": "Team Decisions"
      },
      {
        "en": "Known gaps: exact deployment pipeline, prod data-source verification, and cur test coverage details.",
        "ar": "Known gaps: exact deployment pipeline, prod data-source verification, and cur test coverage details."
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      }
    ],
    "suggestions": [
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/yahya-cancer-fellow"
    },
    "source": {
      "workspace": "workspace/yahya",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-new-etamini",
    "slug": "new-etamini",
    "title": {
      "en": "Etamini",
      "ar": "Etamini"
    },
    "description": {
      "en": "An Arabic guide for mothers and young children, bringing newborn care, postpartum information, vaccines, and growth topics into one calm place.",
      "ar": "دليل عربي للأم والطفل يجمع معلومات حديثي الولادة والنفاس والتطعيمات والنمو في مكان هادئ وواضح."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript • Vite • Capacitor",
      "ar": "TanStack Start • React • TypeScript • Vite • Capacitor"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://etamini.vercel.app/",
    "logoSrc": "https://etamini.vercel.app/etamini-favicon.png",
    "imageSrc": "/projects/new-etamini/cover.jpg",
    "galleryImages": [
      "/projects/new-etamini/experience.jpg",
      "/projects/new-etamini/landing.jpg"
    ],
    "contentMDX": {
      "en": "# Etamini\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Tailwind, Capacitor, Vitest\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# Etamini\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Tailwind, Capacitor, Vitest\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": true,
    "tags": [
      "TanStack Start",
      "Vite",
      "React",
      "TypeScript",
      "Capacitor",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Route-based React application with TanStack Start and TanStack Router.",
        "ar": "تطبيق React قائم على المسارات باستخدام TanStack Start وTanStack Router."
      },
      {
        "en": "Shared web and mobile delivery path through Capacitor packaging.",
        "ar": "مسار تسليم مشترك للويب والهاتف عبر حزم Capacitor."
      }
    ],
    "progress": {
      "en": "The showcase surface is live, while dependency resolution, lint, and production build work remain before a clean release baseline.",
      "ar": "واجهة المعرض متاحة، بينما لا تزال معالجة الاعتماديات وlint وبناء الإنتاج مطلوبة قبل خط أساس إصدار نظيف."
    },
    "issues": [
      {
        "en": "The production build is blocked by a missing @tanstack/query-core resolution; lint also reports a large existing formatting backlog.",
        "ar": "يتعطل بناء الإنتاج بسبب تعذر حل @tanstack/query-core؛ كما يحتوي lint على عدد كبير من أخطاء التنسيق الحالية."
      }
    ],
    "suggestions": [
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/new-etamini"
    },
    "source": {
      "workspace": "workspace/new-etamini",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-minarets_of_cairo",
    "slug": "minarets_of_cairo",
    "title": {
      "en": "Minaretes of Cairo",
      "ar": "Minaretes of Cairo"
    },
    "description": {
      "en": "A bilingual field guide to Cairo's Islamic heritage, with monuments, stories, walks, maps, and personal itinerary tools.",
      "ar": "دليل بالعربية والإنجليزية لتراث القاهرة الإسلامي، يجمع المعالم والحكايات ومسارات المشي والخرائط وأدوات تخطيط الزيارة."
    },
    "meta": {
      "en": "Vite • React • TypeScript • Tailwind • Vitest",
      "ar": "Vite • React • TypeScript • Tailwind • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://minaretes.vercel.app/",
    "logoSrc": "https://minaretes.vercel.app/branding/minarets-logo.png",
    "imageSrc": "/projects/minarets_of_cairo/cover.jpg",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/minaretes/minaretes2.png",
      "https://ik.imagekit.io/hrim/images/minaretes/minaretes3.png",
      "https://ik.imagekit.io/hrim/images/minaretes/minaretes4.png"
    ],
    "contentMDX": {
      "en": "# Minaretes of Cairo\n\nA bilingual field guide to Cairo's Islamic heritage, with monuments, stories, walks, maps, and personal itinerary tools.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Project structure\n- Local development\n- AI agent guide\n- Team decisions\n- ImageKit media workflow\n- Database notes\n- NotebookLM research enrichment workflow\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; the repository now includes a source-grounded NotebookLM enrichment workflow and 38 generated public place records.\n\n## Issues / troubles\n\n- Vitest coverage is concentrated in server/heritage.test.ts; broader client and end-to-end coverage is Unknown / verify.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.\n\n## Media review — October 2026\n\nThe live homepage failed to load during the October 2026 media review. The campaign cover uses a clearly labeled archived screenshot.",
      "ar": "# Minaretes of Cairo\n\nدليل بالعربية والإنجليزية لتراث القاهرة الإسلامي، يجمع المعالم والحكايات ومسارات المشي والخرائط وأدوات تخطيط الزيارة.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Project structure\n- Local development\n- AI agent guide\n- Team decisions\n- ImageKit media workflow\n- Database notes\n- NotebookLM research enrichment workflow\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; the repository now includes a source-grounded NotebookLM enrichment workflow and 38 generated public place records.\n\n## Issues / troubles\n\n- Vitest coverage is concentrated in server/heritage.test.ts; broader client and end-to-end coverage is Unknown / verify.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.\n\n## Media review — October 2026\n\nتعذر تحميل الصفحة الرئيسية أثناء مراجعة الصور في أكتوبر ٢٠٢٦. يستخدم الغلاف لقطة أرشيفية موضحة بوضوح."
    },
    "isPublished": true,
    "featured": true,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Project structure",
        "ar": "Project structure"
      },
      {
        "en": "Local development",
        "ar": "Local development"
      },
      {
        "en": "AI agent guide",
        "ar": "AI agent guide"
      },
      {
        "en": "Team decisions",
        "ar": "Team decisions"
      },
      {
        "en": "ImageKit media workflow",
        "ar": "ImageKit media workflow"
      },
      {
        "en": "Database notes",
        "ar": "Database notes"
      },
      {
        "en": "NotebookLM research enrichment workflow",
        "ar": "NotebookLM research enrichment workflow"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; the repository now includes a source-grounded NotebookLM enrichment workflow and 38 generated public place records.",
      "ar": "Classified as showcase-ready by Dev Stage; the repository now includes a source-grounded NotebookLM enrichment workflow and 38 generated public place records."
    },
    "issues": [
      {
        "en": "Vitest coverage is concentrated in server/heritage.test.ts; broader client and end-to-end coverage is Unknown / verify.",
        "ar": "Vitest coverage is concentrated in server/heritage.test.ts; broader client and end-to-end coverage is Unknown / verify."
      },
      {
        "en": "The live homepage failed to load during the October 2026 media review. The campaign cover uses a clearly labeled archived screenshot.",
        "ar": "تعذر تحميل الصفحة الرئيسية أثناء مراجعة الصور في أكتوبر ٢٠٢٦. يستخدم الغلاف لقطة أرشيفية موضحة بوضوح."
      }
    ],
    "suggestions": [
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/minarates-cairo"
    },
    "source": {
      "workspace": "workspace/minarets_of_cairo",
      "last_reviewed": "2026-07-30"
    }
  },
  {
    "id": "apexyard-masar-ci",
    "slug": "masar-ci",
    "title": {
      "en": "masar-ci",
      "ar": "masar-ci"
    },
    "description": {
      "en": "A visual DevOps workbench for authoring GitHub Actions, Docker, and Kubernetes artifacts and reviewing Terraform plans.",
      "ar": "مساحة عمل مرئية لكتابة ملفات GitHub Actions وDocker وKubernetes ومراجعة خطط Terraform."
    },
    "meta": {
      "en": "SHOWCASE",
      "ar": "SHOWCASE"
    },
    "category": "Tools",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://masar-ci.vercel.app/",
    "logoSrc": "https://masar-ci.vercel.app/masar-ci.png",
    "imageSrc": "/projects/masar-ci/cover.jpg",
    "galleryImages": [
      "/projects/masar-ci/experience.jpg",
      "/projects/masar-ci/landing.jpg"
    ],
    "contentMDX": {
      "en": "# masar-ci\n\nA visual DevOps workbench for authoring GitHub Actions, Docker, and Kubernetes artifacts and reviewing Terraform plans.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# masar-ci\n\nمساحة عمل مرئية لكتابة ملفات GitHub Actions وDocker وKubernetes ومراجعة خطط Terraform.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Current feature inventory: Unknown / verify.",
        "ar": "Current feature inventory: Unknown / verify."
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "No application manifest was detected in the workspace.",
        "ar": "No application manifest was detected in the workspace."
      },
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/masar-ci"
    },
    "source": {
      "workspace": "workspace/masar-ci",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-mrkb",
    "slug": "mrkb",
    "title": {
      "en": "mrkb",
      "ar": "mrkb"
    },
    "description": {
      "en": "A cross-platform (iOS, Android, Web) repair and maintenance knowledge base app. Create step-by-step repair guides with parts, tools, photos, and safety notes. Track maintenance history for items you care for. Built with Expo + Fastify + PostgreSQL.",
      "ar": "A cross-platform (iOS, Android, Web) repair and maintenance knowledge base app. Create step-by-step repair guides with parts, tools, photos, and safety notes. Track maintenance history for items you care for. Built with Expo + Fastify + PostgreSQL."
    },
    "meta": {
      "en": "PROTOTYPE",
      "ar": "PROTOTYPE"
    },
    "category": "Tools",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EMR%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# mrkb\n\nA cross-platform (iOS, Android, Web) repair and maintenance knowledge base app. Create step-by-step repair guides with parts, tools, photos, and safety notes. Track maintenance history for items you care for. Built with Expo + Fastify + PostgreSQL.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Docker Desktop\n- Guide editor: Create and edit repair guides with reorderable steps, difficulty/safety/visibility levels\n- Search: Full-text search across guides with debounced input (250ms)\n- Favorites: Save guides for quick access (offline-capable with AsyncStorage)\n- Maintenance logs: Track work done on items with dates and costs\n- Markdown export: Share guides as Markdown files\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# mrkb\n\nA cross-platform (iOS, Android, Web) repair and maintenance knowledge base app. Create step-by-step repair guides with parts, tools, photos, and safety notes. Track maintenance history for items you care for. Built with Expo + Fastify + PostgreSQL.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Docker Desktop\n- Guide editor: Create and edit repair guides with reorderable steps, difficulty/safety/visibility levels\n- Search: Full-text search across guides with debounced input (250ms)\n- Favorites: Save guides for quick access (offline-capable with AsyncStorage)\n- Maintenance logs: Track work done on items with dates and costs\n- Markdown export: Share guides as Markdown files\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "prototype"
    ],
    "status": "prototype",
    "features": [
      {
        "en": "Docker Desktop",
        "ar": "Docker Desktop"
      },
      {
        "en": "Guide editor: Create and edit repair guides with reorderable steps, difficulty/safety/visibility levels",
        "ar": "Guide editor: Create and edit repair guides with reorderable steps, difficulty/safety/visibility levels"
      },
      {
        "en": "Search: Full-text search across guides with debounced input (250ms)",
        "ar": "Search: Full-text search across guides with debounced input (250ms)"
      },
      {
        "en": "Favorites: Save guides for quick access (offline-capable with AsyncStorage)",
        "ar": "Favorites: Save guides for quick access (offline-capable with AsyncStorage)"
      },
      {
        "en": "Maintenance logs: Track work done on items with dates and costs",
        "ar": "Maintenance logs: Track work done on items with dates and costs"
      },
      {
        "en": "Markdown export: Share guides as Markdown files",
        "ar": "Markdown export: Share guides as Markdown files"
      }
    ],
    "progress": {
      "en": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage.",
      "ar": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage."
    },
    "issues": [
      {
        "en": "No application manifest was detected in the workspace.",
        "ar": "No application manifest was detected in the workspace."
      },
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/mrkb",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-notes-library",
    "slug": "notes-library",
    "title": {
      "en": "notes-library",
      "ar": "notes-library"
    },
    "description": {
      "en": "Organize books, articles, highlights, quotes, and personal notes into a searchable reading knowledge base.",
      "ar": "Organize books, articles, highlights, quotes, and personal notes into a searchable reading knowledge base."
    },
    "meta": {
      "en": "IN-PROGRESS",
      "ar": "IN-PROGRESS"
    },
    "category": "Tools",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ENL%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# notes-library\n\nOrganize books, articles, highlights, quotes, and personal notes into a searchable reading knowledge base.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Monorepo with npm workspaces (`packages/server`, `packages/app`)\n- Expo + React Native Web for cross-platform (iOS, Android, Web) from one codebase\n- Express + TypeScript backend — lightweight, portable, no paid services\n- Drizzle ORM for type-safe PostgreSQL queries and migrations\n- JWT + bcrypt for local authentication — no third-party auth dependency\n- Local-first with optional cloud sync (not yet implemented)\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# notes-library\n\nOrganize books, articles, highlights, quotes, and personal notes into a searchable reading knowledge base.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Monorepo with npm workspaces (`packages/server`, `packages/app`)\n- Expo + React Native Web for cross-platform (iOS, Android, Web) from one codebase\n- Express + TypeScript backend — lightweight, portable, no paid services\n- Drizzle ORM for type-safe PostgreSQL queries and migrations\n- JWT + bcrypt for local authentication — no third-party auth dependency\n- Local-first with optional cloud sync (not yet implemented)\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Monorepo with npm workspaces (`packages/server`, `packages/app`)",
        "ar": "Monorepo with npm workspaces (`packages/server`, `packages/app`)"
      },
      {
        "en": "Expo + React Native Web for cross-platform (iOS, Android, Web) from one codebase",
        "ar": "Expo + React Native Web for cross-platform (iOS, Android, Web) from one codebase"
      },
      {
        "en": "Express + TypeScript backend — lightweight, portable, no paid services",
        "ar": "Express + TypeScript backend — lightweight, portable, no paid services"
      },
      {
        "en": "Drizzle ORM for type-safe PostgreSQL queries and migrations",
        "ar": "Drizzle ORM for type-safe PostgreSQL queries and migrations"
      },
      {
        "en": "JWT + bcrypt for local authentication — no third-party auth dependency",
        "ar": "JWT + bcrypt for local authentication — no third-party auth dependency"
      },
      {
        "en": "Local-first with optional cloud sync (not yet implemented)",
        "ar": "Local-first with optional cloud sync (not yet implemented)"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/notes-library",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-js2next",
    "slug": "js2next",
    "title": {
      "en": "js2next",
      "ar": "js2next"
    },
    "description": {
      "en": "A Next.js learning platform for guided JavaScript and React curriculum, assessments, progress tracking, and review.",
      "ar": "منصة تعليمية مبنية بـ Next.js لمنهج JavaScript وReact الموجّه، والتقييمات، ومتابعة التقدم، والمراجعة."
    },
    "meta": {
      "en": "Next.js • React • TypeScript • Zustand • Tailwind",
      "ar": "Next.js • React • TypeScript • Zustand • Tailwind"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://js2next.vercel.app/",
    "logoSrc": "https://js2next.vercel.app/brand/js2next-icon.png",
    "imageSrc": "/projects/js2next/cover.jpg",
    "galleryImages": [
      "/projects/js2next/experience.jpg",
      "/projects/js2next/landing.jpg"
    ],
    "contentMDX": {
      "en": "# js2next\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- 79 source-backed learning packets with three-level learner guidance and Egyptian Arabic notes.\n- 632 assessment questions with code-first practice coverage for coding and hybrid tracks.\n\n## Progress\n\nFull content rewrite applied across the packet source, Markdown previews, and shared question bank; production build passes.\n\n## Issues / troubles\n\n- 205 source claims remain pending human review; rewritten content remains draft and unpublished.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# js2next\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- 79 حزمة تعليمية موثقة مع إرشاد لثلاثة مستويات وملاحظات بالعربي المصري.\n- 632 سؤال تقييم مع تغطية عملية تبدأ بالكود لمسارات البرمجة والمسارات الهجينة.\n\n## Progress\n\nتم تطبيق إعادة كتابة كاملة على مصادر الحزم ومعاينات Markdown وبنك الأسئلة؛ وبناء الإنتاج يمر بنجاح.\n\n## Issues / troubles\n\n- لا تزال 205 مطالبة مصدرية في انتظار المراجعة البشرية؛ والمحتوى المعاد كتابته مسودة وغير منشور.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": true,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "79 source-backed learning packets with three-level learner guidance and Egyptian Arabic notes.",
        "ar": "79 حزمة تعليمية موثقة مع إرشاد لثلاثة مستويات وملاحظات بالعربي المصري."
      },
      {
        "en": "632 assessment questions with code-first practice coverage for coding and hybrid tracks.",
        "ar": "632 سؤال تقييم مع تغطية عملية تبدأ بالكود لمسارات البرمجة والمسارات الهجينة."
      }
    ],
    "progress": {
      "en": "Full content rewrite applied across the packet source, Markdown previews, and shared question bank; production build passes.",
      "ar": "تم تطبيق إعادة كتابة كاملة على مصادر الحزم ومعاينات Markdown وبنك الأسئلة؛ وبناء الإنتاج يمر بنجاح."
    },
    "issues": [
      {
        "en": "205 source claims remain pending human review; rewritten content remains draft and unpublished.",
        "ar": "لا تزال 205 مطالبة مصدرية في انتظار المراجعة البشرية؛ والمحتوى المعاد كتابته مسودة وغير منشور."
      }
    ],
    "suggestions": [
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/js2next"
    },
    "source": {
      "workspace": "workspace/js2next",
      "last_reviewed": "2026-07-30"
    }
  },
  {
    "id": "apexyard-galsat",
    "slug": "galsat",
    "title": {
      "en": "galsat",
      "ar": "galsat"
    },
    "description": {
      "en": "تطبيق إدارة الإنتاجية للمحترفين عن بُعد — Desk & Desk Space Booking for Remote Workers.",
      "ar": "تطبيق إدارة الإنتاجية للمحترفين عن بُعد — Desk & Desk Space Booking for Remote Workers."
    },
    "meta": {
      "en": "Next.js • Vite • React • TypeScript • Tailwind • Vitest",
      "ar": "Next.js • Vite • React • TypeScript • Tailwind • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EGA%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# galsat\n\nتطبيق إدارة الإنتاجية للمحترفين عن بُعد — Desk & Desk Space Booking for Remote Workers.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Dashboard — Real-time summary cards, quick action buttons, and recent records overview\n- Record Management (CRUD) — Create, read, update, archive, restore, and soft-delete productivity entries\n- RTL & Typography — Native Right-To-Left layout with the Almarai font family\n- Search & Filter — Debounced search, category filter, date range, and status filter\n- Data Export — Export active records as JSON, CSV, or Markdown (Obsidian-compatible)\n- n8n Webhook Sync — Send structured JSON payloads to user-configured n8n endpoints\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# galsat\n\nتطبيق إدارة الإنتاجية للمحترفين عن بُعد — Desk & Desk Space Booking for Remote Workers.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Dashboard — Real-time summary cards, quick action buttons, and recent records overview\n- Record Management (CRUD) — Create, read, update, archive, restore, and soft-delete productivity entries\n- RTL & Typography — Native Right-To-Left layout with the Almarai font family\n- Search & Filter — Debounced search, category filter, date range, and status filter\n- Data Export — Export active records as JSON, CSV, or Markdown (Obsidian-compatible)\n- n8n Webhook Sync — Send structured JSON payloads to user-configured n8n endpoints\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Dashboard — Real-time summary cards, quick action buttons, and recent records overview",
        "ar": "Dashboard — Real-time summary cards, quick action buttons, and recent records overview"
      },
      {
        "en": "Record Management (CRUD) — Create, read, update, archive, restore, and soft-delete productivity entries",
        "ar": "Record Management (CRUD) — Create, read, update, archive, restore, and soft-delete productivity entries"
      },
      {
        "en": "RTL & Typography — Native Right-To-Left layout with the Almarai font family",
        "ar": "RTL & Typography — Native Right-To-Left layout with the Almarai font family"
      },
      {
        "en": "Search & Filter — Debounced search, category filter, date range, and status filter",
        "ar": "Search & Filter — Debounced search, category filter, date range, and status filter"
      },
      {
        "en": "Data Export — Export active records as JSON, CSV, or Markdown (Obsidian-compatible)",
        "ar": "Data Export — Export active records as JSON, CSV, or Markdown (Obsidian-compatible)"
      },
      {
        "en": "n8n Webhook Sync — Send structured JSON payloads to user-configured n8n endpoints",
        "ar": "n8n Webhook Sync — Send structured JSON payloads to user-configured n8n endpoints"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/galsat",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-qessati",
    "slug": "qessati",
    "title": {
      "en": "qessati",
      "ar": "qessati"
    },
    "description": {
      "en": "> Egyptian Arabic-first, fully offline, local-first Markdown daily journal. Sync to your own Obsidian vault through n8n.",
      "ar": "> Egyptian Arabic-first, fully offline, local-first Markdown daily journal. Sync to your own Obsidian vault through n8n."
    },
    "meta": {
      "en": "Expo • React Native • React • TypeScript",
      "ar": "Expo • React Native • React • TypeScript"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EQE%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# qessati\n\n> Egyptian Arabic-first, fully offline, local-first Markdown daily journal. Sync to your own Obsidian vault through n8n.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Almarai font files (Google Fonts, OFL) are bundled at `assets/fonts/`.\n- A development build is acceptable for native features; the brief does not require a release-grade `eas build`.\n- iOS + Android are both targets; web runs but is not the primary focus.\n- The user supplies their own n8n endpoint; the app does not provide one.\n- Light theme is the default; dark is offered as a user setting.\n- PRODUCT.md — durable product truth\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# qessati\n\n> Egyptian Arabic-first, fully offline, local-first Markdown daily journal. Sync to your own Obsidian vault through n8n.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Almarai font files (Google Fonts, OFL) are bundled at `assets/fonts/`.\n- A development build is acceptable for native features; the brief does not require a release-grade `eas build`.\n- iOS + Android are both targets; web runs but is not the primary focus.\n- The user supplies their own n8n endpoint; the app does not provide one.\n- Light theme is the default; dark is offered as a user setting.\n- PRODUCT.md — durable product truth\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Almarai font files (Google Fonts, OFL) are bundled at `assets/fonts/`.",
        "ar": "Almarai font files (Google Fonts, OFL) are bundled at `assets/fonts/`."
      },
      {
        "en": "A development build is acceptable for native features; the brief does not require a release-grade `eas build`.",
        "ar": "A development build is acceptable for native features; the brief does not require a release-grade `eas build`."
      },
      {
        "en": "iOS + Android are both targets; web runs but is not the primary focus.",
        "ar": "iOS + Android are both targets; web runs but is not the primary focus."
      },
      {
        "en": "The user supplies their own n8n endpoint; the app does not provide one.",
        "ar": "The user supplies their own n8n endpoint; the app does not provide one."
      },
      {
        "en": "Light theme is the default; dark is offered as a user setting.",
        "ar": "Light theme is the default; dark is offered as a user setting."
      },
      {
        "en": "PRODUCT.md — durable product truth",
        "ar": "PRODUCT.md — durable product truth"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/qessati",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-branch-scope",
    "slug": "branch-scope",
    "title": {
      "en": "branch-scope",
      "ar": "branch-scope"
    },
    "description": {
      "en": "Local-first, responsive web app: Feature Branch Change Impact Atlas",
      "ar": "Local-first, responsive web app: Feature Branch Change Impact Atlas"
    },
    "meta": {
      "en": "Vite • React • TypeScript • Vitest",
      "ar": "Vite • React • TypeScript • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EBS%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# branch-scope\n\nLocal-first, responsive web app: Feature Branch Change Impact Atlas\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Vitest\n\n## Features\n\n- which routes, components, tests, styles, flags, and\n- a dependency + route impact graph with a hierarchical text alternative;\n- an editable evidence-based risk rubric (every score shows its formula,\n- a scoped review checklist you can use to record decisions and export.\n- Source code, diffs, logs, and imported files stay in your browser.\n- There is no account, no cloud sync, no AI call, no telemetry.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# branch-scope\n\nLocal-first, responsive web app: Feature Branch Change Impact Atlas\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Vitest\n\n## Features\n\n- which routes, components, tests, styles, flags, and\n- a dependency + route impact graph with a hierarchical text alternative;\n- an editable evidence-based risk rubric (every score shows its formula,\n- a scoped review checklist you can use to record decisions and export.\n- Source code, diffs, logs, and imported files stay in your browser.\n- There is no account, no cloud sync, no AI call, no telemetry.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "which routes, components, tests, styles, flags, and",
        "ar": "which routes, components, tests, styles, flags, and"
      },
      {
        "en": "a dependency + route impact graph with a hierarchical text alternative;",
        "ar": "a dependency + route impact graph with a hierarchical text alternative;"
      },
      {
        "en": "an editable evidence-based risk rubric (every score shows its formula,",
        "ar": "an editable evidence-based risk rubric (every score shows its formula,"
      },
      {
        "en": "a scoped review checklist you can use to record decisions and export.",
        "ar": "a scoped review checklist you can use to record decisions and export."
      },
      {
        "en": "Source code, diffs, logs, and imported files stay in your browser.",
        "ar": "Source code, diffs, logs, and imported files stay in your browser."
      },
      {
        "en": "There is no account, no cloud sync, no AI call, no telemetry.",
        "ar": "There is no account, no cloud sync, no AI call, no telemetry."
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No GitHub remote is configured; updates remain local.",
        "ar": "No GitHub remote is configured; updates remain local."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "master",
      "sync": "local-only"
    },
    "source": {
      "workspace": "workspace/branch-scope",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-loop-engineer",
    "slug": "loop-engineer",
    "title": {
      "en": "loop-engineer",
      "ar": "loop-engineer"
    },
    "description": {
      "en": "A project managed in the Dev Stage workspace.",
      "ar": "A project managed in the Dev Stage workspace."
    },
    "meta": {
      "en": "IN-PROGRESS",
      "ar": "IN-PROGRESS"
    },
    "category": "Tools",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ELE%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# loop-engineer\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# loop-engineer\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Current feature inventory: Unknown / verify.",
        "ar": "Current feature inventory: Unknown / verify."
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No application manifest was detected in the workspace.",
        "ar": "No application manifest was detected in the workspace."
      },
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/loop-engineer",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-linkedin-project",
    "slug": "linkedin-project",
    "title": {
      "en": "linkedin-project",
      "ar": "linkedin-project"
    },
    "description": {
      "en": "Bootstrap repository for a repo-owned, semi-automated LinkedIn content workflow.",
      "ar": "Bootstrap repository for a repo-owned, semi-automated LinkedIn content workflow."
    },
    "meta": {
      "en": "Vite • TypeScript • Vitest",
      "ar": "Vite • TypeScript • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ELP%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# linkedin-project\n\nBootstrap repository for a repo-owned, semi-automated LinkedIn content workflow.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Web\n- Tech stack: Vite, TypeScript, Vitest\n\n## Features\n\n- TypeScript CLI bootstrap\n- config-driven source registry\n- file-based project storage\n- seed history and manual-note paths\n- live Phase 2 source collection for GitHub Atom, RSS, and manual notes\n- `pnpm collect` now fetches live source entries and writes normalized candidates plus raw source snapshots under `data/candidates/`.\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- Unknown / verify — no issue inventory was found in the current repository sources.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# linkedin-project\n\nBootstrap repository for a repo-owned, semi-automated LinkedIn content workflow.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Web\n- Tech stack: Vite, TypeScript, Vitest\n\n## Features\n\n- TypeScript CLI bootstrap\n- config-driven source registry\n- file-based project storage\n- seed history and manual-note paths\n- live Phase 2 source collection for GitHub Atom, RSS, and manual notes\n- `pnpm collect` now fetches live source entries and writes normalized candidates plus raw source snapshots under `data/candidates/`.\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- Unknown / verify — no issue inventory was found in the current repository sources.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "TypeScript",
      "Vitest",
      "prototype"
    ],
    "status": "prototype",
    "features": [
      {
        "en": "TypeScript CLI bootstrap",
        "ar": "TypeScript CLI bootstrap"
      },
      {
        "en": "config-driven source registry",
        "ar": "config-driven source registry"
      },
      {
        "en": "file-based project storage",
        "ar": "file-based project storage"
      },
      {
        "en": "seed history and manual-note paths",
        "ar": "seed history and manual-note paths"
      },
      {
        "en": "live Phase 2 source collection for GitHub Atom, RSS, and manual notes",
        "ar": "live Phase 2 source collection for GitHub Atom, RSS, and manual notes"
      },
      {
        "en": "`pnpm collect` now fetches live source entries and writes normalized candidates plus raw source snapshots under `data/candidates/`.",
        "ar": "`pnpm collect` now fetches live source entries and writes normalized candidates plus raw source snapshots under `data/candidates/`."
      }
    ],
    "progress": {
      "en": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage.",
      "ar": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage."
    },
    "issues": [
      {
        "en": "Unknown / verify — no issue inventory was found in the current repository sources.",
        "ar": "Unknown / verify — no issue inventory was found in the current repository sources."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/linkedin-project"
    },
    "source": {
      "workspace": "workspace/linkedin-project",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-focussessionflow",
    "slug": "focussessionflow",
    "title": {
      "en": "Focus Flow",
      "ar": "Focus Flow"
    },
    "description": {
      "en": "An offline-first focus session planner for students, freelancers, and knowledge workers. Plan focused work sessions, track your time, capture distractions, and review patterns—all locally, without requiring an account or internet connection. Coordinate focus sessions with others ",
      "ar": "An offline-first focus session planner for students, freelancers, and knowledge workers. Plan focused work sessions, track your time, capture distractions, and review patterns—all locally, without requiring an account or internet connection. Coordinate focus sessions with others "
    },
    "meta": {
      "en": "Next.js • Vite • React • TypeScript • Supabase • Tailwind • Vitest",
      "ar": "Next.js • Vite • React • TypeScript • Supabase • Tailwind • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://focus-session-flow.vercel.app/",
    "logoSrc": "https://focus-session-flow.vercel.app/brand/focus-flow-mark.png",
    "imageSrc": "/projects/focussessionflow/cover.jpg",
    "galleryImages": [
      "/projects/focussessionflow/experience.jpg",
      "/projects/focussessionflow/landing.jpg"
    ],
    "contentMDX": {
      "en": "# Focus Flow\n\nAn offline-first focus session planner for students, freelancers, and knowledge workers. Plan focused work sessions, track your time, capture distractions, and review patterns—all locally, without requiring an account or internet connection. Coordinate focus sessions with others \n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Supabase, Tailwind, Vitest\n\n## Features\n\n- Session Templates: Create reusable focus session templates (e.g., \"Deep Work 90min\", \"Quick Focus 25min\")\n- Active Timer: Start sessions with a countdown timer, pause/resume, and track elapsed time\n- Distraction Capture: Log distractions during sessions (phone, email, social media, thoughts, other)\n- Task Intention & Outcome: Record what you're focusing on and what you accomplished\n- Session History: View all completed sessions with details, outcomes, and distraction counts\n- Daily Review: Reflect on your focus day with session stats and personal notes\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- Unknown / verify — no issue inventory was found in the current repository sources.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# Focus Flow\n\nAn offline-first focus session planner for students, freelancers, and knowledge workers. Plan focused work sessions, track your time, capture distractions, and review patterns—all locally, without requiring an account or internet connection. Coordinate focus sessions with others \n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Supabase, Tailwind, Vitest\n\n## Features\n\n- Session Templates: Create reusable focus session templates (e.g., \"Deep Work 90min\", \"Quick Focus 25min\")\n- Active Timer: Start sessions with a countdown timer, pause/resume, and track elapsed time\n- Distraction Capture: Log distractions during sessions (phone, email, social media, thoughts, other)\n- Task Intention & Outcome: Record what you're focusing on and what you accomplished\n- Session History: View all completed sessions with details, outcomes, and distraction counts\n- Daily Review: Reflect on your focus day with session stats and personal notes\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- Unknown / verify — no issue inventory was found in the current repository sources.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": true,
    "tags": [
      "Next.js",
      "Vite",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind",
      "Vitest",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Session Templates: Create reusable focus session templates (e.g., \"Deep Work 90min\", \"Quick Focus 25min\")",
        "ar": "Session Templates: Create reusable focus session templates (e.g., \"Deep Work 90min\", \"Quick Focus 25min\")"
      },
      {
        "en": "Active Timer: Start sessions with a countdown timer, pause/resume, and track elapsed time",
        "ar": "Active Timer: Start sessions with a countdown timer, pause/resume, and track elapsed time"
      },
      {
        "en": "Distraction Capture: Log distractions during sessions (phone, email, social media, thoughts, other)",
        "ar": "Distraction Capture: Log distractions during sessions (phone, email, social media, thoughts, other)"
      },
      {
        "en": "Task Intention & Outcome: Record what you're focusing on and what you accomplished",
        "ar": "Task Intention & Outcome: Record what you're focusing on and what you accomplished"
      },
      {
        "en": "Session History: View all completed sessions with details, outcomes, and distraction counts",
        "ar": "Session History: View all completed sessions with details, outcomes, and distraction counts"
      },
      {
        "en": "Daily Review: Reflect on your focus day with session stats and personal notes",
        "ar": "Daily Review: Reflect on your focus day with session stats and personal notes"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "Unknown / verify — no issue inventory was found in the current repository sources.",
        "ar": "Unknown / verify — no issue inventory was found in the current repository sources."
      }
    ],
    "suggestions": [
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/focus-flow"
    },
    "source": {
      "workspace": "workspace/focussessionflow",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-sub-tracker",
    "slug": "sub-tracker",
    "title": {
      "en": "sub-tracker",
      "ar": "sub-tracker"
    },
    "description": {
      "en": "> See every renewal before it hits. Track subscriptions, trials, price > changes, and cancellation notes — locally on your device. Your data > stays yours.",
      "ar": "> See every renewal before it hits. Track subscriptions, trials, price > changes, and cancellation notes — locally on your device. Your data > stays yours."
    },
    "meta": {
      "en": "Expo • React Native • React",
      "ar": "Expo • React Native • React"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EST%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# sub-tracker\n\n> See every renewal before it hits. Track subscriptions, trials, price > changes, and cancellation notes — locally on your device. Your data > stays yours.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React\n\n## Features\n\n- Onboarding — first-run choice of sample data or empty start.\n- Dashboard — estimated monthly/quarterly/yearly totals, next\n- Subscriptions list — debounced search, status and category\n- Subscription detail — header, next renewal, price history,\n- Add/Edit form — zod-validated, duplicate-submit guard,\n- Renewal schedule — upcoming and overdue events grouped by month.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# sub-tracker\n\n> See every renewal before it hits. Track subscriptions, trials, price > changes, and cancellation notes — locally on your device. Your data > stays yours.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React\n\n## Features\n\n- Onboarding — first-run choice of sample data or empty start.\n- Dashboard — estimated monthly/quarterly/yearly totals, next\n- Subscriptions list — debounced search, status and category\n- Subscription detail — header, next renewal, price history,\n- Add/Edit form — zod-validated, duplicate-submit guard,\n- Renewal schedule — upcoming and overdue events grouped by month.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "React",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Onboarding — first-run choice of sample data or empty start.",
        "ar": "Onboarding — first-run choice of sample data or empty start."
      },
      {
        "en": "Dashboard — estimated monthly/quarterly/yearly totals, next",
        "ar": "Dashboard — estimated monthly/quarterly/yearly totals, next"
      },
      {
        "en": "Subscriptions list — debounced search, status and category",
        "ar": "Subscriptions list — debounced search, status and category"
      },
      {
        "en": "Subscription detail — header, next renewal, price history,",
        "ar": "Subscription detail — header, next renewal, price history,"
      },
      {
        "en": "Add/Edit form — zod-validated, duplicate-submit guard,",
        "ar": "Add/Edit form — zod-validated, duplicate-submit guard,"
      },
      {
        "en": "Renewal schedule — upcoming and overdue events grouped by month.",
        "ar": "Renewal schedule — upcoming and overdue events grouped by month."
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/sub-tracker",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-rihla",
    "slug": "rihla",
    "title": {
      "en": "rihla",
      "ar": "rihla"
    },
    "description": {
      "en": "A project managed in the Dev Stage workspace.",
      "ar": "A project managed in the Dev Stage workspace."
    },
    "meta": {
      "en": "IN-PROGRESS",
      "ar": "IN-PROGRESS"
    },
    "category": "Tools",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ERI%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# rihla\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# rihla\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Current feature inventory: Unknown / verify.",
        "ar": "Current feature inventory: Unknown / verify."
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No application manifest was detected in the workspace.",
        "ar": "No application manifest was detected in the workspace."
      },
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/rihla",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-hikayat",
    "slug": "hikayat",
    "title": {
      "en": "hikayat",
      "ar": "hikayat"
    },
    "description": {
      "en": "Hikayat is an Arabic-first (Egyptian Arabic) web application for recording, managing, searching, and archiving oral histories and folk tales. It replaces fragmented WhatsApp groups, spreadsheets, and paper notes used by Egypt's culture sector.",
      "ar": "Hikayat is an Arabic-first (Egyptian Arabic) web application for recording, managing, searching, and archiving oral histories and folk tales. It replaces fragmented WhatsApp groups, spreadsheets, and paper notes used by Egypt's culture sector."
    },
    "meta": {
      "en": "Next.js • Vite • React • TypeScript • Tailwind • Vitest",
      "ar": "Next.js • Vite • React • TypeScript • Tailwind • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EHI%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# hikayat\n\nHikayat is an Arabic-first (Egyptian Arabic) web application for recording, managing, searching, and archiving oral histories and folk tales. It replaces fragmented WhatsApp groups, spreadsheets, and paper notes used by Egypt's culture sector.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Docker (for PostgreSQL)\n- Database: PostgreSQL 16 via Docker (local development)\n- Auth: NextAuth.js v5 beta with JWT sessions\n- ORM: Prisma for type-safe database access\n- Validation: Zod schemas for all form inputs\n- UI: Tailwind CSS 3 + custom components\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# hikayat\n\nHikayat is an Arabic-first (Egyptian Arabic) web application for recording, managing, searching, and archiving oral histories and folk tales. It replaces fragmented WhatsApp groups, spreadsheets, and paper notes used by Egypt's culture sector.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Docker (for PostgreSQL)\n- Database: PostgreSQL 16 via Docker (local development)\n- Auth: NextAuth.js v5 beta with JWT sessions\n- ORM: Prisma for type-safe database access\n- Validation: Zod schemas for all form inputs\n- UI: Tailwind CSS 3 + custom components\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "prototype"
    ],
    "status": "prototype",
    "features": [
      {
        "en": "Docker (for PostgreSQL)",
        "ar": "Docker (for PostgreSQL)"
      },
      {
        "en": "Database: PostgreSQL 16 via Docker (local development)",
        "ar": "Database: PostgreSQL 16 via Docker (local development)"
      },
      {
        "en": "Auth: NextAuth.js v5 beta with JWT sessions",
        "ar": "Auth: NextAuth.js v5 beta with JWT sessions"
      },
      {
        "en": "ORM: Prisma for type-safe database access",
        "ar": "ORM: Prisma for type-safe database access"
      },
      {
        "en": "Validation: Zod schemas for all form inputs",
        "ar": "Validation: Zod schemas for all form inputs"
      },
      {
        "en": "UI: Tailwind CSS 3 + custom components",
        "ar": "UI: Tailwind CSS 3 + custom components"
      }
    ],
    "progress": {
      "en": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage.",
      "ar": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage."
    },
    "issues": [
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/hikayat",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-al-rawi",
    "slug": "al-rawi",
    "title": {
      "en": "Al-Rawi",
      "ar": "Al-Rawi"
    },
    "description": {
      "en": "Al-Rawi is a bilingual, local-first RSS reader. Feed subscriptions and preferences stay in the browser; fresh articles are fetched into memory and discarded when the session ends.",
      "ar": "Al-Rawi is a bilingual, local-first RSS reader. Feed subscriptions and preferences stay in the browser; fresh articles are fetched into memory and discarded when the session ends."
    },
    "meta": {
      "en": "Next.js • React • TypeScript • Tailwind",
      "ar": "Next.js • React • TypeScript • Tailwind"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://al-rawi-rss.vercel.app/",
    "logoSrc": "/al-rawi-logo.png",
    "imageSrc": "/projects/al-rawi/cover.jpg",
    "galleryImages": [
      "/projects/al-rawi/experience.jpg",
      "/projects/al-rawi/landing.jpg"
    ],
    "contentMDX": {
      "en": "# al-rawi\n\nAl-Rawi is a bilingual, local-first RSS reader. Feed subscriptions and preferences stay in the browser; fresh articles are fetched into memory and discarded when the session ends.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, React, TypeScript, Tailwind\n\n## Features\n\n- Next.js App Router, TypeScript, Tailwind CSS\n- LocalStorage for feed URLs, folders, and OPML-compatible subscriptions\n- Stateless Next.js routes for public RSS and article extraction\n- `rss-parser`, `iconv-lite`, `@mozilla/readability`, and `jsdom`\n- Only feed subscriptions are persisted locally.\n- Article lists and extracted article HTML are memory-only.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.\n\n## Media review — October 2026\n\nPublic feeds loaded, but the clean article pane remained loading during the media review. Screenshots show the working feed list.",
      "ar": "# al-rawi\n\nAl-Rawi is a bilingual, local-first RSS reader. Feed subscriptions and preferences stay in the browser; fresh articles are fetched into memory and discarded when the session ends.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, React, TypeScript, Tailwind\n\n## Features\n\n- Next.js App Router, TypeScript, Tailwind CSS\n- LocalStorage for feed URLs, folders, and OPML-compatible subscriptions\n- Stateless Next.js routes for public RSS and article extraction\n- `rss-parser`, `iconv-lite`, `@mozilla/readability`, and `jsdom`\n- Only feed subscriptions are persisted locally.\n- Article lists and extracted article HTML are memory-only.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.\n\n## Media review — October 2026\n\nتم تحميل الخلاصات العامة، لكن عرض المقال المبسط ظل قيد التحميل أثناء مراجعة الصور. تعرض اللقطات قائمة المقالات التي عملت."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Next.js App Router, TypeScript, Tailwind CSS",
        "ar": "Next.js App Router, TypeScript, Tailwind CSS"
      },
      {
        "en": "LocalStorage for feed URLs, folders, and OPML-compatible subscriptions",
        "ar": "LocalStorage for feed URLs, folders, and OPML-compatible subscriptions"
      },
      {
        "en": "Stateless Next.js routes for public RSS and article extraction",
        "ar": "Stateless Next.js routes for public RSS and article extraction"
      },
      {
        "en": "`rss-parser`, `iconv-lite`, `@mozilla/readability`, and `jsdom`",
        "ar": "`rss-parser`, `iconv-lite`, `@mozilla/readability`, and `jsdom`"
      },
      {
        "en": "Only feed subscriptions are persisted locally.",
        "ar": "Only feed subscriptions are persisted locally."
      },
      {
        "en": "Article lists and extracted article HTML are memory-only.",
        "ar": "Article lists and extracted article HTML are memory-only."
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "No GitHub remote is configured; updates remain local.",
        "ar": "No GitHub remote is configured; updates remain local."
      },
      {
        "en": "Public feeds loaded, but the clean article pane remained loading during the media review. Screenshots show the working feed list.",
        "ar": "تم تحميل الخلاصات العامة، لكن عرض المقال المبسط ظل قيد التحميل أثناء مراجعة الصور. تعرض اللقطات قائمة المقالات التي عملت."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "master",
      "sync": "local-only"
    },
    "source": {
      "workspace": "workspace/al-rawi",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-react2native",
    "slug": "react2native",
    "title": {
      "en": "React2Native",
      "ar": "React2Native"
    },
    "description": {
      "en": "A local-first React Native and Expo learning companion for developers moving from React web to native app development.",
      "ar": "رفيق تعليمي محلي أولًا لـ React Native وExpo، يساعد مطوري React للويب على الانتقال إلى تطوير التطبيقات الأصلية."
    },
    "meta": {
      "en": "Expo • React Native • TypeScript • Local-first",
      "ar": "Expo • React Native • TypeScript • محلي أولًا"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://react-2native.vercel.app/",
    "imageSrc": "/projects/react2native/cover.jpg",
    "galleryImages": [
      "/projects/react2native/experience.jpg",
      "/projects/react2native/landing.jpg"
    ],
    "contentMDX": {
      "en": "# React2Native\n\nA local-first React Native and Expo learning companion for developers moving from React web to native app development.\n\n## Features\n\n- Learn native platform mental models through a bundled curriculum.\n- Practice concepts and prepare for React Native interviews.\n- Keep bookmarks, notes, progress, and review history on the local device or browser.",
      "ar": "# React2Native\n\nرفيق تعليمي محلي أولًا لـ React Native وExpo، يساعد مطوري React للويب على الانتقال إلى تطوير التطبيقات الأصلية.\n\n## الميزات\n\n- تعلم النماذج الذهنية للمنصات الأصلية عبر منهج مدمج.\n- ممارسة المفاهيم والاستعداد لمقابلات React Native.\n- حفظ العلامات والملاحظات والتقدم وسجل المراجعة محليًا على الجهاز أو المتصفح."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "TypeScript",
      "Education",
      "Local-first",
      "showcase"
    ],
    "status": "showcase",
    "stage": "published",
    "features": [
      {
        "en": "Bundled curriculum focused on native platform mental models",
        "ar": "منهج مدمج يركز على النماذج الذهنية للمنصات الأصلية"
      },
      {
        "en": "Practice and interview preparation for React Native developers",
        "ar": "تدريب واستعداد لمقابلات مطوري React Native"
      },
      {
        "en": "Local bookmarks, notes, progress, and review history",
        "ar": "علامات وملاحظات وتقدم وسجل مراجعة محفوظ محليًا"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready after reviewing the project repository, live deployment, and supplied screenshots on 2026-08-15.",
      "ar": "تم تصنيف المشروع كجاهز للعرض بعد مراجعة المستودع والنشر المباشر ولقطات الشاشة المقدمة في 2026-08-15."
    },
    "issues": [
      {
        "en": "Unknown / verify — no issue inventory was provided with the showcase materials.",
        "ar": "لا توجد قائمة مشكلات مؤكدة ضمن مواد العرض المتاحة."
      }
    ],
    "suggestions": [
      {
        "en": "Continue expanding advanced native-platform lessons and practice scenarios.",
        "ar": "مواصلة توسيع دروس المنصات الأصلية المتقدمة وسيناريوهات التدريب."
      }
    ],
    "source": {
      "workspace": "workspace/react2native",
      "last_reviewed": "2026-08-15"
    }
  },
  {
    "id": "apexyard-khareeta",
    "slug": "khareeta",
    "title": {
      "en": "khareeta",
      "ar": "khareeta"
    },
    "description": {
      "en": "A project managed in the Dev Stage workspace.",
      "ar": "A project managed in the Dev Stage workspace."
    },
    "meta": {
      "en": "PROTOTYPE",
      "ar": "PROTOTYPE"
    },
    "category": "Tools",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EKH%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# khareeta\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# khareeta\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "prototype"
    ],
    "status": "prototype",
    "features": [
      {
        "en": "Current feature inventory: Unknown / verify.",
        "ar": "Current feature inventory: Unknown / verify."
      }
    ],
    "progress": {
      "en": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage.",
      "ar": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage."
    },
    "issues": [
      {
        "en": "No application manifest was detected in the workspace.",
        "ar": "No application manifest was detected in the workspace."
      },
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/khareeta",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-hesab",
    "slug": "hesab",
    "title": {
      "en": "hesab",
      "ar": "hesab"
    },
    "description": {
      "en": "> Egyptian Arabic-first mobile point-of-sale for kiosk vendors. Works fully > offline, syncs to n8n when online, renders every label in **Almarai** with > strict **RTL** layout, and stores everything in local SQLite.",
      "ar": "> Egyptian Arabic-first mobile point-of-sale for kiosk vendors. Works fully > offline, syncs to n8n when online, renders every label in **Almarai** with > strict **RTL** layout, and stores everything in local SQLite."
    },
    "meta": {
      "en": "Expo • React Native • React • TypeScript",
      "ar": "Expo • React Native • React • TypeScript"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EHE%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# hesab\n\n> Egyptian Arabic-first mobile point-of-sale for kiosk vendors. Works fully > offline, syncs to n8n when online, renders every label in **Almarai** with > strict **RTL** layout, and stores everything in local SQLite.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Runtime: Node.js 24 / npm 10\n- Framework: Expo SDK 54 (React Native 0.81, React 19)\n- Language: TypeScript 5.9\n- Router: `expo-router` 6 (file-based, tabs, dynamic routes)\n- UI: Tamagui 1.127, Almarai typeface\n- Storage: `expo-sqlite` 16 with portable SQL migrations\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# hesab\n\n> Egyptian Arabic-first mobile point-of-sale for kiosk vendors. Works fully > offline, syncs to n8n when online, renders every label in **Almarai** with > strict **RTL** layout, and stores everything in local SQLite.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Runtime: Node.js 24 / npm 10\n- Framework: Expo SDK 54 (React Native 0.81, React 19)\n- Language: TypeScript 5.9\n- Router: `expo-router` 6 (file-based, tabs, dynamic routes)\n- UI: Tamagui 1.127, Almarai typeface\n- Storage: `expo-sqlite` 16 with portable SQL migrations\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Runtime: Node.js 24 / npm 10",
        "ar": "Runtime: Node.js 24 / npm 10"
      },
      {
        "en": "Framework: Expo SDK 54 (React Native 0.81, React 19)",
        "ar": "Framework: Expo SDK 54 (React Native 0.81, React 19)"
      },
      {
        "en": "Language: TypeScript 5.9",
        "ar": "Language: TypeScript 5.9"
      },
      {
        "en": "Router: `expo-router` 6 (file-based, tabs, dynamic routes)",
        "ar": "Router: `expo-router` 6 (file-based, tabs, dynamic routes)"
      },
      {
        "en": "UI: Tamagui 1.127, Almarai typeface",
        "ar": "UI: Tamagui 1.127, Almarai typeface"
      },
      {
        "en": "Storage: `expo-sqlite` 16 with portable SQL migrations",
        "ar": "Storage: `expo-sqlite` 16 with portable SQL migrations"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/hesab",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-routine",
    "slug": "routine",
    "title": {
      "en": "routine",
      "ar": "routine"
    },
    "description": {
      "en": "```bash pnpm install pnpm dev ```",
      "ar": "```bash pnpm install pnpm dev ```"
    },
    "meta": {
      "en": "Vite • Expo • React Native • React • TypeScript • Vitest",
      "ar": "Vite • Expo • React Native • React • TypeScript • Vitest"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ERO%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# routine\n\n```bash pnpm install pnpm dev ```\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Vite, Expo, React Native, React, TypeScript, Vitest\n\n## Features\n\n- `src/storage/storage.ts` — AsyncStorage repository (habits, completions, meta). Only module touching storage.\n- `src/storage/seed.ts` — First-launch seed (Nadia's 5 habits with synthetic completion history).\n- `src/lib/dates.ts` — DateKey helpers (YYYY-MM-DD), date arithmetic\n- `src/lib/frequency.ts` — isDueOn (daily vs weekday-specific)\n- `src/lib/streaks.ts` — currentStreak, bestStreak (consecutive due days)\n- `src/lib/heatmap.ts` — dayStatus, buildHeatmap (4-week color grid)\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# routine\n\n```bash pnpm install pnpm dev ```\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Vite, Expo, React Native, React, TypeScript, Vitest\n\n## Features\n\n- `src/storage/storage.ts` — AsyncStorage repository (habits, completions, meta). Only module touching storage.\n- `src/storage/seed.ts` — First-launch seed (Nadia's 5 habits with synthetic completion history).\n- `src/lib/dates.ts` — DateKey helpers (YYYY-MM-DD), date arithmetic\n- `src/lib/frequency.ts` — isDueOn (daily vs weekday-specific)\n- `src/lib/streaks.ts` — currentStreak, bestStreak (consecutive due days)\n- `src/lib/heatmap.ts` — dayStatus, buildHeatmap (4-week color grid)\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "Expo",
      "React Native",
      "React",
      "TypeScript",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "`src/storage/storage.ts` — AsyncStorage repository (habits, completions, meta). Only module touching storage.",
        "ar": "`src/storage/storage.ts` — AsyncStorage repository (habits, completions, meta). Only module touching storage."
      },
      {
        "en": "`src/storage/seed.ts` — First-launch seed (Nadia's 5 habits with synthetic completion history).",
        "ar": "`src/storage/seed.ts` — First-launch seed (Nadia's 5 habits with synthetic completion history)."
      },
      {
        "en": "`src/lib/dates.ts` — DateKey helpers (YYYY-MM-DD), date arithmetic",
        "ar": "`src/lib/dates.ts` — DateKey helpers (YYYY-MM-DD), date arithmetic"
      },
      {
        "en": "`src/lib/frequency.ts` — isDueOn (daily vs weekday-specific)",
        "ar": "`src/lib/frequency.ts` — isDueOn (daily vs weekday-specific)"
      },
      {
        "en": "`src/lib/streaks.ts` — currentStreak, bestStreak (consecutive due days)",
        "ar": "`src/lib/streaks.ts` — currentStreak, bestStreak (consecutive due days)"
      },
      {
        "en": "`src/lib/heatmap.ts` — dayStatus, buildHeatmap (4-week color grid)",
        "ar": "`src/lib/heatmap.ts` — dayStatus, buildHeatmap (4-week color grid)"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/routine",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-dev2ops",
    "slug": "dev2ops",
    "title": {
      "en": "dev2ops",
      "ar": "dev2ops"
    },
    "description": {
      "en": "A browser-simulated DevOps learning game for practicing safe, evidence-led operational thinking through guided terminal quests.",
      "ar": "لعبة تعليمية لمحاكاة DevOps داخل المتصفح، تتيح ممارسة التفكير التشغيلي الآمن القائم على الأدلة عبر مهام طرفية موجهة."
    },
    "meta": {
      "en": "React • TypeScript • Vite • PWA",
      "ar": "React • TypeScript • Vite • PWA"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://dev2ops.vercel.app/",
    "logoSrc": "https://dev2ops.vercel.app/icons/favicon-32.png",
    "imageSrc": "/projects/dev2ops/cover.jpg",
    "galleryImages": [
      "/projects/dev2ops/experience.jpg",
      "/projects/dev2ops/landing.jpg"
    ],
    "contentMDX": {
      "en": "# dev2ops\n\nA browser-simulated DevOps learning game for practicing safe, evidence-led operational thinking through guided terminal quests.\n\n## Features\n\n- Practice 45+ operational quests across 15 connected learning tracks.\n- Diagnose, repair, and verify incidents in a deterministic browser-only shell with zero host execution.\n- Explore a searchable curriculum with prerequisites, difficulty levels, XP, and mastery progression.",
      "ar": "# dev2ops\n\nلعبة تعليمية لمحاكاة DevOps داخل المتصفح، تتيح ممارسة التفكير التشغيلي الآمن القائم على الأدلة عبر مهام طرفية موجهة.\n\n## الميزات\n\n- ممارسة أكثر من 45 مهمة تشغيلية ضمن 15 مسارًا تعليميًا مترابطًا.\n- تشخيص الأعطال وإصلاحها والتحقق منها داخل طرفية حتمية تعمل في المتصفح فقط دون تنفيذ على الجهاز المضيف.\n- استكشاف منهج قابل للبحث يوضح المتطلبات السابقة ومستويات الصعوبة ونقاط الخبرة والتقدم."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "PWA",
      "DevOps",
      "showcase"
    ],
    "status": "showcase",
    "stage": "published",
    "features": [
      {
        "en": "45+ operational quests across 15 connected learning tracks",
        "ar": "أكثر من 45 مهمة تشغيلية ضمن 15 مسارًا تعليميًا مترابطًا"
      },
      {
        "en": "Deterministic browser-only shell with zero host execution",
        "ar": "طرفية حتمية داخل المتصفح فقط دون تنفيذ على الجهاز المضيف"
      },
      {
        "en": "Searchable curriculum with prerequisites, difficulty, XP, and mastery progression",
        "ar": "منهج قابل للبحث مع المتطلبات السابقة والصعوبة ونقاط الخبرة والتقدم"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready after reviewing the live deployment and supplied project screenshots on 2026-08-12.",
      "ar": "تم تصنيف المشروع كجاهز للعرض بعد مراجعة النشر المباشر ولقطات المشروع المقدمة في 2026-08-12."
    },
    "issues": [
      {
        "en": "Unknown / verify — no issue inventory was provided with the showcase materials.",
        "ar": "لا توجد قائمة مشكلات مؤكدة ضمن مواد العرض المتاحة."
      }
    ],
    "suggestions": [
      {
        "en": "Continue expanding advanced and capstone operational scenarios.",
        "ar": "مواصلة توسيع السيناريوهات التشغيلية المتقدمة والختامية."
      }
    ],
    "source": {
      "workspace": "external/dev2ops",
      "last_reviewed": "2026-08-12"
    }
  },
  {
    "id": "apexyard-wajba",
    "slug": "wajba",
    "title": {
      "en": "wajba",
      "ar": "wajba"
    },
    "description": {
      "en": "Wajba is a local-first bilingual Arabic/English MENA meal-planning web app. It combines a static recipe catalog with weekly and monthly planning, Ramadan mode, dietary filters, pantry quantity matching, grocery aggregation, cooking timers, browser persistence, family URL sharing,",
      "ar": "Wajba is a local-first bilingual Arabic/English MENA meal-planning web app. It combines a static recipe catalog with weekly and monthly planning, Ramadan mode, dietary filters, pantry quantity matching, grocery aggregation, cooking timers, browser persistence, family URL sharing,"
    },
    "meta": {
      "en": "Vite • React • TypeScript • Tailwind",
      "ar": "Vite • React • TypeScript • Tailwind"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://wajjba.vercel.app/",
    "logoSrc": "https://wajjba.vercel.app/favicon-32x32.png?v=2",
    "imageSrc": "/projects/wajba/cover.jpg",
    "galleryImages": [
      "/projects/wajba/experience.jpg",
      "/projects/wajba/landing.jpg"
    ],
    "contentMDX": {
      "en": "# wajba\n\nWajba is a local-first bilingual Arabic/English MENA meal-planning web app. It combines a static recipe catalog with weekly and monthly planning, Ramadan mode, dietary filters, pantry quantity matching, grocery aggregation, cooking timers, browser persistence, family URL sharing,\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Tailwind\n\n## Features\n\n- Project Structure\n- Local Development\n- AI Agent Guide\n- Team Decisions\n- Deployment target, CI ownership, and the intended Gemini/Express runtime are `Unknown / verify`.\n- Recipe JSON files are checked-in data artifacts; the running app imports `src/data/recipes.ts` directly.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- Unknown / verify — no issue inventory was found in the current repository sources.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# wajba\n\nWajba is a local-first bilingual Arabic/English MENA meal-planning web app. It combines a static recipe catalog with weekly and monthly planning, Ramadan mode, dietary filters, pantry quantity matching, grocery aggregation, cooking timers, browser persistence, family URL sharing,\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Tailwind\n\n## Features\n\n- Project Structure\n- Local Development\n- AI Agent Guide\n- Team Decisions\n- Deployment target, CI ownership, and the intended Gemini/Express runtime are `Unknown / verify`.\n- Recipe JSON files are checked-in data artifacts; the running app imports `src/data/recipes.ts` directly.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- Unknown / verify — no issue inventory was found in the current repository sources.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Project Structure",
        "ar": "Project Structure"
      },
      {
        "en": "Local Development",
        "ar": "Local Development"
      },
      {
        "en": "AI Agent Guide",
        "ar": "AI Agent Guide"
      },
      {
        "en": "Team Decisions",
        "ar": "Team Decisions"
      },
      {
        "en": "Deployment target, CI ownership, and the intended Gemini/Express runtime are `Unknown / verify`.",
        "ar": "Deployment target, CI ownership, and the intended Gemini/Express runtime are `Unknown / verify`."
      },
      {
        "en": "Recipe JSON files are checked-in data artifacts; the running app imports `src/data/recipes.ts` directly.",
        "ar": "Recipe JSON files are checked-in data artifacts; the running app imports `src/data/recipes.ts` directly."
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "Unknown / verify — no issue inventory was found in the current repository sources.",
        "ar": "Unknown / verify — no issue inventory was found in the current repository sources."
      }
    ],
    "suggestions": [
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/wajba"
    },
    "source": {
      "workspace": "workspace/wajba",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-supabase-bootstrap",
    "slug": "supabase-bootstrap",
    "title": {
      "en": "supabase-bootstrap",
      "ar": "supabase-bootstrap"
    },
    "description": {
      "en": "A local setup assistant that inspects a web project and generates a minimal portable Supabase or local-PostgreSQL backend foundation",
      "ar": "A local setup assistant that inspects a web project and generates a minimal portable Supabase or local-PostgreSQL backend foundation"
    },
    "meta": {
      "en": "Vite • TypeScript • Vitest",
      "ar": "Vite • TypeScript • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ESB%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# supabase-bootstrap\n\nA local setup assistant that inspects a web project and generates a minimal portable Supabase or local-PostgreSQL backend foundation\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Vite, TypeScript, Vitest\n\n## Features\n\n- Plans a minimal backend: proposes tables, indexes, environment variables, and an auth provider based on what the target actually needs.\n- Generates portable PostgreSQL `CREATE TABLE` migrations, deterministic seed SQL (using fictional users), and a least-privilege auth rules document.\n- Verifies the plan: structural checks, env-var coverage, \"no real secrets embedded\" guardrail, migration/seed/auth completeness.\n- Exports the plan as a reviewable Markdown or JSON document, with secrets redacted.\n- `inspections` — one row per inspected project path (unique on path)\n- `plans` — the backend plan; tracks target, auth provider, status, version\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# supabase-bootstrap\n\nA local setup assistant that inspects a web project and generates a minimal portable Supabase or local-PostgreSQL backend foundation\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Vite, TypeScript, Vitest\n\n## Features\n\n- Plans a minimal backend: proposes tables, indexes, environment variables, and an auth provider based on what the target actually needs.\n- Generates portable PostgreSQL `CREATE TABLE` migrations, deterministic seed SQL (using fictional users), and a least-privilege auth rules document.\n- Verifies the plan: structural checks, env-var coverage, \"no real secrets embedded\" guardrail, migration/seed/auth completeness.\n- Exports the plan as a reviewable Markdown or JSON document, with secrets redacted.\n- `inspections` — one row per inspected project path (unique on path)\n- `plans` — the backend plan; tracks target, auth provider, status, version\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "TypeScript",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Plans a minimal backend: proposes tables, indexes, environment variables, and an auth provider based on what the target actually needs.",
        "ar": "Plans a minimal backend: proposes tables, indexes, environment variables, and an auth provider based on what the target actually needs."
      },
      {
        "en": "Generates portable PostgreSQL `CREATE TABLE` migrations, deterministic seed SQL (using fictional users), and a least-privilege auth rules document.",
        "ar": "Generates portable PostgreSQL `CREATE TABLE` migrations, deterministic seed SQL (using fictional users), and a least-privilege auth rules document."
      },
      {
        "en": "Verifies the plan: structural checks, env-var coverage, \"no real secrets embedded\" guardrail, migration/seed/auth completeness.",
        "ar": "Verifies the plan: structural checks, env-var coverage, \"no real secrets embedded\" guardrail, migration/seed/auth completeness."
      },
      {
        "en": "Exports the plan as a reviewable Markdown or JSON document, with secrets redacted.",
        "ar": "Exports the plan as a reviewable Markdown or JSON document, with secrets redacted."
      },
      {
        "en": "`inspections` — one row per inspected project path (unique on path)",
        "ar": "`inspections` — one row per inspected project path (unique on path)"
      },
      {
        "en": "`plans` — the backend plan; tracks target, auth provider, status, version",
        "ar": "`plans` — the backend plan; tracks target, auth provider, status, version"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/supabase-bootstrap",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-jadwal",
    "slug": "jadwal",
    "title": {
      "en": "jadwal",
      "ar": "جدول"
    },
    "description": {
      "en": "jadwal is a calm, local-first workspace for turning meaningful goals into daily action, decisions, and weekly reviews.",
      "ar": "جدول مساحة عمل هادئة ومحلية أولاً لتحويل الأهداف المهمة إلى خطوات يومية وقرارات ومراجعات أسبوعية."
    },
    "meta": {
      "en": "Vite • React • TypeScript • IndexedDB • PWA",
      "ar": "Vite • React • TypeScript • IndexedDB • PWA"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://jad-wal.vercel.app/",
    "logoSrc": "https://jad-wal.vercel.app/favicon.svg",
    "imageSrc": "/projects/jadwal/cover.jpg",
    "galleryImages": [
      "/projects/jadwal/experience.jpg",
      "/projects/jadwal/landing.jpg"
    ],
    "contentMDX": {
      "en": "# jadwal\n\njadwal — جدول — is a calm, local-first workspace for turning meaningful goals into daily action, decisions, and weekly reviews.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, IndexedDB, PWA\n\n## Features\n\n- Goal shaping: define an outcome, horizon, and usable definition of progress.\n- Milestones and daily plans: turn milestones into a focused next move.\n- Today workspace: capture tasks and keep a top-five focus list.\n- Review Center and Decision Journal: keep weekly evidence and decisions close to the work.\n- Search and archive: revisit stored work without a cloud workspace.\n- Local-first privacy: goals, tasks, decisions, and reviews stay in browser storage with no account required.\n- Backup, restore, export, and installable PWA support.\n\n## Progress\n\nClassified as showcase-ready after reviewing the rebranded live product and its updated visual assets on 2026-08-15.\n\n## Issues / troubles\n\n- The public deployment was reviewed through its live UI; repository-level test coverage and internal implementation details were not available in this portfolio workspace.\n\n## Suggested next steps\n\n- Add a fuller case study with measurable workflow outcomes and usage insights.",
      "ar": "# جدول\n\nجدول مساحة عمل هادئة ومحلية أولاً لتحويل الأهداف المهمة إلى خطوات يومية وقرارات ومراجعات أسبوعية.\n\n## ملخص المشروع\n\n- الحالة: معرض\n- الفئة: ويب\n- التقنيات: Vite، React، TypeScript، IndexedDB، PWA\n\n## الميزات\n\n- صياغة الهدف: تحديد النتيجة والأفق الزمني وتعريف عملي للتقدم.\n- المراحل والخطط اليومية: تحويل المراحل إلى خطوة تالية مركزة.\n- مساحة اليوم: التقاط المهام والحفاظ على قائمة تركيز من خمسة عناصر.\n- مركز المراجعة ومذكرات القرارات: إبقاء الأدلة الأسبوعية والقرارات قريبة من العمل.\n- البحث والأرشيف: العودة إلى الأعمال المحفوظة بدون مساحة سحابية.\n- الخصوصية المحلية أولاً: تبقى الأهداف والمهام والقرارات والمراجعات في تخزين المتصفح بدون الحاجة إلى حساب.\n- النسخ الاحتياطي والاستعادة والتصدير ودعم التثبيت كتطبيق PWA.\n\n## التقدم\n\nتم تصنيف المشروع كجاهز للعرض بعد مراجعة المنتج المباشر بهويته الجديدة وأصوله المرئية المحدثة في 2026-08-15.\n\n## المشكلات والصعوبات\n\n- تمت مراجعة النشر العام من خلال واجهته المباشرة؛ ولم تتوفر تفاصيل اختبارات المستودع والتنفيذ الداخلي داخل مساحة معرض المشاريع.\n\n## الخطوات المقترحة\n\n- إضافة دراسة حالة أوسع تتضمن نتائج قابلة للقياس ورؤى حول الاستخدام."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "IndexedDB",
      "PWA",
      "showcase"
    ],
    "status": "showcase",
    "stage": "published",
    "features": [
      {
        "en": "Goal shaping: define an outcome, horizon, and usable definition of progress.",
        "ar": "صياغة الهدف: تحديد النتيجة والأفق الزمني وتعريف عملي للتقدم."
      },
      {
        "en": "Milestones and daily plans: turn milestones into a focused next move.",
        "ar": "المراحل والخطط اليومية: تحويل المراحل إلى خطوة تالية مركزة."
      },
      {
        "en": "Today workspace: capture tasks and keep a top-five focus list.",
        "ar": "مساحة اليوم: التقاط المهام والحفاظ على قائمة تركيز من خمسة عناصر."
      },
      {
        "en": "Review Center and Decision Journal: keep weekly evidence and decisions close to the work.",
        "ar": "مركز المراجعة ومذكرات القرارات: إبقاء الأدلة الأسبوعية والقرارات قريبة من العمل."
      },
      {
        "en": "Search and archive: revisit stored work without a cloud workspace.",
        "ar": "البحث والأرشيف: العودة إلى الأعمال المحفوظة بدون مساحة سحابية."
      },
      {
        "en": "Local-first privacy: goals, tasks, decisions, and reviews stay in browser storage with no account required.",
        "ar": "الخصوصية المحلية أولاً: تبقى الأهداف والمهام والقرارات والمراجعات في تخزين المتصفح بدون الحاجة إلى حساب."
      },
      {
        "en": "Backup, restore, export, and installable PWA support.",
        "ar": "النسخ الاحتياطي والاستعادة والتصدير ودعم التثبيت كتطبيق PWA."
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready after reviewing the rebranded live product and its updated visual assets on 2026-08-15.",
      "ar": "تم تصنيف المشروع كجاهز للعرض بعد مراجعة المنتج المباشر بهويته الجديدة وأصوله المرئية المحدثة في 2026-08-15."
    },
    "issues": [
      {
        "en": "The public deployment was reviewed through its live UI; repository-level test coverage and internal implementation details were not available in this portfolio workspace.",
        "ar": "تمت مراجعة النشر العام من خلال واجهته المباشرة؛ ولم تتوفر تفاصيل اختبارات المستودع والتنفيذ الداخلي داخل مساحة معرض المشاريع."
      }
    ],
    "suggestions": [
      {
        "en": "Add a fuller case study with measurable workflow outcomes and usage insights.",
        "ar": "إضافة دراسة حالة أوسع تتضمن نتائج قابلة للقياس ورؤى حول الاستخدام."
      }
    ]
  },
  {
    "id": "apexyard-tabeeb-flow",
    "slug": "tabeeb-flow",
    "title": {
      "en": "Tabeeb Flow",
      "ar": "Tabeeb Flow"
    },
    "description": {
      "en": "A connected clinic workspace for doctors and reception teams, with an interactive demo for exploring fictional clinic workflows.",
      "ar": "مساحة عمل متصلة للعيادات تجمع الأطباء وفرق الاستقبال، مع عرض تفاعلي لاستكشاف سير العمل ببيانات عيادة تجريبية."
    },
    "meta": {
      "en": "React • TypeScript • Vite • Supabase",
      "ar": "React • TypeScript • Vite • Supabase"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://tabeeb-flow.vercel.app/",
    "logoSrc": "https://tabeeb-flow.vercel.app/favicon.png",
    "imageSrc": "/projects/tabeeb-flow/cover.jpg",
    "galleryImages": [
      "/projects/tabeeb-flow/experience.jpg",
      "/projects/tabeeb-flow/landing.jpg"
    ],
    "contentMDX": {
      "en": "# Tabeeb Flow\n\nA connected clinic workspace for doctors and reception teams, with an interactive demo for exploring fictional clinic workflows.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: React, TypeScript, Vite, Supabase\n\n## Features\n\n- Connected clinic workspace for doctors and reception teams.\n- Interactive product tour with fictional clinic data and no account required.\n- Dedicated doctor portal and reception portal demo workflows.\n\n## Progress\n\nClassified as showcase-ready after reviewing the live deployment and supplied project screenshots on 2026-08-02.\n\n## Issues / troubles\n\n- Unknown / verify — no issue inventory was provided with the showcase materials.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# Tabeeb Flow\n\nمساحة عمل متصلة للعيادات تجمع الأطباء وفرق الاستقبال، مع عرض تفاعلي لاستكشاف سير العمل ببيانات عيادة تجريبية.\n\n## ملخص المشروع\n\n- الحالة: معرض\n- الفئة: ويب\n- التقنيات: React، TypeScript، Vite، Supabase\n\n## الميزات\n\n- مساحة عمل متصلة للعيادات والأطباء وفرق الاستقبال.\n- جولة تفاعلية ببيانات عيادة تجريبية دون الحاجة إلى حساب.\n- مسارات تجريبية مخصصة للطبيب والاستقبال.\n\n## التقدم\n\nتم تصنيف المشروع كجاهز للعرض بعد مراجعة النشر المباشر ولقطات المشروع المقدمة في 2026-08-02.\n\n## المشكلات والصعوبات\n\n- لا توجد قائمة مشكلات مؤكدة ضمن مواد العرض المتاحة.\n\n## الخطوات المقترحة\n\n- إضافة لقطات شاشة مراجعة ودراسة حالة أوسع عند توفر الأدلة البصرية."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "showcase"
    ],
    "status": "showcase",
    "stage": "published",
    "features": [
      {
        "en": "Connected clinic workspace for doctors and reception teams",
        "ar": "مساحة عمل متصلة للعيادات والأطباء وفرق الاستقبال"
      },
      {
        "en": "Interactive product tour with fictional clinic data and no account required",
        "ar": "جولة تفاعلية ببيانات عيادة تجريبية دون الحاجة إلى حساب"
      },
      {
        "en": "Dedicated doctor portal and reception portal demo workflows",
        "ar": "مسارات تجريبية مخصصة للطبيب والاستقبال"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready after reviewing the live deployment and supplied project screenshots on 2026-08-02.",
      "ar": "تم تصنيف المشروع كجاهز للعرض بعد مراجعة النشر المباشر ولقطات المشروع المقدمة في 2026-08-02."
    },
    "issues": [
      {
        "en": "Unknown / verify — no issue inventory was provided with the showcase materials.",
        "ar": "لا توجد قائمة مشكلات مؤكدة ضمن مواد العرض المتاحة."
      }
    ],
    "suggestions": [
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "إضافة لقطات شاشة مراجعة ودراسة حالة أوسع عند توفر الأدلة البصرية."
      }
    ],
    "source": {
      "workspace": "external/tabeeb-flow",
      "last_reviewed": "2026-08-02"
    }
  },
  {
    "id": "apexyard-squad-tactics",
    "slug": "squad-tactics",
    "title": {
      "en": "squad-tactics",
      "ar": "squad-tactics"
    },
    "description": {
      "en": "SquadTactics — Turn-Based 3D Team Tactics Battle on a Hex Grid",
      "ar": "SquadTactics — Turn-Based 3D Team Tactics Battle on a Hex Grid"
    },
    "meta": {
      "en": "Vite • TypeScript • Vitest",
      "ar": "Vite • TypeScript • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EST%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# squad-tactics\n\nSquadTactics — Turn-Based 3D Team Tactics Battle on a Hex Grid\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Vite, TypeScript, Vitest\n\n## Features\n\n- Stack: TypeScript 5, Vite 5, Three.js, GSAP 3, PeerJS 1.5, Vitest, Playwright\n- No React, no framework, no UI library — raw TypeScript\n- No accounts, no central server, no auth — WebRTC peer-to-peer with PeerJS public STUN\n- `dist/index.html` opens without a server (file:// — single-player / hot-seat / inspection only; multiplayer needs internet for the PeerJS broker)\n- Tap a hex to move / an enemy to attack\n- Virtual controls in the bottom HUD\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# squad-tactics\n\nSquadTactics — Turn-Based 3D Team Tactics Battle on a Hex Grid\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Vite, TypeScript, Vitest\n\n## Features\n\n- Stack: TypeScript 5, Vite 5, Three.js, GSAP 3, PeerJS 1.5, Vitest, Playwright\n- No React, no framework, no UI library — raw TypeScript\n- No accounts, no central server, no auth — WebRTC peer-to-peer with PeerJS public STUN\n- `dist/index.html` opens without a server (file:// — single-player / hot-seat / inspection only; multiplayer needs internet for the PeerJS broker)\n- Tap a hex to move / an enemy to attack\n- Virtual controls in the bottom HUD\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "TypeScript",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Stack: TypeScript 5, Vite 5, Three.js, GSAP 3, PeerJS 1.5, Vitest, Playwright",
        "ar": "Stack: TypeScript 5, Vite 5, Three.js, GSAP 3, PeerJS 1.5, Vitest, Playwright"
      },
      {
        "en": "No React, no framework, no UI library — raw TypeScript",
        "ar": "No React, no framework, no UI library — raw TypeScript"
      },
      {
        "en": "No accounts, no central server, no auth — WebRTC peer-to-peer with PeerJS public STUN",
        "ar": "No accounts, no central server, no auth — WebRTC peer-to-peer with PeerJS public STUN"
      },
      {
        "en": "`dist/index.html` opens without a server (file:// — single-player / hot-seat / inspection only; multiplayer needs internet for the PeerJS broker)",
        "ar": "`dist/index.html` opens without a server (file:// — single-player / hot-seat / inspection only; multiplayer needs internet for the PeerJS broker)"
      },
      {
        "en": "Tap a hex to move / an enemy to attack",
        "ar": "Tap a hex to move / an enemy to attack"
      },
      {
        "en": "Virtual controls in the bottom HUD",
        "ar": "Virtual controls in the bottom HUD"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/squad-tactics",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-mzawedi",
    "slug": "mzawedi",
    "title": {
      "en": "mzawedi",
      "ar": "mzawedi"
    },
    "description": {
      "en": "Arabic Freelancer Service Rate Card Builder (Starter tier).",
      "ar": "Arabic Freelancer Service Rate Card Builder (Starter tier)."
    },
    "meta": {
      "en": "Next.js • Vite • React • TypeScript • Tailwind • Vitest",
      "ar": "Next.js • Vite • React • TypeScript • Tailwind • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EMZ%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# mzawedi\n\nArabic Freelancer Service Rate Card Builder (Starter tier).\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Next.js 14 (App Router)\n- @react-pdf/renderer (A4 RTL PDF export)\n- @dnd-kit (drag-to-reorder)\n- localStorage (persistence, no backend)\n- Vitest + Testing Library (TDD on pure logic)\n- Service form — up to 12 services, drag to reorder.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# mzawedi\n\nArabic Freelancer Service Rate Card Builder (Starter tier).\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Next.js 14 (App Router)\n- @react-pdf/renderer (A4 RTL PDF export)\n- @dnd-kit (drag-to-reorder)\n- localStorage (persistence, no backend)\n- Vitest + Testing Library (TDD on pure logic)\n- Service form — up to 12 services, drag to reorder.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Next.js 14 (App Router)",
        "ar": "Next.js 14 (App Router)"
      },
      {
        "en": "@react-pdf/renderer (A4 RTL PDF export)",
        "ar": "@react-pdf/renderer (A4 RTL PDF export)"
      },
      {
        "en": "@dnd-kit (drag-to-reorder)",
        "ar": "@dnd-kit (drag-to-reorder)"
      },
      {
        "en": "localStorage (persistence, no backend)",
        "ar": "localStorage (persistence, no backend)"
      },
      {
        "en": "Vitest + Testing Library (TDD on pure logic)",
        "ar": "Vitest + Testing Library (TDD on pure logic)"
      },
      {
        "en": "Service form — up to 12 services, drag to reorder.",
        "ar": "Service form — up to 12 services, drag to reorder."
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "No GitHub remote is configured; updates remain local.",
        "ar": "No GitHub remote is configured; updates remain local."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "master",
      "sync": "local-only"
    },
    "source": {
      "workspace": "workspace/mzawedi",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-the-agency-mobile-game",
    "slug": "the-agency-mobile-game",
    "title": {
      "en": "the-agency-mobile-game",
      "ar": "the-agency-mobile-game"
    },
    "description": {
      "en": "The Agency: Command Ops is a mobile-first strategy game built with React, TypeScript, Vite, Zustand, and Capacitor for Android packaging.",
      "ar": "The Agency: Command Ops is a mobile-first strategy game built with React, TypeScript, Vite, Zustand, and Capacitor for Android packaging."
    },
    "meta": {
      "en": "Vite • React • TypeScript • Capacitor",
      "ar": "Vite • React • TypeScript • Capacitor"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ETAM%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# the-agency-mobile-game\n\nThe Agency: Command Ops is a mobile-first strategy game built with React, TypeScript, Vite, Zustand, and Capacitor for Android packaging.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Capacitor\n\n## Features\n\n- 19 named specialist agents with unique roles, voice lines, skills, and department assignments\n- 6 departments that shape mission flavor, load, morale, and progression\n- Story-driven operations with multi-step decision points\n- Trust, synergy, rivalry, rank, XP, credits, and upgrade systems\n- Mobile-first single-screen UI designed to feel like a command console\n- Android packaging via Capacitor so the web app can be built into an installable APK\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# the-agency-mobile-game\n\nThe Agency: Command Ops is a mobile-first strategy game built with React, TypeScript, Vite, Zustand, and Capacitor for Android packaging.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Capacitor\n\n## Features\n\n- 19 named specialist agents with unique roles, voice lines, skills, and department assignments\n- 6 departments that shape mission flavor, load, morale, and progression\n- Story-driven operations with multi-step decision points\n- Trust, synergy, rivalry, rank, XP, credits, and upgrade systems\n- Mobile-first single-screen UI designed to feel like a command console\n- Android packaging via Capacitor so the web app can be built into an installable APK\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "Capacitor",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "19 named specialist agents with unique roles, voice lines, skills, and department assignments",
        "ar": "19 named specialist agents with unique roles, voice lines, skills, and department assignments"
      },
      {
        "en": "6 departments that shape mission flavor, load, morale, and progression",
        "ar": "6 departments that shape mission flavor, load, morale, and progression"
      },
      {
        "en": "Story-driven operations with multi-step decision points",
        "ar": "Story-driven operations with multi-step decision points"
      },
      {
        "en": "Trust, synergy, rivalry, rank, XP, credits, and upgrade systems",
        "ar": "Trust, synergy, rivalry, rank, XP, credits, and upgrade systems"
      },
      {
        "en": "Mobile-first single-screen UI designed to feel like a command console",
        "ar": "Mobile-first single-screen UI designed to feel like a command console"
      },
      {
        "en": "Android packaging via Capacitor so the web app can be built into an installable APK",
        "ar": "Android packaging via Capacitor so the web app can be built into an installable APK"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/the-agency-mobile-game"
    },
    "source": {
      "workspace": "workspace/the-agency-mobile-game",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-dep-audit",
    "slug": "dep-audit",
    "title": {
      "en": "dependency-audit",
      "ar": "dependency-audit"
    },
    "description": {
      "en": "Dependency risk and license compliance dashboard for Node.js projects.",
      "ar": "Dependency risk and license compliance dashboard for Node.js projects."
    },
    "meta": {
      "en": "Vite • TypeScript • Vitest",
      "ar": "Vite • TypeScript • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EDA%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# dependency-audit\n\nDependency risk and license compliance dashboard for Node.js projects.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, TypeScript, Vitest\n\n## Features\n\n- Monorepo support — auto-detects npm/pnpm/yarn/bun/Nx/Lerna workspaces, scans\n- Vulnerabilities — `npm audit` results, deduplicated, normalized, with\n- Outdated — `npm outdated` results with current / wanted / latest\n- License compliance — walks `nodemodules`, compares every license\n- Risk score — per-package and project-wide, with documented\n- Dependency tree — hierarchical indented tree (VS Code explorer style).\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# dependency-audit\n\nDependency risk and license compliance dashboard for Node.js projects.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, TypeScript, Vitest\n\n## Features\n\n- Monorepo support — auto-detects npm/pnpm/yarn/bun/Nx/Lerna workspaces, scans\n- Vulnerabilities — `npm audit` results, deduplicated, normalized, with\n- Outdated — `npm outdated` results with current / wanted / latest\n- License compliance — walks `nodemodules`, compares every license\n- Risk score — per-package and project-wide, with documented\n- Dependency tree — hierarchical indented tree (VS Code explorer style).\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "TypeScript",
      "Vitest",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Monorepo support — auto-detects npm/pnpm/yarn/bun/Nx/Lerna workspaces, scans",
        "ar": "Monorepo support — auto-detects npm/pnpm/yarn/bun/Nx/Lerna workspaces, scans"
      },
      {
        "en": "Vulnerabilities — `npm audit` results, deduplicated, normalized, with",
        "ar": "Vulnerabilities — `npm audit` results, deduplicated, normalized, with"
      },
      {
        "en": "Outdated — `npm outdated` results with current / wanted / latest",
        "ar": "Outdated — `npm outdated` results with current / wanted / latest"
      },
      {
        "en": "License compliance — walks `nodemodules`, compares every license",
        "ar": "License compliance — walks `nodemodules`, compares every license"
      },
      {
        "en": "Risk score — per-package and project-wide, with documented",
        "ar": "Risk score — per-package and project-wide, with documented"
      },
      {
        "en": "Dependency tree — hierarchical indented tree (VS Code explorer style).",
        "ar": "Dependency tree — hierarchical indented tree (VS Code explorer style)."
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/dependency-audit",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-token-tracker-dashboard",
    "slug": "token-tracker-dashboard",
    "title": {
      "en": "token-tracker-dashboard",
      "ar": "token-tracker-dashboard"
    },
    "description": {
      "en": "<div align=\"center\"> <img src=\"./public/logo.png\" alt=\"Token Tracker Dashboard logo\" width=\"96\" /> <h1>Token Tracker Dashboard</h1> <p><strong>The web command center for monitoring AI token usage, provider health, session quality, and team activity.</strong></p> <p> <img alt=\"Rea",
      "ar": "<div align=\"center\"> <img src=\"./public/logo.png\" alt=\"Token Tracker Dashboard logo\" width=\"96\" /> <h1>Token Tracker Dashboard</h1> <p><strong>The web command center for monitoring AI token usage, provider health, session quality, and team activity.</strong></p> <p> <img alt=\"Rea"
    },
    "meta": {
      "en": "Next.js • Vite • React • TypeScript • Tailwind • Vitest",
      "ar": "Next.js • Vite • React • TypeScript • Tailwind • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ETTD%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# token-tracker-dashboard\n\n<div align=\"center\"> <img src=\"./public/logo.png\" alt=\"Token Tracker Dashboard logo\" width=\"96\" /> <h1>Token Tracker Dashboard</h1> <p><strong>The web command center for monitoring AI token usage, provider health, session quality, and team activity.</strong></p> <p> <img alt=\"Rea\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Spend, token, latency, and throughput visibility\n- Provider integrity and health-state monitoring\n- Session investigation and triage workflows\n- Team leaderboard and usage patterns\n- Analytics views for trends, composition, and operational cadence\n- Settings and admin surfaces prepared for deeper backend wiring\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# token-tracker-dashboard\n\n<div align=\"center\"> <img src=\"./public/logo.png\" alt=\"Token Tracker Dashboard logo\" width=\"96\" /> <h1>Token Tracker Dashboard</h1> <p><strong>The web command center for monitoring AI token usage, provider health, session quality, and team activity.</strong></p> <p> <img alt=\"Rea\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Spend, token, latency, and throughput visibility\n- Provider integrity and health-state monitoring\n- Session investigation and triage workflows\n- Team leaderboard and usage patterns\n- Analytics views for trends, composition, and operational cadence\n- Settings and admin surfaces prepared for deeper backend wiring\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Spend, token, latency, and throughput visibility",
        "ar": "Spend, token, latency, and throughput visibility"
      },
      {
        "en": "Provider integrity and health-state monitoring",
        "ar": "Provider integrity and health-state monitoring"
      },
      {
        "en": "Session investigation and triage workflows",
        "ar": "Session investigation and triage workflows"
      },
      {
        "en": "Team leaderboard and usage patterns",
        "ar": "Team leaderboard and usage patterns"
      },
      {
        "en": "Analytics views for trends, composition, and operational cadence",
        "ar": "Analytics views for trends, composition, and operational cadence"
      },
      {
        "en": "Settings and admin surfaces prepared for deeper backend wiring",
        "ar": "Settings and admin surfaces prepared for deeper backend wiring"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/token-tracker-dashboard"
    },
    "source": {
      "workspace": "workspace/token-tracker-dashboard",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-rihlaty",
    "slug": "rihlaty",
    "title": {
      "en": "Rihlaty",
      "ar": "رحلتي"
    },
    "description": {
      "en": "A local Egypt trip planner for organizing destinations, itineraries, fuel, expenses, bookings, and packing lists.",
      "ar": "مخطط رحلات محلي داخل مصر لتنظيم الوجهات والبرامج والوقود والمصروفات والحجوزات وقوائم التجهيزات."
    },
    "meta": {
      "en": "React • Vite • TypeScript",
      "ar": "React • Vite • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://rihlaty.vercel.app/",
    "logoSrc": "https://rihlaty.vercel.app/icons/icon-32.png",
    "imageSrc": "/projects/rihlaty/cover.jpg",
    "galleryImages": [
      "/projects/rihlaty/experience.jpg",
      "/projects/rihlaty/landing.jpg"
    ],
    "contentMDX": {
      "en": "# Rihlaty\n\nA local Egypt trip planner for organizing destinations, itineraries, fuel, expenses, bookings, and packing lists.\n\n## Features\n\n- Organize Egypt destinations and day-by-day itineraries.\n- Estimate fuel costs and track trip expenses.\n- Keep bookings and packing checklists in one place.",
      "ar": "# رحلتي\n\nمخطط رحلات محلي داخل مصر لتنظيم الوجهات والبرامج والوقود والمصروفات والحجوزات وقوائم التجهيزات.\n\n## الميزات\n\n- تنظيم الوجهات المصرية والبرامج اليومية.\n- تقدير تكلفة الوقود وتتبع مصروفات الرحلة.\n- جمع الحجوزات وقوائم التجهيزات في مكان واحد."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "React",
      "Vite",
      "TypeScript",
      "showcase"
    ],
    "status": "showcase",
    "stage": "published",
    "features": [
      {
        "en": "Organize Egypt destinations and day-by-day itineraries",
        "ar": "تنظيم الوجهات المصرية والبرامج اليومية"
      },
      {
        "en": "Estimate fuel costs and track trip expenses",
        "ar": "تقدير تكلفة الوقود وتتبع مصروفات الرحلة"
      },
      {
        "en": "Keep bookings and packing checklists in one place",
        "ar": "جمع الحجوزات وقوائم التجهيزات في مكان واحد"
      }
    ],
    "source": {
      "workspace": "external/rihlaty",
      "last_reviewed": "2026-08-08"
    }
  },
  {
    "id": "apexyard-study-circle",
    "slug": "study-circle",
    "title": {
      "en": "study-circle",
      "ar": "study-circle"
    },
    "description": {
      "en": "This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).",
      "ar": "This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app)."
    },
    "meta": {
      "en": "Expo • React Native • React • TypeScript",
      "ar": "Expo • React Native • React • TypeScript"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ESC%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# study-circle\n\nThis is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).\n\n## Project snapshot\n\n- Status: prototype\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Install dependencies\n- Start the app\n- development build\n- Android emulator\n- iOS simulator\n- Expo Go, a limited sandbox for trying out app development with Expo\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# study-circle\n\nThis is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).\n\n## Project snapshot\n\n- Status: prototype\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Install dependencies\n- Start the app\n- development build\n- Android emulator\n- iOS simulator\n- Expo Go, a limited sandbox for trying out app development with Expo\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "React",
      "TypeScript",
      "prototype"
    ],
    "status": "prototype",
    "features": [
      {
        "en": "Install dependencies",
        "ar": "Install dependencies"
      },
      {
        "en": "Start the app",
        "ar": "Start the app"
      },
      {
        "en": "development build",
        "ar": "development build"
      },
      {
        "en": "Android emulator",
        "ar": "Android emulator"
      },
      {
        "en": "iOS simulator",
        "ar": "iOS simulator"
      },
      {
        "en": "Expo Go, a limited sandbox for trying out app development with Expo",
        "ar": "Expo Go, a limited sandbox for trying out app development with Expo"
      }
    ],
    "progress": {
      "en": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage.",
      "ar": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage."
    },
    "issues": [
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "No GitHub remote is configured; updates remain local.",
        "ar": "No GitHub remote is configured; updates remain local."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "master",
      "sync": "local-only"
    },
    "source": {
      "workspace": "workspace/study-circle",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-solo-consultants",
    "slug": "solo-consultants",
    "title": {
      "en": "solo-consultants",
      "ar": "solo-consultants"
    },
    "description": {
      "en": "MicroCrmForge is a local-first CRM for solo consultants. MVP v1 is a device-only Expo app with one local workspace, durable task-first work, core CRM records, planning, local export/import, and privacy/reset controls.",
      "ar": "MicroCrmForge is a local-first CRM for solo consultants. MVP v1 is a device-only Expo app with one local workspace, durable task-first work, core CRM records, planning, local export/import, and privacy/reset controls."
    },
    "meta": {
      "en": "Expo • React Native • React • TypeScript",
      "ar": "Expo • React Native • React • TypeScript"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ESC%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# solo-consultants\n\nMicroCrmForge is a local-first CRM for solo consultants. MVP v1 is a device-only Expo app with one local workspace, durable task-first work, core CRM records, planning, local export/import, and privacy/reset controls.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Expo React Native + TypeScript + Expo Router + React Native Web.\n- Responsive five-area navigation: Home, Tasks, Records, Planning, Settings.\n- Bento-derived semantic tokens and shared UI primitives.\n- AsyncStorage local repository seam.\n- Task create, link, edit, complete, reopen, search, filter, sort, and basic recovery states.\n- Core contacts, companies, opportunities, projects, interactions, task history, planning, archive/restore, local export/import, and privacy/reset flows.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# solo-consultants\n\nMicroCrmForge is a local-first CRM for solo consultants. MVP v1 is a device-only Expo app with one local workspace, durable task-first work, core CRM records, planning, local export/import, and privacy/reset controls.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Expo React Native + TypeScript + Expo Router + React Native Web.\n- Responsive five-area navigation: Home, Tasks, Records, Planning, Settings.\n- Bento-derived semantic tokens and shared UI primitives.\n- AsyncStorage local repository seam.\n- Task create, link, edit, complete, reopen, search, filter, sort, and basic recovery states.\n- Core contacts, companies, opportunities, projects, interactions, task history, planning, archive/restore, local export/import, and privacy/reset flows.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Expo React Native + TypeScript + Expo Router + React Native Web.",
        "ar": "Expo React Native + TypeScript + Expo Router + React Native Web."
      },
      {
        "en": "Responsive five-area navigation: Home, Tasks, Records, Planning, Settings.",
        "ar": "Responsive five-area navigation: Home, Tasks, Records, Planning, Settings."
      },
      {
        "en": "Bento-derived semantic tokens and shared UI primitives.",
        "ar": "Bento-derived semantic tokens and shared UI primitives."
      },
      {
        "en": "AsyncStorage local repository seam.",
        "ar": "AsyncStorage local repository seam."
      },
      {
        "en": "Task create, link, edit, complete, reopen, search, filter, sort, and basic recovery states.",
        "ar": "Task create, link, edit, complete, reopen, search, filter, sort, and basic recovery states."
      },
      {
        "en": "Core contacts, companies, opportunities, projects, interactions, task history, planning, archive/restore, local export/import, and privacy/reset flows.",
        "ar": "Core contacts, companies, opportunities, projects, interactions, task history, planning, archive/restore, local export/import, and privacy/reset flows."
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/solo-consultants",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-ship-sink",
    "slug": "ship-sink",
    "title": {
      "en": "ship-sink",
      "ar": "ship-sink"
    },
    "description": {
      "en": "A project managed in the Dev Stage workspace.",
      "ar": "A project managed in the Dev Stage workspace."
    },
    "meta": {
      "en": "IN-PROGRESS",
      "ar": "IN-PROGRESS"
    },
    "category": "Tools",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ESS%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# ship-sink\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# ship-sink\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Current feature inventory: Unknown / verify.",
        "ar": "Current feature inventory: Unknown / verify."
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No application manifest was detected in the workspace.",
        "ar": "No application manifest was detected in the workspace."
      },
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/ship-sink",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-spec-flow",
    "slug": "spec-flow",
    "title": {
      "en": "Spec Flow AI",
      "ar": "Spec Flow AI"
    },
    "description": {
      "en": "SpecFlow AI turns scattered product input into a guided workflow for breakdowns, structured stories, review, and export-ready handoff.",
      "ar": "يحوّل SpecFlow AI مدخلات المنتجات المبعثرة إلى سير عمل موجّه للتقسيم والقصص المنظمة والمراجعة والتسليم الجاهز للتصدير."
    },
    "meta": {
      "en": "TypeScript",
      "ar": "TypeScript"
    },
    "category": "Tools",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://spec-flow-ai.vercel.app/",
    "logoSrc": "https://spec-flow-ai.vercel.app/favicon.svg",
    "imageSrc": "/projects/spec-flow/cover.jpg",
    "galleryImages": [
      "/projects/spec-flow/experience.jpg",
      "/projects/spec-flow/landing.jpg"
    ],
    "contentMDX": {
      "en": "# Spec Flow AI\n\nSpecFlow AI turns scattered product input into a guided workflow for breakdowns, structured stories, review, and export-ready handoff.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Tools\n- Tech stack: TypeScript\n\n## Features\n\n- Public landing experience for explaining the product and routing users into the app\n- Authenticated web app for running breakdown workflows\n- Express API server for auth-scoped application behavior\n- Shared API contracts and generated client packages\n- Shared database schema package for the Supabase-hosted Postgres runtime\n- Repo-owned docs in `docs/`\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.\n\n## Media review — October 2026\n\nCampaign screenshots show the public landing and workflow preview; authenticated breakdown and export flows were not verified.",
      "ar": "# Spec Flow AI\n\nيحوّل SpecFlow AI مدخلات المنتجات المبعثرة إلى سير عمل موجّه للتقسيم والقصص المنظمة والمراجعة والتسليم الجاهز للتصدير.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Tools\n- Tech stack: TypeScript\n\n## Features\n\n- Public landing experience for explaining the product and routing users into the app\n- Authenticated web app for running breakdown workflows\n- Express API server for auth-scoped application behavior\n- Shared API contracts and generated client packages\n- Shared database schema package for the Supabase-hosted Postgres runtime\n- Repo-owned docs in `docs/`\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.\n\n## Media review — October 2026\n\nتعرض صور الحملة الصفحة العامة ومعاينة سير العمل؛ لم يتم التحقق من خطوات التقسيم والتصدير بعد تسجيل الدخول."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TypeScript",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "Public landing experience for explaining the product and routing users into the app",
        "ar": "Public landing experience for explaining the product and routing users into the app"
      },
      {
        "en": "Authenticated web app for running breakdown workflows",
        "ar": "Authenticated web app for running breakdown workflows"
      },
      {
        "en": "Express API server for auth-scoped application behavior",
        "ar": "Express API server for auth-scoped application behavior"
      },
      {
        "en": "Shared API contracts and generated client packages",
        "ar": "Shared API contracts and generated client packages"
      },
      {
        "en": "Shared database schema package for the Supabase-hosted Postgres runtime",
        "ar": "Shared database schema package for the Supabase-hosted Postgres runtime"
      },
      {
        "en": "Repo-owned docs in `docs/`",
        "ar": "Repo-owned docs in `docs/`"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "Campaign screenshots show the public landing and workflow preview; authenticated breakdown and export flows were not verified.",
        "ar": "تعرض صور الحملة الصفحة العامة ومعاينة سير العمل؛ لم يتم التحقق من خطوات التقسيم والتصدير بعد تسجيل الدخول."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/spec-flow"
    },
    "source": {
      "workspace": "workspace/spec-flow",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-skills-agency",
    "slug": "skills-agency",
    "title": {
      "en": "skills-agency",
      "ar": "skills-agency"
    },
    "description": {
      "en": "A public directory of AI agent capabilities. Explore departments and specialist profiles to understand their scope, expertise, and fit for the work.",
      "ar": "دليل عام لقدرات وكلاء الذكاء الاصطناعي. استكشف الأقسام وملفات المتخصصين لمعرفة نطاق العمل والخبرة والاختيار المناسب للمهمة."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://skills-agency.vercel.app/",
    "logoSrc": "https://skills-agency.vercel.app/favicon.ico?favicon.0x3dzn~oxb6tn.ico",
    "imageSrc": "/projects/skills-agency/cover.jpg",
    "galleryImages": [
      "/projects/skills-agency/experience.jpg",
      "/projects/skills-agency/landing.jpg"
    ],
    "contentMDX": {
      "en": "# skills-agency\n\nA public directory of AI agent capabilities. Explore departments and specialist profiles to understand their scope, expertise, and fit for the work.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, React, TypeScript\n\n## Features\n\n- spec-kit (`.specify`, `.agents`, `.opencode`)\n- `src/app`: app routes and root layout\n- `src/components`: layout, department, agent, and shared UI components\n- `src/data/skills.json`: starter agency data\n- `src/lib`: types, utilities, and future audio placeholder\n- `src/styles`: global theme tokens and Ant Design config\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# skills-agency\n\nدليل عام لقدرات وكلاء الذكاء الاصطناعي. استكشف الأقسام وملفات المتخصصين لمعرفة نطاق العمل والخبرة والاختيار المناسب للمهمة.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, React, TypeScript\n\n## Features\n\n- spec-kit (`.specify`, `.agents`, `.opencode`)\n- `src/app`: app routes and root layout\n- `src/components`: layout, department, agent, and shared UI components\n- `src/data/skills.json`: starter agency data\n- `src/lib`: types, utilities, and future audio placeholder\n- `src/styles`: global theme tokens and Ant Design config\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "spec-kit (`.specify`, `.agents`, `.opencode`)",
        "ar": "spec-kit (`.specify`, `.agents`, `.opencode`)"
      },
      {
        "en": "`src/app`: app routes and root layout",
        "ar": "`src/app`: app routes and root layout"
      },
      {
        "en": "`src/components`: layout, department, agent, and shared UI components",
        "ar": "`src/components`: layout, department, agent, and shared UI components"
      },
      {
        "en": "`src/data/skills.json`: starter agency data",
        "ar": "`src/data/skills.json`: starter agency data"
      },
      {
        "en": "`src/lib`: types, utilities, and future audio placeholder",
        "ar": "`src/lib`: types, utilities, and future audio placeholder"
      },
      {
        "en": "`src/styles`: global theme tokens and Ant Design config",
        "ar": "`src/styles`: global theme tokens and Ant Design config"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/skills-agency"
    },
    "source": {
      "workspace": "workspace/skills-agency",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-dev2ops",
    "slug": "dev2ops",
    "title": {
      "en": "Dev2ops",
      "ar": "dev2ops"
    },
    "description": {
      "en": "dev2ops is a browser-simulated DevOps learning game for safe, evidence-led operational practice. It turns real operational moments into guided terminal quests without executing commands on a host.",
      "ar": "dev2ops لعبة تعليمية في DevOps تحاكي الطرفية داخل المتصفح لتدريب آمن قائم على الأدلة، وتحول المواقف التشغيلية الواقعية إلى مهام إرشادية دون تنفيذ الأوامر على جهاز حقيقي."
    },
    "meta": {
      "en": "React • TypeScript • Vite • Express • tRPC • Tailwind CSS",
      "ar": "React • TypeScript • Vite • Express • tRPC • Tailwind CSS"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://dev2ops.vercel.app/",
    "logoSrc": "https://dev2ops.vercel.app/brand/dev2ops-logo.png",
    "imageSrc": "/projects/dev2ops/cover.jpg",
    "galleryImages": [
      "/projects/dev2ops/experience.jpg",
      "/projects/dev2ops/landing.jpg"
    ],
    "contentMDX": {
      "en": "# Dev2ops\n\ndev2ops is a browser-simulated DevOps learning game for safe, evidence-led operational practice. Learners turn real operational moments into guided terminal quests in a complete browser simulation.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: React, TypeScript, Vite, Express, tRPC, Tailwind CSS, Vitest\n- Scale: 15 learning tracks, 45+ quests, and 0 real execution\n\n## Features\n\n- Deterministic browser simulator with state-based validation.\n- Source-backed DevOps curriculum with prerequisite-aware learning paths.\n- Guided practice across Linux, Git, networking, automation, CI/CD, containers, Kubernetes, and related operational domains.\n- Responsive quest workspace with command reference, evidence checks, hints, weekly goals, and learning-path recommendations.\n- Local progress with JSON backup and restore; no account is required for the current release.\n- Installable PWA with branded icons, splash screen, bounded offline shell, and install guidance.\n\n## Progress\n\nClassified as showcase-ready after reviewing the live deployment and repository evidence on 2026-08-01.\n\n## Issues / troubles\n\n- Learner progress is browser-local; account synchronization and server persistence are not part of the current release.\n- CI policy, production secret provisioning, and release artifacts remain Unknown / verify; the Vercel target and repository deployment configuration are documented in vercel.json.\n\n## Suggested next steps\n\n- Consider optional account-backed sync if cross-device learning becomes a requirement.\n- Keep curriculum references and simulation command coverage under periodic review as tracks expand.",
      "ar": "# Dev2ops\n\ndev2ops لعبة تعليمية في DevOps تحاكي الطرفية داخل المتصفح لتدريب آمن قائم على الأدلة. يحوّل المشروع المواقف التشغيلية الواقعية إلى مهام إرشادية ضمن محاكاة كاملة داخل المتصفح.\n\n## ملخص المشروع\n\n- الحالة: معرض\n- الفئة: ويب\n- التقنيات: React، TypeScript، Vite، Express، tRPC، Tailwind CSS، Vitest\n- الحجم: 15 مسار تعلم، وأكثر من 45 مهمة، و0 تنفيذ حقيقي\n\n## الميزات\n\n- محاكي متصفح حتمي مع تحقق قائم على الحالة.\n- منهج DevOps موثق بالمصادر مع مسارات تعلم تراعي المتطلبات السابقة.\n- تدريب إرشادي على Linux وGit والشبكات والأتمتة وCI/CD والحاويات وKubernetes ومجالات تشغيلية مرتبطة.\n- مساحة مهام متجاوبة مع مرجع للأوامر وأدلة تحقق وتلميحات وأهداف أسبوعية وتوصيات لمسارات التعلم.\n- حفظ التقدم محليًا مع النسخ الاحتياطي والاستعادة بصيغة JSON، دون الحاجة إلى حساب في الإصدار الحالي.\n- تطبيق ويب تقدمي قابل للتثبيت مع أيقونات وشاشة بداية ذات هوية بصرية وقشرة عمل دون اتصال محدودة وإرشادات للتثبيت.\n\n## التقدم\n\nتم تصنيف المشروع كجاهز للعرض بعد مراجعة النشر المباشر وأدلة المستودع في 2026-08-01.\n\n## المشكلات والصعوبات\n\n- تقدم المتعلم محلي داخل المتصفح؛ ولا يتضمن الإصدار الحالي مزامنة الحسابات أو التخزين على الخادم.\n- لا تزال سياسة CI وتجهيز أسرار الإنتاج وملفات الإصدار بحاجة إلى التحقق؛ بينما تم توثيق هدف Vercel وإعدادات النشر في ملف vercel.json.\n\n## الخطوات المقترحة\n\n- دراسة إضافة مزامنة اختيارية مرتبطة بالحساب إذا أصبح التعلم عبر أجهزة متعددة مطلبًا.\n- مراجعة مراجع المنهج وتغطية أوامر المحاكاة دوريًا مع توسع مسارات التعلم."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "tRPC",
      "Tailwind CSS",
      "Vitest",
      "showcase"
    ],
    "status": "showcase",
    "stage": "published",
    "features": [
      {
        "en": "Deterministic browser simulator with state-based validation",
        "ar": "محاكي متصفح حتمي مع تحقق قائم على الحالة"
      },
      {
        "en": "Source-backed DevOps curriculum",
        "ar": "منهج DevOps موثق بالمصادر"
      },
      {
        "en": "Prerequisite-aware learning paths across connected tracks",
        "ar": "مسارات تعلم تراعي المتطلبات السابقة عبر مسارات مترابطة"
      },
      {
        "en": "Responsive accessible quest workspace with command reference and evidence",
        "ar": "مساحة مهام متجاوبة وميسّرة مع مرجع للأوامر وأدلة تحقق"
      },
      {
        "en": "Local progress with JSON backup and restore",
        "ar": "تقدم محلي مع نسخ JSON احتياطية واستعادة"
      },
      {
        "en": "Dashboard analytics, weekly goals, hints, and learning-path recommendations",
        "ar": "تحليلات لوحة التحكم والأهداف الأسبوعية والتلميحات وتوصيات مسارات التعلم"
      },
      {
        "en": "Installable PWA with bounded offline shell and install guidance",
        "ar": "تطبيق ويب تقدمي قابل للتثبيت مع قشرة عمل دون اتصال محدودة وإرشادات للتثبيت"
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready after reviewing the live deployment and repository evidence on 2026-08-01.",
      "ar": "تم تصنيف المشروع كجاهز للعرض بعد مراجعة النشر المباشر وأدلة المستودع في 2026-08-01."
    },
    "issues": [
      {
        "en": "Learner progress is browser-local; account synchronization and server persistence are not part of the current release.",
        "ar": "تقدم المتعلم محلي داخل المتصفح؛ ولا يتضمن الإصدار الحالي مزامنة الحسابات أو التخزين على الخادم."
      },
      {
        "en": "CI policy, production secret provisioning, and release artifacts remain Unknown / verify; the Vercel target and repository deployment configuration are documented in vercel.json.",
        "ar": "لا تزال سياسة CI وتجهيز أسرار الإنتاج وملفات الإصدار بحاجة إلى التحقق؛ بينما تم توثيق هدف Vercel وإعدادات النشر في ملف vercel.json."
      }
    ],
    "suggestions": [
      {
        "en": "Consider optional account-backed sync if cross-device learning becomes a requirement.",
        "ar": "دراسة إضافة مزامنة اختيارية مرتبطة بالحساب إذا أصبح التعلم عبر أجهزة متعددة مطلبًا."
      },
      {
        "en": "Keep curriculum references and simulation command coverage under periodic review as tracks expand.",
        "ar": "مراجعة مراجع المنهج وتغطية أوامر المحاكاة دوريًا مع توسع مسارات التعلم."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/dev2ops"
    },
    "source": {
      "workspace": "workspace/dev2ops",
      "last_reviewed": "2026-08-01"
    }
  },
  {
    "id": "apexyard-token-tracker-mobile",
    "slug": "token-tracker-mobile",
    "title": {
      "en": "token-tracker-mobile",
      "ar": "token-tracker-mobile"
    },
    "description": {
      "en": "<div align=\"center\"> <img src=\"./assets/images/logo.png\" alt=\"Token Tracker Mobile logo\" width=\"96\" /> <h1>Token Tracker Mobile</h1> <p><strong>The mobile companion for monitoring AI token usage, provider health, session quality, and team activity on the go.</strong></p> <p> <img",
      "ar": "<div align=\"center\"> <img src=\"./assets/images/logo.png\" alt=\"Token Tracker Mobile logo\" width=\"96\" /> <h1>Token Tracker Mobile</h1> <p><strong>The mobile companion for monitoring AI token usage, provider health, session quality, and team activity on the go.</strong></p> <p> <img"
    },
    "meta": {
      "en": "Expo • React Native • React • TypeScript",
      "ar": "Expo • React Native • React • TypeScript"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ETTM%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# token-tracker-mobile\n\n<div align=\"center\"> <img src=\"./assets/images/logo.png\" alt=\"Token Tracker Mobile logo\" width=\"96\" /> <h1>Token Tracker Mobile</h1> <p><strong>The mobile companion for monitoring AI token usage, provider health, session quality, and team activity on the go.</strong></p> <p> <img\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Mobile-first overview of key AI operations metrics\n- Analytics and trend monitoring on smaller screens\n- Team and leaderboard visibility\n- Shared visual identity with the dashboard repo\n- Native Android build output for device testing\n- Expo Router structure for continued mobile feature delivery\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# token-tracker-mobile\n\n<div align=\"center\"> <img src=\"./assets/images/logo.png\" alt=\"Token Tracker Mobile logo\" width=\"96\" /> <h1>Token Tracker Mobile</h1> <p><strong>The mobile companion for monitoring AI token usage, provider health, session quality, and team activity on the go.</strong></p> <p> <img\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- Mobile-first overview of key AI operations metrics\n- Analytics and trend monitoring on smaller screens\n- Team and leaderboard visibility\n- Shared visual identity with the dashboard repo\n- Native Android build output for device testing\n- Expo Router structure for continued mobile feature delivery\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Mobile-first overview of key AI operations metrics",
        "ar": "Mobile-first overview of key AI operations metrics"
      },
      {
        "en": "Analytics and trend monitoring on smaller screens",
        "ar": "Analytics and trend monitoring on smaller screens"
      },
      {
        "en": "Team and leaderboard visibility",
        "ar": "Team and leaderboard visibility"
      },
      {
        "en": "Shared visual identity with the dashboard repo",
        "ar": "Shared visual identity with the dashboard repo"
      },
      {
        "en": "Native Android build output for device testing",
        "ar": "Native Android build output for device testing"
      },
      {
        "en": "Expo Router structure for continued mobile feature delivery",
        "ar": "Expo Router structure for continued mobile feature delivery"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/token-tracker-mobile"
    },
    "source": {
      "workspace": "workspace/token-tracker-mobile",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-skills-agency-mobile",
    "slug": "skills-agency-mobile",
    "title": {
      "en": "skills-agency-mobile",
      "ar": "skills-agency-mobile"
    },
    "description": {
      "en": "Native mobile app for The Agency, built with Expo, Expo Router, and React Native.",
      "ar": "Native mobile app for The Agency, built with Expo, Expo Router, and React Native."
    },
    "meta": {
      "en": "Expo • React Native • React • TypeScript",
      "ar": "Expo • React Native • React • TypeScript"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ESAM%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# skills-agency-mobile\n\nNative mobile app for The Agency, built with Expo, Expo Router, and React Native.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- React Native 0.81\n- Android Studio with Android SDK installed\n- The app resolves downloadable pack links to the live website at skills-agency.vercel.app.\n- Build artifacts, local machine metadata, and generated APK files are ignored by Git on purpose.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# skills-agency-mobile\n\nNative mobile app for The Agency, built with Expo, Expo Router, and React Native.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- React Native 0.81\n- Android Studio with Android SDK installed\n- The app resolves downloadable pack links to the live website at skills-agency.vercel.app.\n- Build artifacts, local machine metadata, and generated APK files are ignored by Git on purpose.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "React",
      "TypeScript",
      "showcase"
    ],
    "status": "showcase",
    "features": [
      {
        "en": "React Native 0.81",
        "ar": "React Native 0.81"
      },
      {
        "en": "Android Studio with Android SDK installed",
        "ar": "Android Studio with Android SDK installed"
      },
      {
        "en": "The app resolves downloadable pack links to the live website at skills-agency.vercel.app.",
        "ar": "The app resolves downloadable pack links to the live website at skills-agency.vercel.app."
      },
      {
        "en": "Build artifacts, local machine metadata, and generated APK files are ignored by Git on purpose.",
        "ar": "Build artifacts, local machine metadata, and generated APK files are ignored by Git on purpose."
      }
    ],
    "progress": {
      "en": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.",
      "ar": "Classified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence."
    },
    "issues": [
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Add reviewed screenshots and a fuller case study when visual evidence is available.",
        "ar": "Add reviewed screenshots and a fuller case study when visual evidence is available."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/skills-agency-mobile"
    },
    "source": {
      "workspace": "workspace/skills-agency-mobile",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-retro-board",
    "slug": "retro-board",
    "title": {
      "en": "retro-board",
      "ar": "retro-board"
    },
    "description": {
      "en": "Run private team retrospectives with categorized prompts, anonymous note capture, grouping, dot-voting, discussion timers, and action items.",
      "ar": "Run private team retrospectives with categorized prompts, anonymous note capture, grouping, dot-voting, discussion timers, and action items."
    },
    "meta": {
      "en": "Next.js • Vite • React • TypeScript • Tailwind • Vitest",
      "ar": "Next.js • Vite • React • TypeScript • Tailwind • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3ERB%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# retro-board\n\nRun private team retrospectives with categorized prompts, anonymous note capture, grouping, dot-voting, discussion timers, and action items.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Base UI)\n- Database: PostgreSQL with Drizzle ORM\n- Dev tools: pnpm, Docker Compose (optional)\n- PostgreSQL (local or Docker)\n- Capture — Team adds anonymous notes by category. Content hidden from others.\n- Reveal — All notes become visible in their categories.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# retro-board\n\nRun private team retrospectives with categorized prompts, anonymous note capture, grouping, dot-voting, discussion timers, and action items.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Base UI)\n- Database: PostgreSQL with Drizzle ORM\n- Dev tools: pnpm, Docker Compose (optional)\n- PostgreSQL (local or Docker)\n- Capture — Team adds anonymous notes by category. Content hidden from others.\n- Reveal — All notes become visible in their categories.\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Base UI)",
        "ar": "Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Base UI)"
      },
      {
        "en": "Database: PostgreSQL with Drizzle ORM",
        "ar": "Database: PostgreSQL with Drizzle ORM"
      },
      {
        "en": "Dev tools: pnpm, Docker Compose (optional)",
        "ar": "Dev tools: pnpm, Docker Compose (optional)"
      },
      {
        "en": "PostgreSQL (local or Docker)",
        "ar": "PostgreSQL (local or Docker)"
      },
      {
        "en": "Capture — Team adds anonymous notes by category. Content hidden from others.",
        "ar": "Capture — Team adds anonymous notes by category. Content hidden from others."
      },
      {
        "en": "Reveal — All notes become visible in their categories.",
        "ar": "Reveal — All notes become visible in their categories."
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/retro-board",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-memory-book",
    "slug": "memory-book",
    "title": {
      "en": "memory-book",
      "ar": "memory-book"
    },
    "description": {
      "en": "A private local family memory archive with milestones, stories, photos, tags, and exportable albums. Runs entirely on your device — no cloud, no paid services.",
      "ar": "A private local family memory archive with milestones, stories, photos, tags, and exportable albums. Runs entirely on your device — no cloud, no paid services."
    },
    "meta": {
      "en": "Next.js • Vite • React • TypeScript • Tailwind • Vitest",
      "ar": "Next.js • Vite • React • TypeScript • Tailwind • Vitest"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EMB%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# memory-book\n\nA private local family memory archive with milestones, stories, photos, tags, and exportable albums. Runs entirely on your device — no cloud, no paid services.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Frontend: Next.js 16 App Router + React 19 + TypeScript\n- Styling: Tailwind CSS v4 with custom design tokens (amber primary, warm neutrals, dark mode)\n- Database: SQLite via `better-sqlite3` (zero-config, file-based)\n- Validation: Zod schemas on both client and server\n- File Storage: Local filesystem (`data/photos/`)\n- State: React client components with fetch-based data loading\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# memory-book\n\nA private local family memory archive with milestones, stories, photos, tags, and exportable albums. Runs entirely on your device — no cloud, no paid services.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Frontend: Next.js 16 App Router + React 19 + TypeScript\n- Styling: Tailwind CSS v4 with custom design tokens (amber primary, warm neutrals, dark mode)\n- Database: SQLite via `better-sqlite3` (zero-config, file-based)\n- Validation: Zod schemas on both client and server\n- File Storage: Local filesystem (`data/photos/`)\n- State: React client components with fetch-based data loading\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Frontend: Next.js 16 App Router + React 19 + TypeScript",
        "ar": "Frontend: Next.js 16 App Router + React 19 + TypeScript"
      },
      {
        "en": "Styling: Tailwind CSS v4 with custom design tokens (amber primary, warm neutrals, dark mode)",
        "ar": "Styling: Tailwind CSS v4 with custom design tokens (amber primary, warm neutrals, dark mode)"
      },
      {
        "en": "Database: SQLite via `better-sqlite3` (zero-config, file-based)",
        "ar": "Database: SQLite via `better-sqlite3` (zero-config, file-based)"
      },
      {
        "en": "Validation: Zod schemas on both client and server",
        "ar": "Validation: Zod schemas on both client and server"
      },
      {
        "en": "File Storage: Local filesystem (`data/photos/`)",
        "ar": "File Storage: Local filesystem (`data/photos/`)"
      },
      {
        "en": "State: React client components with fetch-based data loading",
        "ar": "State: React client components with fetch-based data loading"
      }
    ],
    "progress": {
      "en": "Classified as in progress by Dev Stage; implementation and scope are still evolving.",
      "ar": "Classified as in progress by Dev Stage; implementation and scope are still evolving."
    },
    "issues": [
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "No GitHub remote is configured; updates remain local.",
        "ar": "No GitHub remote is configured; updates remain local."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "local-only"
    },
    "source": {
      "workspace": "workspace/memory-book",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-mohakat",
    "slug": "mohakat",
    "title": {
      "en": "mohakat",
      "ar": "mohakat"
    },
    "description": {
      "en": "This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).",
      "ar": "This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)."
    },
    "meta": {
      "en": "Next.js • React • TypeScript • Tailwind",
      "ar": "Next.js • React • TypeScript • Tailwind"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EMO%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# mohakat\n\nThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).\n\n## Project snapshot\n\n- Status: prototype\n- Category: Web\n- Tech stack: Next.js, React, TypeScript, Tailwind\n\n## Features\n\n- Next.js Documentation - learn about Next.js features and API.\n- Learn Next.js - an interactive Next.js tutorial.\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# mohakat\n\nThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).\n\n## Project snapshot\n\n- Status: prototype\n- Category: Web\n- Tech stack: Next.js, React, TypeScript, Tailwind\n\n## Features\n\n- Next.js Documentation - learn about Next.js features and API.\n- Learn Next.js - an interactive Next.js tutorial.\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "prototype"
    ],
    "status": "prototype",
    "features": [
      {
        "en": "Next.js Documentation - learn about Next.js features and API.",
        "ar": "Next.js Documentation - learn about Next.js features and API."
      },
      {
        "en": "Learn Next.js - an interactive Next.js tutorial.",
        "ar": "Learn Next.js - an interactive Next.js tutorial."
      }
    ],
    "progress": {
      "en": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage.",
      "ar": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage."
    },
    "issues": [
      {
        "en": "No test command is declared in package.json.",
        "ar": "No test command is declared in package.json."
      },
      {
        "en": "No conventional test directory was detected.",
        "ar": "No conventional test directory was detected."
      },
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Add a focused automated test command for the highest-risk behavior.",
        "ar": "Add a focused automated test command for the highest-risk behavior."
      },
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/mohakat",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-hafiz",
    "slug": "hafiz",
    "title": {
      "en": "hafiz",
      "ar": "hafiz"
    },
    "description": {
      "en": "Egyptian-Arabic-first React Native (Expo) app for tracking Quran memorization and repetition. Fully offline, RTL, Almarai typography, local SQLite persistence, JSON/CSV/Markdown export, optional n8n webhook sync.",
      "ar": "Egyptian-Arabic-first React Native (Expo) app for tracking Quran memorization and repetition. Fully offline, RTL, Almarai typography, local SQLite persistence, JSON/CSV/Markdown export, optional n8n webhook sync."
    },
    "meta": {
      "en": "Expo • React Native • React • TypeScript",
      "ar": "Expo • React Native • React • TypeScript"
    },
    "category": "Mobile",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EHA%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# hafiz\n\nEgyptian-Arabic-first React Native (Expo) app for tracking Quran memorization and repetition. Fully offline, RTL, Almarai typography, local SQLite persistence, JSON/CSV/Markdown export, optional n8n webhook sync.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- `primaryrecords` — title, description, category, status, amountminor, repetitions, tagsjson, timestamps, deletedat.\n- `usersettings` — singleton row holding theme, language, webhook URL/token, export preference.\n- `auditlog` — per-record create/update/delete/restore/archive events with optional JSON payload.\n- Repository / schema / adapter layer (`tests/product-critical.test.ts`,\n- Visual / config layer (`tests/product-critical.test.ts`\n- Test 1 — creating a valid record persists, appears in the list, and writes an audit log entry.\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# hafiz\n\nEgyptian-Arabic-first React Native (Expo) app for tracking Quran memorization and repetition. Fully offline, RTL, Almarai typography, local SQLite persistence, JSON/CSV/Markdown export, optional n8n webhook sync.\n\n## Project snapshot\n\n- Status: prototype\n- Category: Mobile\n- Tech stack: Expo, React Native, React, TypeScript\n\n## Features\n\n- `primaryrecords` — title, description, category, status, amountminor, repetitions, tagsjson, timestamps, deletedat.\n- `usersettings` — singleton row holding theme, language, webhook URL/token, export preference.\n- `auditlog` — per-record create/update/delete/restore/archive events with optional JSON payload.\n- Repository / schema / adapter layer (`tests/product-critical.test.ts`,\n- Visual / config layer (`tests/product-critical.test.ts`\n- Test 1 — creating a valid record persists, appears in the list, and writes an audit log entry.\n\n## Progress\n\nClassified as a prototype by Dev Stage; evidence and scope remain early-stage.\n\n## Issues / troubles\n\n- This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.\n\n## Suggested next steps\n\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Expo",
      "React Native",
      "React",
      "TypeScript",
      "prototype"
    ],
    "status": "prototype",
    "features": [
      {
        "en": "`primaryrecords` — title, description, category, status, amountminor, repetitions, tagsjson, timestamps, deletedat.",
        "ar": "`primaryrecords` — title, description, category, status, amountminor, repetitions, tagsjson, timestamps, deletedat."
      },
      {
        "en": "`usersettings` — singleton row holding theme, language, webhook URL/token, export preference.",
        "ar": "`usersettings` — singleton row holding theme, language, webhook URL/token, export preference."
      },
      {
        "en": "`auditlog` — per-record create/update/delete/restore/archive events with optional JSON payload.",
        "ar": "`auditlog` — per-record create/update/delete/restore/archive events with optional JSON payload."
      },
      {
        "en": "Repository / schema / adapter layer (`tests/product-critical.test.ts`,",
        "ar": "Repository / schema / adapter layer (`tests/product-critical.test.ts`,"
      },
      {
        "en": "Visual / config layer (`tests/product-critical.test.ts`",
        "ar": "Visual / config layer (`tests/product-critical.test.ts`"
      },
      {
        "en": "Test 1 — creating a valid record persists, appears in the list, and writes an audit log entry.",
        "ar": "Test 1 — creating a valid record persists, appears in the list, and writes an audit log entry."
      }
    ],
    "progress": {
      "en": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage.",
      "ar": "Classified as a prototype by Dev Stage; evidence and scope remain early-stage."
    },
    "issues": [
      {
        "en": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace.",
        "ar": "This workspace is not an independent Git repository; it is managed by the Dev Stage parent workspace."
      }
    ],
    "suggestions": [
      {
        "en": "Record the next milestone and known blockers in this portfolio document.",
        "ar": "Record the next milestone and known blockers in this portfolio document."
      }
    ],
    "repository": {
      "branch": "main",
      "sync": "parent-workspace"
    },
    "source": {
      "workspace": "workspace/hafiz",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-dev-hq",
    "slug": "dev-hq",
    "title": {
      "en": "Dev HQ",
      "ar": "مرصد المشاريع"
    },
    "description": {
      "en": "A project observatory bringing uptime monitoring, visitor feedback, and website checks into one owner workspace.",
      "ar": "مرصد يجمع متابعة تشغيل المشاريع وآراء الزوار وفحوص المواقع في مساحة واحدة لصاحب المشاريع."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://the-dev-hq.vercel.app/",
    "imageSrc": "/projects/dev-hq/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Dev HQ\n\nA project observatory bringing uptime monitoring, visitor feedback, and website checks into one owner workspace.\n\n## Features\n\n- Uptime monitoring\n- Visitor feedback and Telegram alerts\n- Performance, links, and Arabic SEO checks",
      "ar": "# مرصد المشاريع\n\nمرصد يجمع متابعة تشغيل المشاريع وآراء الزوار وفحوص المواقع في مساحة واحدة لصاحب المشاريع.\n\n## الميزات\n\n- متابعة تشغيل المشاريع\n- آراء الزوار وتنبيهات تيليجرام\n- فحوص الأداء والروابط وتهيئة البحث بالعربية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Uptime monitoring",
        "ar": "متابعة تشغيل المشاريع"
      },
      {
        "en": "Visitor feedback and Telegram alerts",
        "ar": "آراء الزوار وتنبيهات تيليجرام"
      },
      {
        "en": "Performance, links, and Arabic SEO checks",
        "ar": "فحوص الأداء والروابط وتهيئة البحث بالعربية"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/dev-hq",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-yalla-nakol",
    "slug": "yalla-nakol",
    "title": {
      "en": "Yalla Nakol",
      "ar": "يلا ناكل"
    },
    "description": {
      "en": "Organize group food orders, vote on restaurants, collect each person's choices, and review how the bill is split.",
      "ar": "نظّم طلبات الأكل الجماعية وصوّت على المطعم واجمع اختيارات كل شخص وراجع تقسيم الفاتورة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://yalla-nakoll.vercel.app/",
    "imageSrc": "/projects/yalla-nakol/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Yalla Nakol\n\nOrganize group food orders, vote on restaurants, collect each person's choices, and review how the bill is split.\n\n## Features\n\n- Restaurant voting\n- Individual orders and instructions\n- Shared bill review",
      "ar": "# يلا ناكل\n\nنظّم طلبات الأكل الجماعية وصوّت على المطعم واجمع اختيارات كل شخص وراجع تقسيم الفاتورة.\n\n## الميزات\n\n- تصويت على المطعم\n- طلبات وتعليمات كل شخص\n- مراجعة الفاتورة المشتركة"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Restaurant voting",
        "ar": "تصويت على المطعم"
      },
      {
        "en": "Individual orders and instructions",
        "ar": "طلبات وتعليمات كل شخص"
      },
      {
        "en": "Shared bill review",
        "ar": "مراجعة الفاتورة المشتركة"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/yalla-nakol",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-harness-atlas",
    "slug": "harness-atlas",
    "title": {
      "en": "Harness Atlas",
      "ar": "أطلس هارنس"
    },
    "description": {
      "en": "An interactive map of the tools, memory, permissions, and other capabilities that make an AI agent work.",
      "ar": "خريطة تفاعلية للأدوات والذاكرة والصلاحيات والقدرات التي تساعد وكيل الذكاء الاصطناعي على العمل."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://harnessatlas.vercel.app/",
    "imageSrc": "/projects/harness-atlas/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Harness Atlas\n\nAn interactive map of the tools, memory, permissions, and other capabilities that make an AI agent work.\n\n## Features\n\n- Interactive capability map\n- Explore agent hosts and tools\n- Analyze and organize your stack",
      "ar": "# أطلس هارنس\n\nخريطة تفاعلية للأدوات والذاكرة والصلاحيات والقدرات التي تساعد وكيل الذكاء الاصطناعي على العمل.\n\n## الميزات\n\n- خريطة تفاعلية للقدرات\n- استكشاف بيئات الوكلاء وأدواتها\n- تحليل مجموعة أدواتك وتنظيمها"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Interactive capability map",
        "ar": "خريطة تفاعلية للقدرات"
      },
      {
        "en": "Explore agent hosts and tools",
        "ar": "استكشاف بيئات الوكلاء وأدواتها"
      },
      {
        "en": "Analyze and organize your stack",
        "ar": "تحليل مجموعة أدواتك وتنظيمها"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/harness-atlas",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-bikheer",
    "slug": "bikheer",
    "title": {
      "en": "Bikheer",
      "ar": "بخير"
    },
    "description": {
      "en": "A calm daily wellbeing journal for water, breaks, movement, sleep, meals, and how you feel.",
      "ar": "دفتر يومي هادئ للمياه والاستراحات والحركة والنوم والأكل وتسجيل إحساسك."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://bikheer.vercel.app/",
    "imageSrc": "/projects/bikheer/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Bikheer\n\nA calm daily wellbeing journal for water, breaks, movement, sleep, meals, and how you feel.\n\n## Features\n\n- Daily timeline and wellbeing logs\n- Routines, circles, and summaries\n- Arabic and English interface",
      "ar": "# بخير\n\nدفتر يومي هادئ للمياه والاستراحات والحركة والنوم والأكل وتسجيل إحساسك.\n\n## الميزات\n\n- خط يومي وتسجيلات للعادات اليومية\n- روتينات ودوائر وملخصات\n- واجهة عربية وإنجليزية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Daily timeline and wellbeing logs",
        "ar": "خط يومي وتسجيلات للعادات اليومية"
      },
      {
        "en": "Routines, circles, and summaries",
        "ar": "روتينات ودوائر وملخصات"
      },
      {
        "en": "Arabic and English interface",
        "ar": "واجهة عربية وإنجليزية"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/bikheer",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-lost-island",
    "slug": "lost-island",
    "title": {
      "en": "The Returning Island",
      "ar": "الجزيرة العائدة"
    },
    "description": {
      "en": "A story adventure on the fictional island of Nerida, where exploration, crafts, and shared decisions shape a return home.",
      "ar": "مغامرة قصصية على جزيرة نيريدا الخيالية، يتشكل فيها الرجوع للبيت بالاستكشاف والحِرف والقرارات المشتركة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://lost-island-zeta.vercel.app/",
    "imageSrc": "/projects/lost-island/cover.webp",
    "galleryImages": [
      "/projects/lost-island/gameplay.webp"
    ],
    "contentMDX": {
      "en": "# The Returning Island\n\nA story adventure on the fictional island of Nerida, where exploration, crafts, and shared decisions shape a return home.\n\n## Features\n\n- Explore illustrated island locations\n- Quests, tides, and local characters\n- Save slots, journal, and achievements",
      "ar": "# الجزيرة العائدة\n\nمغامرة قصصية على جزيرة نيريدا الخيالية، يتشكل فيها الرجوع للبيت بالاستكشاف والحِرف والقرارات المشتركة.\n\n## الميزات\n\n- استكشاف أماكن الجزيرة المصوّرة\n- مهام ومد وجزر وشخصيات محلية\n- خانات حفظ ودفتر وإنجازات"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "Games",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Explore illustrated island locations",
        "ar": "استكشاف أماكن الجزيرة المصوّرة"
      },
      {
        "en": "Quests, tides, and local characters",
        "ar": "مهام ومد وجزر وشخصيات محلية"
      },
      {
        "en": "Save slots, journal, and achievements",
        "ar": "خانات حفظ ودفتر وإنجازات"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/lost-island",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-meuseum-impossible-journeys",
    "slug": "meuseum-impossible-journeys",
    "title": {
      "en": "The Museum of Impossible Journeys",
      "ar": "متحف الرحلات المستحيلة"
    },
    "description": {
      "en": "An evidence adventure about six museum objects, conflicting records, and the care needed to tell their stories honestly.",
      "ar": "مغامرة أدلة عن ست قطع متحفية وسجلات متعارضة وكيف نحكي قصصها بأمانة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://meuseum-impossible-journeys.vercel.app/",
    "imageSrc": "/projects/meuseum-impossible-journeys/cover.webp",
    "galleryImages": [
      "/projects/meuseum-impossible-journeys/gameplay.webp"
    ],
    "contentMDX": {
      "en": "# The Museum of Impossible Journeys\n\nAn evidence adventure about six museum objects, conflicting records, and the care needed to tell their stories honestly.\n\n## Features\n\n- Six object dossiers\n- Evidence reading and imagined reconstructions\n- Guided difficulty and save slots",
      "ar": "# متحف الرحلات المستحيلة\n\nمغامرة أدلة عن ست قطع متحفية وسجلات متعارضة وكيف نحكي قصصها بأمانة.\n\n## الميزات\n\n- ستة ملفات لقطع متحفية\n- قراءة الأدلة وإعادة تصورات خيالية\n- مستوى إرشادي وخانات حفظ"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "Games",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Six object dossiers",
        "ar": "ستة ملفات لقطع متحفية"
      },
      {
        "en": "Evidence reading and imagined reconstructions",
        "ar": "قراءة الأدلة وإعادة تصورات خيالية"
      },
      {
        "en": "Guided difficulty and save slots",
        "ar": "مستوى إرشادي وخانات حفظ"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/meuseum-impossible-journeys",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-mi3ad",
    "slug": "mi3ad",
    "title": {
      "en": "Mi3ad",
      "ar": "ميعاد"
    },
    "description": {
      "en": "Arabic scheduling polls: suggest times, share a link, and find a time that works for everyone in their own timezone.",
      "ar": "استطلاعات مواعيد بالعربي: اقترح أوقات وشارك الرابط واختار الوقت المناسب للجميع بتوقيت كل شخص."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://mi3ad.vercel.app/",
    "imageSrc": "/projects/mi3ad/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Mi3ad\n\nArabic scheduling polls: suggest times, share a link, and find a time that works for everyone in their own timezone.\n\n## Features\n\n- Account-free scheduling polls\n- Timezone-aware time choices\n- Live votes and availability",
      "ar": "# ميعاد\n\nاستطلاعات مواعيد بالعربي: اقترح أوقات وشارك الرابط واختار الوقت المناسب للجميع بتوقيت كل شخص.\n\n## الميزات\n\n- استطلاعات مواعيد دون حساب\n- مواعيد حسب المنطقة الزمنية\n- أصوات وتوافر لحظي"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Account-free scheduling polls",
        "ar": "استطلاعات مواعيد دون حساب"
      },
      {
        "en": "Timezone-aware time choices",
        "ar": "مواعيد حسب المنطقة الزمنية"
      },
      {
        "en": "Live votes and availability",
        "ar": "أصوات وتوافر لحظي"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/mi3ad",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-dayra",
    "slug": "dayra",
    "title": {
      "en": "Dayra",
      "ar": "دايرة"
    },
    "description": {
      "en": "An invitation-only space for a community to coordinate needs, shifts, and shared decisions.",
      "ar": "مساحة بالدعوة فقط لتنسيق احتياجات المجموعة والورديات والقرارات المشتركة."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://al-dayra.vercel.app/",
    "imageSrc": "/projects/dayra/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Dayra\n\nAn invitation-only space for a community to coordinate needs, shifts, and shared decisions.\n\n## Features\n\n- Private community circles\n- Shared needs and shifts\n- Arabic and English landing page",
      "ar": "# دايرة\n\nمساحة بالدعوة فقط لتنسيق احتياجات المجموعة والورديات والقرارات المشتركة.\n\n## الميزات\n\n- دوائر خاصة للمجموعات\n- احتياجات وورديات مشتركة\n- صفحة عربية وإنجليزية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Private community circles",
        "ar": "دوائر خاصة للمجموعات"
      },
      {
        "en": "Shared needs and shifts",
        "ar": "احتياجات وورديات مشتركة"
      },
      {
        "en": "Arabic and English landing page",
        "ar": "صفحة عربية وإنجليزية"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/dayra",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-stollen-constillation",
    "slug": "stollen-constillation",
    "title": {
      "en": "The Stolen Constellations",
      "ar": "الكوكبات المسروقة"
    },
    "description": {
      "en": "A celestial navigation mystery: the stars remain, but their map is missing.",
      "ar": "لغز في الملاحة السماوية: النجوم ما زالت موجودة، لكن خريطتها مفقودة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://stollen-constillation.vercel.app/",
    "imageSrc": "/projects/stollen-constillation/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# The Stolen Constellations\n\nA celestial navigation mystery: the stars remain, but their map is missing.\n\n## Features\n\n- Celestial navigation mystery\n- Three local save slots\n- Language and theme controls",
      "ar": "# الكوكبات المسروقة\n\nلغز في الملاحة السماوية: النجوم ما زالت موجودة، لكن خريطتها مفقودة.\n\n## الميزات\n\n- لغز ملاحة سماوية\n- ثلاث خانات حفظ محلية\n- اختيار اللغة والمظهر"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "Games",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Celestial navigation mystery",
        "ar": "لغز ملاحة سماوية"
      },
      {
        "en": "Three local save slots",
        "ar": "ثلاث خانات حفظ محلية"
      },
      {
        "en": "Language and theme controls",
        "ar": "اختيار اللغة والمظهر"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/stollen-constillation",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-minasat-nashr",
    "slug": "minasat-nashr",
    "title": {
      "en": "Minasat",
      "ar": "منصات"
    },
    "description": {
      "en": "An Arabic directory of product launch platforms with audience filters, dated information, and a personal launch plan.",
      "ar": "دليل عربي لمنصات إطلاق المنتجات مع تصفية الجمهور ومعلومات مؤرخة وخطة إطلاق شخصية."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://minasat-nashr.vercel.app/",
    "imageSrc": "/projects/minasat-nashr/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Minasat\n\nAn Arabic directory of product launch platforms with audience filters, dated information, and a personal launch plan.\n\n## Features\n\n- Curated launch-platform directory\n- Audience and pricing filters\n- Build a launch plan",
      "ar": "# منصات\n\nدليل عربي لمنصات إطلاق المنتجات مع تصفية الجمهور ومعلومات مؤرخة وخطة إطلاق شخصية.\n\n## الميزات\n\n- دليل منسّق لمنصات الإطلاق\n- تصفية الجمهور والتكلفة\n- تجميع خطة إطلاق"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Curated launch-platform directory",
        "ar": "دليل منسّق لمنصات الإطلاق"
      },
      {
        "en": "Audience and pricing filters",
        "ar": "تصفية الجمهور والتكلفة"
      },
      {
        "en": "Build a launch plan",
        "ar": "تجميع خطة إطلاق"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/minasat-nashr",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-cork-shot",
    "slug": "cork-shot",
    "title": {
      "en": "CorkShot",
      "ar": "كورك شوت"
    },
    "description": {
      "en": "A flick-to-shoot puzzle game: bounce corks into targets and chain blasts across levels and challenges.",
      "ar": "لعبة ألغاز تصويب بالسحب: وجّه الفلين نحو الأهداف واستغل الارتدادات والانفجارات المتتابعة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://cork-shot.vercel.app/",
    "imageSrc": "/projects/cork-shot/cover.webp",
    "galleryImages": [
      "/projects/cork-shot/gameplay.webp"
    ],
    "contentMDX": {
      "en": "# CorkShot\n\nA flick-to-shoot puzzle game: bounce corks into targets and chain blasts across levels and challenges.\n\n## Features\n\n- Flick and bounce target puzzles\n- Levels, daily challenges, and drills\n- Level editor and watchable demo",
      "ar": "# كورك شوت\n\nلعبة ألغاز تصويب بالسحب: وجّه الفلين نحو الأهداف واستغل الارتدادات والانفجارات المتتابعة.\n\n## الميزات\n\n- ألغاز تصويب وارتداد\n- مراحل وتحديات يومية وتدريبات\n- محرر مراحل وعرض تجريبي"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "Games",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Flick and bounce target puzzles",
        "ar": "ألغاز تصويب وارتداد"
      },
      {
        "en": "Levels, daily challenges, and drills",
        "ar": "مراحل وتحديات يومية وتدريبات"
      },
      {
        "en": "Level editor and watchable demo",
        "ar": "محرر مراحل وعرض تجريبي"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/cork-shot",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-wazin",
    "slug": "wazin",
    "title": {
      "en": "Wazin",
      "ar": "وازن"
    },
    "description": {
      "en": "A personal planning workspace for understanding what your money needs to cover, based on your own records.",
      "ar": "مساحة تخطيط شخصي لفهم ما يحتاج مالك لتغطيته بناءً على سجلاتك."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://wazzin.vercel.app/",
    "imageSrc": "/projects/wazin/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Wazin\n\nA personal planning workspace for understanding what your money needs to cover, based on your own records.\n\n## Features\n\n- Personal money planning\n- Account sign-in and plan setup\n- Arabic and English",
      "ar": "# وازن\n\nمساحة تخطيط شخصي لفهم ما يحتاج مالك لتغطيته بناءً على سجلاتك.\n\n## الميزات\n\n- تخطيط المال الشخصي\n- تسجيل الدخول وإعداد الخطة\n- العربية والإنجليزية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Personal money planning",
        "ar": "تخطيط المال الشخصي"
      },
      {
        "en": "Account sign-in and plan setup",
        "ar": "تسجيل الدخول وإعداد الخطة"
      },
      {
        "en": "Arabic and English",
        "ar": "العربية والإنجليزية"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/wazin",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-old-market",
    "slug": "old-market",
    "title": {
      "en": "The Old Market",
      "ar": "السوق القديم"
    },
    "description": {
      "en": "Ten specialist market studios for comparing specifications, reviewing clear quotes, and preparing orders.",
      "ar": "عشرة استوديوهات متخصصة لمقارنة المواصفات ومراجعة عروض الأسعار الواضحة وتجهيز الطلبات."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://old-market.vercel.app/",
    "imageSrc": "/projects/old-market/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# The Old Market\n\nTen specialist market studios for comparing specifications, reviewing clear quotes, and preparing orders.\n\n## Features\n\n- Specialist product studios\n- Specification and quote review\n- Catalogue, cart, and orders",
      "ar": "# السوق القديم\n\nعشرة استوديوهات متخصصة لمقارنة المواصفات ومراجعة عروض الأسعار الواضحة وتجهيز الطلبات.\n\n## الميزات\n\n- استوديوهات منتجات متخصصة\n- مراجعة المواصفات وعروض الأسعار\n- كتالوج وسلة وطلبات"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Specialist product studios",
        "ar": "استوديوهات منتجات متخصصة"
      },
      {
        "en": "Specification and quote review",
        "ar": "مراجعة المواصفات وعروض الأسعار"
      },
      {
        "en": "Catalogue, cart, and orders",
        "ar": "كتالوج وسلة وطلبات"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/old-market",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-workbench",
    "slug": "workbench",
    "title": {
      "en": "Workbench",
      "ar": "ورك بنش"
    },
    "description": {
      "en": "One workspace for sales, support, inventory, onboarding, spending, and product feedback, with a public test workspace.",
      "ar": "مساحة واحدة للمبيعات والدعم والمخزون والتهيئة والمصروفات وآراء المستخدمين، مع مساحة تجربة عامة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://bench4work.vercel.app/",
    "imageSrc": "/projects/workbench/cover.webp",
    "galleryImages": [
      "/projects/workbench/demo.webp"
    ],
    "contentMDX": {
      "en": "# Workbench\n\nOne workspace for sales, support, inventory, onboarding, spending, and product feedback, with a public test workspace.\n\n## Features\n\n- Six operations modules\n- Shared roles and change history\n- Public demo with fictional data",
      "ar": "# ورك بنش\n\nمساحة واحدة للمبيعات والدعم والمخزون والتهيئة والمصروفات وآراء المستخدمين، مع مساحة تجربة عامة.\n\n## الميزات\n\n- ست وحدات تشغيل\n- أدوار وسجل تغييرات مشترك\n- عرض تجريبي ببيانات خيالية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Six operations modules",
        "ar": "ست وحدات تشغيل"
      },
      {
        "en": "Shared roles and change history",
        "ar": "أدوار وسجل تغييرات مشترك"
      },
      {
        "en": "Public demo with fictional data",
        "ar": "عرض تجريبي ببيانات خيالية"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/workbench",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-lab-by-lab",
    "slug": "lab-by-lab",
    "title": {
      "en": "Taalam Lab",
      "ar": "تعلم لاب"
    },
    "description": {
      "en": "Ten interactive learning labs covering measurement, probability, vectors, proofs, language, logic, and maps.",
      "ar": "عشرة معامل تعليمية تفاعلية للقياس والاحتمالات والمتجهات والبراهين واللغة والمنطق والخرائط."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://lab-by-lab.vercel.app/",
    "imageSrc": "/projects/lab-by-lab/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Taalam Lab\n\nTen interactive learning labs covering measurement, probability, vectors, proofs, language, logic, and maps.\n\n## Features\n\n- Ten bilingual learning labs\n- Visible assumptions and explanations\n- Local browser storage",
      "ar": "# تعلم لاب\n\nعشرة معامل تعليمية تفاعلية للقياس والاحتمالات والمتجهات والبراهين واللغة والمنطق والخرائط.\n\n## الميزات\n\n- عشرة معامل تعليمية باللغتين\n- افتراضات وشروحات واضحة\n- حفظ محلي في المتصفح"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Ten bilingual learning labs",
        "ar": "عشرة معامل تعليمية باللغتين"
      },
      {
        "en": "Visible assumptions and explanations",
        "ar": "افتراضات وشروحات واضحة"
      },
      {
        "en": "Local browser storage",
        "ar": "حفظ محلي في المتصفح"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/lab-by-lab",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-musharreh-elcode",
    "slug": "musharreh-elcode",
    "title": {
      "en": "Musharreh Elcode",
      "ar": "مشرّح الكود"
    },
    "description": {
      "en": "An Arabic and RTL code review lab presenting source-linked diagnoses, evidence, and verified fixes.",
      "ar": "مختبر مراجعة للكود العربي واتجاه RTL يعرض تشخيصات مرتبطة بالمصدر وأدلة وإصلاحات متحققًا منها."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://musharreh-elcode.vercel.app/",
    "imageSrc": "/projects/musharreh-elcode/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Musharreh Elcode\n\nAn Arabic and RTL code review lab presenting source-linked diagnoses, evidence, and verified fixes.\n\n## Features\n\n- Arabic and RTL review patterns\n- Code inspection lab\n- Open evaluation set and setup docs",
      "ar": "# مشرّح الكود\n\nمختبر مراجعة للكود العربي واتجاه RTL يعرض تشخيصات مرتبطة بالمصدر وأدلة وإصلاحات متحققًا منها.\n\n## الميزات\n\n- أنماط مراجعة العربية واتجاه RTL\n- مختبر لفحص الكود\n- مجموعة تقييم مفتوحة ودليل تركيب"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Arabic and RTL review patterns",
        "ar": "أنماط مراجعة العربية واتجاه RTL"
      },
      {
        "en": "Code inspection lab",
        "ar": "مختبر لفحص الكود"
      },
      {
        "en": "Open evaluation set and setup docs",
        "ar": "مجموعة تقييم مفتوحة ودليل تركيب"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/musharreh-elcode",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-radar",
    "slug": "radar",
    "title": {
      "en": "Radar",
      "ar": "الرادار"
    },
    "description": {
      "en": "A quiet daily technology reading workspace with source filters, saved items, interests, and opportunities.",
      "ar": "مساحة هادئة لقراءة نشرة التقنية اليومية مع تصفية المصادر والمحفوظات والاهتمامات والفرص."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://hanyrm-radar.vercel.app/",
    "imageSrc": "/projects/radar/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Radar\n\nA quiet daily technology reading workspace with source filters, saved items, interests, and opportunities.\n\n## Features\n\n- Four-source daily digest interface\n- Saved items, folders, and interests\n- Local personal workspace",
      "ar": "# الرادار\n\nمساحة هادئة لقراءة نشرة التقنية اليومية مع تصفية المصادر والمحفوظات والاهتمامات والفرص.\n\n## الميزات\n\n- واجهة نشرة يومية من أربعة مصادر\n- محفوظات ومجلدات واهتمامات\n- مساحة شخصية محلية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Four-source daily digest interface",
        "ar": "واجهة نشرة يومية من أربعة مصادر"
      },
      {
        "en": "Saved items, folders, and interests",
        "ar": "محفوظات ومجلدات واهتمامات"
      },
      {
        "en": "Local personal workspace",
        "ar": "مساحة شخصية محلية"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [
      {
        "en": "The daily feed was empty during the visual review; content fetching was not verified.",
        "ar": "كانت النشرة اليومية فارغة أثناء المراجعة البصرية؛ لم يتم التحقق من جلب المحتوى."
      }
    ],
    "suggestions": [],
    "source": {
      "workspace": "workspace/radar",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-last-recipe",
    "slug": "last-recipe",
    "title": {
      "en": "The Last Recipe",
      "ar": "الوصفة الأخيرة"
    },
    "description": {
      "en": "A family culinary investigation that follows a shared dish through a story of memory and discovery.",
      "ar": "تحقيق قصصي عائلي يتتبع طبقًا مشتركًا في رحلة من الذكريات والاكتشاف."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://last-recipe.vercel.app/",
    "imageSrc": "/projects/last-recipe/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# The Last Recipe\n\nA family culinary investigation that follows a shared dish through a story of memory and discovery.\n\n## Features\n\n- Story-led culinary mystery\n- Difficulty and seed controls\n- Three save slots",
      "ar": "# الوصفة الأخيرة\n\nتحقيق قصصي عائلي يتتبع طبقًا مشتركًا في رحلة من الذكريات والاكتشاف.\n\n## الميزات\n\n- لغز طهي قائم على القصة\n- اختيار الصعوبة والبذرة\n- ثلاث خانات حفظ"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "Games",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Story-led culinary mystery",
        "ar": "لغز طهي قائم على القصة"
      },
      {
        "en": "Difficulty and seed controls",
        "ar": "اختيار الصعوبة والبذرة"
      },
      {
        "en": "Three save slots",
        "ar": "ثلاث خانات حفظ"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/last-recipe",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-fihrist",
    "slug": "fihrist",
    "title": {
      "en": "Fihrist",
      "ar": "فِهرست"
    },
    "description": {
      "en": "A bookmark library for collecting links, organizing shelves, and checking which saved pages still work.",
      "ar": "مكتبة روابط لحفظ الصفحات وتنظيم الرفوف وفحص الروابط التي ما زالت تعمل."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://fihristy.vercel.app/",
    "imageSrc": "/projects/fihrist/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Fihrist\n\nA bookmark library for collecting links, organizing shelves, and checking which saved pages still work.\n\n## Features\n\n- Bookmark shelves and collections\n- Link-health review\n- Guest mode and account sync",
      "ar": "# فِهرست\n\nمكتبة روابط لحفظ الصفحات وتنظيم الرفوف وفحص الروابط التي ما زالت تعمل.\n\n## الميزات\n\n- رفوف ومجموعات روابط\n- مراجعة صحة الروابط\n- وضع ضيف ومزامنة بالحساب"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Bookmark shelves and collections",
        "ar": "رفوف ومجموعات روابط"
      },
      {
        "en": "Link-health review",
        "ar": "مراجعة صحة الروابط"
      },
      {
        "en": "Guest mode and account sync",
        "ar": "وضع ضيف ومزامنة بالحساب"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/fihrist",
      "last_reviewed": "2026-10-28"
    },
    "repository": {
      "branch": "main",
      "sync": "github",
      "github": "https://github.com/Hany-R-Mahmoud/fihrist"
    }
  },
  {
    "id": "apexyard-tools-lab",
    "slug": "tools-lab",
    "title": {
      "en": "Tools Lab",
      "ar": "مختبر الأدوات"
    },
    "description": {
      "en": "Ten local tools for text direction, cutting layouts, measurements, timecodes, printing, geometry, and route privacy.",
      "ar": "عشر أدوات محلية لاتجاه النص وتخطيط التقطيع والقياسات والتايم كود والطباعة والهندسة وخصوصية المسارات."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://lab4tools.vercel.app/",
    "imageSrc": "/projects/tools-lab/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Tools Lab\n\nTen local tools for text direction, cutting layouts, measurements, timecodes, printing, geometry, and route privacy.\n\n## Features\n\n- Ten precision utilities\n- Browser-local file processing\n- Arabic and English",
      "ar": "# مختبر الأدوات\n\nعشر أدوات محلية لاتجاه النص وتخطيط التقطيع والقياسات والتايم كود والطباعة والهندسة وخصوصية المسارات.\n\n## الميزات\n\n- عشر أدوات دقيقة\n- معالجة الملفات محليًا في المتصفح\n- العربية والإنجليزية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Ten precision utilities",
        "ar": "عشر أدوات دقيقة"
      },
      {
        "en": "Browser-local file processing",
        "ar": "معالجة الملفات محليًا في المتصفح"
      },
      {
        "en": "Arabic and English",
        "ar": "العربية والإنجليزية"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/tools-lab",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-ateleet-10",
    "slug": "ateleet-10",
    "title": {
      "en": "Atelier Ten",
      "ar": "أتيليه عشرة"
    },
    "description": {
      "en": "Ten creative studios for motion, audio, patterns, color, print, and stop-frame planning, saved locally in the browser.",
      "ar": "عشرة استوديوهات للإبداع في الحركة والصوت والنقوش والألوان والطباعة وتخطيط الكادرات، مع حفظ محلي في المتصفح."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://ateleet-10.vercel.app/",
    "imageSrc": "/projects/ateleet-10/cover.webp",
    "galleryImages": [
      "/projects/ateleet-10/studio.webp"
    ],
    "contentMDX": {
      "en": "# Atelier Ten\n\nTen creative studios for motion, audio, patterns, color, print, and stop-frame planning, saved locally in the browser.\n\n## Features\n\n- Ten creative studios\n- Studio examples and export formats\n- Local projects without file uploads",
      "ar": "# أتيليه عشرة\n\nعشرة استوديوهات للإبداع في الحركة والصوت والنقوش والألوان والطباعة وتخطيط الكادرات، مع حفظ محلي في المتصفح.\n\n## الميزات\n\n- عشرة استوديوهات إبداعية\n- أمثلة وصيغ تصدير لكل استوديو\n- مشاريع محلية دون رفع ملفات"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Ten creative studios",
        "ar": "عشرة استوديوهات إبداعية"
      },
      {
        "en": "Studio examples and export formats",
        "ar": "أمثلة وصيغ تصدير لكل استوديو"
      },
      {
        "en": "Local projects without file uploads",
        "ar": "مشاريع محلية دون رفع ملفات"
      }
    ],
    "progress": {
      "en": "Live public page reviewed and product screenshots captured on 2026-10-28.",
      "ar": "تمت مراجعة الصفحة العامة والتقاط صور حقيقية للمشروع في ٢٨ أكتوبر ٢٠٢٦."
    },
    "issues": [],
    "suggestions": [],
    "source": {
      "workspace": "workspace/ateleet-10",
      "last_reviewed": "2026-10-28"
    }
  },
  {
    "id": "apexyard-ashwai",
    "slug": "ashwai",
    "title": {
      "en": "Ashwai",
      "ar": "عشوائي"
    },
    "description": {
      "en": "A party game of unpredictable challenges, confidence and risk, with solo and shared-device play.",
      "ar": "لعبة للّمة بتحديات متغيرة وثقة ومخاطرة، للعب الفردي أو على جهاز واحد."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://ashwa2i.vercel.app/",
    "imageSrc": "/projects/ashwai/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Ashwai\n\nA party game of unpredictable challenges, confidence and risk, with solo and shared-device play.",
      "ar": "# عشوائي\n\nلعبة للّمة بتحديات متغيرة وثقة ومخاطرة، للعب الفردي أو على جهاز واحد."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-sayyad-execution-hub",
    "slug": "sayyad-execution-hub",
    "title": {
      "en": "Sayyad",
      "ar": "صيّاد"
    },
    "description": {
      "en": "A follow-up workspace for tracking leads and the next action, with email-code sign-in.",
      "ar": "مساحة لمتابعة العملاء المحتملين والخطوة الجاية، مع دخول بكود عبر البريد."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://sayyad-execution-hub.vercel.app/",
    "imageSrc": "/projects/sayyad-execution-hub/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Sayyad\n\nA follow-up workspace for tracking leads and the next action, with email-code sign-in.",
      "ar": "# صيّاد\n\nمساحة لمتابعة العملاء المحتملين والخطوة الجاية، مع دخول بكود عبر البريد."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-daftar-haraka",
    "slug": "daftar-haraka",
    "title": {
      "en": "Movement Notebook",
      "ar": "دفتر الحركة"
    },
    "description": {
      "en": "Ten bilingual tools for movement preparation, equipment notes and clear communication.",
      "ar": "عشر أدوات بالعربي والإنجليزي لتجهيز الحركة وتسجيل إعدادات الأدوات والتواصل الواضح."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://daftar-haraka.vercel.app/",
    "imageSrc": "/projects/daftar-haraka/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Movement Notebook\n\nTen bilingual tools for movement preparation, equipment notes and clear communication.",
      "ar": "# دفتر الحركة\n\nعشر أدوات بالعربي والإنجليزي لتجهيز الحركة وتسجيل إعدادات الأدوات والتواصل الواضح."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-meshwary",
    "slug": "meshwary",
    "title": {
      "en": "Meshwary",
      "ar": "مشواري"
    },
    "description": {
      "en": "A personal trip workspace for places, daily routes, packing and travel notes, with an offline library.",
      "ar": "مساحة شخصية للأماكن وخطط اليوم وتجهيز الشنطة وملاحظات السفر، بمكتبة تعمل بدون اتصال."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://mesh-wary.vercel.app/",
    "imageSrc": "/projects/meshwary/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Meshwary\n\nA personal trip workspace for places, daily routes, packing and travel notes, with an offline library.",
      "ar": "# مشواري\n\nمساحة شخصية للأماكن وخطط اليوم وتجهيز الشنطة وملاحظات السفر، بمكتبة تعمل بدون اتصال."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-productivity-tool",
    "slug": "productivity-tool",
    "title": {
      "en": "Productivity Lab",
      "ar": "معمل الإنتاجية"
    },
    "description": {
      "en": "Ten focused workshop tools for handoffs, planning and precise calculations across creative and technical work.",
      "ar": "عشر أدوات متخصصة للتسليم والتخطيط والحسابات الدقيقة في الشغل الإبداعي والتقني."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://tools4productivity.vercel.app/",
    "imageSrc": "/projects/productivity-tool/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Productivity Lab\n\nTen focused workshop tools for handoffs, planning and precise calculations across creative and technical work.",
      "ar": "# معمل الإنتاجية\n\nعشر أدوات متخصصة للتسليم والتخطيط والحسابات الدقيقة في الشغل الإبداعي والتقني."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-financial-ateleet",
    "slug": "financial-ateleet",
    "title": {
      "en": "Ledger Atelier",
      "ar": "أتيليه الدفاتر"
    },
    "description": {
      "en": "Ten bilingual recordkeeping tools for margins, fees, deposits, royalties and clear financial calculations.",
      "ar": "عشر أدوات بالعربي والإنجليزي للهوامش والرسوم والعربون والحقوق والحسابات المالية الواضحة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://financial-ateleet.vercel.app/",
    "imageSrc": "/projects/financial-ateleet/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Ledger Atelier\n\nTen bilingual recordkeeping tools for margins, fees, deposits, royalties and clear financial calculations.",
      "ar": "# أتيليه الدفاتر\n\nعشر أدوات بالعربي والإنجليزي للهوامش والرسوم والعربون والحقوق والحسابات المالية الواضحة."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-lifestyle-ateleet",
    "slug": "lifestyle-ateleet",
    "title": {
      "en": "Lifestyle Atelier",
      "ar": "دفاتر أتيليه"
    },
    "description": {
      "en": "A collection of ten craft and hobby notebooks for measurements, experiments and personal observations.",
      "ar": "مجموعة من عشر كراسات للحرف والهوايات، للقياسات والتجارب والملاحظات الشخصية."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://lifestyle-ateleet.vercel.app/",
    "imageSrc": "/projects/lifestyle-ateleet/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Lifestyle Atelier\n\nA collection of ten craft and hobby notebooks for measurements, experiments and personal observations.",
      "ar": "# دفاتر أتيليه\n\nمجموعة من عشر كراسات للحرف والهوايات، للقياسات والتجارب والملاحظات الشخصية."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-social-ateleet",
    "slug": "social-ateleet",
    "title": {
      "en": "Al Mashaa",
      "ar": "المشاع"
    },
    "description": {
      "en": "Ten small-group coordination tools for shared decisions, participation and community work.",
      "ar": "عشر أدوات لتنسيق المجموعات الصغيرة والقرارات المشتركة والمشاركة والعمل المجتمعي."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://social-ateleet.vercel.app/",
    "imageSrc": "/projects/social-ateleet/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Al Mashaa\n\nTen small-group coordination tools for shared decisions, participation and community work.",
      "ar": "# المشاع\n\nعشر أدوات لتنسيق المجموعات الصغيرة والقرارات المشتركة والمشاركة والعمل المجتمعي."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-pillar-pace",
    "slug": "pillar-pace",
    "title": {
      "en": "PillarPace",
      "ar": "توازن الأعمدة"
    },
    "description": {
      "en": "A stone-pillar balance game with difficulty levels, daily seeds, a sandbox and a watchable demo.",
      "ar": "لعبة لتوازن الأعمدة الحجرية بمستويات صعوبة وتحدٍ يومي ومساحة تجريب وعرض توضيحي."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://pillar-pace.vercel.app/",
    "imageSrc": "/projects/pillar-pace/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# PillarPace\n\nA stone-pillar balance game with difficulty levels, daily seeds, a sandbox and a watchable demo.",
      "ar": "# توازن الأعمدة\n\nلعبة لتوازن الأعمدة الحجرية بمستويات صعوبة وتحدٍ يومي ومساحة تجريب وعرض توضيحي."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-zakerat-alkholod",
    "slug": "zakerat-alkholod",
    "title": {
      "en": "Zakerat Al Kholod",
      "ar": "ذاكرة الخلود"
    },
    "description": {
      "en": "An agent-memory experiment with browser-side encryption, portable records and Arweave receipts.",
      "ar": "تجربة لذاكرة الوكلاء بتشفير داخل المتصفح وسجلات قابلة للنقل وإيصالات على Arweave."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://zakerat-alkholod.vercel.app/",
    "imageSrc": "/projects/zakerat-alkholod/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Zakerat Al Kholod\n\nAn agent-memory experiment with browser-side encryption, portable records and Arweave receipts.",
      "ar": "# ذاكرة الخلود\n\nتجربة لذاكرة الوكلاء بتشفير داخل المتصفح وسجلات قابلة للنقل وإيصالات على Arweave."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-tajheez",
    "slug": "tajheez",
    "title": {
      "en": "Tajheez",
      "ar": "تجهيز"
    },
    "description": {
      "en": "A release workbench for organizing evidence, blockers, schemas, mock data and reproducible issues.",
      "ar": "مساحة لتجهيز الإصدارات وتنظيم أدلتها وعوائقها ومخططاتها وبيانات التجربة وخطوات إعادة المشاكل."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://hanyrm-tajheez.vercel.app/",
    "imageSrc": "/projects/tajheez/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Tajheez\n\nA release workbench for organizing evidence, blockers, schemas, mock data and reproducible issues.",
      "ar": "# تجهيز\n\nمساحة لتجهيز الإصدارات وتنظيم أدلتها وعوائقها ومخططاتها وبيانات التجربة وخطوات إعادة المشاكل."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-mozakarti",
    "slug": "mozakarti",
    "title": {
      "en": "Mozakarti",
      "ar": "مذاكرتي"
    },
    "description": {
      "en": "A personal learning space with a knowledge library, study plans and scheduled flashcard reviews.",
      "ar": "مساحة تعلم شخصية بمكتبة معرفة وخطط دراسة ومراجعات كروت في مواعيدها."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://mozakartti.vercel.app/",
    "imageSrc": "/projects/mozakarti/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Mozakarti\n\nA personal learning space with a knowledge library, study plans and scheduled flashcard reviews.",
      "ar": "# مذاكرتي\n\nمساحة تعلم شخصية بمكتبة معرفة وخطط دراسة ومراجعات كروت في مواعيدها."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-mahfazti",
    "slug": "mahfazti",
    "title": {
      "en": "Mahfazti",
      "ar": "محفظتي"
    },
    "description": {
      "en": "A local budgeting workspace for available cash, upcoming commitments and money set aside for home or shop.",
      "ar": "مساحة محلية لتنظيم الكاش والالتزامات القادمة والفلوس المحجوزة للبيت أو المحل."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://mahfaztti.vercel.app/",
    "imageSrc": "/projects/mahfazti/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Mahfazti\n\nA local budgeting workspace for available cash, upcoming commitments and money set aside for home or shop.",
      "ar": "# محفظتي\n\nمساحة محلية لتنظيم الكاش والالتزامات القادمة والفلوس المحجوزة للبيت أو المحل."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-bawaba",
    "slug": "bawaba",
    "title": {
      "en": "Bawaba",
      "ar": "بوابة"
    },
    "description": {
      "en": "A visual project workspace that turns ideas, decisions, milestones and files into a shareable project story.",
      "ar": "مساحة عمل مرئية تحوّل الأفكار والقرارات والمراحل والملفات إلى قصة مشروع قابلة للمشاركة."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://the-bawaba.vercel.app/",
    "imageSrc": "/projects/bawaba/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Bawaba\n\nA visual project workspace that turns ideas, decisions, milestones and files into a shareable project story.",
      "ar": "# بوابة\n\nمساحة عمل مرئية تحوّل الأفكار والقرارات والمراحل والملفات إلى قصة مشروع قابلة للمشاركة."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-social-party-games",
    "slug": "social-party-games",
    "title": {
      "en": "Lamma Games",
      "ar": "لمة ألعاب"
    },
    "description": {
      "en": "Arabic-first party games in private rooms, including Same Brain, One Clue and Majority Pulse.",
      "ar": "ألعاب للّمة بالعربي في غرف خاصة، منها نفس الدماغ وكلمة واحدة ونبض الأغلبية."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://social-party-games.vercel.app/",
    "imageSrc": "/projects/social-party-games/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Lamma Games\n\nArabic-first party games in private rooms, including Same Brain, One Clue and Majority Pulse.",
      "ar": "# لمة ألعاب\n\nألعاب للّمة بالعربي في غرف خاصة، منها نفس الدماغ وكلمة واحدة ونبض الأغلبية."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-madar",
    "slug": "madar",
    "title": {
      "en": "Madar",
      "ar": "مَدار"
    },
    "description": {
      "en": "A calm personal workspace for daily plans, focus time, habits, weekly reflection and memory.",
      "ar": "مساحة شخصية هادئة لخطة اليوم والتركيز والعادات والمراجعة الأسبوعية والذاكرة."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://maddarr.vercel.app/",
    "imageSrc": "/projects/madar/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Madar\n\nA calm personal workspace for daily plans, focus time, habits, weekly reflection and memory.",
      "ar": "# مَدار\n\nمساحة شخصية هادئة لخطة اليوم والتركيز والعادات والمراجعة الأسبوعية والذاكرة."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-audit-tool",
    "slug": "audit-tool",
    "title": {
      "en": "One-click Audit",
      "ar": "اختبار بضغطة"
    },
    "description": {
      "en": "A website performance checker that presents mobile and desktop results with understandable Arabic next steps.",
      "ar": "أداة لفحص أداء المواقع على الموبايل والكمبيوتر، بنتائج وخطوات إصلاح مفهومة بالعربي."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://audit4tool.vercel.app/",
    "imageSrc": "/projects/audit-tool/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# One-click Audit\n\nA website performance checker that presents mobile and desktop results with understandable Arabic next steps.",
      "ar": "# اختبار بضغطة\n\nأداة لفحص أداء المواقع على الموبايل والكمبيوتر، بنتائج وخطوات إصلاح مفهومة بالعربي."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-repo-health",
    "slug": "repo-health",
    "title": {
      "en": "Repo Health",
      "ar": "صحة المشاريع"
    },
    "description": {
      "en": "A repository clinic for tracking public GitHub projects and making missing information and maintenance needs clear.",
      "ar": "عيادة لمتابعة مشاريع GitHub العامة وتوضيح المعلومات الناقصة وما يحتاج للصيانة."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://repo-health-clinic.vercel.app/",
    "imageSrc": "/projects/repo-health/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Repo Health\n\nA repository clinic for tracking public GitHub projects and making missing information and maintenance needs clear.",
      "ar": "# صحة المشاريع\n\nعيادة لمتابعة مشاريع GitHub العامة وتوضيح المعلومات الناقصة وما يحتاج للصيانة."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-growth-kit",
    "slug": "growth-kit",
    "title": {
      "en": "Growth Kit",
      "ar": "عدة النمو"
    },
    "description": {
      "en": "A project-launch toolkit for brand identity, social copy, image prompts and content planning.",
      "ar": "عدة لإطلاق المشاريع تشمل الهوية ونصوص السوشيال وبرومبتات الصور وخطة المحتوى."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://growth4kit.vercel.app/",
    "imageSrc": "/projects/growth-kit/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Growth Kit\n\nA project-launch toolkit for brand identity, social copy, image prompts and content planning.",
      "ar": "# عدة النمو\n\nعدة لإطلاق المشاريع تشمل الهوية ونصوص السوشيال وبرومبتات الصور وخطة المحتوى."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-daqiqalearn",
    "slug": "daqiqalearn",
    "title": {
      "en": "DaqiqaLearn",
      "ar": "دقيقة ليرن"
    },
    "description": {
      "en": "Arabic microlearning paths with short lessons, recall exercises and spaced reviews for everyday digital skills.",
      "ar": "مسارات تعلم مصغر بالعربي بدروس قصيرة وتمارين استرجاع ومراجعة متباعدة للمهارات الرقمية اليومية."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://daqiqalearn.vercel.app/",
    "imageSrc": "/projects/daqiqalearn/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# DaqiqaLearn\n\nArabic microlearning paths with short lessons, recall exercises and spaced reviews for everyday digital skills.",
      "ar": "# دقيقة ليرن\n\nمسارات تعلم مصغر بالعربي بدروس قصيرة وتمارين استرجاع ومراجعة متباعدة للمهارات الرقمية اليومية."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-arabic-auditor",
    "slug": "arabic-auditor",
    "title": {
      "en": "Arabic Auditor",
      "ar": "مدقق العربي"
    },
    "description": {
      "en": "A rule-based React code checker for Arabic and right-to-left interface issues, with suggested fixes and clear limits.",
      "ar": "فاحص قائم على قواعد لكود React ومشاكل العربي واتجاه الواجهة، بإصلاحات مقترحة وحدود واضحة."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://arabic-auditor.vercel.app/",
    "imageSrc": "/projects/arabic-auditor/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Arabic Auditor\n\nA rule-based React code checker for Arabic and right-to-left interface issues, with suggested fixes and clear limits.",
      "ar": "# مدقق العربي\n\nفاحص قائم على قواعد لكود React ومشاكل العربي واتجاه الواجهة، بإصلاحات مقترحة وحدود واضحة."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-agent-ledger",
    "slug": "agent-ledger",
    "title": {
      "en": "Agent Ledger",
      "ar": "دفتر الوكلاء"
    },
    "description": {
      "en": "A local ledger for recording agent sessions, costs, outcomes and lessons from Codex or Claude session files.",
      "ar": "دفتر محلي لتسجيل جلسات الوكلاء وتكاليفها ونتائجها والدروس منها، من ملفات جلسات Codex أو Claude."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://agent-daftar.vercel.app/",
    "imageSrc": "/projects/agent-ledger/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Agent Ledger\n\nA local ledger for recording agent sessions, costs, outcomes and lessons from Codex or Claude session files.",
      "ar": "# دفتر الوكلاء\n\nدفتر محلي لتسجيل جلسات الوكلاء وتكاليفها ونتائجها والدروس منها، من ملفات جلسات Codex أو Claude."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-build-brief",
    "slug": "build-brief",
    "title": {
      "en": "Build Brief",
      "ar": "كراسة البناء"
    },
    "description": {
      "en": "A local drafting table for turning a rough product idea into a structured brief for a coding agent.",
      "ar": "ترابيزة كتابة محلية لتحويل فكرة منتج مبعثرة إلى كراسة منظمة لوكيل البرمجة."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://brief2build.vercel.app/",
    "imageSrc": "/projects/build-brief/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Build Brief\n\nA local drafting table for turning a rough product idea into a structured brief for a coding agent.",
      "ar": "# كراسة البناء\n\nترابيزة كتابة محلية لتحويل فكرة منتج مبعثرة إلى كراسة منظمة لوكيل البرمجة."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-sahab-cloud-school",
    "slug": "sahab-cloud-school",
    "title": {
      "en": "Sahab Cloud School",
      "ar": "سحاب"
    },
    "description": {
      "en": "An Arabic cloud-learning guide with beginner paths, service comparisons, decision trees and a glossary.",
      "ar": "دليل عربي لتعلم الكلاود بمسارات للمبتدئين ومقارنات للخدمات وشجرات قرار وقاموس."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://sahab-cloud-school.vercel.app/",
    "imageSrc": "/projects/sahab-cloud-school/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Sahab Cloud School\n\nAn Arabic cloud-learning guide with beginner paths, service comparisons, decision trees and a glossary.",
      "ar": "# سحاب\n\nدليل عربي لتعلم الكلاود بمسارات للمبتدئين ومقارنات للخدمات وشجرات قرار وقاموس."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-pr-masry",
    "slug": "pr-masry",
    "title": {
      "en": "PR Masry",
      "ar": "PR بالمصري"
    },
    "description": {
      "en": "A pull-request and diff summarizer that explains changes, risks and commit messages in Egyptian Arabic.",
      "ar": "أداة لتلخيص طلبات الدمج وفروق الكود وشرح التغييرات والمخاطر ورسائل الكوميت بالمصري."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://pr-masry.vercel.app/",
    "imageSrc": "/projects/pr-masry/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# PR Masry\n\nA pull-request and diff summarizer that explains changes, risks and commit messages in Egyptian Arabic.",
      "ar": "# PR بالمصري\n\nأداة لتلخيص طلبات الدمج وفروق الكود وشرح التغييرات والمخاطر ورسائل الكوميت بالمصري."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-brainleague",
    "slug": "brainleague",
    "title": {
      "en": "BrainLeague",
      "ar": "دوري العقول"
    },
    "description": {
      "en": "A fantasy-trivia league with teams, questions, standings and a hosted quiz-night flow.",
      "ar": "دوري تريفيا بنظام الفانتازي، بفرق وأسئلة وترتيب وسير عمل لليلة مسابقات."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://brain4league.vercel.app/",
    "imageSrc": "/projects/brainleague/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# BrainLeague\n\nA fantasy-trivia league with teams, questions, standings and a hosted quiz-night flow.",
      "ar": "# دوري العقول\n\nدوري تريفيا بنظام الفانتازي، بفرق وأسئلة وترتيب وسير عمل لليلة مسابقات."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-seyaq",
    "slug": "seyaq",
    "title": {
      "en": "Seyaq",
      "ar": "سياق"
    },
    "description": {
      "en": "Reusable project-context packs with templates, variables and Markdown export for coding conversations.",
      "ar": "حزم سياق قابلة لإعادة الاستخدام، بقوالب ومتغيرات وتصدير Markdown لمحادثات البرمجة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://seyaq.vercel.app/",
    "imageSrc": "/projects/seyaq/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Seyaq\n\nReusable project-context packs with templates, variables and Markdown export for coding conversations.",
      "ar": "# سياق\n\nحزم سياق قابلة لإعادة الاستخدام، بقوالب ومتغيرات وتصدير Markdown لمحادثات البرمجة."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-screen-shota",
    "slug": "screen-shota",
    "title": {
      "en": "Screen Shota",
      "ar": "لقطة — Screen Shota"
    },
    "description": {
      "en": "A browser-based screenshot studio with frames, backgrounds, shadows, annotations and social-size exports.",
      "ar": "استوديو سكرين شوت داخل المتصفح بإطارات وخلفيات وظلال وتعليقات وتصدير بمقاسات السوشيال."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://screen-shota.vercel.app/",
    "imageSrc": "/projects/screen-shota/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Screen Shota\n\nA browser-based screenshot studio with frames, backgrounds, shadows, annotations and social-size exports.",
      "ar": "# لقطة — Screen Shota\n\nاستوديو سكرين شوت داخل المتصفح بإطارات وخلفيات وظلال وتعليقات وتصدير بمقاسات السوشيال."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-codebreaker",
    "slug": "codebreaker",
    "title": {
      "en": "Codebreaker",
      "ar": "فكّاكين الشيفرة"
    },
    "description": {
      "en": "A cooperative cipher game on one device, with secret keys, missions, drills and a guided tutorial.",
      "ar": "لعبة شيفرات تعاونية على جهاز واحد، بمفاتيح سرية ومهام وتمارين وتدريب موجه."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://code4breaker.vercel.app/",
    "imageSrc": "/projects/codebreaker/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Codebreaker\n\nA cooperative cipher game on one device, with secret keys, missions, drills and a guided tutorial.",
      "ar": "# فكّاكين الشيفرة\n\nلعبة شيفرات تعاونية على جهاز واحد، بمفاتيح سرية ومهام وتمارين وتدريب موجه."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-model-cost",
    "slug": "model-cost",
    "title": {
      "en": "Model Cost",
      "ar": "حاسبة"
    },
    "description": {
      "en": "An AI token-cost calculator with model comparison, dated price sources and a local cost log.",
      "ar": "حاسبة لتكلفة توكنز الذكاء الاصطناعي بمقارنة نماذج ومصادر أسعار مؤرخة وسجل تكلفة محلي."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://model-cost.vercel.app/",
    "imageSrc": "/projects/model-cost/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Model Cost\n\nAn AI token-cost calculator with model comparison, dated price sources and a local cost log.",
      "ar": "# حاسبة\n\nحاسبة لتكلفة توكنز الذكاء الاصطناعي بمقارنة نماذج ومصادر أسعار مؤرخة وسجل تكلفة محلي."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-dalel-el-models",
    "slug": "dalel-el-models",
    "title": {
      "en": "Model Guide",
      "ar": "دليل النماذج"
    },
    "description": {
      "en": "An Arabic model-selection guide with a task wizard, comparisons and explicitly dated pricing information.",
      "ar": "دليل عربي لاختيار النماذج بمعالج حسب المهمة ومقارنات ومعلومات أسعار بتاريخ واضح."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://dalel-el-models.vercel.app/",
    "imageSrc": "/projects/dalel-el-models/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Model Guide\n\nAn Arabic model-selection guide with a task wizard, comparisons and explicitly dated pricing information.",
      "ar": "# دليل النماذج\n\nدليل عربي لاختيار النماذج بمعالج حسب المهمة ومقارنات ومعلومات أسعار بتاريخ واضح."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-spygrid",
    "slug": "spygrid",
    "title": {
      "en": "SpyGrid",
      "ar": "الخلية"
    },
    "description": {
      "en": "A shared-device social-deduction game of loyal agents, hidden traitors, votes and five missions.",
      "ar": "لعبة استنتاج اجتماعي على جهاز واحد، بعملاء مخلصين وخونة سريين وتصويت وخمس مهمات."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://spygrid.vercel.app/",
    "imageSrc": "/projects/spygrid/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# SpyGrid\n\nA shared-device social-deduction game of loyal agents, hidden traitors, votes and five missions.",
      "ar": "# الخلية\n\nلعبة استنتاج اجتماعي على جهاز واحد، بعملاء مخلصين وخونة سريين وتصويت وخمس مهمات."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-icona",
    "slug": "icona",
    "title": {
      "en": "Icona",
      "ar": "أيقونة"
    },
    "description": {
      "en": "A local PWA icon workshop that prepares icon sizes, maskable previews, manifest snippets and a ZIP export.",
      "ar": "ورشة محلية لأيقونات PWA بمقاسات جاهزة ومعاينة القص وكود manifest وتصدير ZIP."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://i-cona.vercel.app/",
    "imageSrc": "/projects/icona/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Icona\n\nA local PWA icon workshop that prepares icon sizes, maskable previews, manifest snippets and a ZIP export.",
      "ar": "# أيقونة\n\nورشة محلية لأيقونات PWA بمقاسات جاهزة ومعاينة القص وكود manifest وتصدير ZIP."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-speedscholar",
    "slug": "speedscholar",
    "title": {
      "en": "SpeedScholar",
      "ar": "سباق العقول"
    },
    "description": {
      "en": "A shared-screen trivia race for two to four players, with daily practice and season championships.",
      "ar": "سباق معلومات على شاشة واحدة للاعبين إلى أربعة، بتدريب يومي وبطولات موسم."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://speedscholar.vercel.app/",
    "imageSrc": "/projects/speedscholar/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# SpeedScholar\n\nA shared-screen trivia race for two to four players, with daily practice and season championships.",
      "ar": "# سباق العقول\n\nسباق معلومات على شاشة واحدة للاعبين إلى أربعة، بتدريب يومي وبطولات موسم."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-landgrap",
    "slug": "landgrap",
    "title": {
      "en": "Lightning Island",
      "ar": "جزيرة البرق"
    },
    "description": {
      "en": "A short island-conquest game with two-versus-two battles and one-versus-one duels.",
      "ar": "لعبة قصيرة لاحتلال الجزيرة بمعارك اثنين ضد اثنين ومواجهات فردية."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://landgrap.vercel.app/",
    "imageSrc": "/projects/landgrap/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Lightning Island\n\nA short island-conquest game with two-versus-two battles and one-versus-one duels.",
      "ar": "# جزيرة البرق\n\nلعبة قصيرة لاحتلال الجزيرة بمعارك اثنين ضد اثنين ومواجهات فردية."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-laqta",
    "slug": "laqta",
    "title": {
      "en": "Laqta",
      "ar": "لقطة"
    },
    "description": {
      "en": "A local screenshot-presentation tool for launch images, with adjustable framing and social-ready PNG export.",
      "ar": "أداة محلية لتجهيز صور الإطلاق بإطارات قابلة للتعديل وتصدير PNG جاهز للسوشيال."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://laqta-wine-one.vercel.app/",
    "imageSrc": "/projects/laqta/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Laqta\n\nA local screenshot-presentation tool for launch images, with adjustable framing and social-ready PNG export.",
      "ar": "# لقطة\n\nأداة محلية لتجهيز صور الإطلاق بإطارات قابلة للتعديل وتصدير PNG جاهز للسوشيال."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-bombparty",
    "slug": "bombparty",
    "title": {
      "en": "BombParty",
      "ar": "الولعة"
    },
    "description": {
      "en": "A shared-device word game where players pass a ticking bomb and race to find matching words.",
      "ar": "لعبة كلمات على جهاز واحد، يمرر فيها اللاعبون قنبلة بتعد ويسابقون الوقت بكلمات مناسبة."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://boombparty.vercel.app/",
    "imageSrc": "/projects/bombparty/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# BombParty\n\nA shared-device word game where players pass a ticking bomb and race to find matching words.",
      "ar": "# الولعة\n\nلعبة كلمات على جهاز واحد، يمرر فيها اللاعبون قنبلة بتعد ويسابقون الوقت بكلمات مناسبة."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-storychain",
    "slug": "storychain",
    "title": {
      "en": "Storychain",
      "ar": "السلسلة المسمومة"
    },
    "description": {
      "en": "A write-draw-describe party game with a hidden saboteur, played by three to eight people on one device.",
      "ar": "لعبة كتابة ورسم ووصف بخائن سري، لثلاثة إلى ثمانية لاعبين على جهاز واحد."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://story2chain.vercel.app/",
    "imageSrc": "/projects/storychain/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Storychain\n\nA write-draw-describe party game with a hidden saboteur, played by three to eight people on one device.",
      "ar": "# السلسلة المسمومة\n\nلعبة كتابة ورسم ووصف بخائن سري، لثلاثة إلى ثمانية لاعبين على جهاز واحد."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-sakkala-studio",
    "slug": "sakkala-studio",
    "title": {
      "en": "Sakkalha",
      "ar": "سكّلها"
    },
    "description": {
      "en": "A skill-authoring studio for editing linked files, checking structure, reviewing changes and exporting skill packages.",
      "ar": "استوديو لبناء المهارات وتحرير ملفاتها المترابطة وفحص تركيبها ومراجعة التعديلات وتصدير الحزم."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://sakkalha.vercel.app/",
    "imageSrc": "/projects/sakkala-studio/cover.webp",
    "galleryImages": [],
    "contentMDX": {
      "en": "# Sakkalha\n\nA skill-authoring studio for editing linked files, checking structure, reviewing changes and exporting skill packages.",
      "ar": "# سكّلها\n\nاستوديو لبناء المهارات وتحرير ملفاتها المترابطة وفحص تركيبها ومراجعة التعديلات وتصدير الحزم."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published"
  },
  {
    "id": "apexyard-monasabati",
    "slug": "monasabati",
    "title": {
      "en": "Monasabati",
      "ar": "مناسباتي"
    },
    "description": {
      "en": "Plan gatherings with invitations, guest responses, and shared event checklists.",
      "ar": "نظّم اللمّة بالدعوات وردود الضيوف وقوائم تجهيزات مشتركة."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://monasabatti.vercel.app/",
    "imageSrc": "/projects/monasabati/cover.jpg",
    "galleryImages": [
      "/projects/monasabati/overview.jpg"
    ],
    "contentMDX": {
      "en": "# Monasabati\n\nPlan gatherings with invitations, guest responses, and shared event checklists.\n\n## Features\n\n- Invitations and guest responses\n- Shared checklists and preparations\n- Arabic and English interface",
      "ar": "# مناسباتي\n\nنظّم اللمّة بالدعوات وردود الضيوف وقوائم تجهيزات مشتركة.\n\n## الميزات\n\n- الدعوات وردود الضيوف\n- قوائم التجهيزات والتحضير المشترك\n- واجهة عربية وإنجليزية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Invitations and guest responses",
        "ar": "الدعوات وردود الضيوف"
      },
      {
        "en": "Shared checklists and preparations",
        "ar": "قوائم التجهيزات والتحضير المشترك"
      },
      {
        "en": "Arabic and English interface",
        "ar": "واجهة عربية وإنجليزية"
      }
    ],
    "progress": {
      "en": "Public interface reviewed and screenshots captured on 2026-10-29. Account and backend workflows were not tested.",
      "ar": "تمت مراجعة الواجهة العامة والتقاط صور في ٢٩ أكتوبر ٢٠٢٦. لم تُختبر مهام الحساب والخادم."
    },
    "issues": [],
    "suggestions": []
  },
  {
    "id": "apexyard-mohtaway",
    "slug": "mohtaway",
    "title": {
      "en": "Mohtaway",
      "ar": "محتواي"
    },
    "description": {
      "en": "A content workspace connecting ideas, drafts, production, publishing calendars, and a personal asset library.",
      "ar": "مساحة لصناعة المحتوى تربط الأفكار والمسودات والإنتاج وتقويم النشر ومكتبة الملفات الشخصية."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://moh-taway.vercel.app/",
    "imageSrc": "/projects/mohtaway/cover.jpg",
    "galleryImages": [
      "/projects/mohtaway/overview.jpg"
    ],
    "contentMDX": {
      "en": "# Mohtaway\n\nA content workspace connecting ideas, drafts, production, publishing calendars, and a personal asset library.\n\n## Features\n\n- Idea vault and content workflow\n- Publishing calendar\n- Personal asset library",
      "ar": "# محتواي\n\nمساحة لصناعة المحتوى تربط الأفكار والمسودات والإنتاج وتقويم النشر ومكتبة الملفات الشخصية.\n\n## الميزات\n\n- خزنة الأفكار ومراحل المحتوى\n- تقويم النشر\n- مكتبة الملفات الشخصية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Idea vault and content workflow",
        "ar": "خزنة الأفكار ومراحل المحتوى"
      },
      {
        "en": "Publishing calendar",
        "ar": "تقويم النشر"
      },
      {
        "en": "Personal asset library",
        "ar": "مكتبة الملفات الشخصية"
      }
    ],
    "progress": {
      "en": "Public interface reviewed and screenshots captured on 2026-10-29. Account and backend workflows were not tested.",
      "ar": "تمت مراجعة الواجهة العامة والتقاط صور في ٢٩ أكتوبر ٢٠٢٦. لم تُختبر مهام الحساب والخادم."
    },
    "issues": [],
    "suggestions": []
  },
  {
    "id": "apexyard-mohaki",
    "slug": "mohaki",
    "title": {
      "en": "Mohaki",
      "ar": "المحاكي"
    },
    "description": {
      "en": "Rehearse marketing messages with simulated personas and A/B comparisons before launch. Simulations are not real user research.",
      "ar": "جرّب رسائلك التسويقية مع شخصيات محاكاة ومقارنة A/B قبل الإطلاق. النتائج محاكاة وليست بحثًا مع مستخدمين حقيقيين."
    },
    "meta": {
      "en": "Vite • React • TypeScript",
      "ar": "Vite • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://mohaki-wheat.vercel.app/",
    "imageSrc": "/projects/mohaki/cover.jpg",
    "galleryImages": [
      "/projects/mohaki/overview.jpg"
    ],
    "contentMDX": {
      "en": "# Mohaki\n\nRehearse marketing messages with simulated personas and A/B comparisons before launch. Simulations are not real user research.\n\n## Features\n\n- Text and public-page inputs\n- Ten simulated personas and A/B comparison\n- Simulation history and model settings",
      "ar": "# المحاكي\n\nجرّب رسائلك التسويقية مع شخصيات محاكاة ومقارنة A/B قبل الإطلاق. النتائج محاكاة وليست بحثًا مع مستخدمين حقيقيين.\n\n## الميزات\n\n- إدخال النصوص والصفحات العامة\n- عشر شخصيات محاكاة ومقارنة A/B\n- سجل المحاكاة وإعدادات النماذج"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Vite",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Text and public-page inputs",
        "ar": "إدخال النصوص والصفحات العامة"
      },
      {
        "en": "Ten simulated personas and A/B comparison",
        "ar": "عشر شخصيات محاكاة ومقارنة A/B"
      },
      {
        "en": "Simulation history and model settings",
        "ar": "سجل المحاكاة وإعدادات النماذج"
      }
    ],
    "progress": {
      "en": "Public interface reviewed and screenshots captured on 2026-10-29. Account and backend workflows were not tested.",
      "ar": "تمت مراجعة الواجهة العامة والتقاط صور في ٢٩ أكتوبر ٢٠٢٦. لم تُختبر مهام الحساب والخادم."
    },
    "issues": [],
    "suggestions": []
  },
  {
    "id": "apexyard-hadir-remote-work",
    "slug": "hadir-remote-work",
    "title": {
      "en": "Hadir",
      "ar": "حاضر"
    },
    "description": {
      "en": "A shared workspace for distributed teams, with standups, focus rooms, time zones, retrospectives, and handoffs.",
      "ar": "مساحة للفرق عن بُعد تجمع تحديثات الفريق وغرف التركيز والمناطق الزمنية والمراجعات وتسليم المهام."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://hadir-remote-work.vercel.app/",
    "imageSrc": "/projects/hadir-remote-work/cover.jpg",
    "galleryImages": [
      "/projects/hadir-remote-work/overview.jpg"
    ],
    "contentMDX": {
      "en": "# Hadir\n\nA shared workspace for distributed teams, with standups, focus rooms, time zones, retrospectives, and handoffs.\n\n## Features\n\n- Standups, team map, and focus rooms\n- Retrospectives, action items, and handoffs\n- Onboarding and weekly digests",
      "ar": "# حاضر\n\nمساحة للفرق عن بُعد تجمع تحديثات الفريق وغرف التركيز والمناطق الزمنية والمراجعات وتسليم المهام.\n\n## الميزات\n\n- تحديثات الفريق وخريطته وغرف التركيز\n- المراجعات والإجراءات وتسليم المهام\n- تهيئة الأعضاء والملخصات الأسبوعية"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Standups, team map, and focus rooms",
        "ar": "تحديثات الفريق وخريطته وغرف التركيز"
      },
      {
        "en": "Retrospectives, action items, and handoffs",
        "ar": "المراجعات والإجراءات وتسليم المهام"
      },
      {
        "en": "Onboarding and weekly digests",
        "ar": "تهيئة الأعضاء والملخصات الأسبوعية"
      }
    ],
    "progress": {
      "en": "Public interface reviewed and screenshots captured on 2026-10-29. Account and backend workflows were not tested.",
      "ar": "تمت مراجعة الواجهة العامة والتقاط صور في ٢٩ أكتوبر ٢٠٢٦. لم تُختبر مهام الحساب والخادم."
    },
    "issues": [],
    "suggestions": []
  },
  {
    "id": "apexyard-athar-nonprofit",
    "slug": "athar-nonprofit",
    "title": {
      "en": "Athar",
      "ar": "أثر"
    },
    "description": {
      "en": "A nonprofit workspace connecting programs, grants, volunteers, beneficiaries, and evidence for impact reporting.",
      "ar": "مساحة للجمعيات تربط البرامج والمنح والمتطوعين والمستفيدين وأدلة تقارير الأثر."
    },
    "meta": {
      "en": "TanStack Start • React • TypeScript",
      "ar": "TanStack Start • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://athar-nonprofit.vercel.app/",
    "imageSrc": "/projects/athar-nonprofit/cover.jpg",
    "galleryImages": [
      "/projects/athar-nonprofit/overview.jpg"
    ],
    "contentMDX": {
      "en": "# Athar\n\nA nonprofit workspace connecting programs, grants, volunteers, beneficiaries, and evidence for impact reporting.\n\n## Features\n\n- Programs, grants, and volunteer coordination\n- Beneficiaries and documented volunteer hours\n- Impact packages and board follow-ups",
      "ar": "# أثر\n\nمساحة للجمعيات تربط البرامج والمنح والمتطوعين والمستفيدين وأدلة تقارير الأثر.\n\n## الميزات\n\n- البرامج والمنح وتنسيق المتطوعين\n- المستفيدون وساعات التطوع الموثقة\n- حزم الأثر ومتابعة قرارات المجلس"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "TanStack Start",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Programs, grants, and volunteer coordination",
        "ar": "البرامج والمنح وتنسيق المتطوعين"
      },
      {
        "en": "Beneficiaries and documented volunteer hours",
        "ar": "المستفيدون وساعات التطوع الموثقة"
      },
      {
        "en": "Impact packages and board follow-ups",
        "ar": "حزم الأثر ومتابعة قرارات المجلس"
      }
    ],
    "progress": {
      "en": "Public interface reviewed and screenshots captured on 2026-10-29. Account and backend workflows were not tested.",
      "ar": "تمت مراجعة الواجهة العامة والتقاط صور في ٢٩ أكتوبر ٢٠٢٦. لم تُختبر مهام الحساب والخادم."
    },
    "issues": [],
    "suggestions": []
  },
  {
    "id": "apexyard-studio-crm",
    "slug": "studio-crm",
    "title": {
      "en": "StudioCRM",
      "ar": "ستوديو CRM"
    },
    "description": {
      "en": "A bilingual sales CRM for small teams to manage companies, contacts, deals, tasks, follow-ups, and sales reports.",
      "ar": "نظام مبيعات بالعربية والإنجليزية للفرق الصغيرة لإدارة الشركات وجهات الاتصال والصفقات والمهام والمتابعات وتقارير المبيعات."
    },
    "meta": {
      "en": "Next.js • React • TypeScript",
      "ar": "Next.js • React • TypeScript"
    },
    "category": "Web",
    "client": {
      "en": "Independent",
      "ar": "مستقل"
    },
    "role": {
      "en": "Founder & Builder",
      "ar": "المؤسس والمطور"
    },
    "year": "2026",
    "liveUrl": "https://cee-arr-emm.vercel.app/",
    "imageSrc": "/projects/studio-crm/cover.jpg",
    "galleryImages": [],
    "contentMDX": {
      "en": "# StudioCRM\n\nA bilingual sales CRM for small teams to manage companies, contacts, deals, tasks, follow-ups, and sales reports.\n\n## Features\n\n- Companies, contacts, deals, and tasks\n- Follow-up preparation and sales reports\n- CSV import/export and organization permissions",
      "ar": "# ستوديو CRM\n\nنظام مبيعات بالعربية والإنجليزية للفرق الصغيرة لإدارة الشركات وجهات الاتصال والصفقات والمهام والمتابعات وتقارير المبيعات.\n\n## الميزات\n\n- الشركات وجهات الاتصال والصفقات والمهام\n- تجهيز المتابعات وتقارير المبيعات\n- استيراد وتصدير CSV وصلاحيات المؤسسة"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "in-progress"
    ],
    "status": "in-progress",
    "stage": "published",
    "features": [
      {
        "en": "Companies, contacts, deals, and tasks",
        "ar": "الشركات وجهات الاتصال والصفقات والمهام"
      },
      {
        "en": "Follow-up preparation and sales reports",
        "ar": "تجهيز المتابعات وتقارير المبيعات"
      },
      {
        "en": "CSV import/export and organization permissions",
        "ar": "استيراد وتصدير CSV وصلاحيات المؤسسة"
      }
    ],
    "progress": {
      "en": "Public sign-in screenshot captured on 2026-10-29. Features described from project documentation; authenticated workflows were not tested.",
      "ar": "تم تصوير صفحة الدخول في ٢٩ أكتوبر ٢٠٢٦. وصف الميزات من توثيق المشروع؛ لم تُختبر المهام داخل الحساب."
    },
    "issues": [],
    "suggestions": []
  }
] satisfies Project[];
