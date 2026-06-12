
// static and non-static
class Employe
{
    static x = 32 // static variable 
    y = "raju"  // non-static variable

    static m1(){
        console.log('this is static m1 method')
    }

    static m2(){
        console.log('this is static m2 method')
    }

    m3(){
        console.log('this is non-static m3 method')
    }

    m4(){
        console.log('this is non-static m4 method')
    }
}

// static we can call like (classname.var/methodname)
Employe.m1()
Employe.m2()
console.log(Employe.x)

// for non-static  create object
let e1 = new Employe()
e1.m3()
e1.m4()
console.log(e1.y)