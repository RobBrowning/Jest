const puppeteer = require('puppeteer-core');
const config = require('./config');
const mkdirp = require('mkdirp');
 
let browser;
let document;
let page;
const browserWidth = 1280;
const browserHeight = 800;
let testId = 0;
 
if (process.env.URL != null) {
  config.appUrlBase = process.env.URL.trim();
}
 
const debug =
  typeof v8debug === 'object' ||
  /--debug|--inspect/.test(process.execArgv.join(' '));
 
const setupBrowser = async () => {
  if (process.env.NODE_ENV.includes('DEBUG') || debug) {
    browser = await puppeteer.launch({
      executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      headless: false,
      slowMo: 500,
      args: ['--disable-dev-shm-usage', '--start-maximized'], // added due to lack of memory issue https://github.com/GoogleChrome/puppeteer/issues/1834
    });
    jest.setTimeout(300000);
  } else {
    browser = await puppeteer.launch({
      executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      headless: true,
      args: ['--disable-dev-shm-usage'], // added due to lack of memory issue https://github.com/GoogleChrome/puppeteer/issues/1834
    });
    jest.setTimeout(15000);
  }
  page = await browser.newPage();
  createExtensions(page);
  page.setViewport({
    width: browserWidth,
    height: browserHeight,
  });
  return page;
};
 
const closeBrowser = async (testSuiteName) => {
  testId += 1;
  await mkdirp('./test_results/screenshots/');
  const fileName = `./test_results/screenshots/${testSuiteName}-${testId}.png`;
  await page.screenshot({
    path: fileName,
    fullPage: true,
  });
  await browser.close();
};
 
function createExtensions() {
  page.assertContent = async (actual, expected) => {
    const expectedContent = await page.$eval(actual, (el) => el.textContent);
    expect(expectedContent).toEqual(expected);
  };
 
  page.getText = async (selector) => {
    const selectorText = await page.$eval(selector, (el) => el.textContent);
    return selectorText;
  };
 
  page.notInDom = async (selector) => {
    try {
      const s = await page.$(selector);
      if (s) {
        throw new Error('Element is in DOM and should not be');
      }
      return true;
    } catch (error) {
      throw new Error('Element is in DOM and should not be');
    }
  };
 
  page.selectByText = async (sels, texts) => {
    const s = await page.evaluate(
      (sel1, text1) => {
        let val;
        const selectList = document.querySelector(sel1);
        Object.keys(selectList).find((option) => {
          const optionObject = selectList[option];
          try {
            if (optionObject.textContent.includes(text1)) {
              val = optionObject.value;
              return val;
              // if not found, then this will return undefined from the browser back to puppeteer.
            }
          } catch (error) {
            return false;
          } return false;
        });
        return val;
      },
      sels,
      texts
    );
    return page.select(sels, s);
  };
 
  page.getArray = async (allSelector, selector = null) => {
    let arrayItems = await page.evaluate(
      (allSelectors, selectors) => {
        arrayItems = [...document.querySelectorAll(allSelectors)];
        return arrayItems.map((card) => {
          if (selectors) {
            return (card.querySelector(selectors)) ? card.querySelector(selectors).textContent : null;
          }
          return (card.querySelector(allSelectors)) ? card.querySelector(allSelectors).textContent : null;
        });
      },
      allSelector,
      selector
    );
    return arrayItems;
  };
}
 
function sleep(timeout = 3000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(() => { }), timeout);
  });
}
 
module.exports = {
  setupBrowser,
  closeBrowser,
  createExtensions,
  sleep,
};
