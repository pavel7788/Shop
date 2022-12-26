import { TestBed } from '@angular/core/testing';

import { CartPushService } from './cart-push.service';

describe('CartPushService', () => {
  let service: CartPushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartPushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
