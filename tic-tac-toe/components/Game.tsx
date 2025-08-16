// components/Game.tsx
'use client';

import { useMemo, useState } from 'react';

type Player = 'X' | 'O';
type Cell = Player | null;

const WIN_LINES: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(cells: Cell[]) {
  for (const [a, b, c] of WIN_LINES) {
    const v = cells[a];
    if (v && v === cells[b] && v === cells[c]) return { winner: v as Player, line: [a, b, c] };
  }
  return null;
}

export default function Game() {
  const [cells, setCells] = useState<Cell[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result = useMemo(() => {
    const w = getWinner(cells);
    if (w) return { status: 'won' as const, winner: w.winner, line: w.line };
    if (cells.every((c) => c)) return { status: 'draw' as const };
    return { status: 'playing' as const };
  }, [cells]);

  const handleClick = (idx: number) => {
    if (cells[idx] || result.status !== 'playing') return;
    const next = cells.slice();
    next[idx] = xIsNext ? 'X' : 'O';
    setCells(next);
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    setCells(Array(9).fill(null));
    setXIsNext(true);
  };

  const statusText =
    result.status === 'playing'
      ? `Turn: ${xIsNext ? 'X' : 'O'}`
      : result.status === 'won'
      ? `Winner: ${(result as any).winner}`
      : 'Draw';

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-4">Tic-Tac-Toe</h1>

      <div className="flex items-center justify-between mb-3">
        <span className="text-lg" aria-live="polite">
          {statusText}
        </span>
        <button
          onClick={reset}
          className="px-3 py-1.5 rounded bg-slate-800 text-white hover:bg-slate-700 active:scale-95 transition"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {cells.map((value, idx) => {
          const highlight =
            result.status === 'won' && (result as any).line?.includes(idx);
          const disabled = Boolean(value) || result.status !== 'playing';

          return (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              disabled={disabled}
              aria-label={`Cell ${idx + 1}${value ? `, ${value}` : ''}`}
              className={[
                'aspect-square rounded-md border flex items-center justify-center',
                'text-3xl sm:text-4xl font-bold select-none',
                highlight
                  ? 'bg-amber-200 border-amber-400'
                  : 'bg-white border-slate-300 hover:bg-slate-50 active:bg-slate-100',
                disabled ? 'cursor-not-allowed opacity-100' : 'cursor-pointer',
              ].join(' ')}
            >
              {value}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-center text-sm text-slate-500">
        Two-player local game. Tap a cell to place your mark.
      </p>
    </div>
  );
}
