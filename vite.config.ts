import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {existsSync, readFileSync} from 'node:fs';
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

function pwaServiceWorkerPlugin() {
  return {
    name: 'dev-stage-pwa-service-worker',
    generateBundle(_options: unknown, bundle: Record<string, {type: string}>) {
      const precacheEntries = new Set(['/index.html']);
      for (const fileName of Object.keys(bundle)) {
        if (/^assets\/index-[^/]+\.(?:js|css)$/.test(fileName)) precacheEntries.add(`/${fileName}`);
      }

      for (const publicFile of ['manifest.webmanifest', 'favicon-dark.svg', 'dev-stage-icon-192.png', 'dev-stage-icon-512.png', 'apple-touch-icon.png']) {
        if (existsSync(path.resolve(__dirname, 'public', publicFile))) precacheEntries.add(`/${publicFile}`);
      }

      const source = readFileSync(path.resolve(__dirname, 'src/pwa/service-worker.js'), 'utf8')
        .replace('__PRECACHE_ENTRIES__', JSON.stringify([...precacheEntries]));
      this.emitFile({type: 'asset', fileName: 'sw.js', source});
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [pwaServiceWorkerPlugin(), seoMetadataPlugin(), react(), tailwindcss()],
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
