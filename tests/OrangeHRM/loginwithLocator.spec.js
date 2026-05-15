import { test, expect } from '@playwright/test';

// test case 1
test('test', async ({ page }) => {
  // go to URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //await page.getByRole('textbox', { name: 'Username' }).click();
  //  enter username
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');

  //await page.getByRole('textbox', { name: 'Password' }).click();
  // enter password
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  // click login
  await page.getByRole('button', { name: 'Login' }).click();
  // dashbord
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  // time at work visible (verification or asserstion)
  await expect(page.getByText('Time at Work', { exact: true })).toBeVisible();
});

// test case 2
test('verify login with invalid username valid password', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill("hgds");
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible();
});

// test case 3
test('verify login valid username invalid password',async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
    await page.getByRole('textbox', { name: 'Password' }).fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible();
});

// test case 4
test('verify login invalid username invalid password', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill("Ahsdn");
    await page.getByRole('textbox', { name: 'Password' }).fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible(); 
});