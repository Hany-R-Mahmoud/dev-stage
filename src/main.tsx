if (import.meta.env.DEV) {
  import("react-grab");
  import("react-scan");
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Analytics} from '@vercel/analytics/react';
import App from './App.tsx';
import {initializeMonitoring} from './lib/monitoring';
import {PwaProvider} from './pwa/PwaContext';
import {restoreHashFromLocation} from './pwa/pwa';
import './index.css';

if (typeof window !== 'undefined') restoreHashFromLocation();
initializeMonitoring();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PwaProvider>
      <App />
    </PwaProvider>
    <Analytics />
  </StrictMode>,
);

// Keep a semantic HTML shell available to crawlers and assistive technology
// until the client application has mounted, then avoid duplicate content.
document.getElementById('seo-fallback')?.remove();
