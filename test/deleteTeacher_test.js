const assert = require('assert');
const { v4: uuid } = require('uuid');
const Teacher = require('../database/models/Teacher');

describe('Deleting records from the db', () => {
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

  it('Removes using model instance', (done) => {
    Gordon.remove()
      .then(() => Teacher.findOne({ teacherName: "Gordon" }))
      .then(teacher => {
        assert(teacher === null);
        done();
      });
  });

  it('Removes using class instance', (done) => {
    Teacher.deleteMany({ teacherName: 'Gordon' })
      .then(() => Teacher.findOne({ teacherName: "Gordon" }))
      .then(teacher => {
        assert(teacher === null);
        done();
      });
  });

  it('Removes using findOneAndDelete', (done) => {
    Teacher.findOneAndDelete({ teacherName: 'Gordon' })
      .then(() => Teacher.findOne({ teacherName: "Gordon" }))
      .then(teacher => {
        assert(teacher === null);
        done();
      });
  });

  it('Removes using findByIdAndDelete', (done) => {
    Teacher.findByIdAndDelete(Gordon._id)
      .then(() => Teacher.findOne({ teacherName: "Gordon" }))
      .then(teacher => {
        assert(teacher === null);
        done();
      });
  });

});