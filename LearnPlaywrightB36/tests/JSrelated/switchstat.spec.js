import { test, expect } from '@playwright/test';

test('launch website based on browser running', async ({ page, browserName }) => {
    switch (browserName) {
        case "chromium":
            await page.goto('https://www.flipkart.com/')
            break

        case "firefox":
            await page.goto('https://www.amazon.in/')
            break

        case "webkit":
            await page.goto('https://www.myntra.com/')
            break

        case "Microsoft Edge":
            await page.goto('https://www.meesho.com/')
            break

        default:
            console.log("invalid browser")

    }
})