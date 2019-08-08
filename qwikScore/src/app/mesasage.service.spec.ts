import { TestBed } from '@angular/core/testing';

import { MesasageService } from './mesasage.service';

describe('MesasageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesasageService = TestBed.get(MesasageService);
    expect(service).toBeTruthy();
  });
});
