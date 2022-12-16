import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() price: number | undefined;
  @Input() category: Category | undefined;
  @Input() isAvailable: boolean = true;

  constructor(private cartService: CartService) { }

  public onAddToCart(): void {
    this.cartService.addItemToCartList(this.name!, this.price!);
    console.log(`"${this.name}" has been bought!`);
  }


}
