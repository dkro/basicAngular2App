import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {VOUCHER_TYPES} from "../vouchers.model";

@Component({
  selector: 'voucher-list',
  templateUrl: './voucher-list.html'
})
export class VoucherListComponent {
  private vouchers:Array<any> = [];
  private voucherTypes:any = VOUCHER_TYPES;

  constructor(private router: Router){}

  ngOnInit() {
    this.vouchers = this.setUpInitalVouchers();
  }

  // TODO navigate on this event .navigate(['/vouchers', id])
  private handleEdit(id:number) {
  }

  // TODO navigate on this event ['/vouchers/create']
  private handleAdd() {
  }

  private handleAddRandom() {
    this.vouchers.push({
      id: Math.floor((Math.random() * 100) + 1),
      title: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    })
  }

  private setUpInitalVouchers() {
    let vouchers = [];
    vouchers.push({id: 1, title: 'Extra super duper 100% off Angular 2 Applications', type: 1});
    vouchers.push({id: 2, title: 'Impressive coding skillz for everybody', type: 2});
    vouchers.push({id: 3, title: 'Such wow much components', type: 2});
    vouchers.push({id: 4, title: 'Magic', type: 1});
    return vouchers;
  }
}
