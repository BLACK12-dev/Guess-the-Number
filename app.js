let secretNumber=Math.floor(Math.random()*100)+1;
let lives=5;


const guessInput=document.getElementById("guessInput");
const submitButton=document.getElementById("submitGuess");
const resultMessage=document.getElementById("resultMessage");
const livesDisplay=document.querySelector("p");
submitButton.addEventListener("click",checkCorrect);

function checkCorrect() {

    const guessNumber=Number(guessInput.value);
    if(guessNumber<1 || guessNumber>100 || isNaN(guessNumber)){

        resultMessage.textContent="Please provide a valid number";
        return;
    }

    if(guessNumber==secretNumber){
        resultMessage.textContent=`Your guess was correct 👌! The number is ${secretNumber}`;
        
    }
    else{
        lives--; 
        if(lives>0){
            if(guessNumber>secretNumber){
                resultMessage.textContent="Oops 🤨! Your guess was too high";
            }
            else if (guessNumber<secretNumber){
                resultMessage.textContent="Oops 🤨! Your Guess was too low";
            }
            livesDisplay.textContent=`Lives: ${lives}`;
        }
        else{
            resultMessage.innerHTML = "Game over! The Correct Number is " + secretNumber + "<br>You Lose<br>Better Luck Next Time 👍🏻!";
            submitButton.disabled=true;
             livesDisplay.textContentcontent="Lives: 0";
            guessInput.disabled=true;
        }
    }
    guessInput.value=""; 
    guessInput.focus();

    


}