const utils = require('../utils');
const config = require('../config');
const TestPageModel = require('../page_models/page_model');
const PageFunctions = require('../page_models/functions');
const faker = require('faker');
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
const { getNaughtyString } = require('../page_models/helper');
describe('Naughty Suite', () => {
    it('should check for naughty string input', async () => {
        var data = faker.address.streetAddress();
        await page.goto(`${config.appUrlBase}${config.routes.home}`);
        await page.waitForSelector(TestPageModel.locators.logo);
        await page.focus(TestPageModel.locators.searchField);
        await page.type(TestPageModel.locators.searchField, data);
    }, 30000);


        //var string = randomNaughtyString();


});
