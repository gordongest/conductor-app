const Teacher = require('./models/Teacher');
const Studio = require('./models/Studio');
const Student = require('./models/Student');
const { v4: uuid } = require('uuid');
const mongoose = require('mongoose');
const db = mongoose.connection;

const getStudios = () => {
  return Studio.find({})
}

const getStudents = (_id) => {
  return Student.find({ studio: _id })
}

const makeNewStudio = (data) => {
  const newStudio = {
    "studioName": data.studioName,
    "studioId": uuid(),
    "location": data.location,
    "size": 0,
    "days": data.days,
    "students": []
  }

  return newStudio;
}

const addStudio = (teacherId, data) => {
  const query = { teacherId: teacherId },
        studio = makeNewStudio(data);

  Teacher.findOne(query)
    .exec()
    .then(teacher => {
      teacher.studios.push(studio);
      teacher.save();
      return;
    })
    .catch(err => console.log('ERR:', err))
}

const makeNewStudent = (data) => {
  const newStudent = {
    "studentName": data.name,
    "age": data.age,
    "level": data.level,
    "assignments": [],
    "goals": [
      {
        "goalTitle": "",
        "goalBody": ""
      }
    ],
    "instructorNotes": [
      {
        "body": ""
      }
    ]
  }

  return newStudent;
}

const addStudent = (studioId, data) => {
  const query = {},
        student = makeNewStudent(data);

  // Studio.findOne(query)
  //   .exec()
  //   .then(studio => {
  //     studio.students.push(student);
  //     studio.save();
  //     return;
  //   })
}

const makeNewAssignment = (data) => {
  const newAssignment = {
    'title': data.title,
    'tempo': Number(data.tempo),
    'dueDate': data.dueDate,
    'completed': false,
    'notes': data.notes
  }

  return newAssignment;
}

const addAssignment = async (data) => {
  const _id = data.studentId;
  const assignment = makeNewAssignment(data);

  const student = await Student.findOne( {_id} )

  student.assignments.push(assignment);
  return student.save();
};

const removeAssignment = async (data) => {
  const { student_id, assignment_id } = data;
  const student = await Student.findOne({ _id: student_id })

  student.assignments.remove({ _id: assignment_id })
  return student.save();
}

const updateAssignments = async (data) => {
  const { student_id, assignments } = data;
  const student = await Student.findOne({ _id: student_id })

  student.assignments = assignments;
  return student.save();
}

module.exports = {
  getStudios, getStudents, addStudio, addStudent, addAssignment, removeAssignment, updateAssignments
};