---
description: Find and fix accessibility issues in the Invoice module
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing.

## Steps

1. Explain that accessibility is critical for enterprise apps — many Comarch clients operate in regulated industries where WCAG compliance is required. Cascade can identify accessibility issues and help fix them.

2. Have Cascade audit the Invoice module components for common accessibility issues. It should find:
   - Missing `aria-label` attributes on icon-only buttons (the modal close button `&times;`)
   - The data table lacks a `<caption>` or `aria-label` for screen readers
   - Form fields may lack proper `aria-describedby` linking to error messages
   - Status badges use color alone to convey meaning — need a text label (which they have, but verify)
   - The "not found" state doesn't use a proper `role="alert"` or `aria-live` region
   - Interactive table rows use `cursor: pointer` but have no `role="button"` or keyboard handler

3. Fix the issues systematically. For each fix, explain the WCAG criterion:
   - Add `aria-label="Close"` to the modal close button
   - Add `aria-label="Invoice list"` to the data table
   - Add `aria-describedby` linking form inputs to their error messages in the FormField component
   - Add `role="button"` and `tabindex="0"` with keyboard event handlers to clickable table rows
   - Wrap the "not found" message in an `aria-live="polite"` region

4. After fixes, explain that in a real project they could use Lighthouse or axe-core for automated checks. If time permits, have Cascade look at the built HTML for any remaining issues.

5. Direct to `/api-endpoint-and-data`.

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
7. **accessibility-remediation** (~6 min) — You are here
8. api-endpoint-and-data (~7 min)
9. figma-to-code (~5 min)
10. testing-and-ci (~3 min)
