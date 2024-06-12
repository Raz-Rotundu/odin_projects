
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
    do{
        let move = prompt("Player move: ", "nothing");
        move = move.toLowerCase();
    }
    while(move != "rock" || move != "paper" || move != "scissors");
    return move

}
// 
function main(){
    let playerScore = 0;
    let aiScore = 0;

    // Play 5 rounds
    for(let i = 0; i < 5; i++){
        console.log(getPlayerMove());
    }
;
}
main()