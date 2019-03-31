import { SbadBs4Ng2Page } from './app.po';
import { browser, logging } from 'protractor';
describe('sbad-bs4-ng2 App', () => {
  let page: SbadBs4Ng2Page;

  beforeEach(() => {
    page = new SbadBs4Ng2Page();
  });

  it('should display message saying SB Admin BS 4 Angular2', () => {
    page.navigateTo();
    expect(page.getParagraphText().toEqual('SB Admin BS 4 Angular2'));
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
