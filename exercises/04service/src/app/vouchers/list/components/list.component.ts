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
  private subscribers = [];

  // TODO inject voucherService
  constructor(private router: Router){}

  ngOnInit() {
    // TODO subscribe to voucherService
  }

  ngOnDestroy() {
    // TODO unsubscribe before destroy
  }

  private handleEdit(id:number) {
    this.router.navigate(['/vouchers', id]);
  }
}
