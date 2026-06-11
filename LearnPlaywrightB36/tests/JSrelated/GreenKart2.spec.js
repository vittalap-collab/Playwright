
import {test,expect} from '@playwright/test'

test('verify greenkart total price', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    // use string literals
    let veg1 = "Corn - 1 Kg"
    let veg2 = "Grapes - 1 Kg"

    await page.locator(`//h4[text()="${veg1}"]/../div[3]/button`).click()

    await page.locator(`//h4[text()="${veg2}"]/../div[3]/button`).click()

    // price we have to get prod1, prod2 and total
    //h4[text()="Brocolli - 1 Kg"]/following-sibling::p
    const prodt1price = await page.locator(`//h4[text()="${veg1}"]/../p`).textContent()

    const prod2price = await page.locator(`//h4[text()="${veg2}"]/../p`).textContent()

    const totalvalue = await page.locator('//table/tbody/tr[2]/td[3]/strong').textContent()

    // verify or validate the price prod1+prod2 =total
    await expect(Number(prodt1price) + Number(prod2price)).toBe(Number(totalvalue))
   
})

// //h4[text()="Brocolli - 1 Kg"]/../div[3]/button
   // //h4[text()='Brocolli - 1 Kg']/following::button[1]
   //h4[text()="Brocolli - 1 Kg"]//following-sibling::div[2]/button - add button
   //h4[text()="Brocolli - 1 Kg"]/../div[2]/a[@class="decrement"] - decrement (-)
   //h4[text()="Brocolli - 1 Kg"]/../p - price

   //h4[text()="Cauliflower - 1 Kg"]/following-sibling::div[2]/button
   //h4[text()="Cauliflower - 1 Kg"]/../div[3]/button
   //div[@class="product"]//h4[text()="Cauliflower - 1 Kg"] - p to c