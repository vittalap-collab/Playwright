
/*  switch statement 

switch (expression) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
        */

// switch with break
//let day = 6

const prompt = require('prompt-sync')()

let day = Number(prompt("enter days: "))


switch(day)
{
    case 1:
        console.log("Monday")
        break

    case 2:
        console.log("Tuesday")
        break
    
    case 3:
        console.log("Wednasday")
        break

    case 4:
        console.log("thursday")
        break

    case 5:
        console.log("Friday")
        break

    case 6:
        console.log("saturday")
        break

    case 7:
        console.log("Sunday")
        break
    
    default:
        console.log("invalid")
}

// switch without break

//let day = 2;

const cal = require('prompt-sync')()

let days = Number(cal("enter days: "))

switch (days) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    default:
        console.log("Invalid");
}