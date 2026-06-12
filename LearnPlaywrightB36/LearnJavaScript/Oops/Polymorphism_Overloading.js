
/*
             Polymorphism
    1) method overriding (runtime poly)
    2) method overloading (compile time)

    method overloading:- developing a multiple  method  with same name but
                         variation in the argument list
        -> both static and non-static 
        
*/

// non-static

class A2{

    M1(){
        console.log("m1 method")
    }

    M1(n1,n2){
        console.log("m1 method")
        console.log(n1+n2)
    }
}

// object
const obj1 = new A2()
obj1.M1()
obj1.M1(2,9)
//obj1.M1(2,3,4) // it will take 2 params only rest ingnored


// static 
class A3{

    static M1(){
        console.log("m1 method")
    }

   static M1(n1,n2){
        console.log("m1 method")
        console.log(n1+n2)
    }
}

A3.M1()
A3.M1(2,5)