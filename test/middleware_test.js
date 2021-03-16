const assert = require('assert');
const Teacher = require('../database/models/Teacher');
const Studio = require('../database/models/Studio');

describe('Middleware', () => {
  let gordon, hehs;

  beforeEach((done) => {
    gordon = new Teacher({ teacherName: 'Gordon' });
    hehs = new Studio({ studioName: 'HEHS', location: 'Hoffman Estates, IL', days: [ 'Wednesday' ] });

    gordon.newStudios.push(hehs);

    Promise.all([gordon.save(), hehs.save()])
      .then(() => done());
  });

  it('Teachers clean up dangling studios on remove', done => {
    gordon.remove()
      .then(() => Studio.countDocuments())
      .then(count => {
        assert(count === 0);
        done();
      });
  });



});