const Teacher = require('./models/Teacher');
const Studio = require('./models/Studio');
const Student = require('./models/Student');
const helpers = require('./helpers');

module.exports = {
  greeting(req, res) {
    console.log('ding')
    res.send({ request: 'served' })
  },

  getStudios(req, res, next) {
    Studio.find({})
      .then(studios => res.status(200).send(studios))
      .catch(next);
  },

  getStudents(req, res, next) {
    Student.find({ studio: req.params.select })
      .then(students => res.status(200).send(students))
      .catch(next);
  },

  addStudio(req, res, next) {
    const { teacherId } = req.body,
          query = { teacherId: teacherId },
          newStudio = helpers.makeNewStudio(req.body);

    Teacher.findOne(query)
      .exec()
      .then(teacher => {
        teacher.studios.push(newStudio);
        return teacher.save()
      })
      .then(response => res.status(201).send(response))
      .catch(next);
  },

  addStudent(/*studioId, data*/ req, res, next) {
    const { teacherId } = req.body,
          query = { teacherId: teacherId },
          newStudent = helpers.makeNewStudent(req.body);

    console.log(query, newStudent);

    // Studio.findOne(query)
    //   .exec()
    //   .then(studio => {
    //     studio.students.push(student);
    //     studio.save();
    //     return;
    //   })
  },

  async addAssignment(req, res, next) {
    const { _id } = req.body;
    const assignment = helpers.makeNewAssignment(req.body);
    const student = await Student.findOne({ _id })

    student.assignments.push(assignment);
    student.save()
      .then(response => {
        console.log(response);
        res.status(201).send(response)
      })
      .catch(next);
  },

  async removeAssignment(req, res, next) {
    const { _id, assignment_id } = req.body;
    const student = await Student.findOne({ _id })

    student.assignments.remove({ _id: assignment_id })
    student.save()
      .then(response => res.status(201).send(response))
      .catch(next);
  },

  async updateAssignments(req, res, next) {
    const { _id, assignments } = req.body;
    const student = await Student.findOne({ _id })

    student.assignments = assignments;
    student.save()
      .then(response => res.status(201).send(response))
      .catch(next);
  }
};