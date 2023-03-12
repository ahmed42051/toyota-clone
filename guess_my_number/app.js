var myUserInput = document.querySelector('.userInput');

var checkButton = document.querySelector('.checkBtn');

var myScore = document.querySelector('.score');

var highScore = document.querySelector('.highScore');

var guessNumber = document.querySelector('.guessNumber');

var lastDesign = document.querySelector('.lastDesign');

var playAgain = document.querySelector('.playAgain');

var sorryAgain = document.querySelector('.lastDesign2');

var gameRules = document.querySelector('.gameRules');

var overlay = document.querySelector('.overlay');

var modal = document.querySelector('.modaal');

var close = document.querySelector('.closeBtn');
 
// myScore.textContent = "50";

checkButton.addEventListener('click', () => {

    if (myScore.textContent > 0) {

        var myNumber = Math.round(Math.random() * 20)

        guessNumber.textContent = myNumber
        
        if (myUserInput.value == myNumber) {
        
            lastDesign.classList.remove('hidden');
        
            myScore.textContent = +myScore.textContent + 1
        
            if (highScore.textContent < myScore.textContent) {
        
                highScore.textContent = myScore.textContent
            } 

        } else {
        
            lastDesign.classList.add('hidden');
        
            myScore.textContent = +myScore.textContent - 1
        
        }
    } else {
    
        sorryAgain.classList.remove('hidden');
    
    }
})


playAgain.addEventListener('click', () => {
    
    location.reload();

})


gameRules.addEventListener('click', () => {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
})


overlay.addEventListener('click', () => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})

close.addEventListener('click', () => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})

