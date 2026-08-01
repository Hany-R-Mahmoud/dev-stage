# Vercel bot protection reference

This is the canonical procedure for applying the bot-blocking policy used by
the `al-rawi` trial project. Use it when configuring another Vercel project so
the policy and verification steps remain consistent.

## Canonical policy

| Vercel area | Required action | Effect |
| --- | --- | --- |
| Bot Protection | **Challenge** | Challenges requests from non-browser sources, excluding verified bots. |
| AI Bots | **Deny** | Blocks requests from known AI bots and scrapers. |

This is the recommended baseline. It is not a blanket denial of every
automated request: Bot Protection uses a challenge, and verified bots are
excluded. AI Bots denial applies to bots Vercel identifies as known AI bots or
scrapers.

## Reference outcome: `al-rawi`

Verified on **2026-08-01** in the Vercel dashboard for:

`Vercel → hany-mahmouds-projects → al-rawi → Firewall → Rules → Bot Management`

Observed state:

- Bot Protection: **Challenge**
- AI Bots: **Deny**
- Custom Rules: none
- IP blocking rules: none
- Pending changes: none; the page did not show a `Review changes` or
  `Publish` action after verification

The final two items are observations for this project, not requirements to
add custom or IP rules to other projects.

## Repeatable setup procedure

1. Sign in to the Vercel account and select the correct team.
2. Open the target project.
3. Go to **Firewall → Rules → Bot Management**.
4. Set **Bot Protection** to **Challenge**.
5. Set **AI Bots** to **Deny**.
6. If Vercel presents a staged-change workflow, open **Review changes** and
   select **Publish**. Do not assume that a selected value is live until the
   publish step is complete.
7. Re-read the page after saving or publishing and confirm both exact values:
   **Challenge** and **Deny**.
8. Confirm there is no remaining `Review changes` or `Publish` action. If one
   remains, the configuration is staged and not yet confirmed live.
9. Record any project-specific exception here or in the project change log;
   do not silently replace the canonical policy.

## Action meanings

These labels are easy to confuse when configuring custom Firewall rules:

- **Allow**: lets the request through; it does not block bots.
- **Log**: records matching traffic but does not block it.
- **Block/Deny**: rejects matching traffic.
- **Challenge**: asks suspicious or non-browser traffic to complete Vercel's
  verification; this is the intended action for general Bot Protection in the
  baseline policy.

On the Bot Management cards, Vercel presents the relevant baseline choices as
**Challenge** and **Deny**. Use the card labels rather than trying to recreate
the policy as a custom rule.

## Drift-prevention checklist

Before changing a project, compare its current state with the canonical policy
table. Change only values that differ. After the change:

- Verify the project and team in the dashboard URL.
- Verify the exact labels, not just that a control appears enabled.
- Complete and verify publishing when Vercel stages changes.
- Re-read the page after navigation or refresh.
- Leave custom rules and IP rules unchanged unless a separate requirement
  explicitly calls for them.
- Note any exception and its reason instead of changing the baseline for all
  projects.

## Operational notes

- This policy is configured at the Vercel Firewall layer; application
  redeployment is not required for the dashboard setting to apply.
- A challenge can still be presented to legitimate users whose traffic looks
  non-browser-like. Treat that as an expected trade-off and test critical
  integrations after rollout.
- “Known AI bots” is an identification category, not a promise to block every
  future or unidentified scraper. Review Vercel firewall activity if traffic
  patterns change.
