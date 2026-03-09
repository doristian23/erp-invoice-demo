---
description: Add a bulk invoice export API endpoint with validation and error handling
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing.

## Steps

1. Explain that this exercise adds a new feature end-to-end: a bulk export endpoint that lets users select multiple invoices and export them as CSV. This demonstrates using Cascade for feature planning, implementation, and integration.

2. **Plan first.** Have Cascade investigate the current InvoiceService and propose a plan:
   - Add an `exportToCsv(ids: string[])` method to InvoiceService
   - Validate that all requested IDs exist
   - Generate CSV content with headers: Invoice #, Customer, Issue Date, Due Date, Amount, Currency, Status
   - Return the CSV as a downloadable string
   - Add a "Export Selected" button to the invoice list with selection checkboxes

3. Ask the developer to review and approve the plan before implementation.

4. **Implement the backend logic:**
   - Add selection state to the invoice list (checkboxes, select-all)
   - Add the `exportToCsv` method with proper validation
   - Error handling: if any ID doesn't exist, throw with the specific missing IDs
   - Error message format must follow the glossary: "[What happened]. [What to do next]."

5. **Implement the UI:**
   - Add checkbox column to the data table
   - Add "Export Selected" button (disabled when nothing selected)
   - Trigger download when export completes

6. Test the feature manually — select some invoices (create a few first if needed), click export, verify the CSV downloads correctly.

7. Discuss how Cascade handled the planning phase — investigating existing code, proposing a plan, asking for clarification — similar to how a developer would approach a feature ticket.

8. Direct to `/figma-to-code`.

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
8. **api-endpoint-and-data** (~7 min) — You are here
9. figma-to-code (~5 min)
10. testing-and-ci (~3 min)
