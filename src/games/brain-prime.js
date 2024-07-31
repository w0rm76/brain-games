import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const playBrainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const number = getRandomNumber();
  let realAnswer = 'yes';

  for (let i = 2; i <= Math.sqrt(number) && realAnswer === 'yes'; i += 1) {
    realAnswer = (number % i === 0) ? 'no' : 'yes';
  }

  const question = number;
  return { rules, question, realAnswer };
};

gameEngine(playBrainPrime);

export default playBrainPrime;
