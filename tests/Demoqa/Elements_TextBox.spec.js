import { test, expect } from '@playwright/test';

// test case 1 
test('verify elements text box', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');
    await page.getByRole('textbox', { name: 'Full Name'}).fill("vittal");
    //await page.getByRole('textbox', { name: 'name@example.com' })
    await page.getByRole('textbox', { name: 'name@example.com'}).fill("vittal@example.com");
    await page.getByRole('textbox', { name: 'Current Address'}).fill("chennai");
    await page.locator('#permanentAddress').fill("bangalore");
    //await page.getByRole('textbox', { name: 'Permanent Address'}).fill("banglore");
    await page.getByRole('button', { name: 'Submit'}).click();
    await expect(page.getByText('Name:vittal')).toBeVisible();
    await expect(page.getByText('Email:vittal@example.com')).toBeVisible();
    await expect(page.getByText('Current Address :chennai')).toBeVisible();
    await expect(page.getByText('Permananet Address :bangalore')).toBeVisible();
    // .toBeVisible({timeout: 60000})
    // npx playwright test --project="Microsoft Edge" --headed --workers=2

});
