import { test, expect } from '@playwright/test';

test("Verify  Xpath", async({page}) => {
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // 1) basic syntax for Xpath ('//tagname[@attriName="attriValu"]')
    await page.locator('//input[@name="username"]').fill('admin');
    await page.locator('//input[@name="password"]').fill('admin123');
    await page.locator('//button[@type="submit"]').click();

    // 2) text (visible text) //tagname[text()="complete text"]
    //await page.locator('//button[text()=" Login "]').click();
    await expect(page.locator('//p[text()="This Week"]')).toBeVisible();

    // 3) partial text (//tagname[contains(.,"partial text")])
    await expect(page.locator('//p[contains(.,"Punched In: ")]')).toBeVisible();

    // 4) AND Logic (Both should present)
    await page.locator('//a[@class="oxd-main-menu-item"][@href="/web/index.php/admin/viewAdminModule"]').click();
    // await page.locator('//a[@class="oxd-main-menu-item" and @href="/web/index.php/admin/viewAdminModule"]').click();

    // 5) OR Logic (any one should present)
      //  //tagname[@attri1Name = attri1Value or @attri2Name = attri2Value]
    await page.locator('//a[class="oxd-main-menu-item" or @href="/web/index.php/pim/viewPimModule"]').click();
   
    // 8) indexing (xpath)[1]
    await page.locator(('//li[@class="oxd-main-menu-item-wrapper"]')[1])

    // 9) parent to child node Traversing
    //  (xpath expresion)/..
    // //div[@class="emailCnt"]/img


    // 10) child to parent node traversing
    //  (xpath expresion)/..
    // //input[@placeholder="Enter your full name"]/..

    // Axes methods
    // 1)following  (xpathexpresion//following::nodeexpresion)
    // await expect (page.locator(('//a[@href="/web/index.php/admin/viewAdminModule"]//following::p')[1]))
});

test('verify path', async({page}) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    
    // 6) prefix-common starts-with()
    // name="name19215e8a"
    // //tagname[starts-with(@attriName, "prfix")]
    await page.locator('//input[starts-with(@name,"name")]').fill('vital')

    // 7) suffix-common ends-with()
    // name="19215e8aname"
    // //tagname[ends-with(@atrriName, "suffixvalue")]
    //await page.locator('//input[starts-with(@name,"name")]')

});
