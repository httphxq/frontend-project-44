import readlineSync from 'readline-sync'

export const progressionStart = (name) => {
  console.log('What number is missing in the progression?')
  const games = 3
  let win = 0
  while (games > win) {
    let answerArr = []

    let a = (Math.floor(Math.random() * 10))
    let step = (Math.floor(Math.random() * 10))
    let b = a + step
    let c = b + step
    let d = c + step
    let e = d + step
    answerArr.push (a, b, c, d, e)

    let questionArr = [...answerArr]
    let skip = (Math.floor(Math.random() * 5))

    questionArr.splice(skip, 1, '..')

    console.log(`Question: ${questionArr.join(' ')}`)
    const userInput = readlineSync.question('Your answer: ')
    const userAnswer = Number(userInput)

    let correctAnswer = answerArr[skip]

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
