require('dotenv').config()
const express = require("express");
const app = express();

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log("Application started and Listening on port");
});

app.get("/", (req, res) => {
  res.write("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
});