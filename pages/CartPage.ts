import { Page, Locator } from '@playwright/test'

export class CartPage {
  readonly titlePage: Locator;
  readonly cartList: Locator;
  readonly cartLinkButton: Locator;

  constructor(private page: Page) {
    this.cartLinkButton = page.locator('[data-test="shopping-cart-link"]')
    this.titlePage = page.locator('[data-test="title"]')
    this.cartList = page.locator('[data-test="cart-list"]')
  }

}