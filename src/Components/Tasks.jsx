import React, { useState } from "react";
import "./tasks.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { FaRegCircle, FaPlus } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";
import { FaRepeat } from "react-icons/fa6";
import { IoFlagOutline } from "react-icons/io5";

function Tasks() {
  const [allTasksComplete, setAllTasksComplete] = useState(true);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskSubtasks, setNewTaskSubtasks] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleAddBlankTask = () => {
    // const newTask = {
    //   title: newTaskTitle,
    //   subtasks: newTaskSubtasks,
    //   details: newTaskDetails,
    // };
    setAllTasksComplete(false);
    // setTasks([...tasks, newTask]);
    // Reset input fields after adding task
    setNewTaskTitle("");
    setNewTaskSubtasks("");
    setNewTaskDetails("");
    setIsAddingTask(false);
  };

  const handleAddFilledTask = () => {
    const newTask = {
      title: newTaskTitle,
      subtasks: newTaskSubtasks,
      details: newTaskDetails,
    };

    setTasks([...tasks, newTask]);

    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Add the new task to the tasks array
      setNewTaskTitle(""); // Clear the input field
    }
  };

  const handleInputChange = (event) => {
    setNewTaskTitle(event.target.value);
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
            handleAddBlankTask();
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
          {allTasksComplete && <p>No tasks to do!</p>}

          {isAddingTask && (
            <div className="task-item-container">
              <div className="task-item task-item-title">
                <div className="task-icon task-title-icon">
                  <FaRegCircle />
                </div>

                <input
                  className="task-input input-title"
                  type="text"
                  value={newTaskTitle}
                  placeholder="Title"
                  onChange={handleInputChange}
                />

                <div className="task-icon task-title-icon">
                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="task-item task-item-details">
                <div className="task-icon">
                  <CgDetailsMore size="20" />
                </div>

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
                <div className="task-icon">
                  <MdDateRange size="20" />
                </div>

                <input
                  className="task-input"
                  type="text"
                  value={newTaskDetails}
                  onChange={(e) => setNewTaskDetails(e.target.value)}
                  placeholder="Date/Time"
                />

                <div className="task-icon task-title-icon">
                  <FaRepeat />
                </div>
              </div>

              <div className="priority-and-button-container">
                <div className="priority-container">
                  <div className="priority-icon-container">
                    <IoFlagOutline size="22" />
                  </div>

                  <div className="priority-input-container">
                    <input
                      className="task-input priority-input"
                      type="text"
                      value={newTaskDetails}
                      placeholder="Priority"
                    />
                  </div>
                </div>
                <div className="add-task-button-container">
                  <button className="add-task-button">Add task</button>
                </div>
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
