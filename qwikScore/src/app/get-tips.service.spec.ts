import { TestBed } from '@angular/core/testing';

import { GetTipsService } from './get-tips.service';

describe('GetTipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTipsService = TestBed.get(GetTipsService);
    expect(service).toBeTruthy();
  });
});
