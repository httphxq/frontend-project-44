import readlineSync from 'readline-sync'

export const primeStart = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  const games = 3
  let win = 0
  const factor = 100
  const complexNumber = 10

  while (games > win) {
    const random = Math.floor(Math.random() * factor)
    console.log(`Question: ${random}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()
    const isPrime = () => random < complexNumber
    const correctAnswer = isPrime(random) ? 'yes' : 'no'

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
