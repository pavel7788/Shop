import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartPushService {

  private channelQuantityAndSum = new Subject<[number, number]>();

  channelQuantityAndSum$ = this.channelQuantityAndSum.asObservable();

  publishData(q: number, s: number): void {
    this.channelQuantityAndSum.next([q,s]);
  }

}
