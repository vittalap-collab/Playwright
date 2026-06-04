import { test, expect } from '@playwright/test';

const empStatus = { 
    status1: 'Automation tester',
    status2: "manual tester",
    status3: "java developer",
    status4: "python developer"
}
for(let status in empStatus){
test(`verify pay grade -${status}`, async({page}) => {
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
    // employe status
    await page.locator('//a[text()="Employment Status"]').click()
    // click add
    await page.locator('//button[text()=" Add "]').click()
    // enter name
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(empStatus[status])
    // click save
    await page.waitForTimeout(10000)
    await page.locator('//button[text()=" Save "]').click()
})
}