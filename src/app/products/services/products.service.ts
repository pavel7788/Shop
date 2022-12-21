import { Injectable } from '@angular/core';
import ProductModel from '../models/product.model';
import * as productsListData from '../../data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProductModel[] {
    const data = productsListData;
    return data.items as ProductModel[]
  }
}
