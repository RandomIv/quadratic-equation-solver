import * as readline from 'readline';
import { promisify } from 'node:util';
import { solveQuadratic } from './quadraticEquationSolver';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readNumber = promisify(rl.question).bind(rl);

async function getFloat(prompt: string): Promise<string> {
  while (true) {
    const input = String(await readNumber(prompt));
    const number = parseFloat(input);

    if (!isNaN(number)) {
      return number.toString().includes('.')
        ? number.toString()
        : `${number}.0`;
    }

    console.log(`Error. Expected a valid real number, got "${input}" instead`);
  }
}
const a = String(await getFloat('a = '));
const b = String(await getFloat('b = '));
const c = String(await getFloat('c = '));

const result = solveQuadratic(Number(a), Number(b), Number(c));

rl.close();

console.log(`
Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0
There are ${result.length} roots
${result.map((value, index) => `x${index + 1} = ${value}`).join('\n')}
`);
