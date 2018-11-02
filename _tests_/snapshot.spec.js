const { toMatchImageSnapshot } = require('jest-image-snapshot');
const utils = require('../utils');
const config = require('../config');
const testSuiteName = 'Snapshot tests';

expect.extend({ toMatchImageSnapshot });
jest.setTimeout('30000');

let page;
/* const functions = new Functions();
const pageModel = new TestPageModel(); */
beforeEach(async () => {
  page = await utils.setupBrowser();
  jest.setTimeout("300000");
});

afterEach(async () => {
  page = await utils.closeBrowser(testSuiteName);
});

describe('Snapshot tests', () => {
    test('Google Homepage Snapshot', async () => {
      await page.goto(`${config.appUrlBase}${config.routes.home}`);
      const image = await page.screenshot({ fullPage: true });
      expect(image).toMatchImageSnapshot({ failureThreshold: '1', failureThresholdType: 'percent' });
    });
  });