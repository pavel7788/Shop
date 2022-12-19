import { Component, EventEmitter, Input, Output } from '@angular/core';
import CartItemModel from 'src/app/cart/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input()
  item!: CartItemModel;

  @Output() increaseQuantity: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() decreaseQuantity: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() deleteItem: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  onIncreaseQuantity(): void {
    this.increaseQuantity.emit(this.item);
  }
  onDecreaseQuantity(): void {
    this.decreaseQuantity.emit(this.item);
  }
  onDeleteItem(): void {
    this.deleteItem.emit(this.item);
  }

}

