class HomePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addToCartBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
    this.addToCartTShirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    this.addToCardJacket = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    this.cartIcon = page.locator('#shopping_cart_container');
    this.checkoutBtn = page.locator('#checkout');
  }


  async addThreeItemsToCart() {
    try {
      await this.addToCartBackpack.click();
      await this.addToCartTShirt.click();
      await this.addToCardJacket.click();
    } catch (error) {
      console.error(`Error clicking Add to Cart (Backpack): ${error.message}`);
      throw error;
    }
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async checkout() {
    await this.checkoutBtn.click()
  }
}

module.exports = HomePage;
