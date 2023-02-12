import { Injectable } from '@angular/core';
import ProductModel from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import * as data from '../../data/products.json'
import {default_products} from '../../data/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService { 

  constructor() {
  }

  //promise approach
  // getProducts(): Promise<ProductModel[]> {
  //   return new Promise ((resolve)=>{
  //     resolve (default_products)   
  //   }).catch(error => error) as Promise<ProductModel[]>
  // }

  //pure BehaviourSubject approach
  // getProducts(): BehaviorSubject<ProductModel[]> {
  //   const default_products_json = data 

  //   return new BehaviorSubject<ProductModel[]>(default_products_json.items as ProductModel[])
  // }

  //Observable via BehaviourSubject
  getProducts(): Observable<ProductModel[]> {
    const default_products_json = data 

    return new BehaviorSubject<ProductModel[]>(default_products_json.items as ProductModel[])
  }
}
