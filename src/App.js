import "./app.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Calendar from "./Components/Calendar";
import Notes from "./Components/Notes";

function App() {
  // States for Tasks, Calendar and Notes visibility
  // None visible
  // Only Calendar visible
  // Only Tasks visible
  // Only Notes visible
  // Calendar and Tasks visible, Notes hidden
  // Calendar and Notes visible, Tasks hidden
  // Tasks and Notes visible, Calendar hidden
  // All three visible

  return (
    <>
      <div className="page-container">
        <div className="header-container">
          <Header />
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
    </>
  );
}

export default App;
