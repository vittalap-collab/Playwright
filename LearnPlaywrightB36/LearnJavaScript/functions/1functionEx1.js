
/*
        Function
    -> function is block of code which will get execute
        when we called or invoked
    syntax:
        function function_Name()
        {
            // block of code
        }
    used for:
        -> code reusability
        -> maintance is easy
        -> reduce duplication
        -> if we acces function out side the another file we need to 
            export and import the function
*/

// 1) function without params
function printName()
{
    console.log('raju')
    console.log('vittal')
    console.log('yashu')
}
// calling the function
printName()

console.log('========')
// 2) function with params or arguments
function Add(num1, num2)
{
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}

// calling function
Add(72, 83)

console.log('========')
// default params
function Mul(a=5, b=6)
{
    console.log(a)
    console.log(b)
    console.log(a*b)
}
//calling function
Mul()

console.log('========')
// function with 'return' keyword
function Display()
{
    return 'vittal'
}
x = Display()
console.log(x)