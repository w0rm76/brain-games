import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const playBrainEven = () => {
  const isEven = () => {
    const number = getRandomNumber();
    const realAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = (realAnswer === userAnswer) ? [true, realAnswer, userAnswer]
      : [false, realAnswer, userAnswer];
    return result;
  };

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i++) {
    const result = isEven();
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

export default playBrainEven;
