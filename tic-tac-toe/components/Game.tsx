// Mark this component as a client-side component (required for interactivity in Next.js App Router)
'use client';

// Import React hooks for state and memoization
import { useMemo, useState } from 'react';

// Define a type for players: either 'X' or 'O'
type Player = 'X' | 'O';
// Define a type for each cell: either a Player or null (empty)
type Cell = Player | null;

// Define all possible winning combinations (by cell index)
const WIN_LINES: number[][] = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal from top-left
  [2, 4, 6], // diagonal from top-right
];

// Function to check if a player has won
function getWinner(cells: Cell[]): { winner: Player; line: number[] } | null {
  // Loop through each winning line
  for (const [a, b, c] of WIN_LINES) {
    const v = cells[a]; // Get the value at position a
    // If all three positions match and are not null, we have a winner
    if (v && v === cells[b] && v === cells[c]) {
      return { winner: v, line: [a, b, c] }; // Return winner and winning line
    }
  }
  return null; // No winner found
}

// Main Game component
export default function Game() {
  // State to hold the board cells (initially all null)
  const [cells, setCells] = useState<Cell[]>(Array(9).fill(null));
  // State to track whose turn it is (X starts first)
  const [xIsNext, setXIsNext] = useState(true);

  // Memoized result to determine game status: playing, won, or draw
  const result = useMemo(() => {
    const win = getWinner(cells); // Check for winner
    if (win) return { status: 'won' as const, winner: win.winner, line: win.line }; // If won
    if (cells.every((c) => c)) return { status: 'draw' as const }; // If all cells filled
    return { status: 'playing' as const }; // Otherwise still playing
  }, [cells]); // Recalculate only when cells change

  // Handle click on a cell
  const handleClick = (idx: number) => {
    // Ignore click if cell is filled or game is over
    if (cells[idx] || result.status !== 'playing') return;
    const next = [...cells]; // Copy current board
    next[idx] = xIsNext ? 'X' : 'O'; // Place current player's mark
    setCells(next); // Update board
    setXIsNext(!xIsNext); // Switch turn
  };

  // Reset the game to initial state
  const reset = () => {
    setCells(Array(9).fill(null)); // Clear board
    setXIsNext(true); // Set turn to X
  };

  // Display status message based on game state
  const statusText =
    result.status === 'playing'
      ? `Turn: ${xIsNext ? 'X' : 'O'}` // Show whose turn it is
      : result.status === 'won'
      ? `Winner: ${result.winner}` // Show winner
      : 'Draw'; // Show draw

  // JSX layout
  return (
    // Container with max width and centered layout
    <div className="w-full max-w-sm sm:max-w-md mx-auto">
      {/* Card-style wrapper with padding and shadow */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Game title */}
        <h1 className="text-2xl font-bold text-center mb-4 text-slate-800">Tic-Tac-Toe</h1>

        {/* Status message and reset button */}
        <div className="flex items-center justify-between mb-4">
          {/* Display current status */}
          <span className="text-lg font-medium text-slate-700" aria-live="polite">
            {statusText}
          </span>
          {/* Reset button with hover and active styles */}
          <button
            onClick={reset}
            className="px-3 py-1.5 rounded bg-slate-800 text-white hover:bg-slate-700 active:scale-95 transition"
          >
            Reset
          </button>
        </div>

        {/* Game board: 3x3 grid */}
        <div className="grid grid-cols-3 gap-2">
          {/* Render each cell */}
          {cells.map((value, idx) => {
            // Check if this cell is part of the winning line
            const highlight =
              result.status === 'won' && result.line?.includes(idx);
            // Disable cell if already filled or game is over
            const disabled = Boolean(value) || result.status !== 'playing';

            return (
              // Cell button
              <button
                key={idx} // Unique key for React
                onClick={() => handleClick(idx)} // Handle click
                disabled={disabled} // Disable if needed
                aria-label={`Cell ${idx + 1}${value ? `, ${value}` : ''}`} // Accessibility label
                className={[
                  'aspect-square rounded-lg border flex items-center justify-center', // Basic layout
                  'text-4xl sm:text-5xl font-bold select-none transition-transform duration-150', // Typography and animation
                  highlight
                    ? 'bg-yellow-100 border-yellow-400 animate-pulse' // Style for winning cells
                    : 'bg-slate-50 border-slate-300 hover:scale-105 active:scale-95', // Normal cell style
                  disabled ? 'cursor-not-allowed opacity-100' : 'cursor-pointer', // Cursor and opacity
                ].join(' ')} // Combine classes
              >
                {/* Display X or O with color */}
                <span
                  className={`transition-opacity duration-200 ${
                    value === 'X'
                      ? 'text-blue-600' // X is blue
                      : value === 'O'
                      ? 'text-rose-600' // O is rose
                      : ''
                  }`}
                >
                  {value} {/* Show the mark */}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-4 text-center text-sm text-slate-500">
          Two-player local game. Tap a cell to place your mark.
        </p>
      </div>
    </div>
  );
}
