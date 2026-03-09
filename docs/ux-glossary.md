# UX Glossary — ERP Invoice Web

Standard terminology for all user-facing text in the application. Devin and developers should reference this when writing or reviewing UI copy.

## Document Terms

| Term | Usage | Avoid |
|------|-------|-------|
| Invoice | The financial document. Always capitalize in headings. | Bill, Receipt |
| Line item | A single row on an invoice. Two words, lowercase. | Item, Entry, Row |
| Draft | An invoice that has not been sent. | Unsent, Pending |
| Issue date | The date the invoice was created/issued. | Creation date, Invoice date |
| Due date | The payment deadline. | Payment date, Deadline |
| Fiscal year | The accounting period. | Financial year, Tax year |

## Customer Terms

| Term | Usage | Avoid |
|------|-------|-------|
| Customer | The entity being invoiced. | Client, Buyer, Counterparty |
| Customer registry | The master list of customers. | Customer database, Address book |

## Action Labels

All button labels must use action verbs that describe the specific action.

| Correct | Incorrect | Context |
|---------|-----------|---------|
| Create Invoice | Submit | Creating a new invoice |
| Save Draft | Submit | Saving without sending |
| Send Invoice | Submit | Sending to customer |
| Delete Invoice | Submit, Remove | Deleting permanently |
| Confirm Delete | Submit, Yes, OK | Confirming a destructive action |
| Export to PDF | Export | Exporting a specific format |
| Cancel | Back, Close | Abandoning a form |

## Error Message Format

All error messages must follow this structure:

```
[What happened]. [What to do next].
```

Examples:
- "Customer name is required. Please select a customer from the registry."
- "Due date must be after the issue date. Please correct the payment terms."
- "Invoice amount must be greater than zero. Please check line items."

Avoid:
- "Invalid customer name" (no guidance)
- "Error: bad date" (too vague, no action)
- "Please enter a valid value" (what value? for what field?)

## Status Labels

| Status | Display | Color Token |
|--------|---------|-------------|
| draft | Draft | `--color-text-secondary` on `--color-bg-disabled` |
| sent | Sent | `--color-primary` on `--color-primary-light` |
| paid | Paid | `--color-success` on success-light bg |
| overdue | Overdue | `--color-error` on error-light bg |
| cancelled | Cancelled | `--color-text-disabled` on `--color-bg-disabled` |
