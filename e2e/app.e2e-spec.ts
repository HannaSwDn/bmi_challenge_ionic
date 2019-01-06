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

    it('fills in form and outputs a result'), () => {
      page.fillInForm(65, 170);
      expect(page).toContain('You are normal');
    };
  })
});