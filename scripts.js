console.log("hello world");
$(document).ready(onReady);

// object to hold:
// employee first name, 
// last name, 
// ID number, 
// job title, 
// annual salary

let empList = []; // Employee list declaration

{/* <input type="text" id="firstName" class="input" placeholder="Employee First Name">
<input type="text" id="lastName" class="input" placeholder="Employee Last Name">
<input type="text" id="idNumber" class="input" placeholder="Employee ID Number">
<input type="text" id="jobTitle" class="input" placeholder="Employee Job Title">
<input type="text" id="annualSalary" class="input" placeholder="Employee Annual Salary"> */}

function onReady() {
    $( '#submitEmployee' ).on('click',employeeObj);
}


function employeeObj() {
    // Create an object with the text input fields
    let tempObj = {
        firstName: $( '#firstName').val(),
        lastName: $( '#lastName').val(),
        idNumber: $( '#idNumber').val(),
        jobTitle: $( '#jobTitle').val(),
        annualSalary: $( '#annualSalary').val()
    };
    clearFields()
    empList.push(tempObj);
    console.log('in employee obj');
    updateTableDOM(tempObj);
    return tempObj;
}

function clearFields() {
    // Clear the fields
    console.log('in clearFields');
    $( '#firstName').val('');
    $( '#lastName').val('');
    $( '#idNumber').val('');
    $( '#jobTitle').val('');
    $( '#annualSalary').val('');
    return true;
}


function updateTableDOM(empObj) {
    // "employeeInfoTable"
    console.log('in Update Table DOM');

    let myTable = document.getElementById("employeeInfoTable");

    let newRow = myTable.insertRow(-1);
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    let newCell5 = newRow.insertCell(4);
    newCell1.innerHTML = empObj.firstName;
    newCell2.innerHTML = empObj.lastName;
    newCell3.innerHTML = empObj.idNumber;
    newCell4.innerHTML = empObj.jobTitle;
    newCell5.innerHTML = empObj.annualSalary; 
    return true;
}

// Collect/store clientInformation
// calculate monthly Costs
// append information to the DOM and clear the input fields
// If the total monthly cost exceeds $20,000, 
// add a red background color to the total monthly cost.