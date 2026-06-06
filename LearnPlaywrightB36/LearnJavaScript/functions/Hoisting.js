
// hoisting - before declaratrion of function we can call funcrtion

// for function possible
multiply(2,5)

function multiply(n1,n2)
{
    console.log(n1*n2)
}

// for variable only var paossible it prints undefined
console.log(name)

var name ="ysau"

// for let and const not possible
// console.log(x)
// let x = 321