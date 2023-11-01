import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import noteService from "./services/notes";


const Note = (props) => {
  const deleteNumber = () => {
    console.log(props.note.id);
    axios
      .delete(`http://localhost:3001/notes/${props.note.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      props.removeNote(props.note.id);
      // props.notes = props.notes.filter(n => n.id !== id)
  };

  return (
    <>
      <li>{props.note.content}</li>
      <button onClick={deleteNumber}> Delete </button>
    </>
  );
};

const App = () => {
  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response.data);
    });
  }, []);

  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: true,
    };

    noteService.create(noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: true }
    console.log(changedNote);
  }

  const removeNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            notes={notes}
            removeNote={removeNote}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit"> Save </button>
      </form>
    </div>
  );
};

export default App;
