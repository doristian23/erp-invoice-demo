---
name: system-analysis
description: Learn to prompt Devin for deep system analysis that goes beyond the happy path — documenting validation rules, error states, and edge cases.
triggers: ["user"]
---

**CONTEXT**
This is a training skill for UX designers. The designer does not code. All output should be in plain language. Use the Devin webapp only — no IDE instructions.

**IMPORTANT:** Display the Training Progress section (at the bottom of this skill) as the FIRST thing when this skill is invoked, and again as the LAST thing before directing the designer to the next skill.

## Steps

1. **Set the stage.** Explain that one of the most valuable things Devin can do for designers is analyze a codebase and document how features actually work — including edge cases that are easy to miss when looking only at the UI.

2. **Run the analysis.** Tell the designer you're going to analyze the Invoice module now. Read `src/modules/invoices/services/invoice.service.ts` and the component files. Document:
   - All validation rules currently implemented (there are 4)
   - The exact error messages for each rule
   - What happens when the invoice list is empty (hint: nothing — there's no empty state)
   - What the form looks like when submitted with invalid data

   **Current validation rules in the Invoice module:**
   | Rule | Condition | Error Message |
   |------|-----------|---------------|
   | 1 | Customer name required | "Invalid customer name" |
   | 2 | Issue date required | "Issue date is required. Please select a valid date." |
   | 3 | Due date must be after issue date | "Invalid due date" |
   | 4 | Amount must be positive | "Invoice amount must be greater than zero. Please check line items." |

3. **Go beyond the happy path.** Now demonstrate the key technique: prompting for what's missing. Ask these questions out loud and answer them:
   - "What happens if someone enters a negative amount?" (caught by rule 4)
   - "What happens if someone enters an invoice number in the wrong format?" (NOT validated — this is a gap)
   - "What happens if someone creates an invoice with zero line items?" (NOT validated — another gap)
   - "What does the user see when there are no invoices yet?" (blank table — no empty state)

4. **Teach the prompting pattern.** Explain to the designer that the key to getting Devin past the happy path is to ask specific "what if" questions:
   - "What happens when [field] is empty/invalid/negative?"
   - "What happens when there are zero [items]?"
   - "What error does the user see when [action] fails?"
   - "What's missing compared to [reference]?"

5. **Wrap up.** Tell the designer to start a new session and invoke: `@skills:desktop-vs-web`

---

## Training Progress

**Estimated total training time: ~55 minutes**

**Phase 1 — Foundations:**
1. ~~designer-intro~~ (~5 min)
2. **system-analysis** (~6 min) — You are here
3. desktop-vs-web (~4 min)

**Phase 2 — Design Workflows:**
4. research-benchmarking (~7 min)
5. figma-verification (~7 min)
6. ux-writing-review (~6 min)

**Phase 3 — Building Reusable Automation:**
7. learn-knowledge (~5 min)
8. learn-playbooks (~7 min)
9. learn-skills (~8 min)
