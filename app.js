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
var ID = 999;

var employee1 = {
    employeeID: 0,
    uniqueID: function(counter){
        this.employeeID = counter + 1;
        ID++;

    },
    FullName: "Ghazi Samer",
    Department: "Administration",
    Level: "Senior",
    ImageURL: 'https://this-person-does-not-exist.com/img/avatar-3a4699b2e967bbf827abf78fa599b870.jpg',
    Salary: 0,
    SalaryCal : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        this.Salary = postTax;
        
    }
}
employee1.uniqueID(ID);
employee1.SalaryCal();


var employee2 = {
    employeeID: 0,
    uniqueID: function(counter){
        this.employeeID = counter + 1;
        ID++;

    },
    FullName: "Lana Ali",
    Department: "Finance",
    Level: "Senior",
    ImageURL: 'https://this-person-does-not-exist.com/img/avatar-c4cec2ac4a5c2c06f7a447510d3e3179.jpg',
    Salary: 0,
    SalaryCal : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        this.Salary = postTax;
        
    }}
employee2.uniqueID(ID);
employee2.SalaryCal();


var employee3 = {
    employeeID: 0,
    uniqueID: function(counter){
        this.employeeID = counter + 1;
        ID++;

    },
    FullName: "Tamara Ayoub",
    Department: "Marketing",
    Level: "Senior",
    ImageURL: 'https://this-person-does-not-exist.com/img/avatar-d1a5d7914b001a63f59eace88540261d.jpg',
    Salary: 0,
    SalaryCal : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        this.Salary = postTax;
        
    }
}
employee3.uniqueID(ID);
employee3.SalaryCal();



var employee4 = {
    employeeID: 0,
    uniqueID: function(counter){
        this.employeeID = counter + 1;
        ID++;

    },
    FullName: "Safi Walid",
    Department: "Administration",
    Level: "Mid-Senior",
    ImageURL: 'https://this-person-does-not-exist.com/img/avatar-beaeee822a6c9d19efa85d3f8b56c89a.jpg',
    Salary: 0,
    SalaryCal : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        this.Salary = postTax;
        
    }
}
employee4.uniqueID(ID);
employee4.SalaryCal();



var employee5 = {
    employeeID: 0,
    uniqueID: function(counter){
        this.employeeID = counter + 1;
        ID++;

    },
    FullName: "Omar Zaid",
    Department: "Development",
    Level: "Senior",
    ImageURL: 'https://this-person-does-not-exist.com/img/avatar-1247bbc3b37af7d68db186c3efb9cca6.jpg',
    Salary: 0,
    SalaryCal : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        this.Salary = postTax;
        
    }
}
employee5.uniqueID(ID);
employee5.SalaryCal();


var employee6 = {
    employeeID: 0,
    uniqueID: function(counter){
        this.employeeID = counter + 1;
        ID++;

    },
    FullName: "Rana Saleh",
    Department: "Development",
    Level: "Junior",
    ImageURL: 'https://this-person-does-not-exist.com/img/avatar-4126d539619a52c0217d9ea26782300a.jpg',
    Salary: 0,
    SalaryCal : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        this.Salary = postTax;
        
    }
}
employee6.uniqueID(ID);
employee6.SalaryCal();



var employee7 = {
    employeeID: 0,
    uniqueID: function(counter){
        this.employeeID = counter + 1;
        ID++;

    },
    FullName: "Hadi Ahmad",
    Department: "Finance",
    Level: "Mid-Senior",
    ImageURL: 'https://this-person-does-not-exist.com/img/avatar-477ecfc5fc7e274f79669b434525c031.jpg',
    Salary: 0,
    SalaryCal : function(){
        var range = salaryRange(this.Level);
        var preTax = Math.random() * (range[1] - range[0]) + range[0];
        var postTax = Math.round(preTax - (preTax* .075))  ;
        this.Salary = postTax;
        
    }
}
employee7.uniqueID(ID);
employee7.SalaryCal();




console.log("Employee name: " + employee1.FullName);
console.log("Employee salary: " + employee1.Salary);
console.log("");
console.log("Employee name: " + employee2.FullName);
console.log("Employee salary: " + employee2.Salary);
console.log("");
console.log("Employee name: " + employee3.FullName);
console.log("Employee salary: " + employee3.Salary);
console.log("");
console.log("Employee name: " + employee4.FullName);
console.log("Employee salary: " + employee4.Salary);
console.log("");
console.log("Employee name: " + employee5.FullName);
console.log("Employee salary: " + employee5.Salary);
console.log("");
console.log("Employee name: " + employee6.FullName);
console.log("Employee salary: " + employee6.Salary);
console.log("");
console.log("Employee name: " + employee7.FullName);
console.log("Employee salary: " + employee7.Salary);


