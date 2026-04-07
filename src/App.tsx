import { useState } from 'react';
import { CubicInput } from './components/CubicInput';
import { CubicEquation } from './components/CubicEquation';
import { CubicTable } from './components/CubicTable';
import { CubicGraph } from './components/CubicGraph';
import { CubicHistory } from './components/CubicHistory';

export const App = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
  const [history, setHistory] = useState<{ a: number; b: number; c: number; d: number }[]>([]);

  const p: number = (3 * a * c - b * b) / (3 * a * a);
  const q: number = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
  const discriminant: number = ((q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3));

  const u: number = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
  const v: number = Math.cbrt(-q / 2 - Math.sqrt(discriminant));
  const adjustment: number = b / (3 * a);

  function cardano(u: number, v: number): number {
    return u + v - adjustment;
  };

  function trignometric(k: number): number {
    const theta: number = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-Math.pow(p / 3, 3))));
    return 2 * Math.sqrt(-p / 3) * Math.cos(theta + 2 * k * Math.PI / 3) - adjustment
  };

  let roots: number[] = [];

  if (discriminant < 0) { // Trignometric Case for three distinct real roots
    roots = [trignometric(0), trignometric(1), trignometric(2)]
  } else if (discriminant > 0) {
    roots = [cardano(u, v)]
  } else {
    if (p && q === 0) { // One repeated root
      roots = [cardano(u, v), cardano(u, v), cardano(u, v)]
    } else { // One distinct root, one repeated root
      roots = [cardano(u, v), Math.cbrt(q / 2) - adjustment, Math.cbrt(q / 2) - adjustment]
    };
  };

  return (
    <div>
      <CubicInput
        a={a}
        b={b}
        c={c}
        d={d}
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
        onSave={() => setHistory([...history, { a, b, c, d }])}
      />
      {a !== 0 && (
        <CubicEquation
          a={a}
          b={b}
          c={c}
          d={d}
        />
      )}
      <div className="flex justify-center items-start gap-[40px] mt-[30px]">
        <div className="flex flex-col gap-[20px]">
          {a === 0 ? (
            <div>
              <p className="text-[20px] text-center my-[30px] font-medium text-red-500">
                The coefficient "a" cannot be equal to 0
              </p>
            </div>
          ) : (
            <CubicTable
              p={p}
              q={q}
              discriminant={discriminant}
              roots={roots}
            />
          )}
          <CubicHistory
            history={history}
            setA={setA}
            setB={setB}
            setC={setC}
            setD={setD}
          />
        </div>
        <CubicGraph
          a={a}
          b={b}
          c={c}
          d={d}
          roots={roots}
        />
      </div>
    </div>
  );
};