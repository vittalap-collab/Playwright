
// exporting the class and import this in other files
export class Student {

    x = 50;
    stuname = "vittal"

    printmessage() {
        console.log("this is a method")
    }

    printstudetails(stname, stplace, course) {
        console.log(stname)
        console.log(stplace, course)
    }
}
