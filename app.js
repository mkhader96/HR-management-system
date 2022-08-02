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


var employee1 = {
    employeeID: function(){
        return 1000;
    },   
    FullName: "Ghazi Samer",
    Department: "Administration",
    Level: "Senior",
    ImageURL: "",
    Salary : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        return postTax;
        
    }
}

var employee2 = {
    employeeID: function(){
        return employee1.employeeID() + 1;},
    FullName: "Lana Ali",
    Department: "Finance",
    Level: "Senior",
    ImageURL: "",
    Salary : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        return postTax;
    }
}

var employee3 = {
    employeeID: function(){
        return employee2.employeeID() + 1;},
    FullName: "Tamara Ayoub",
    Department: "Marketing",
    Level: "Senior",
    ImageURL: "",
    Salary: "",
    Salary : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        return postTax;   
        
    }
}
var employee4 = {
    employeeID: function(){
        return employee3.employeeID() + 1;},
    FullName: "Safi Walid",
    Department: "Administration",
    Level: "Mid-Senior",
    ImageURL: "",
    Salary : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        return postTax;
        
    }
}
var employee5 = {
    employeeID: function(){
        return employee4.employeeID() + 1;},
    FullName: "Omar Zaid",
    Department: "Development",
    Level: "Senior",
    ImageURL: "",
    Salary : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        return postTax;
    }
}
var employee6 = {
    employeeID: function(){
        return employee5.employeeID() + 1;},
    FullName: "Rana Saleh",
    Department: "Development",
    Level: "Junior",
    ImageURL: "",
    Salary : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        return postTax;
    }}

var employee7 = {
    employeeID: function(){
        return employee6.employeeID() + 1;},
    FullName: "Hadi Ahmad",
    Department: "Finance",
    Level: "Mid-Senior",
    ImageURL: "",
    Salary : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        return postTax;}
}

console.log("Employee name: " + employee1.FullName);
console.log("Employee salary: " + employee1.Salary());
console.log("");
console.log("Employee name: " + employee2.FullName);
console.log("Employee salary: " + employee2.Salary());
console.log("");
console.log("Employee name: " + employee3.FullName);
console.log("Employee salary: " + employee3.Salary());
console.log("");
console.log("Employee name: " + employee4.FullName);
console.log("Employee salary: " + employee4.Salary());
console.log("");
console.log("Employee name: " + employee5.FullName);
console.log("Employee salary: " + employee5.Salary());
console.log("");
console.log("Employee name: " + employee6.FullName);
console.log("Employee salary: " + employee6.Salary());
console.log("");
console.log("Employee name: " + employee7.FullName);
console.log("Employee salary: " + employee7.Salary());


