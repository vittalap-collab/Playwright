
// to over come from callback hell 'promises' are used 

// asynchronous and callback
// promises always as object inside it will have some data
// promises{data}

// p = "raju"

const p = new Promise((resolve, reject) => {
    const x = 3 
    if(x==4)
    {
        resolve("raju")
    }
    else{
        reject("guru")
    }
})

console.log(p)

p.catch((err) => {
    console.log(err)
})

// promises we can do like this
const p2 = Promise.resolve("anu")
console.log(p2)

// .then - when the promise is resolved
// .catch - when the promise is rejected

p.then(msg => console.log(msg))
.catch(msg1 => console.log(msg1))

// setTimeout promises
console.log("start")
const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise is resolved")
    }, 3000);
})

p3.then((result) => { console.log(result)})

console.log("end")
