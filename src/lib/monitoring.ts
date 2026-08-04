import { captureError, event, initHeronSignal, log } from '@heronsignal/web';

const publicKey = import.meta.env.VITE_HERONSIGNAL_PUBLIC_KEY?.trim();

let initialized = false;

export function initializeMonitoring(): void {
  if (initialized || !publicKey) return;

  initialized = true;
  void initHeronSignal({
    publicKey,
    captureConsole: false,
    captureNetworkFailures: true,
    captureRuntimeErrors: true,
    captureResourceErrors: true,
  }).catch((error: unknown) => {
    initialized = false;
    console.warn('HeronSignal failed to initialize.', error);
  });
}

export function trackEvent(name: string, payload?: Record<string, string | number | boolean>): void {
  if (!publicKey) return;
  event(name, payload);
}

export function reportError(error: Error | string): void {
  if (!publicKey) return;
  captureError(error);
}

export function reportLog(
  level: 'error' | 'warn' | 'info',
  message: string,
  data?: Record<string, string | number | boolean>,
): void {
  if (!publicKey) return;
  log(level, message, data);
}
