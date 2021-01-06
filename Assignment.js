const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  'title': String,
  'assignmentId': String,
  'tempo': Number,
  'dueDate': String,
  'completed': Boolean,
  'notes': String
});

module.exports = AssignmentSchema;