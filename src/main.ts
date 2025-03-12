import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readNumber = (query: string) => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

const a = await readNumber('a = ');
const b = await readNumber('b = ');
const c = await readNumber('c = ');

rl.close();

console.log([a, b, c]);
