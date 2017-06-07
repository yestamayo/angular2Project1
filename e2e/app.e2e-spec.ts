import { Angular2Project1Page } from './app.po';

describe('angular2-project1 App', () => {
  let page: Angular2Project1Page;

  beforeEach(() => {
    page = new Angular2Project1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
