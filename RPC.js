let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    // rock , paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3) ;
    return options[ randIdx]; 
};

const drawGame = () => {
    console.log("Game was Draw . ");
    msg.innerText = "Game was Draw! ";
    msg.style.background = "linear-gradient(135deg, #f5f5f5ff, #0072ff)";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}` ;
        msg.style.background = "linear-gradient(135deg, #06e36dff, #0072ff)";

    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose .. ${compChoice} beats your ${userChoice}`;
        msg.style.background = "linear-gradient(135deg, #e30606ff, #0072ff)";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer choice 
    const compChoice = genCompChoice();
    console.log("computer Choice = " , compChoice);

    if (userChoice === compChoice){
        // Draw Game 
        drawGame();
    } else {
        let userWin = true; 
        if (userChoice === "rock"){
            // scissor , paper
        userWin = compChoice === "paper"? false: true;
    } else if(userChoice === "paper") {
        // rock, scissor
        userWin = compChoice === "scissors"? false : true;
        }
        else{ // scissors
        userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    } 
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked" , userChoice)
        playGame(userChoice)
    });
});