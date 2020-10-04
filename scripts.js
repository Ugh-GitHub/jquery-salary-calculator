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
    $( '#submitEmployee' ).on('click',processInput);
}

function processInput() {
    // input testing goes here
    // testInput();
    if (testInput()) {
        
    
    // function to create a new table row, insert the input
    

    // function to clear the previous input fields
    clearFields();

    // function to calculate monthly costs
    calculateCosts();

    // function to append monthly costs

    // function to test monthly costs exceeding $20,000 
    // if so, appending id to prompt CSS to turn text red
    }
}

function testInput() {

    let errorTester = true;
    // need to test that the ID number is a number
    // need to test that Annual Salary is a number
    // need to test that all fields are filled

    errorTester = testFilled();
    
    // assign input to variables
    let idNumber = $( '#idNumber').val();
    let annualSalary = $( '#annualSalary').val();

    // test idNumber is a number
    if (isNaN(Number(idNumber))) {

        // if NaN prompt the user the input is invalid and return false
        console.log('idNumber is NaN');
        $('#idNumber').val('');
        $('#idNumber').attr('placeholder','*Needs Number*');
        //$('#idNumber').addClass('errorInput');
        errorTester = false;
    }

    // test annual salary is a number
    if (isNaN(Number(annualSalary))) {

        // if NaN prompt the user the input is invalid and return false
        console.log('annualSalary is NaN');
        $('#annualSalary').val('');
        $('#annualSalary').attr('placeholder','*Needs Number*');
        //$('#annualSalary').addClass('errorInput');
        errorTester = false;
    }

    // return true otherwise
    return errorTester;
}

function testFilled() {
    let errorTester = true;

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $( '#idNumber').val();
    let jobTitle = $( '#jobTitle').val();
    let annualSalary = $( '#annualSalary').val();

    if (firstName.length == 0) {
        $('#firstName').toggleClass('errorInput');
        errorTester = false;
    }
    if (lastName.length == 0) {
        $('#lastName').toggleClass('errorInput');
        errorTester = false;
    }
    if (idNumber.length == 0) {
        $('#idNumber').toggleClass('errorInput');
        errorTester = false;
    }
    if (jobTitle.length == 0) {
        $('#jobTitle').toggleClass('errorInput');
        errorTester = false;
    }
    if (annualSalary.length == 0) {
        $('#annualSalary').toggleClass('errorInput');
        errorTester = false;
    }
    return errorTester;
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
    
    empList.push(tempObj);
    console.log('in employee obj');
    return tempObj;
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

function calculateCosts() {
    let sum = 0;
    for (let i = 0; i < empList.length; i++) {
        sum += empList[i];
    }
    // put a text function here to add the info to the dom
    return sum;
}

