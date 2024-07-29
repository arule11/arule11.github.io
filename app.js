const express = require("express");
const path = require('path');
// const http = require('http')
const app = express();

const PORT = 2233;

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/testing/index.html');
// });

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
  console.log("🍓🍓 listening on 🍓🍓 " + PORT);
});