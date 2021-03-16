const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// eslint-disable-next-line no-undef
before(done => {
  mongoose.connection
    .once('open', () => console.log('Connected for tests...'), done())
    .on('error', err => {
      console.warn('ERROR:', err);
    });
});

beforeEach(done => {
  const { teachers, studios, students } = mongoose.connection.collections;
  teachers.drop(() => {
    studios.drop(() => {
      students.drop(() => {
        done();
      })
    })
  });
});