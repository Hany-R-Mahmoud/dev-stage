import type { Profile, Project } from '../types';

export const PORTFOLIO_PROFILE = {
  "name": {
    "en": "Hany Mahmoud",
    "ar": "هاني"
  },
  "title": {
    "en": "Software Engineer\nAgentic coding\nReact Native, Next.js & TypeScript\nFintech, Secure Auth & AI-Assisted Development",
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
  "avatar": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EHR%3C%2Ftext%3E%3C%2Fsvg%3E",
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
    "id": "apexyard-bawaba",
    "slug": "bawaba",
    "title": {
      "en": "bawaba",
      "ar": "bawaba"
    },
    "description": {
      "en": "A bilingual (Arabic/English, RTL/LTR) creator portfolio + project workspace.",
      "ar": "A bilingual (Arabic/English, RTL/LTR) creator portfolio + project workspace."
    },
    "meta": {
      "en": "Next.js • React • TypeScript • Supabase • Tailwind",
      "ar": "Next.js • React • TypeScript • Supabase • Tailwind"
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
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EBA%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# bawaba\n\nA bilingual (Arabic/English, RTL/LTR) creator portfolio + project workspace.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, React, TypeScript, Supabase, Tailwind\n\n## Features\n\n- Framework: Next.js 16 App Router, React 19, TypeScript strict.\n- Database: Supabase Postgres with RLS policies (see `supabase/schema.sql`).\n- Auth: Clerk with `clerkMiddleware()` protecting `/dashboard/` and\n- Design: dark-first, OKLCH tokens in `app/globals.css` (Tailwind v4\n- RTL: `LanguageProvider` (React Context) toggles `<html dir>` between\n- i18n: bilingual dictionaries in `lib/i18n/dictionaries/{ar,en}.ts` with\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document.",
      "ar": "# bawaba\n\nA bilingual (Arabic/English, RTL/LTR) creator portfolio + project workspace.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Web\n- Tech stack: Next.js, React, TypeScript, Supabase, Tailwind\n\n## Features\n\n- Framework: Next.js 16 App Router, React 19, TypeScript strict.\n- Database: Supabase Postgres with RLS policies (see `supabase/schema.sql`).\n- Auth: Clerk with `clerkMiddleware()` protecting `/dashboard/` and\n- Design: dark-first, OKLCH tokens in `app/globals.css` (Tailwind v4\n- RTL: `LanguageProvider` (React Context) toggles `<html dir>` between\n- i18n: bilingual dictionaries in `lib/i18n/dictionaries/{ar,en}.ts` with\n\n## Progress\n\nClassified as in progress by Dev Stage; implementation and scope are still evolving.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Record the next milestone and known blockers in this portfolio document."
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind",
      "in-progress"
    ],
    "status": "in-progress",
    "features": [
      {
        "en": "Framework: Next.js 16 App Router, React 19, TypeScript strict.",
        "ar": "Framework: Next.js 16 App Router, React 19, TypeScript strict."
      },
      {
        "en": "Database: Supabase Postgres with RLS policies (see `supabase/schema.sql`).",
        "ar": "Database: Supabase Postgres with RLS policies (see `supabase/schema.sql`)."
      },
      {
        "en": "Auth: Clerk with `clerkMiddleware()` protecting `/dashboard/` and",
        "ar": "Auth: Clerk with `clerkMiddleware()` protecting `/dashboard/` and"
      },
      {
        "en": "Design: dark-first, OKLCH tokens in `app/globals.css` (Tailwind v4",
        "ar": "Design: dark-first, OKLCH tokens in `app/globals.css` (Tailwind v4"
      },
      {
        "en": "RTL: `LanguageProvider` (React Context) toggles `<html dir>` between",
        "ar": "RTL: `LanguageProvider` (React Context) toggles `<html dir>` between"
      },
      {
        "en": "i18n: bilingual dictionaries in `lib/i18n/dictionaries/{ar,en}.ts` with",
        "ar": "i18n: bilingual dictionaries in `lib/i18n/dictionaries/{ar,en}.ts` with"
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
      "github": "https://github.com/Hany-R-Mahmoud/bawaba"
    },
    "source": {
      "workspace": "workspace/bawaba",
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
    "imageSrc": "https://ik.imagekit.io/hrim/images/focus-flow/focus-flow1.png",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/focus-flow/focus-flow2.png",
      "https://ik.imagekit.io/hrim/images/focus-flow/focus-flow3.png",
      "https://ik.imagekit.io/hrim/images/focus-flow/focus-flow4.png",
      "https://ik.imagekit.io/hrim/images/focus-flow/focus-flow5.png"
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
    "id": "apexyard-minarets_of_cairo",
    "slug": "minarets_of_cairo",
    "title": {
      "en": "minarets_of_cairo",
      "ar": "minarets_of_cairo"
    },
    "description": {
      "en": "Minarets of Cairo is a bilingual English/Arabic field guide to Cairo's Islamic heritage. The React app presents monuments, periods, stories, walks, maps, comparisons, and personal itinerary/notebook tools through an Express + tRPC server.",
      "ar": "Minarets of Cairo is a bilingual English/Arabic field guide to Cairo's Islamic heritage. The React app presents monuments, periods, stories, walks, maps, comparisons, and personal itinerary/notebook tools through an Express + tRPC server."
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
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EMOC%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# minarets_of_cairo\n\nMinarets of Cairo is a bilingual English/Arabic field guide to Cairo's Islamic heritage. The React app presents monuments, periods, stories, walks, maps, comparisons, and personal itinerary/notebook tools through an Express + tRPC server.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Project structure\n- Local development\n- AI agent guide\n- Team decisions\n- ImageKit media workflow\n- Database notes\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# minarets_of_cairo\n\nMinarets of Cairo is a bilingual English/Arabic field guide to Cairo's Islamic heritage. The React app presents monuments, periods, stories, walks, maps, comparisons, and personal itinerary/notebook tools through an Express + tRPC server.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Project structure\n- Local development\n- AI agent guide\n- Team decisions\n- ImageKit media workflow\n- Database notes\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": true,
    "tags": [
      "Next.js",
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
      "github": "https://github.com/Hany-R-Mahmoud/minarates-cairo"
    },
    "source": {
      "workspace": "workspace/minarets_of_cairo",
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
      "en": "A project managed in the Dev Stage workspace.",
      "ar": "A project managed in the Dev Stage workspace."
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
    "liveUrl": "https://js2next.vercel.app/",
    "imageSrc": "https://ik.imagekit.io/hrim/images/js2next/js2next1.png?updatedAt=1785375141944",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/js2next/js2next2.png?updatedAt=1785375140517",
      "https://ik.imagekit.io/hrim/images/js2next/js2next3.png?updatedAt=1785375140760",
      "https://ik.imagekit.io/hrim/images/js2next/js2next4.png?updatedAt=1785375141166",
      "https://ik.imagekit.io/hrim/images/js2next/js2next5.png?updatedAt=1785375141467",
      "https://ik.imagekit.io/hrim/images/js2next/js2next6.png?updatedAt=1785375140980"
    ],
    "contentMDX": {
      "en": "# js2next\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- 79 source-backed learning packets with three-level learner guidance and Egyptian Arabic notes.\n- 632 assessment questions with code-first practice coverage for coding and hybrid tracks.\n\n## Progress\n\nFull content rewrite applied across the packet source, Markdown previews, and shared question bank; production build passes.\n\n## Issues / troubles\n\n- 205 source claims remain pending human review; rewritten content remains draft and unpublished.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# js2next\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- 79 حزمة تعليمية موثقة مع إرشاد لثلاثة مستويات وملاحظات بالعربي المصري.\n- 632 سؤال تقييم مع تغطية عملية تبدأ بالكود لمسارات البرمجة والمسارات الهجينة.\n\n## Progress\n\nتم تطبيق إعادة كتابة كاملة على مصادر الحزم ومعاينات Markdown وبنك الأسئلة؛ وبناء الإنتاج يمر بنجاح.\n\n## Issues / troubles\n\n- لا تزال 205 مطالبة مصدرية في انتظار المراجعة البشرية؛ والمحتوى المعاد كتابته مسودة وغير منشور.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": true,
    "tags": [
      "Next.js",
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
    "id": "apexyard-new-etamini",
    "slug": "new-etamini",
    "title": {
      "en": "Etamini",
      "ar": "Etamini"
    },
    "description": {
      "en": "A project managed in the Dev Stage workspace.",
      "ar": "A project managed in the Dev Stage workspace."
    },
    "meta": {
      "en": "Vite • React • TypeScript • Tailwind • Capacitor • Vitest",
      "ar": "Vite • React • TypeScript • Tailwind • Capacitor • Vitest"
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
    "imageSrc": "https://ik.imagekit.io/hrim/images/etamini/etamini1.png?updatedAt=1785378921365",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/etamini/etamini2.png?updatedAt=1785378921423",
      "https://ik.imagekit.io/hrim/images/etamini/etamini3.png?updatedAt=1785378920690",
      "https://ik.imagekit.io/hrim/images/etamini/etamini4.png?updatedAt=1785378921697"
    ],
    "contentMDX": {
      "en": "# Etamini\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Tailwind, Capacitor, Vitest\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# Etamini\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Vite, React, TypeScript, Tailwind, Capacitor, Vitest\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
    },
    "isPublished": true,
    "featured": true,
    "tags": [
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
      "github": "https://github.com/Hany-R-Mahmoud/new-etamini"
    },
    "source": {
      "workspace": "workspace/new-etamini",
      "last_reviewed": "2026-07-29"
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
    "imageSrc": "https://ik.imagekit.io/hrim/images/yahya/yahya1.png",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/yahya/yahya2.png",
      "https://ik.imagekit.io/hrim/images/yahya/yahya3.png",
      "https://ik.imagekit.io/hrim/images/yahya/yahya4.png"
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
    "id": "apexyard-skills-agency",
    "slug": "skills-agency",
    "title": {
      "en": "skills-agency",
      "ar": "skills-agency"
    },
    "description": {
      "en": "Next.js 16 + App Router scaffold for The Agency v2, built with TypeScript, Ant Design, SCSS modules, and spec-kit initialization for both Codex and OpenCode workflows.",
      "ar": "Next.js 16 + App Router scaffold for The Agency v2, built with TypeScript, Ant Design, SCSS modules, and spec-kit initialization for both Codex and OpenCode workflows."
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
    "imageSrc": "https://ik.imagekit.io/hrim/images/skills-agency/skills-agency1.png?updatedAt=1785378533772",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/skills-agency/skills-agency2.png?updatedAt=1785378535198",
      "https://ik.imagekit.io/hrim/images/skills-agency/skills-agency3.png?updatedAt=1785378534959",
      "https://ik.imagekit.io/hrim/images/skills-agency/skills-agency4.png?updatedAt=1785378533142"
    ],
    "contentMDX": {
      "en": "# skills-agency\n\nNext.js 16 + App Router scaffold for The Agency v2, built with TypeScript, Ant Design, SCSS modules, and spec-kit initialization for both Codex and OpenCode workflows.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, React, TypeScript\n\n## Features\n\n- spec-kit (`.specify`, `.agents`, `.opencode`)\n- `src/app`: app routes and root layout\n- `src/components`: layout, department, agent, and shared UI components\n- `src/data/skills.json`: starter agency data\n- `src/lib`: types, utilities, and future audio placeholder\n- `src/styles`: global theme tokens and Ant Design config\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# skills-agency\n\nNext.js 16 + App Router scaffold for The Agency v2, built with TypeScript, Ant Design, SCSS modules, and spec-kit initialization for both Codex and OpenCode workflows.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, React, TypeScript\n\n## Features\n\n- spec-kit (`.specify`, `.agents`, `.opencode`)\n- `src/app`: app routes and root layout\n- `src/components`: layout, department, agent, and shared UI components\n- `src/data/skills.json`: starter agency data\n- `src/lib`: types, utilities, and future audio placeholder\n- `src/styles`: global theme tokens and Ant Design config\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
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
    "id": "apexyard-spec-flow",
    "slug": "spec-flow",
    "title": {
      "en": "Spec Flow AI",
      "ar": "Spec Flow AI"
    },
    "description": {
      "en": "<div align=\"center\"> <img src=\"./artifacts/specflow-ai/public/favicon.svg\" alt=\"SpecFlow AI logo\" width=\"88\" /> <h1>SpecFlow AI</h1> <p><strong>From rough idea to review-ready stories.</strong></p> <p> SpecFlow AI turns scattered product input into a guided workflow for breakdown",
      "ar": "<div align=\"center\"> <img src=\"./artifacts/specflow-ai/public/favicon.svg\" alt=\"SpecFlow AI logo\" width=\"88\" /> <h1>SpecFlow AI</h1> <p><strong>From rough idea to review-ready stories.</strong></p> <p> SpecFlow AI turns scattered product input into a guided workflow for breakdown"
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
    "imageSrc": "https://ik.imagekit.io/hrim/images/spec-flo/spec-flow1.png",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/spec-flo/spec-flo2.png",
      "https://ik.imagekit.io/hrim/images/spec-flow3.png",
      "https://ik.imagekit.io/hrim/images/spec-flow4.png"
    ],
    "contentMDX": {
      "en": "# Spec Flow AI\n\n<div align=\"center\"> <img src=\"./artifacts/specflow-ai/public/favicon.svg\" alt=\"SpecFlow AI logo\" width=\"88\" /> <h1>SpecFlow AI</h1> <p><strong>From rough idea to review-ready stories.</strong></p> <p> SpecFlow AI turns scattered product input into a guided workflow for breakdown\n\n## Project snapshot\n\n- Status: showcase\n- Category: Tools\n- Tech stack: TypeScript\n\n## Features\n\n- Public landing experience for explaining the product and routing users into the app\n- Authenticated web app for running breakdown workflows\n- Express API server for auth-scoped application behavior\n- Shared API contracts and generated client packages\n- Shared database schema package for the Supabase-hosted Postgres runtime\n- Repo-owned docs in `docs/`\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# Spec Flow AI\n\n<div align=\"center\"> <img src=\"./artifacts/specflow-ai/public/favicon.svg\" alt=\"SpecFlow AI logo\" width=\"88\" /> <h1>SpecFlow AI</h1> <p><strong>From rough idea to review-ready stories.</strong></p> <p> SpecFlow AI turns scattered product input into a guided workflow for breakdown\n\n## Project snapshot\n\n- Status: showcase\n- Category: Tools\n- Tech stack: TypeScript\n\n## Features\n\n- Public landing experience for explaining the product and routing users into the app\n- Authenticated web app for running breakdown workflows\n- Express API server for auth-scoped application behavior\n- Shared API contracts and generated client packages\n- Shared database schema package for the Supabase-hosted Postgres runtime\n- Repo-owned docs in `docs/`\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
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
    "id": "apexyard-yalla-goal",
    "slug": "yalla-goal",
    "title": {
      "en": "yalla-goal",
      "ar": "yalla-goal"
    },
    "description": {
      "en": "GoalReviewBase — turn quarterly goals into measurable outcomes with weekly check-ins, confidence scoring, evidence attachments, and progress charts. Local-first personal productivity.",
      "ar": "GoalReviewBase — turn quarterly goals into measurable outcomes with weekly check-ins, confidence scoring, evidence attachments, and progress charts. Local-first personal productivity."
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
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EYG%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# yalla-goal\n\nGoalReviewBase — turn quarterly goals into measurable outcomes with weekly check-ins, confidence scoring, evidence attachments, and progress charts. Local-first personal productivity.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Unknown / verify\n\n## Progress\n\nStatus recorded as in-progress.\n\n## Issues / troubles\n\n- Unknown / verify\n\n## Suggested next steps\n\n- Unknown / verify",
      "ar": "# yalla-goal\n\nGoalReviewBase — turn quarterly goals into measurable outcomes with weekly check-ins, confidence scoring, evidence attachments, and progress charts. Local-first personal productivity.\n\n## Project snapshot\n\n- Status: in-progress\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Unknown / verify\n\n## Progress\n\nStatus recorded as in-progress.\n\n## Issues / troubles\n\n- Unknown / verify\n\n## Suggested next steps\n\n- Unknown / verify"
    },
    "isPublished": true,
    "featured": false,
    "tags": [
      "in-progress"
    ],
    "status": "in-progress",
    "features": [],
    "progress": {
      "en": "Status recorded as in-progress.",
      "ar": "Status recorded as in-progress."
    },
    "issues": [],
    "suggestions": []
  },
  {
    "id": "apexyard-al-rawi",
    "slug": "al-rawi",
    "title": {
      "en": "al-rawi",
      "ar": "al-rawi"
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
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EAR%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# al-rawi\n\nAl-Rawi is a bilingual, local-first RSS reader. Feed subscriptions and preferences stay in the browser; fresh articles are fetched into memory and discarded when the session ends.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, React, TypeScript, Tailwind\n\n## Features\n\n- Next.js App Router, TypeScript, Tailwind CSS\n- LocalStorage for feed URLs, folders, and OPML-compatible subscriptions\n- Stateless Next.js routes for public RSS and article extraction\n- `rss-parser`, `iconv-lite`, `@mozilla/readability`, and `jsdom`\n- Only feed subscriptions are persisted locally.\n- Article lists and extracted article HTML are memory-only.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# al-rawi\n\nAl-Rawi is a bilingual, local-first RSS reader. Feed subscriptions and preferences stay in the browser; fresh articles are fetched into memory and discarded when the session ends.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, React, TypeScript, Tailwind\n\n## Features\n\n- Next.js App Router, TypeScript, Tailwind CSS\n- LocalStorage for feed URLs, folders, and OPML-compatible subscriptions\n- Stateless Next.js routes for public RSS and article extraction\n- `rss-parser`, `iconv-lite`, `@mozilla/readability`, and `jsdom`\n- Only feed subscriptions are persisted locally.\n- Article lists and extracted article HTML are memory-only.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n- No GitHub remote is configured; updates remain local.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
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
    "id": "apexyard-dev2ops",
    "slug": "dev2ops",
    "title": {
      "en": "dev2ops",
      "ar": "dev2ops"
    },
    "description": {
      "en": "dev2ops is a responsive React learning game for practical DevOps, SRE, infrastructure, and platform skills. Learners inspect and repair deterministic virtual systems in a browser-simulated terminal; learner commands never execute on the host or a real infrastructure service.",
      "ar": "dev2ops is a responsive React learning game for practical DevOps, SRE, infrastructure, and platform skills. Learners inspect and repair deterministic virtual systems in a browser-simulated terminal; learner commands never execute on the host or a real infrastructure service."
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
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EDE%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# dev2ops\n\ndev2ops is a responsive React learning game for practical DevOps, SRE, infrastructure, and platform skills. Learners inspect and repair deterministic virtual systems in a browser-simulated terminal; learner commands never execute on the host or a real infrastructure service.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Project Structure\n- Local Development\n- AI Agent Guide\n- Team Decisions\n- No CI workflow, container definition, deployment manifest, or committed environment example was found. Verify deployment-specific setup before release.\n- Project Structure\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# dev2ops\n\ndev2ops is a responsive React learning game for practical DevOps, SRE, infrastructure, and platform skills. Learners inspect and repair deterministic virtual systems in a browser-simulated terminal; learner commands never execute on the host or a real infrastructure service.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Project Structure\n- Local Development\n- AI Agent Guide\n- Team Decisions\n- No CI workflow, container definition, deployment manifest, or committed environment example was found. Verify deployment-specific setup before release.\n- Project Structure\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
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
        "en": "No CI workflow, container definition, deployment manifest, or committed environment example was found. Verify deployment-specific setup before release.",
        "ar": "No CI workflow, container definition, deployment manifest, or committed environment example was found. Verify deployment-specific setup before release."
      },
      {
        "en": "Project Structure",
        "ar": "Project Structure"
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
      "github": "https://github.com/Hany-R-Mahmoud/dev2ops"
    },
    "source": {
      "workspace": "workspace/dev2ops",
      "last_reviewed": "2026-07-29"
    }
  },
  {
    "id": "apexyard-fihrist",
    "slug": "fihrist",
    "title": {
      "en": "fihrist",
      "ar": "fihrist"
    },
    "description": {
      "en": "A project managed in the Dev Stage workspace.",
      "ar": "A project managed in the Dev Stage workspace."
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
    "imageSrc": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20750%22%3E%3Crect%20width%3D%221200%22%20height%3D%22750%22%20fill%3D%22%231A1A1A%22%2F%3E%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%221136%22%20height%3D%22686%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%223%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22410%22%20fill%3D%22%23F4F2ED%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%22180%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%3EFI%3C%2Ftext%3E%3C%2Fsvg%3E",
    "galleryImages": [],
    "contentMDX": {
      "en": "# fihrist\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# fihrist\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Web\n- Tech stack: Next.js, Vite, React, TypeScript, Tailwind, Vitest\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
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
      "github": "https://github.com/Hany-R-Mahmoud/fihrist"
    },
    "source": {
      "workspace": "workspace/fihrist",
      "last_reviewed": "2026-07-29"
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
    "id": "apexyard-masar-ci",
    "slug": "masar-ci",
    "title": {
      "en": "masar-ci",
      "ar": "masar-ci"
    },
    "description": {
      "en": "A project managed in the Dev Stage workspace.",
      "ar": "A project managed in the Dev Stage workspace."
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
    "imageSrc": "https://ik.imagekit.io/hrim/images/masar-ci/masar-ci1.png?updatedAt=1785378253740",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/masar-ci/masar-ci2.png?updatedAt=1785378253551"
    ],
    "contentMDX": {
      "en": "# masar-ci\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available.",
      "ar": "# masar-ci\n\nA project managed in the Dev Stage workspace.\n\n## Project snapshot\n\n- Status: showcase\n- Category: Tools\n- Tech stack: Not detected\n\n## Features\n\n- Current feature inventory: Unknown / verify.\n\n## Progress\n\nClassified as showcase-ready by Dev Stage; this snapshot reflects the current repository evidence.\n\n## Issues / troubles\n\n- No application manifest was detected in the workspace.\n- No test command is declared in package.json.\n- No conventional test directory was detected.\n\n## Suggested next steps\n\n- Add a focused automated test command for the highest-risk behavior.\n- Add reviewed screenshots and a fuller case study when visual evidence is available."
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
    "imageSrc": "https://ik.imagekit.io/hrim/images/wajba/wajba1.png",
    "galleryImages": [
      "https://ik.imagekit.io/hrim/images/wajba/wajba2.png",
      "https://ik.imagekit.io/hrim/images/wajba/wajba3.png",
      "https://ik.imagekit.io/hrim/images/wajba/wajba4.png",
      "https://ik.imagekit.io/hrim/images/wajba/wajba5.png",
      "https://ik.imagekit.io/hrim/images/wajba/wajba6.png"
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
  }
] satisfies Project[];
