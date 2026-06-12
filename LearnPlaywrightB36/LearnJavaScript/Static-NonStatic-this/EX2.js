
// this keyword
class Emp
{
    static x = 32 // static variable 
    y = "raju"  // non-static variable

    static m1(){

        console.log('this is static m1 method')

    }

    static m2(){

        this.m1()
        console.log('this is static m2 method')
    }

    m3(){
        console.log('this is non-static m3 method')
    }

    m4(){
        this.m3()
        console.log('this is non-static m4 method')
    }

    // this is not possible 
    
    //  m1(){

    //     console.log('this is static m1 method')

    // }

    // static m2(){

    //     this.m1()
    //     console.log('this is static m2 method')
    // }
}

// static 
Emp.m2()

// non-static
let e2 = new Emp()
e2.m4()