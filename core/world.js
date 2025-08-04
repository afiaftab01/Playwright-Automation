const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const config = require('../config');

class PlaywrightDriver {
  constructor() {
    this.page = null;
    this.browser = null;
    this.context = null;
    this.baseUrl = config.baseUrl;
    setDefaultTimeout(60 * 1000);
  }

  async launchBrowser() {
    const browserType = (process.env.TEST_BROWSER || 'chromium').toLowerCase();
    let browserLauncher;

    switch (browserType) {
      case 'chromium':
        browserLauncher = chromium;
        break;
      case 'firefox':
        browserLauncher = firefox;
        break;
      case 'webkit':
        browserLauncher = webkit;
        break;
      default:
        throw new Error(`Unsupported browser: ${browserType}`);
    }

    this.browser = await browserLauncher.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(30 * 1000); 
  }

  async closeBrowser() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(PlaywrightDriver);
