const getRandomNumber = (multiplier = 100) => Math.floor(Math.random() * multiplier);
const operations = ['+', '-', '*'];

const evaluate = ([operand1, operand2, operation]) => {
  let result;

  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }

  return result;
};

const calc = () => {
  const expressions = [];
  for (let i = 0; i < 3; i += 1) {
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();
    const operation = operations[getRandomNumber(3)];
    const expression = [operand1, operand2, operation];
    const result = evaluate(expression);
    expression.push(result);
    expressions.push(expression);
  }

  const questionsWithAnswers = expressions.map((expression) => ({
    question: `${expression[0]} ${expression[2]} ${expression[1]}`,
    correctAnswer: String(expression[3]),
  }));

  return {
    openPhrase: 'What is the result of the expression?',
    questionsWithAnswers,
  };
};

export default calc;
