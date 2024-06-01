import React from "react";
import "./calendar.css";

function Calendar() {
  return (
    <>
      <div className="calendar-parent">
        <div className="calendar-component calendar-sunday">
          <div className="calendar-day"></div>
          <div className="calendar-date"></div>
          <div className="calendar-main"></div>
        </div>

        <div className="calendar-component calendar-monday">
          <div className="calendar-day"></div>
          <div className="calendar-date"></div>
          <div className="calendar-main"></div>
        </div>

        <div className="calendar-component calendar-tuesday">
          <div className="calendar-day"></div>
          <div className="calendar-date"></div>
          <div className="calendar-main"></div>
        </div>

        <div className="calendar-component calendar-wednesday">
          <div className="calendar-day"></div>
          <div className="calendar-date"></div>
          <div className="calendar-main"></div>
        </div>

        <div className="calendar-component calendar-thursday">
          <div className="calendar-day"></div>
          <div className="calendar-date"></div>
          <div className="calendar-main"></div>
        </div>

        <div className="calendar-component calendar-friday">
          <div className="calendar-day"></div>
          <div className="calendar-date"></div>
          <div className="calendar-main"></div>
        </div>

        <div className="calendar-component calendar-saturday">
          <div className="calendar-day"></div>
          <div className="calendar-date"></div>
          <div className="calendar-main"></div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
