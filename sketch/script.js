// Makes a button DOM object
function makeButton(){


    return 1;
}

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
// Adds listeners to buttons and grid sliders
function addListeners(){
    // Slider and update text
    slider = document.querySelector("#gridSlider");
    slider.addEventListener("input", () => {
        handleSlider();
    });
}
// test
function handleSlider(){
    let slider = document.querySelector("#gridSlider");
    let val = slider.value;
    alert(val);
    resizeGrid(val);



}
// Creates a grid of x by x buttons
function createGrid(size=10){
    for(let i = 0; i < (size * size); i++){
        addButton();
    }
    resizeGrid(size);
}
// Main function
document.addEventListener("DOMContentLoaded", () =>{
    createGrid(10);

})
