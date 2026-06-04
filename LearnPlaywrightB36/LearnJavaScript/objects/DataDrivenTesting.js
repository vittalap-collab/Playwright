
/*
        Data Driven Testing
-> " Executing the single test with multiple set of data "
-> use 'for in loop'
*/

const job = {

    job1: 'SDET QA I',
    job2: 'SDET QA II',
    job3: 'SDET QA III',
}

// for in loop
for(let item in jobtitle)
{
    console.log("loop starts here")
    //console.log(item) // title1,title2,title3
    console.log(jobtitle[item])
    console.log("loop ends here")
}