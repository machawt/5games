const computerChoiceDisplay=document.getElementById ('computer-choice');
const userChoiceDisplay=document.getElementById ('user-choice');
const resultDisplay=document.getElementById ('result');
const possibleChoices=document.querySelectorAll(".one")
const possibleChoices2=document.querySelectorAll(".two")
let userChoice
let computerChoice
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
  userChoice=e.target.id
  userChoiceDisplay.innerHTML=userChoice
  generateComputerChoice()
getResult()
}))
function generateComputerChoice(){
 //const randomNumber=Math.floor(Math.random()*3)+1
 


possibleChoices2.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
  computerChoice=e.target.id
if (computerChoice==="1"){
    computerChoice='ਕਿ੍ਸਟੀਨਾ'}
  if (computerChoice==='2'){
    computerChoice='ਅੰਮ੍ਰਿਤ'}
  if (computerChoice==='3'){
    computerChoice='ਜੌਸ਼'}
  computerChoiceDisplay.innerHTML=computerChoice
}
function getResult(){
    if (computerChoice===userChoice)
    {result="It's a draw!"}
        if (computerChoice==='ਕਿ੍ਸਟੀਨਾ'&& userChoice==='ਅੰਮ੍ਰਿਤ')
    {result="You win!"}
         if (computerChoice==='ਕਿ੍ਸਟੀਨਾ'&& userChoice==='ਜੌਸ਼')
    {result="You lose!"}
            if (computerChoice==='ਅੰਮ੍ਰਿਤ'&& userChoice==='ਕਿ੍ਸਟੀਨਾ')
    {result="You win!"}
         if (computerChoice==='ਅੰਮ੍ਰਿਤ'&&userChoice==='ਜੌਸ਼')
    {result="You lose!"}
                if (computerChoice==='ਜੌਸ਼'&& userChoice==='ਕਿ੍ਸਟੀਨਾ')
    {result="You lose!"}
         if (computerChoice==='ਜੌਸ਼'&&userChoice==='ਅੰਮ੍ਰਿਤ')
    {result="You win!"}
    resultDisplay.innerHTML=result
  }
//<button id = "cj">ਕਿ੍ਸਟੀਨਾ</button>
//<button id = "am">ਅੰਮ੍ਰਿਤ</button>
//<button id = "josh">ਜੌਸ਼</button>
