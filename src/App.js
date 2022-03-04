import { useState } from "react";
import Form from "./components/Form";
import Note from "./components/Note";
import "./css/App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((preNotes) => {
      return [...preNotes, note];
    });
  }

  function removeNote(id) {
    setNotes((preNotes) => preNotes.filter((note) => note.id !== id));
  }

  return (
    <div>
      <div className="title-container">
        <h1>My Notes</h1>
      </div>
      <Form addNote={addNote} />
      {notes.map((note) => (
        <Note
          id={note.id}
          key={note.id}
          removeNote={removeNote}
          title={note.title}
          noteContent={note.noteContent}
          date={note.date}
        />
      ))}
    </div>
  );
}

export default App;
