import { OrwebappPage } from './app.po';

describe('orwebapp App', function() {
  let page: OrwebappPage;

  beforeEach(() => {
    page = new OrwebappPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('orwebapp works!');
  });
});
