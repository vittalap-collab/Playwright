
/*
        Arrow function

    -> without usnig 'function' keyword
    -> single line function
    syntax:
        function_name = () => console.log(statement)
*/

// arrow function
printnames = () => console.log("Alien")

// calling function
printnames()

// if have multiple statements
printnames1 = () => {
    console.log("petter")
    console.log("alien")
    console.log("dolla")
}
// calling
printnames1()

// with params possible
add = (n1, n2) => {
    console.log(n1)
    console.log(n2)
    console.log(n1+n2)
}

add(27,37)

// single params
// qube =(m1)=>
// {
//     console.log(m1**3)
// }

qube = m1 => console.log(m1**3)

qube(2)

// with retun keyword
qube1 = m2 => m2**3

console.log(qube1(5))

