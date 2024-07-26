import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const playBrainProgression = () => {
  const progressionLength = getRandomNumber(5, 10); // fix length could be set =10
  const missingPosition = getRandomNumber(1, progressionLength);
  let progressionElement = getRandomNumber();
  const progressionStep = getRandomNumber(1, 10);
  const progression = [];
  let stringQuestionProgression = '';

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = progressionElement;
    if (i === missingPosition - 1) {
      stringQuestionProgression = `${stringQuestionProgression} ..`;
    } else {
      stringQuestionProgression = `${stringQuestionProgression} ${
        progressionElement.toString(10)}`;
    }
    progressionElement += progressionStep;
  }

  const realAnswer = progression[missingPosition - 1];

  console.log(`Question: ${stringQuestionProgression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = (parseInt(userAnswer, 10) === realAnswer)
    ? [true, realAnswer, userAnswer]
    : [false, realAnswer, userAnswer];
  return result;
};

export default playBrainProgression;
