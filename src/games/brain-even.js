import readlineSync from 'readline-sync';

const evenStart = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const games = 3;
  let win = 0;
  const factor = 100;
  while (games > win) {
    const random = Math.floor(Math.random() * factor);
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const isEven = () => random % 2 === 0;
    const correctAnswer = isEven() ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      win += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default evenStart;
