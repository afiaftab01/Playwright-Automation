const { Given, When,Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../pages/HomePage');
const logger = require('../util/logger');

When('I add multiple prodcuts to cart', async function () {
  logger.info('Add multiple products to cart');
  this.homePage = new HomePage(this.page);
  await this.homePage.addThreeItemsToCart();
  await this.homePage.goToCart()
  await this.homePage.checkout()
});

