const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'location': String,
  'size': Number,
  'days': [
    {
      type: String,
      enum: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    }
  ],
  'students': [studentSchema]
})

studioSchema.pre('validate', function(next) {
  this.size = this.students.length;
  next();
});

const Studio = mongoose.model('Studio', studioSchema);