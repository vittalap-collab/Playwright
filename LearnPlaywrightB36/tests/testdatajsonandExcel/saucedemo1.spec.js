import { test, expect } from '@playwright/test';
import data from "../../testdata/addemploye.json"

test('verify login as standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(data.Username);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(data.Password);
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="title"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});