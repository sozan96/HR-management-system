`use strict`;

function Employee(employeeId , fullName ,department , level , imageUrl  )
{
    this.EmployeeId = employeeId;
    this.fullName = fullName;
    this.department =department;
    this.level =level;
    this.imageUrl =imageUrl;
} 


let employee1 =new Employee("1000" ,"Ghazi Samer" ,"Administration", "Senior" , "./image.jpg");
let employee2 = new Employee("1001" , "Lana Ali", "Finance" ,"Senior" ,"./image.jpg" );
let employee3 =new Employee("1002" ,"Tamara Ayoub",	"Marketing","Senior" ,"./image.jpg");
let employee4 = new Employee("1003","Safi Walid","Administration", "Mid-Senior","./image.jpg");
let employee5 = new Employee("1004", "Omar Zaid","Development","Senior" , "./image.jpg");
let employee6 = new Employee("1005", "Rana Saleh","Development","Mid-Senior", "./image.jpg");
let employee7 = new Employee("1006", "Hadi Ahmad","Finance","Junior","./image.jpg");


let getRndInteger = function (min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
 
 }

    Employee.prototype.sal = function(){
       let oldSalary=0;
       if (this.level == "Senior") {
        oldSalary = getRndInteger(1500, 2000);}
     
       else if(this.level == "Mid-Senior"){
        oldSalary = getRndInteger(1000, 1500);
         
       }
       else if(this.level == "Junior"){
        oldSalary = getRndInteger(500, 1000);
           
        }
       let netSalary = oldSalary - oldSalary * .0075
       this.salary=netSalary; 
      
    }
        Employee.prototype.render = function (){
            document.write(`<h2>The Emploeyee Name  ${this.fullName} and the Salary  ${this.salary} </h2>`);
         }
         
   
    

employee1.sal();
employee2.sal();
employee3.sal();
employee4.sal();
employee5.sal();
employee6.sal();
employee7.sal();


employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();