import Tasks from "./Components/Tasks";
import Calendar from "./Components/Calendar";
import Notes from "./Components/Notes";

function App() {
  return (
    <>
    <div className="tasks-container">
      <Tasks />


    </div>

    <div className="calendar-container">
    <Calendar />
    </div>

    <div className="notes-container">
    <Notes />
    </div>
    </>
  );
}

export default App;
