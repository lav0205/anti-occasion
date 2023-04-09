import { TestBed } from '@angular/core/testing';

import { WeddingService } from './wedding.service';

describe('WeddingService', () => {
  let service: WeddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
