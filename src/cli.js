import readLineSync from 'readline-sync';
export const helloUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}