import { TestBed } from '@angular/core/testing';

import { AccountsDataServiceService } from './accounts-data-service.service';

describe('AccountsDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountsDataServiceService = TestBed.get(AccountsDataServiceService);
    expect(service).toBeTruthy();
  });
});
