type StopwatchButtonsProps = {
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
};

const StopwatchButtons = ({ isRunning, onToggle, onReset }: StopwatchButtonsProps) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onToggle}
        className="bg-blue-900 px-4 py-2 rounded-md hover:bg-blue-950"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={onReset}
        className="bg-blue-900 px-4 py-2 rounded-md hover:bg-blue-950"
      >
        Reset
      </button>
    </div>
  );
};

export default StopwatchButtons;
