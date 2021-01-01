const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'tempo': Number,
  'dueDate': Date,
  'completed': {
    type: Boolean,
    required: true
  },
  'notes': String
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = { assignmentSchema, Assignment }