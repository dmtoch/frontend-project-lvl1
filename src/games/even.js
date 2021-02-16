const getRandomNumber = () => Math.floor(Math.random() * 1000);
const isEven = (num) => num % 2 === 0;

const even = () => {
  const expression = [];
  for (let i = 0; i < 3; i += 1) {
    expression.push(getRandomNumber());
  }

  const questionsWithAnswers = expression.map((number) => ({
    question: number,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  }));

  return {
    openPhrase: 'Answer "yes" if the number is even, otherwise answer "no".',
    questionsWithAnswers,
  };
};

export default even;
