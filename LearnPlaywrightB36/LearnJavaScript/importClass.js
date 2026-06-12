
// importing the class from EX3_Class.js to this file to access 
// we careated object here abd get the output (one file to other file)
import { Student } from "./Classes/EX3_Class.js";

const st2 = new Student()
st2.printmessage()
st2.printstudetails("guru", "tmk", "playwright")
console.log(st2.x)
console.log(st2.stuname)