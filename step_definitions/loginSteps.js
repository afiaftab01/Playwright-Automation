const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');
const logger = require('../util/logger');

Given('I am on the login page', async function () {
  logger.info('Navigating to login page...');
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto(this.baseUrl);
});


When('I login with username {string} and password {string}', async function (username, password) {
  logger.info(`Login using : ${username} and ${password}`)
  await this.loginPage.login(username, password);
});

Then('I should see the homepage', async function () {
  const title = await this.page.title();
  expect(title).to.include('Swag Labs');
});
