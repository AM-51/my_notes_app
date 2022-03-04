import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "../css/App.css";
import ModalNote from "./ModalNote";

function Note({ title, noteContent, date, id, removeNote, note }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClickClose = () => {
    setIsOpen(false);
  };

  function handleRemoveClick() {
    if (window.confirm("Are you sure you want to delete your note?"))
      removeNote(id);
  }

  return (
    <>
      <Paper className="note-paper">
        <div onClick={handleClick} className="note-container">
          <p className="note-title">{title}</p>
          <p className="note-noteContent">{noteContent}</p>
          <p className="note-date">Date created: {date}</p>
        </div>
        <Button className="remove-btn" onClick={handleRemoveClick}>
          <RemoveCircleOutlineIcon className="remove-icon" />
        </Button>
      </Paper>
      {isOpen && (
        <ModalNote
          id={id}
          title={title}
          noteContent={noteContent}
          date={date}
          isOpen={isOpen}
          handleClickClose={handleClickClose}
          note={note}
        />
      )}
    </>
  );
}

export default Note;
