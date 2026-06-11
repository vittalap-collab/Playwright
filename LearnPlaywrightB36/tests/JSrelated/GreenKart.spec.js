import {test,expect} from '@playwright/test'

test('verify greenkart', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    await expect(page.locator('//div[text()="GREEN"]')).toBeVisible()

    await page.locator('(//button[text()="ADD TO CART"])[1]').click()

    await page.locator('(//button[text()="ADD TO CART"])[2]').click()

    // (//p[@class="product-price"])[1]
    await page.locator('//img[@alt="Cart"]').click()

    await expect(page.locator('//td[text()="Items"]')).toBeVisible()

    await expect(page.locator('//td[text()="Price"]')).toBeVisible()

    ////div[@class="cart-info"]
    
    let price1 = await page.locator('(//p[@class="amount"])[1]').textContent()
    price1 = Number(price1)
    console.log(price1)

    let price2 = await page.locator('(//p[@class="amount"])[2]').textContent()
    price2 = Number(price2)
    console.log(price2)

    let totalprice = await page.locator('//div[@class="cart-info"]').textContent()
    totalprice = totalprice.split(":")
    totalprice = Number(totalprice[2])
    console.log(totalprice
        
    )

    let total = price1+price2
    console.log(total)

    if(totalprice == total)
    {
        console.log("correct")
    }
    else{
        console.log("incorrect")
    }
})