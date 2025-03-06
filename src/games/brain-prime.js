import readlineSync from 'readline-sync'

export const primeStart = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const games = 3;
  let win = 0;
  const factor = 100;
  const compNumber = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
  ];
  while (games > win) {
    const random = Math.floor(Math.random() * factor);
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const isPrime = compNumber.includes(random);
    const correctAnswer = isPrime ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      win += 1;
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  };
  console.log(`Congratulations, ${name}!`);
}
