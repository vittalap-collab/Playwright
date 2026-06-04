
import { test, expect } from '@playwright/test';

test('checkbox checking', async({page}) => {
    page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    const status = await page.locator('input[type="checkbox"]').isChecked()
    console.log(status)

    if(! status){
        await page.locator('input[type="checkbox"]').check()
    }
})