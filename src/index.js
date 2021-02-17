import readlineSync from 'readline-sync';
import getName from './cli.js';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

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
    case 'gcd':
      gameObj = gcd();
      break;
    case 'progression':
      gameObj = progression();
      break;
    case 'prime':
      gameObj = prime();
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
