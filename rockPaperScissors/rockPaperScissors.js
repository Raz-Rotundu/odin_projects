
// Determine winner, return 1 if player won, 2 if ai won
function getWinner(playerMove, aiMove){
    if(playerMove === "rock" && aiMove === "scissor") {
        return 1;
    }
    else if(playerMove === "paper" && aiMove === "rock") {
        return 1;
    }
    else if(playerMove === "scissor" && aiMove === "paper") {
        return 1;
    }
    else{
        return 0;
    }
}

// Get Ai move
function getAiMove(){
    let num = Math.random();
    if ( num < 0.33){
        return "rock";
    }
    else if( num > 0.66 ){
        return "scissor";
    }
    else{
        return "paper"
    }
}

// Get player move
function getPlayerMove(){
    let move = "";
    do{
        move = prompt("Player move: ", "nothing");
        move = move.toLowerCase();
    }
    while(move != "rock" && move != "paper" && move != "scissors");
    return move

}

// Add eventListeners to the buttons 
function addListeners(){
    const l = document.querySelectorAll('div.wrapper');
    l.forEach((div) => console.log(div))
    // let buttonNodeList = document.querySelectorAll(".moveButton ");
    // let buttonList = Array.from(buttonNodeList);
    // console.log(buttonList.length);

    // // Add a listener to each button
    // for(let i = 0; i < buttonList.length; i++){
    //     let button = buttonList[i];
    //     // test
    //     button.addEventListener("click", () => {
    //         alert("Event Listener added");
    //     });
    // }
}
// Reset the scores to zero
// Init big function
// onclick update function

function main(){

}
main()
addListeners()