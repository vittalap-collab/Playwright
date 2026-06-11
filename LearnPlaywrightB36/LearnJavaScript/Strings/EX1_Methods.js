
// strings
/*
str = 'vital'
str = "vittal"
str3 = `vittal`
-> we can use strings as these types

*/
// string literals
str = "sleep"
str1 = `"im going to" ${str}`
console.log(str1)

// string coertion
console.log(6+"6") // "66"

// split()
s = "java:script"
console.log(s.split(":"))

// lenght
console.log(s.length)

// join not for string for array
// s1 = "programing"

// console.log(s1.join(s))

// trim() removes space 1st and last
s1 = "  java scaript  "
console.log(s1.trim())

// trimStart() and trimEnd()
console.log(s1.trimStart())
console.log(s1.trimEnd()) // trimEnd()

st1 = "this is javascript"
// toUpperCase()
console.log(st1.toUpperCase())
// toLowerCase()
console.log(st1.toLowerCase())

// strings are immutable (not changable)
st2 = 'Anksri'
st2[2] = 'u'  // not changde
console.log(st2)

// we have built in function replace() and replaceAll("k","u")
console.log(st2.replace("k","u")) // replace 

// includes
st3 = "java is programing"
console.log(st3.includes("raju")) // false
console.log(st3.includes("is"))  // true

console.log(st3[0])  // j

// charAt(index)
console.log(st3.charAt(3)) // a

// converts string to number
st4 = Number("67")
console.log(st4)
console.log(typeof(st4))

// converts number to string
num  = String(46)
console.log(num)

// print integer 
st5 = "64.43"
num2 = parseInt(st5)
console.log(num2) // 64

// print float
num3 = parseFloat(st5)
console.log(num3) // 64.43