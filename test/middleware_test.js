const assert = require('assert');
const Teacher = require('../database/models/Teacher');
const { Studio } = require('../database/models/Studio');

describe('Middleware', () => {
  let Gordon, HEHS;

  beforeEach(done => {
    Gordon = new Teacher({ teacherName: 'Gordon' });
    HEHS = new Studio({ studioName: 'HEHS', location: 'Hoffman Estates, IL', days: [ 'Wednesday' ] });

    Gordon.studios.push(HEHS);

    Promise.all([Gordon.save(), HEHS.save()])
      .then(() => done());
  });

  it('Teachers clean up dangling studios on delete', done => {
    Gordon.remove()
      .then(() => Studio.countDocuments())
      .then(count => {
        assert(count === 0);
        done();
      });
  });
});