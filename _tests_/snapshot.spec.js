const { toMatchImageSnapshot } = require('jest-image-snapshot');
const utils = require('../utils');
const config = require('../config');
const testSuiteName = 'Snapshot tests';
const TestPageModel = require('../page_models/page_model');

expect.extend({ toMatchImageSnapshot });
jest.setTimeout('30000');

let page;

beforeEach(async () => {
  page = await utils.setupBrowser();
  jest.setTimeout('300000');
});

afterEach(async () => {
  page = await utils.closeBrowser(testSuiteName);
});

describe('Snapshot tests', () => {
  test('Google Homepage Snapshot', async () => {
    await page.goto(`${config.appUrlBase}${config.routes.home}`);
    const image = await page.screenshot({ fullPage: true });
    expect(image).toMatchImageSnapshot({
      failureThreshold: '1',
      failureThresholdType: 'percent'
    });
  }, 16000);

  test('Google Advertising page Snapshot', async () => {
    await page.goto(`${config.appUrlBase}${config.routes.home}`);
    await page.click(TestPageModel.locators.advertisingLink);
    await utils.sleep(9000);
    const image = await page.screenshot({ fullPage: true });
    expect(image).toMatchImageSnapshot({
      failureThreshold: '1',
      failureThresholdType: 'percent'
    });
  }, 16000);
});
