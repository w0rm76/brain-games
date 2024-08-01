import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  let realAnswer = 1;
  const smalerNumber = number1 > number2 ? number2 : number1;
  for (let i = 2; i <= smalerNumber; i += 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      realAnswer = i;
    }
  }
  const question = `${number1} ${number2}`;
  return { question, realAnswer };
};

gameEngine(rules, playBrainGcd);

export default playBrainGcd;
