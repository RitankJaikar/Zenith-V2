import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false, interval: 20 });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{ fontSize: "100px" }}>
        <span>{String(hours).padStart(2, "0")}</span>:
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>:
        <span>{String(milliseconds).padStart(2, "0")}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => pause()}>Pause</button>
      <button onClick={() => reset(undefined, false)}>Reset</button>
    </div>
  );
}

export default MyStopwatch;
