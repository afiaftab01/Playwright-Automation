const { Before, After, AfterStep, Status } = require('@cucumber/cucumber');
const { allure } = require('allure-cucumberjs');
const fs = require('fs');
const path = require('path');
const logger = require('../util/logger');


const screenshotDir = path.join(__dirname, '../reports/screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

Before(async function () {
  logger.info(`Launching Browser..`);
  await this.launchBrowser();
});

// Example: Pre and Post scripts based on tags

Before({ tags: '@db' }, async function () {
  console.log('Setup for @db tag');
  // Add DB setup here
});

After({ tags: '@db' }, async function () {
  console.log('Teardown for @db tag');
  // Add DB cleanup here
});

After(async function () {
  await this.closeBrowser();
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({ type: 'png' });
    allure.attachment('Screenshot on Failure', screenshot, 'image/png');
  }
});
