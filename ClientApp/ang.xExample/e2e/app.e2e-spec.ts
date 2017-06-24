import { Ang.XExamplePage } from './app.po';

describe('ang.x-example App', () => {
  let page: Ang.XExamplePage;

  beforeEach(() => {
    page = new Ang.XExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
