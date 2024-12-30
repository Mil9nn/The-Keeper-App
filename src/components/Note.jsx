import React, { useState } from "react";
import Form from "./Form";
import DeleteIcon from "@mui/icons-material/Delete";

function Note() {
  const [myNote, setMyNote] = useState([]);

  function deleteNote(index) {
    setMyNote((prevNotes) => {
      const updateNotes = [...prevNotes];
      updateNotes.splice(index, 1);
      return updateNotes;
    });
  }

  return (
    <>
      <Form setMyNote={setMyNote} />
      <div className="note-section">
        {myNote.map((note, index) => {
          return (
            <div className="note" key={index}>
              <h1>{note.title}</h1>
              <p>{note.note}</p>
              <button
                className="delete-note-btn"
                onClick={() => {
                  deleteNote(index);
                }}
              >
                <DeleteIcon fontSize="large" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Note;
