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
var number_one = []; // array for first number
var number_two = []; // array for second number
var operator_selection = []; // array for operator selector
var hold_number // array for continued math operations
var decimal = false // to make sure there isn't more than one decimal point in a number

// Event listener variable 
const number_buttons = document.querySelectorAll('.number_button');
const operator_buttons = document.querySelectorAll('.operator_button');
const function_buttons = document.querySelectorAll('.function_button');

// Display Variables
var display_content = []; // array for display
var holding_screen_text = ''
var first_display_number_text = ''
var second_display_number_text = ''
var final_holding_screen_text = ''
var operator_selection_string = ''
var hold_display_number = ''


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

function updateDisplay(){ // might not need this function
    //console.log(first_display_number_text)

}

function operate(button) {


    // if else to see if the user to inputting the first number or the second number 
    clicked_button = button.target.id; // -- this variable may not be being used 
    clicked_button_class = button.target.className;

    // Addition of decimals to numbers
    // have to change decimal button class
    // if (operator_selection.length === 0 && clicked_button_class == 'decimal_button'){
    //     if(button.target.id == "." && decimal == false){
    //         decimal = true
    //         number_two.push(button.target.id);
    //         let second_display_number = number_two.join('');
    //         second_display_number_text = String(second_display_number);
            
    //         if (hold_number === undefined) {
    //             let operator_selection_string = String(operator_selection)
    //             final_holding_screen_text = first_display_number_text + " " + operator_selection_string + " " + second_display_number_text
    //             document.getElementById('holding_display').innerHTML = final_holding_screen_text;
    //         } else { // code to add second number to display after first operation has been finished. 
    //             document.getElementById('holding_display').innerHTML = hold_number + " " + String(operator_selection) + " " + String(second_display_number)
    //         }

    //     } else if (button.target.id == "." && decimal == true){
    //         alert("please choose another button")
    //     }
    // }



    //First number selection -- need to disable decimals if already present in the number
    if(operator_selection.length === 0 && clicked_button_class == 'number_button'){
        // Need additional code to check if a decimal has been chosen
        hold_number = void 0 // void holding number if user does not want to do any operations on it

        if (button.target.id == "." && decimal == false){
            decimal = true
            number_one.push(button.target.id);
            let first_display_number = number_one.join('');
            // code to add first number to display
            first_display_number_text = String(first_display_number);
            holding_screen_text = first_display_number_text;
            document.getElementById('holding_display').innerHTML = holding_screen_text;

        } else if (button.target.id == "." && decimal == true) {
            alert("please choose a different button")
        } else {
            number_one.push(button.target.id);
            let first_display_number = number_one.join('');
            // code to add first number to display
            first_display_number_text = String(first_display_number);
            holding_screen_text = first_display_number_text;
            document.getElementById('holding_display').innerHTML = holding_screen_text;
        }  
        
        
        // number_one.push(button.target.id);
        // let first_display_number = number_one.join('');
        // // code to add first number to display
        // first_display_number_text = String(first_display_number);
        // holding_screen_text = first_display_number_text; 
        // document.getElementById('holding_display').innerHTML = holding_screen_text;
        // updateDisplay() // might need to delete this
        
    } else if (operator_selection.length != 0 && clicked_button_class == 'number_button'){ // Second number selection
        // Need to add code to check if a decimal has been chosen
        
        // To check if there are two decimals in one number 
        if(button.target.id == "." && decimal == false){ // this is to push a decimal into the number array
            decimal = true
            number_two.push(button.target.id);
            let second_display_number = number_two.join('');
            second_display_number_text = String(second_display_number);
            
            if (hold_number === undefined) {
                let operator_selection_string = String(operator_selection)
                final_holding_screen_text = first_display_number_text + " " + operator_selection_string + " " + second_display_number_text
                document.getElementById('holding_display').innerHTML = final_holding_screen_text;
            } else { // code to add second number to display after first operation has been finished. 
                document.getElementById('holding_display').innerHTML = hold_number + " " + String(operator_selection) + " " + String(second_display_number)
            }

        } else if (button.target.id == "." && decimal == true){
            alert("please choose another button")
        } else { // this is to push a regular digit to the number array 
            number_two.push(button.target.id);
            let second_display_number = number_two.join('');
            second_display_number_text = String(second_display_number);

            // code to add second number to display after first operation
            if (hold_number === undefined) {
                let operator_selection_string = String(operator_selection)
                final_holding_screen_text = first_display_number_text + " " + operator_selection_string + " " + second_display_number_text
                document.getElementById('holding_display').innerHTML = final_holding_screen_text;
            } else { // code to add second number to display after first operation has been finished. 
                document.getElementById('holding_display').innerHTML = hold_number + " " + String(operator_selection) + " " + String(second_display_number)
            }
        }
        // number_two.push(button.target.id);
        // let second_display_number = number_two.join('');
        // second_display_number_text = String(second_display_number);
     
        // code to add second number to display after first operation
        // if (hold_number === undefined){
        //     let operator_selection_string = String(operator_selection)
        //     final_holding_screen_text = first_display_number_text + " " + operator_selection_string + " " + second_display_number_text
        //     document.getElementById('holding_display').innerHTML = final_holding_screen_text;
        // } else { // code to add second number to display after first operation has been finished. 
        //     document.getElementById('holding_display').innerHTML = hold_number + " " + String(operator_selection) + " " + String(second_display_number)
        // }
    }

    // Operator selection !!!! Make an error check for 2 operator selections (additional code needed) !!!!
    // make an error check for no first number input (additional code needed)

    if (button.target.id == '-' || button.target.id == '+' || button.target.id == 'x' ||
    button.target.id == '÷') {
        operator_selection.push(clicked_button);
        // display operator when it is selected
        operator_selection_string = String(operator_selection);
        final_holding_screen_text = first_display_number_text + " " + operator_selection_string;
        document.getElementById('holding_display').innerHTML = final_holding_screen_text;
        decimal = false // reset decimal checker if second number has been selected 
        // display hold number for continued operations 
        if (hold_number != undefined){
            hold_display_number = String(hold_number) + " " + String(operator_selection)
            document.getElementById('holding_display').innerHTML = hold_display_number
        }
    }

    // if equals to sign is pressed, combine number_one and number_two, call math functions
    
    if (button.target.id == '=' && operator_selection.length != 0 && hold_number === undefined){

        //convert first number array to integer variable
        const first_number = number_one.join('');
        const first_number_int = parseFloat(first_number);

        //convert second number array to integer variable
        const second_number = number_two.join('');
        const second_number_int = parseFloat(second_number);


        if (operator_selection == '+'){
            // call addition function
            let addition_result = add(first_number_int, second_number_int)
            document.getElementById('result_display').innerHTML = addition_result
            hold_number = addition_result // hold number incase user wants continued operations
            // clear variables
            number_one = []
            number_two = []
            operator_selection = []

        } else if (operator_selection == '-') {

            // call function
            let subtraction_result = subtract(first_number_int, second_number_int)
            document.getElementById('result_display').innerHTML = subtraction_result
            hold_number = subtraction_result // hold number incase user wants continued operations 
            
            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else if (operator_selection == 'x') {

            // call function
            let multiplication_result = multiply(first_number_int, second_number_int)
            document.getElementById('result_display').innerHTML = multiplication_result
            hold_number = multiplication_result // hold number incase user wants continued operations 

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else if (operator_selection == '÷') {
            
            // Call function
            let division_result = divide(first_number_int, second_number_int)
            document.getElementById('result_display').innerHTML = division_result
            hold_number = division_result // hold number incase user wants continued operations 

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else {alert("please choose an operator")}

        holding_screen_text = ''
        first_display_number_text = ''
        second_display_number_text = ''
        final_holding_screen_text = ''
        operator_selection_string = ''
        number_one = [];
        number_two = [];
        operator_selection = [];
        display_content = [];
    } else if (button.target.id == '=' && operator_selection.length != 0 && hold_number != undefined){
        // code for continued operations
        const continued_operation_number = hold_number
        console.log(continued_operation_number)

        //convert second number array to integer variable
        const second_number = number_two.join('');
        const second_number_int = parseFloat(second_number);

        if (operator_selection == '+') {
            let addition_result = add(continued_operation_number, second_number_int)
            document.getElementById('result_display').innerHTML = addition_result
            hold_number = addition_result // hold number incase user wants continued operations
            // clear variables
            number_one = []
            number_two = []
            operator_selection = []

        }else if (operator_selection == '-'){
            // call function
            let subtraction_result = subtract(continued_operation_number, second_number_int)
            document.getElementById('result_display').innerHTML = subtraction_result
            hold_number = subtraction_result // hold number incase user wants continued operations 

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else if (operator_selection == 'x'){
            // call function
            let multiplication_result = multiply(continued_operation_number, second_number_int)
            document.getElementById('result_display').innerHTML = multiplication_result
            hold_number = multiplication_result // hold number incase user wants continued operations 

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else if (operator_selection == '÷') {

            // Call function
            let division_result = divide(continued_operation_number, second_number_int)
            document.getElementById('result_display').innerHTML = division_result
            hold_number = division_result // hold number incase user wants continued operations 

            // clear variables
            number_one = []
            number_two = []
            operator_selection = []
        } else { alert("please choose an operator") }


    }






// //////////////////////////////////////////////



    // Code for backspace button -- need to add decimal check (additional code)
    if (button.target.id == 'Backspace' && number_two.length === 0 && operator_selection.length === 0) {
        number_one.pop()
        let first_backspace_number = number_one.join('')
        first_display_number_text = String(first_backspace_number)
        final_holding_screen_text = first_display_number_text + " " + operator_selection_string + " " + second_display_number_text
        document.getElementById('holding_display').innerHTML = final_holding_screen_text;
    } else if (button.target.id == 'Backspace' && number_two.length === 0 && operator_selection.length != 0){
        operator_selection.pop()
        operator_selection_string = operator_selection
        final_holding_screen_text = first_display_number_text + " " + operator_selection_string + " " + second_display_number_text
        document.getElementById('holding_display').innerHTML = final_holding_screen_text;
    } else if (button.target.id == 'Backspace' && number_two.length != 0 && operator_selection.length != 0){

        number_two.pop()
        let second_backspace_number = number_two.join('')
        second_display_number_text = String(second_backspace_number)
        final_holding_screen_text = first_display_number_text + " " + operator_selection_string + " " + second_display_number_text
        document.getElementById('holding_display').innerHTML = final_holding_screen_text;
    }

    // Clear Button
    if (button.target.id == 'clear'){
        holding_screen_text = ''
        first_display_number_text = ''
        second_display_number_text = ''
        final_holding_screen_text = ''
        operator_selection_string = ''
        number_one = [];
        number_two = [];
        operator_selection = [];
        display_content = [];
        hold_number = void 0 
        document.getElementById('holding_display').innerHTML = final_holding_screen_text;
    }

    // end script
}



