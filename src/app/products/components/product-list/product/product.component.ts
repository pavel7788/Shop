import { Component, EventEmitter, Input, Output } from '@angular/core';
import ProductModel from 'src/app/products/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  private _product!: ProductModel;

  @Input()
  get product(): ProductModel {
    return this._product;
  };
  set product(value: ProductModel) {
    // intercept input property changes w/ setter
    this._product = value;
  }

  @Output()
  addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onAddToCart(): void {
    this.addProduct.emit(this.product);
  }

}
