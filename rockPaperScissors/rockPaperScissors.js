
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
    else if(playerMove == aiMove){
        return -1;
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
    const buttonList = document.querySelectorAll(".moveButton");

    // Add a listener to each button
    for(let i = 0; i < buttonList.length; i++){
        let button = buttonList[i];
        let id = button.getAttribute("id");
        // test
        button.addEventListener("click", () => {
            buttonClick(id);
        });
    }
}
// updates the player score
function updatePlayerScore (value){
    playerScore = value;

    const element = document.querySelector(".player");
    element.innerHTML = `<p>Player Score: ${playerScore}</p>`;

}
// updates the ai score
function updateAiScore (value){
    aiScore = value;

    const element = document.querySelector(".ai");
    element.innerHTML = `<p>AI Score: ${aiScore}</p>`;

}
// Reset the scores to zero
function zeroScores(){
    playerScore = 0;
    aiScore = 0;

    updatePlayerScore(0);
    updateAiScore(0);
}
// onclick update function, takes as param ID of button
function buttonClick(x){
    let move = x;
    let ai = getAiMove();
    let winner = getWinner(move, ai);
    if(winner == 1){
        let s = playerScore + 1;
        updatePlayerScore(s);
        alert(`You chose ${move}\nComputer chose ${ai}\n You Win!`);
    }
    else if(winner = -1){
        alert(`You chose ${move}\nComputer chose ${ai}\n It's a Tie!`);
    }
    else{
        let ss = aiScore + 1;
        updateAiScore(ss);
        alert(`You chose ${move}\nComputer chose ${ai}\n Computer wins!`);
    }
}

// Init big function
let playerScore = 0;
let aiScore = 0;



// Main function
document.addEventListener('DOMContentLoaded', () => {
    addListeners();
    zeroScores();
});