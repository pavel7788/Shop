import { Injectable } from '@angular/core';
import ProductModel from 'src/app/products/models/product.model';
import CartItemModel from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: CartItemModel[] = [];

  constructor() { }

  public getCartItems(): CartItemModel[] {
    return this.cartProducts;
  }

  get totalQuantity(): number {
    return this.cartProducts.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }

  get totalSum(): number {
    return this.cartProducts.reduce(
      (acc, item) => acc + item.amount,
      0
    );
  }

  addItemToCartList(product: ProductModel): void {

    //mutable approach
    const itemToAdd = this.cartProducts.find(item => item.name === product.name);
    if (!itemToAdd) {
      this.cartProducts.push({ name: product.name, price: product.price, quantity: 1, amount: product.price })
    } else {
      itemToAdd.quantity += 1;
      itemToAdd.amount = Number((itemToAdd.price * itemToAdd.quantity));
    }

    //unmutable approach - does not work
    // let itemToAdd = this.cartProducts.find(item => item.name === product.name);
    // if (!itemToAdd) {
    //   itemToAdd = { name: product.name, price: product.price, quantity: 1, amount: product.price };  
    //   this.cartProducts = [...this.cartProducts, itemToAdd];
    // } else {
    //   itemToAdd.quantity += 1;
    //   itemToAdd.amount = Number((itemToAdd.price * itemToAdd.quantity));
    //   this.cartProducts = [...this.cartProducts];
    // }   
    // console.log(this.cartProducts);    
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
  public isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }
}
