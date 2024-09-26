let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let userS=document.querySelector("#user-score");
let compS=document.querySelector("#computer_score")
let msgp=document.querySelector('#msg');
const genCompchoice=()=>{
    const options=['rock','paper','scissor'];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}
    choices.forEach((choice)=>{
        choice.addEventListener('click',()=>{
            const userChoice=choice.getAttribute("id");
            playGame(userChoice);
        })
    })
    const playGame=(userChoice)=>{
const compChoice=genCompchoice();
if(userChoice===compChoice){
    msgp.innerText="It's a draw";
}
if(userChoice==='rock'&& compChoice==='paper'){
    compScore++;
    compS.innerText=compScore;
    msgp.innerText="Paper beats Rock, computer won";

}
if(userChoice==='rock'&& compChoice==='scissor'){
    userScore++;
    userS.innerText=userScore;
    msgp.innerText="Rock beats Scissor, You won";
}
if(userChoice==='paper' && compChoice==='rock'){
    userScore++;
    userS.innerText=userScore;
    msgp.innerText="Paper beats Rock, You won";
}
if(userChoice==='paper' && compChoice==='scissor'){
    compScore++;
    compS.innerText=compScore;
    msgp.innerText="Scissor beats Paper, Computer won";
}
if(userChoice==='scissor' && compChoice==='rock'){
    compScore++;
    compS.innerText=compScore;
    msgp.innerText="Rock beats Scissor, computer won";
}
if(userChoice==='scissor' && compChoice==='paper'){
    userScore++;
    userS.innerText=userScore;
    msgp.innerText="Scissor beats Paper, You won";
}

    }