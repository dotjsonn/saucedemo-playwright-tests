import { test as setup } from '../fixtures'

setup('authenticate', async ({ loginPage, page }) => {
  await loginPage.goto()
  await loginPage.login('standard_user', 'secret_sauce')
  await page.waitForURL('https://www.saucedemo.com/inventory.html')
  await page.context().storageState({ path: '.auth/user.json' })
})