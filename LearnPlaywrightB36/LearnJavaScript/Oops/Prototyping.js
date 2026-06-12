
// creating the prototype variable and method outside the class 
// it is available for object to access

// class_name.prototype.variable/method = value
class test{

    x = 20
    y = 30
    
    disp(){
        console.log("display the method")
    }

    M1(){
        console.log("M1 method")
    }
}

// z = 50 - normal variable
// function m2(){ } - normal method

test.prototype.z = 90 // prototype variable 
test.prototype.m2 = function (){
    console.log("m2 method")
}

// object
const obj = new test()
obj.disp() // method
obj.M1() // method
console.log(obj.x) // variabale
console.log(obj.x) // variable

obj.m2() // prototype call
console.log(obj.z)  // prototype call

const obj2 = obj // obj = new test()
obj2.disp() // method
obj2.M1() // method
console.log(obj2.x) // variabale
console.log(obj2.x) // variable

obj.m2() // prototype call
console.log(obj.z)  // prototype call

