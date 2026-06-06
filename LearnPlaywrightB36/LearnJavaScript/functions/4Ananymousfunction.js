
/*
         ananymous function
    -> function without any name is called ananymous function
    -> directly not possible
    ex:
       function ()
       {
       }
    -> using callbck function it is possible
    ex: 
       function printname(function (){

       })
*/
// directly not possible
// function ()
// {
//     console.log("raju")
// }

function calc(callback)
{
    const x = 20
    const y = 30

    callback(x,y)

}

calc(function (){
    console.log("bisd")
})

calc( ()=> console.log("vittal")) // possible 

// structure of test(test('test case title', function)
// ()=>{ }
// test cases ananymous
// ({ page }) => { // page is a arguments
//   await page.goto('/web/index.php/auth/login');
//   await page.getByRole('textbox',{ name: 'username' }).fill("bsssx");
//   await page.getByRole('textbox', { name: 'password' }).fill("admin123");
//   await page.getByRole('button', { name: 'Login'}).click();
//   await expect(page.getByText('Invalid credentials')).toBeVisible();
// }