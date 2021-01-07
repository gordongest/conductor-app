const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const queries = require('../database/queries');

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

const LOCAL_DB = 'mongodb://localhost/mvp_test';

mongoose.connect(LOCAL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connection open for mvp_test...'))
.catch(err => console.log('ERROR:', err));

app.get('/', async (req, res) => {
  try {
    console.log('hit')
    queries.getStudios()
      .then(response => res.status(200).send(response));
  } catch(err) {
    console.log('ERROR:', err);
    res.json({ msg: err.message })
  }
})

app.get('/:select', async (req, res) => {
  try {
    await queries.getStudents(req.params.select)
      .then(response => res.status(200).send(response));
  } catch(err) {
    console.log('ERROR:', err);
    res.json({ msg: err.message })
  }
})

app.post('/teacher/', async (req, res) => {
  try {
    await queries.addStudio(req.body.teacherId, req.body)
      .then(response => res.status(201).send(response));
  } catch(err) {
    console.log('ERR:', err);
    res.json({ msg: err.message });
  }
});

app.post('/addAssignment', async (req, res) => {
  try {
    queries.addAssignment(req.body)
      .then(response => res.status(201).send(response));
  } catch(err) {
    console.log('ERR:', err);
    res.json({ msg: err.message });
  }
});

app.put('/removeAssignment', async (req, res) => {
  try {
    queries.removeAssignment(req.body)
      .then(response => res.status(200).send(response));
  } catch(err) {
    console.log('ERR:', err);
    res.json({ msg: err.message });
  }
});

app.put('/updateAssignments', async (req, res) => {
  try {
    queries.updateAssignments(req.body)
      .then(response => console.log(reponse));
  } catch(err) {
    console.log('ERR:', err);
    res.json({ msg: err.message });
  }
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
});