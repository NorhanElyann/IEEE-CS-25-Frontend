interface SquareProps {
  value: string | null;
  onClick: () => void;
  highlight: boolean;
}

const Square = ({ value, onClick, highlight }: SquareProps) => {
  const baseStyle =
    "w-20 h-20 text-3xl font-bold flex items-center justify-center border rounded";
  const colorStyle =
    value === "X"
      ? "text-red-500 border-red-500"
      : "text-blue-500 border-blue-500";
  const highlightStyle = highlight ? "bg-white/10" : "bg-gray-800";

  return (
    <button
      className={`${baseStyle} ${colorStyle} ${highlightStyle}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
