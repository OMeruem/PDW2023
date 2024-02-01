import { TestBed } from '@angular/core/testing';

import { SecurityFormUtilsService } from './security-form-utils.service';

describe('SecurityFormUtilsService', () => {
  let service: SecurityFormUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityFormUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
