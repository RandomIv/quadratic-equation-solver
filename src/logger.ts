function formatNum(n: number): string {
  return Number.isInteger(n) ? `${n}.0` : `${n}`;
}
export const logQuadraticEquation = (
  a: number,
  b: number,
  c: number,
  result: number[],
) => {
  console.log(`
Equation is: (${formatNum(a)}) x^2 + (${formatNum(b)}) x + (${formatNum(c)}) = 0
There are ${result.length} roots
${result.map((value, index) => `x${index + 1} = ${formatNum(value)}`).join('\n')}
`);
};
