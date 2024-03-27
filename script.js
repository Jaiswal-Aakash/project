let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userPoints.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compPoints.innerText = compScore;
    }
};

const playGame = (userChoice) =>{
    //user choice
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }
        else if((userChoice === "paper")){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
