const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudioSchema = new Schema({
  studioName: String,
  studioId: String,
  location: String,
  days: [],
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'student'
  }]
});

StudioSchema.virtual('size').get(function() {
  return this.students.length;
});

const Studio = mongoose.model('studio', StudioSchema);

module.exports = {
  StudioSchema, Studio
};