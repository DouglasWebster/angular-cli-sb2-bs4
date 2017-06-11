import { SbadBs4Ng2Page } from './app.po';

describe('sbad-bs4-ng2 App', () => {
  let page: SbadBs4Ng2Page;

  beforeEach(() => {
    page = new SbadBs4Ng2Page();
  });

  it('should display message saying SB Admin BS 4 Angular2', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('SB Admin BS 4 Angular2'))
      .then(done, done.fail);
  });
});
