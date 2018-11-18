const utils = require('../utils');
const config = require('../config');
const TestPageModel = require('../page_models/page_model');
const PageFunctions = require('../page_models/functions');

//const randomNaughtyString = require('naughty-string-validator');

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

    const { getNaughtyString } = require('../page_models/helper');
    //Test using naughty string validator for random test data
    describe('Naughty Suite', () => {
    it('should use Faker and naughty string validator for random test string input', async () => {
        var data = faker.address.streetAddress();
        //var string = randomNaughtyString();
        await page.goto(`${config.appUrlBase}${config.routes.home}`);
        await page.waitForSelector(TestPageModel.locators.logo);
        await page.focus(TestPageModel.locators.searchField);
        await page.type(TestPageModel.locators.searchField, data);
    }, 30000);


});
