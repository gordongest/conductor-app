const Controllers = require('../database/controllers');

module.exports = (app) => {
  // listening for incoming requests to endpoints at
  // http://localhost:3001

  // for testing purposes
  app.get('/test', Controllers.greeting)

  // get all studios of current teacher/student
  app.get('/', Controllers.getStudios);

  // get all students from selected studio
  app.get('/:select', Controllers.getStudents)

  // add studio for selected teacher
  app.post('/teacher', Controllers.addStudio)

  // add assignment for selected student
  app.post('/addAssignment', Controllers.addAssignment)

  // remove assignment for selected student
  app.put('/removeAssignment', Controllers.removeAssignment)

  // update assignment for selected student
  app.put('/updateAssignments', Controllers.updateAssignments)
};