import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Bootstrap} from './bootstrap';
import {routing} from "./app.routing";
import {VoucherAdd} from "./vouchers/form/voucher-add";
import {VouchersComponent} from "./vouchers/vouchers.component";
import {Dropdown} from "./vouchers/controls/dropdown/dropdown.component";
import {VoucherListComponent} from "./vouchers/list/voucher-list";

@NgModule({
  declarations: [
    Bootstrap,
    VouchersComponent,
    VoucherAdd,
    VoucherListComponent,
    Dropdown
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // TODO import routing
  ],
  bootstrap: [Bootstrap]
})
export class AppModule {
}
