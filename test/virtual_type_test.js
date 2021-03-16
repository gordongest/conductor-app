const assert = require('assert');
const Teacher = require('../database/models/Teacher');
const { nanoid } = require('nanoid');

describe('Virtual types', () => {

  // let Gordon;

  // beforeEach((done) => {
  //   Gordon = new Teacher({
  //     teacherName: "Gordon",
  //     teacherId: nanoid(),
  //     studios: [{ studioName: 'test' }]
  //   });

  //   Gordon.save()
  //     .then(() => done());
  // });

  it('studioCount returns number of studios', (done) => {
    const Gordon = new Teacher({
      teacherName: "Gordon",
      teacherId: nanoid(),
      studios: [{ studioName: 'test' }]
    });

    Gordon.save()
      .then(() => Teacher.findOne({ teacherName: 'Gordon' }))
      .then(teacher => {
        assert(Gordon.studioCount === 1);
        done();
      });
  });

});