`use strict`;
let sectionEl = document.getElementById("cardSection"); //to create element in render
let formEd = document.getElementById("formId");// need this if form listener
console.log(sectionEl);
let allEmploee =[];



function Employee(  fullName ,department , level , imageUrl , EmployeeId  )
{
    this.EmployeeId = Math.floor(1000 + Math.random() * 9000);
    this.fullName = fullName;
    this.department =department;
    this.level =level;
    this.imageUrl =imageUrl;
    
    
    allEmploee.push(this);

} 


let employee1 =new Employee("Ghazi Samer" ,"Administration", "Senior" , "./assest/Ghazi.jpg");
let employee2 = new Employee( "Lana Ali", "Finance" ,"Senior" ,"./assest/Lana.jpg" );
let employee3 =new Employee( "Tamara Ayoub","Marketing","Senior" ,"./assest/Tamara.jpg");
let employee4 = new Employee("Safi Walid","Administration", "Mid-Senior","./assest/Safi.jpg");
let employee5 = new Employee( "Omar Zaid","Development","Senior" , "./assest/Omar.jpg");
let employee6 = new Employee( "Rana Saleh","Development","Mid-Senior", "./assest/Rana.jpg");
let employee7 = new Employee( "Hadi Ahmad","Finance","Junior","./assest/Hadi.jpg");


function renderAll() {
    for (let i = 0; i < allEmploee.length; i++) {
        allEmploee[i].sal();
         allEmploee[i].render();
        
    }}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

    Employee.prototype.sal = function(){
       let oldSalary=0;
       if (this.level == "Senior") {
        oldSalary = getRndInteger(1500, 2000);}
     
       else if(this.level == "Mid-Senior"){
        oldSalary = getRndInteger(1000, 1500);
         
       }
       else if(this.level == "Junior"){
        oldSalary = getRndInteger(500, 1000);0
           
        }
       let netSalary = (oldSalary - oldSalary * .0075);
       this.salary=netSalary; 
      
    }
    


        Employee.prototype.render = function (){
          //  document.write(`<h2>The Emploeyee Name  ${this.fullName} and the Salary  ${this.salary} </h2>`);
          let Name = document.createElement('h2')
          Name.textContent = this.fullName;
          sectionEl.appendChild(Name);

          let imageEl = document.createElement('img');
          imageEl.src = this.imageUrl;
          sectionEl.appendChild(imageEl);
          imageEl.style.width="170px";

          let depert = document.createElement('p');
          depert.textContent = this.department;
          sectionEl.appendChild(depert);

          let levelL1 = document.createElement('p');
          levelL1.textContent = this.level;
          sectionEl.appendChild(levelL1);
          
          let id = document.createElement("p");
          id.textContent= this.EmployeeId;
          sectionEl.appendChild(id);

          let salary = document.createElement("p");
          salary.textContent= this.salary;
          sectionEl.appendChild(salary);


          
         }
         
         
         formEd.addEventListener("submit", handelSubmit);
         function handelSubmit(event){
            event.preventDefault();
            console.log("Form event", event);

            let fullName = event.target.fullName.value;
            let department = event.target.department.value;
            let level = event.target.level.value;
            let image= event.target.image.value;
            let salary= event.target.salary.value;
            let EmployeeId = Employee.EmployeeId;
           
            let newemploee = new Employee (fullName   ,department , level , image ,EmployeeId , salary);
            newemploee.render();
            saveData(allEmploee);
            
       }
       
    
      

       // var val = Math.floor(1000 + Math.random() * 9000);
// Employee.EmployeeId =val;


//local storage
       function saveData(data) {

        let stringfiyData = JSON.stringify(data);
        localStorage.setItem("emploee", stringfiyData);
    }
    function getData() {
        let retrievedData = localStorage.getItem("emploee");
        let arrayData = JSON.parse(retrievedData);
        if (arrayData != null) {
            for (let i = 0; i < arrayData.length; i++) {
                new Employee (arrayData[i].fullName, arrayData[i].department, arrayData[i].imageUrl, arrayData[i].EmployeeId, arrayData[i].salary);
            }
        } 
        renderAll();
    }
getData();




