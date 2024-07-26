import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const playBrainPrime = () => {
  const number = getRandomNumber();
  let realAnswer = 'yes';

  for (let i = 2; i <= Math.sqrt(number) && realAnswer === 'yes'; i += 1) {
    realAnswer = (number % i === 0) ? 'no' : 'yes';
    console.log(`realAnswer is ${realAnswer}`);
  }

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = (realAnswer === userAnswer) ? [true, realAnswer, userAnswer]
    : [false, realAnswer, userAnswer];
  return result;
};

export default playBrainPrime;
