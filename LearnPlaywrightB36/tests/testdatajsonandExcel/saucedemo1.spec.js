import { test, expect } from '@playwright/test';
import data from "../../testdata/addemploye.json"

test('verify login as standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(data.firstname);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(data.lastname);
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="title"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});