import { Component } from '@angular/core';
import { ICartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  public cartItems: ICartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  public trackByItems(index: number, item: ICartItem): string {
    return item.name;
  }

}
