

names = ['vtal','anu','nalina','yashu']

//for of
for(let element of names)
{
    console.log('starts')
    console.log(element)
    console.log('ends')
}

// for each
names.forEach(element => {
    console.log('starts')
    console.log(element)
    console.log('ends')
});

// data driven testing
jobtitles = ['QA I','QA 2','QA 3']

// for each (arrays)
jobtitles.forEach(element => {
    console.log('starts')
    console.log(element)
    console.log('ends')
});


jobtitle = ['DB QA I','DB QA II','DB QA III']

// for in (object) or arrays
for(let title in jobtitle)
{
    //console.log(title) // gives index 
    console.log(jobtitle[title])

}

jobtitle1 = ['DB QA I','DB QA II','DB QA III']

// for of (array and string)
for(let title of jobtitle1)
{
    console.log(title)

}
