import React, { useState } from "react";
import "./app.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Calendar from "./Components/Calendar";
import Notes from "./Components/Notes";

function Planner() {
  {
    /* States for Tasks, Calendar and Notes visibility
    1. None visible
    2. Only Calendar visible
    3. Only Tasks visible
    4. Only Notes visible
    5. Calendar and Tasks visible, Notes hidden
    6. Calendar and Notes visible, Tasks hidden
    7. Tasks and Notes visible, Calendar hidden
    8. All three visible */
  }

  const [isCalendarVisible, setIsCalendarVisible] = useState(true);
  const [isTasksVisible, setIsTasksVisible] = useState(true);
  const [isNotesVisible, setIsNotesVisible] = useState(true);

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible((prevState) => !prevState);
  };

  return (
    <>
      {/* All three visible */}
      {isCalendarVisible && isTasksVisible && isNotesVisible && (
        <div className="page-container">
          <div className="header-container">
            <Header toggleCalendarVisibility={toggleCalendarVisibility} />
          </div>

          <div className="home-container">
            <div className="section-container main-container tasks-container">
              <Tasks />
            </div>

            <div className="section-container calendar-and-notes-container">
              <div className="main-container calendar-container">
                <Calendar />
              </div>

              <div className="main-container notes-container">
                <Notes />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Planner;
