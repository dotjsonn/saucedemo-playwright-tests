import { test, expect } from '../fixtures'

test('Products Page test', async({productsPage, page}) => {
  await test.step('user can see headers and inventory lists of products page', async () => {
    await productsPage.goto()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(productsPage.primaryHeader).toContainText('Swag Labs');
    await expect(productsPage.secondaryHeader).toBeVisible()
    await expect(productsPage.inventoryList).toBeVisible()
  })

  await test.step('user can add products', async () => {
    await productsPage.addProducts('Sauce Labs Backpack')
    await productsPage.addProducts('Sauce Labs Bike Light')
    await expect(productsPage.cartButton).toBeVisible()
    await expect(productsPage.cartButton).toHaveText('2')
  })
})