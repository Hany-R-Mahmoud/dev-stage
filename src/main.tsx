if (import.meta.env.DEV) {
  import("react-grab");
  import("react-scan");
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Analytics} from '@vercel/analytics/react';
import App from './App.tsx';
import {initializeMonitoring} from './lib/monitoring';
import './index.css';

initializeMonitoring();

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  void navigator.serviceWorker.getRegistrations().then((registrations) => {
    // Remove service workers from the former installable-app version.
    return Promise.all(registrations.map((registration) => registration.unregister()));
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
);

// Keep a semantic HTML shell available to crawlers and assistive technology
// until the client application has mounted, then avoid duplicate content.
document.getElementById('seo-fallback')?.remove();
