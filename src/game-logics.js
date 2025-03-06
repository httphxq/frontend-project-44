
const runGame = (gameLogic, name) => {
  let win = 0;
  const games = 3;
  while (games > win) {
    const [question, correctAnswer] = gameLogic();
    console.log(`Question: ${question}`);
    let userAnswer;
    if (process.argv[3]) {
      userAnswer = process.argv[3];
    } else {
      userAnswer = readlineSync.question('Your answer: ');
    }
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      win += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    };
  };
  console.log(`Congratulations, ${name}!`);
}
export { runGame }
