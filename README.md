# SauceDemo Playwright Tests

End-to-end tests for [SauceDemo](https://www.saucedemo.com/) using Playwright and TypeScript.

## What's covered
- **Login**: valid credentials
- **Products**: page headers, inventory list, add to cart
- **Purchase flow**: login → add items → cart → checkout → order complete

## Tech & patterns
- Playwright Test + TypeScript
- Page Object Model (`pages/`)
- Custom fixtures (`fixtures.ts`)
- Auth setup project reusing saved login state (`tests/auth.setup.ts`)
- GitHub Actions CI with HTML report artifact

## Project structure
```
pages/          Page objects (Login, Products, Cart, Checkout)
tests/          Specs and auth setup
fixtures.ts     Injects page objects into tests
.github/        CI workflow
```

## Run locally
```bash
npm ci
npx playwright install --with-deps
npx playwright test
npx playwright show-report
```

## Test report
![Playwright HTML report](docs/report.png)