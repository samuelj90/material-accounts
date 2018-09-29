import { AccountsSharedModule } from './accounts-shared.module';

describe('AccountsSharedModule', () => {
  let accountsSharedModule: AccountsSharedModule;

  beforeEach(() => {
    accountsSharedModule = new AccountsSharedModule();
  });

  it('should create an instance', () => {
    expect(accountsSharedModule).toBeTruthy();
  });
});
