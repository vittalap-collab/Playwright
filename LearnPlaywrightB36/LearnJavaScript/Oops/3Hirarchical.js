
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

class C extends A{

    m5(){
        console.log("m5 method in C class")
    }
    m6(){
        console.log("m6 method in C class")
    }
}

// if we create object of class A only class A properties can access
// if we create object for class B both class A and class B propeties can access
const b1 = new B()
b1.m1()
b1.m2()
b1.m3()
b1.m4()
// if we create object for class C both class A and class B properties can access
const c1 = new C()
c1.m1()
c1.m2()
c1.m5()
c1.m6()