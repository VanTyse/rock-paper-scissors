let computerScore = 0;
let userScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector("scoreBoard");
const result_p = document.querySelector(".resultMessage > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = [Math.floor(Math.random() * 3)];
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter=== "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    let userword = "user".fontsize(3).sub();
    let compword = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userword} beats ${convertToWord(computerChoice)}${compword}. You win!!!`;
    userChoice_div.classList.add('greenGlow');
    setTimeout(() => userChoice_div.classList.remove('greenGlow'), 300)
}

function lose(userChoice, computerChoice){
    let userChoice_div = document.getElementById(userChoice);
    let userword = "user".fontsize(3).sub();
    let compword = "comp".fontsize(3).sub() ;   
    computerScore++;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(userChoice)}${userword} loses to ${convertToWord(computerChoice)}${compword}. You lose.`;
    userChoice_div.classList.add('redGlow');
    setTimeout(() => userChoice_div.classList.remove('redGlow') , 300)
}

function draw(userChoice, computerChoice){
    let userChoice_div = document.getElementById(userChoice);
    let userword = "user".fontsize(3).sub();
    let compword = "comp".fontsize(3).sub() ;   
    result_p.innerHTML = `${convertToWord(userChoice)}${userword} equals ${convertToWord(computerChoice)}${compword}. It's a draw`;
    userChoice_div.classList.add('greyGlow');
    setTimeout(() => userChoice_div.classList.remove('greyGlow'), 300)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp": 
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();