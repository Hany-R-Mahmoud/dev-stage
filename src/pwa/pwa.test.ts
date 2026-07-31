import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildAndroidIntentUrl,
  classifyPlatform,
  copyText,
  isLikelyWebView,
  isTimestampActive,
  promptInstall,
  restoreHashFromLocation,
} from './pwa';

test('classifies platforms and common embedded browsers', () => {
  assert.equal(classifyPlatform('Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/125 Mobile'), 'android');
  assert.equal(classifyPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'), 'ios');
  assert.equal(isLikelyWebView('Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Version/4.0 Chrome/125 Mobile Safari/537.36 wv'), true);
  assert.equal(isLikelyWebView('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'), true);
});

test('builds Android intent URLs with hash transport and fallback', () => {
  const intent = buildAndroidIntentUrl('https://dev-stage.example/en/projects/one?view=grid#details');
  assert.ok(intent?.startsWith('intent://dev-stage.example/en/projects/one?view=grid&__pwa_hash=details#Intent;'));
  assert.match(intent ?? '', /S\.browser_fallback_url=https%3A%2F%2Fdev-stage\.example%2Fen%2Fprojects%2Fone/);
});

test('restores transported hashes without reloading', () => {
  let replaced = '';
  const restored = restoreHashFromLocation(
    {href: 'https://dev-stage.example/en/?__pwa_hash=dashboard', search: '?__pwa_hash=dashboard', hash: ''},
    {state: null, replaceState: (_state, _title, url) => { replaced = String(url); }},
  );
  assert.equal(restored, true);
  assert.equal(replaced, '/en/#dashboard');
});

test('handles expiry, prompt rejection, and clipboard fallback', async () => {
  const now = 10_000;
  assert.equal(isTimestampActive(now - 6 * 24 * 60 * 60 * 1000, now, 7), true);
  assert.equal(isTimestampActive(now - 7 * 24 * 60 * 60 * 1000, now, 7), false);
  assert.equal(await promptInstall({prompt: async () => { throw new Error('blocked'); }}), 'unavailable');
  assert.equal(await copyText('url', {writeText: async () => { throw new Error('blocked'); }}), false);
});
