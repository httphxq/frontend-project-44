import readlineSync from 'readline-sync'

const progressionStart = (name) => {
  console.log('What number is missing in the progression?');
  const games = 3;
  let win = 0;
  const factor = 10;
  const skipFactor = 5;
  while (games > win) {
    let answerArr = [];
    let a = (Math.floor(Math.random() * factor));
    let step = (Math.floor(Math.random() * factor));
    const b = a + step;
    const c = b + step;
    const d = c + step;
    const e = d + step;
    answerArr.push (a, b, c, d, e);
    let questionArr = [...answerArr];
    const skip = (Math.floor(Math.random() * skipFactor));
    questionArr.splice(skip, 1, '..');
    console.log(`Question: ${questionArr.join(' ')}`);
    const userInput = readlineSync.question('Your answer: ');
    const userAnswer = Number(userInput);
    const correctAnswer = answerArr[skip];
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
export default progressionStart;
