'use strict '


let tableId = document.getElementById("tableId");
let emploee =localStorage.getItem("emploee");
let emp = JSON.parse(emploee);
// console.log(emp);


function getAccountInfo(department) {

    let numEmp=0;
    let totalSal =0;
    let avgSal;
    let numOfDepEmp=0;
    let totalDepSal = 0;
    let avgDepSal;

    emp.forEach(element => {

        numEmp = numEmp + 1;
        totalSal = totalSal + (element.salary);
        avgSal = totalSal / numEmp;

        if (element.department == department) {
            // console.table(element.name);
            numOfDepEmp = numOfDepEmp + 1;
            totalDepSal = totalDepSal + (element.salary);
            avgDepSal = totalDepSal / numOfDepEmp;
        }
    })

    getAccountInfo("Administration");
    getAccountInfo("Marketing");
    getAccountInfo("Development");
    getAccountInfo("Finance");









// Employee.prototype.renderTable = function () {
//     let tr = document.createElement("tr");
//     tableId.appendChild(tr);

//     // let depName = document.createElement("td");
//     // depName.textContent = this.department;
//     // tr.appendChild(depName);

//     let NumberOfEmploee = document.createElement("td");
//     NumberOfEmploee.textContent = ;
//     tr.appendChild(NumberOfEmploee);

//     let AvgSalary = document.createElement("td");
//     AvgSalary.textContent = ;
//     tr.appendChild(AvgSalary);

// let Totalsalary = document.createElement("td");
// Totalsalary.textContent = ;
// tr.appendChild(Totalsalary);
