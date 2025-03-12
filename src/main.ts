import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Check reader: ', (answer: string) => {
  console.log(answer);
  rl.close();
});
