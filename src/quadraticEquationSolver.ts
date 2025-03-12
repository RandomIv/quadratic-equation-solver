export const solveQuadratic = (a: number, b: number, c: number): number[] => {
  if (a === 0) {
    console.log('Error. a cannot be 0');
    process.exit(1);
  }

  const D = b * b - 4 * a * c;

  if (D < 0) return [];
  if (D === 0) return [-b / (2 * a)];

  const sqrtD = Math.sqrt(D);
  return [(-b - sqrtD) / (2 * a), (-b + sqrtD) / (2 * a)];
};
