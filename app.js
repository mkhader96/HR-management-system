'use strict'
function salaryRange(dep){
    var max = 0;
    var min = 0;
    if (dep == "Senior"){
        min = 1500;
        max = 2000;
    } else if (dep == "Mid-Senior"){
        min = 1000;
        max = 1500;
    } else if (dep == "Junior"){
        min = 500;
        max = 1000;
    }
    return [min,max];
}

let section = document.getElementById("cardSection");
let emp = document.getElementsByTagName("div");
let empno = 0;

var postTax = 0;
var ID = 999;
const allEmployees = [];
function Employee(ID,nameValue,departmentValue,levelValue,imageValue,postTax){
    this.employeeID = ID;
    this.FullName = nameValue;
    this.Department = departmentValue;
    this.Level = levelValue;
    this.ImageURL = imageValue;
    this.Salary =  postTax;
    this.SalaryCal(postTax);
    this.uniqueID(ID);
    allEmployees.push(this); 
    this.render();

}

Employee.prototype.uniqueID = function(counter){
    this.employeeID = counter + 1;
    ID++;
    return ID    }
Employee.prototype.SalaryCal = function(){
    var range = salaryRange(this.Level);
    var preTax = Math.random() * (range[1] - range[0]) + range[0];
    var postTax = Math.round(preTax - (preTax* .075))  ;
    this.Salary = postTax;
    return postTax;}
Employee.prototype.render = function(){
        let img = document.createElement('img');
        img.src =this.ImageURL; 
        emp[empno].appendChild(img);
        let name = document.createElement('span');
        name.textContent = "Name: " + this.FullName;
        emp[empno].appendChild(name);
        name.classList.add("first");
        let id = document.createElement('span');
        id.textContent = "ID: " + this.employeeID;
        emp[empno].appendChild(id);
        id.classList.add("first");
        let dep = document.createElement('span');
        dep.textContent = "Department: " + this.Department;
        emp[empno].appendChild(dep);
        dep.classList.add("second");
        let level = document.createElement('span');
        level.textContent = "Level: " + this.Level;
        emp[empno].appendChild(level);
        level.classList.add("second");

        let sal = document.createElement('span');
        sal.textContent =this.Salary;
        emp[empno].appendChild(sal);
        sal.classList.add("third");

      
        empno++;
        

        
}

const employee1 = new Employee(ID,"Ghazi Samer","Administration","Senior","./images/Ghazi.jpg",postTax);
const employee2 = new Employee(ID,"Lana Ali","Finance","Senior","./images/Lana.jpg",postTax);
const employee3 = new Employee(ID,"Tamara Ayoub","Marketing","Senior","./images/Tamara.jpg",postTax);
const employee4 = new Employee(ID,"Safi Walid","Administration","Mid-Senior","./images/Safi.jpg",postTax);
const employee5 = new Employee(ID,"Omar Zaid","Development","Senior","./images/Omar.jpg",postTax);
const employee6 = new Employee(ID,"Rana Saleh","Development","Junior","./images/Rana.jpg",postTax);
const employee7 = new Employee(ID,"Hadi Ahmad","Finance","Mid-Senior","./images/Hadi.jpg",postTax);



//     document.write(`<p>Employee Name : ${this.FullName}</p>`);
//     document.write(`<p>Department: ${this.Department}</p>`);
//     document.write(`<p>Employee salary: ${this.Salary}</p><br>`);}

// Employee.prototype.uniqueID = function(counter){
//     this.employeeID = counter + 1;
//     ID++;
//     return ID    }
// Employee.prototype.SalaryCal = function(){
//     var range = salaryRange(this.Level);
//     var preTax = Math.random() * (range[1] - range[0]) + range[0];
//     var postTax = Math.round(preTax - (preTax* .075))  ;
//     this.Salary = postTax;
//     return postTax;