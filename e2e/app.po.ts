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

  fillInForm(weight, height) {
    page.getField('weight').sendKeys(weight);
    page.getField('height').sendKeys(height);
  }
}