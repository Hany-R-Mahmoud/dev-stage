# Emojie-Crack: first portfolio and campaign treatment

## Direction

Audience: Arabic-speaking players who recognize Egyptian films, food, proverbs,
and expressions. The hook is recognition: a familiar cultural reference hidden
inside a small emoji clue. Use the actual product's cream, purple, yellow,
rounded outlines, and offset shadows. Avoid generic technology imagery.

Headline: «الإيموجي يقولها. إنت تفكّها؟»
Supporting copy: «أمثال، أفلام، أكلات وترندات. كل لغز حكاية تعرفها.»

## Selected images and why

1. Promotional cover: a real puzzle screenshot paired with the campaign hook.
   Shows what the product does before visitors open the case study.
2. Gameplay: the real candy / mosque / celebration puzzle in guest mode.
   Shows the clue, timer, hint, and answer-length cues.
3. Categories: the complete visible category grid. Demonstrates Egyptian
   cultural breadth without repeating another landing hero.
4. Tutorial: the product's explicitly labeled interactive demonstration.
   Shows onboarding; its success state is a demo, not verified live scoring.
5. Landing: current public landing with the existing product introduction.
   Preserves the original brand and entry experience.

## Deliverables

- Portfolio cover: 1280 × 800, 16:10.
- Social post: 1080 × 1080.
- Story: 1080 × 1920, with the CTA above the bottom interface area.
- Four clean product screenshots, separate from promotional artwork.
- Editable source: `creative.html?format=square` or `?format=story`;
  no query produces the portfolio cover.

All UI in the artwork comes from the real deployed app. Browser framing and
campaign text are presentation layers. No generated product interface,
invented scores, player counts, rankings, or feature claims are used.

## Verification and limitation

On 2026-10-06, the deployed guest route loaded puzzle metadata successfully,
but submitting an answer returned: “A round id and request id are required
for account play.” No successful guest answer or scoring claim is made.
Diagnosing or fixing that behavior is outside this visual update.

Current README documents Supabase-backed accounts/content and server-side
answer validation. The old portfolio claim that no backend exists was stale.

Social artwork is prepared for review, not posted or used in a paid campaign.
Verify the guest-answer issue before launching acquisition campaigns.
