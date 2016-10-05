import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VoucherAdd} from "./vouchers/form/voucher-add";
import {VouchersComponent} from "./vouchers/vouchers.component";
import {VoucherListComponent} from "./vouchers/list/voucher-list";

const appRoutes: Routes = [
  {
    path: 'vouchers',
    component: VouchersComponent,
    children: [
      {
        path: '',
        // component: TODO list
      },
      {
        path: ':id',
        // component: TODO add
      },
      {
        path: 'create',
        // component: TODO add
      }
    ]
  },
  {
    path: '',
    redirectTo: '/vouchers',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);