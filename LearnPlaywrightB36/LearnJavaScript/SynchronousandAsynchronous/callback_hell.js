
// callback hell - dificult to debug
// f1(f2(f3())) - function inside anopther function

import { get } from "https"

// callback function
function getuser(callback){ // here it accept callbak
    console.log("user data fetched")
    callback() // here called callback function
}

function getorder(callback){ // here it accept callbak
    console.log("order data fetched")
    callback() // here called callback function
}

function getpayment(callback){ // here it accept callbak
    console.log("payment data fetched")
    callback() // here called callback function
}

// callback hell
getuser( () => {  // getuser() is higher order function (calls getorder() method)
    getorder( () => {  // calls getpayment() method
        getpayment( () => {  // print the statment
            console.log("all data fetched")
        })
    })
})
