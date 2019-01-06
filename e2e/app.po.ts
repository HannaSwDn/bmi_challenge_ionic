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
    element(by.id('weight')).element(by.tagName('input')).sendKeys(65);
    element(by.id('height')).element(by.tagName('input')).sendKeys(170);
    element(by.buttonText('Calculate')).click();
  }

  displayResult() {
    return element(by.id('display')).getAttribute('textContent');
  }
}