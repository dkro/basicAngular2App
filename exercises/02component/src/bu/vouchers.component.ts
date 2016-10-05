import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bootstrap',
  templateUrl: './vouchers.html'
})
export class Bootstrap implements OnInit {
  private vouchers:Array<any> = [];

  ngOnInit() {
    this.vouchers = this.setUpInitalVouchers();
  }

  private handleAddRandom() {
    this.vouchers.push({
      id: Math.floor((Math.random() * 100) + 1),
      title: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    })
  }

  private setUpInitalVouchers() {
    let vouchers = [];
    vouchers.push({id: 1, title: 'Extra super duper 100% off Angular 2 Applications'});
    vouchers.push({id: 2, title: 'Impressive coding skillz for everybody'});
    vouchers.push({id: 3, title: 'Such wow much components'});
    vouchers.push({id: 4, title: 'Magic'});
    return vouchers;
  }
}