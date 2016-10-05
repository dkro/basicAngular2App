import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Bootstrap} from './bootstrap';
import {appRoutingProviders, routing} from "./app.routing";
import {VoucherList} from "./vouchers/list/voucher-list";
import {VoucherAdd} from "./vouchers/form/voucher-add";
import {VouchersComponent} from "./vouchers/vouchers.component";
import {VoucherListComponent} from "./vouchers/list/components/list.component";
import {VoucherStatsComponent} from "./vouchers/list/components/statistics.component";
import {VoucherService} from "./vouchers/service/voucher.service";
import {Form} from "./vouchers/form/components/form.component";
import {Dropdown} from "./vouchers/controls/dropdown/dropdown.component";

@NgModule({
  declarations: [
    Bootstrap,
    VouchersComponent,
    VoucherList,
    VoucherListComponent,
    VoucherAdd,
    VoucherStatsComponent,
    Form,
    Dropdown
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  // TODO add providers VoucherService
  bootstrap: [Bootstrap]
})
export class AppModule {
}
