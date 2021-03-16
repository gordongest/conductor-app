const assert = require('assert');
const Teacher = require('../database/models/Teacher');

describe('Virtual types', () => {

  // REFACTORED, NOT USING HOOK
  // let Gordon;

  // beforeEach((done) => {
  //   Gordon = new Teacher({
  //     teacherName: "Gordon",
  //     studios: [{ studioName: 'test' }]
  //   });

  //   Gordon.save()
  //     .then(() => done());
  // });

  it('studioCount returns number of studios', done => {
    const Gordon = new Teacher({
      teacherName: "Gordon",
      newStudios: []
    });

    Gordon.save()
      .then(() => Teacher.findOne({ teacherName: 'Gordon' }))
      .then(teacher => {
        teacher.newStudios.push({ studioName: 'test' });
        return teacher.save()
      })
      .then(teacher => {
        assert(teacher.studioCount === 1);
        done();
      });
  });
});