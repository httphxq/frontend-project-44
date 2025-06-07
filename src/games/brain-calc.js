import getRandomNumber from '../utils.js'

const description = 'What is the result of the expression?'
const getRandomOperation = () => {
  const operations = ['+', '-', '*']
  return operations[getRandomNumber(3)]
};
const calculate = (num1, num2, operation) => {
  if (operation === '+') {
    return num1 + num2
  }
  if (operation === '-') {
    return num1 - num2
  }
  return num1 * num2
}
const gameLogic = () => {
  const num1 = getRandomNumber(100)
  const num2 = getRandomNumber(100)
  const operation = getRandomOperation()
  const question = `${num1} ${operation} ${num2}`
  const correctAnswer = calculate(num1, num2, operation)
  return [question, correctAnswer]
}
export default { description, gameLogic }
