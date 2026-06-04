/*
        Objects in javascript

synatx: 

    objrctName = {
            propertyName : 'propertyValue',
            propertyName : 'propertyValue
        }
*/

creds = { 
    username: 'admin',
    password: 'admin123'
}
console.log(creds.username)
console.log(creds.password)

// other way
console.log(creds['username'])
console.log(creds['password'])

// delete, add, edit - posiible
// console.log(creds.rollno) // undefined

// add
creds['rollno'] = 172
console.log(creds.rollno)

student = { 
    stname : 'vittal',
    palce : 'blr',
    company : 'ABB'
}

console.log(student.stname)
console.log(student.palce)
console.log(student.company)

// add
student['id'] = 172
console.log(student.id)

// edit 
student['company'] = 'hcl'
console.log(student.company)

// delete
delete student.id
console.log(student.id)