
// when we use any function 'async' keywrod it return promises
// all the playwright methodes are returns promises

// // callback function
// function getuser(callback){ // here it accept callbak
//     console.log("user data fetched")
//     callback() // here called callback function
// }

// async function
async function getuser() {
    return "user fetched"
    // return promises
}

// async function
async function getorder() {
    return "order fetched"
    // return promises
}

// async function
async function getpayment() {
    return "payment fetched"
    // return promises
}

async function result() {
    
   const x = await getuser()
   console.log(x)
    const y = await getorder()
    console.log(y)
    const z = await getpayment()
    console.log(z)
}

// call result 
result()
//console.log(result())