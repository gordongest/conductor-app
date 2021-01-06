const mongoose = require('mongoose');
const assert = require('assert');
const Teacher = require('../models/TeacherNew');
const Studio = require('../models/StudioNew');
const Student = require('../models/StudentNew');

describe('Associations', ()=> {

  let gordon, hehs, jackie;

  beforeEach((done) => {
    gordon = new Teacher({ teacherName: 'Gordon' });
    hehs = new Studio({ studioName: 'HEHS', location: 'Hoffman Estates, IL', days: [ 'Wednesday' ] });
    jackie = new Student({ studentName: 'Jackie' });

    gordon.newStudios.push(hehs);
    hehs.students.push(jackie);
    jackie.studio = hehs;
    jackie.assignments.push({
      title: 'Rose Etude 10',
      tempo: 84,
      dueDate: '01/31/21',
      notes: 'keep chin in, corners up',
      completed: false
    });

    Promise.all([gordon.save(), hehs.save(), jackie.save()])
      .then(() => done());
  });

  it('saves a relation between a teacher and studio', (done) => {
    Teacher.findOne({ teacherName: 'Gordon' })
      .populate('newStudios')
      .then((teacher) => {
        assert(teacher.newStudios[0].studioName === "HEHS");
        done();
      })
  });

  it('saves a full relation graph', done => {
    Teacher.findOne({ teacherName: 'Gordon' })
      .populate({
        path: 'newStudios',
        populate: {
          path: 'students',
          model: 'student',
          populate: 'assignments'
        }
      })
      .then(teacher => {
        const assignment = {
          title: 'Rose Etude 9',
          tempo: 112,
          dueDate: '01/24/21',
          notes: 'blow across technical passages',
          completed: false
        }
        console.log(teacher.newStudios[0].students[0]);
        teacher.newStudios[0].students[0].assignments.push(assignment);
        return teacher.save();
      })
      .then(teacher => {
        console.log(teacher.newStudios[0].students[0]);
        assert(teacher.newStudios[0].students[0].assignments.length === 2);
        assert(teacher.teacherName === 'Gordon');
        assert(teacher.newStudios[0].studioName === 'HEHS');
        assert(teacher.newStudios[0].students[0].studentName === 'Jackie');
        done();
      })
  })

});