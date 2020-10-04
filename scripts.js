console.log("hello world");
$(document).ready(onReady);


let empList = []; // Employee list declaration

function onReady() {
    // adding a new employee button
    $( '#submitEmployee' ).on('click',processInput);

    // button to toggle deleting employee buttons

    // button to delete employees

}

function processInput() {
    // input testing goes here
    // testInput();
    if (testInput()) {
    console.log('function block');
    
    // function to create a new table row, insert the input
    updateTableDOM(employeeObj());

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
    
    // reset placeholder if number is put in and the error message is the current placeholder
    if (!isNaN(Number(idNumber)) && $('#idNumber').attr('placeholder') == '*Needs Number*') {
        $('#idNumber').attr('placeholder','Employee ID Number');
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

    // reset placeholder if number is put in and the error message is the current placeholder
    if (!isNaN(Number(annualSalary)) && $('#annualSalary').attr('placeholder') == '*Needs Number*') {
        $('#annualSalary').attr('placeholder','Employee ID Number');
    }

    // if true, set all classes back to the basic to void out red text
    // and to reset placeholder info
    // Something here function call

    // return true otherwise
    return errorTester;
}

function testFilled() {
    let errorTester = true;

    let firstName = $('#firstName');
    let lastName = $('#lastName').val();
    let idNumber = $( '#idNumber').val();
    let jobTitle = $( '#jobTitle').val();
    let annualSalary = $( '#annualSalary').val();

    console.log(firstName.val());


    if (firstName.val().length == 0) {
        console.log('first name is blank');
        $('#firstNameLabel').addClass('errorInput');
        errorTester = false;
    }
    // if (firstName.val().length > 0 && $('#firstNameLabel').hasClass() == 'errorInput') {
    //     $('#firstNameLabel').removeClass('errorInput');
    // }

    if (lastName.length == 0) {
        console.log('last name is blank');
        $('#lastNameLabel').addClass('errorInput');
        errorTester = false;
    }
    // if (lastName.val().length > 0 && $('#lastNameLabel').hasClass() == 'errorInput') {
    //     $('#lastNameLabel').removeClass('errorInput');
    // }

    if (idNumber.length == 0) {
        console.log('id number is blank');
        $('#idNumberLabel').addClass('errorInput');
        errorTester = false;
    }
    // if (idNumber.val().length > 0 && $('#idNumberLabel').hasClass() == 'errorInput') {
    //     $('#idNumberLabel').removeClass('errorInput');
    // }

    if (jobTitle.length == 0) {
        console.log('title is blank');
        $('#jobTitleLabel').addClass('errorInput');
        errorTester = false;
    }
    // if (jobTitle.val().length > 0 && $('#jobTitleLabel').hasClass() == 'errorInput') {
    //     $('#jobTitleLabel').removeClass('errorInput');
    // }

    if (annualSalary.length == 0) {
        console.log('annual salary is blank');
        $('#annualSalaryLabel').addClass('errorInput');
        errorTester = false;
    }
    // if (annualSalary.val().length > 0 && $('#annualSalaryLabel').hasClass() == 'errorInput') {
    //     $('#annualSalaryLabel').removeClass('errorInput');
    // }

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
        sum += Number(empList[i].annualSalary);
    }
    sum /= 12;
    // put a text function here to add the info to the dom
    console.log('in caculateCosts');
    $('#monthSum').empty();
    $('#monthSum').text(`The total cost of salaries per month is: ${sum}`);
    return sum;
}

