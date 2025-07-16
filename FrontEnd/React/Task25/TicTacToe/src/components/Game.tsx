import { useState } from "react";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

const Game = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState<string | null>(null);
  const isDraw = !winner && board.every((square) => square !== null);

  const calculateWinner = (squares: (string | null)[]): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";

    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result);
      setScores((prev) => ({
        ...prev,
        [result]: prev[result as keyof typeof prev] + 1,
      }));
    }

    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleContinue = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setXIsNext(false);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setScores({ X: 0, O: 0 });
    setWinner(null);
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} winner={winner} />
      <ScoreBoard scores={scores} />
      {winner ? (
        <>
          <p className="text-xl mt-2">
            Player {winner === "X" ? "1" : "2"} Wins!
          </p>
          <button
            onClick={handleContinue}
            className="mt-2 px-4 py-2 bg-blue-600 rounded"
          >
            Continue
          </button>
        </>
      ) : isDraw ? (
        <>
          <p className="text-xl mt-2">No one wins!</p>
          <button
            onClick={handleContinue}
            className="mt-2 px-4 py-2 bg-blue-600 rounded"
          >
            Continue
          </button>
        </>
      ) : (
        <p>It's Player {xIsNext ? "1" : "2"}'s turn</p>
      )}

      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-red-600 rounded"
      >
        Reset All
      </button>
    </div>
  );
};

export default Game;
