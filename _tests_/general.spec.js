const utils = require('../utils');
const config = require('../config');
const TestPageModel = require('../page_models/page_model');
const PageFunctions = require('../page_models/functions');

const testSuiteName = 'General tests';

jest.setTimeout('30000');
let page;

const PageFunction = new PageFunctions();

beforeEach(async () => {
  page = await utils.setupBrowser();
});
 

afterEach(async () => {
  page = await utils.closeBrowser(testSuiteName);
});

describe('General tests', () => {
  test('Go to Google', async () => {
    await page.goto(`${config.appUrlBase}${config.routes.home}`);
    await page.waitForSelector(TestPageModel.locators.logo);
    await PageFunction.selectSearchField(page, 'test');
  }, 16000);
});

