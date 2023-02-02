import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { constantsProvider, constantsServiceToken } from 'src/app/core/services/constants.service';
import { generatedString, generatedStringProvider, GeneratorFactory } from 'src/app/core/services/generator.factory';
import { localStorageProvider, localStorageToken } from 'src/app/core/services/local-storage.service';
import ProductModel from 'src/app/products/models/product.model';
import { Category } from '../../../models/category.model';
import { ConfigModel } from 'src/app/core/models/config.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [constantsProvider, localStorageProvider, generatedStringProvider],
})
export class FirstComponent implements OnInit {
  product: ProductModel = new ProductModel('Korona', 'Chocolate extra dark', 53, Category.FOOD, false);

  constructor(
    @Optional() @Inject(constantsServiceToken) private constants: Record<string, string>,
    @Optional() private gs: GeneratorService,
    @Optional() @Inject(localStorageToken) private localStorage: any,
    @Optional() @Inject(generatedString) private stringGenerator: string,
    @Optional() private cs: ConfigOptionsService,
 ) {
 }
  ngOnInit(): void {
    this.cs.setConfig({id:1, login:'pavel'});
    console.log(this.cs.getConfig());

    console.log(this.constants);
    console.log(this.gs.generate(20));

    this.counter();

    // smth is wrong here
    console.log(this.localStorage);
    console.log(this.stringGenerator);
  }

  onAddToCart(): void {
    console.log(`Sorry, this item is out of the stock!!!`);
  }

  // почему вдруг метод с большой буквы?
  counter(): void {
    while (this.gs.getNewID()<10)
      setTimeout(() => console.log(this.gs.getNewID()), 1000);
  }




}
