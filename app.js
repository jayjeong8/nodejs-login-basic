const express = require('express');
const session = require('express-session');
const path = require('path');

const authRouter = require('./routes/auth');
const homeRouter = require('./routes/home');

const app = express();

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/auth', authRouter);
app.use('/home', homeRouter);

app.listen(3000, () => {
  console.log('서버 동작중');
});