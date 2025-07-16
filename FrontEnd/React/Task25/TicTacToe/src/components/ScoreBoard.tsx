interface ScoreBoardProps {
  scores: {
    X: number;
    O: number;
  };
}

const ScoreBoard = ({ scores }: ScoreBoardProps) => {
  return (
    <div className="flex justify-between gap-10 text-lg">
      <div>Player 1 (X): {scores.X}</div>
      <div>Player 2 (O): {scores.O}</div>
    </div>
  );
};

export default ScoreBoard;
