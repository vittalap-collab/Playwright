
import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     await page.getByRole('textbox', { name: 'Username' }).click();
     await page.getByRole('textbox', { name: 'Username' }).fill('admin');
     await page.getByRole('textbox', { name: 'Password' }).click();
     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
     await page.getByRole('button', { name: 'Login' }).click();
     await expect(page.getByText('Time at Work')).toBeVisible();
     await page.getByRole('link', { name: 'PIM' }).click();
     await page.getByRole('link', { name: 'Add Employee' }).click();
     await page.getByRole('textbox', { name: 'First Name' }).click();
     await page.getByRole('textbox', { name: 'First Name' }).fill('Rocking');
     await page.getByRole('textbox', { name: 'Last Name' }).click();
     await page.getByRole('textbox', { name: 'Last Name' }).fill('star');
})

test.afterEach( async({page}) => {
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.locator('div.oxd-toast.oxd-toast--success.oxd-toast-container--toast')).toBeVisible()
})
 
test('verify add employe with img png', async ({ page }) => {
    //await page.locator('//i[@class="oxd-icon bi-plus"]').click()
    await page.locator('//img[@src="/web/images/default-photo.jpg"]').click()
    await page.waitForTimeout(10000)
})

test('verify add employe with img jpg', async ({ page }) => {
    //await page.locator('//i[@class="oxd-icon bi-plus"]').click()
    await page.locator('//img[@src="/web/images/default-photo.png"]').click()
    await page.waitForTimeout(10000)
})

test('verify add employe with img gif', async ({ page }) => {
    //await page.locator('//i[@class="oxd-icon bi-plus"]').click()
    await page.locator('//img[@src="/web/images/default-photo.gif"]').click()
    await page.waitForTimeout(10000)
})

