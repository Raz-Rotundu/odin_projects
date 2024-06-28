// Global Variables
let v1 = "x";
let v2 = "y";
let operation = " ";
let screenDisplay = " ";


// TODO: handles the click of a button based on its value
function handleClick(event){
    let button = event.target;
    // get the button's class and value
    let buttonClasses = button.getAttribute("class").split(" ");
    let buttonValue = button.textContent;

    if(buttonClasses[1] == "number"){
        console.log(`Number ${buttonValue} pressed`);
        screenDisplay += buttonValue;
        refreshScreen();

    }
    else


    alert(`This button's class is ${buttonClasses[1]}\nThis button's value is ${buttonValue}`);
}

// Refreshes screen display to current screenDisplay value
function refreshScreen(){
    let screen = document.querySelector("#screenContent");
    screen.textContent = screenDisplay;
}

// Clears the screen content and the global variables
function clearScreen(){
    v1 = x;
    v2 = y;
    operation = " ";
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