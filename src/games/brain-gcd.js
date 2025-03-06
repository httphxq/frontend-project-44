import readlineSync from 'readline-sync';

const gcdStart = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  const games = 3;
  let win = 0;
  const factor = 100;
  while (games > win) {
    const randomFirst = Math.floor(Math.random() * factor);
    const randomSecond = Math.floor(Math.random() * factor);
    console.log(`Question: ${randomFirst} ${randomSecond}`);
    let a = randomFirst;
    let b = randomSecond;
    while (b !== 0) {
      const c = b;
      b = a % b;
      a = c;
    }
    const correctAnswer = a;
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      win += 1;
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gcdStart;
