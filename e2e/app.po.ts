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
    // find weight input and fill it in
    element(by.name('weight')).element(by.tagName('ion-input')).sendKeys(weight);
    // find height input and fill it in
    element(by.name('height')).element(by.tagName('ion-input')).sendKeys(height);
    // click calculate button
    element(by.buttonText('Calculate')).click();
  }

  getResult() {
    
  }
}