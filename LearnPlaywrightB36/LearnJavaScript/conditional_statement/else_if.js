
// else_if 
// if the condition false then else_if executes 

if(false)
{
    console.log("block-1")
}
else if(true){
    console.log("block-2")
}
else if(true){
    console.log("block-3")
}
else{
    console.log("invalid")
}

// print student marks

//let marks = 80
// user input method 1
const prompt = require('prompt-sync')();

let marks = Number(prompt("Enter your marks: "));
// user input method 2 
// let marks = Number(process.argv[2]);


if(marks >= 90 && marks <= 100)
{
    console.log("Grade A+")
}
else if(marks >= 80 && marks <= 90)
{
    console.log("Grade A")
}
else if(marks >= 65 && marks <= 80)
{
    console.log("Grade B")
}
else if(marks >= 45 && marks <= 65)
{
    console.log("Grade C")
}
else
{
    console.log("Fail")
}

// taking input from the user 
/*
Method 1: Using prompt-sync (Easier)

First install the package:

npm install prompt-sync

program: 

const prompt = require('prompt-sync')();

let marks = Number(prompt("Enter your marks: "));

Method 2: Using process.argv (Pass value while running)

Program:

Method 2: Using process.argv (Pass value while running)

Program:

let marks = Number(process.argv[2]);
*/