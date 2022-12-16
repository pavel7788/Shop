import { Component } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  public name = 'Korona';
  public description = 'Chocolate extra dark';
  public price = 53;
  public category = Category.FOOD;
  public isAvailable = false;

  constructor() { }

  public onAddToCart(): void {
    console.log(`Sorry, this item is out of the stock!!!`);
  }


}
