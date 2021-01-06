const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

before((done) => {
  mongoose.connection
    .once('open', () => console.log('Connected for tests...'), done())
    .on('error', err => {
      console.warn('ERROR:', err);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.teachers.drop();
  done();
});