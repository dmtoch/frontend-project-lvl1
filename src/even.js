import readlineSync from 'readline-sync';
import getName from './cli.js';

let count = 0;
const getRandomNumber = () => Math.floor(Math.random() * 1000);
const isEven = (num) => num % 2 === 0;

const question = (number) => {
  console.log('Question: ', number);
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const checkAnswer = (number, answer) => {
  if ((answer === 'yes' && isEven(number)) || (answer === 'no' && !isEven(number))) {
    return true;
  }

  return false;
};

const game = () => {
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const number = getRandomNumber();
    question(number);
    const answer = getAnswer();
    const oppositeAnswer = answer === 'yes' ? 'no' : 'yes';
    const check = checkAnswer(number, answer);
    if (check) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.`);
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
