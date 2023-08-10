const express = require("express");3
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Init page');
});

app.all('/about', (req, res) => {
  res.send('about page');
});

app.get('/profile', (req, res) => {
  res.send('profile page');
});

app.use((req, res, next) => {
  if (req.query.login === 'jesus') {
    next()
  } else {
    res.send('No Autorized');
  }
});

app.get('/dashboard', (req, res) => {
  res.send('dashboard page');
});

app.listen(3000);
console.log("Server on Port 3000");