const getUserChoice = userInput => {

userInput = userInput.toLowerCase();

if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log("you have entered an invalid entry")
};
}

const getComputerChoice = randomNumber => {
  randomNumber = Math.floor(Math.random()*3);

  switch(randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    console.log("You threw a bomb! You win!!!!!!!!")
  }
  
  if (userChoice === computerChoice) {
    console.log("It is a tie!")
  };

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log("The computer won!")
    } else {
      console.log("The user won!")
    }
  };

  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      console.log("The computer won!")
    } else {
      console.log("The user won!")
    }
  };

  if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      console.log("The computer won!")
    } else {
      console.log("The user won!")
    }
  };

}

console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  };

playGame();
