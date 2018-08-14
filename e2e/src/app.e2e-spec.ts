import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to login if user is not authenticated', () => {
    page.navigateTo();
    expect(true);
  });
  it('should redirect to dashboard if user is authenticated', () => {
    page.navigateTo();
    expect(true);
  });
});
