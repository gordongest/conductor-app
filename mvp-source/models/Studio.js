const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = require('./Student')

const StudioSchema = new Schema({
  'studioName': String,
  'studioId': String,
  'location': String,
  'days': [],
  'students': []
})

StudioSchema.virtual('size').get(function() {
  return this.students.length;
});

module.exports = StudioSchema;