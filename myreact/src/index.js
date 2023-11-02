import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import axios from 'axios'




// const notes = [
  //   {
    //     id: 1,
    //     content: "HTML is easy",
    //     important: true,
    //   },
    //   {
      //     id: 2,
      //     content: "Browser can execute only JavaScript",
      //     important: false,
      //   },
      //   {
        //     id: 3,
        //     content: "GET and POST are the most important methods of HTTP protocol",
        //     important: true,
//   },
// ];

// var notes = [];
//   axios.get('http://localhost:3001/notes')
//   .then(response => {
//    notes = response.data;
   
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
  
  // })
  // .catch(error => {
  //   console.error('An error occurred:', error);
  // });


// reportWebVitals();
