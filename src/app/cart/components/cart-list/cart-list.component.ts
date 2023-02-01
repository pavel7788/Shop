import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import CartItemModel from '../../models/cart.model';
import { CartPushService } from '../../services/cart-push.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  cartItems!: CartItemModel[];

  //for push
  private sub!: Subscription;
  totalQuantity!: number
  totalSum!: number

  constructor(private cartService: CartService, private cartPushService: CartPushService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();

    this.sub = this.cartPushService.channelQuantityAndSum$.subscribe(
      data => {
        this.totalQuantity = data[0]; 
        this.totalSum=data[1]
      }
    );

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  trackByItems(_index: number, item: CartItemModel): string {
    return item.name;
  }

  getTotalQuantity(): number {
    //via method
    //return this.cartService.getTotalQuantity();

    //via getter
    return this.cartService.totalQuantity;
  }

  getTotalSum(): number {
    //via method
    //return this.cartService.getTotalSum();

    //via getter
    return this.cartService.totalSum;
  }

  onIncreaseQuantity(increaseProduct: CartItemModel): void {
    this.cartService.increaseQuantity(increaseProduct);

    this.cartPushService.publishData(this.getTotalQuantity(), this.getTotalSum());
  }

  onDecreaseQuantity(decreaseProduct: CartItemModel): void {
    this.cartService.decreaseQuantity(decreaseProduct);

    this.cartPushService.publishData(this.getTotalQuantity(), this.getTotalSum());
  }

  onDeleteItem(deleteProduct: CartItemModel): void {
    this.cartService.deleteItem(deleteProduct);

    this.cartPushService.publishData(this.getTotalQuantity(), this.getTotalSum());
  }


}
