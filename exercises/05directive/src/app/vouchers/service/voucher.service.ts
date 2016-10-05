import {Injectable} from "@angular/core";
import {Voucher} from "./voucher.model";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class VoucherService {
  private vouchers:Array<Voucher> = Voucher.getMocks();
  private vouchersSubject:BehaviorSubject<any> = new BehaviorSubject(this.vouchers);

  public addVoucher(title:string, type:number) {
    this.vouchers.push(new Voucher(Math.floor((Math.random() * 100) + 1), title, type));
    this.vouchersSubject.next(this.vouchers);
  }

  public editTitle(id:number, title:string, type:number):boolean {
    let v = this.getVoucher(id);
    if (!!v) {
      v.title = title;
      v.type = type;
      return true
    } else {
      return false
    }
  }

  public removeVoucher(id:number) {
    let i = this.vouchers.findIndex((v) => v.id === id);
    if (i < -1) {
      this.vouchers.splice(i, 1);
    }
    this.vouchersSubject.next(this.vouchers);
  }

  public getVoucher(id:number):Voucher {
    return this.vouchers.find((v) => v.id === id);
  }

  public subscribe(generatorOrNext?:any, error?:any, complete?:any):any {
    return this.vouchersSubject.subscribe(generatorOrNext, error, complete);
  }
}