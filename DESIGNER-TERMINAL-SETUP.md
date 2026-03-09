# Designer CLI Cheat Sheet

Quick commands for running design verification checks from the terminal using Devin.

## Prerequisites

- [Devin CLI](https://cli.devin.ai/docs) installed
- Terminal open in the project directory (`cd` into the repo)

## Commands

| Command | What it does |
|---------|-------------|
| `devin "@skills:cli-token-audit"` | Compare design tokens in code against the Figma spec |
| `devin "@skills:cli-ux-review"` | Check user-facing text for UX writing consistency |
| `devin "@skills:cli-ux-review invoices"` | Review a specific module by name |
| `devin "@skills:cli-desktop-parity"` | Find validation rules missing from the web app vs. desktop |
| `devin "@skills:cli-check-all"` | Run all three checks at once |

## Optional: Shell Aliases

Add these to your `~/.zshrc` or `~/.bashrc` so you can type shorter commands:

```bash
alias check-tokens='devin "@skills:cli-token-audit"'
alias check-ux='devin "@skills:cli-ux-review"'
alias check-parity='devin "@skills:cli-desktop-parity"'
alias check-all='devin "@skills:cli-check-all"'
```

Then restart your terminal (or run `source ~/.zshrc`). Now you can just type `check-all`.

## Setting Up a New Repo

To add these skills to a different project:

```bash
cd ~/your-other-repo
devin "@skills:init-design-checks"
```

Devin will ask you a few questions about where your tokens, glossary, and legacy docs live, then create the skill files for you.
