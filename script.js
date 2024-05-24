let playerSelection = "";
function getcomputerchoice(){
    let choice = ["rock", "paper" ,"scissor"];
    return (choice[(Math.floor(Math.random()*choice.length))]);

}

function playgame(){
    for(let i = 0; i <= 5; i++){

        console.log(playRound(playerSelection, getcomputerchoice()));

        //console.log("round"[i] + playRound());

    }
}
function playRound( playerSelection,computerSelection)
{
    
    playerSelection = playerSelection.toLowerCase();
    //console.log(playerSelection);
    //console.log(computerSelection);
    if (playerSelection === computerSelection)
    {
        return "tie";
    }
    
    else 
    {
       switch(computerSelection)
       {
       case "rock":
            if (playerSelection === "paper")
            {
            return "you win";
            }

            else if (playerSelection === "scissor")
            {
                return "you lose";
            }
            break;

        case "paper":
                {
                    if(playerSelection === "rock")
                    {
                        return "you win";

                    }

                    else if ( playerSelection === "scissor")
                    {
                        return "you lose";
                    }
                }
                break;
        case "scissor":

            if(playerSelection === "paper")
            {
                return "you win";
            }
            else if (playerSelection === "rock")
            {
                return "you lose";
            }
        break;
    }
}

}




function setplayerselection (choice)
{
    
    playerSelection = choice;
    document.getElementById("result").innerHTML=playRound(playerSelection,getcomputerchoice())
    console.log(playRound(playerSelection,getcomputerchoice()))
    
}








 