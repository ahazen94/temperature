function userChoice(choice){
    let computerChoice = Math.floor(Math.random()*3)+1;

    let computerChoiceText;
    switch(computerChoice){
        case 1:
            computerChoiceText= "rock";
            break;
        case 2:
            computerChoiceText= "paper";
            break;
        case 3:
            computerChoiceText= "scissors";
            break;
    }
    let result = determineWinner(choice, computerChoiceText);
    console.log(choice,computerChoiceText,result);
    document.getElementById ("results").innerHTML= `You chose <span class="user">${choice}</span>. Computer chose <span class="computer">${computerChoiceText}</span>. ${result}`;
}
function determineWinner(user,computer){
    if(user==computer){
        return "It is a tie!";
    } else if (
        (user==="rock" && computer==="scissors")||
        (user==="paper" && computer==="rock") ||
        (user==="scissors" && computer==="paper")
        ){
            return "You won!";
    }else{
        return "You lose!";
    }
}