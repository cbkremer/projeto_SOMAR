import { TestBed } from '@angular/core/testing';

import { GetInstituicaoService } from './get-instituicao.service';

describe('GetInstituicaoService', () => {
  let service: GetInstituicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInstituicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
