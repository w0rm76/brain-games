import readlineSync from 'readline-sync';
import playBrainCalc from './games/brain-calc.js';
import playBrainEven from './games/brain-even.js';
import playBrainGcd from './games/brain-gcd.js';
import playBrainProgression from './games/brain-progression.js';
import playBrainPrime from './games/brain-prime.js';

const showRules = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      console.log('Sorry, we have an error');
  }
};

const playNewRound = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      return playBrainEven();
    case 'brain-calc':
      return playBrainCalc();
    case 'brain-gcd':
      return playBrainGcd();
    case 'brain-progression':
      return playBrainProgression();
    case 'brain-prime':
      return playBrainPrime();
    default:
      return console.log('Sorry, we have an error');
  }
};

const playBrainGames = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  showRules(gameName);

  for (let i = 1; i <= 3; i += 1) {
    const result = playNewRound(gameName);
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
