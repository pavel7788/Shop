import { Component, EventEmitter, Output } from '@angular/core';
import CartItemModel from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  // не понял для чего тут эти аутпуты
  // @Output() increaseProduct: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  // @Output() decreaseProduct: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  // @Output() deleteProduct: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  cartItems: CartItemModel[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  trackByItems(_index: number, item: CartItemModel): string {
    return item.name;
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  onIncreaseQuantity(increaseProduct: CartItemModel): void {
    this.cartService.increaseQuantity(increaseProduct);
  }

  onDecreaseQuantity(decreaseProduct: CartItemModel): void {
    this.cartService.decreaseQuantity(decreaseProduct);
  }

  onDeleteItem(deleteProduct: CartItemModel): void {
    this.cartService.deleteItem(deleteProduct);
  }


}
