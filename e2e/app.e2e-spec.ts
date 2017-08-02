import { TinyonePage } from './app.po';

describe('tinyone App', () => {
  let page: TinyonePage;

  beforeEach(() => {
    page = new TinyonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
