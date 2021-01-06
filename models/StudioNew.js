const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudioSchema = new Schema({
  studioName: String,
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }]
});

const Studio = mongoose.model('studio', StudioSchema);

module.exports = Studio;