import getRandomNumber from '../helpers.js';

const isEven = (num) => num % 2 === 0;

const even = () => {
  const expressions = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    expressions.push(number);
  }

  const questionsWithAnswers = expressions.map((number) => ({
    question: number,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  }));

  return {
    openPhrase: 'Answer "yes" if the number is even, otherwise answer "no".',
    questionsWithAnswers,
  };
};

export default even;
