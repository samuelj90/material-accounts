import { TestBed } from '@angular/core/testing';

import { AccountsMockServiceService } from './accounts-mock-service.service';

describe('AccountsMockServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountsMockServiceService = TestBed.get(AccountsMockServiceService);
    expect(service).toBeTruthy();
  });
});
