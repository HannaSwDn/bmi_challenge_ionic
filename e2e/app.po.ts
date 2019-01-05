import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

	getPageOneTitleText() {
    return element(by.tagName('ion-title')).getText();
  }

  getForm() {
    return element(by.tagName('ion-list')).getTagName();
  }
}