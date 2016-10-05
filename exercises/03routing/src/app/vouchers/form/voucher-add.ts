import { Component } from '@angular/core';
import {VOUCHER_TYPES} from "../vouchers.model";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  templateUrl: './voucher-add.html'
})
export class VoucherAdd {
  private id: number = -1;
  private title: string = '';
  private type: number = 1;
  private error: string = '';
  private isCreate: boolean = true;
  private voucherTypes = VOUCHER_TYPES;

  // TODO add router: Router ---- route: ActivatedRoute
  constructor() {
  }

  ngOnInit() {
    let id = -1;
    // TODO read route.params.forEach



    // Differenciate between Creation and Edit
    if (id > -1) {
      this.isCreate = false;
      // Can't load the edit Data without a service
      let voucher = {
        id: 1,
        title: 'Without Service can not load data',
        type: 1,
      };
      if (!!voucher) {
        this.id = voucher.id;
        this.title = voucher.title;
        this.type = voucher.type;
      } else {
        this.error = `Voucher with id ${id} not found`;
      }
    }
  }

  private handleSave() {
    // Without Service there is no point to save
  }

  // TODO navigate(['/vouchers'])
  private handleCancel() {
  }

  private handleTypeSelect(type:number) {
    this.type = type;
  }
}



// this.route.params.forEach((params: Params) => {
//   id = +params['id'];
// });