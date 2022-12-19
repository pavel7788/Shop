import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { CartService } from 'src/app/cart/services/cart.service';
import ProductModel from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output()
  addProduct: EventEmitter<ProductModel> = new EventEmitter();

  public products: ProductModel[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  onAddToCart(product: ProductModel): void {
    this.cartService.addItemToCartList(product);
  }

}
