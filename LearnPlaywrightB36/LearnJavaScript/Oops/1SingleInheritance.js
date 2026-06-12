
/*
            Inheritance
    -> inheriting the properties from one class to another class 
    Types:
    1) single level
    2) multi level
    3) hirarchical
    4) multiple - not supported
    5) hybride

*/
class A{

    m1(){
        console.log("m1 method in A class")
    }
    m2(){
        console.log("m1 method in A class")
    }
}

class B extends A{

    m3(){
        console.log("m3 method in B class")
    }
    m4(){
        console.log("m4 method in B class")
    }
}

// create object for class A - we can access only class A

// const a1 = new A()
// a1.m1()
// a1.m2()

// create object for class B - we can access both class A methods and class B
const b1 = new B()
b1.m1()
b1.m2()
b1.m3()
b1.m4()

