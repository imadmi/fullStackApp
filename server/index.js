// import http from 'http'

const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>vrai</h1>");
  //   console.log(request);
});

app.get("/notes", (request, response) => {
  response.json(notes);
  //   console.log(request);
});

app.get("/notes/:id", (request, response) => {
  const id = Number(request.params.id);

//   response.json(notes[id - 1]);
    console.log(id);
    const note = notes.find((note) => {
      return note.id === id;
    });
  //   console.log(note);
    response.json(note);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
