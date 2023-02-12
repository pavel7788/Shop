import { Injectable } from '@angular/core';
import ProductModel from 'src/app/products/models/product.model';
import CartItemModel from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartArrayService {
  
  cartProducts: CartItemModel[] = [];

  constructor() { }  
  
  get totalQuantity(): number {
    return this.getTotalQuantity()
  }

  get totalSum(): number {
    return this.getTotalSum()
  }

  getCartItems(): CartItemModel[] {
    return this.cartProducts;
  }

  addItemToCartList(product: ProductModel): void {

    //mutable approach
    const itemToAdd = this.cartProducts.find(item => item.id === product.id);
    if (!itemToAdd) {
      this.cartProducts.push({ id: product.id, name: product.name, price: product.price, quantity: 1, amount: product.price })
    } else {
      itemToAdd.quantity += 1;
      itemToAdd.amount = Number((itemToAdd.price * itemToAdd.quantity));
    }

    //unmutable approach - does not work
    // let itemToAdd = this.cartProducts.find(item => item.id === product.id);
    // if (!itemToAdd) {
    //   itemToAdd = { id: product.id, name: product.name, price: product.price, quantity: 1, amount: product.price };
    //   this.cartProducts = [...this.cartProducts, itemToAdd];
    // } else {
    //   itemToAdd.quantity += 1;
    //   itemToAdd.amount = Number((itemToAdd.price * itemToAdd.quantity));
    //   this.cartProducts = [...this.cartProducts];
    // }
  }
  
  getTotalQuantity(): number {
    return this.cartProducts.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }
 
  getTotalSum(): number {
    return this.cartProducts.reduce(
      (acc, item) => acc + item.amount,
      0
    );
  }

  increaseQuantity(cartItem: CartItemModel): void {
    cartItem.quantity++;
    cartItem.amount += cartItem.price;
  }

  decreaseQuantity(cartItem: CartItemModel): void {
    if (cartItem.quantity === 1) {
      this.deleteItem(cartItem);
      return;
    }
    cartItem.quantity--;
    cartItem.amount -= cartItem.price;
  }

  deleteItem(cartItem: CartItemModel): void {
    this.cartProducts.splice(this.cartProducts.indexOf(cartItem), 1);
  } 

  isNotEmptyCart(): boolean {
    return this.cartProducts.length > 0;
  }
}
