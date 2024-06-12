
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

function main(){
    let playerScore = 0;
    let aiScore = 0;

    // Play 5 rounds
    for(let i = 0; i < 5; i++){
        let playerMove = getPlayerMove();
        let aiMove = getAiMove();
        winner = getWinner(playerMove, aiMove);
        if(winner == 1){
            playerScore ++;
            alert("Player has won")
        }
        else{
            aiScore ++;
            alert("Ai has won")
        }
    }
    if(playerScore > aiScore){
        alert("Player wins the game")
    }
    else{
        alert("Ai wins the game")
    }
}
main()