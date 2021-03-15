const { nanoid } = require('nanoid');

module.exports = {
  makeNewStudio(data) {
    const newStudio = {
      "studioName": data.studioName,
      "studioId": nanoid(),
      "location": data.location,
      "size": 0,
      "days": data.days,
      "students": []
    }

    return newStudio;
  },

  makeNewStudent(data) {
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
  },

  makeNewAssignment(data) {
    const newAssignment = {
      'title': data.title,
      'tempo': Number(data.tempo),
      'dueDate': data.dueDate,
      'completed': false,
      'notes': data.notes
    }

    return newAssignment;
  }
};