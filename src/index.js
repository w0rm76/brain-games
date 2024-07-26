import readlineSync from 'readline-sync';
import playBrainCalc from './games/brain-calc.js';
import playBrainEven from './games/brain-even.js';

const showRules = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    default:
      console.log('Sorry, we have an error');
  }
};

const playNewRound = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      console.log('we are at playNewRound -> brain-even');
      return playBrainEven();
    case 'brain-calc':
      return playBrainCalc();
    default:
      return console.log('Sorry, we have an error');
  }
};

const playBrainGames = (gameName) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  showRules(gameName);

  for (let i = 1; i <= 3; i += 1) {
    const result = playNewRound(gameName);
    console.log('result', result);
    if (result[0]) {
      console.log('Correct!');
    } else {
      console.log(`'${result[2]}' is wrong answer ;(. Correct answer was '${result[1]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playBrainGames;
