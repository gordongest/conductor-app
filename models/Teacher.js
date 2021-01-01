const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'studios': [studioSchema],
  
})

const Teacher = mongoose.model('Teacher', teacherSchema);