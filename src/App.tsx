import { useState } from "react";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";

function App() {
  const [currTab, setCurrTab] = useState<number>(0);

  // Lists to manage multiple dynamic instances of Timers and Stopwatches
  const [timers, setTimers] = useState([{ id: crypto.randomUUID() }]);
  const [stopwatches, setStopwatches] = useState([{ id: crypto.randomUUID() }]);

  // Handlers to add new instances
  const addTimer = () => setTimers([...timers, { id: crypto.randomUUID() }]);
  const addStopwatch = () =>
    setStopwatches([...stopwatches, { id: crypto.randomUUID() }]);

  // Handlers to remove specific instances (keeping at least 1)
  const removeTimer = (id: string) => {
    if (timers.length > 1) setTimers(timers.filter((t) => t.id !== id));
  };
  const removeStopwatch = (id: string) => {
    if (stopwatches.length > 1)
      setStopwatches(stopwatches.filter((s) => s.id !== id));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-height-screen px-4">
      {/* Header Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 flex space-x-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-500 z-50 bg-zinc-950/80 backdrop-blur-md border border-zinc-900 px-6 py-2.5 rounded-full shadow-lg transition-all duration-300">
        <button
          onClick={() => setCurrTab(0)}
          className={`pb-0.5 transition-all duration-300 cursor-pointer ${
            currTab === 0
              ? "text-blue-500 border-b-2 border-blue-500"
              : "hover:text-zinc-300"
          }`}
        >
          Clock
        </button>
        <button
          onClick={() => setCurrTab(1)}
          className={`pb-0.5 transition-all duration-300 cursor-pointer ${
            currTab === 1
              ? "text-blue-500 border-b-2 border-blue-500"
              : "hover:text-zinc-300"
          }`}
        >
          Timer
        </button>
        <button
          onClick={() => setCurrTab(2)}
          className={`pb-0.5 transition-all duration-300 cursor-pointer ${
            currTab === 2
              ? "text-blue-500 border-b-2 border-blue-500"
              : "hover:text-zinc-300"
          }`}
        >
          Stopwatch
        </button>
      </nav>

      {/* Main Content Container */}
      <div
        id="container"
        className="w-full flex flex-col items-center justify-center"
      >
        {/* 1. Clock View */}
        <div
          className={
            currTab === 0
              ? "flex flex-col items-center justify-center min-h-[calc(100vh-2rem)]"
              : "hidden"
          }
        >
          <Clock />

          {/* Footer Quote Area */}
          <footer className="absolute bottom-8 text-center px-6">
            <p className="text-zinc-700 text-[9px] sm:text-[10px] italic tracking-widest uppercase">
              "Cut the noise. Focus on what matters."
            </p>
          </footer>
        </div>

        {/* 2. Timer View */}
        <div
          className={`flex flex-col justify-center items-center min-h-screen space-y-8 pt-24 pb-16 ${currTab === 1 ? "block" : "hidden"}`}
        >
          {timers.map((timer) => (
            <div
              key={timer.id}
              className="w-full flex flex-col items-center mb-12"
            >
              <Timer
                onRemove={() => removeTimer(timer.id)}
                showRemoveButton={timers.length > 1}
              />
            </div>
          ))}
          <button
            onClick={addTimer}
            className="mt-4 px-4 py-1.5 rounded border border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-[10px] uppercase tracking-widest font-medium transition-all duration-200 cursor-pointer"
          >
            + Add Timer
          </button>
        </div>

        {/* 3. Stopwatch View */}
        <div
          className={`flex flex-col justify-center items-center min-h-screen space-y-8 pt-24 pb-16 ${currTab === 2 ? "block" : "hidden"}`}
        >
          {stopwatches.map((sw) => (
            <div
              key={sw.id}
              className="w-full flex flex-col items-center mb-12"
            >
              <StopWatch
                onRemove={() => removeStopwatch(sw.id)}
                showRemoveButton={stopwatches.length > 1}
              />
            </div>
          ))}
          <button
            onClick={addStopwatch}
            className="mt-4 px-4 py-1.5 rounded border border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-[10px] uppercase tracking-widest font-medium transition-all duration-200 cursor-pointer"
          >
            + Add Stopwatch
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
