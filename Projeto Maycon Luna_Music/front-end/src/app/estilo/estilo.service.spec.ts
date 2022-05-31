import { TestBed } from '@angular/core/testing';

import { EstiloService } from './estilo.service';

describe('EstiloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstiloService = TestBed.get(EstiloService);
    expect(service).toBeTruthy();
  });
});
