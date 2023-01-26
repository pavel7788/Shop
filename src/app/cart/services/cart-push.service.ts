import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import CartItemModel from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartPushService {

  private channelQuantity = new Subject<number>();
  private channelSum = new Subject<number>();

  channelQuantity$ = this.channelQuantity.asObservable();
  channelSum$ = this.channelSum.asObservable();

  // обычно количество и сумма идут вместе
  // можно создать переменную типа tuple
  // и тогда не надо будет два сабджекта
  publishData(q: number, s: number): void {
    this.channelQuantity.next(q);
    this.channelSum.next(s);
  }

}
