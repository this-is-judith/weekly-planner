import React from "react";
import "./calendar.css";

function Calendar() {
  return (
    <>
      <div className="calendar-parent">
        <div className="calendar-component calendar-month-and-year"></div>
        <div className="calendar-component calendar-days-of-week"></div>
        <div className="calendar-component calendar-dates"></div>
        <div className="calendar-component calendar-main"></div>
      </div>
    </>
  );
}

export default Calendar;
