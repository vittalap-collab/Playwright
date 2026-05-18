import { test, expect } from '@playwright/test';
//require('dotenv').config();
require('dotenv').config({
  path: require('path').resolve(__dirname, '../../.env')
});


// test case 1
test('test', async ({ page }) => {

  // go to URL
  await page.goto('/web/index.php/auth/login');
  //await page.getByRole('textbox', { name: 'Username' }).click();
  //  enter username
  // process.env.APP_USERNAME importing data from env file
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.waitForTimeout(15000);
  //await page.getByRole('textbox', { name: 'Password' }).click();
  // enter password
  // process.env.APP_PASSWORD importing data from env file
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.waitForTimeout
  // click login
  await page.getByRole('button', { name: 'Login' }).click();
  // dashbord
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  // time at work visible (verification or asserstion)
  await expect(page.getByText('Time at Work')).toBeVisible();
});

// test case 2 
test('verify login with invalid username valid password', async({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox',{ name: 'username' }).fill("bsssx");
  await page.getByRole('textbox', { name: 'password' }).fill("admin123");
  await page.getByRole('button', { name: 'Login'}).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

// test case 3
test('verify login svalid username invalid password', async({page}) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'username'}).fill("Admin");
  await page.getByRole('textbox', { name: 'password'}).fill('hsdds');
  await page.getByRole('button', { name: 'login'}).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

// test case 4 
test('verify login invalid username invalid password', async({page}) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'username'}).fill("admin123");
  await page.getByRole('textbox', { name: 'password'}).fill("admin");
  await page.getByRole('button', { name: 'login'}).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});