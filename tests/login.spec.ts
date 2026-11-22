import { test, expect } from '../fixtures'

test.use({ storageState: { cookies: [], origins: [] } })

test('user can login with valid credentials', async ({ loginPage, page }) => {
  await loginPage.goto()
  await loginPage.login('standard_user', 'secret_sauce')
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})