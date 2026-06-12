
/*
                Polymorphism
    1) method overriding (runtime poly)
    2) method overloading (compile time)

    method overriding:- developin a method in a subclass with same name and signature
                        as in the super class but different implimentation in subclass
        -> only non-static 
        -> inheritance is compulsory
*/

class A1
{
    M1()
    {
        console.log("m1 method from parent")
    }

    add(n1,n2){

        console.log(n1)
        console.log(n2)
        console.log(n1+n2)
    }
}

class B1 extends A1{

    M1(){
        console.log("m1 method from child")
    }

    add(n1,n2,n3)
    {
        console.log(n1)
        console.log(n2)
        console.log(n3)
        console.log(n1+n2+n3)
    }

}

// object 

const obj = new B1()

obj.M1()
obj.add(2,5,8) // method overriding

// obj.add(2,4) // NAN