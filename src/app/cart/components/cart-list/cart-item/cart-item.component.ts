import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import CartItemModel from 'src/app/cart/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  //does no work at all
  //changeDetection: ChangeDetectionStrategy.OnPush
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

