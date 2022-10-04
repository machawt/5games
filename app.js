const computerChoiceDisplay=document.getElementById ('computer-choice');
const userChoiceDisplay=document.getElementById ('user-choice');
const resultDisplay=document.getElementById ('result');
const possibleChoices=document.querySelectorAll('button')
let userChoice
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
  userChoice=e.target.id
  userChoiceDisplay.innerHTML=userChoice
  generateComputerChoice()
}}}
function generateComputerChoice(){
  const randomNumber=Math.floor(Math.random()*3)+1
  if (randomNumber===1){
    computerChoice='ਿ੍ਸਟੀਨਾ'}
  if (randomNumber===2){
    computerChoice='ਅੰਮ੍ਰਿਤ'}
  if (randomNumber===3){
    computerChoice='ਜੌਸ਼'}
  computerChoiceDisplay.innerHTML=computerChoice
  
  }
//<button id = "cj">ਕਿ੍ਸਟੀਨਾ</button>
//<button id = "am">ਅੰਮ੍ਰਿਤ</button>
//<button id = "josh">ਜੌਸ਼</button>
