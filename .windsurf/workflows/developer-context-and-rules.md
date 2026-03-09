---
description: Teaching context and rules in Windsurf
auto_execution_mode: 0
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track. Direct to the next workflow at the end.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing. Show current lesson incomplete initially, complete at the end.

## Steps

1. Explain that Cascade has search tools to find context automatically, but developers can also provide context explicitly for better results.

2. **@ mentions.** Tell the developer to type `@` in the Cascade input and start typing `src/tokens` — they'll see matching files. Have them select `tokens.css` and ask Cascade to explain the token values. Point out that tagging the file helped Cascade go directly to the right place.

3. **Drag-and-drop.** Have the developer drag `docs/design-system.md` from the file explorer into Cascade. Ask them to compare what the design system says about modal padding vs. what's in the tokens file.

4. **Line selection.** Have the developer open `src/modules/invoices/services/invoice.service.ts`, highlight the `validate` method, and press `cmd+L` to send those lines to Cascade. Ask: "What validation rules are missing compared to the desktop app?"

5. **Rules.** Explain workspace rules. Have the developer create a rule:
   - Title: `angular-conventions`
   - Trigger: `always_on`
   - Content: "Use Angular standalone components. Use design tokens from src/tokens/tokens.css — never hardcode colors or spacing values. Follow the UX glossary at docs/ux-glossary.md for all user-facing strings."

   Save it and explain that rules persist in `.windsurf/` and can be committed to the repo.

6. Wrap up. Direct to `/developer-skills-overview`.

---

## Training Progress

**Estimated total training time: ~50 minutes**

**Phase 1 — IDE Foundations:**
1. ~~developer-intro~~ (~5 min)
2. **developer-context-and-rules** (~4 min) — You are here
3. developer-skills-overview (~3 min)

**Phase 2 — Use Cases:**
4. design-token-audit (~5 min)
5. ux-copy-fixes (~5 min)
6. component-implementation (~7 min)
7. accessibility-remediation (~6 min)
8. api-endpoint-and-data (~7 min)
9. figma-to-code (~5 min)
10. testing-and-ci (~3 min)
