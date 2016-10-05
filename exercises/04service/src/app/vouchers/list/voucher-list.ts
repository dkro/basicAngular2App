import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {VoucherService} from "../service/voucher.service";

@Component({
  templateUrl: './voucher-list.html'
})
export class VoucherList {

  // TODO Add voucherService
  constructor(private router: Router){
  }

  private handleAdd() {
    this.router.navigate(['/vouchers/create']);
  }

  private handleAddRandom() {
    // TODO use voucherService
    // this.voucherService.addVoucher(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), 1)
  }
}
