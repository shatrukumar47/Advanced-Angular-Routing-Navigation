import { TestBed } from '@angular/core/testing';

import { CRUDServiceService } from './crud-service.service';

describe('CRUDServiceService', () => {
  let service: CRUDServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
