import { solveQuadratic } from './quadraticEquationSolver';
import * as fs from 'node:fs';

export const startNoninteractiveMode = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    console.log(`file ${filePath} does not exist`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf-8').trim();
  const parts = content.split(' ');

  if (parts.length !== 3 || !parts.every((p) => !isNaN(parseFloat(p)))) {
    console.log('invalid file format');
    process.exit(1);
  }

  const [a, b, c] = parts.map(parseFloat);
  console.log(solveQuadratic(a, b, c));
  process.exit(1);
};
