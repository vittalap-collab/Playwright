
/*
            Callback function
-> callback function is function that is passed as an argument
     to another higher order function
higher order function:- a function which accepts callback function

-> callback is also called as closure function some times
*/

function add(n1,n2)
{
    console.log(n1+n2)
}

function sub(n1,n2)
{
    console.log(n1-n2)
}

function mul(n1,n2)
{
    console.log(n1*n2)
}

// function calc()
// {
//     const x = 20
//     const y = 30
//     add(x,y)
// }

// // call 
// calc()

function calc(callback)
{
    const x = 20
    const y = 30

    callback(x,y)

}

// calc is higher order function
calc(add) // add
calc(sub) // sub
calc(mul) // mul

/*
we can call like this also callback function
function calc(n1,n2, callback)
{
    callback(n1,n2)
}

calc(26,34,add)
*/

// not closure function

function printmurthy()
{
    console.log("murthy")
}

function printname(callback)
{
    callback()
}

printname(printmurthy)