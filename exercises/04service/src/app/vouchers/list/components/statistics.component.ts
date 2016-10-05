import {Component} from '@angular/core';
import {VoucherService} from "../../service/voucher.service";

@Component({
  selector: 'voucher-statistics',
  templateUrl: './statistics.html'
})
export class VoucherStatsComponent {
  private amount:number = 0;
  private subscribers = [];

  // TODO inject voucherService
  constructor(){
  }

  ngOnInit() {
    // TODO subscribe to VoucherService
  }

  ngOnDestroy() {
    // TODO unsubscribe before destroying
  }
}
