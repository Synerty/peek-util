import { PeekClientFeUtilPage } from './app.po';

describe('peek-client-fe-util App', function() {
  let page: PeekClientFeUtilPage;

  beforeEach(() => {
    page = new PeekClientFeUtilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});