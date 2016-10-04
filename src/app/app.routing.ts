import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VoucherList} from "./vouchers/list/voucher-list";
import {VoucherAdd} from "./vouchers/form/voucher-add";
import {VouchersComponent} from "./vouchers/vouchers.component";

const appRoutes: Routes = [
  {
    path: 'vouchers',
    component: VouchersComponent,
    children: [
      {
        path: '',
        component: VoucherList
      },
      {
        path: ':id',
        component: VoucherAdd
      },
      {
        path: 'create',
        component: VoucherAdd
      }
    ]
  },
  {
    path: '',
    redirectTo: '/vouchers',
    pathMatch: 'full'
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);