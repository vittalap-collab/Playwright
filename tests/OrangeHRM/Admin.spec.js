import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  //await page.getByRole('textbox', { name: 'Username' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Organization').click();
  await page.getByRole('menuitem', { name: 'General Information' }).click();
  await expect(page.getByRole('heading', { name: 'General Information' })).toBeVisible();
});