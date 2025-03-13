let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreShow = document.querySelector("#user-score");
let compScoreShow = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}

const gamePlay = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWin = true;

        if(userChoice === "rock") {
            //paper scissors
           userWin = compChoice === paper ? false : true;
        }
        else if (userChoice === "paper") {
            //scissors rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const gameDraw = () => {
    console.log("Game was Draw.")
    msg.innerText = "Game was Draw."
    msg.style.backgroundColor = "#7f8185";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreShow.innerText = userScore;
        console.log(`You Win!, Your ${userChoice} beats ${compChoice}`);
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#baf0c9";
    }
    else {
        compScore++;
        compScoreShow.innerText = compScore;
        console.log(`You Lose, ${compChoice} beats your ${userChoice}`);
        msg.innerText = `You Lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#ffabab";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        gamePlay(userChoice);
    });
});




// let userScore = 0;
// let compScore = 0;

// let userScrShow = document.querySelector("#user-score");
// let compScrShow = document.querySelector("#comp-score");
// let msg = document.querySelector("#msg")
// let choices = document.querySelectorAll(".choice");


// const genCompChoice = () => {
//     const options = ["rock", "paper", "scissors"];
//     const randInx = Math.floor(Math.random() * 2);
//     return options[randInx];
// }


// const gamePlay = (userChoice) => {
//     console.log(userChoice);

//     const compChoice = genCompChoice();
//     console.log(compChoice);

//     if (userChoice === compChoice) {
//         gameDraw();
//     }
//     else {
//         let userWin = true;

//         if(userChoice === "rock") {
//             //paper scissors
//            userWin = compChoice === paper ? false : true;
//         }
//         else if (userChoice === "paper") {
//             //scissors rock
//             userWin = compChoice === "scissors" ? false : true;
//         }
//         else {
//             //rock paper
//             userWin = compChoice === "rock" ? false : true;
//         }
//         showWinner(userWin, userChoice, compChoice);
//     }
// }


// const showWinner = (userWin, userChoice, compChoice) => {
//     if(userWin) {
//         userScore++;
//         userScrShow.innerText = userScore;
//         console.log(`You win! Your ${userChoice} beats ${compChoice}`);
//         msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "#baf0c9";
//     }
//     else {
//         compScore++;
//         compScrShow.innerText = compScore;
//         console.log(`You lose. ${compChoice} beats Your ${userChoice}`);
//         msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
//         msg.style.backgroundColor = "#ffabab";
//     }
// }

// const gameDraw = () => {
//     console.log("Game was Draw.");
//     msg.innerText = "Game was Draw.";
//     msg.style.backgroundColor = "#a7a9b8";
// }


// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         // console.log(userChoice);
//         gamePlay(userChoice);
//     });
// });


