import {Component} from '@angular/core';
import {VoucherService} from "../../service/voucher.service";

@Component({
  selector: 'voucher-statistics',
  templateUrl: './statistics.html'
})
export class VoucherStatsComponent {
  private amount:number = 0;

  constructor(private voucherService:VoucherService){
  }

  ngOnInit() {
    this.voucherService.subscribe((vouchers) => {
      this.amount = vouchers.length;
    })
  }
}
