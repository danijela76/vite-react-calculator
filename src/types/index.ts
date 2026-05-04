export type MathOp = '+' | '-' | '*' | '/';

export type CalcState = {
  inputA: string;
  inputB: string;
  result: number | null;
  error: string | null;
  activeOp: MathOp | null;
};

export type OpConfig = {
  op: MathOp;
  display: string;
  label: string;
};
