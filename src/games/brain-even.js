import readlineSync from 'readline-sync'

export const evenStart = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  const games = 3
  let win = 0
  while (games > win) {
    const random = Math.floor(Math.random() * 100)
    console.log(`Question: ${random}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()
    const isEven = () => random % 2 === 0
    const correctAnswer = isEven(random) ? 'yes' : 'no'

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
