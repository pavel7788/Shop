import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, type HttpResponse, type HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, retry, share, map, concatMap } from 'rxjs';
import { CartAPI } from './../cart.config';
import ProductModel from 'src/app/products/models/product.model';
import CartItemModel from '../models/cart-item.model';


@Injectable({
  providedIn: 'root'
})
export class CartObservableService{

  cartProducts$: Observable<CartItemModel[]>;

  constructor(
    private http: HttpClient,
    @Inject(CartAPI) private cartUrl: string
  ) {      
      this.cartProducts$ = this.getCartItems()
  }

  get totalQuantity(): Observable<number> {
    return this.getTotalQuantity()
  }

  get totalSum(): Observable<number> {
    return this.getTotalSum()
  }

  getCartItems(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(this.cartUrl)
      .pipe(
        retry(3),
        share(),
        catchError(this.handleError)
      );
  }

  addItemToCartList(product: ProductModel): Observable<CartItemModel[]>  {

    const url = this.cartUrl

    const item: CartItemModel = new CartItemModel(product.id, product.name, product.price, 1, product.price)

    return this.http.post<CartItemModel>(url, item)
      .pipe(
        concatMap(() => this.getCartItems()),
        catchError(this.handleError)
      );
  }
 
  getTotalQuantity(): Observable<number> { 
    return this.cartProducts$
      .pipe(
        map((cart: any) => {
          return (cart as CartItemModel[]).reduce(
            (acc, item) => acc + item.quantity,
            0
          );
      }),
      catchError(this.handleError)
    );        
  }

  getTotalSum(): Observable<number> {
    return this.cartProducts$
      .pipe(
        map((cart: any) => {
          return (cart as CartItemModel[]).reduce(
            (acc, item) => acc + item.amount,
            0
          );
      }),
      catchError(this.handleError)
    );        
  }

  increaseQuantity(cartItem: CartItemModel): Observable<CartItemModel[]> {

    const url = `${this.cartUrl}/${cartItem.id}`;

    let updatedItem = new CartItemModel (cartItem.id, cartItem.name, cartItem.price, cartItem.quantity+1, cartItem.amount+cartItem.price)

    return this.http.put<CartItemModel>(url, updatedItem)
      .pipe(
        concatMap(() => this.getCartItems()),
        catchError(this.handleError)
      );
  }

  decreaseQuantity(cartItem: CartItemModel): Observable<CartItemModel[]>{

    const url = `${this.cartUrl}/${cartItem.id}`;

    if (cartItem.quantity === 1) {
      return this.http.delete(url).pipe(
        concatMap(() => this.getCartItems()),
        catchError(this.handleError)
      );
    }

    let updatedItem = new CartItemModel (cartItem.id, cartItem.name, cartItem.price, cartItem.quantity-1, cartItem.amount-cartItem.price)

    return this.http.put<CartItemModel>(url, updatedItem)
      .pipe(
        concatMap(() => this.getCartItems()),
        catchError(this.handleError)
      );
  }

  deleteItem(cartItem: CartItemModel): Observable<CartItemModel[]> {
   
    const url = `${this.cartUrl}/${cartItem.id}`;

    return this.http.delete(url).pipe(
      concatMap(() => this.getCartItems()),
      catchError(this.handleError)
    );
  }

  isNotEmptyCart(): Observable<boolean> {    
    return this.cartProducts$
      .pipe(
        map((cart: any) => {
          return cart.length > 0
         }),         
      catchError(this.handleError)
    );  
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
     // A client-side or network error occurred. Handle it accordingly.
     console.error('An error occurred:', error.error);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}


  

