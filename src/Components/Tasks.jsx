import React from "react";
import "./tasks.css";

function Tasks() {
  return (
    <>
      <div className="tasks-parent">
        <div className="tasks-component tasks-header"></div>
        <div className="tasks-component add-a-task"></div>
        <div className="tasks-component tasks-main"></div>
        <div className="tasks-component tasks-archive"></div>
      </div>
    </>
  );
}

export default Tasks;
