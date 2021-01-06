const mongooe = require('mongoose');
const Schema = mongoose.Schema;

const Studio = new Schema({
  studioName: String,
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }]
})