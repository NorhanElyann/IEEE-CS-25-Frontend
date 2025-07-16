import { useRef, useState } from "react";
import TimeDisplay from "./TimeDisplay";
import StopwatchButtons from "./StopwatchButtons";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const runTimer = () => {
    timerRef.current = window.setTimeout(() => {
      setSeconds((prev) => prev + 1);
      runTimer(); 
    }, 1000);
  };

  const toggleRunning = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    } else {
      setIsRunning(true);
      runTimer();
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400 text-white font-sans">
      <h1 className="text-4xl font-bold mb-6">Stopwatch</h1>
      <div className="bg-blue-600 p-6 rounded-2xl w-72 flex flex-col items-center">
        <TimeDisplay seconds={seconds} />
        <StopwatchButtons
          isRunning={isRunning}
          onToggle={toggleRunning}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default Stopwatch;
