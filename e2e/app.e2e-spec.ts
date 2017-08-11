import { DesignerspenPage } from './app.po';

describe('designerspen App', () => {
  let page: DesignerspenPage;

  beforeEach(() => {
    page = new DesignerspenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
