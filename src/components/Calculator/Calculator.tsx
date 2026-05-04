import { useState } from 'react';
import type { CalcState, MathOp, OpConfig } from '../../types';
import { runCalc, formatNumber } from './math';
import './Calculator.css';

const BUTTONS: OpConfig[] = [
  { op: '+', display: '+', label: 'Saberi' },
  { op: '-', display: '−', label: 'Oduzmi' },
  { op: '*', display: '×', label: 'Pomnoži' },
  { op: '/', display: '÷', label: 'Podeli' },
];

const INITIAL_STATE: CalcState = {
  inputA: '',
  inputB: '',
  result: null,
  error: null,
  activeOp: null,
};

export default function Calculator() {
  const [state, setState] = useState<CalcState>(INITIAL_STATE);

  const handleInput = (field: 'inputA' | 'inputB', value: string) => {
    setState((prev) => ({ ...prev, [field]: value, result: null, error: null }));
  };

  const handleOp = (op: MathOp) => {
    const a = parseFloat(state.inputA);
    const b = parseFloat(state.inputB);

    if (state.inputA.trim() === '' || state.inputB.trim() === '') {
      setState((prev) => ({ ...prev, activeOp: op, result: null, error: 'Popunite oba polja pre računanja.' }));
      return;
    }

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setState((prev) => ({ ...prev, activeOp: op, result: null, error: 'Unos mora biti broj.' }));
      return;
    }

    const { result, error } = runCalc(a, b, op);
    setState((prev) => ({ ...prev, activeOp: op, result, error }));
  };

  const handleReset = () => setState(INITIAL_STATE);

  const showOutput = state.result !== null || state.error !== null;

  return (
    <div className="calc-wrap">
      <div className="calc-top">
        <span className="calc-tag">ODP · FTN Novi Sad</span>
        <h1 className="calc-heading">Kalkulator</h1>
        <p className="calc-sub">Unesite dva broja i izaberite operaciju</p>
      </div>

      <div className="calc-row">
        <div className="calc-field">
          <label htmlFor="num-a">Broj A</label>
          <input
            id="num-a"
            type="number"
            inputMode="decimal"
            placeholder="0"
            value={state.inputA}
            onChange={(e) => handleInput('inputA', e.target.value)}
          />
        </div>
        <div className="calc-field">
          <label htmlFor="num-b">Broj B</label>
          <input
            id="num-b"
            type="number"
            inputMode="decimal"
            placeholder="0"
            value={state.inputB}
            onChange={(e) => handleInput('inputB', e.target.value)}
          />
        </div>
      </div>

      <div className="calc-ops">
        {BUTTONS.map(({ op, display, label }) => (
          <button
            key={op}
            type="button"
            className={`calc-op-btn${state.activeOp === op && showOutput ? ' calc-op-btn--on' : ''}`}
            onClick={() => handleOp(op)}
          >
            <span className="calc-op-btn__sym">{display}</span>
            <span className="calc-op-btn__txt">{label}</span>
          </button>
        ))}
      </div>

      {showOutput && (
        <div className={`calc-out${state.error ? ' calc-out--err' : ' calc-out--ok'}`} role="status">
          {state.error ? (
            <p className="calc-out__msg">{state.error}</p>
          ) : (
            <>
              <span className="calc-out__lbl">Rezultat</span>
              <p className="calc-out__val">{formatNumber(state.result as number)}</p>
            </>
          )}
        </div>
      )}

      <button type="button" className="calc-clear" onClick={handleReset}>
        Resetuj
      </button>
    </div>
  );
}
