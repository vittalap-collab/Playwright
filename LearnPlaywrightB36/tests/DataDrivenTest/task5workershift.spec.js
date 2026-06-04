import { test, expect } from '@playwright/test';

const workerShift = { 
    shift1: { name:'day', hh1:'07',mm1:'30',value1:"AM",hh2:'05',mm2:'30',value2:"PM"},
    shift2: { name:'night', hh1:'10',mm1:'30',value1:"PM",hh2:'08',mm2:'30',value2:"AM"}
    
    
}
for(let shift in workerShift){
test(`verify pay grade -${shift}`, async({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // enter username
    await page.locator('input[name="username"]').fill('Admin');
    // enter password
    await page.locator('input[name="password"]').fill('admin123');
    // enter login
    // await page.locator("button[type='submit']").click();
    // or
    // click enter from keyboard
    await page.keyboard.press('Enter');
    // validation or verification
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // click on admin
    await page.locator('//span[text()="Admin"]').click()
    // click on job
    await page.getByText('Job', { exact: true }).click();
    // click worker shift
    await page.locator('//a[text()="Work Shifts"]').click()
    // click add
    await page.locator('//button[text()=" Add "]').click()
    // enter shift
    await page.locator('//label[text()="Shift Name"]/following::input[1]').fill(workerShift[shift].name)
    // hours from
    
    // click From time
       await page.locator('(//i[@class="oxd-icon bi-clock oxd-time-input--clock"])[1]').click()
       // fill from time hours
       await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-hour-input-text"]').fill(workerShift[shift].hh1)
       // fill from time minutes
       await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-minute-input-text"]').fill(workerShift[shift].mm1)
       //await page.locator('//div[@class="oxd-time-period-input"]').click()
       //await page.locator('//label[text()="AM"]').click()

       // checking condition for PM OR AM
       let value1 = workerShift[shift].value1

       if(value1=="PM"){
       //await page.locator('//input[@value="AM"]').click()
       await page.locator('//input[@value="PM"]').click()
       }
       else{
        await page.locator('//input[@value="AM"]').click()
       }
       await page.waitForTimeout(10000)

       // click To time
       await page.locator('(//i[@class="oxd-icon bi-clock oxd-time-input--clock"])[2]').click()
       // fill To time hours
       await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-hour-input-text"]').fill(workerShift[shift].hh2)
       // fill To time minutes
       await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-minute-input-text"]').fill(workerShift[shift].mm2)

       // checking condition for PM OR AM
       let value2 = workerShift[shift].value2

       if(value2=="PM")
       {
        await page.locator('//input[@value="PM"]').click()
       }
       else{
        await page.locator('//input[@value="AM"]').click()
       }
       await page.waitForTimeout(10000)

       // click save
       await page.locator('//button[text()=" Save "]').click()
 })
}
// logic thinking

// await page.locator('(//input[@placeholder="hh:mm"])[1]').fill()
    // // hours to 
    // await page.locator('(//input[@placeholder="hh:mm"])[2]').fill()
    ////label[text()="AM"]
    //label[text()="PM"]
    //input[class="oxd-input oxd-input--active oxd-time-hour-input-text"]
    //await page.locator('input[class="oxd-input oxd-input--active oxd-time-hour-input-text"]').fill('08')
    
//     await page.locator('(//input[@placeholder="hh:mm"])[1]').fill('08:00')
//     //await page.waitForTimeout(10000)
//     await page.locator('(//input[@placeholder="hh:mm"])[2]').fill('04:00')
       //await page.locator('(//i[@class="oxd-icon bi-clock oxd-time-input--clock"])[1]').click()
       //await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-hour-input-text"]')
       //await page.locator('//div[@class="oxd-time-period-input"]').fill('AM')
