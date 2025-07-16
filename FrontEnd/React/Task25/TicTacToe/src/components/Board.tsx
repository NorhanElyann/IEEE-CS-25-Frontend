import Square from "./Square";

interface BoardProps {
  squares: (string | null)[];
  onClick: (index: number) => void;
  winner: string | null;
}

const Board = ({ squares, onClick, winner }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          highlight={!!winner && value === winner}
        />
      ))}
    </div>
  );
};

export default Board;
