const assert = require('assert');
const { v4: uuid } = require('uuid');
const Teacher = require('../models/Teacher');

describe('Updating records in db', () => {
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

  const assertName = (promise, update, done) => {
    promise
      .then(() => Teacher.find({  }))
      .then(teachers => {
        assert(teachers.length === 1);
        assert(teachers[0].teacherName === update);
        done();
      });
  }

  it('Updates using set/save method', (done) => {
    const update = 'Nodrog';
    Gordon.set('teacherName', update);
    assertName(Gordon.save(), update, done);
  })

  it('Updates using model update function', (done) => {
    const update = 'Dorgon';
    assertName(Gordon.updateOne({ teacherName: update }), update, done);
  })

  it('Updates using model class', (done) => {
    const update = 'Dogron';
    assertName(
      Teacher.updateOne({ teacherName: 'Gordon' }, { teacherName: update }),
      update,
      done
    );
  });

  it('Can update one record', (done) => {
    const update = 'Rognod';
    assertName(
      Teacher.findOneAndUpdate({ teacherName: 'Gordon' }, { teacherName: update }),
      update,
      done
    );
  });

  it('Can find a record with a MongoDB _id and update', (done) => {
    const update = 'Goornd';
    assertName(
      Teacher.findByIdAndUpdate(Gordon._id, { teacherName: update }),
      update,
      done
    );
  });
});