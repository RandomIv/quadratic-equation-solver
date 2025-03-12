import * as readline from 'readline';
import { promisify } from 'node:util';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readNumber = promisify(rl.question).bind(rl);

const a = await readNumber('a = ');
const b = await readNumber('b = ');
const c = await readNumber('c = ');

rl.close();

console.log([a, b, c]);