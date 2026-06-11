import { test, expect } from '@playwright/test';

const payGrade = {
    name1: "jhon",
    name2: "petter",
    name3: "alin"
 }
 for(let name in payGrade){
 
    test(`verify pay grade -${name}`, async({page}) => {
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
    await page.locator('//span[text()="Admin"]').click()
    // click on job
    await page.getByText('Job', { exact: true }).click();
    // click on pay grades
    await page.locator('//a[text()="Pay Grades"]').click()
    // click on add
    await page.locator('//button[text()=" Add "]').click()
    // enter name
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(payGrade[name])
    // save
    //await page.waitForTimeout(10000)
    await page.locator('//button[text()=" Save "]').click()
    // currency
    // await page.locator('//button[text()=" Add "]').click()
    // await page.locator('//div[text()="-- Select --"]').click()
    // await page.locator('//div[text()="INR - Indian Rupee"]').click()
    // await page.locator('(//button[text()=" Save "])[2]').click()
    
    })
}