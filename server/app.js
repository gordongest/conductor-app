const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const LOCAL_DB = 'mongodb://localhost/mvp_test';

mongoose.connect(LOCAL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connection open for mvp_test...'))
.catch(err => console.log('ERROR:', err));

app.use(cors());
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use((err, req, res, next) => {
  res.status(422).send({ err: err.message })
});

routes(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;