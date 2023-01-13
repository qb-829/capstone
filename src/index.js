import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// const express = require("express")
// const app = express()
const port = 3000;
// const cors = require("cors");

// app.use(express.urlencoded({ extended: true}))
// app.use(express.json())
// app.use(cors())

// app.get


// app.listem(port, () => {
//   console.log(`Listening at http://localhost:${port}`)
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

