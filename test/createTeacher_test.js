const assert = require('assert');
const { nanoid } = require('nanoid');
const Teacher = require('../database/models/Teacher');

describe('Creating records in the db', () => {
  it('Adds a teacher to the db', (done) => {
    const Gordon  = new Teacher({
      teacherName: "Gordon",
      teacherId: nanoid(),
      studios: []
    });

    Gordon.save()
      .then(() => {
        assert(!Gordon.isNew);
        done();
      });
  });
});