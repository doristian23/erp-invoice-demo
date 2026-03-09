---
name: design-token-audit
description: Compare design tokens in src/tokens/tokens.css against the Figma spec in src/tokens/tokens.spec.json and fix any mismatches.
triggers: ["user", "model"]
---

## Setup

1. Read the Figma spec values from `src/tokens/tokens.spec.json`
2. Read the implementation values from `src/tokens/tokens.css`

## Audit

1. For each token in the spec, find the corresponding CSS custom property
2. Compare values — normalize formatting (strip spaces, lowercase hex)
3. Flag any mismatches

## Fix

1. For each mismatch, update `src/tokens/tokens.css` to match the spec value
2. Search the codebase for any hardcoded values that should reference the token instead

## Verify

1. Run `npm run verify-tokens` to confirm all tokens now match
2. If the dev server is running, refresh and visually verify error states and modals
