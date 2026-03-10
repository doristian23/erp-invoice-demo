# ERP Invoice Demo

A training application for learning [Devin](https://app.devin.ai), [Devin CLI](https://cli.devin.ai/docs), and [Windsurf](https://windsurf.com/) through hands-on exercises with a realistic ERP invoice module.

The app is a simplified Angular recreation of an ERP invoicing system with intentional design debt and logic gaps for training purposes.

## Three Tracks, One Repo

### Track A: Designers (Devin webapp)

9 guided skills teaching designers how to use Devin for UX research, system analysis, and building reusable automation — no coding required.

**Before you start**, familiarize yourself with the three ways to interact with Devin:

| Tool | What it's for | How to access |
| --- | --- | --- |
| **DeepWiki** | Instant answers about the codebase — "What is this app?", "What tokens exist?" | Go to [deepwiki.com](https://deepwiki.com), paste the repo URL, ask a question |
| **Ask Devin** | Quick code lookups — "What validation rules exist?", "Any token mismatches?" | Open [app.devin.ai](https://app.devin.ai), use the Ask Devin input |
| **Full Session** | Multi-step work, skills, file changes, web browsing, screenshots | Open [app.devin.ai](https://app.devin.ai), click New Session, select the repo |

**Rule of thumb:** Use DeepWiki for "what is X?", Ask Devin for "what does the code say about X?", and Full Sessions for multi-step tasks.

Trigger skills in the Devin webapp with `@skills:<skill-name>`:

**Phase 1 — Foundations (~15 min)**
1. `designer-intro` — What Devin is, how sessions work, choosing the right tool
2. `system-analysis` — Analyze the codebase beyond the happy path
3. `desktop-vs-web` — Compare legacy desktop vs. web implementation

**Phase 2 — Design Workflows (~20 min)**
4. `research-benchmarking` — Competitive research with computer use
5. `figma-verification` — Figma vs. implementation discrepancy reports
6. `ux-writing-review` — Audit user-facing strings for consistency

**Phase 3 — Building Reusable Automation (~20 min)**
7. `learn-knowledge` — Create Knowledge entries in the Devin web UI
8. `learn-playbooks` — Create Playbooks for repeatable UX reviews
9. `learn-skills` — Author SKILL.md files for version-controlled procedures

### Track B: Developers (Windsurf IDE)

10 guided workflows for fullstack Angular developers.

Trigger workflows in Windsurf with `/<workflow-name>`:

**Phase 1 — IDE Foundations (~12 min)**
1. `/developer-intro`
2. `/developer-context-and-rules`
3. `/developer-skills-overview`

**Phase 2 — Use Cases (~38 min)**
4. `/design-token-audit`
5. `/ux-copy-fixes`
6. `/component-implementation`
7. `/accessibility-remediation`
8. `/api-endpoint-and-data`
9. `/figma-to-code`
10. `/testing-and-ci`

### Track C: Designers (Devin CLI)

4 skills for running design checks directly from the terminal using the [Devin CLI](https://cli.devin.ai/docs). No browser needed — just open a terminal in the repo and ask Devin to run a skill. New to the terminal? See the [Designer Terminal Setup](DESIGNER-TERMINAL-SETUP.md) guide.

These checks compare the codebase against its design specs (Figma tokens, UX glossary, legacy desktop rules) and print structured reports with tables and severity ratings.

| Skill | What it checks | Output |
| --- | --- | --- |
| `cli-token-audit` | `tokens.css` vs. `tokens.spec.json` (Figma source of truth) | Mismatch table with High/Medium/Low severity |
| `cli-ux-review` | Button labels, error messages, and terminology vs. `docs/ux-glossary.md` | Violations table grouped by type |
| `cli-desktop-parity` | Web validation rules vs. `legacy/validation-rules.html` (desktop) | Gap analysis table + unhandled edge cases |
| `cli-check-all` | All three checks above in a single pass | Combined report + summary counts |

**Running a skill:**

```bash
devin "run @skills:cli-check-all"
devin "run @skills:cli-token-audit"
devin "run @skills:cli-ux-review invoices"
devin "run @skills:cli-desktop-parity"
```

There is also a standalone token check that runs without Devin:

```bash
npm run verify-tokens
```

---

## Getting Started

**Option A — Live demo (no install):** Open **https://doristian23.github.io/erp-invoice-demo/** in any browser.

**Option B — Run locally:**

```bash
git clone https://github.com/doristian23/erp-invoice-demo.git
cd erp-invoice-demo
npm install
npm install -g @angular/cli
ng serve
```

Then open **http://localhost:4200**. Requires [Node.js](https://nodejs.org) (LTS) and [Git](https://git-scm.com/downloads).

## Project Structure

```
src/
  tokens/           Design tokens (colors, spacing, typography)
  components/ui/    Shared UI component library
  modules/invoices/ Invoice CRUD module (list, detail, create, errors)
legacy/             Simplified desktop stub pages
docs/               UX glossary, design system documentation
.agents/skills/     Devin skills (both tracks)
.windsurf/workflows/ Windsurf workflows (developer track)
scripts/            Verification utilities
```

## Planted Defects (for training)

This repo contains intentional issues that training exercises discover and fix:

- **Missing validation rules**: Desktop has 6 invoice validation rules; web implements only 4
- **Token mismatch**: `--color-error` is `#e53e3e` in code but `#dc2626` in Figma spec
- **Modal padding**: `24px` in code vs `32px` in Figma spec
- **Inconsistent error messages**: Mix of "Invalid X" and "[What happened] + [What to do]" formats
- **Bad button labels**: 3 buttons use "Submit" instead of action verbs
- **Missing empty state**: Invoice list shows blank space when no invoices exist
