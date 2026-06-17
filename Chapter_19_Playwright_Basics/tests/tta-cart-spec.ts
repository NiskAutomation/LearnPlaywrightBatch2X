import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="title"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.getByText('This classic TTA t-shirt is').click();
  await page.getByRole('article').filter({ hasText: 'test.all()Test.allTheThings' }).locator('[data-test="inventory-item-price"]').click();
  await page.locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]').click();
  await expect(page.getByRole('article').filter({ hasText: 'test.all()Test.allTheThings' }).locator('[data-test="inventory-item-price"]')).toBeVisible();
});