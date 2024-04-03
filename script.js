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
    console.log(playerSelection);
    console.log(computerSelection);
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

function element(name, className, attributes, innerText) {

    const element = document.createElement(name);
    element.setAttribute("class", className);

    if (attributes) {

        Object.keys(attributes).forEach(attr => {
            element.setAttribute(attr, attributes[attr]);
        })
    }

    if (!!innerText) element.innerText = innerText;

    return element;

}

function appendChildren(element, children) {

    children.forEach(c => {
        element.appendChild(c);
    });

}






const playerSelection = "rock";
playgame();