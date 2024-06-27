// Add Listeners
function addListeners(){;
    let slider = document.querySelector("#mySlider");
    slider.addEventListener('mouseup', (e)=> {
        let val = e.target.value;
        resizeBox(val);

    })


}
// Resize the box to Len x Len
function resizeBox(len){
    let sideLength = `width: ${len}px; height: ${len}px;`;
    let box = document.querySelector("#resizeBox");
    box.setAttribute("style", sideLength);
}

// Main Function
document.addEventListener("DOMContentLoaded", ()=> {
    // Set box default size and add listeners
    addListeners();
    resizeBox(20);

})