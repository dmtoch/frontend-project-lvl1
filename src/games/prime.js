import getRandomNumber from '../helpers.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const prime = () => {
  const expressions = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    expressions.push(number);
  }

  const questionsWithAnswers = expressions.map((number) => ({
    question: number,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  }));

  return {
    openPhrase: 'Answer "yes" if given number is prime. Otherwise answer "no"',
    questionsWithAnswers,
  };
};

export default prime;
