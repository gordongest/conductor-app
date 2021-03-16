const assert = require('assert');
const request = require('supertest');
const app = require('../server/app');

describe('Express app', () => {
  it('Responds to GET requests at /test', done => {
    request(app)
      .get('/test')
      .end((err, response) => {
        assert(response.body.request === 'served');
        done();
      });
  });
});