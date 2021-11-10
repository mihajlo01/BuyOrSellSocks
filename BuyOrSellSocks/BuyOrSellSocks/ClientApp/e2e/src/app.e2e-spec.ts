
import { AppPage } from './app.po';

describe('BuyOrSellSocks App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: BuyOrSellSocks', async () => {
    await page.navigateTo();
    expect(await page.getAppTitle()).toEqual('BuyOrSellSocks');
  });
});
