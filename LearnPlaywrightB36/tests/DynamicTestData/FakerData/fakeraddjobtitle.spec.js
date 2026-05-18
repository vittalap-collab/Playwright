import { test, expect } from '@playwright/test';
// fakerjs data to give dynamic job title
import { faker } from '@faker-js/faker';

test('verify admin add JobTitle', async({ page }) =>{ 

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // enter username
    await page.locator('input[name="username"]').fill('Admin');
    // enter password
    await page.locator('input[name="password"]').fill('admin123');
    // enter login
    // await page.locator("button[type='submit']").click();
    // or
    // click enter from keyboard
    await page.keyboard.press('Enter');
    // validation or verification
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // click on admin
    await page.getByText('Admin', { exact: true }).click();
    // click on job
    await page.getByText('Job', { exact: true }).click();
    // click on addtitle
    await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    // click on add button
    await page.getByRole('button', { name: 'Add' }).click();
    // give job title
    await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(faker.person.jobTitle());
    await page.waitForTimeout(4000)
    // job description
    await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation testing');
    // click on save
    await page.getByRole('button', { name: 'Save' }).click();
    // opens new url
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');

});