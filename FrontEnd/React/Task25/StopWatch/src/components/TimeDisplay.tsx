type TimeDisplayProps = {
  seconds: number;
};

const TimeDisplay = ({ seconds }: TimeDisplayProps) => {
  const formatTime = (secs: number): string => {
    const hrs = String(Math.floor(secs / 3600)).padStart(2, '0');
    const mins = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const secsStr = String(secs % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secsStr}`;
  };

  return (
    <div className="w-48 h-48 bg-blue-800 rounded-full flex items-center justify-center mb-4">
      <p className="text-2xl font-mono">{formatTime(seconds)}</p>
    </div>
  );
};

export default TimeDisplay;
