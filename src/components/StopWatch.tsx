import { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { getTwoDigitMs, padTime } from "../utils/timeHelpers";

interface StopWatchProps {
  onRemove: () => void;
  showRemoveButton: boolean;
}

function StopWatch({ onRemove, showRemoveButton }: StopWatchProps) {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false, interval: 20 });

  const twoDigitMilliseconds = getTwoDigitMs(milliseconds);

  const handleActionClick = (): void => {
    if (isRunning) {
      pause();
    } else {
      setHasStarted(true);
      start();
    }
  };

  const handleResetClick = (): void => {
    setHasStarted(false);
    reset(undefined, false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Stopwatch Time Display */}
      <div className="digital-font text-6xl sm:text-7xl md:text-9xl font-bold text-zinc-100 mb-6 sm:mb-8 leading-none">
        {days > 0 && (
          <span>
            {padTime(days)}
            <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-500 px-0.5">
              d
            </span>
            :
          </span>
        )}
        {(days > 0 || hours > 0) && (
          <span>
            {padTime(hours)}
            <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-500 px-0.5">
              h
            </span>
            :
          </span>
        )}
        {(days > 0 || hours > 0 || minutes > 0) && (
          <span>
            {padTime(minutes)}
            <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-500 px-0.5">
              m
            </span>
            :
          </span>
        )}
        <span>
          {padTime(seconds)}
          <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-500 px-0.5">
            s
          </span>
        </span>
        <span className="text-4xl sm:text-6xl md:text-8xl text-zinc-500">
          .{padTime(twoDigitMilliseconds, 2)}
          <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-500 px-1">
            ms
          </span>
        </span>
      </div>

      {/* Controls Container */}
      <div className="flex space-x-4">
        <button
          onClick={handleActionClick}
          className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transform active:scale-95 transition-all duration-200 cursor-pointer text-white ${
            isRunning
              ? "bg-amber-600 hover:bg-amber-500"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          {isRunning ? "PAUSE" : hasStarted ? "RESUME" : "START"}
        </button>

        {hasStarted && (
          <button
            onClick={handleResetClick}
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-xs sm:text-sm font-bold transform active:scale-95 transition-all duration-200 cursor-pointer"
          >
            RESET
          </button>
        )}

        {showRemoveButton && (
          <button
            onClick={onRemove}
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-red-900/50 hover:bg-red-950/30 text-red-400 text-xs sm:text-sm font-bold transform active:scale-95 transition-all duration-200 cursor-pointer"
          >
            REMOVE
          </button>
        )}
      </div>
    </div>
  );
}

export default StopWatch;
