import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What is the result of the expression?';

const playBrainCalc = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const randomOperation = getRandomNumber(1, 3);
  let realAnswer = null;
  let operation = null;
  switch (randomOperation) {
    case 1:
      operation = '+';
      realAnswer = number1 + number2;
      break;
    case 2:
      operation = '-';
      realAnswer = number1 - number2;
      break;
    case 3:
      operation = '*';
      realAnswer = number1 * number2;
      break;
    default:
      console.log('Sorry, we have an error');
      break;
  }
  const question = `${number1} ${operation} ${number2}`;
  return { question, realAnswer };
};

gameEngine(rules, playBrainCalc);

export default playBrainCalc;
