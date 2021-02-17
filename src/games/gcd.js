import getRandomNumber from '../helpers.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const gcd = () => {
  const expressions = [];
  for (let i = 0; i < 3; i += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const result = getGcd(a, b);
    expressions.push([a, b, result]);
  }

  const questionsWithAnswers = expressions.map((expression) => ({
    question: `${expression[0]} ${expression[1]}`,
    correctAnswer: String(expression[2]),
  }));

  return {
    openPhrase: 'Find the greatest common divisor of given numbers.',
    questionsWithAnswers,
  };
};

export default gcd;
