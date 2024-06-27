
// Adds the object to a specified div class
function addButton(){
    let buttonHTML = "<button class='gridButton' type='button'></button>"
    let grid = document.querySelector("#grid");
    grid.innerHTML = grid.innerHTML + "\n" + buttonHTML;

    return 1;
}

// resizes the grid to be a perfect square
function resizeGrid(x){
    let len = `flex-basis: ${x * 100}px`;
    let grid = document.querySelector("#grid");

    grid.setAttribute("style", len);

}
// Display the text size of the grid
function displaySize(size){
    let header = document.querySelector("#gridSize");
    header.textContent = `Grid Size: ${size} x ${size}`;

}
// Adds listeners to buttons and grid sliders
function addListeners(){
    addSliderListener();
    addButtonListeners();
}
// Adds Slider listener and handling\
function addSliderListener(){
    // Slider and update text
    slider = document.querySelector("#gridSlider");
    slider.addEventListener("mouseup", (e) => {
        let val = e.target.value;
        displaySize(val);
        createGrid(val);
        
        });

}
// Adds hover listeners to all of the buttons
function addButtonListeners(){
    let buttons = document.querySelectorAll(".gridButton");
    for(let i = 0; i < buttons.length; i++){
        let button = buttons[i];
        button.addEventListener('mouseover', (e)=>{
            let curButton = e.target;
            // Add Hovered to the current class
            curButton.setAttribute("class", `${curButton.getAttribute("class")} hovered`);
        })
    }
}
// Clears the grid area
function clearGrid(){
    let grid = document.querySelector("#grid");
    grid.innerHTML = "";
}
// Creates a grid of x by x buttons
function createGrid(size=10){
    // Clear previous grid
    clearGrid();
    for(let i = 0; i < (size * size); i++){
        addButton();
    }
    resizeGrid(size);
    addButtonListeners();
}
// Main function
document.addEventListener("DOMContentLoaded", () =>{
    createGrid(10);
    addListeners();

})
