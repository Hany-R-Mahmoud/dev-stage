import { Project, Profile } from '../types';

export const INITIAL_PROFILE: Profile = {
  name: {
    en: "Hany",
    ar: "هاني"
  },
  title: {
    en: "Creative Technologist & Lead Designer",
    ar: "مبتكر تقني ومصمم رئيسي"
  },
  bio: {
    en: "Founder of Hany Lab. Specializing in bilingual digital experience design, modern web architecture, and interactive design systems.",
    ar: "مؤسس هاني لاب. متخصص في تصميم التجارب الرقمية ثنائية اللغة، وهندسة الويب الحديثة، وأنظمة التصميم التفاعلية."
  },
  location: {
    en: "Global • Middle East",
    ar: "عالمي • الشرق الأوسط"
  },
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  email: "contact@hanylab.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  behance: "https://behance.net",
  skills: ["Bilingual UI/UX", "RTL Design Systems", "React / Next.js", "Typography", "Motion Design", "Design Tokens"]
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "riyadh-fintech-superapp",
    title: {
      en: "Namiq Financial SuperApp",
      ar: "تطبيق نامق المالي الفائق"
    },
    meta: {
      en: "Fintech • Mobile UI/UX",
      ar: "تقنية مالية • تصميم واجهات"
    },
    description: {
      en: "A seamless bilingual digital banking platform designed for Saudi Arabia's booming fintech ecosystem with native micro-interactions.",
      ar: "منصة مصرفية رقمية ثنائية اللغة مصممة لمنظومة التقنية المالية الواعدة في المملكة العربية السعودية مع تفاعلات دقيقة دقيقة."
    },
    category: "UI/UX",
    client: {
      en: "Namiq Capital Riyadh",
      ar: "كابيتال نامق الرياض"
    },
    role: {
      en: "Principal Product Designer",
      ar: "مصمم منتجات رئيسي"
    },
    year: "2025",
    imageSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    ],
    isPublished: true,
    featured: true,
    tags: ["Fintech", "RTL/LTR", "iOS", "Design System"],
    contentMDX: {
      en: `
# Namiq Financial SuperApp

## Executive Overview
Namiq is a next-generation wealth management and digital banking solution built specifically for users across GCC markets. The core challenge was handling multi-currency balances and complex Arabic financial typography on small mobile screens.

### Design Highlights
- **Bi-directional Layout Grid**: Crafted dynamic grid systems that swap gracefully between LTR (English) and RTL (Arabic) without compromising typographic hierarchy.
- **Custom Kufic & Naskh Numerals**: Designed custom numerals for high legibility in dark mode and high-contrast environments.
- **Security & Micro-interactions**: Smooth biometric authentication and haptic feedback loops.

\`\`\`tsx
// Design System Token Mirror Example
const spacingToken = {
  inlineStart: isRTL ? 'paddingRight' : 'paddingLeft',
  inlineEnd: isRTL ? 'paddingLeft' : 'paddingRight',
};
\`\`\`
`,
      ar: `
# تطبيق نامق المالي الفائق

## نظرة عامة
تطبيق "نامق" هو حل إداري مالي ومصرفي رقمي صُمّم خصيصاً للمستخدمين في دول مجلس التعاون الخليجي. كان التحدي الرئيسي يتلخص في التعامل مع العملات المتعددة والخطوط المالية العربية المعقدة على الشاشات الصغيرة.

### أبرز سمات التصميم
- **شبكة تخطيط ثنائية الاتجاه**: ابتكار نظام شبكي ديناميكي ينتقل بسلاسة بين الاتجاهين العربي والإنجليزي دون التأثير على التراتبية البصرية.
- **أرقام كوفية ونسخية مخصصة**: تصميم أرقام واضحة ومقروءة في النمط الداكن والبيئات عالية التباين.
- **تفاعلات دقيقة وأمان فائق**: تجربة توثيق حيوي سلسة مع استجابة لمسية معززة.
`
    }
  },
  {
    id: "proj-2",
    slug: "dubai-design-district-rebrand",
    title: {
      en: "d3 Cultural Identity & Portal",
      ar: "الهوية الثقافية لبوابة دبي للتصميم"
    },
    meta: {
      en: "Branding • Web Platform",
      ar: "هوية بصرية • منصة ويب"
    },
    description: {
      en: "Visual identity system and interactive digital experience celebrating Middle Eastern contemporary art and architecture.",
      ar: "نظام هوية بصرية وتجربة رقمية تفاعلية تحتفي بالفن المعاصر والتصميم المعماري في الشرق الأوسط."
    },
    category: "Branding",
    client: {
      en: "Dubai Design District (d3)",
      ar: "حي دبي للتصميم"
    },
    role: {
      en: "Creative Director",
      ar: "مدير إبداعي"
    },
    year: "2025",
    imageSrc: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
    ],
    isPublished: true,
    featured: true,
    tags: ["Branding", "3D Art", "Web Architecture"],
    contentMDX: {
      en: `
# d3 Cultural Identity & Portal

A comprehensive digital gateway connecting international creators with local Middle Eastern artisans. Built with high-speed WebGL canvas interactions and fluid scroll narratives.

### Core Deliverables
1. **Interactive Directory**: Search through 500+ design studios in Dubai.
2. **Exhibition Scheduler**: Real-time RSVP and ticketing system.
3. **Typography Fusion**: Custom typography pairing IBM Plex Arabic with Syne Display.
`,
      ar: `
# الهوية الثقافية لبوابة دبي للتصميم

بوابة رقمية شاملة تربط المبدعين المبدعين الدوليين بالحرفيين المحليين في الشرق الأوسط. صممت بتقنيات تسريع ثلاثية الأبعاد وسرد تفاعلي سلس أثناء التصفح.

### المخرجات الرئيسية
1. **دليل تفاعلي**: ابحث بين أكثر من 500 استوديو تصميم في دبي.
2. **جدول المعارض**: نظام حجز وتذاكر فوري للمعروضات.
3. **تكامل الخطوط**: مزج احترافي بين خطوط IBM Plex العربية وSyne الإنجليزية.
`
    }
  },
  {
    id: "proj-3",
    slug: "cairo-architectural-hub",
    title: {
      en: "Al-Mu'izz Heritage Pavilion",
      ar: "جناح المعز للتراث المعماري"
    },
    meta: {
      en: "Architecture • Spatial Design",
      ar: "عمارة • تصميم فراغي"
    },
    description: {
      en: "An architectural study fusing historic Islamic geometric patterns with ultra-modern sustainable parametric structures.",
      ar: "دراسة معمارية تجمع بين الأشكال الهندسية الإسلامية التاريخية والمنشآت البرمجية المستدامة فائقة الحداثة."
    },
    category: "Architecture",
    client: {
      en: "Cairo Urban Revitalization",
      ar: "مبادرة التنسيق الحضاري بالقاهرة"
    },
    role: {
      en: "Spatial & Digital Architect",
      ar: "معماري ومصمم رقمي"
    },
    year: "2024",
    imageSrc: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
    ],
    isPublished: true,
    featured: true,
    tags: ["Parametric", "3D Visualization", "Heritage"],
    contentMDX: {
      en: `
# Al-Mu'izz Heritage Pavilion

Exploring Islamic geometry through parametric Grasshopper scripts, resulting in a climate-responsive screen system (Mashrabiya 2.0).
`,
      ar: `
# جناح المعز للتراث المعماري

استكشاف الهندسة الإسلامية عبر البرمجة البارامترية، مما أدى إلى ابتكار مشربية مستجيبة للمناخ تتكيف مع أشعة الشمس تلقائياً.
`
    }
  },
  {
    id: "proj-4",
    slug: "doha-art-museum-app",
    title: {
      en: "Museum of Islamic Art Companion",
      ar: "دليل متحف الفن الإسلامي بالدوحة"
    },
    meta: {
      en: "AR Experience • Mobile App",
      ar: "واقع معزز • تطبيق جوال"
    },
    description: {
      en: "Augmented reality tour guide bringing ancient artifacts to life with contextual audio stories in Arabic and English.",
      ar: "مرشد واقع معزز يبعث الحياة في القطع الأثرية التاريخية مع قصص صوتية تفاعلية باللغتين العربية والإنجليزي."
    },
    category: "UI/UX",
    client: {
      en: "Qatar Museums",
      ar: "متاحف قطر"
    },
    role: {
      en: "Lead Experience Designer",
      ar: "قائد تصميم التجربة"
    },
    year: "2024",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop"
    ],
    isPublished: true,
    featured: true,
    tags: ["Augmented Reality", "Culture", "Audio Guide"],
    contentMDX: {
      en: `
# Museum of Islamic Art Companion

Combining spatial audio with light-field scanning, visitors point their devices at manuscripts to reveal hidden ink layers and Arabic calligraphy analysis.
`,
      ar: `
# دليل متحف الفن الإسلامي بالدوحة

دمج الصوت المكاني مع المسح الضوئي الذكي، حيث يمكن للزوار توجيه هواتفهم نحو المخطوطات الأثرية لكشف طبقات الحبر المفقودة وتحليل الخط العربي.
`
    }
  },
  {
    id: "proj-5",
    slug: "cyber-desert-ai",
    title: {
      en: "Sindalah AI Marine Sanctuary",
      ar: "محمية سندالة الذكية للبحر الأحمر"
    },
    meta: {
      en: "Interactive AI • Web Portal",
      ar: "ذكاء اصطناعي • بوابة رقمية"
    },
    description: {
      en: "Real-time ecosystem dashboard monitoring coral restoration and marine biodiversity in NEOM using machine learning.",
      ar: "لوحة تحكم حية لمراقبة استزراع الشعاب المرجانية والتنوع البيولوجي في نيوم باستخدام التعلم الآلي."
    },
    category: "Web",
    client: {
      en: "NEOM Sindalah Project",
      ar: "مشروع نيوم - سندالة"
    },
    role: {
      en: "Senior UI/UX Engineer",
      ar: "مهندس واجهات أول"
    },
    year: "2025",
    imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1000&auto=format&fit=crop"
    ],
    isPublished: true,
    featured: true,
    tags: ["AI", "Data Vis", "Ecosystem"],
    contentMDX: {
      en: `
# Sindalah AI Marine Sanctuary

Live telemetry from autonomous underwater drones mapped onto a responsive 3D globe with interactive Arabic data visualizers.
`,
      ar: `
# محمية سندالة الذكية للبحر الأحمر

بث مباشر من الطائرات البحرية بدون طيار المعروضة على مجسم ثلاثي الأبعاد مع أدوات تحليل بيانات تفاعلية باللغة العربية.
`
    }
  }
];
