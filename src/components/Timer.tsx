import { useState } from "react";
import { useTimer } from "react-timer-hook";

interface TimerProps {
  onRemove: () => void;
  showRemoveButton: boolean;
}

function Timer({ onRemove, showRemoveButton }: TimerProps) {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  // Track numerical configuration values from input fields
  const [inputH, setInputH] = useState<string>("00");
  const [inputM, setInputM] = useState<string>("10"); // Defaults to 10 minutes
  const [inputS, setInputS] = useState<string>("00");

  const getExpiryTime = (totalSeconds = 600) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + totalSeconds);
    return time;
  };

  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    // start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: getExpiryTime(600),
    autoStart: false,
    interval: 20,
    onExpire: () => console.warn("onExpire called"),
  });

  const twoDigitMilliseconds = Math.floor(milliseconds / 10);

  const padTime = (num: number, targetLength = 2): string =>
    String(num).padStart(targetLength, "0");

  const handleActionClick = (): void => {
    if (isRunning) {
      pause();
    } else if (hasStarted) {
      resume();
    } else {
      // Calculate inputs to absolute seconds
      const h = parseInt(inputH) || 0;
      const m = parseInt(inputM) || 0;
      const s = parseInt(inputS) || 0;
      const totalSeconds = h * 3600 + m * 60 + s;

      // Minimum execution validation check
      if (totalSeconds < 1) return;

      setHasStarted(true);
      restart(getExpiryTime(totalSeconds), true); // Fires immediate execution
    }
  };

  const handleResetClick = (): void => {
    setHasStarted(false);
    restart(getExpiryTime(600), false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Display Layout Area */}
      <div className="digital-font text-6xl sm:text-7xl md:text-9xl font-bold mb-6 sm:mb-8 leading-none">
        {!hasStarted ? (
          /* Configuration Setup Input View */
          <div className="text-zinc-400">
            <input
              type="text"
              value={inputH}
              maxLength={2}
              onChange={(e) => setInputH(e.target.value.replace(/\D/g, ""))}
              className="digital-font w-[70px] sm:w-[90px] md:w-[140px] bg-transparent text-center border-b-2 border-zinc-700 text-zinc-100 outline-none focus:border-blue-500 transition-colors"
            />
            <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-500 px-0.5">
              h
            </span>
            :
            <input
              type="text"
              value={inputM}
              maxLength={2}
              onChange={(e) => setInputM(e.target.value.replace(/\D/g, ""))}
              className="digital-font w-[70px] sm:w-[90px] md:w-[140px] bg-transparent text-center border-b-2 border-zinc-700 text-zinc-100 outline-none focus:border-blue-500 transition-colors"
            />
            <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-500 px-0.5 ">
              m
            </span>
            :
            <input
              type="text"
              value={inputS}
              maxLength={2}
              onChange={(e) => setInputS(e.target.value.replace(/\D/g, ""))}
              className="digital-font w-[70px] sm:w-[90px] md:w-[140px] bg-transparent text-center border-b-2 border-zinc-700 text-zinc-100 outline-none focus:border-blue-500 transition-colors"
            />
            <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-500 px-0.5">
              s
            </span>
          </div>
        ) : (
          /* Active Runtime Live Countdown View */
          <div className="text-zinc-100">
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
        )}
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

export default Timer;
