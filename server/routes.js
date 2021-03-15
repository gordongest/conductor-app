const Controllers = require('../database/controllers');

module.exports = (app) => {
  // watch for incoming requests to endpoints at
  // http://localhost:3001

  app.get('/greeting', Controllers.greeting)

  app.get('/', Controllers.getStudios);

  app.get('/:select', Controllers.getStudents)

  app.post('/teacher', Controllers.addStudio)

  app.post('/addAssignment', Controllers.addAssignment)

  app.put('/removeAssignment', Controllers.removeAssignment)

  app.put('/updateAssignments', Controllers.updateAssignments)

};