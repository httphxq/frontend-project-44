import readlineSync from 'readline-sync'

export const calcStart = (name) => {
  console.log('What is the result of the expression?')
  const games = 3
  let win = 0
  const operations = ['+', '-', '*']
  while (games > win) {
    const randomFirst = Math.floor(Math.random() * 100)
    const randomSecond = Math.floor(Math.random() * 100)
    const randomOperations = operations[Math.floor(Math.random() * operations.length)]
    console.log(`Question: ${randomFirst} ${randomOperations} ${randomSecond}`)
    const userAnswer = Number(readlineSync.question('Your answer: '))
    let correctAnswer = 0
    if (randomOperations === '+') {
      correctAnswer = randomFirst + randomSecond
    }
    else if (randomOperations === '-') {
      correctAnswer = randomFirst - randomSecond
    }
    else {
      correctAnswer = randomFirst * randomSecond
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!')

      win++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
