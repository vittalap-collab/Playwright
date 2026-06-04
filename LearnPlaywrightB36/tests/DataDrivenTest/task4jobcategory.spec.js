import { test, expect } from '@playwright/test';

const jobCategory = { 
    category1: 'Software Development',
    category2: "Quality Assurance",
    category3: "Human Resources",
    category4: "Finance"
}
for(let category in jobCategory){
test(`verify pay grade -${category}`, async({page}) => {
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
    // click job category
    await page.locator('//a[text()="Job Categories"]').click()
    // click add
    await page.locator('//button[text()=" Add "]').click()
    // enter name
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(jobCategory[category])
    await page.waitForTimeout(10000)
    // save
    await page.locator('//button[text()=" Save "]').click()
})
}