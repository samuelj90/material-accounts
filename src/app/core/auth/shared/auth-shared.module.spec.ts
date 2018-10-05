import { AuthSharedModule } from './auth-shared.module';

describe('AuthSharedModule', () => {
  let authSharedModule: AuthSharedModule;

  beforeEach(() => {
    authSharedModule = new AuthSharedModule();
  });

  it('should create an instance', () => {
    expect(authSharedModule).toBeTruthy();
  });
});
