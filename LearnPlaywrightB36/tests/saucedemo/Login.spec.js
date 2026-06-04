
import { test, expect } from '@playwright/test';
// import object from testdata
import {standardUser} from '../../testdata/ObjectData.js';

test('verify login data from using objects data',async({page}) => {

    console.log(standardUser.userName)
    console.log(standardUser.password)

    await page.goto('https://www.saucedemo.com/')

    await page.locator('#user-name').fill(standardUser.userName)
    await page.locator('#password').fill(standardUser.password)
    await page.locator('#login-button').click()
    await expect(page.locator('span[data-test="title"]')).toBeVisible()
})