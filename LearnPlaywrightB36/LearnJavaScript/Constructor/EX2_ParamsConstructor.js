
class sample {
    y = 82

    // constructor(){
        // empty constructor
    // }
    constructor(name,place){
        console.log("this is constructor")
        console.log(name)
        console.log(place)
    }

    PrintMesg(){
        console.log("this is method")
    }
    
    PrintValue(val1,val2)
    {
        console.log("this is parametarized mehtod")
        console.log(val1,val2)
    }

}

// create an object
let s1 = new sample('Ameen','pune') // params constructor take value in object
s1.PrintMesg()
s1.PrintValue(27,83)