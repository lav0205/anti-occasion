import { TestBed } from '@angular/core/testing';

import { ReligiousOccasionService } from './religious-occasion.service';

describe('ReligiousOccasionService', () => {
  let service: ReligiousOccasionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReligiousOccasionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
