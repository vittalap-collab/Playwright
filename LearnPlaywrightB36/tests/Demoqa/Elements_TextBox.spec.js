import { test, expect } from '@playwright/test';
import testData from '../../testdata/textboxdata.json';

// test case 1 
test('verify elements text box', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');
    await page.getByRole('textbox', { name: 'Full Name'}).fill(testData.fullName);
    //await page.getByRole('textbox', { name: 'name@example.com' })
    await page.getByRole('textbox', { name: 'name@example.com'}).fill(testData.email);
    await page.getByRole('textbox', { name: 'Current Address'}).fill(testData.currentAddress);
    await page.locator('#permanentAddress').fill(testData.permanentAddress);
    //await page.getByRole('textbox', { name: 'Permanent Address'}).fill("banglore");
    await page.getByRole('button', { name: 'Submit'}).click();
    await expect(page.getByText(`Name:${testData.fullName}`)).toBeVisible();
    await expect(page.getByText(`Email:${testData.email}`)).toBeVisible();
    await expect(page.getByText(`Current Address :${testData.currentAddress}`)).toBeVisible();
    await expect(page.getByText(`Permananet Address :${testData.permanentAddress}`)).toBeVisible();
    // .toBeVisible({timeout: 60000})
    // npx playwright test --project="Microsoft Edge" --headed --workers=2

});
