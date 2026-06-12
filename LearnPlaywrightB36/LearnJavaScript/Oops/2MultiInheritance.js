
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

class C extends B{

    m5(){
        console.log("m5 method in C class")
    }
    m6(){
        console.log("m6 method in C class")
    }
}

// if we craete object for class A only class A properties can access
// if we create object for class B class A and class B properties can access
// if we creat object for class C both class A and class B and class C properties can access
const c1 = new C()
c1.m1()
c1.m2()
c1.m3()
c1.m4()
c1.m5()
c1.m6()