const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const AddressCheckoutPage = require('../pages/AddressCheckoutPage');
const logger = require('../util/logger');

When('I add address {string} and continue', async function (address) {
  logger.info('Add address and continue');
  const parts = address.split(',');
  const firstName = parts[0];
  const secondName = parts[1];
  const code = parts[2];
  this.addressCheckoutPage = new AddressCheckoutPage(this.page);
  await this.addressCheckoutPage.addAddressAndContinue(firstName, secondName, code);
});

Then('I verify the total amount {string} and finish', async function (price) {
  logger.info('Verifiy price in checkout page');
  const actual_price = await this.addressCheckoutPage.getTotalamountAndVErify();
  // await expect(actual_price).to(price);
  assert.strictEqual(
    actual_price,
    parseFloat(price),
    `Price not matching. Expected: ${price}, Actual: ${actual_price}`
  );
  await this.addressCheckoutPage.finishCheckout()
});

