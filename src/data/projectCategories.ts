export const PROJECT_CATEGORIES = [
  {
    "id": "developer",
    "title": {
      "en": "Development & AI tools",
      "ar": "أدوات التطوير والذكاء الاصطناعي"
    },
    "description": {
      "en": "Build, inspect, release, and operate software and agent workflows",
      "ar": "بناء البرمجيات والوكلاء وفحصها ونشرها وتشغيلها"
    }
  },
  {
    "id": "games",
    "title": {
      "en": "Games & interactive stories",
      "ar": "ألعاب وقصص تفاعلية"
    },
    "description": {
      "en": "Games, puzzles, interactive narratives, and social play",
      "ar": "الألعاب والألغاز والقصص التفاعلية واللعب الجماعي"
    }
  },
  {
    "id": "learning",
    "title": {
      "en": "Learning & knowledge",
      "ar": "التعلم والمعرفة"
    },
    "description": {
      "en": "Study, guided learning, and knowledge collections",
      "ar": "الدراسة والتعلم الموجه ومجموعات المعرفة"
    }
  },
  {
    "id": "productivity",
    "title": {
      "en": "Planning & personal productivity",
      "ar": "التخطيط والإنتاجية الشخصية"
    },
    "description": {
      "en": "Personal planning, focus, notes, reading, and utilities",
      "ar": "التخطيط الشخصي والتركيز والملاحظات والقراءة والأدوات المساعدة"
    }
  },
  {
    "id": "business",
    "title": {
      "en": "Business & team operations",
      "ar": "الأعمال وإدارة الفرق"
    },
    "description": {
      "en": "Sales, commerce, clients, and team coordination",
      "ar": "المبيعات والتجارة والعملاء وتنسيق الفرق"
    }
  },
  {
    "id": "creative",
    "title": {
      "en": "Design, content & marketing",
      "ar": "التصميم والمحتوى والتسويق"
    },
    "description": {
      "en": "Visual creation, publishing, content, and launches",
      "ar": "الإبداع البصري والنشر وصناعة المحتوى وإطلاق المنتجات"
    }
  },
  {
    "id": "health",
    "title": {
      "en": "Health & wellbeing",
      "ar": "الصحة والعافية"
    },
    "description": {
      "en": "Health, clinics, family records, and wellbeing",
      "ar": "الصحة والعيادات وسجلات العائلة الصحية والعافية"
    }
  },
  {
    "id": "life",
    "title": {
      "en": "Home & everyday life",
      "ar": "البيت والحياة اليومية"
    },
    "description": {
      "en": "Food, home, hobbies, maintenance, and everyday records",
      "ar": "الطعام والمنزل والهوايات والصيانة والسجلات اليومية"
    }
  },
  {
    "id": "community",
    "title": {
      "en": "Community, culture & travel",
      "ar": "المجتمع والثقافة والسفر"
    },
    "description": {
      "en": "Events, communities, heritage, guides, and trips",
      "ar": "المناسبات والمجتمع والتراث والأدلة والرحلات"
    }
  },
  {
    "id": "finance",
    "title": {
      "en": "Money & expenses",
      "ar": "المال والمصروفات"
    },
    "description": {
      "en": "Budgets, expenses, subscriptions, and financial records",
      "ar": "الميزانيات والمصروفات والاشتراكات والسجلات المالية"
    }
  }
] as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]['id'];
export const CATEGORY_IDS = PROJECT_CATEGORIES.map(category => category.id);
export const CATEGORY_BY_ID = Object.fromEntries(PROJECT_CATEGORIES.map(category => [category.id,category])) as Record<ProjectCategoryId, (typeof PROJECT_CATEGORIES)[number]>;
