import { test, expect } from '@playwright/test';
import logindata from "../../testdata/login.json"

import addemp from "../../testdata/addemploye.json"

// test case 1
test('test', async ({ page }) => {
  // go to URL
  await page.goto('/web/index.php/auth/login');
  //await page.getByRole('textbox', { name: 'Username' }).click();
  //  enter username
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

  //await page.getByRole('textbox', { name: 'Password' }).click();
  // enter password
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  // click login
  await page.getByRole('button', { name: 'Login' }).click();
  // dashbord
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  // time at work visible (verification or asserstion)
  await expect(page.getByText('Time at Work')).toBeVisible();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(addemp.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(addemp.lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Anusha gowda' })).toBeVisible();
});