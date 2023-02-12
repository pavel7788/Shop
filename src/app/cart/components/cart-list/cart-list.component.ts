import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable} from 'rxjs';
import CartItemModel from '../../models/cart-item.model';
import { CartObservableService } from '../../services/cart-observable.service';
import { CartArrayService } from '../../services/cart-array.service';
import ProductModel from 'src/app/products/models/product.model';

interface SortOptions {
  key: "name" | "price" | "quantity" | "amount" ;
  isAsc: boolean;
}

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'], 
})

export class CartListComponent implements OnInit {

  cartItems!: CartItemModel[];

  cartItems$!: Observable<CartItemModel[]>;
  isNotEmptyCart$!: Observable<boolean>
  totalQuantity$!: Observable<Number>
  totalSum$!: Observable<Number>

  itemToAdd$!: Observable<CartItemModel>

  constructor  (
    private cartService: CartArrayService, 
    private cartObservableService: CartObservableService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    //this.cartItems = this.cartService.getCartItems() 
    this.cartItems$ = this.cartObservableService.getCartItems()  
    this.isNotEmptyCart$ = this.isNotEmptyCart()   
    this.totalQuantity$ = this.getTotalQuantity()
    this.totalSum$ = this.getTotalSum()
  }

  //isNotEmptyCart(): boolean {
  isNotEmptyCart(): Observable<boolean> {
    //return this.cartService.isNotEmptyCart()
    return this.cartObservableService.isNotEmptyCart()
  }

  onSortOptionsChange(): void {
    this.cdr.markForCheck();
  }

  trackByItems(_index: number, item: CartItemModel): number {
    return item.id;
  }

  //getTotalQuantity(): number {
  getTotalQuantity(): Observable<number> {
    //via method
    //return this.cartService.getTotalQuantity();
    //return this.cartObservableService.getTotalQuantity();

    //via getter
    //return this.cartService.totalQuantity;
    return this.cartObservableService.getTotalQuantity()
  }

  //getTotalSum(): number {
  getTotalSum(): Observable<number> {
    //via method
    //return this.cartService.getTotalSum();
    //return this.cartObservableService.getTotalSum();

    //via getter
    //return this.cartService.totalSum;
    return this.cartObservableService.getTotalSum();
  }

  onIncreaseQuantity(increaseProduct: CartItemModel): void {
    //this.cartService.increaseQuantity(increaseProduct);
    this.cartItems$ = this.cartObservableService.increaseQuantity(increaseProduct)
  }

  onDecreaseQuantity(decreaseProduct: CartItemModel): void {
    //this.cartService.decreaseQuantity(decreaseProduct);
    this.cartItems$ = this.cartObservableService.decreaseQuantity(decreaseProduct)
  }

  onDeleteItem(deleteProduct: CartItemModel): void {
    //this.cartService.deleteItem(deleteProduct);    
    this.cartItems$ = this.cartObservableService.deleteItem(deleteProduct);
  }

}
