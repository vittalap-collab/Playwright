
// Arrays (dadtype)

// arrayname = []
arr = [] // empty array
console.log(arr)

// array with elements
arr1 = [2, 8, 3, 6, 4]
console.log(arr1)

// based on index 
arr2 = ["raju", 36, true, undefined, null]
console.log(arr2)
console.log(arr2[0]) // index 
// length of the array
console.log(arr2.length) // length of the array

// last element
console.log(arr2.length - 1)

// join 2 arrays
// string concatination
// str1 = "Raju"
// str2 = "Guru"
// console.log(str1+str2)

// join 2 array - concat()
a1 = [21, 38, 48]

a2 = [83, 48, 23]
console.log(a1.concat(a2))

// sorting
x = [8, 9, 5, 6, 3, 4, 2, 1]

y = x.sort()
console.log(y)

x1 = ["Guru", "Raju", "vittal", "Anu"]

y1 = x1.sort()
console.log(y1)

// 20+ array methods are there 
// push,pop,shift,unshift,some,any,filter,reduce,map,includes,indexof,split,join

// split()
str = "java script"  // string to array conversion

ar = str.split('')
console.log(ar)
ar = str.split(' ')
console.log(ar)

h = "Username : Admin"
j = h.split(" ")
console.log(j)

menuitem = [
    'Admin', 'PIM',
    'Leave', 'Time',
    'Recruitment', 'My Info',
    'Performance', 'Dashboard',
    'Directory', 'Maintenance',
    'Claim', 'Buzz'
]

console.log(menuitem.includes("PIM"))
console.log(menuitem.includes("Guru"))

item = menuitem.sort()
console.log(item)

// reverse()
console.log(item.reverse())
// console.log(item.sort().reverse())

// push() to add elements at the end
jj = ["sleep", "work", "read"]
jj.push("drink", "walk", "run")
console.log(jj)

// unshift() to add at the starting
jj.unshift("getup")
console.log(jj)


// pop() will remove the last element
jj.pop()
console.log(jj)
// shift() will remove the 1st element
jj.shift()
console.log(jj)

// join() joining all the elements gives string (array to string)
st = menuitem.join("")
console.log(st)

// replacing an array
l= ['gsd',"sdhsd","dsd"]
l[2] = 'hduf'
console.log(l)
l.splice(2,1, 'vital') // 2 for index position,  1 for delete 1 item
console.log(l)

