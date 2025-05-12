import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i * i <= num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
const gameLogic = () => {
  const num = getRandomNumber(1000);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default { description, gameLogic };
