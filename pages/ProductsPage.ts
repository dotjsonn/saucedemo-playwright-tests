import { Page, Locator } from '@playwright/test'

export class ProductsPage {
  readonly primaryHeader: Locator;
  readonly secondaryHeader: Locator;
  readonly inventoryList: Locator;
  readonly cartButton: Locator;

  constructor(private page: Page) {
    this.primaryHeader = page.locator('[data-test="primary-header"]')
    this.secondaryHeader = page.locator('[data-test="secondary-header"]')
    this.inventoryList = page.locator('[data-test="inventory-list"]')
    this.cartButton = page.locator('[data-test="shopping-cart-link"]')
  }

  async goto () {
    await this.page.goto('https://www.saucedemo.com/inventory.html')
  }

  async addProducts (product: string) {
    await this.page
      .locator('[data-test="inventory-item"]')
      .filter({ hasText: product })
      .getByRole('button', { name: "Add to cart" })
      .click()
  }

}