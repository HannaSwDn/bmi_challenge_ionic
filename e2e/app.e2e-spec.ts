import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying BMI calculator', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('BMI calculator');
    	});
    });

    it('fills in the form and outputs a BMI value', () => {
      page.fillInForm(65, 170);
      expect(page.displayResult()).toContain('Person: Weight 65 kg, Height 170 cm');
      expect(page.displayResult()).toContain('BMI: 22.49');
      expect(page.displayResult()).toContain('You are Normal');
    })
  })
});