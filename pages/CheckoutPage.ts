import { Page, Locator } from '@playwright/test'

export class CheckoutPage {
  readonly checkoutButton: Locator;
  readonly checkoutForm: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly continueButton: Locator;

  readonly productOne: Locator;
  readonly productTwo: Locator;
  
  readonly finishButton: Locator;
  readonly checkoutInfo: Locator;
  readonly completeHeader: Locator;


  constructor(private page: Page) {
    this.checkoutButton = page.locator('[data-test="checkout"]')
    this.checkoutForm = page.locator('.checkout_info')
    this.firstName = page.locator('[data-test="firstName"]')
    this.lastName = page.locator('[data-test="lastName"]')
    this.zipCode = page.locator('[data-test="postalCode"]')
    this.continueButton = page.locator('[data-test="continue"]')

    this.productOne = page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')
    this.productTwo = page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')
    this.finishButton = page.locator('[data-test="finish"]')
    this.checkoutInfo = page.locator('[data-test="checkout-complete-container"]')
    this.completeHeader = page.locator('[data-test="complete-header"]')
  }

  async fillCheckoutForm (fName: string, lName: string, zip: string) {
    await this.firstName.fill(fName)
    await this.lastName.fill(lName)
    await this.zipCode.fill(zip)
    await this.continueButton.click()
  }
}