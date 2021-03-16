const assert = require('assert');
const Teacher = require('../database/models/Teacher');
const { Studio } = require('../database/models/Studio');

describe('Middleware', () => {
  let Gordon, hehs;

  beforeEach((done) => {
    Gordon = new Teacher({ teacherName: 'Gordon' });
    hehs = new Studio({ studioName: 'HEHS', location: 'Hoffman Estates, IL', days: [ 'Wednesday' ] });

    Gordon.studios.push(hehs);

    Promise.all([Gordon.save(), hehs.save()])
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