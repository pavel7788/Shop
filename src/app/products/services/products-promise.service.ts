import { Injectable } from '@angular/core';
import ProductModel from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService { 

  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<ProductModel[]> {
    const request$ = this.http.get(this.productsUrl);
    return firstValueFrom(request$)
      .then(response => response as ProductModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}
