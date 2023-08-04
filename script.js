const p1ask = document.getElementById('p1-ask');
const p1scoreDisplay = document.getElementById('p1-score')
const p1askButton = document.getElementById('p1-ask-button');
const p1askDisplay = document.getElementById('p1-ask-value');
const p1answerDisplay = document.getElementById('p1-m-answer');

const roundNumberDisplay = document.getElementById('round-number');
const nextRoundButton = document.getElementById('next-round-button');


let p1totalScore = 0;
let p1currentRound = 1;
const win = 15;

let p2totalScore = 0;
let p2currentRound = 1;

p1askButton.addEventListener('click', () => {
    let p1askValue = +p1ask.value;



    // make mom decide yes or no and get response
    let p1getAnswer = Math.floor(Math.random()*500);
    
    if (p1getAnswer > 250){
        p1answerDisplay.innerHTML = 'Yes, you may go ' + p1askValue + ' steps forward'; 
        p1totalScore+= p1askValue;
    } else {
        p1answerDisplay.innerHTML = 'No, you may not!'; 
    }
    // display updated score
    p1scoreDisplay.innerText = p1totalScore;
    // disable button
    p1askButton.setAttribute('disabled', true)
    
    // display winner message depending on who wins
    if (p1totalScore >= win) { 
        P1gameOver();
    } else if(p2totalScore >= win) {
        P2gameOver();
    }
});


nextRoundButton.addEventListener('click', ()=> {
    // increase round and display new round number
    p1currentRound++;
    roundNumberDisplay.innerText = p1currentRound;

    p1askDisplay.innerText = '';
    p1answerDisplay.innerText = '';
    p1askButton.removeAttribute('disabled')

  // display winner message depending on who wins
    if (p1totalScore >= win) { 
        P1gameOver();
    } else if(p2totalScore >= win) {
        P2gameOver();
    }

    p2currentRound++;

    p2askDisplay.innerText = '';
    p2answerDisplay.innerText = '';
    p2askButton.removeAttribute('disabled')
});

// if Player 1 wins
function P1gameOver() {
    p1answerDisplay.innerText = 'Game Over! Player 1 Wins!'
    nextRoundButton.setAttribute('disabled', true)
    p2answerDisplay.innerText = 'Sorry, you lose!'
    p1askButton.setAttribute('disabled', true)
    p2askButton.setAttribute('disabled', true)
}

// if player 2 wins
function P2gameOver() {
    p2answerDisplay.innerText = 'Game Over! Player 2 Wins!'
    nextRoundButton.setAttribute('disabled', true)
    p1answerDisplay.innerText = 'Sorry, you lose!'
    p1askButton.setAttribute('disabled', true)
    p2askButton.setAttribute('disabled', true)
}




const p2ask = document.getElementById('p2-ask');
const p2scoreDisplay = document.getElementById('p2-score')
const p2askButton = document.getElementById('p2-ask-button');
const p2askDisplay = document.getElementById('p2-ask-value');
const p2answerDisplay = document.getElementById('p2-m-answer');


p2askButton.addEventListener('click', () => {
    let p2askValue = +p2ask.value;

    // make mom decide yes or no and get response for player 2
    let p2getAnswer = Math.floor(Math.random()*500);
    
    if (p2getAnswer > 150){
        p2answerDisplay.innerHTML = 'Yes, you may go '+ p2askValue + ' steps forward'; ; 
        p2totalScore+= p2askValue;
    } else {
        p2answerDisplay.innerHTML = 'No, you may not!'; 
    }

    p2scoreDisplay.innerText = p2totalScore;

    p2askButton.setAttribute('disabled', true)

    if (p1totalScore >= win) { 
        P1gameOver();
    } else if(p2totalScore >= win) {
        P2gameOver();
    }
});



