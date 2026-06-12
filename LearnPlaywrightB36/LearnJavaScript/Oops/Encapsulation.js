
// Encapsulation :- binding or wraping the data members and member function into single unit
// binding the data b/w methods 

class Emp1{

    empName
    empPlace
    empOrg

    // setter function
    setEmpdetailes(v1,v2,v3)
    {
        // v1,v2,v3 are going to assign to empname,empplace,emporg
        this.empName = v1
        this.empPlace = v2
        this.empOrg = v2
    }

    // getter
    getEmpdetailes(){
        console.log(this.empName,this.empPlace,this.empOrg)
    }
}

// create an object
const e1 =  new Emp1()
e1.setEmpdetailes("vittal","Tmk","DBS")
e1.getEmpdetailes()

// without setter getter will not give result or executes
