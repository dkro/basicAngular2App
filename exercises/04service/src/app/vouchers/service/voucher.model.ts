
export class Voucher {
  id:number = -1;
  title:string = '';
  type:number = 1;

  constructor(id:number, title:string, type:number) {
    this.id = id;
    this.title = title;
    this.type = type;
  }

  static getMocks() {
    let vouchers = [];
    vouchers.push(new Voucher(1, 'Extra super duper 100% off Angular 2 Applications', 1));
    vouchers.push(new Voucher(2, 'Impressive coding skillz for everybody', 2));
    vouchers.push(new Voucher(3, 'Such wow much components', 2));
    vouchers.push(new Voucher(4, 'Magic', 1));
    return vouchers;
  }
}

export const VOUCHER_TYPES = [
  {id: 1, text: 'Code'},
  {id: 2, text: 'Deal'}
];