const faker = require('faker');
const fs = require('fs');

const writeAssignments = fs.createWriteStream('assignments.json');

const writeDummyData = (writer, encoding, callback) => {
  let i = 1;
  const write = () => {
    let ok = true;
    do {
      console.log(i)
      i -= 1;

      const assignmentMaker = () => {
        let assignments = [];
        let randomNum = Math.floor(Math.random() * Math.floor(5));
        let randomTempo = Math.floor(Math.random() * (144 - 60 + 1) + 60);

        for (let i = 0; i < randomNum; i++) {
          let assignment = {
            'name': faker.lorem.slug(),
            'tempo': randomTempo,
            'dueDate': faker.date.future(),
            'completed': faker.random.boolean(),
            'notes': faker.lorem.sentence()
          }
          assignments.push(assignment);
        }

        return assignments;
      }

      const data = JSON.stringify(assignmentMaker());

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