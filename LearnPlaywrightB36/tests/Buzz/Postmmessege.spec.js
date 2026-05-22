import { test, expect } from '@playwright/test';
import Data from '../../testdata/Buzzpost.json';

test('verify post message in buzz', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click();

    await page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]').click();
    await page.locator(`//textarea[@placeholder="What's on your mind?"]`).fill(Data.text);
    await page.locator('//button[@type="submit"]').click();
    //await expect(page.locator('//p[@class="oxd-grid-item oxd-grid-item--gutters"]')).toHaveText(Data.text);
    // (//p[text()='hi all gm'])   locator for text
    // partial 

});