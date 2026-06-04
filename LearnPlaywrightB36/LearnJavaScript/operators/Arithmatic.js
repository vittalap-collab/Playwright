
/*
        Arithmatic operators
-> '+' addition
-> '-' substraction
-> '*' multiplication
-> '/' division
-> '%' modulus - gives reminder of 2 operands

*/

x = 26
y = 5

console.log(x+y)

console.log(x-y)

console.log(x*y)

console.log(x/y)

console.log(x%y)


console.log(x++) // 1st it print x (26) then next it will increment by 1
// now x = 27
console.log(++x) // 1st it increment x by 1 and it will print (27+1=28)

// coersion
console.log("coersion concept")

num1 = 35
num2 = 40
console.log(num1+num2) // acts as addition

str1 = "vital"
str2 = "P"
console.log(str1+str2) // acts as concatination

console.log(35+"vittal") // coersion 

console.log("23"+15) //coersion (+)-number conerted to string)

console.log(40-"23") // (-) -> string converted to number this case

console.log(25*"5") //(*) -> string converted to number this case

console.log("25"/5) // (/) -> string converted to number this case

console.log("26"%5) // (%) -> string converted to number this case

// guess the answer
console.log(2+3+4+6+"6"+6+7+8)
/*
    2+3=5 
   5+4=9
   9+6=15
   15+"6"="156"
   "156"+6="1566"
   "1566"+7=15667
   "15667"+8=156678
*/


// NaN output
vheicalprice = 30000
delivaryfee = undefined

console.log(vheicalprice+delivaryfee)
console.log(30000+undefined) // NaN

console.log(32-"45")

console.log(34-"raju") //NaN