
import { test, expect } from '@playwright/test';

for(let x=0; x<3; x++)
{
    test(`verify - ${x}`, async ({ page }) => {
      // go to URL
      await page.goto('/web/index.php/auth/login');
      //await page.getByRole('textbox', { name: 'Username' }).click();
      //  enter username
      await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    
      //await page.getByRole('textbox', { name: 'Password' }).click();
      // enter password
      await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
      // click login
      await page.getByRole('button', { name: 'Login' }).click();
      // dashbord
      //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
      // time at work visible (verification or asserstion)
      await expect(page.getByText('Time at Work')).toBeVisible();
    });
    
}