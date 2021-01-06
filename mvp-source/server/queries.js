const Teacher = require('../models/Teacher');
const { v4: uuid } = require('uuid');
const mongoose = require('mongoose');
const db = mongoose.connection;

const getTeachers = () => {
  return Teacher.find({ teacherName: "Gordon Gest" })
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
    "name": data.name,
    "studentId": uuid(),
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
        "instructorNotesBody": ""
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
    'assignmentId': data.assignmentId,
    'tempo': Number(data.tempo),
    'dueDate': data.dueDate,
    'completed': false,
    'notes': data.notes
  }

  return newAssignment;
}

const addAssignment = (data) => {

  // NEED:
    // teacherName/teacherId
    // studioId
    // studentId

  // call Teacher.findOne
    // iterate through teacher.studios until studioId matches
      // iterate through studio.students until studentId matches
        // push data (should be array of assignments) to student.assignments
        // save and return

  const query = { teacherId: data.teacherId };
  const assignment = makeNewAssignment(data);

  Teacher.findOne(query)
    .then(teacher => {
      for (let i = 0; i < teacher.studios.length; i++) {
        let currentStudio = teacher.studios[i];
        if (currentStudio.studioId === data.studioId) {
          for (let j = 0; j < currentStudio.students.length; j++) {
            let currentStudent = currentStudio.students[j];
            if (currentStudent.studentId === data.studentId) {
              currentStudent.assignments.push(assignment);
              teacher.save();
            }
          }
        }
      }
    })
    .catch(err => console.log('ERR:', err));

    return Teacher.findOne(query);
};

module.exports = {
  getTeachers, addStudio, addStudent, addAssignment
};