import { test, expect } from '@playwright/test';
import logindata from "../../testdata/login.json"

// import addemp from "../../testdata/addemploye.json"

import ExcelJS from 'exceljs';

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

  // exceldata
  // create wrokbook
   const workbook = new ExcelJS.Workbook();

   // read excel file
    await workbook.xlsx.readFile('testdata/EmployeeData.xlsx');

    // get sheet
    const worksheet = workbook.getWorksheet('Sheet1');

    if(!worksheet) {
        console.log("sheet not found");
    }

     // Get row 2
    const row = worksheet.getRow(2);

    // read cells directly
    const firstname = row.getCell(1).value;
    const lastname = row.getCell(2).value;

  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Raju M' })).toBeVisible();
});