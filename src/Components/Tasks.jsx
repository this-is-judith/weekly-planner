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
            <div className="task-item">
              <div className="task-item-title"></div>
              <div className="task-item-subtasks"></div>
              <div className="task-item-details"></div>
              <div className="task-item-datetime"></div>
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Task title"
              />
              <input
                type="text"
                value={newTaskSubtasks}
                onChange={(e) => setNewTaskSubtasks(e.target.value)}
                placeholder="Subtasks"
              />
              <input
                type="text"
                value={newTaskDetails}
                onChange={(e) => setNewTaskDetails(e.target.value)}
                placeholder="Details"
              />
              <button onClick={handleAddTask}>Add Task</button>
            </div>
          )}
        </div>

        <div className="tasks-component tasks-archive"></div>
      </div>
    </>
  );
}

export default Tasks;
