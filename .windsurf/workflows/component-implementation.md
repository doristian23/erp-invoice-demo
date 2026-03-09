---
description: Build a new EmptyState component following design system patterns
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing.

## Steps

1. Explain that the invoice list currently shows a blank table when there are no invoices. The design system (`docs/design-system.md`) specifies an empty state pattern: illustration/icon + heading + call-to-action button. This exercise builds that component.

2. Have the developer investigate the existing components in `src/components/ui/` to understand conventions:
   - Standalone components
   - CSS custom properties for all styling
   - Inputs for configuration
   - Consistent naming patterns

3. Plan the component together. Ask the developer to approve this plan before implementing:
   - Create `src/components/ui/empty-state/empty-state.component.ts`
   - Inputs: `icon` (string, optional), `heading` (string), `description` (string, optional), `actionLabel` (string, optional)
   - Output: `action` EventEmitter
   - Styling: centered layout, uses design tokens, subtle illustration area

4. Implement the component. Follow the patterns from existing components.

5. Integrate it into the invoice list. Update `src/components/ui/data-table/data-table.component.ts` to accept an `emptyState` template, OR update `invoice-list.component.ts` to conditionally show the empty state when there are no invoices.

6. Export the new component from `src/components/ui/index.ts`.

7. Refresh the app and verify: when there are no invoices, the empty state shows with a "Create Invoice" call-to-action.

8. Direct to `/accessibility-remediation`.

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
6. **component-implementation** (~7 min) — You are here
7. accessibility-remediation (~6 min)
8. api-endpoint-and-data (~7 min)
9. figma-to-code (~5 min)
10. testing-and-ci (~3 min)
