import readlineSync from 'readline-sync';
import getName from './cli.js';
import even from './games/even.js';
import calc from './games/calc.js';

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const game = (type) => {
  let gameObj;
  switch (type) {
    case 'even':
      gameObj = even();
      break;
    case 'calc':
      gameObj = calc();
      break;
    default:
      break;
  }

  const name = getName();

  const { openPhrase, questionsWithAnswers } = gameObj;

  console.log(openPhrase);

  let count = 0;
  while (count < 3) {
    const { question, correctAnswer } = questionsWithAnswers[count];
    console.log(`Question: ${question}`);

    const answer = getAnswer();

    if (answer === correctAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (count === 3) {
      count = 0;
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default game;
