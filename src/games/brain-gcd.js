import getRandomNumber from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'
const getGCD = (num1, num2) => {
  let a = num1
  let b = num2
  while (a !== b) {
    if (a > b) {
      a -= b
    } else {
      b -= a
    }
  }
  return a
}
const gameLogic = () => {
  const num1 = getRandomNumber(100)
  const num2 = getRandomNumber(100)
  const question = `${num1} ${num2}`
  const correctAnswer = getGCD(num1, num2)
  return [question, correctAnswer];
}
export default { description, gameLogic }
