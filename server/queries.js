const Teacher = require('../models/Teacher');
const { v4: uuid } = require('uuid');
const mongoose = require('mongoose');
const db = mongoose.connection;

const getTeachers = () => {
  return Teacher.find({})
}

const makeNewStudio = (data) => {
  const newStudio = {
    "studioName": data.name,
    "studioId": uuid(),
    "location": data.location,
    "size": 0,
    "days": data.days,
    "students": []
  }

  return newStudio;
}

const addStudio = (teacherName, data) => {
  const query = { teacherName: teacherName },
        studio = makeNewStudio(data);

  Teacher.findOne(query)
    .exec()
    .then(teacher => {
      teacher.studios.push(studio);
      teacher.save();
      return;
    })
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

const getIndex = (studentId) => {
  const pipeline = {
    '$project': {
      'results': {
        '$indexOfArray':
          [ '$studios.students.studentId', studentId ]
      }
    }
  }

  const options = {
    $sort: {
      'results': -1
    }
  }

  return db.collection('products').aggregate([ pipeline, options ]).toArray();
}

const makeNewAssignment = (data) => {
  const newAssignment = {
    'title': data.title,
    'assignmentId': uuid(),
    'tempo': data.tempo,
    'dueDate': data.dueDate,
    'completed': false,
    'notes': data.notes
  }

  return newAssignment;
}

const addAssignment = (studentId, data) => {

  // find the student by calling aggregate with studentId
  // get the student's index in the array
  // push the result of makeNewAssignment(data) to the
  // assignments array at student's index

  // const query = { 'results.question_id': studentId },
  //       assignment = makeNewAssignment(data),
  //       search = await getIndex(questionId),
  //       index = search[0].results;

  // Teacher.findOne(query)
  //   .exec()
  //   .then(teacher => {
  //     teacher.studios.students[index].push(assignment);
  //     teacher.save();
  //     return;
  //   });

}

module.exports = {
  getTeachers, addStudio, addStudent, addAssignment
};