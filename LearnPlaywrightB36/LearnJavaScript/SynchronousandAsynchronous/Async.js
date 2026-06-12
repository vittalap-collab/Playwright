
/*       Synchronous
    javascript is a synchronous language
    always executes secquential manner line by line
*/

/*
            Asynchronous
    -> not a swquential manner execution
    -> you can make asynchronous using 
        'callbak'  (deficult to debug)
        'promises'
*/

// console.log("raju")
// console.log("guru") // after executing theis then go to next
// console.log("anu")

console.log("raju")
console.log("guru")
// steTimeout(function,time)
setTimeout(function(){
    // asynchronous function without name
    console.log("anu")
}, 3000)  // wait 3 second then prints anu

// asynchronous behaviour
// callbak - sending function as parameter for another function