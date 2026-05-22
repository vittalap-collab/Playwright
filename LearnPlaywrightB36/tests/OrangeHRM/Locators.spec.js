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