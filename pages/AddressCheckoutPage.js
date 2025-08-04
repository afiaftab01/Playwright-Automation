class AddressCheckoutPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
    this.totalVal = page.locator('.summary_total_label');
  }


  async addAddressAndContinue(FirstName, SecondName, code) {
    await this.firstName.fill(FirstName)
    await this.lastName.fill(SecondName)
    await this.postalCode.fill(code)
    await this.continueBtn.click()
  }



  async getTotalamountAndVErify(amount) {
    const fullText = await this.totalVal.textContent();
    console.log(`Raw total amount text: "${fullText}"`);
    const match = fullText.match(/\$([\d.]+)/);

    if (match && match[1]) {
      const amountString = match[1]; 
      const amount = parseFloat(amountString); 
      console.log(`Extracted total amount: ${amount}`);
      return amount;
    } else {
      console.error(`Could not parse total amount from text: "${fullText}"`);
      return null;
    }
  }

  async finishCheckout(){
    await this.finishBtn.click();
  }
}

module.exports = AddressCheckoutPage;
