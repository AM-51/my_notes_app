import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "../css/App.css";
import Note from "./Note";

function Form({ addNote, id, isModal }) {
  const [note, setNote] = useState({
    title: "",
    noteContent: "",
    date: null,
    id: null,
  });
  const [noteContentError, setNoteContentError] = useState(false);

  function handleAddClick(event) {
    event.preventDefault();
    setNoteContentError(false);

    if (note.noteContent === "") {
      setNoteContentError(true);
    } else {
      !isModal && addNote(note);
      setNote({
        title: "",
        noteContent: "",
        date: null,
        id: null,
      });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const nowDate = Date.now();
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value,
        date: moment(nowDate).format("MMM Do YY, h:mm a"),
        id: uuidv4(),
      };
    });
    <Note note={note} />;
  }

  return (
    <Paper elevation={3} className="form-paper">
      <form className="form">
        <TextField
          variant="standard"
          onChange={handleChange}
          name="title"
          value={note.title}
          label="Title (*max 15 characters)"
          fullWidth
          margin="dense"
          inputProps={{ maxLength: 15 }}
        />
        <TextField
          variant="standard"
          required
          error={noteContentError}
          onChange={handleChange}
          name="noteContent"
          value={note.noteContent}
          label="My Note"
          fullWidth
          multiline
          rows={5}
        />
        <Button onClick={handleAddClick}>
          <AddCircleOutlineIcon className="add-icon"></AddCircleOutlineIcon>
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
