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

<<<<<<< HEAD
  fillInForm() {
    
  }
=======
  
>>>>>>> 16b3cbd130fc7158301c5c5010fcfa16d4d74be0
}