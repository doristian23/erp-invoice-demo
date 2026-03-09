---
name: test-before-pr
description: Run linting, tests, and token verification before opening any PR.
triggers: ["user", "model"]
---

## Setup

1. Install dependencies if not already done: `npm install`
2. Start the dev server if needed: `ng serve`

## Verify

1. Run `npm run lint` and fix any issues
2. Run `npm run test` and confirm all tests pass
3. Run `npm run verify-tokens` and confirm no token mismatches

## Before Opening the PR

1. Review the git diff for any unintended changes
2. Confirm no hardcoded color values, spacing values, or magic numbers were introduced
3. Confirm all user-facing strings follow the UX glossary (`docs/ux-glossary.md`)
4. Include a summary of changes in the PR description
