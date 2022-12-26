import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { CartService } from 'src/app/cart/services/cart.service';
import ProductModel from '../../models/product.model';
import { Subscription } from 'rxjs';
import { CartPushService } from 'src/app/cart/services/cart-push.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output()
  addProduct: EventEmitter<ProductModel> = new EventEmitter();

  products: ProductModel[] = [];

  //for push
  private sub!: Subscription;
  totalQuantity!: number
  totalSum!: number

  constructor(private productsService: ProductsService, private cartService: CartService, private cartPushService: CartPushService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  onAddToCart(product: ProductModel): void {
    this.cartService.addItemToCartList(product);

    this.cartPushService.publishData(this.cartService.getTotalQuantity(), this.cartService.getTotalSum());
  }
}
