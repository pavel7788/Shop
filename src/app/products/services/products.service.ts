import { Injectable } from '@angular/core';
import { IProductModel } from '../models/product.model';
import * as productsListData from '../../data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getProducts(): IProductModel[] {
    const data = productsListData;
    return data.items as IProductModel[]
  }
}
