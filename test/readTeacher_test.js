const assert = require('assert');
const { v4: uuid } = require('uuid');
const Teacher = require('../models/Teacher');

describe('Reading records in the db', () => {
  let Gordon;

  beforeEach((done) => {
    Gordon = new Teacher({
      teacherName: "Gordon",
      teacherId: uuid(),
      studios: []
    });

    Gordon.save()
      .then(() => done());
  });

  it('Finds all teachers with a name of Gordon', (done) => {
    Teacher.find({ teacherName: "Gordon" })
      .then(teachers => {
        assert(teachers.length !== 0)
      });
      done();
  });

  it('Finds a teacher with a particular id', (done) => {
    Teacher.findOne({ teacherId: Gordon.teacherId })
      .then(teacher => {
        assert(teacher.teacherName === Gordon)
      });
      done();
  });
});