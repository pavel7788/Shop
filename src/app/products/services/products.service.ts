import { Injectable } from '@angular/core';
import ProductModel from '../models/product.model';
import {products} from '../../data/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Promise<ProductModel[]> {
    return new Promise ((resolve)=>{
      resolve (products)   
    }).catch(error => error) as Promise<ProductModel[]>
  }
}
