import {Component} from '@angular/core';
import {VoucherService} from "../../service/voucher.service";
import {Voucher, VOUCHER_TYPES} from "../../service/voucher.model";
import {Router} from "@angular/router";

@Component({
  selector: 'voucher-list',
  templateUrl: './list.html'
})
export class VoucherListComponent {
  private vouchers:Array<Voucher> = [];
  private voucherTypes = VOUCHER_TYPES;

  constructor(private voucherService:VoucherService,
              private router: Router){}

  ngOnInit() {
    this.voucherService.subscribe((vouchers) => {
      this.vouchers = vouchers;
    })
  }

  private handleEdit(id:number) {
    this.router.navigate(['/vouchers', id]);
  }
}
