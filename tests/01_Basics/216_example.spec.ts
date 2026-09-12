import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
// });

test('Admin Login', async ({ page }) => {
  await page.goto('https://app.vwo.com/login');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('User Login', async ({ page }) => {
  await page.goto('https://app.vwo.com/login');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});



