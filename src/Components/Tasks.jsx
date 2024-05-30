import React, { useState } from "react";
import "./tasks.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiMiniPlusCircle } from "react-icons/hi2";

function Tasks() {
  const [allTasksComplete, setAllTasksComplete] = useState(true);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskSubtasks, setNewTaskSubtasks] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = {
      title: newTaskTitle,
      subtasks: newTaskSubtasks,
      details: newTaskDetails,
    };
    setAllTasksComplete(false);
    setTasks([...tasks, newTask]);
    // Reset input fields after adding task
    setNewTaskTitle("");
    setNewTaskSubtasks("");
    setNewTaskDetails("");
    setIsAddingTask(false);
  };

  return (
    <>
      <div className="tasks-parent">
        <div className="tasks-component tasks-header">
          <div className="tasks-header-title">
            <h1>Judith's Tasks</h1>
          </div>

          <div className="tasks-header-icon">
            <BsThreeDotsVertical size="25" />
          </div>
        </div>

        <div
          className="tasks-component add-a-task-container"
          onClick={() => {
            handleAddTask();
            setIsAddingTask(true);
          }}
        >
          <div className="add-a-task-icon">
            <HiMiniPlusCircle size="23" />
          </div>

          <div className="add-a-task-text">
            <h3>Add a Task</h3>
          </div>
        </div>

        <div className="tasks-component tasks-main">
          {allTasksComplete && <p>All Tasks Complete!</p>}

          {isAddingTask && (
            <div className="task-item-container">
              <div className="task-item task-item-title">
                <div className="task-icon task-title-icon"></div>

                <input
                  className="task-input input-title"
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="Title"
                />

                <div className="task-icon task-title-icon"></div>
              </div>

              <div className="task-item task-item-subtasks">
                <div className="task-icon"></div>

                <input
                  className="task-input"
                  type="text"
                  value={newTaskSubtasks}
                  onChange={(e) => setNewTaskSubtasks(e.target.value)}
                  placeholder="Subtasks"
                />

                <div className="task-icon task-title-icon"></div>
              </div>

              <div className="task-item task-item-details">
                <div className="task-icon"></div>

                <input
                  className="task-input"
                  type="text"
                  value={newTaskDetails}
                  onChange={(e) => setNewTaskDetails(e.target.value)}
                  placeholder="Details"
                />

                <div className="task-icon task-title-icon"></div>
              </div>

              <div className="task-item task-item-datetime">
                <div className="task-icon"></div>

                <input
                  className="task-input"
                  type="text"
                  value={newTaskDetails}
                  onChange={(e) => setNewTaskDetails(e.target.value)}
                  placeholder="Date/Time"
                />

                <div className="task-icon task-title-icon"></div>
              </div>
            </div>
          )}
        </div>

        <div className="tasks-component tasks-archive"></div>
      </div>
    </>
  );
}

export default Tasks;
