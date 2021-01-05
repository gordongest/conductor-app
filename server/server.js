const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const queries = require('./queries');

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

const MONGODB_URI = 'mongodb+srv://mvp-app:mach4*Carmen@mvp-cluster.qrhdl.mongodb.net/mvp-db?retryWrites=true&w=majority';
const LOCAL_DB = 'mongodb://localhost/mvp_db';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connection open for mvp_db...'))
.catch(err => console.log('ERROR:', err));

app.get('/', async (req, res) => {
  try {
    await queries.getTeachers()
      .then( response => res.status(200).send(response) )
  } catch(err) {
    console.log('ERROR:', err);
    res.json({ msg: err.message })
  }
})

app.post('/teacher/', async (req, res) => {
  try {
    await queries.addStudio(req.body.teacherName, req.body)
  } catch(err) {
    console.log('ERR:', err);
    res.json({ msg: err.message })
  }
})

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
});