import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {VoucherService} from "../service/voucher.service";

@Component({
  templateUrl: './voucher-list.html'
})
export class VoucherList {

  constructor(private router: Router,
              private voucherService:VoucherService){
  }

  private handleAdd() {
    this.router.navigate(['/vouchers/create']);
  }

  private handleAddRandom() {
    this.voucherService.addVoucher(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), 1)
  }
}
