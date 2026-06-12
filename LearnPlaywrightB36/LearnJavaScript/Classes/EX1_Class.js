
/*      class
        
    -> class is blue print or template to create an object variables and methods
    syntax:
        class class_name{
            variable
            methods()
        }
*/

class calc {

    // variables
    x = 20
    y = 30

    // functions dont use function keyword  inside the class 
    add(n1,n2)
    {
        console.log("addition")
        console.log(n1+n2)
    }

    mul(n1,n2)
    {
        console.log("multiplication")
        console.log(n1*n2)
    }

    div(n1,n2)
    {
        console.log("division")
        console.log(n1/n2)
    }

    sub(n1,n2)
    {
        console.log("substraction")
        console.log(n1-n2)
    }
}

// creating object for this class

const cal1 = new calc()

// call function
cal1.add(23,37)
cal1.mul(3,6)
cal1.div(10,3)
cal1.sub(57,21)

// call variables
console.log(cal1.x)
console.log(cal1.y)