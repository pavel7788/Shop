export default class CartItemModel {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public amount: number,
  ) { }
}
