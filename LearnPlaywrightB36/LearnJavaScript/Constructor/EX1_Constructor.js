
/*
            Constructor

    -> constructor is a method without any name but keyword called constructor
        constructor(){

        }
    -> constructor will invoke automaticaly when the object is created
    -> in JS only one constructor in a class
    -> A class may only have one constructor
    -> we can create 'N' number of object in a class 
    -> singletone we can not do in playwright
*/

class Demo {
    y = 82
    name = "Guru"

    // constructor(){
        // empty constructor
    // }
    constructor(){
        console.log("this is constructor")
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

// create object
const d1 = new Demo() // constructor will execute when we create object
// call method
d1.PrintMesg()
// call param method
d1.PrintValue("Anu",'blr')

const d2 = new Demo()
// call method
d1.PrintMesg()
// call param method
d1.PrintValue("guru",'blr')

const d3 = new Demo()
// call method
d1.PrintMesg()
// call param method
d1.PrintValue("yashu",'blr')
