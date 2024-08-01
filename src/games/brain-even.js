import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => {
  const question = getRandomNumber();
  const realAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, realAnswer };
};

gameEngine(rules, playBrainEven);

export default playBrainEven;
