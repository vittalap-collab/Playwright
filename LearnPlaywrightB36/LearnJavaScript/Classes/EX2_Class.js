
class Student {

    x = 50;
    stuname = "vittal"

    printmessage() 
    {
        console.log("this is a method")
    }

    printstudetails(stname,stplace,course)
    {
        console.log(stname)
        console.log(stplace,course)
    }
}
// we can create 'N' number of object in a class 
const st1 = new Student()

// exporting the object here and import this in other files
export default st1