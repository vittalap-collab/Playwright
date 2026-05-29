import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test('verify css locators', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // 1) basic syntax (tagname[attriName = "attriValue"])
    await page.locator('input[name="username"]').fill('admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()

    // 2) in a node if you have 'id' attribute
    // #idvalue  (id='username) (#username)

    // 3) in a node if you have 'class' attribute
    // .classvalue  (class="oxd-sidepanel-header") (.oxd-sidepanel-header)
    await expect(page.locator('.oxd-sidepanel-header')).toBeVisible()

    // 4) Based on text (not possible in css)
    // in playwright we have an option for this:
    // await expect(page.locator('text ="Time at Work"')).toBeVisible()

    // 5) AND Logic CSS
    // tagname[atriName="attriValue"][atrriName="attriValue"]
    // tagname[atriName="attriValue"][atrriName="attriValue"]
    await page.locator('a[class="oxd-main-menu-item"][href="/web/index.php/pim/viewPimModule"]').click()
    // OR logic not possible in css

    // 6) prefix-common (^)
    // tagname[attriName^="prefix"]
    // input[id^="login"]

    // 7) sufix-common ($)
    // tagname[attriName$="sufix"]
    // input[id$="login"]

    

})