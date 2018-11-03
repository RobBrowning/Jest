# jest_Puppeteer_example
This is an Jest / Puppeteer framework example

Cloning, you will need to run the following commands -

## Prerequisites
npm install --save-dev jest

This example is using puppeteer-core as chromium is too large for GitHub to allow - so in the utils I've referenced the location of chrome installed locally, just amend this to make it work for you.

    browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',

Both options for puppeteer, remember install which ever will work for you -
npm i puppeteer //installs chromium

npm i puppeteer-core //installs light weight puppeteer, no chromium installed

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
npm install --save-dev lighthouse
```

## Jest-Image-Snapshot 
To update benchmark images, run ```--updateSnapshot``` to accept new screenshots.
After running this in the terminal, it will ctart to compare future test runs against the new benchmark images.



## LightHouse
We need to add a config.js file to the project folder.

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


