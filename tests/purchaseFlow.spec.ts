import { test, expect } from '../fixtures'

test.use({ storageState: { cookies: [], origins: [] } })


test('Full Purchase Flow', async ({ loginPage, productsPage, cartPage, checkoutPage, page }) => {
  // Login
  await test.step ('user can login with valid credentials', async () => {
    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  })

  // Products
  await test.step('user can see headers and inventory lists of products page', async () => {
    await expect(productsPage.primaryHeader).toContainText('Swag Labs');
    await expect(productsPage.secondaryHeader).toBeVisible()
    await expect(productsPage.inventoryList).toBeVisible()
  })

  // Add Products
  await test.step('user can add products', async () => {
    await productsPage.addProducts('Sauce Labs Backpack')
    await productsPage.addProducts('Sauce Labs Bike Light')
    await expect(productsPage.cartButton).toBeVisible()
    await expect(productsPage.cartButton).toHaveText('2')
  })

  // Cart Page
  await test.step('user can see the cart page', async () => {
    await cartPage.cartLinkButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(cartPage.titlePage).toContainText('Your Cart');
    await expect(cartPage.cartList).toBeVisible();

    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  })

  // Checkout
  await test.step('user can checkout', async () => {
    await checkoutPage.checkoutButton.click()

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    await expect(checkoutPage.checkoutForm).toBeVisible()
    await checkoutPage.fillCheckoutForm('Jan', 'Yu', '1440')

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await expect(checkoutPage.productOne).toContainText('Sauce Labs Backpack');
    await expect(checkoutPage.productTwo).toContainText('Sauce Labs Bike Light');
    await checkoutPage.finishButton.click()

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    await expect(checkoutPage.checkoutInfo).toBeVisible();
    await expect(checkoutPage.completeHeader).toContainText('Thank you for your order!');
  })
})

