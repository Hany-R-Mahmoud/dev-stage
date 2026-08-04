import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const siteUrl = (process.env.VITE_SITE_URL ?? '').replace(/\/$/, '');

function seoMetadataPlugin() {
  return {
    name: 'dev-stage-seo-metadata',
    transformIndexHtml(html: string) {
      if (!siteUrl) return html;

      const replacements: Array<[RegExp, string]> = [
        [/(<meta property="og:image" content=")[^"]*("\s*\/?>)/, `$1${siteUrl}/og-image.png$2`],
        [/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${siteUrl}/$2`],
        [/(<meta name="twitter:image" content=")[^"]*("\s*\/?>)/, `$1${siteUrl}/og-image.png$2`],
        [/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${siteUrl}/$2`],
      ];

      return replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), html);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [seoMetadataPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
