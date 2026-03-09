---
description: Fix UX copy inconsistencies using the design team's guidelines
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing.

## Steps

1. Explain that the design team maintains a UX glossary at `docs/ux-glossary.md` with rules for error messages, button labels, and terminology. The team also has a "UX Writing Review" Playbook. This exercise fixes violations that already exist in the codebase.

2. Ask the developer to read `docs/ux-glossary.md` (or @ mention it) to understand the rules. Highlight the two main patterns:
   - Error messages: `[What happened]. [What to do next].`
   - Button labels: specific action verbs, never "Submit"

3. Have the developer ask Cascade to find all UX writing violations in the Invoice module. Cascade should find:
   - 3 "Submit" buttons (invoice-list, invoice-detail delete, invoice-detail confirm, invoice-create)
   - 2 inconsistent error messages in `invoice.service.ts` ("Invalid customer name", "Invalid due date")

4. Fix all violations:
   - invoice-list.component.ts: "Submit" → "Create Invoice"
   - invoice-detail.component.ts delete button: "Submit" → "Delete Invoice"
   - invoice-detail.component.ts confirm button: "Submit" → "Confirm Delete"
   - invoice-create.component.ts submit button: "Submit" → "Create Invoice"
   - invoice.service.ts V1: "Invalid customer name" → "Customer name is required. Please select a customer from the registry."
   - invoice.service.ts V3: "Invalid due date" → "Due date must be after the issue date. Please correct the payment terms."

5. Refresh the app and verify the labels and error messages look correct.

6. Mention that the designer track teaches designers to create Knowledge and Playbooks that encode these rules — so this kind of drift gets caught earlier in the future.

7. Direct to `/component-implementation`.

---

## Training Progress

**Estimated total training time: ~50 minutes**

**Phase 1 — IDE Foundations:**
1. ~~developer-intro~~ (~5 min)
2. ~~developer-context-and-rules~~ (~4 min)
3. ~~developer-skills-overview~~ (~3 min)

**Phase 2 — Use Cases:**
4. ~~design-token-audit~~ (~5 min)
5. **ux-copy-fixes** (~5 min) — You are here
6. component-implementation (~7 min)
7. accessibility-remediation (~6 min)
8. api-endpoint-and-data (~7 min)
9. figma-to-code (~5 min)
10. testing-and-ci (~3 min)
