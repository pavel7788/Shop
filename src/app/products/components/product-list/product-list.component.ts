import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { ProductsPromiseService } from "../../services/products-promise.service";
import { CartArrayService } from 'src/app/cart/services/cart-array.service';
import ProductModel from '../../models/product.model';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';
import { CartItemComponent } from 'src/app/cart/components/cart-list/cart-item/cart-item.component';
import { CartListComponent } from 'src/app/cart/components/cart-list/cart-list.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output()
  addProduct: EventEmitter<ProductModel> = new EventEmitter();

  products!: Promise<ProductModel[]>
  products_bs$!: BehaviorSubject<ProductModel[]>
  products$!: Observable<ProductModel[]>

  constructor(
    private productsService: ProductsService, 
    private productsPromiseService: ProductsPromiseService, 
    private cartService: CartArrayService, 
    private cartObservableService: CartObservableService
  ) { }

  ngOnInit(): void {
    this.products = this.productsPromiseService.getProducts()
    //this.products = this.productsService.getProducts()
    //this.products_bs$ = this.productsService.getProducts()
    //this.products$ = this.productsService.getProducts()
    console.log(CartListComponent.prototype.cartItems$)
  }
  onAddToCart(product: ProductModel): void {
    //this.cartService.addItemToCartList(product)
    CartListComponent.prototype.cartItems$=this.cartObservableService.addItemToCartList(product)
  }
}
