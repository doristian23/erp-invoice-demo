---
description: Fix design token mismatches between implementation and Figma spec
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing.

## Steps

1. Explain that design tokens are the bridge between design and code. When tokens drift from the Figma spec, error colors look wrong, spacing is off, and the designers lose trust in the implementation. This exercise finds and fixes those drifts.

2. Ask the developer to run `npm run verify-tokens` to see the current mismatches. They should see failures for `--color-error` and `--modal-padding`.

3. Have the developer ask Cascade to fix the mismatches. Cascade should:
   - Read `src/tokens/tokens.spec.json` for the correct values
   - Update `src/tokens/tokens.css` to match
   - Specifically: `--color-error` from `#e53e3e` to `#dc2626`, `--modal-padding` from `24px` to `32px`

4. After the fix, have the developer run `npm run verify-tokens` again to confirm all tokens pass.

5. If the dev server is running, have the developer refresh and visually verify:
   - Error states (overdue badge, form validation errors) now use the correct red
   - The modal has slightly more padding than before

6. Discuss how this workflow connects to the designer track — designers created the spec and can run the `figma-audit` skill to verify after deployment.

7. Direct to `/ux-copy-fixes`.

---

## Training Progress

**Estimated total training time: ~50 minutes**

**Phase 1 — IDE Foundations:**
1. ~~developer-intro~~ (~5 min)
2. ~~developer-context-and-rules~~ (~4 min)
3. ~~developer-skills-overview~~ (~3 min)

**Phase 2 — Use Cases:**
4. **design-token-audit** (~5 min) — You are here
5. ux-copy-fixes (~5 min)
6. component-implementation (~7 min)
7. accessibility-remediation (~6 min)
8. api-endpoint-and-data (~7 min)
9. figma-to-code (~5 min)
10. testing-and-ci (~3 min)
