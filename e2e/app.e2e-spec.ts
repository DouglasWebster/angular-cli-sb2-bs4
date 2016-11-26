import { SBAdBS4Ng2Page } from './app.po';

describe('sbad-bs4-ng2 App', function() {
  let page: SBAdBS4Ng2Page;

  beforeEach(() => {
    page = new SBAdBS4Ng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
