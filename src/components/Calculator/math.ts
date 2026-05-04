import type { MathOp } from '../types';

const compute: Record<MathOp, (a: number, b: number) => number | null> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => (b === 0 ? null : a / b),
};

export function runCalc(
  a: number,
  b: number,
  op: MathOp
): { result: number | null; error: string | null } {
  const output = compute[op](a, b);
  if (output === null) return { result: null, error: 'Deljenje nulom nije dozvoljeno.' };
  return { result: output, error: null };
}

export function formatNumber(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(8)).toString();
}
