import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const playBrainCalc = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const randomOperation = getRandomNumber(1, 3); 
  let expectedAnswer = null;
  let operation = null;
  switch (randomOperation) {
    case 1:
      operation = '+';
      expectedAnswer = number1 + number2;
      break;
    case 2:
      operation = '-';
      expectedAnswer = number1 - number2;
      break;
    case 3:
      operation = '*';
      expectedAnswer = number1 * number2;
      break;
    default:
        console.log('Sorry, we have an error');
  }
  console.log(`Question: ${number1} ${operation} ${number2}`);
  const actualAnswer = readlineSync.question('Your answer: ');
  const result = (parseInt(actualAnswer) === expectedAnswer) ? [true, actualAnswer, expectedAnswer]
    : [false, actualAnswer, expectedAnswer];
  return result;
};

export default playBrainCalc;
