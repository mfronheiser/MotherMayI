const p1ask = document.getElementById('p1-ask');
const p1scoreDisplay = document.getElementById('p1-score')
const p1askButton = document.getElementById('p1-ask-button');
const p1askDisplay = document.getElementById('p1-ask-value');
const p1answerDisplay = document.getElementById('p1-m-answer');

const p1roundNumberDisplay = document.getElementById('p1-round-number');
const p1nextRoundButton = document.getElementById('p1-next-round-button');


let p1totalScore = 0;
let p1currentRound = 1;
let win = 15;

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

    if (p1totalScore >= win || p2totalScore >= win) {
        gameOver();
    }
});


p1nextRoundButton.addEventListener('click', ()=> {
    // increase round and display new round number
    p1currentRound++;
    p1roundNumberDisplay.innerText = p1currentRound;

    p1askDisplay.innerText = '';
    p1answerDisplay.innerText = '';
    p1askButton.removeAttribute('disabled')

    if (p1totalScore >= win|| p2totalScore >= win) { 
        gameOver();
    }
});

function gameOver() {
    p1answerDisplay.innerText = 'Game Over'
    p1nextRoundButton.setAttribute('disabled', true)
    p2answerDisplay.innerText = 'Game Over'
    p2nextRoundButton.setAttribute('disabled', true)
}


const p2ask = document.getElementById('p2-ask');
const p2scoreDisplay = document.getElementById('p2-score')
const p2askButton = document.getElementById('p2-ask-button');
const p2askDisplay = document.getElementById('p2-ask-value');
const p2answerDisplay = document.getElementById('p2-m-answer');

const p2roundNumberDisplay = document.getElementById('p2-round-number');
const p2nextRoundButton = document.getElementById('p2-next-round-button');




p2askButton.addEventListener('click', () => {
    let p2askValue = +p2ask.value;



    // make mom decide yes or no and get response
    let p2getAnswer = Math.floor(Math.random()*500);
    
    if (p2getAnswer > 150){
        p2answerDisplay.innerHTML = 'Yes, you may go '+ p2askValue + ' steps forward'; ; 
        p2totalScore+= p2askValue;
    } else {
        p2answerDisplay.innerHTML = 'No, you may not!'; 
    }

    p2scoreDisplay.innerText = p2totalScore;

    p2askButton.setAttribute('disabled', true)

    if (p2totalScore >= win || p1totalScore >= win) {
        gameOver();
    }
});


p2nextRoundButton.addEventListener('click', ()=> {
    // increase round and display new round number
    p2currentRound++;
    p2roundNumberDisplay.innerText = p2currentRound;

    p2askDisplay.innerText = '';
    p2answerDisplay.innerText = '';
    p2askButton.removeAttribute('disabled')

    if (p2totalScore >= win|| p1totalScore >= win) { 
        gameOver();
    }
});



