import getRandomNumber from '../utils.js'

const description = 'What number is missing in the progression?'
const gameLogic = () => {
  const length = 10
  const start = getRandomNumber(50)
  const step = getRandomNumber(10) + 1
  const hiddenIndex = getRandomNumber(length)
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  const correctAnswer = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  return [question, correctAnswer]
}
export default { description, gameLogic }
