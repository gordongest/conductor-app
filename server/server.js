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

mongoose.connect('mongodb://localhost:27017/mvp_db', {
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

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
});