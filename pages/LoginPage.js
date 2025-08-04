const logger = require('../util/logger');
class LoginPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[name="user-name"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = '#login-button';
  }

  async goto(baseUrl) {
    await this.page.goto(`${baseUrl}`);
  }

  async login(username, password) {
    logger.debug(`Enter username ${username}`)
    await this.page.fill(this.usernameInput, username);
    logger.debug(`Enter password ${password}`)
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
