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
    this.printall();

}
Employee.prototype.printall = function(){
    document.write(`<p>Employee Name : ${this.FullName}</p>`);
    document.write(`<p>Department: ${this.Department}</p>`);
    document.write(`<p>Employee salary: ${this.Salary}</p><br>`);}

Employee.prototype.uniqueID = function(counter){
    this.employeeID = counter + 1;
    ID++;
    return ID    }
Employee.prototype.SalaryCal = function(){
    var range = salaryRange(this.Level);
    var preTax = Math.random() * (range[1] - range[0]) + range[0];
    var postTax = Math.round(preTax - (preTax* .075))  ;
    this.Salary = postTax;
    return postTax;
}

const employee1 = new Employee(ID,"Ghazi Samer","Administration","Senior","./images/Ghazi Samer.png",postTax);
const employee2 = new Employee(ID,"Lana Ali","Finance","Senior","./images/Lana Ali.jpg",postTax);
const employee3 = new Employee(ID,"Tamara Ayoub","Marketing","Senior","./images/Tamara Ayoub.jpg",postTax);
const employee4 = new Employee(ID,"Safi Walid","Administration","Mid-Senior","./images/Safi Walid.jpg",postTax);
const employee5 = new Employee(ID,"Omar Zaid","Development","Senior","./images/Omar Zaid.jpg",postTax);
const employee6 = new Employee(ID,"Rana Saleh","Development","Junior","./images/Rana Saleh.jpg",postTax);
const employee7 = new Employee(ID,"Hadi Ahmad","Finance","Mid-Senior","./images/Hadi Ahmad.jpg",postTax);



