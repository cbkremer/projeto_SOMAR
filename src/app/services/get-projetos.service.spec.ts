import { TestBed } from '@angular/core/testing';

import { GetProjetosService } from './get-projetos.service';

describe('GetProjetosService', () => {
  let service: GetProjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
