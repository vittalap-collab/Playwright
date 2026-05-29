import { test, expect } from '@playwright/test';

test('test', async({page}) => { 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@name="username"]').fill('Admin')
    await page.locator('//input[@name="password"]').fill('admin123')
    await page.locator('//button[@type="submit"]').click()
    
    //await page.locator('//a[@href="/web/index.php/performance/viewPerformanceModule"]').click()
    await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click()
    //await page.locator('//span[@class="oxd-topbar-body-nav-tab-item"]').click()
     await page.locator('//span[text()="Job "]').click();
    //await page.waitForTimeout(60000)

    // await page.locator('//a[@role="menuitem" and class="oxd-topbar-body-nav-tab-link"]').click()
    // Job Titles option
    await page.locator('//a[text()="Job Titles"]').click();
    // await page.locator('//a[@role="menuitem" and class="oxd-topbar-body-nav-tab-link"]').click()
    
    //await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary" and type="button"]').click()
    // Add button
    await page.locator('//button[normalize-space()="Add"]').click();
})

// test case 2
test('verify login using DOM locators ', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@name="username"]').fill("admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click();
    await page.locator('//a[@href="/web/index.php/dashboard/index"]').isVisible();
    await page.locator('//span[text()="Buzz"]').click();
    await page.locator(`//textarea[@placeholder="What's on your mind?"]`).fill("hi GM");
    await page.locator('//button[@type="submit"]').click();
    // await page.locator('//button[text()=" Post "]').click();
    await expect(page.locator('//p[text()="hi GM"]').first()).toBeVisible();
    // //await expect(page.locator('//p[contains(.,"World Championship")]')).toBeVisible();
    // //await page.waitForTimeout(60000);
    // await page.locator('//i[contains(@class,"bi-heart-fill")]').click();
    // //await page.locator('//*[text() = "Most Commented Posts"]').click();
    // await expect(page.locator('//p[contains(.,"World Championship")]')).toBeVisible();

});

test('verify rediffmail visible text() using DOM locators ', async({page}) => {
await page.goto('https://mail.rediff.com/action/authvalidate?userid=top')
// validation or assesrtion
// using text() or text visible
await expect(page.locator('//span[text()="We could not process this request -#9002"]')).toBeVisible();
await expect(page.locator('//a[@href="javascript:refresgCapcha();"]/../..')).toBeVisible();
await expect(page.locator('//a[text()="Refresh"]')).toBeVisible();
await expect(page.locator('//div[text()="Type the code shown in the image"]')).toBeVisible();
//await expect(page.locator(('//div[contains(.,"Type the code")]')[2])).toBeVisible();
await expect(page.locator('//input[@placeholder="Enter the code"]')).toBeVisible();
// partial text im giving
await expect(page.locator('//p[contains(.,"© 2026 ")]')).toBeVisible();
// entering captcha manually we use puse()
await page.pause();
//await page.locator('//input[@placeholder="Enter the code"]')
await page.locator('//input[@type="submit"]').click();
});