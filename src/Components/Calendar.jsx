import React, { useEffect, useState } from "react";
import "./calendar.css";

function Calendar() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getCurrentWeekDates = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const currentSunday = new Date(today);
    currentSunday.setDate(today.getDate() - dayOfWeek);

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentSunday);
      date.setDate(currentSunday.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  const weekDates = getCurrentWeekDates();

  const [timeZoneOffset, setTimeZoneOffset] = useState("");

  useEffect(() => {
    // Function to get the current GMT offset
    const getCurrentGMTOffset = () => {
      const date = new Date();
      const offset = -date.getTimezoneOffset() / 60;
      const sign = offset >= 0 ? "+" : "-";
      const formattedOffset = `GMT${sign}${Math.abs(offset)}`;
      return formattedOffset;
    };

    // Set the GMT offset state
    setTimeZoneOffset(getCurrentGMTOffset());
  }, []);

  return (
    <>
      <div className="calendar-parent">
        <div className="calendar-component calendar-time-block">
          <div className="calendar-day"></div>
          <div className="calendar-time-zone">
            {timeZoneOffset ? `${timeZoneOffset}` : "Loading..."}
          </div>

          <div className="calendar-main time-partitions">
            {[...Array(24)].map((_, index) => (
              <div key={index} className="hour-slot">
                {index < 10 ? `0${index}:00` : `${index}:00`}
              </div>
            ))}
          </div>
        </div>

        {weekDates.map((date, index) => (
          <div
            key={index}
            className={`calendar-component calendar-${days[
              index
            ].toLowerCase()}`}
          >
            <div className="calendar-day">{days[index]}</div>
            <div className="calendar-date">{date.getDate()}</div>
            <div className="calendar-main"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendar;
