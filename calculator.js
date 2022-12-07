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
var display_content = [];
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

// * Create a function for backspace and clear *



// Functions

// Addition function
function add(first_number_int, second_number_int) {

    let sum = first_number_int + second_number_int
    return sum

}

// Subtraction function
function subtract(first_number_int, second_number_int) {

    let difference  = first_number_int - second_number_int
    return difference
}

// Multiplication function
function multiply(first_number_int, second_number_int) {

    let product  = first_number_int * second_number_int
    return product
}

// Division function
function divide(first_number_int, second_number_int) {

    let quotient = first_number_int/second_number_int
    return quotient 
}

function operate(button) {



    // if else to see if the user to inputting the first number or the second number 
    clicked_button = button.target.id;
    clicked_button_class = button.target.className;

    //First number selection
    if(operator_selection.length === 0 && clicked_button_class == 'number_button'){
        number_one.push(button.target.id);
    } else if (operator_selection.length != 0 && clicked_button_class == 'number_button') { // Second number selection
        number_two.push(button.target.id);
    }

    // Change display text to show numbers
    if (operator_selection.length == 0){
        let first_display_number = number_one.join('')
        document.getElementById('display').innerHTML  = first_display_number
    } else if (operator_selection.length != 0){
        let second_display_number = number_two.join('')
        document.getElementById('display').innerHTML = second_display_number
    }
    



    // Operator selection
    if (button.target.id == '-' || button.target.id == '+' || button.target.id == 'x' || 
    button.target.id == '÷') {
        operator_selection.push(clicked_button);
    } 


    // if equals to sign is pressed, combine number_one and number_two, call math functions 
    if (button.target.id == '=' && operator_selection.length != 0) {


        
        //convert first number array to integer variable
        const first_number = number_one.join('');
        const first_number_int = parseInt(first_number);

        //convert second number array to integer variable
        const second_number = number_two.join('');
        const second_number_int = parseInt(second_number);

        if (operator_selection == '+'){
            // call addition function
            let addition_result = add(first_number_int, second_number_int)
            document.getElementById('display').innerHTML = addition_result

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []

        } else if (operator_selection == '-') {

            // call function
            let subtraction_result = subtract(first_number_int, second_number_int)
            document.getElementById('display').innerHTML = subtraction_result

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else if (operator_selection == 'x') {

            // call function
            multiply(first_number_int, second_number_int)
            let multiplication_result = divide(first_number_int, second_number_int)
            document.getElementById('display').innerHTML = multiplication_result

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else if (operator_selection == '÷') {
            
            // Call function
            let division_result = divide(first_number_int, second_number_int)
            document.getElementById('display').innerHTML = division_result

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else {alert("please choose an operator")}

        



    }
    // Need to add a check to see if an operator was selected before the equals buttons is pressed 
}



