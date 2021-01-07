const assert = require('assert');
const { v4: uuid } = require('uuid');
const Teacher = require('../database/models/Teacher');

describe('Creating records in the db', () => {
  it('Adds a teacher to the db', (done) => {
    const Gordon  = new Teacher({
      teacherName: "Gordon",
      teacherId: uuid(),
      studios: []
    });

    Gordon.save()
      .then(() => {
        assert(!Gordon.isNew);
        done();
      });
  })
});