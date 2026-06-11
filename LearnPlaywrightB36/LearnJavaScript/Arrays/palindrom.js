// split("") → String → Array
// reverse() → works on Array
// join("") → Array → String

// palindrome 
kk = "madam"

rev = kk.split("").reverse().join("")
console.log(rev)

if (kk == rev) {
    console.log("palindrome")
}
else {
    console.log("not palindrome")
}


// palindrome
// kk = "madam"
// rev = ""

// rev = kk.split("")
// console.log(rev)

// rev = rev.reverse()

// rev = rev.join('')
// console.log(rev)
// console.log(kk==rev) // true

