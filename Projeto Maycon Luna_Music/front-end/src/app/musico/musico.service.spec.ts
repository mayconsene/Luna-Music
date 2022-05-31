import { TestBed } from '@angular/core/testing';

import { MusicoService } from './musico.service';

describe('MusicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicoService = TestBed.get(MusicoService);
    expect(service).toBeTruthy();
  });
});
