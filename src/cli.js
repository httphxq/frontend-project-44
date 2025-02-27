import readlineSync from 'readline-sync';
export const name = () => {
    const printName = readlineSync.question ('May I have your name?');
    console.log('Hello, ${printName}!')
}