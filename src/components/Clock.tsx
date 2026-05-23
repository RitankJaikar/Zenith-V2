import { useTime } from "react-timer-hook";
import { padTime } from "../utils/timeHelpers";

function Clock() {
  const { seconds, minutes, hours, ampm } = useTime({
    format: "12-hour",
  });

  // Place this line directly below your useTime hook call
  const displayHours = hours === 0 ? 12 : hours;

  // Formats today's date into "Weekday, DD Month YYYY"
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="flex flex-col items-center">
      {/* Time Display Wrapper */}
      <div className="flex items-baseline">
        <div className="digital-font text-6xl sm:text-7xl md:text-9xl font-bold text-blue-500 glow-text leading-none">
          <span>{padTime(displayHours)}</span>:<span>{padTime(minutes)}</span>:
          <span>{padTime(seconds)}</span>
        </div>
        <div className="digital-font text-xl sm:text-2xl md:text-4xl font-bold text-blue-800 ml-2 sm:ml-4 uppercase">
          {ampm}
        </div>
      </div>

      {/* Date Display Section */}
      <div className="text-zinc-500 text-[10px] sm:text-sm md:text-xl tracking-[0.2em] uppercase font-light mt-2 sm:mt-4 text-center">
        {formattedDate}
      </div>
    </div>
  );
}

export default Clock;
