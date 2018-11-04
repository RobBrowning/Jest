const utils = require('../utils');
const config = require('../config');
const TestPageModel = require('../page_models/page_model');
const PageFunctions = require('../page_models/functions');
const { axe, toHaveNoViolations } = require('jest-axe')

const testSuiteName = 'Axe tests';

jest.setTimeout('30000');
let page;

const PageFunction = new PageFunctions();

beforeEach(async () => {
  page = await utils.setupBrowser();
});
 

afterEach(async () => {
  page = await utils.closeBrowser(testSuiteName);
});

expect.extend(toHaveNoViolations)

describe('Accessibility tests using AXE', () => {
it('AXE - Advertising page Accessibility Tests', async () => {
    await page.goto(`${config.appUrlBase}${config.routes.home}`);
    await page.waitForSelector(TestPageModel.locators.logo);
    await page.click(TestPageModel.locators.advertisingLink);
    const html = await page.content();

    expect(await axe(html)).toHaveNoViolations()
})

it('AXE - Homepage Accessibility Tests', async () => {
  await page.goto(`${config.appUrlBase}${config.routes.home}`);
  await page.waitForSelector(TestPageModel.locators.logo);
  const html = await page.content();

  expect(await axe(html)).toHaveNoViolations()
})
});