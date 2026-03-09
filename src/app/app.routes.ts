import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  {
    path: 'invoices',
    loadChildren: () =>
      import('../modules/invoices/invoices.routes').then(m => m.INVOICE_ROUTES),
  },
];
