---
description: Overview of Skills, Knowledge, and Playbooks for developers
---

**CONTEXT**
This is a workflow for fullstack Angular developers. Keep the user on track.

**IMPORTANT:** Display Training Progress as the FIRST and LAST thing.

## Steps

1. Explain that this repo uses Devin's three configuration primitives, and the developer benefits from artifacts the design team has already created:
   - **Knowledge** — the design team created entries for design token values and UX terminology. When the developer works on UI code, Devin automatically recalls these.
   - **Playbooks** — the design team created a "UX Writing Review" playbook. Developers can attach it to a session to self-check their UI strings before submitting a PR.
   - **Skills** — stored at `.agents/skills/` in this repo. Devin auto-discovers them.

2. Show the developer the skills in the repo. List the skills available:
   - `design-token-audit` — compares tokens against the Figma spec and fixes mismatches
   - `test-before-pr` — runs lint, tests, and token verification before any PR
   - `figma-verification` — compares Figma designs against the running app (designers use this too)

3. Explain that skills follow the open Agent Skills standard — the same SKILL.md files work across Devin, Windsurf, Claude, Cursor, and other tools. This means the team invests in skills once and benefits everywhere.

4. Quick demo: tell the developer they can reference a skill by name when prompting Cascade. For example: "Fix the token mismatches using the design-token-audit skill." Cascade will read the SKILL.md and follow its steps.

5. Wrap up. Direct to `/design-token-audit`.

---

## Training Progress

**Estimated total training time: ~50 minutes**

**Phase 1 — IDE Foundations:**
1. ~~developer-intro~~ (~5 min)
2. ~~developer-context-and-rules~~ (~4 min)
3. **developer-skills-overview** (~3 min) — You are here

**Phase 2 — Use Cases:**
4. design-token-audit (~5 min)
5. ux-copy-fixes (~5 min)
6. component-implementation (~7 min)
7. accessibility-remediation (~6 min)
8. api-endpoint-and-data (~7 min)
9. figma-to-code (~5 min)
10. testing-and-ci (~3 min)
