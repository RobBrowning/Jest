# jest_Puppeteer_example
This is an Jest / Puppeteer framework example

Cloning, you will need to run the following commands -

## Prerequisites
```
npm install --save-dev jest
```
This example is using puppeteer-core as chromium is too large for GitHub to allow - so in the utils I've referenced the location of chrome installed locally, just amend this to make it work for you.

    browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',

Both options for puppeteer, remember install which ever will work for you -
```
npm i puppeteer //installs chromium
```
```
npm i puppeteer-core //installs light weight puppeteer, no chromium installed
```

NOTE: to remember in the utils file to also reference the correct puppeteer package 

i.e. const puppeteer = require('puppeteer-core') or const puppeteer = require('puppeteer')

If you install chromium by mistake run the same npm command again but only change the install to uninstall and it will remove that package, run again to install correct version.
---------------------------------------------
```
npm install --save-dev jest-junit
```
```
npm i --save-dev jest-image-snapshot
```
```
npm install --save-dev jest-axe
```
```
npm init //to create package.json and reference all packages
```
```
npm install -g lighthouse
```

## Running the tests

To run tests you can run the below in the terminal, when running this, it will run every test on the URL you declared in the package.json under scripts.
```
npm run env-testing
```

![package.json Scripts](https://github.com/RobBrowning/Jest/blob/master/README_md_images/Scripts.PNG)


Or you can pass the same command in a build.


![package.json Scripts](https://github.com/RobBrowning/Jest/blob/master/README_md_images/BuildCommand2.png)



## Jest-Image-Snapshot 
To update benchmark images, run ```--updateSnapshot``` to accept new screenshots.
After running this in the terminal, it will start to compare future test runs against the new benchmark images.

So it will look like this in the terminal - 

```
node c:\pathToRepoLocally\Jest\node_modules\jest\bin\jest.js -t -u
```

or using --updateSnapshot as the following - 

```
node c:\pathToRepoLocally\Jest\node_modules\jest\bin\jest.js -t --updateSnapshot
```

For this example using the snapshot tests only it will be this, using 'Snapshot tests' from the describe title in snapshot.spec.js - 

```
node c:\working_git\Jest\node_modules\jest\bin\jest.js -t "Snapshot tests" --updateSnapshot
```

## AXE Accessibility Tests
Using AXE in Jest you can setup tests navigating to your pages and validating the HTML caught by Puppeteer using ```const html = await page.content();``` and passing html into the validation of the test ```expect(await axe(html)).toHaveNoViolations()```.

Running the test will then validate against AXE rules and show the HTML where its failed on the page ran.

![axe test and output](https://github.com/RobBrowning/Jest/blob/master/README_md_images/axeImage.PNG)

## LightHouse CLI 
We need to add a config.js file to the project folder. We have named it ```lighthouseConfig.js```.

When you run the tests through the terminal you need to declare the path to the config then followed by the url.  Create a new folder in ```test_results``` as ```lighthouse_reports```.

```
lighthouse --config-path=path/to/custom-config.js https://example.com
```

This will create an HTML report by default.
The command to add to a build command to run and save report.

```
lighthouse --output html --output-path ./report.html
```

Add --disable-device-emulation to the command to run as if on a desktop. Also you can declare the output path for the html report. Example of this below.

```
lighthouse --config-path=path/to/custom-config.js --disable-device-emulation --output html --output-path ./report.html https://example.com
```
For this example here is the command ran in the terminal to create the final report in the test_results/lighthouse_reports folder.

```
lighthouse --config-path=lighthouseConfig.js --disable-device-emulation --output html --output-path ./test_results/lighthouse_reports/lighthousereport.html https://www.google.com
```
![lighthouse cli command](https://github.com/RobBrowning/Jest/blob/master/README_md_images/lighthouseCLI.PNG)


### Lighthouse + Puppeteer in Jest Tests
For Lighthouse tests ran in Jest, I created a js file ```methods.js``` in ```page_models``` folder.

In this I add - 

```
const lighthouse = require('lighthouse');


module.exports = {

    async lighthouseAudit(browser, url) {
        jest.setTimeout(100000);
        let lhr = await lighthouse(url, {
            port: (new URL(browser.wsEndpoint())).port,
            output: 'json',
            logLevel: 'info',
        });
        return lhr;
    },

// scrape data from a Lighthouse audit for asserting against
    async getResult(lhr, property) {

        const propertyType = new Map()
            .set('contrast', await lhr.lhr.audits["color-contrast"].score)
            .set('vulnerabilities', await lhr.lhr.audits["no-vulnerable-libraries"].score)
            .set('altText', await lhr.lhr.audits["image-alt"].score)
            .set('pageSpeed', await lhr.lhr.audits["speed-index"].score)
            .set('ariaAttributeValuesCorrect', await lhr.lhr.audits["aria-valid-attr-value"].score)
            .set('ariaAttributesCorrect', await lhr.lhr.audits["aria-valid-attr"].score)
            .set('duplicateId', await lhr.lhr.audits["duplicate-id"].score)
            .set('tabIndex', await lhr.lhr.audits["tabindex"].score)
            .set('logicalTabOrder', await lhr.lhr.audits["logical-tab-order"].score);


        const score = new Map()
            .set(0, 'Fail')
            .set(1, 'Pass')
            // in some cases, no score is returned, where a check is not applicable,
            // i.e. checking for alt text where no images exist
            .set(null, 'Pass');

        let result = await score.get(propertyType.get(property));

        return result;
    },

    async getLighthouseResult(lhr, property) {
        const jsonProperty = new Map()
            .set('accessibility', await lhr.lhr.categories.accessibility.score * 100)
            .set('performance', await lhr.lhr.categories.performance.score * 100)
            .set('progressiveWebApp', await lhr.lhr.categories.pwa.score * 100)
            .set('bestPractices', await lhr.lhr.categories["best-practices"].score * 100)
            .set('seo', await lhr.lhr.categories.seo.score * 100)
            .set('pageSpeed', await lhr.lhr.audits["speed-index"].score * 100);


        let result = await jsonProperty.get(property);
        return result
    }
}
```

Then in a js file I saved a file ```lighthouse.spec.js``` and added the following Jest tests calling the methods from ```methods.js```.

```
describe('Google Lighthouse audit tests', async () => {
    beforeAll(async () => {
        // the url to be audited
        const url = 'https://www.google.com';
        // kick off a Lighthouse audit on the above url
        lhr = await commonMethods.lighthouseAudit(browser, url);
    });

    // General accessibility overview score
    it('passes an accessibility audit through Lighthouse', async () => {
        const accessibilityScore = await commonMethods.getLighthouseResult(lhr, 'accessibility');
        // Tester can set their own thresholds for pass marks
        expect(accessibilityScore).toBeGreaterThanOrEqual(95);
    },16000);
```
