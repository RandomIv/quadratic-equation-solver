import * as readline from 'readline';
import { promisify } from 'node:util';
import { solveQuadratic } from './quadraticEquationSolver';
import { logQuadraticEquation } from './logger';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readNumber = promisify(rl.question).bind(rl);

async function getFloat(prompt: string): Promise<number> {
  while (true) {
    const input = String(await readNumber(prompt));
    const number = parseFloat(input);

    if (!isNaN(number)) {
      return number;
    }

    console.log(`Error. Expected a valid real number, got "${input}" instead`);
  }
}

export const startInteractiveMode = async () => {
  try {
    const a = await getFloat('a = ');
    const b = await getFloat('b = ');
    const c = await getFloat('c = ');

    const result = solveQuadratic(a, b, c);
    logQuadraticEquation(a, b, c, result);
  } catch (err) {
    console.error(err);
  } finally {
    rl.close();
  }
};
