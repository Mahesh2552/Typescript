

// Declare interface
interface Student 
{ 
    name:string, 
    college:string, 
    fun:()=>string 
 } 
 
 // Implement the above interface
 var obj1:Student = 
 { 
    name:"Mahesh Dubal",
    college:"Fergusson College Pune", 
    fun: ():string =>{return "Welcome to Fergusson College"} 
 }
 
 // Display contents of object
 console.log("Students Object obj1:") 
 console.log(obj1.name) 
 console.log(obj1.college) 
 console.log(obj1.fun())  
 
  // Implement the above interface
 var obj2:Student = 
 { 
    name:"Rahul Joshi",
    college:"Modern", 
    fun: ():string =>{return "Admission Confirmed"} 
 } 
   
  // Display contents of object
 console.log("Students Object obj2") 
 console.log(obj2.name) 
 console.log(obj2.college)
 console.log(obj2.fun())  
 
