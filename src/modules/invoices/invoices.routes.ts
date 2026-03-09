import { Routes } from '@angular/router';
import { InvoiceListComponent } from './components/invoice-list.component';
import { InvoiceDetailComponent } from './components/invoice-detail.component';
import { InvoiceCreateComponent } from './components/invoice-create.component';

export const INVOICE_ROUTES: Routes = [
  { path: '', component: InvoiceListComponent },
  { path: 'create', component: InvoiceCreateComponent },
  { path: ':id', component: InvoiceDetailComponent },
];
