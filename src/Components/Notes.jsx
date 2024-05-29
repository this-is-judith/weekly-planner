import React, { useState } from "react";
import "./notes.css";

function Notes() {
  // State to manage the content of the textarea
  const [note, setNote] = useState("");

  // Function to handle changes in the textarea
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <>
      <div className="notes-parent">
        <div className="notes-component notes-textarea">
          <textarea
            className="textarea"
            value={note}
            onChange={handleNoteChange}
            placeholder="Write your notes here..."
          />
        </div>

        <div className="notes-component notes-archive">Notes Archive</div>
      </div>
    </>
  );
}

export default Notes;
