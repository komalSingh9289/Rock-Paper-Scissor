var playArea = document.querySelector('.container');
 const playBtn = document.getElementById('btn');

 function computerPlay(){
     const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function playGame(playerChoice) {
    const computerChoice = computerPlay();

    const result = playRound(playerChoice, computerChoice);
     displayResult(computerChoice, result);
}

function displayResult(computerChoice,result){
    const resultArea = document.querySelector('#game-area');
    const resultContainer = document.createElement('span');
    resultContainer.textContent = result;

    const computerChoiceElement = document.createElement('span');
    computerChoiceElement.textContent = `Computer's choice: ${computerChoice}`;

     if (result.includes('win')) {
        resultContainer.style.color = 'green';
    } else if (result.includes('lose')) {
        resultContainer.style.color = 'red';
    } else {
        resultContainer.style.color = 'orange';
    }

     resultArea.innerHTML = '';
    resultArea.appendChild(resultContainer);
    resultArea.appendChild(document.createElement('br'));

    resultArea.appendChild(computerChoiceElement);

     //loadingContainer.style.display = 'none';
}

function startGame(){
        if (playArea.style.display === "none" || playArea.style.display === "") {
        playArea.style.display = "flex";
        playArea.style.maxHeight = playArea.scrollHeight + "100px";
        playArea.style.opacity = 1;
        playBtn.style.display = "none";



    } else {
        playArea.style.display = "none";
        playArea.style.maxHeight = "0";
        playArea.style.opacity = 0;
    }
};


