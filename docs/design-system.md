# Design System — ERP Invoice Web

Reference documentation for the local design system used by the ERP Invoice Web application.

## Tokens

Design tokens are defined in `src/tokens/tokens.css` as CSS custom properties. The Figma source of truth is captured in `src/tokens/tokens.spec.json`.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1a56db` | Primary actions, links, active states |
| `--color-primary-hover` | `#1e40af` | Hover state for primary elements |
| `--color-primary-light` | `#dbeafe` | Light backgrounds for primary context |
| `--color-success` | `#16a34a` | Success states, paid status |
| `--color-warning` | `#ca8a04` | Warning states, attention needed |
| `--color-error` | `#dc2626` | Error states, destructive actions, overdue status |
| `--color-info` | `#2563eb` | Informational messages |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps, icon padding |
| `--space-sm` | `8px` | Form element internal padding |
| `--space-md` | `16px` | Standard gaps between elements |
| `--space-lg` | `24px` | Section padding |
| `--space-xl` | `32px` | Page-level spacing |
| `--space-2xl` | `48px` | Large separations |

### Modal Specifications

| Property | Value |
|----------|-------|
| Padding | `32px` (`--modal-padding`) |
| Border radius | `12px` (`--modal-radius` = `--radius-lg`) |
| Shadow | `--shadow-lg` |
| Min width | `480px` |
| Max width | `640px` |

## Components

### Button (`ui-button`)

Variants: `primary`, `secondary`, `danger`
Sizes: `sm`, `md`, `lg`

Rules:
- Button labels must use action verbs (see `docs/ux-glossary.md`)
- Destructive actions use the `danger` variant
- Only one primary button per visible form/modal
- Disabled state at 50% opacity

### Data Table (`ui-data-table`)

- Always provide an empty state when no data is available
- Row click navigates to detail view
- Column headers are uppercase, `--font-size-xs`, `--font-weight-semibold`

### Modal (`ui-modal`)

- Backdrop click closes the modal
- Always include a descriptive title
- Footer actions: secondary (cancel) on left, primary/danger on right
- Destructive modals must include a confirmation message

### Form Field (`ui-form-field`)

- Label is always visible (no placeholder-only fields)
- Error state: red border + error message below the field
- Focus state: blue border + light blue ring

## Patterns

### Error Message Pattern

All user-facing error messages follow:
```
[What happened]. [What to do next].
```

### Empty State Pattern

When a list or table has no data:
1. Show an illustration or icon
2. Display a heading describing the empty state
3. Include a call-to-action button

### Status Badge Pattern

Status indicators use colored pills with:
- Uppercase text
- `--font-size-xs` / `--font-weight-semibold`
- Background from the corresponding status color at light opacity
- Text from the corresponding status color at full opacity
