const mongoose = require('mongoose');
const faker = require('faker');
const Teacher = require('./models/Teacher');
const Studio = require('./models/Studio');
const Student = require('./models/Student');

mongoose.connect('mongodb://localhost/mvp_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .once('open', () => console.log('Connected to write...'))
  .on('error', err => {
    console.warn('ERROR:', err);
  });

const writeSeeds = () => {

  // teacher
  const gordon = new Teacher({ teacherName: 'Gordon Gest' });

  // studios
  const hehs = new Studio({ studioName: 'HEHS', location: 'Hoffman Estates, IL', days: [ 'Wednesday' ] });
  const northcentral = new Studio({ studioName: 'North Central College', location: 'Naperville, IL', days: [ 'Friday' ] });
  const depaul = new Studio({ studioName: 'DePaul CMD', location: 'Chicago, IL', days: [ 'Thursday' ] });
  const mic = new Studio({ studioName: 'Music Institute of Chicago', location: 'Evanston, IL', days: [ 'Sunday' ] });

  // students
  const jackie = new Student({
    studentName: 'Jackie',
    age: 17,
    level: 'Lower Intermediate',
    goals: [
      {
        goalTitle: 'Airstream',
        goalBody: 'Build consistency in blowing through musical passages'
      }
    ],
    instructorNotes: [
      {
        body: 'Very diligent worker; benefits greatly from regular positive encouragement'
      }
    ]
  });

  const grant = new Student({
    studentName: 'Grant',
    age: 15,
    level: 'Lower Intermediate',
    goals: [
      {
        goalTitle: 'Embouchure',
        goalBody: 'Keep corners in, chin back, don\'t bunch at the bottom'
      }
    ],
    instructorNotes: [
      {
        body: 'Very intelligent but not very focused; technique is limited'
      }
    ]
  });

  const cora = new Student({
    studentName: 'Cora',
    age: 19,
    level: 'Upper Intermediate',
    goals: [
      {
        goalTitle: 'Technique',
        goalBody: 'Keep fingers close to the body and curved'
      }
    ],
    instructorNotes: [
      {
        body: 'Ahead of the curve, but still has some work to do on fundamentals'
      }
    ]
  });

  const rich = new Student({
    studentName: 'Rich',
    age: 21,
    level: 'Advanced',
    goals: [
      {
        goalTitle: 'Extended techniques',
        goalBody: 'Work on achieving multiphonics, extended range, and articulation effects'
      }
    ],
    instructorNotes: [
      {
        body: 'Skilled but lazy'
      }
    ]
  });

  const sam = new Student({
    studentName: 'Sam',
    age: 14,
    level: 'Beginner',
    goals: [
      {
        goalTitle: 'Articulation',
        goalBody: 'Concentrate on making the lightest possible contact with the reed'
      }
    ],
    instructorNotes: [
      {
        body: 'Often late, often unprepared, needs strong guidance towards building good habits'
      }
    ]
  });


  gordon.studios.push(hehs);
  gordon.studios.push(mic);
  gordon.studios.push(depaul);
  gordon.studios.push(mic);

  hehs.students.push(jackie);
  jackie.studio = hehs;

  hehs.students.push(sam);
  sam.studio = hehs;

  mic.students.push(grant);
  grant.studio = mic;

  northcentral.students.push(cora)
  cora.studio = northcentral;

  depaul.students.push(rich);
  rich.studio = depaul;

  jackie.assignments.push({
    title: 'Rose Etude 10',
    tempo: 84,
    dueDate: '01/31/21',
    notes: 'extend phrases as much as you can',
    completed: false
  });

  grant.assignments.push({
    title: 'Ferling Etude 14',
    tempo: 112,
    dueDate: '01/24/21',
    notes: 'keep chin in, corners up',
    completed: false
  });

  cora.assignments.push({
    title: 'Creston Mvt I',
    tempo: 126,
    dueDate: '01/24/21',
    notes: 'learn up to measure 98',
    completed: false
  });

  rich.assignments.push({
    title: 'Balafon',
    tempo: 60,
    dueDate: '01/17/21',
    notes: 'solidify the multiphonics from mm 16 to mm 48',
    completed: false
  })


  gordon.save();

  hehs.save();
  mic.save();
  northcentral.save();
  depaul.save();

  jackie.save();
  grant.save();
  cora.save();
  rich.save();
  sam.save();

}

writeSeeds();