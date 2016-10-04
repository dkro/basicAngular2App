import {Component} from "@angular/core/src/metadata/directives";
import {VoucherService} from "../../service/voucher.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {VOUCHER_TYPES} from "../../service/voucher.model";
@Component({
  selector: 'voucher-form',
  templateUrl: './form.html'
})
export class Form {
  private id: number = -1;
  private title: string = '';
  private type: number = 1;
  private error: string = '';
  private isCreate: boolean = true;
  private voucherTypes = VOUCHER_TYPES;

  constructor(private voucherService: VoucherService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = -1;
    this.route.params.forEach((params: Params) => {
      id = +params['id'];
    });
    if (id > -1) {
      this.isCreate = false;
      let voucher = this.voucherService.getVoucher(id);
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
    if (!this.isCreate) {
      let success = this.voucherService.editTitle(this.id, this.title, this.type);
      if (success) {
        this.router.navigate(['/vouchers']);
      } else {
        this.error = 'Voucher not found';
      }
    } else {
      this.voucherService.addVoucher(this.title, this.type);
      this.router.navigate(['/vouchers']);
    }
  }

  private handleCancel() {
    this.router.navigate(['/vouchers']);
  }

  private handleTypeSelect(type:number) {
    this.type = type;
  }
}