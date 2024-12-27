import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Form({ setMyNote }) {
  const [text, setText] = useState({
    title: "",
    note: "",
  });

  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setText((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    setMyNote((prevValues) => {
      return [...prevValues, text];
    });

    setText({ title: "", note: "" });
  }

  function focus() {
    setIsDisplayed(true);
  }

  return (
    <form id="form">
      <div className="form-input">
        <input
          onClick={focus}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          style={{ display: isDisplayed ? "block" : "none" }}
          onChange={handleChange}
          type="text"
          name="note"
          placeholder="Take a note..."
          value={text.note}
          required
        ></textarea>
      </div>
      {/* Floating Action Button */}
      <Fab
        className="add-btn"
        size="small"
        color="secondary"
        aria-label="add"
        style={{ display: isDisplayed ? "block" : "none" }}
        onClick={handleClick}
        type="submit"
      >
        <AddIcon />
      </Fab>
    </form>
  );
}

export default Form;
