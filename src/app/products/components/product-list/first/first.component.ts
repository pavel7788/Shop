import { Component } from '@angular/core';
import ProductModel from 'src/app/products/models/product.model';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  product: ProductModel = new ProductModel('Korona', 'Chocolate extra dark', 53, Category.FOOD, false);

  constructor() { }

  public onAddToCart(): void {
    console.log(`Sorry, this item is out of the stock!!!`);
  }


}
