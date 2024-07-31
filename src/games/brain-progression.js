import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const playBrainProgression = () => {
  const rules = 'What number is missing in the progression?';
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

  return { rules, stringQuestionProgression, realAnswer };
};

gameEngine(playBrainProgression);

export default playBrainProgression;
