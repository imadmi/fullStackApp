import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Note = (props) => {

  // const toggleImportanceOf = id => {
  //   const url = `http://localhost:3001/notes/${id}`
  //   const note = notes.find(n => n.id === id)
  //   const changedNote = { ...note, important: !note.important }
  
  //   axios.put(url, changedNote).then(response => {
  //     setNotes(notes.map(n => n.id !== id ? n : response.data))
  //   })
  // }
  
  return (
    <>
      <li>{props.note.content}</li>
      {/* <button onClick={toggleImportanceOf({props.note.id})}> impo </button> */}
    </>
  );
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
        setNotes(notes.concat(response.data))
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  
  const putrec = () => {  
    axios.put("http://localhost:3001/notes/5", {
      content: "edited using put requist",
      important: true,
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  } 
  
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
      <button onClick={putrec}> putrec</button>
    </div>
  );
};

export default App;
