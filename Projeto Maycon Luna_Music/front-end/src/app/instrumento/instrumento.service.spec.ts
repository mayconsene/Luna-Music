import { TestBed } from '@angular/core/testing';

import { InstrumentoService } from './instrumento.service';

describe('InstrumentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumentoService = TestBed.get(InstrumentoService);
    expect(service).toBeTruthy();
  });
});
