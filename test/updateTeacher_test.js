const assert = require('assert');
const { v4: uuid } = require('uuid');
const Teacher = require('../database/models/Teacher');

describe('Updating records in db', () => {
  let Gordon;

  beforeEach((done) => {
    Gordon = new Teacher({
      teacherName: "Gordon",
      teacherId: uuid(),
      studios: [{ studioName: 'test' }]
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

  it('Can add a subdocument to the document', (done) => {
    Teacher.findOne({ teacherName: 'Gordon' })
      .then(teacher => {
        teacher.studios.push({ studioName: 'RMHS' });
        return teacher.save();
      })
      .then(Teacher.findOne({ teacherName: 'Gordon' }))
      .then(teacher => {
        assert(teacher.studios[1].studioName === 'RMHS');
        done();
      });
  });

  it('Can remove an existing subdocument', (done) => {
    const Nodrog = new Teacher({
      teacherName: "Nodrog",
      teacherId: uuid(),
      studios: [ {studioName: 'test'} ]
    });

    Nodrog.save()
      .then(Teacher.findOne({ teacherName: 'Nodrog' }))
      .then(teacher => {
        const studio = teacher.studios[0];
        teacher.studios.remove(studio);
        return teacher.save();
      })
      .then(Teacher.findOne({ teacherName: 'Nodrog' }))
      .then(teacher => {
        assert(teacher.studios.length === 0);
        done();
      });
  });

});