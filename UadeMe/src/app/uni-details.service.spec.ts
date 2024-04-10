import { TestBed } from '@angular/core/testing';

import { UniDetailsService } from './uni-details.service';

describe('UniDetailsService', () => {
  let service: UniDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
