---
description: Write tests for changes made during training and set up the test-before-pr skill
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing.

## Steps

1. Explain that tests are essential for confidence in the changes made during training. Cascade can help write tests by looking at existing patterns. Ask the developer to point Cascade to any existing test files (or note that none exist yet for this module).

2. Have Cascade write unit tests for the InvoiceService. It should test:
   - Successful invoice creation
   - All validation rules (V1-V4, and V5-V6 if they were added in earlier exercises)
   - The error message format for each validation failure
   - The `exportToCsv` method if it was added
   - Edge cases: empty strings, negative amounts, dates in wrong order

3. Run the tests with `npm run test` and fix any failures.

4. Explain the `test-before-pr` skill at `.agents/skills/test-before-pr/SKILL.md`. This skill runs lint, tests, and token verification before any PR. Devin (or Cascade) will invoke it automatically when it detects a PR is about to be opened.

5. Have the developer read the skill file to understand its steps. Explain that they can customize it — for example, adding visual regression checks or accessibility audits.

6. **Congratulate the developer.** They've completed all 10 training workflows! Summarize what was covered:
   - IDE foundations: context, rules, skills overview
   - Design token management and Figma alignment
   - UX writing consistency with design team artifacts
   - Component development following design system patterns
   - Accessibility remediation
   - End-to-end feature development (API + UI)
   - Figma-to-code implementation
   - Testing and CI automation

   Encourage them to use the skills and patterns in their daily work, and to create new skills for procedures they repeat.

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
9. ~~figma-to-code~~ (~5 min)
10. **testing-and-ci** (~3 min) — You are here

**You've completed all developer training!**
