import { TestBed } from '@angular/core/testing';

import { GetOdsService } from './get-ods.service';
import { sequenceEqual } from 'rxjs';

describe('GetOdsService', () => {
  let service: GetOdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
