import { Injectable } from '@angular/core';
import ProductModel from 'src/app/products/models/product.model';
import CartItemModel from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: CartItemModel[] = [];

  constructor() { }

  public getCartItems(): CartItemModel[] {
    return this.cartList;
  }

  public addItemToCartList(product: ProductModel): void {
    const itemToAdd = this.cartList.find(item => item.name === product.name);
    if (!itemToAdd) {
      this.cartList.push({ name: product.name, quantity: 1, amount: product.price })
    } else {
      itemToAdd.quantity += 1;
      itemToAdd.amount = Number((product.price * itemToAdd.quantity));
    }
  }

  public getTotalQuantity(): number {
    return Array.from(this.cartList.values()).reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }

  public getTotalSum(): number {
    return Array.from(this.cartList.values()).reduce(
      (acc, item) => acc + item.amount,
      0
    );
  }

  public increaseQuantity(cartItem: CartItemModel): void {
    cartItem.quantity++;
  }
  public decreaseQuantity(cartItem: CartItemModel): void {
    if (cartItem.quantity === 1) {
      this.deleteItem(cartItem);
      return;
    }
    cartItem.quantity--;
  }
  public deleteItem(cartItem: CartItemModel): void {
    this.cartList.splice(this.cartList.indexOf(cartItem), 1);
  }
}
