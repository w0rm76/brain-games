import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => {
  const number = getRandomNumber();
  let realAnswer = 'yes';

  for (let i = 2; i <= Math.sqrt(number) && realAnswer === 'yes'; i += 1) {
    realAnswer = (number % i === 0) ? 'no' : 'yes';
  }

  const question = number;
  return { question, realAnswer };
};

gameEngine(rules, playBrainPrime);

export default playBrainPrime;
