

import {test,expect} from '@playwright/test';

test('login with text extraction with console statments', async({page}) => {

    console.log('Step1: navigate to login page');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log('Step1: Page loaded');

    console.log('Step2: extract username text');
    const username_text = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()
    console.log('Step2: Extracted username text:', username_text)

    const username_arr = username_text.split(" ") // ["Username", ":", "Admin" ]
    console.log('Step2: Parsed username value:', username_arr[2])

    console.log('Step3: fill username');
    await page.locator('input[name="username"]').fill(username_arr[2])
    console.log('Step3: Username filled');

    console.log('Step4: extract password text');
    const password_text = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()
    console.log('Step4: Extracted password text:', password_text)

    const password_arr = password_text.split(" ") // ["Password", ":", "admin123" ]
    console.log('Step4: Parsed password value:', password_arr[2])

    console.log('Step5: fill password');
    await page.locator('input[name="password"]').fill(password_arr[2])
    console.log('Step5: Password filled');

    console.log('Step6: click login');
    await page.locator('//button[@type="submit"]').click()
    console.log('Step6: Login clicked');

    console.log('Step7: verify time and date element');
    await expect(page.locator('//p[text()="Time at Work"]')).toBeVisible()
    console.log('Step7: Verified Time at Work is visible');

    console.log('Step8: extract all menu items');
    const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()
    console.log('Step8: Extracted menu items:', menuitems)

    const hasPIM = menuitems.includes("PIM")
    console.log('Step9: Menu contains PIM:', hasPIM)
    await expect(hasPIM).toBe(true)
    console.log('Step9: Assertion completed: PIM was found in menu items');

})