import "./app.css";
import Tasks from "./Components/Tasks";
import Calendar from "./Components/Calendar";
import Notes from "./Components/Notes";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
