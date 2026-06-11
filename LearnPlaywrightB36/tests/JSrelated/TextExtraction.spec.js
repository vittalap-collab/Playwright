
import {test,expect} from '@playwright/test';

test('login with text extraction', async({page}) => {

    // go to page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // text extraction
    // <p data-v-7b563373 data-v-0af708be class="oxd-text oxd-text--p">Username : Admin</p>
    const username_text = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()

    const username_arr = username_text.split(" ") // ["Username", ":", "Admin" ]

    // fill username
    await page.locator('input[name="username"]').fill(username_arr[2])

    // text extraction
    // <p data-v-7b563373 data-v-0af708be class="oxd-text oxd-text--p">Password : admin123</p>
    const password_text = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()

    const password_arr = password_text.split(" ") // ["Password", ":", "admin123" ]

    // fill password
    await page.locator('input[name="password"]').fill(password_arr[2])

    // click login 
    await page.locator('//button[@type="submit"]').click()

    // verify time and date
    await expect(page.locator('//p[text()="Time at Work"]')).toBeVisible()

    // extract all menu-items

    const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()

    console.log(menuitems)

    console.log(menuitems.includes("PIM"))

    await expect(menuitems.includes("PIM")).toBe(true)


})