import { solveQuadratic } from './quadraticEquationSolver';
import * as fs from 'node:fs';
import { logQuadraticEquation } from './logger';

export const startNoninteractiveMode = (filePath: string) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`file ${filePath} does not exist`);
      process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf-8').trim();
    const parts = content.split(' ');
    if (parts.length !== 3 || !parts.every((p) => /^-?\d+(\.\d+)?$/.test(p))) {
      console.log('invalid file format');
      process.exit(1);
    }

    const [a, b, c] = parts.map(parseFloat);
    const result = solveQuadratic(a, b, c);

    logQuadraticEquation(a, b, c, result);
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(1);
  }
};
