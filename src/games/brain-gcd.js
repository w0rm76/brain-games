import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const playBrainGcd = () => {
  // console.log('playBrainGcd');
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  let realAnswer = 1;
  const smalerNumber = number1 > number2 ? number2 : number1;
  for (let i = 2; i <= smalerNumber; i += 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      realAnswer = i;
    }
  }
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = (parseInt(userAnswer, 10) === realAnswer)
    ? [true, realAnswer, userAnswer]
    : [false, realAnswer, userAnswer];
    // console.log(result);
  return result;
};

export default playBrainGcd;
