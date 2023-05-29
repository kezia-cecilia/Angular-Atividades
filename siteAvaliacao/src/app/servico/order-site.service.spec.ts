import { TestBed } from '@angular/core/testing';

import { OrderSiteService } from './order-site.service';

describe('OrderSiteService', () => {
  let service: OrderSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
