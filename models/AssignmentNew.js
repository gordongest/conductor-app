const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  title: String,
  tempo: Number,
  dueDate: String,
  completed: Boolean,
  notes: String,
  assignmentId: String
});

module.exports = AssignmentSchema;