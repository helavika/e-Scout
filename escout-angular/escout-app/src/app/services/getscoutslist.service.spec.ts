import { TestBed } from '@angular/core/testing';

import { GetscoutslistService } from './getscoutslist.service';

describe('GetscoutslistService', () => {
  let service: GetscoutslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetscoutslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
