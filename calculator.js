/*
1. Add event listener to each number button
2. Make an array object for number a
    i. display the numbers on the display 
3. When user presses a operator button make a new array for array b 
    i.Clear display
4. Add numbers selected to array
    i. add numbers to display


*/

// Global Variables
var number_one = [];
var number_two = [];
var operator_selection = [];
const number_buttons = document.querySelectorAll('.number_button');
const operator_buttons = document.querySelectorAll('.operator_button');
const function_buttons = document.querySelectorAll('.function_button');


// event listener for number buttons
number_buttons.forEach(number_button => {
    number_button.addEventListener('click', operate);
});

// event listener for operator buttons
operator_buttons.forEach(operator_button => {
    operator_button.addEventListener('click', operate);
});


//event listener for function buttons
function_buttons.forEach(function_button => {
    function_button.addEventListener('click', operate);
});




// Functions

var add = function (a, b) {

    var sum = a + b
    return sum 

}

var subtract = function (a, b) {

    var difference  = a - b
    return difference
}

var multiply = function (a, b) {

    var product  = a * b
    return product
}

var divide  = function (a, b) {

    var quotient = a / b
    return quotient 
}

function operate(button) {
    // if else to see if the user to inputting the first number or the second number 
    clicked_button = button.target.id;
    clicked_button_class = button.target.className;
    // clicked_number = button.target.id
    // number_one.push(clicked_number)
    // console.log(typeof clicked_button)

    //First number selection
    if(operator_selection.length === 0 && clicked_button_class == 'number_button'){
        number_one.push(button.target.id);
    } else if (operator_selection.length != 0 && clicked_button_class == 'number_button') { // Second number selection
        number_two.push(button.target.id);
    }


    // Operator selection
    if (button.target.id == '-' || button.target.id == '+' || button.target.id == 'x' || 
    button.target.id == '÷') {
        operator_selection.push(clicked_button);
    } 


    // if equals to sign is pressed, combine number_one and number_two, operate using 
    if (button.target.id == '=') {
        const first_number = number_one.join('');
        console.log("=")

    }
}



