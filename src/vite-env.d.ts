interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly VITE_SITE_URL?: string;
  readonly VITE_VISITOR_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
