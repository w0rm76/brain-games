import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const playBrainEven = () => {
  //console.log('playBrainEven');
  const number = getRandomNumber();
  const realAnswer = number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = (realAnswer === userAnswer) ? [true, realAnswer, userAnswer]
    : [false, realAnswer, userAnswer];
  return result;
};

export default playBrainEven;
