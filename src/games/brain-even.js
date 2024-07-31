import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const playBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomNumber();
  const realAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [rules, question, realAnswer];
};

gameEngine(playBrainEven);

export default playBrainEven;
