import getRandomNumber from '../helpers.js';

const makeProgression = () => {
  const length = getRandomNumber(5) + 5;
  const firstMember = getRandomNumber();
  const difference = getRandomNumber(50);
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstMember + difference * i);
  }

  return result;
};

const progression = () => {
  const expressions = [];
  for (let i = 0; i < 3; i += 1) {
    const arithmeticProgression = makeProgression();
    const missingIndex = getRandomNumber(arithmeticProgression.length);
    const missing = arithmeticProgression[missingIndex];
    arithmeticProgression[missingIndex] = '..';
    expressions.push([arithmeticProgression, missing]);
  }

  const questionsWithAnswers = expressions.map((expression) => ({
    question: `${expression[0].join(' ')}`,
    correctAnswer: String(expression[1]),
  }));

  return {
    openPhrase: 'What number is missing in the progression?',
    questionsWithAnswers,
  };
};

export default progression;
