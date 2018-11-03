# jest_Puppeteer_example
This is an Jest / Puppeteer framework example

Cloning, you will need to run the following commands -

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

npm install --save-dev jest-junit

npm i --save-dev jest-image-snapshot

npm install --save-dev jest-axe

npm init //to create package.json and reference all packages