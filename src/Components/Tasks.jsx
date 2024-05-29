import React, { useState } from "react";
import "./tasks.css";
// import { BsThreeDotsVertical } from "react-icons/bs";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    subtasks: "",
    details: "",
  });
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleAddTask = () => {
    if (newTask.title.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({ title: "", subtasks: "", details: "" });
      setIsAddingTask(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const toggleAddTask = () => {
    setIsAddingTask(!isAddingTask);
  };

  return (
    <>
      <div className="tasks-parent">
        <div className="tasks-component tasks-header">
          <div className="tasks-header-title"></div>
          <div className="tasks-header-icon">
            {/* <BsThreeDotsVertical /> */}
          </div>
        </div>

        <div className="tasks-component add-a-task">
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            placeholder="Add a task"
            className="task-input"
            onClick={toggleAddTask}
          />
          {isAddingTask && (
            <div className="task-details">
              <input
                type="text"
                name="subtasks"
                value={newTask.subtasks}
                onChange={handleInputChange}
                placeholder="Enter subtasks (comma separated)"
                className="task-subinput"
              />
              <textarea
                name="details"
                value={newTask.details}
                onChange={handleInputChange}
                placeholder="Enter task details"
                className="task-details-textarea"
              />
              <button onClick={handleAddTask} className="add-task-button">
                Add a Task
              </button>
            </div>
          )}
        </div>

        <div className="tasks-component tasks-main">
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <div className="task-title">{task.title}</div>
                {task.subtasks && (
                  <div className="task-subtasks">Subtasks: {task.subtasks}</div>
                )}
                {task.details && (
                  <div className="task-details">Details: {task.details}</div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="tasks-component tasks-archive"></div>
      </div>
    </>
  );
}

export default Tasks;
