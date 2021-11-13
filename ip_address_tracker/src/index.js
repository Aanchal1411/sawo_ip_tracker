import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const express = require("express");
// const app = express();
// const path = require("path");
// app.use(express.static(path.join(__dirname, "public")));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/public/login.html");
// });
// app.get("/success", (req, res) => {
//   res.sendFile(__dirname + "/public/success.html");
// });
// app.listen("3000", console.log("Listening on port 3000."));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
