import getRandomNumber from '../helpers.js';

const operators = ['+', '-', '*'];

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
    const operator = operators[getRandomNumber(3)];
    const expression = [operand1, operand2, operator];
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
