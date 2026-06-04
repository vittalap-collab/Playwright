
// differences of (var, let, const)

/*
    var
-> from initial version of js onwords
-> re-assign the different value to the same variable possible
-> re-declaration of same variable is possible
-> var is a global scope

*/
var x = 10
    x = 20 // re-assign for same variable possible
    console.log(x)
var x = 50 // re-declaration for the same variable possible
console.log(x)

/*
    let
-> from version ES6 onwords
-> re-asign the different value for the same variable is possible
-> re-declaration for the same variable is not possible
-> let is a blocked scope (with in that block)
*/
let y = 282
    y = 753 // re-assign for same variable possible
console.log(y)
// let y = 675 re-declaration of same variable not possible
if(true)
{
    let s = "vittal"
    console.log(s) // let is blocked scope
    if(true)
    {
        console.log(s) // possible block inside anothe block
    }
}

/*
    const
-> from the version ES6 onwords
-> re-assign the different value to same variable not possible 
-> re-declaration for same variable name not possible 
-> const is a blocked scope
*/
const num = "raju"
console.log(num)

if(true)
{
    const unam = "admin"
    console.log(unam)
}
// console.log(unam) not possible out side the block

