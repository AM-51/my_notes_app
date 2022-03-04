import * as React from "react";
import Modal from "@mui/material/Modal";
import { Button, Paper } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function ModalNote(props) {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClickClose}
      className="modal-container"
    >
      <Paper elevation={20} className="popup-container">
        <p className="note-title">{props.title}</p>
        <p className="note-noteContent">{props.noteContent}</p>
        <p className="note-date">Date created: {props.date}</p>
        <div className="modal-btn-container">
          <Button onClick={props.handleClickClose}>
            <CheckCircleOutlineIcon className="confirm-icon" />
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}
