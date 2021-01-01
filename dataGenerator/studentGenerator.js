const faker = require('faker');
const fs = require('fs');

const writeStudents = fs.createWriteStream('students.json');

const writeDummyData = (writer, encoding, callback) => {
  let i = 1;
  const write = () => {
    let ok = true;
    do {
      console.log(i)
      i -= 1;

      const studentMaker = () => {
        let students = [];

        for (let j = 0; )

        students.push(student);
      }

      const data = JSON.stringify(studentMaker());

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }

  write()
}

writeDummyData(writeAssignments, 'utf-8', () => {writeAssignments.end()});