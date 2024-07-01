// Global Variables
let v1 = "";
let v2 = "";
let operation = "";
let screenDisplay = "";

result = "";

// System state
let state = 0;

// Prevents multiple operation button presses executing an Operate()
let opLoaded = false;


// Operation Cycle
function operationCycle(inString){
    let result = operate(inString);
    screenDisplay = result;
    refreshScreen();
    clearVars();
}

// Updates given variable and the screen
function updateDisplay(value){
    // TODO: Constrain to the last 12 numbers
    screenDisplay += value;
    refreshScreen();


}
// Takes v1, v2, and performs the correct operation
function operate(value1, operation, value2){
    switch(operation){
        case " + ":
            return (parseFloat(value1) + parseFloat(value2));
        case " - ":
            return (parseFloat(value1) - parseFloat(value2));
        case " X ":
            let result = (parseFloat(value1) * parseFloat(value2));
            // Round to five decimal places
            result = Math.round(result * 100000) / 100000;
            return result;
        case " / ":
            if(value2 != "0"){
                let divResult = (parseFloat(value1) / parseFloat(value2));
                divResult = Math.round(divResult * 100000) / 100000;
                return divResult;
            }
            else{
                return "ERROR"
            } 
        default:
            return "INVALID OP";
    }

}

// TODO: handles the click of a button based on its value
function handleClick(event){
    let button = event.target;
    // get the button's class and value
    let buttonClasses = button.getAttribute("class").split(" ");
    let buttonClass = buttonClasses[1];
    let buttonValue = button.textContent;

    // If state is zero
    if(state == 0){
        // Numbers are added to display and var1
        if(buttonClass == "number"){
            if(buttonValue == "."){
                // dots are added to string ONLY if string isn't empty
                if(v1 != ""){
                    v1 += buttonValue;
                    updateDisplay(buttonValue);
                }

            }else {
                // Numbers are appended to v1, and the current number on screen
                v1 += buttonValue;
                updateDisplay(buttonValue);

            }
        }
        if(buttonClass == "operation"){
            // Equals refreshes screen, goes to state 2
            if(buttonValue == "="){
                updateDisplay("");
                result = v1;
                state = 2;
            }
            // Operands are added to display, update var, and go to state 1
            else{
                // No operations on empty strings
                if(screenDisplay == ""){
                    refreshScreen();
                }
                else{
                    let opString =  ` ${buttonValue} `;
                    operation = opString;
                    updateDisplay(opString);
                    state = 1;
    
                    opLoaded = true;
                }
            }
            // TEST
            // alert(`State switched to ${state}`);

        }
        else{
            // Clear clears variables and display, sets state to 0
            if(buttonValue == "AC"){
                clearScreen();
            }

            // Prev display the previous value
        }
    }
    // If state is 1
    else if(state == "1"){
        if(buttonClass == "number"){
            if(buttonValue == "."){
                // Dots are added to string ONLY if not empty
                if(v2 != ""){
                    v2 += buttonValue;
                    updateDisplay(buttonValue);
                }
            }else{
                //Numbers are appended to display and var2
                v2 += buttonValue;
                updateDisplay(buttonValue);


            }
        }
        if(buttonClass == "operation"){
            if(buttonValue == "="){
                // Equals performs operation cycle, sets state to 2
                result = operate(v1, operation, v2);
                console.log(`V1: ${v1}, V2: ${v2}, OP: ${operation}, RESULT: ${result}`)
                clearScreen();
                console.log(`RESULT: ${result}`);
                updateDisplay(result);
                state = 2;

            }else{
                // Another sign performs operation, places result in var1, updates screen, state the same, var 2 set to empty
                // If no previous operation button pressed, go as normal
                if(opLoaded = false){
                    let opString =  ` ${buttonValue} `;
                    operation = opString;
                    result = operate(v1, operation, v2);
                    console.log(`V1: ${v1}, V2: ${v2}, OP: ${operation}, RESULT: ${result}`)
                    var1 = result.toString();
    
                    v1 = var1;
                    v2 = "";
    
                    screenDisplay = var1 + ` ${buttonValue} `;
                    refreshScreen();

                    opLoaded = true;
                }
                // If the previous operation button was pressed, do nothing
                else{
                    refreshScreen();
                }


            }
        }
        else{
            // Clear resets screen and sets state to 0
            if(buttonValue == "AC"){
                clearScreen();
                state = 0;

            }
        }
    }
    // State is 2
    else{
        if(buttonClass == "number"){
            // dot carries number into state 0, adds itself
            if(buttonValue == "."){
                v1 = result + ".";
                state = 0;
                updateDisplay(v1);


            }
            // number clears screen, resets variables, sets state to 0
            else{
                clearScreen();
                v1 = buttonValue
                updateDisplay(buttonValue);
                state = 0;
            }
        }
        else if(buttonClass == "operation"){
            // equals clears screen, sets state to 0
            if(buttonValue == "="){
                state = 0;
                updateDisplay("");
            }
            // any operation is appended, result is stored in v1, state is moved to 1
            else{
                v1 = result;
                let opString =  ` ${buttonValue} `;
                operation = opString;
                updateDisplay(opString);
                state = 1;

            }
        }
        // Button is a clear
        else{
            // Clear clears all values and sets state to 0
            if(buttonValue == "AC"){
                clearScreen();
                state = 0;
            }
            // Prev shows result on screen, state is the same
            else{
                screenDisplay = result;
                refreshScreen();
            }

        }
    }
    // If equal and in state 0, display the same thing
    console.log(`This button's class is ${buttonClasses[1]}\nThis button's value is ${buttonValue}`);
}

// Refreshes screen display to current screenDisplay value
function refreshScreen(){
    let screen = document.querySelector("#screenContent");
    screen.textContent = screenDisplay;
}

// Clears global variables ONLY
function clearVars(){
    v1 = "";
    v2 = "";
    operation = "";
    // Clear oploaded state too
    opLoaded = false;
}
// Clears the screen content and the global variables
function clearScreen(){
    clearVars();
    screenDisplay = "";
    refreshScreen();
}
// Adds click listeners to all the buttons
function addListeners(){
    let buttons = document.querySelectorAll(".calcButton");
    for(let i = 0; i < buttons.length; i++){
        let button = buttons[i];
        button.addEventListener("click", (e)=>{
           handleClick(e);
        })
    }
}
// main script
document.addEventListener("DOMContentLoaded", ()=>{
    addListeners();
})

