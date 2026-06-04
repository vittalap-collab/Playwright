import { test, expect } from '@playwright/test';

test('launch website based on browser running else if', async({page, browserName}) => {
    
    if(browserName=='chromium')
    {
        await page.goto('https://www.flipkart.com/')
    }
    else if(browserName=="firefox")
    {
        await page.goto('https://www.amazon.in/')
    }       
    else if(browserName=="webkit")
    {
       await page.goto('https://www.myntra.com/') 
    }
    else if(browserName=="Microsoft Edge")
    {
        await page.goto('https://www.meesho.com/')
    }
    
})