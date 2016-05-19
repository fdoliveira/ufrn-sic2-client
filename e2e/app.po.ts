export class OrwebappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('orwebapp-app h1')).getText();
  }
}
