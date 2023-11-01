import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Note = (props) => {
  return <li>{props.note.content}</li>;
};

const App = () => {
  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState("a new note...");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);

  console.log("render", notes.length, "notes");


  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: true,
    }
  
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response)
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
