---
description: Implement a Figma design spec and verify with the figma-audit skill
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing.

## Steps

1. Explain that this exercise simulates the Figma-to-code workflow. In production, Devin reads the Figma file via MCP. For training, we'll use the design system docs and token spec as the "Figma source of truth."

2. **The task:** Redesign the invoice detail page's header section. The "Figma spec" says:
   - Status badge should have a `--space-sm` (8px) horizontal padding and `--space-xs` (4px) vertical padding
   - The header should use a card with `--shadow-md` instead of no shadow
   - Action buttons should be right-aligned with `--space-md` (16px) gap
   - The detail grid cards should have `--shadow-sm`

   Read `docs/design-system.md` and `src/tokens/tokens.spec.json` to confirm these values.

3. Have the developer ask Cascade to implement the redesign in `invoice-detail.component.ts`. Cascade should:
   - Update styles to use the specified token values
   - Ensure all values come from CSS custom properties, not hardcoded
   - Follow the design system's component patterns

4. After implementation, run the `design-token-audit` skill (or `npm run verify-tokens`) to confirm no new token mismatches were introduced.

5. Refresh the app, navigate to an invoice detail, and verify the visual changes match the spec.

6. Discuss how this connects to the designer track: designers run the `figma-verification` skill to check if the implementation matches their Figma file. When both teams use the same token spec as the source of truth, the process is smooth.

7. Direct to `/testing-and-ci`.

---

## Training Progress

**Estimated total training time: ~50 minutes**

**Phase 1 — IDE Foundations:**
1. ~~developer-intro~~ (~5 min)
2. ~~developer-context-and-rules~~ (~4 min)
3. ~~developer-skills-overview~~ (~3 min)

**Phase 2 — Use Cases:**
4. ~~design-token-audit~~ (~5 min)
5. ~~ux-copy-fixes~~ (~5 min)
6. ~~component-implementation~~ (~7 min)
7. ~~accessibility-remediation~~ (~6 min)
8. ~~api-endpoint-and-data~~ (~7 min)
9. **figma-to-code** (~5 min) — You are here
10. testing-and-ci (~3 min)
