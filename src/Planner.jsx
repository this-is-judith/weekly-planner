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

  const toggleTasksVisibility = () => {
    setIsTasksVisible((prevState) => !prevState);
  };

  const toggleNotesVisibility = () => {
    setIsNotesVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="page-container">
        <div className="header-container">
          <Header
            toggleCalendarVisibility={toggleCalendarVisibility}
            toggleTasksVisibility={toggleTasksVisibility}
            toggleNotesVisibility={toggleNotesVisibility}
          />
        </div>

        {/* None visible */}
        {!isCalendarVisible && !isTasksVisible && !isNotesVisible && (
          <div className="home-container">Nothing is visible!</div>
        )}

        {/* Only Calendar visible */}

        {/* Only Tasks visible */}

        {/* Only Notes visible */}

        {/* Calendar and Tasks visible, Notes hidden */}

        {/* Calendar and Notes visible, Tasks hidden */}
        {isCalendarVisible && !isTasksVisible && isNotesVisible && (
          <div className="home-container">
            <div className="main-container calendar-container">
              <Calendar />
            </div>

            <div className="main-container notes-container">
              <Notes />
            </div>
          </div>
        )}

        {/* Tasks and Notes visible, Calendar hidden */}
        {!isCalendarVisible && isTasksVisible && isNotesVisible && (
          <div className="home-container">
            <div className="section-container main-container tasks-container">
              <Tasks />
            </div>

            <div className="main-container notes-container">
              <Notes />
            </div>
          </div>
        )}

        {/* All three visible */}
        {isCalendarVisible && isTasksVisible && isNotesVisible && (
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
        )}
      </div>
    </>
  );
}

export default Planner;
