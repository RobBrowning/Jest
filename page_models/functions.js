const TestPageModel = require('../page_models/page_model');

// add functions here
module.exports = class GooglePage {
  async selectSearchField(page, value) {
    await page.type(TestPageModel.locators.searchField, value);
  }
};
