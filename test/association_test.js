const assert = require('assert');
const Teacher = require('../database/models/Teacher');
const { Studio } = require('../database/models/Studio');
const Student = require('../database/models/Student');

describe('Associations', () => {
  let Gordon, HEHS, Jackie;

  beforeEach(done => {
    Gordon = new Teacher({ teacherName: 'Gordon' });
    HEHS = new Studio({ studioName: 'HEHS', location: 'Hoffman Estates, IL', days: [ 'Wednesday' ] });
    Jackie = new Student({ studentName: 'Jackie' });


    Gordon.studios.push(HEHS);
    HEHS.students.push(Jackie);
    Jackie.studio = HEHS;
    Jackie.assignments.push({
      title: 'Rose Etude 10',
      tempo: 84,
      dueDate: '01/31/21',
      notes: 'keep chin in, corners up',
      completed: false
    });

    Promise.all([Gordon.save(), HEHS.save(), Jackie.save()])
      .then(() => done());
  });

  it('saves a relation between a teacher and studio', done => {
    Teacher.findOne({ teacherName: 'Gordon' })
      .populate('studios')
      .then((teacher) => {
        assert(teacher.studios[0].studioName === "HEHS");
        done();
      });
  });

  it('saves a full relation graph', done => {
    Teacher.findOne({ teacherName: 'Gordon' })
      .populate({
        path: 'studios',
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
        teacher.studios[0].students[0].assignments.push(assignment);
        return teacher.save();
      })
      .then(teacher => {
        assert(teacher.studios[0].students[0].assignments.length === 2);
        assert(teacher.teacherName === 'Gordon');
        assert(teacher.studios[0].studioName === 'HEHS');
        assert(teacher.studios[0].students[0].studentName === 'Jackie');
        done();
      });
  });
});