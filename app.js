const computerChoiceDisplay=document.getElementById ('computer-choice');
const userChoiceDisplay=document.getElementById ('user-choice');
const resultDisplay=document.getElementById ('result');
const possibleChoices=document.querySelectorAll(".one")
const possibleChoices2=document.querySelectorAll(".two")
let userChoice
let computerChoice
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
  userChoice=e.target.id
 // userChoiceDisplay.innerHTML=userChoice
 generateComputerChoice()


}))
function rl(){location.reload()};
function generateComputerChoice(){
//computerChoice="1"
 //const randomNumber=Math.floor(Math.random()*3)+1
 


possibleChoices2.forEach(possibleChoice2=>possibleChoice2.addEventListener('click',(f)=>{
 computerChoice=f.target.id
if (computerChoice==="1"){
    computerChoice='ਕਿ੍ਸਟੀਨਾ';getResult()}
  if (computerChoice==='2'){
    computerChoice='ਅੰਮ੍ਰਿਤ';getResult()}
  if (computerChoice==='3'){
    computerChoice='ਜੌਸ਼';getResult()}
 // computerChoiceDisplay.innerHTML=computerChoice
}))}
function getResult(){
userChoiceDisplay.innerHTML=userChoice
computerChoiceDisplay.innerHTML=computerChoice
    if (computerChoice===userChoice)
    {result="It's a draw!"}
        if (computerChoice==='ਕਿ੍ਸਟੀਨਾ'&& userChoice==='ਅੰਮ੍ਰਿਤ')
    {result="Player 2 wins!"}
         if (computerChoice==='ਕਿ੍ਸਟੀਨਾ'&& userChoice==='ਜੌਸ਼')
    {result="Player 2 wins!"}
            if (computerChoice==='ਅੰਮ੍ਰਿਤ'&& userChoice==='ਕਿ੍ਸਟੀਨਾ')
    {result="Player 2 wins!"}
         if (computerChoice==='ਅੰਮ੍ਰਿਤ'&&userChoice==='ਜੌਸ਼')
    {result="Player 2 wins!"}
                if (computerChoice==='ਜੌਸ਼'&& userChoice==='ਕਿ੍ਸਟੀਨਾ')
    {result="Player 2 wins!"}
         if (computerChoice==='ਜੌਸ਼'&&userChoice==='ਅੰਮ੍ਰਿਤ')
    {result="Player 2 wins!"}
    resultDisplay.innerHTML=result
  }
//<button id = "cj">ਕਿ੍ਸਟੀਨਾ</button>
//<button id = "am">ਅੰਮ੍ਰਿਤ</button>
//<button id = "josh">ਜੌਸ਼</button>
