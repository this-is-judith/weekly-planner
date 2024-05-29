import "./app.css";
import Tasks from "./Components/Tasks";
import Calendar from "./Components/Calendar";
import Notes from "./Components/Notes";

function App() {
  return (
    <>
      <div className="home-container">
        <div className="main-container tasks-container">
          <Tasks />
        </div>

        <div className="main-container">
          <div className="calendar-container">
            <Calendar />
          </div>

          <div className="notes-container">
            <Notes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
