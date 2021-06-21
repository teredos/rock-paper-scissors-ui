const selectRock = document.querySelector("#rock-option");
const selectPaper = document.querySelector("#paper-option");
const selectScissors = document.querySelector("#scissors-option");
const selection = document.querySelector("#selection");
const result = document.querySelector("#result");
const usrScoreValContainer = document.querySelector("#user-score-value");
const cmpScoreValContainer = document.querySelector("#computer-score-value");
const rndNumberContainer = document.querySelector("#round-number");
const resetButton = document.querySelector("#reset-button");
const overallResult = document.querySelector("#overall-result")

let usrScoreVal = "0";
let cmpScoreVal = "0";
let rndNumber = "1";

usrScoreValContainer.innerText = usrScoreVal;
cmpScoreValContainer.innerText = cmpScoreVal;
rndNumberContainer.innerText = rndNumber;

function beginGame() {

    function cmpPlay() {
        switch (Math.floor(Math.random() * 3 + 1)) {
            case 1:
                return("Rock");
            case 2:
                return("Paper");
            case 3:
                return("Scissors");
        }
    }

    function rockResult() {
        const cmpSelection = cmpPlay();
        resetButton.style.display = "inline-block";
        switch (cmpSelection) {
            case "Rock":
                if (cmpScoreVal !== 5 && usrScoreVal !== 5) {
                    selection.innerText = `You picked rock and the computer picked rock!`;
                    result.innerText = "IT'S A TIE";
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                return;
            case "Paper":
                if (cmpScoreVal < 5 && usrScoreVal !== 5) {
                    selection.innerText = `You picked rock and the computer picked paper!`;
                    result.innerText = "YOU LOSE"
                    cmpScoreVal++;
                    cmpScoreValContainer.innerText = cmpScoreVal;
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                if (cmpScoreVal === 5 && usrScoreVal < 5) {
                    overallResult.innerText = "The computer wins the game! They reached 5 points first.";
                    resetButton.innerText = "Play again";
                }
                return;
            case "Scissors":
                if (usrScoreVal < 5 && cmpScoreVal !== 5) {
                    selection.innerText = `You picked rock and the computer picked scissors!`;
                    result.innerText = "YOU WIN";
                    usrScoreVal++;
                    usrScoreValContainer.innerText = usrScoreVal;
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                if (usrScoreVal === 5 && cmpScoreVal < 5) {
                    overallResult.innerText = "You win the game! You reached 5 points first.";
                    resetButton.innerText = "Play again";
                }
                return;
            default:
                selection.innerText = "";
                result.innerText = "ERROR";
                return;
        }
    }

    function paperResult() {
        const cmpSelection = cmpPlay();
        resetButton.style.display = "inline-block";
        switch (cmpSelection) {
            case "Rock":
                if (usrScoreVal < 5 && cmpScoreVal !== 5) {
                    selection.innerText = `You picked paper and the computer picked rock!`;
                    result.innerText = "YOU WIN";
                    usrScoreVal++;
                    usrScoreValContainer.innerText = usrScoreVal;
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                if (usrScoreVal === 5 && cmpScoreVal < 5) {
                    overallResult.innerText = "You win the game! You reached 5 points first.";
                    resetButton.innerText = "Play again";
                }
                return;
            case "Paper":
                if (cmpScoreVal !== 5 && usrScoreVal !== 5) {
                    selection.innerText = `You picked paper and the computer picked paper!`;
                    result.innerText = "IT'S A TIE";
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                return;
            case "Scissors":
                if (cmpScoreVal < 5 && usrScoreVal !== 5) {
                    selection.innerText = `You picked paper and the computer picked scissors!`;
                    result.innerText = "YOU LOSE";
                    cmpScoreVal++;
                    cmpScoreValContainer.innerText = cmpScoreVal;
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                if (cmpScoreVal === 5 && usrScoreVal < 5) {
                    overallResult.innerText = "The computer wins the game! They reached 5 points first.";
                    resetButton.innerText = "Play again";
                }
                return;
            default:
                selection.innerText = "";
                result.innerText = "ERROR";
                return;
        }
    }

    function scissorsResult() {
        const cmpSelection = cmpPlay();
        resetButton.style.display = "inline-block";
        switch (cmpSelection) {
            case "Rock":
                if (cmpScoreVal < 5 && usrScoreVal !== 5) {
                    selection.innerText = `You picked scissors and the computer picked rock!`;
                    result.innerText = "YOU LOSE";
                    cmpScoreVal++;
                    cmpScoreValContainer.innerText = cmpScoreVal;
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                if (cmpScoreVal === 5 && usrScoreVal < 5) {
                    overallResult.innerText = "The computer wins the game! They reached 5 points first.";
                    resetButton.innerText = "Play again";
                }
                return;
            case "Paper":
                if (usrScoreVal < 5 && cmpScoreVal !== 5) {
                    selection.innerText = `You picked scissors and the computer picked paper!`;
                    result.innerText = "YOU WIN"
                    usrScoreVal++;
                    usrScoreValContainer.innerText = usrScoreVal;
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                if (usrScoreVal === 5 && cmpScoreVal < 5) {
                    overallResult.innerText = "You win the game! You reached 5 points first.";
                    resetButton.innerText = "Play again";
                }
                return;
            case "Scissors":
                if (cmpScoreVal !== 5 && usrScoreVal !== 5) {
                    selection.innerText = `You picked scissors and the computer picked scissors!`;
                    result.innerText = "IT'S A TIE";
                    rndNumber++;
                    rndNumberContainer.innerText = rndNumber;
                }
                return;
            default:
                selection.innerText = "";
                result.innerText = "ERROR";
                return;
        }
    }

    selectRock.addEventListener("click", rockResult);
    selectPaper.addEventListener("click", paperResult);
    selectScissors.addEventListener("click", scissorsResult);
    resetButton.addEventListener("click", function() {
        usrScoreVal = 0;
        cmpScoreVal = 0;
        rndNumber = 1;
        selection.innerText = `First to reach 5 points wins
        Click any option to begin`;
        result.innerText = "";
        usrScoreValContainer.innerText = usrScoreVal;
        cmpScoreValContainer.innerText = cmpScoreVal;
        rndNumberContainer.innerText = rndNumber;
        overallResult.innerText = "";
        resetButton.style.display = "none";
        resetButton.innerText = "Reset";
    });
    resetButton.style.display = "none";

}

beginGame();
