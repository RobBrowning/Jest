const utils = require('../utils');
const config = require('../config');
const TestPageModel = require('../page_models/page_model');
const PageFunctions = require('../page_models/functions');
const text = require('../TestData/Data');
const faker = require('faker');

const testSuiteName = 'naughty strings tests';

jest.setTimeout('30000');
let page;

const PageFunction = new PageFunctions();

beforeEach(async () => {
  page = await utils.setupBrowser();
});
 

afterEach(async () => {
  page = await utils.closeBrowser(testSuiteName);
});

//Test using Faker for random test data
describe('Naughty Suite', () => {
    it('should use Faker for random test string input', async () => {
        var data = faker.address.streetAddress();
        await page.goto(`${config.appUrlBase}${config.routes.home}`);
        await page.waitForSelector(TestPageModel.locators.logo);
        await page.focus(TestPageModel.locators.searchField);
        await page.type(TestPageModel.locators.searchField, data);
    }, 30000);

    //Test using test data in a js file to handle data
    it('should use testdata', async () => {
        await page.goto(`${config.appUrlBase}${config.routes.home}`);
        await page.waitForSelector(TestPageModel.locators.logo);
        await page.click(TestPageModel.locators.searchField);
        await page.keyboard.type(text.naughtyStringXSS);
        await page.click(TestPageModel.locators.googleSearchButton);
        const logoExists = await page.$eval(TestPageModel.locators.resultsLogo, el => (el ? true : false));
        expect(logoExists).toBe(true);
    }, 50000);
})
